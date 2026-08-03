import { useEffect, useState } from 'react'
import { module } from './data'
import { useProgress } from './useProgress'
import HinweisBanner from './components/HinweisBanner'
import Startseite from './pages/Startseite'
import Themenseite from './pages/Themenseite'

// Sehr schlankes Hash-Routing (offline, ohne Router-Bibliothek):
//   #/            → Startseite
//   #/thema/<id>  → Themenseite
function leseHash(): string | null {
  const h = window.location.hash.replace(/^#\/?/, '')
  const m = h.match(/^thema\/(.+)$/)
  return m ? decodeURIComponent(m[1]) : null
}

export default function App() {
  const progress = useProgress()
  const [themaId, setThemaId] = useState<string | null>(() => leseHash())

  useEffect(() => {
    const onHash = () => setThemaId(leseHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const oeffne = (id: string) => {
    window.location.hash = `/thema/${encodeURIComponent(id)}`
    window.scrollTo({ top: 0 })
  }
  const zurueck = () => {
    window.location.hash = '/'
    window.scrollTo({ top: 0 })
  }

  const gefunden = themaId
    ? module
        .flatMap((m) => m.themen.map((t) => ({ modul: m, thema: t })))
        .find((e) => e.thema.id === themaId)
    : null

  return (
    <div className="flex min-h-screen flex-col">
      <HinweisBanner />
      <main className="flex-1">
        {gefunden ? (
          <Themenseite
            thema={gefunden.thema}
            modulTitel={gefunden.modul.titel}
            progress={progress}
            onZurueck={zurueck}
          />
        ) : (
          <Startseite progress={progress} onOeffne={oeffne} />
        )}
      </main>
      <footer className="border-t border-ink/10 py-6 text-center text-xs text-ink/40">
        Deutsch-Grammatik-Trainer · C1–C2 · vollständig offline · Fortschritt lokal gespeichert
      </footer>
    </div>
  )
}
