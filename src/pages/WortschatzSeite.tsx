import { useMemo, useState } from 'react'
import { dimensionen } from '../vokabular'

interface Props {
  onZurueck: () => void
}

export default function WortschatzSeite({ onZurueck }: Props) {
  const [dimensionId, setDimensionId] = useState<string>(dimensionen[0].id)
  const [gruppeId, setGruppeId] = useState<string>('alle')
  const [suche, setSuche] = useState('')

  const dimension = dimensionen.find((d) => d.id === dimensionId) ?? dimensionen[0]
  const q = suche.trim().toLowerCase()

  // Beim Wechsel der Dimension die Gruppenauswahl zurücksetzen.
  const waehleDimension = (id: string) => {
    setDimensionId(id)
    setGruppeId('alle')
  }

  const gruppen = useMemo(() => {
    return dimension.gruppen
      .filter((g) => gruppeId === 'alle' || g.id === gruppeId)
      .map((g) => ({
        ...g,
        eintraege: q
          ? g.eintraege.filter(
              (e) =>
                e.de.toLowerCase().includes(q) ||
                e.en.toLowerCase().includes(q) ||
                (e.beispiel ?? '').toLowerCase().includes(q),
            )
          : g.eintraege,
      }))
      .filter((g) => g.eintraege.length > 0)
  }, [dimension, gruppeId, q])

  const treffer = gruppen.reduce((s, g) => s + g.eintraege.length, 0)
  const gesamtDimension = dimension.gruppen.reduce((s, g) => s + g.eintraege.length, 0)

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
        <p className="text-xs font-medium uppercase tracking-wide text-bordeaux">Wortschatz</p>
        <h1 className="mt-1 font-serif text-3xl font-semibold tracking-tight text-ink">
          Wortschatz zum Sprechen (C1–C2)
        </h1>
        <p className="mt-2 max-w-prose text-ink/70">
          Deutsch mit englischer Übersetzung — für sicheres, natürliches Sprechen vom
          Alltagsgespräch bis zur Diskussion. Wähle die Ordnung <strong>nach Wortart</strong> oder{' '}
          <strong>nach Thema</strong>.
        </p>
      </header>

      {/* Dimension: Wortart / Thema */}
      <div
        className="mb-4 inline-flex rounded-lg border border-ink/15 bg-white/60 p-0.5"
        role="tablist"
        aria-label="Ordnung des Wortschatzes"
      >
        {dimensionen.map((d) => (
          <button
            key={d.id}
            role="tab"
            aria-selected={dimensionId === d.id}
            onClick={() => waehleDimension(d.id)}
            className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
              dimensionId === d.id
                ? 'bg-bordeaux text-white'
                : 'text-ink/65 hover:text-bordeaux'
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* Suche */}
      <div className="mb-4">
        <label className="block">
          <span className="sr-only">Wortschatz durchsuchen</span>
          <input
            type="search"
            value={suche}
            onChange={(e) => setSuche(e.target.value)}
            placeholder="Suchen … (Deutsch, English oder Beispiel)"
            className="w-full rounded-md border border-ink/15 bg-white/70 px-3 py-2 text-[0.95rem] text-ink placeholder:text-ink/35 focus:border-bordeaux"
          />
        </label>
      </div>

      {/* Gruppen-Filter */}
      <div className="mb-6 flex flex-wrap gap-1.5">
        <FilterChip aktiv={gruppeId === 'alle'} onClick={() => setGruppeId('alle')}>
          Alle
        </FilterChip>
        {dimension.gruppen.map((g) => (
          <FilterChip key={g.id} aktiv={gruppeId === g.id} onClick={() => setGruppeId(g.id)}>
            {g.titel}
          </FilterChip>
        ))}
      </div>

      <p className="mb-4 text-xs text-ink/50">
        {q ? `${treffer} Treffer` : `${gesamtDimension} Einträge · ${dimension.label.toLowerCase()}`}
      </p>

      {gruppen.length === 0 && (
        <p className="rounded-lg border border-ink/10 bg-white/60 p-6 text-center text-ink/60">
          Keine Einträge gefunden. Versuche einen anderen Suchbegriff.
        </p>
      )}

      <div className="space-y-8">
        {gruppen.map((g) => {
          const hatBeispiel = g.eintraege.some((e) => e.beispiel)
          return (
            <section key={g.id}>
              <div className="mb-3 border-b border-ink/10 pb-2">
                <h2 className="font-serif text-xl font-semibold text-ink">{g.titel}</h2>
                <p className="mt-0.5 text-sm text-ink/60">{g.beschreibung}</p>
              </div>

              <div className="overflow-x-auto rounded-lg border border-ink/10 bg-white/70">
                <table className="w-full border-collapse text-left text-[0.95rem]">
                  <thead>
                    <tr className="border-b border-ink/10 text-[0.7rem] uppercase tracking-wide text-ink/50">
                      <th className="px-3 py-2 font-semibold sm:px-4">Deutsch</th>
                      <th className="px-3 py-2 font-semibold sm:px-4">English</th>
                      {hatBeispiel && (
                        <th className="hidden px-3 py-2 font-semibold sm:table-cell sm:px-4">
                          Beispiel
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {g.eintraege.map((e, i) => (
                      <tr
                        key={i}
                        className="border-b border-ink/5 align-top last:border-0 hover:bg-bordeaux-tint/25"
                      >
                        <td className="px-3 py-2.5 font-medium text-bordeaux sm:px-4">{e.de}</td>
                        <td className="px-3 py-2.5 text-ink/80 sm:px-4">{e.en}</td>
                        {hatBeispiel && (
                          <td className="hidden px-3 py-2.5 font-serif italic text-ink/65 sm:table-cell sm:px-4">
                            {e.beispiel}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

function FilterChip({
  aktiv,
  onClick,
  children,
}: {
  aktiv: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={aktiv}
      className={`rounded-full border px-3 py-1 text-sm transition-colors ${
        aktiv
          ? 'border-bordeaux bg-bordeaux text-white'
          : 'border-ink/15 bg-white/60 text-ink/70 hover:border-bordeaux/40 hover:text-bordeaux'
      }`}
    >
      {children}
    </button>
  )
}
