# Deutsch-Grammatik-Trainer (C1–C2)

Eine statische, **vollständig offline** lauffähige Web-App zum Training der deutschen Grammatik
auf den Niveaustufen C1–C2. Kein externer API-Aufruf, keine Netzwerkabhängigkeit — alle Inhalte
sind fest im Code hinterlegt. Sprache der App und aller Inhalte: **Deutsch**.

## Installation & Start

Voraussetzung: Node.js ≥ 18.

```bash
npm install     # Abhängigkeiten installieren
npm run dev     # Entwicklungsserver starten (http://localhost:5173)
```

Weitere Befehle:

```bash
npm run build     # Produktions-Build nach dist/ (inkl. TypeScript-Prüfung)
npm run preview   # Produktions-Build lokal ansehen
```

## Aufbau

- **Stack:** Vite + React + TypeScript + Tailwind CSS, eine einzige SPA.
- **Fortschritt:** wird in `localStorage` gespeichert (Schlüssel `dgt-progress-v1`) und bleibt
  ohne Server erhalten. Reset ist pro Thema und für den Gesamtfortschritt möglich.
- **Drei Module** mit insgesamt 18 Themen; jedes Thema folgt der festen Reihenfolge
  **Grammatik → Beispiele → Anwendung → Übungen** (Grammatik zuerst, kein Discovery-Learning).

### Themenübersicht

- **Modul A — Verbmodi, Satzbau, Stil:** Passiv & Passiversatzformen · Konnektoren (C1) ·
  Konjunktiv II · Konjunktiv I & indirekte Rede · Subjektive Modalverben · Komplexe Relativsätze ·
  Nominalisierung
- **Modul B — Kompaktheit & Nuance:** Partizipialattribute · Funktionsverbgefüge · Modalpartikeln ·
  Wortbildung · Infinitiv- & Satzverkürzungen
- **Modul C — Register, Idiomatik, Wirkung:** Präpositionen & Kasus · Verben mit Präpositionalobjekt ·
  Negation & Fokuspartikeln · Idiomatik & Redewendungen · Register & Stilebenen ·
  Argumentation & Konzession

## Bedienung

1. **Startseite:** Themen nach Modulen als Kacheln, jeweils mit Fortschrittsanzeige; oben der
   Gesamtfortschritt.
2. **Themenseite:** Tabs „Regeln / Beispiele / Anwendung / Übungen“.
3. **Übungen:** Antwort in das Textfeld schreiben → „Lösung prüfen“ blendet die Musterlösung ein →
   Selbstbewertung per Buttons **Richtig / Teilweise / Falsch** (fließt in den Punktestand:
   richtig = 1, teilweise = 0,5, falsch = 0). Es gibt **kein** erzwungenes Auto-Grading, da Deutsch
   Varianten erlaubt; die Musterlösung ist ein Maßstab, keine einzige Wahrheit.
4. Ein dauerhafter Hinweis-Banner „**Beim Sprechen achten auf:**“ erinnert an drei Fallstricke.

## Inhalte erweitern

Alle Inhalte liegen typisiert in [`src/data.ts`](src/data.ts); die Typen stehen in
[`src/types.ts`](src/types.ts). Ein neues Thema ist einfach ein weiteres `Thema`-Objekt im
gewünschten Modul:

```ts
{
  id: 'mein-thema',            // stabiler, eindeutiger Schlüssel
  titel: '…',
  kurzbeschreibung: '…',
  grammatik: [ { titel, erklaerung, beispiel }, … ],   // 3–6 Regelblöcke
  beispiele: [ { satz, hinweis }, … ],                 // 5–8 Sätze
  anwendung: [ '…', … ],                               // 4–6 Tipps (gesprochenes Deutsch)
  uebungen: [ { typ, aufgabe, hinweis, musterloesung }, … ], // 12–15 Übungen
}
```

Fortschritt und Punktestand werden automatisch anhand der `id` und der Anzahl der Übungen berechnet.

## Design

Ruhig und akademisch: Serif-Display (Source Serif / Georgia) für Überschriften, Sans (Inter /
System) für den Fließtext, ein dezenter Bordeaux-Akzent. Übungstypen erscheinen als kleine
Mono-Badges. Das Layout ist bis zur Mobilansicht responsiv. Es werden keine externen Schriften
geladen — die Font-Stacks greifen offline auf Systemschriften zurück, damit die App ohne jede
Netzwerkverbindung funktioniert.
