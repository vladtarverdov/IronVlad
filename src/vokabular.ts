import type { VokabelDimension, VokabelGruppe } from './types'

// ---------------------------------------------------------------------------
// Wortschatz für sicheres Sprechen auf C1–C2-Niveau.
// Zwei Ordnungen: nach Wortart UND nach Thema. Jede Vokabel mit deutscher
// Form, englischer Übersetzung und einem Beispielsatz.
// Alles fest im Code (keine Netzwerkabhängigkeit). Leicht erweiterbar:
// neue Gruppe oder neuen Eintrag { de, en, beispiel } ergänzen.
// Hinweis: In diesem Modul werden doppelte Anführungszeichen als String-
// Begrenzer genutzt, damit englische Apostrophe (it's, how's) problemlos
// passen; deutsche Zitate stehen in typografischen „…"-Zeichen.
// ---------------------------------------------------------------------------

// === 1) Nach Wortart =======================================================

const wortartGruppen: VokabelGruppe[] = [
  {
    id: "verben",
    titel: "Verben",
    beschreibung: "Ausdrucksstarke Verben, die deine Rede präziser und erwachsener klingen lassen.",
    eintraege: [
      { de: "abwägen", en: "to weigh up, consider carefully", beispiel: "Ich muss die Argumente noch einmal abwägen." },
      { de: "hinterfragen", en: "to question, scrutinize", beispiel: "Man sollte solche Behauptungen hinterfragen." },
      { de: "nachvollziehen", en: "to understand, relate to", beispiel: "Deine Entscheidung kann ich gut nachvollziehen." },
      { de: "einschätzen", en: "to assess, gauge", beispiel: "Es ist schwer einzuschätzen, wie lange das dauert." },
      { de: "sich auseinandersetzen (mit)", en: "to engage with, deal with", beispiel: "Ich habe mich intensiv mit dem Thema auseinandergesetzt." },
      { de: "bewältigen", en: "to cope with, manage", beispiel: "Diese Menge an Arbeit ist kaum zu bewältigen." },
      { de: "betonen", en: "to emphasize, stress", beispiel: "Ich möchte betonen, dass das nur meine Meinung ist." },
      { de: "sich durchsetzen", en: "to assert oneself, prevail", beispiel: "Mit dieser Idee wird er sich kaum durchsetzen." },
      { de: "berücksichtigen", en: "to take into account", beispiel: "Wir müssen die Kosten berücksichtigen." },
      { de: "verdeutlichen", en: "to clarify, make clear", beispiel: "Lass mich das an einem Beispiel verdeutlichen." },
    ],
  },
  {
    id: "nomen",
    titel: "Nomen",
    beschreibung: "Abstrakte Hauptwörter, die in Diskussionen und Erklärungen ständig gebraucht werden.",
    eintraege: [
      { de: "der Aspekt", en: "aspect", beispiel: "Diesen Aspekt hatte ich noch gar nicht bedacht." },
      { de: "die Voraussetzung", en: "prerequisite, precondition", beispiel: "Vertrauen ist die Voraussetzung dafür." },
      { de: "die Auswirkung", en: "effect, impact", beispiel: "Das hat spürbare Auswirkungen auf den Alltag." },
      { de: "der Zusammenhang", en: "connection, context", beispiel: "In diesem Zusammenhang ist das durchaus wichtig." },
      { de: "die Herausforderung", en: "challenge", beispiel: "Das ist eine echte Herausforderung für uns alle." },
      { de: "der Standpunkt", en: "point of view, standpoint", beispiel: "Ich verstehe deinen Standpunkt, teile ihn aber nicht." },
      { de: "der Kompromiss", en: "compromise", beispiel: "Am Ende fanden wir einen guten Kompromiss." },
      { de: "die Ursache", en: "cause", beispiel: "Wir müssen zuerst die Ursache finden." },
      { de: "die Tatsache", en: "fact", beispiel: "Das ist eine unbestreitbare Tatsache." },
      { de: "der Vorteil", en: "advantage", beispiel: "Das hat einen klaren Vorteil." },
    ],
  },
  {
    id: "adjektive",
    titel: "Adjektive",
    beschreibung: "Nuancierte Eigenschaftswörter, um differenziert zu bewerten statt nur mit gut oder schlecht.",
    eintraege: [
      { de: "nachvollziehbar", en: "understandable, comprehensible", beispiel: "Deine Reaktion ist absolut nachvollziehbar." },
      { de: "plausibel", en: "plausible", beispiel: "Das klingt für mich durchaus plausibel." },
      { de: "ausschlaggebend", en: "decisive", beispiel: "Der Preis war letztlich ausschlaggebend." },
      { de: "gravierend", en: "serious, grave", beispiel: "Das ist ein gravierender Fehler." },
      { de: "unverzichtbar", en: "indispensable", beispiel: "Vertrauen ist für ein Team unverzichtbar." },
      { de: "überzeugend", en: "convincing", beispiel: "Sie hat sehr überzeugend argumentiert." },
      { de: "angemessen", en: "appropriate, adequate", beispiel: "Eine angemessene Reaktion wäre eine Entschuldigung." },
      { de: "voreilig", en: "hasty, premature", beispiel: "Zieh bitte keine voreiligen Schlüsse." },
      { de: "umstritten", en: "controversial, disputed", beispiel: "Das ist ein höchst umstrittenes Thema." },
      { de: "erheblich", en: "considerable, significant", beispiel: "Es gibt einen erheblichen Unterschied." },
    ],
  },
  {
    id: "konnektoren",
    titel: "Konnektoren",
    beschreibung: "Verbindungswörter, die Gedanken logisch verknüpfen und die Rede strukturiert wirken lassen.",
    eintraege: [
      { de: "dennoch", en: "nevertheless, yet", beispiel: "Es war riskant; dennoch hat es sich gelohnt." },
      { de: "folglich", en: "consequently, therefore", beispiel: "Die Nachfrage sank; folglich mussten wir umplanen." },
      { de: "zumal", en: "especially since, all the more as", beispiel: "Wir sollten zusagen, zumal sich das selten bietet." },
      { de: "hingegen", en: "on the other hand, whereas", beispiel: "Ich mag Tee; Kaffee hingegen trinke ich selten." },
      { de: "wobei", en: "whereby, although", beispiel: "Der Plan ist gut, wobei die Kosten offen sind." },
      { de: "allerdings", en: "however, admittedly", beispiel: "Die Idee ist gut, allerdings zu teuer." },
      { de: "indem", en: "by (doing something)", beispiel: "Er überzeugte, indem er ruhig blieb." },
      { de: "trotzdem", en: "nevertheless, anyway", beispiel: "Es regnete; trotzdem gingen wir spazieren." },
      { de: "deshalb", en: "therefore, that's why", beispiel: "Deshalb bleibe ich heute zu Hause." },
      { de: "einerseits … andererseits", en: "on the one hand … on the other", beispiel: "Einerseits reizt es mich, andererseits fehlt die Zeit." },
    ],
  },
  {
    id: "redewendungen",
    titel: "Redewendungen",
    beschreibung: "Feste, bildhafte Wendungen, die deine Sprache lebendig und muttersprachlich klingen lassen.",
    eintraege: [
      { de: "den Nagel auf den Kopf treffen", en: "to hit the nail on the head", beispiel: "Damit hast du den Nagel auf den Kopf getroffen." },
      { de: "auf dem Schlauch stehen", en: "to be stuck, draw a blank", beispiel: "Sorry, ich steh gerade total auf dem Schlauch." },
      { de: "die Daumen drücken", en: "to keep one's fingers crossed", beispiel: "Ich drücke dir für morgen die Daumen!" },
      { de: "ins kalte Wasser springen", en: "to jump in at the deep end", beispiel: "Beim neuen Job musste ich ins kalte Wasser springen." },
      { de: "die Nase voll haben", en: "to be fed up", beispiel: "Ich habe langsam die Nase voll von der Warterei." },
      { de: "jemandem auf die Nerven gehen", en: "to get on someone's nerves", beispiel: "Der Lärm geht mir echt auf die Nerven." },
      { de: "den Faden verlieren", en: "to lose one's train of thought", beispiel: "Entschuldige, ich habe den Faden verloren." },
      { de: "Tacheles reden", en: "to talk plainly, talk turkey", beispiel: "Wir müssen jetzt mal Tacheles reden." },
      { de: "unter einen Hut bringen", en: "to reconcile, juggle", beispiel: "Familie und Beruf unter einen Hut zu bringen, ist schwer." },
      { de: "aus dem Bauch heraus", en: "to go with one's gut", beispiel: "Ich habe das aus dem Bauch heraus entschieden." },
    ],
  },
]

