import { useEffect, useState } from 'react'
import { module } from './data'
import { useProgress } from './useProgress'
import HinweisBanner from './components/HinweisBanner'
import PwaStatus from './components/PwaStatus'
import Startseite from './pages/Startseite'
import Themenseite from './pages/Themenseite'
import WortschatzSeite from './pages/WortschatzSeite'

// Sehr schlankes Hash-Routing (offline, ohne Router-Bibliothek):
//   #/             → Startseite
//   #/wortschatz   → Wortschatzseite
//   #/thema/<id>   → Themenseite
type Route = { name: 'start' } | { name: 'wortschatz' } | { name: 'thema'; id: string }

function leseHash(): Route {
  const h = window.location.hash.replace(/^#\/?/, '')
  if (h === 'wortschatz') return { name: 'wortschatz' }
  const m = h.match(/^thema\/(.+)$/)
  if (m) return { name: 'thema', id: decodeURIComponent(m[1]) }
  return { name: 'start' }
}

export default function App() {
  const progress = useProgress()
  const [route, setRoute] = useState<Route>(() => leseHash())

  useEffect(() => {
    const onHash = () => setRoute(leseHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const navigiere = (hash: string) => {
    window.location.hash = hash
    window.scrollTo({ top: 0 })
  }
  const oeffne = (id: string) => navigiere(`/thema/${encodeURIComponent(id)}`)
  const zurueck = () => navigiere('/')
  const zuWortschatz = () => navigiere('/wortschatz')

  const gefunden =
    route.name === 'thema'
      ? module
          .flatMap((m) => m.themen.map((t) => ({ modul: m, thema: t })))
          .find((e) => e.thema.id === route.id)
      : null

  return (
    <div className="flex min-h-screen flex-col">
      <HinweisBanner />
      <main className="flex-1">
        {route.name === 'wortschatz' ? (
          <WortschatzSeite onZurueck={zurueck} />
        ) : gefunden ? (
          <Themenseite
            thema={gefunden.thema}
            modulTitel={gefunden.modul.titel}
            progress={progress}
            onZurueck={zurueck}
          />
        ) : (
          <Startseite progress={progress} onOeffne={oeffne} onWortschatz={zuWortschatz} />
        )}
      </main>
      <footer className="border-t border-ink/10 py-6 text-center text-xs text-ink/40">
        Deutsch-Grammatik-Trainer · C1–C2 · vollständig offline · Fortschritt lokal gespeichert
      </footer>
      <PwaStatus />
    </div>
  )
}
