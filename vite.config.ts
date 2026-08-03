import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // Service Worker aktualisiert sich selbst; neue Inhalte werden beim
      // nächsten Start übernommen. Für einen reinen Offline-Trainer ideal.
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon-32x32.png', 'apple-touch-icon.png'],
      manifest: {
        name: 'Deutsch-Grammatik-Trainer',
        short_name: 'Grammatik',
        description:
          'Offline-Trainer für deutsche Grammatik auf C1–C2-Niveau: Regeln, Beispiele, Anwendung und Übungen.',
        lang: 'de',
        dir: 'ltr',
        theme_color: '#7a1f2b',
        background_color: '#faf8f4',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '.',
        scope: '.',
        categories: ['education'],
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'pwa-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Alle Build-Assets vorab cachen → vollständige Offline-Nutzung.
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff,woff2}'],
        // SPA-Fallback: jede Navigation liefert index.html aus dem Cache.
        navigateFallback: 'index.html',
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },
      // Auch im Dev-Modus prüfbar (npm run dev), damit sich das PWA-Verhalten
      // ohne Produktions-Build testen lässt.
      devOptions: {
        enabled: false,
      },
    }),
  ],
})
