import { useEffect, useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

// Registriert den Service Worker und zeigt einen dezenten Hinweis, sobald die
// App vollständig offline einsatzbereit ist bzw. eine neue Version bereitsteht.
export default function PwaStatus() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW()

  const [sichtbar, setSichtbar] = useState(false)

  useEffect(() => {
    if (offlineReady || needRefresh) setSichtbar(true)
  }, [offlineReady, needRefresh])

  // Den „offline bereit"-Hinweis nach einigen Sekunden automatisch ausblenden.
  useEffect(() => {
    if (offlineReady && !needRefresh) {
      const t = setTimeout(() => schliessen(), 6000)
      return () => clearTimeout(t)
    }
  }, [offlineReady, needRefresh])

  function schliessen() {
    setSichtbar(false)
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  if (!sichtbar) return null

  return (
    <div
      role="status"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-sm rounded-lg border border-ink/15 bg-white/95 p-3 shadow-lg backdrop-blur sm:left-auto sm:right-4 sm:mx-0"
    >
      {needRefresh ? (
        <div className="flex items-center gap-3">
          <p className="flex-1 text-sm text-ink/80">
            Eine neue Version ist verfügbar.
          </p>
          <button
            type="button"
            onClick={() => updateServiceWorker(true)}
            className="rounded-md bg-bordeaux px-3 py-1.5 text-sm font-medium text-white hover:bg-bordeaux-light"
          >
            Aktualisieren
          </button>
          <button
            type="button"
            onClick={schliessen}
            aria-label="Schließen"
            className="text-ink/40 hover:text-ink"
          >
            ✕
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <span aria-hidden className="text-lg">✓</span>
          <p className="flex-1 text-sm text-ink/80">
            App ist offline einsatzbereit — auch ohne WLAN nutzbar.
          </p>
          <button
            type="button"
            onClick={schliessen}
            aria-label="Schließen"
            className="text-ink/40 hover:text-ink"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  )
}
