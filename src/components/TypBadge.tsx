import type { UebungsTyp } from '../types'

// Kurzform der Übungstypen für die Mono-Badges.
const KURZ: Record<UebungsTyp, string> = {
  Transformation: 'TRAFO',
  Fehlerkorrektur: 'FEHLER',
  Lückentext: 'LÜCKE',
  Paraphrase: 'PARA',
  'Freie Produktion': 'FREI',
}

export default function TypBadge({ typ }: { typ: UebungsTyp }) {
  return (
    <span
      className="inline-block rounded border border-ink/15 bg-parchment px-1.5 py-0.5 font-mono text-[0.65rem] font-medium uppercase tracking-wider text-ink/70"
      title={typ}
    >
      {KURZ[typ]}
    </span>
  )
}
