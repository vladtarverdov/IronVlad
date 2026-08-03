interface Props {
  /** Wert zwischen 0 und 1. */
  wert: number
  label?: string
  className?: string
}

// Schlichter, akademischer Fortschrittsbalken.
export default function Fortschrittsbalken({ wert, label, className = '' }: Props) {
  const prozent = Math.round(Math.min(1, Math.max(0, wert)) * 100)
  return (
    <div className={className}>
      {label && (
        <div className="mb-1 flex items-baseline justify-between text-xs text-ink/60">
          <span>{label}</span>
          <span className="font-mono tabular-nums">{prozent}%</span>
        </div>
      )}
      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-ink/10"
        role="progressbar"
        aria-valuenow={prozent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-bordeaux transition-[width] duration-500 ease-out"
          style={{ width: `${prozent}%` }}
        />
      </div>
    </div>
  )
}
