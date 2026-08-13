import { useMemo, useState } from 'react'
import { vokabular, gesamtzahlVokabeln } from '../vokabular'

interface Props {
  onZurueck: () => void
}

export default function WortschatzSeite({ onZurueck }: Props) {
  const [gruppeId, setGruppeId] = useState<string>('alle')
  const [suche, setSuche] = useState('')

  const q = suche.trim().toLowerCase()

  // Sichtbare Gruppen nach Filter + Suche bestimmen.
  const gruppen = useMemo(() => {
    return vokabular
      .filter((g) => gruppeId === 'alle' || g.id === gruppeId)
      .map((g) => ({
        ...g,
        eintraege: q
          ? g.eintraege.filter(
              (e) =>
                e.wort.toLowerCase().includes(q) ||
                e.bedeutung.toLowerCase().includes(q) ||
                e.beispiel.toLowerCase().includes(q),
            )
          : g.eintraege,
      }))
      .filter((g) => g.eintraege.length > 0)
  }, [gruppeId, q])

  const treffer = gruppen.reduce((s, g) => s + g.eintraege.length, 0)

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
          Verben, Adjektive, Nomen, Konnektoren, Redemittel und Redewendungen für sicheres,
          natürliches Sprechen — vom Alltagsgespräch bis zur Diskussion. Nach Wortart und Anlass
          gruppiert, damit du gezielt lernen kannst.
        </p>
      </header>

      {/* Suche */}
      <div className="mb-4">
        <label className="block">
          <span className="sr-only">Wortschatz durchsuchen</span>
          <input
            type="search"
            value={suche}
            onChange={(e) => setSuche(e.target.value)}
            placeholder="Suchen … (Wort, Bedeutung oder Beispiel)"
            className="w-full rounded-md border border-ink/15 bg-white/70 px-3 py-2 text-[0.95rem] text-ink placeholder:text-ink/35 focus:border-bordeaux"
          />
        </label>
      </div>

      {/* Gruppen-Filter */}
      <div className="mb-6 flex flex-wrap gap-1.5">
        <FilterChip aktiv={gruppeId === 'alle'} onClick={() => setGruppeId('alle')}>
          Alle
        </FilterChip>
        {vokabular.map((g) => (
          <FilterChip key={g.id} aktiv={gruppeId === g.id} onClick={() => setGruppeId(g.id)}>
            {g.titel}
          </FilterChip>
        ))}
      </div>

      <p className="mb-4 text-xs text-ink/50">
        {q ? `${treffer} Treffer` : `${gesamtzahlVokabeln} Einträge`}
      </p>

      {gruppen.length === 0 && (
        <p className="rounded-lg border border-ink/10 bg-white/60 p-6 text-center text-ink/60">
          Keine Einträge gefunden. Versuche einen anderen Suchbegriff.
        </p>
      )}

      <div className="space-y-8">
        {gruppen.map((g) => (
          <section key={g.id}>
            <div className="mb-3 border-b border-ink/10 pb-2">
              <h2 className="font-serif text-xl font-semibold text-ink">{g.titel}</h2>
              <p className="mt-0.5 text-sm text-ink/60">{g.beschreibung}</p>
            </div>
            <ul className="space-y-2.5">
              {g.eintraege.map((e, i) => (
                <li key={i} className="rounded-lg border border-ink/10 bg-white/70 p-3.5 sm:p-4">
                  <p className="font-serif text-[1.1rem] font-semibold text-bordeaux">{e.wort}</p>
                  <p className="mt-1 text-[0.95rem] text-ink/85">{e.bedeutung}</p>
                  <p className="mt-1.5 border-l-2 border-ink/15 pl-3 font-serif text-[1rem] italic text-ink/75">
                    {e.beispiel}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
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