// === 2) Nach Thema =========================================================

const themaGruppen: VokabelGruppe[] = [
  {
    id: "meinung",
    titel: "Meinung äußern",
    beschreibung: "Wendungen, um souverän eine Meinung zu formulieren und Position zu beziehen.",
    eintraege: [
      { de: "Meiner Meinung nach …", en: "In my opinion …", beispiel: "Meiner Meinung nach ist das der falsche Weg." },
      { de: "Ich bin der Ansicht, dass …", en: "I take the view that …", beispiel: "Ich bin der Ansicht, dass wir warten sollten." },
      { de: "Ich halte das für …", en: "I consider that (to be) …", beispiel: "Ich halte das für übertrieben." },
      { de: "Ehrlich gesagt …", en: "Honestly, to be honest …", beispiel: "Ehrlich gesagt gefällt mir das nicht." },
      { de: "Ich bin davon überzeugt, dass …", en: "I'm convinced that …", beispiel: "Ich bin davon überzeugt, dass es klappt." },
      { de: "Wenn du mich fragst, …", en: "If you ask me, …", beispiel: "Wenn du mich fragst, ist das keine gute Idee." },
      { de: "Ich sehe das so: …", en: "The way I see it …", beispiel: "Ich sehe das so: Wir haben keine andere Wahl." },
      { de: "Ich würde sagen, …", en: "I'd say …", beispiel: "Ich würde sagen, das reicht für heute." },
      { de: "Es kommt darauf an.", en: "It depends.", beispiel: "Ob ich mitkomme? Es kommt darauf an, wann." },
      { de: "Da bin ich mir nicht sicher.", en: "I'm not sure about that.", beispiel: "Da bin ich mir ehrlich nicht ganz sicher." },
    ],
  },
  {
    id: "diskussion",
    titel: "Diskussion",
    beschreibung: "Redemittel, um zuzustimmen, zu widersprechen und eine Diskussion elegant zu lenken.",
    eintraege: [
      { de: "Da muss ich widersprechen.", en: "I have to disagree there.", beispiel: "Da muss ich dir leider widersprechen." },
      { de: "Das sehe ich anders.", en: "I see it differently.", beispiel: "Das sehe ich ehrlich gesagt etwas anders." },
      { de: "Darf ich kurz einhaken?", en: "May I jump in briefly?", beispiel: "Darf ich hier kurz einhaken?" },
      { de: "Das stimmt, aber …", en: "That's true, but …", beispiel: "Das stimmt, aber es ist einfach zu teuer." },
      { de: "Genau das ist der Punkt.", en: "That's exactly the point.", beispiel: "Genau das ist der Punkt, den ich meine." },
      { de: "Lass mich bitte ausreden.", en: "Please let me finish.", beispiel: "Lass mich bitte kurz ausreden." },
      { de: "Um auf … zurückzukommen", en: "To come back to …", beispiel: "Um auf die Kosten zurückzukommen …" },
      { de: "Da ist etwas dran.", en: "There's something to that.", beispiel: "Da ist durchaus etwas dran." },
      { de: "Wir sind uns einig.", en: "We're in agreement.", beispiel: "Am Ende waren wir uns einig." },
      { de: "Können wir uns darauf einigen?", en: "Can we agree on that?", beispiel: "Können wir uns auf einen Kompromiss einigen?" },
    ],
  },
  {
    id: "alltag",
    titel: "Alltag",
    beschreibung: "Lockere, natürliche Wendungen für ganz normale Alltagssituationen.",
    eintraege: [
      { de: "Mach dir keinen Kopf.", en: "Don't worry about it.", beispiel: "Mach dir keinen Kopf, das wird schon." },
      { de: "Das passt mir gut.", en: "That works for me.", beispiel: "Freitag? Ja, das passt mir gut." },
      { de: "Kein Ding.", en: "No problem, no worries.", beispiel: "Kein Ding, das mache ich gern." },
      { de: "Ich meld mich.", en: "I'll be in touch.", beispiel: "Alles klar, ich meld mich bei dir." },
      { de: "Lass uns …", en: "Let's …", beispiel: "Lass uns das später in Ruhe klären." },
      { de: "Was steht heute an?", en: "What's on today?", beispiel: "Und, was steht heute so an?" },
      { de: "Ich bin gleich da.", en: "I'll be right there.", beispiel: "Warte kurz, ich bin gleich da." },
      { de: "Das wird schon.", en: "It'll be fine.", beispiel: "Keine Sorge, das wird schon." },
      { de: "Mir ist es egal.", en: "I don't mind.", beispiel: "Wo wir essen, ist mir ehrlich egal." },
      { de: "Ich muss dann mal los.", en: "I should get going.", beispiel: "So, ich muss dann mal los." },
    ],
  },
  {
    id: "beruf",
    titel: "Beruf",
    beschreibung: "Nützliche Wendungen für Arbeit, Team und Zusammenarbeit.",
    eintraege: [
      { de: "eine Frist einhalten", en: "to meet a deadline", beispiel: "Wir müssen die Frist unbedingt einhalten." },
      { de: "sich um etwas kümmern", en: "to take care of something", beispiel: "Keine Sorge, ich kümmere mich darum." },
      { de: "auf dem Laufenden bleiben", en: "to stay up to date", beispiel: "Ich halte dich auf dem Laufenden." },
      { de: "eine Besprechung ansetzen", en: "to schedule a meeting", beispiel: "Wir setzen für Montag eine Besprechung an." },
      { de: "zuständig sein für", en: "to be responsible for", beispiel: "Dafür bin ich leider nicht zuständig." },
      { de: "sich einarbeiten", en: "to get up to speed, settle in", beispiel: "Ich muss mich erst noch einarbeiten." },
      { de: "Rücksprache halten", en: "to check back, consult", beispiel: "Ich halte kurz Rücksprache mit dem Team." },
      { de: "etwas in Angriff nehmen", en: "to tackle something", beispiel: "Wir nehmen das Projekt nächste Woche in Angriff." },
      { de: "Feierabend machen", en: "to call it a day", beispiel: "Ich mache jetzt Feierabend." },
      { de: "auf Augenhöhe", en: "as equals, on an equal footing", beispiel: "Wir arbeiten im Team auf Augenhöhe." },
    ],
  },
  {
    id: "smalltalk",
    titel: "Small Talk",
    beschreibung: "Einstiegs- und Übergangsfloskeln für lockere, freundliche Gespräche.",
    eintraege: [
      { de: "Wie läuft's?", en: "How's it going?", beispiel: "Na, wie läuft's bei dir?" },
      { de: "Was gibt's Neues?", en: "What's new?", beispiel: "Und, was gibt's Neues bei dir?" },
      { de: "Schön, dich zu sehen!", en: "Nice to see you!", beispiel: "Hey, schön dich mal wieder zu sehen!" },
      { de: "Wie war dein Wochenende?", en: "How was your weekend?", beispiel: "Und, wie war dein Wochenende?" },
      { de: "So ein Wetter, oder?", en: "Some weather, huh?", beispiel: "So ein Wetter heute, oder?" },
      { de: "Lange nicht gesehen!", en: "Long time no see!", beispiel: "Mensch, lange nicht gesehen!" },
      { de: "Wir sollten mal …", en: "We should … sometime", beispiel: "Wir sollten mal zusammen einen Kaffee trinken." },
      { de: "Wie geht's der Familie?", en: "How's the family?", beispiel: "Und, wie geht's der Familie?" },
      { de: "Alles beim Alten?", en: "Same as always?", beispiel: "Und bei dir, alles beim Alten?" },
      { de: "Ich muss dann mal los.", en: "I'd better get going.", beispiel: "So, ich muss dann leider mal los." },
    ],
  },
  {
    id: "konflikte",
    titel: "Konflikte",
    beschreibung: "Wendungen, um Spannungen anzusprechen und Streit deeskalierend zu klären.",
    eintraege: [
      { de: "Lass uns in Ruhe reden.", en: "Let's talk calmly.", beispiel: "Lass uns das in Ruhe bereden." },
      { de: "Ich verstehe deinen Ärger.", en: "I understand you're upset.", beispiel: "Ich verstehe deinen Ärger wirklich." },
      { de: "Das war nicht so gemeint.", en: "I didn't mean it like that.", beispiel: "Entschuldige, das war nicht so gemeint." },
      { de: "Wir sollten einen Kompromiss finden.", en: "We should find a compromise.", beispiel: "Wir sollten hier einen Kompromiss finden." },
      { de: "Es tut mir leid, wenn …", en: "I'm sorry if …", beispiel: "Es tut mir leid, wenn ich dich verletzt habe." },
      { de: "Können wir das klären?", en: "Can we sort this out?", beispiel: "Können wir das bitte in Ruhe klären?" },
      { de: "Ich sehe das anders, aber …", en: "I see it differently, but …", beispiel: "Ich sehe das anders, aber ich respektiere deine Sicht." },
      { de: "Beruhige dich bitte.", en: "Please calm down.", beispiel: "Beruhige dich bitte einen Moment." },
      { de: "So führt das zu nichts.", en: "This is getting us nowhere.", beispiel: "So führt das doch zu nichts." },
      { de: "Lass uns einen Schlussstrich ziehen.", en: "Let's draw a line under it.", beispiel: "Lass uns einen Schlussstrich ziehen und neu anfangen." },
    ],
  },
]

export const dimensionen: VokabelDimension[] = [
  { id: "wortart", label: "Nach Wortart", gruppen: wortartGruppen },
  { id: "thema", label: "Nach Thema", gruppen: themaGruppen },
]

// Anzahl eindeutiger Einträge (nach Wortart; ohne die thematische Dopplung).
export const gesamtzahlVokabeln = wortartGruppen.reduce((s, g) => s + g.eintraege.length, 0)
