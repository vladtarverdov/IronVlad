import { useCallback, useEffect, useState } from 'react'
import { module } from './data'

// Bewertung einer einzelnen Übung durch Selbsteinschätzung.
export type Bewertung = 'richtig' | 'teilweise' | 'falsch'

// Persistierter Zustand: pro Übungsschlüssel eine Bewertung.
// Schlüssel: `${themaId}:${uebungsIndex}`
export type ProgressState = Record<string, Bewertung>

const STORAGE_KEY = 'dgt-progress-v1'

function ladeProgress(): ProgressState {
  try {
    const roh = localStorage.getItem(STORAGE_KEY)
    if (!roh) return {}
    const parsed = JSON.parse(roh)
    if (parsed && typeof parsed === 'object') return parsed as ProgressState
    return {}
  } catch {
    return {}
  }
}

export function uebungsSchluessel(themaId: string, index: number): string {
  return `${themaId}:${index}`
}

// Punktwert einer Bewertung: richtig = 1, teilweise = 0,5, falsch = 0.
export function punkte(b: Bewertung): number {
  if (b === 'richtig') return 1
  if (b === 'teilweise') return 0.5
  return 0
}

export interface ThemaScore {
  bearbeitet: number
  gesamt: number
  punkte: number
  /** Anteil erreichter Punkte an bearbeiteten Übungen (0–1). */
  quote: number
  /** Anteil bearbeiteter Übungen am Thema (0–1). */
  fortschritt: number
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(() => ladeProgress())

  // Bei Änderung persistieren.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // localStorage nicht verfügbar (z. B. privater Modus) — App läuft trotzdem.
    }
  }, [state])

  const bewerte = useCallback((themaId: string, index: number, b: Bewertung) => {
    setState((prev) => ({ ...prev, [uebungsSchluessel(themaId, index)]: b }))
  }, [])

  const loescheBewertung = useCallback((themaId: string, index: number) => {
    setState((prev) => {
      const kopie = { ...prev }
      delete kopie[uebungsSchluessel(themaId, index)]
      return kopie
    })
  }, [])

  const resetAlles = useCallback(() => setState({}), [])

  const resetThema = useCallback((themaId: string, anzahl: number) => {
    setState((prev) => {
      const kopie = { ...prev }
      for (let i = 0; i < anzahl; i++) delete kopie[uebungsSchluessel(themaId, i)]
      return kopie
    })
  }, [])

  const scoreFuerThema = useCallback(
    (themaId: string, gesamt: number): ThemaScore => {
      let bearbeitet = 0
      let p = 0
      for (let i = 0; i < gesamt; i++) {
        const b = state[uebungsSchluessel(themaId, i)]
        if (b) {
          bearbeitet++
          p += punkte(b)
        }
      }
      return {
        bearbeitet,
        gesamt,
        punkte: p,
        quote: bearbeitet > 0 ? p / bearbeitet : 0,
        fortschritt: gesamt > 0 ? bearbeitet / gesamt : 0,
      }
    },
    [state],
  )

  // Gesamtwerte über alle Themen.
  const gesamt = (() => {
    let bearbeitet = 0
    let gesamtUebungen = 0
    let p = 0
    for (const m of module) {
      for (const t of m.themen) {
        gesamtUebungen += t.uebungen.length
        for (let i = 0; i < t.uebungen.length; i++) {
          const b = state[uebungsSchluessel(t.id, i)]
          if (b) {
            bearbeitet++
            p += punkte(b)
          }
        }
      }
    }
    return {
      bearbeitet,
      gesamt: gesamtUebungen,
      punkte: p,
      fortschritt: gesamtUebungen > 0 ? bearbeitet / gesamtUebungen : 0,
      quote: bearbeitet > 0 ? p / bearbeitet : 0,
    }
  })()

  return {
    state,
    bewerte,
    loescheBewertung,
    resetAlles,
    resetThema,
    scoreFuerThema,
    gesamt,
  }
}

export type ProgressApi = ReturnType<typeof useProgress>
