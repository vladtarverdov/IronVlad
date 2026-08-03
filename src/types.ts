// Zentrale Typdefinitionen für die Trainingsinhalte.
// Alle Inhalte liegen in data.ts und lassen sich anhand dieser Typen erweitern.

export type UebungsTyp =
  | 'Transformation'
  | 'Fehlerkorrektur'
  | 'Lückentext'
  | 'Paraphrase'
  | 'Freie Produktion'

export interface Regelblock {
  titel: string
  erklaerung: string
  beispiel: string
}

export interface Beispielsatz {
  satz: string
  hinweis: string
}

export interface Uebung {
  typ: UebungsTyp
  aufgabe: string
  hinweis: string
  musterloesung: string
}

export interface Thema {
  /** Stabiler Schlüssel, wird für Routing und Fortschritt genutzt. */
  id: string
  titel: string
  kurzbeschreibung: string
  grammatik: Regelblock[]
  beispiele: Beispielsatz[]
  anwendung: string[]
  uebungen: Uebung[]
}

export interface Modul {
  id: string
  titel: string
  untertitel: string
  themen: Thema[]
}
