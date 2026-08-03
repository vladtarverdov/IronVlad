// Dauerhafter Hinweis-Banner zu typischen Fallstricken im gesprochenen Deutsch.
export default function HinweisBanner() {
  return (
    <aside
      className="border-y border-bordeaux/20 bg-bordeaux-tint/60"
      aria-label="Hinweise für das Sprechen"
    >
      <div className="mx-auto max-w-5xl px-4 py-2.5 sm:px-6">
        <p className="text-[0.78rem] leading-relaxed text-bordeaux-dark sm:text-sm">
          <span className="font-semibold uppercase tracking-wide">Beim Sprechen achten auf:</span>{' '}
          <span className="text-ink/80">
            (1) Anglizismen vermeiden, wo deutsche Wörter existieren · (2) keine doppelten
            Intensivierer · (3) keine defensiven Satzeröffnungen wie „Das stimmt, dass …“.
          </span>
        </p>
      </div>
    </aside>
  )
}
