import { module } from '../data'
import type { ProgressApi } from '../useProgress'
import Fortschrittsbalken from '../components/Fortschrittsbalken'

interface Props {
  progress: ProgressApi
  onOeffne: (themaId: string) => void
}

export default function Startseite({ progress, onOeffne }: Props) {
  const g = progress.gesamt

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      <header className="mb-8">
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Deutsch-Grammatik-Trainer
        </h1>
        <p className="mt-2 max-w-prose text-ink/70">
          Systematisches Training für die Niveaustufen C1–C2. Grammatik zuerst, dann Beispiele,
          Anwendung und Übungen — in dieser Reihenfolge, ganz ohne Rätselraten.
        </p>

        <div className="mt-6 rounded-lg border border-ink/10 bg-white/60 p-4 sm:p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-serif text-lg font-semibold text-ink">Gesamtfortschritt</h2>
            <p className="font-mono text-sm text-ink/60 tabular-nums">
              {g.bearbeitet} / {g.gesamt} Übungen · {g.punkte.toLocaleString('de-DE')} Punkte
            </p>
          </div>
          <Fortschrittsbalken wert={g.fortschritt} className="mt-3" />
          {g.bearbeitet > 0 && (
            <div className="mt-3 flex items-center justify-between text-xs text-ink/55">
              <span>Trefferquote (bearbeitete Übungen): {Math.round(g.quote * 100)}%</span>
              <button
                type="button"
                onClick={() => {
                  if (
                    window.confirm(
                      'Wirklich den gesamten Fortschritt zurücksetzen? Das lässt sich nicht rückgängig machen.',
                    )
                  ) {
                    progress.resetAlles()
                  }
                }}
                className="text-bordeaux underline underline-offset-2 hover:text-bordeaux-dark"
              >
                Fortschritt zurücksetzen
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="space-y-10">
        {module.map((m) => (
          <section key={m.id}>
            <div className="mb-4 border-b border-ink/10 pb-2">
              <h2 className="font-serif text-xl font-semibold text-ink">{m.titel}</h2>
              <p className="mt-0.5 text-sm text-ink/60">{m.untertitel}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {m.themen.map((t) => {
                const s = progress.scoreFuerThema(t.id, t.uebungen.length)
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => onOeffne(t.id)}
                    className="group flex h-full flex-col rounded-lg border border-ink/10 bg-white/70 p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-bordeaux/30 hover:shadow-md"
                  >
                    <h3 className="font-serif text-lg font-semibold text-ink group-hover:text-bordeaux">
                      {t.titel}
                    </h3>
                    <p className="mt-1 flex-1 text-sm leading-relaxed text-ink/65">
                      {t.kurzbeschreibung}
                    </p>
                    <div className="mt-4">
                      <Fortschrittsbalken
                        wert={s.fortschritt}
                        label={`${s.bearbeitet}/${s.gesamt} Übungen`}
                      />
                    </div>
                  </button>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
