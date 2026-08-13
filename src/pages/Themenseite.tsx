import { useState } from 'react'
import type { Thema } from '../types'
import type { ProgressApi } from '../useProgress'
import Fortschrittsbalken from '../components/Fortschrittsbalken'
import UebungCard from '../components/UebungCard'

type Tab = 'regeln' | 'beispiele' | 'anwendung' | 'uebungen'

const TABS: { id: Tab; label: string }[] = [
  { id: 'regeln', label: 'Regeln' },
  { id: 'beispiele', label: 'Beispiele' },
  { id: 'anwendung', label: 'Anwendung' },
  { id: 'uebungen', label: 'Übungen' },
]

interface Props {
  thema: Thema
  modulTitel: string
  progress: ProgressApi
  onZurueck: () => void
}

export default function Themenseite({ thema, modulTitel, progress, onZurueck }: Props) {
  const [tab, setTab] = useState<Tab>('regeln')
  const s = progress.scoreFuerThema(thema.id, thema.uebungen.length)

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
      <button
        type="button"
        onClick={onZurueck}
        className="mb-4 inline-flex items-center gap-1.5 text-sm text-ink/60 transition-colors hover:text-bordeaux"
      >
        <span aria-hidden>←</span> Zur Übersicht
      </button>

      <header className="mb-6">
        <p className="text-xs font-medium uppercase tracking-wide text-bordeaux">{modulTitel}</p>
        <h1 className="mt-1 font-serif text-3xl font-semibold tracking-tight text-ink">
          {thema.titel}
        </h1>
        <p className="mt-2 max-w-prose text-ink/70">{thema.kurzbeschreibung}</p>

        <div className="mt-4 rounded-lg border border-ink/10 bg-white/60 p-3">
          <div className="flex items-center justify-between text-xs text-ink/60">
            <span>
              Thema-Punktestand: {s.punkte.toLocaleString('de-DE')} · {s.bearbeitet}/{s.gesamt}{' '}
              Übungen bearbeitet
            </span>
            {s.bearbeitet > 0 && (
              <button
                type="button"
                onClick={() => {
                  if (window.confirm('Fortschritt für dieses Thema zurücksetzen?')) {
                    progress.resetThema(thema.id, thema.uebungen.length)
                  }
                }}
                className="text-bordeaux underline underline-offset-2 hover:text-bordeaux-dark"
              >
                Thema zurücksetzen
              </button>
            )}
          </div>
          <Fortschrittsbalken wert={s.fortschritt} className="mt-2" />
        </div>
      </header>

      {/* Tabs */}
      <div className="sticky top-0 z-10 -mx-4 bg-parchment/95 px-4 backdrop-blur sm:mx-0 sm:px-0">
        <nav
          className="flex gap-1 overflow-x-auto border-b border-ink/10 py-1"
          role="tablist"
          aria-label="Themenbereiche"
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`whitespace-nowrap rounded-t-md px-3.5 py-2 text-sm font-medium transition-colors ${
                tab === t.id
                  ? 'border-b-2 border-bordeaux text-bordeaux'
                  : 'border-b-2 border-transparent text-ink/55 hover:text-ink'
              }`}
            >
              {t.label}
              {t.id === 'uebungen' && (
                <span className="ml-1.5 font-mono text-[0.68rem] text-ink/40">
                  {thema.uebungen.length}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="py-6">
        {tab === 'regeln' && (
          <div className="space-y-4">
            {thema.grammatik.map((r, i) => (
              <div key={i} className="rounded-lg border border-ink/10 bg-white/70 p-4 sm:p-5">
                <h3 className="font-serif text-lg font-semibold text-ink">{r.titel}</h3>
                <p className="prose-de mt-1.5 text-ink/85">{r.erklaerung}</p>
                <div className="mt-3 rounded-md border-l-2 border-emerald-600/50 bg-emerald-50/60 px-3 py-2">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-emerald-800">
                    In einfachen Worten
                  </p>
                  <p className="prose-de mt-0.5 text-ink/85">{r.einfach}</p>
                </div>
                <p className="mt-3 rounded-md bg-ink/[0.04] px-3 py-2 font-serif text-[1.02rem] italic text-ink/90">
                  {r.beispiel}
                </p>
              </div>
            ))}
          </div>
        )}

        {tab === 'beispiele' && (
          <ul className="space-y-3">
            {thema.beispiele.map((b, i) => (
              <li key={i} className="rounded-lg border border-ink/10 bg-white/70 p-4">
                <p className="font-serif text-[1.1rem] leading-relaxed text-ink">„{b.satz}“</p>
                <p className="mt-1.5 text-sm text-ink/60">{b.hinweis}</p>
              </li>
            ))}
          </ul>
        )}

        {tab === 'anwendung' && (
          <div className="space-y-3">
            <p className="max-w-prose text-sm text-ink/60">
              So setzen Sie die Struktur im <strong className="text-ink/80">gesprochenen</strong>{' '}
              Deutsch souverän ein — mit Register-Hinweisen und typischen Fehlern.
            </p>
            <ul className="space-y-3">
              {thema.anwendung.map((a, i) => (
                <li
                  key={i}
                  className="flex gap-3 rounded-lg border border-ink/10 bg-white/70 p-4"
                >
                  <span className="mt-0.5 font-mono text-sm font-semibold text-bordeaux tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="prose-de text-ink/85">{a}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {tab === 'uebungen' && (
          <div className="space-y-4">
            <p className="max-w-prose text-sm text-ink/60">
              Schreiben Sie Ihre Antwort, prüfen Sie die Musterlösung und bewerten Sie sich selbst.
              Deutsch erlaubt Varianten — die Musterlösung ist ein <em>Maßstab</em>, keine einzige
              Wahrheit.
            </p>
            {thema.uebungen.map((u, i) => (
              <UebungCard
                key={i}
                uebung={u}
                nummer={i + 1}
                bewertung={progress.state[`${thema.id}:${i}`]}
                onBewerte={(b) => progress.bewerte(thema.id, i, b)}
                onReset={() => progress.loescheBewertung(thema.id, i)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
