import { useState } from 'react'
import type { Uebung } from '../types'
import type { Bewertung } from '../useProgress'
import TypBadge from './TypBadge'

interface Props {
  uebung: Uebung
  nummer: number
  bewertung?: Bewertung
  onBewerte: (b: Bewertung) => void
  onReset: () => void
}

const BEWERTUNGEN: { wert: Bewertung; label: string; klasse: string }[] = [
  { wert: 'richtig', label: 'Richtig', klasse: 'border-emerald-600/40 text-emerald-800 hover:bg-emerald-50' },
  { wert: 'teilweise', label: 'Teilweise', klasse: 'border-amber-600/40 text-amber-800 hover:bg-amber-50' },
  { wert: 'falsch', label: 'Falsch', klasse: 'border-bordeaux/40 text-bordeaux hover:bg-bordeaux-tint' },
]

export default function UebungCard({ uebung, nummer, bewertung, onBewerte, onReset }: Props) {
  const [antwort, setAntwort] = useState('')
  const [loesungOffen, setLoesungOffen] = useState(false)

  return (
    <article className="rounded-lg border border-ink/10 bg-white/70 p-4 shadow-sm sm:p-5">
      <header className="mb-3 flex items-center gap-2">
        <span className="font-mono text-xs text-ink/40 tabular-nums">
          {String(nummer).padStart(2, '0')}
        </span>
        <TypBadge typ={uebung.typ} />
        {bewertung && (
          <span
            className={`ml-auto rounded-full px-2 py-0.5 text-[0.68rem] font-medium ${
              bewertung === 'richtig'
                ? 'bg-emerald-100 text-emerald-800'
                : bewertung === 'teilweise'
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-bordeaux-tint text-bordeaux'
            }`}
          >
            {bewertung === 'richtig' ? 'Richtig' : bewertung === 'teilweise' ? 'Teilweise' : 'Falsch'}
          </span>
        )}
      </header>

      <p className="prose-de font-serif text-[1.05rem] text-ink">{uebung.aufgabe}</p>

      <p className="mt-1.5 text-sm text-ink/55">
        <span className="font-medium text-ink/70">Hinweis:</span> {uebung.hinweis}
      </p>

      <label className="mt-3 block">
        <span className="sr-only">Ihre Antwort</span>
        <textarea
          value={antwort}
          onChange={(e) => setAntwort(e.target.value)}
          rows={2}
          placeholder="Ihre Antwort …"
          className="w-full resize-y rounded-md border border-ink/15 bg-parchment px-3 py-2 text-[0.95rem] leading-relaxed text-ink placeholder:text-ink/30 focus:border-bordeaux"
        />
      </label>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setLoesungOffen((v) => !v)}
          className="rounded-md bg-bordeaux px-3.5 py-1.5 text-sm font-medium text-white transition-colors hover:bg-bordeaux-light"
        >
          {loesungOffen ? 'Lösung verbergen' : 'Lösung prüfen'}
        </button>
      </div>

      {loesungOffen && (
        <div className="mt-3 space-y-3">
          <div className="rounded-md border-l-2 border-bordeaux bg-bordeaux-tint/50 px-3 py-2.5">
            <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-bordeaux-dark">
              Musterlösung
            </p>
            <p className="prose-de mt-1 text-ink">{uebung.musterloesung}</p>
          </div>

          <div>
            <p className="mb-1.5 text-xs text-ink/55">Selbstbewertung — wie war Ihre Antwort?</p>
            <div className="flex flex-wrap items-center gap-2">
              {BEWERTUNGEN.map((b) => (
                <button
                  key={b.wert}
                  type="button"
                  onClick={() => onBewerte(b.wert)}
                  aria-pressed={bewertung === b.wert}
                  className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${b.klasse} ${
                    bewertung === b.wert ? 'ring-2 ring-offset-1 ring-ink/20' : ''
                  }`}
                >
                  {b.label}
                </button>
              ))}
              {bewertung && (
                <button
                  type="button"
                  onClick={onReset}
                  className="ml-1 text-xs text-ink/50 underline underline-offset-2 hover:text-ink"
                >
                  Bewertung zurücksetzen
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  )
}
