import type { Modul } from './types'

// ---------------------------------------------------------------------------
// Alle Inhalte sind fest im Code hinterlegt (keine Netzwerkabhängigkeit).
// Struktur pro Thema: Grammatik → Beispiele → Anwendung → Übungen.
// Zum Erweitern: neue Themen als Objekte in die passenden Module einfügen.
// ---------------------------------------------------------------------------

const modulA: Modul = {
  id: 'modul-a',
  titel: 'Modul A — Verbmodi, Satzbau, Stil',
  untertitel: 'Das grammatische Rückgrat: Modi, Diathese und Satzarchitektur.',
  themen: [
    {
      id: 'passiv',
      titel: 'Passiv & Passiversatzformen',
      kurzbeschreibung: 'Vorgangs- und Zustandspassiv sowie die stilistisch oft eleganteren Ersatzformen.',
      grammatik: [
        {
          titel: 'Vorgangspassiv (werden-Passiv)',
          erklaerung:
            'Das Vorgangspassiv rückt den Vorgang selbst in den Vordergrund und lässt den Handelnden (Agens) weg oder verschiebt ihn in eine „von“-/„durch“-Angabe. Gebildet mit „werden“ + Partizip II.',
          beispiel: 'Der Antrag wird (vom Ausschuss) geprüft.',
        },
        {
          titel: 'Zustandspassiv (sein-Passiv)',
          erklaerung:
            'Das Zustandspassiv beschreibt das Ergebnis eines Vorgangs, nicht den Vorgang selbst. Gebildet mit „sein“ + Partizip II. Es beantwortet die Frage nach dem erreichten Zustand.',
          beispiel: 'Der Antrag ist geprüft. (Ergebnis liegt vor — nicht: er wird gerade geprüft.)',
        },
        {
          titel: 'Passiv mit Modalverb',
          erklaerung:
            'Modalverben verbinden sich mit dem Passiv über den Infinitiv „werden“: Modalverb + Partizip II + „werden“. So lassen sich Notwendigkeit, Möglichkeit oder Erlaubnis passivisch ausdrücken.',
          beispiel: 'Die Frist kann verlängert werden. / Der Fehler musste behoben werden.',
        },
        {
          titel: 'Passiversatz „sein + zu + Infinitiv“',
          erklaerung:
            'Diese Konstruktion drückt (je nach Kontext) Notwendigkeit oder Möglichkeit aus und entspricht einem Passiv mit „müssen“ bzw. „können“. Sie wirkt geschrieben präzise, klingt gesprochen aber steif.',
          beispiel: 'Die Unterlagen sind bis Freitag einzureichen. (= müssen eingereicht werden)',
        },
        {
          titel: 'Passiversatz „sich lassen“ und „-bar“',
          erklaerung:
            '„sich lassen + Infinitiv“ ersetzt ein Passiv mit „können“ und klingt idiomatisch, auch gesprochen. Adjektive auf „-bar“ komprimieren dieselbe Bedeutung in ein Wort.',
          beispiel: 'Das Problem lässt sich lösen. = Das Problem ist lösbar. = … kann gelöst werden.',
        },
        {
          titel: 'Weitere Ersatzformen: „man“ und Reflexiv',
          erklaerung:
            'Ein aktives „man“ vermeidet das Passiv ganz und wirkt gesprochen natürlicher. Manche Vorgänge lassen sich reflexiv fassen und wirken dadurch subjektlos-elegant.',
          beispiel: 'Man klärt das kurz. (statt: Das wird kurz geklärt.) / Die Tür öffnet sich automatisch.',
        },
      ],
      beispiele: [
        { satz: 'Über die Reform wird derzeit heftig gestritten.', hinweis: 'Unpersönliches Passiv ohne Subjekt — betont den Vorgang, nicht die Streitenden.' },
        { satz: 'Damit ist die Angelegenheit für uns erledigt.', hinweis: 'Zustandspassiv: der erreichte Endzustand, kein laufender Prozess.' },
        { satz: 'Diese Regelung lässt sich in der Praxis kaum durchsetzen.', hinweis: '„sich lassen“ statt „kann durchgesetzt werden“ — deutlich idiomatischer.' },
        { satz: 'Die Belege sind lückenlos aufzubewahren.', hinweis: '„sein + zu“ für eine Vorschrift; typisch für Amts- und Fachsprache.' },
        { satz: 'Das Ergebnis war schon vorher absehbar.', hinweis: '„-bar“-Adjektiv komprimiert „konnte vorhergesehen werden“.' },
        { satz: 'Hier wird nicht geraucht.', hinweis: 'Unpersönliches Passiv als höfliche, agenslose Aufforderung.' },
        { satz: 'Der Vertrag muss noch von beiden Seiten unterzeichnet werden.', hinweis: 'Passiv mit Modalverb; Agens explizit über „von“ genannt.' },
      ],
      anwendung: [
        'Gesprochen fast immer „sich lassen“ oder „man“ statt „sein + zu“: Sagen Sie „Das lässt sich machen“, nicht „Das ist zu machen“ — Letzteres klingt nach Aktenvermerk.',
        'Das Vorgangspassiv ist Ihr Werkzeug, wenn der Handelnde irrelevant oder bewusst verschwiegen ist. Nutzen Sie es sparsam gezielt, nicht als Dauergrundton.',
        'Vermeiden Sie Passiv-Ketten. Wechseln Sie mit „man“, Reflexiv oder Aktiv ab, sonst wirkt Ihre Rede bürokratisch und distanziert.',
        'Typischer Fehler: Vorgangs- und Zustandspassiv verwechseln. „Das Geschäft ist geschlossen“ (Zustand) ≠ „Das Geschäft wird geschlossen“ (Vorgang, gerade jetzt).',
        'Register: „-bar“-Adjektive (machbar, vertretbar, nachvollziehbar) klingen souverän und kompakt — ideal, um im Gespräch eine Bewertung knapp zu setzen.',
      ],
      uebungen: [
        { typ: 'Transformation', aufgabe: 'Formen Sie ins Vorgangspassiv um: „Der Techniker repariert das Gerät.“', hinweis: 'Objekt wird Subjekt; Agens mit „von“.', musterloesung: 'Das Gerät wird (vom Techniker) repariert.' },
        { typ: 'Transformation', aufgabe: 'Wandeln Sie in ein „sich lassen“-Passiv um: „Der Termin kann problemlos verschoben werden.“', hinweis: '„können“ → „sich lassen“.', musterloesung: 'Der Termin lässt sich problemlos verschieben.' },
        { typ: 'Transformation', aufgabe: 'Ersetzen Sie durch ein „-bar“-Adjektiv: „Der Vorschlag kann akzeptiert werden.“', hinweis: 'Verbstamm + „-bar“ + „sein“.', musterloesung: 'Der Vorschlag ist akzeptabel. (auch: annehmbar)' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie das Zustandspassiv: „Keine Sorge, die Rechnung ist bereits ____ (bezahlen).“', hinweis: '„sein“ + Partizip II.', musterloesung: 'bezahlt' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie: „Die Anträge sind bis Monatsende ____ (einreichen).“ — Ersatzform mit „zu“.', hinweis: '„zu“ + Infinitiv nach „sind“.', musterloesung: 'einzureichen' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie: „Das Museum wird sonntags geschlossen — kommen Sie also unter der Woche.“ (Gemeint ist der Dauerzustand.)', hinweis: 'Vorgang vs. Zustand.', musterloesung: 'Das Museum ist sonntags geschlossen — kommen Sie also unter der Woche.' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie: „Der Bericht muss bis morgen abgegeben.“', hinweis: 'Passiv mit Modalverb braucht „werden“.', musterloesung: 'Der Bericht muss bis morgen abgegeben werden.' },
        { typ: 'Paraphrase', aufgabe: 'Formulieren Sie mündlich-natürlich um: „Die Türen sind geschlossen zu halten.“', hinweis: '„man“ oder Imperativ nutzen.', musterloesung: 'Halten Sie die Türen bitte geschlossen. / Die Türen sollen geschlossen bleiben.' },
        { typ: 'Paraphrase', aufgabe: 'Drücken Sie ohne Passiv aus (mit „man“): „In dieser Region wird viel Wein angebaut.“', hinweis: '„man“ als Subjekt.', musterloesung: 'In dieser Region baut man viel Wein an.' },
        { typ: 'Transformation', aufgabe: 'Bilden Sie das unpersönliche Passiv: „Alle tanzten die ganze Nacht.“', hinweis: 'Kein Akkusativobjekt → „es“ oder Adverbiale voran.', musterloesung: 'Die ganze Nacht wurde getanzt. (auch: Es wurde die ganze Nacht getanzt.)' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie das Zustandspassiv: „Die Wunde ist schon verheilt worden.“', hinweis: 'Zustandspassiv ohne „worden“.', musterloesung: 'Die Wunde ist schon verheilt. (Zustand; „verheilen“ ist ohnehin intransitiv.)' },
        { typ: 'Freie Produktion', aufgabe: 'Beschreiben Sie in 2–3 Sätzen einen Prozess in Ihrer Arbeit ausschließlich mit Passiversatzformen (sich lassen / man / -bar).', hinweis: 'Kein „werden“-Passiv verwenden.', musterloesung: 'Beispiel: Zuerst prüft man die Daten auf Plausibilität. Fehler lassen sich meist schon hier erkennen. Erst danach sind die Zahlen wirklich belastbar.' },
        { typ: 'Transformation', aufgabe: 'Machen Sie aus dem Passiv einen aktiven Satz mit betontem Agens: „Der Preis wurde von einer internationalen Jury vergeben.“', hinweis: 'Agens wird Subjekt.', musterloesung: 'Eine internationale Jury vergab den Preis.' },
      ],
    },
    {
      id: 'konnektoren',
      titel: 'Konnektoren (C1)',
      kurzbeschreibung: 'Präzise Verknüpfung von Gedanken durch hochwirksame Konnektoren und ihre Satzstellung.',
      grammatik: [
        {
          titel: 'Subjunktoren (Nebensatz, Verb am Ende)',
          erklaerung:
            'Subjunktionen leiten einen Nebensatz ein und schicken das finite Verb ans Satzende. Wichtige C1-Vertreter: „indem“ (Mittel/Art), „zumal“ (verstärkender Grund), „sodass“ (Folge), „obgleich/wenngleich“ (Einräumung).',
          beispiel: 'Er überzeugte, indem er ruhig blieb, zumal die Gegenseite die Nerven verlor.',
        },
        {
          titel: 'Konjunktionaladverbien (Position 1, Inversion)',
          erklaerung:
            'Adverbien wie „dennoch“, „gleichwohl“, „folglich“, „mithin“, „hingegen“ stehen im Hauptsatz und lösen bei Position 1 die Inversion aus: Verb an Position 2, Subjekt danach.',
          beispiel: 'Die Lage war ernst; dennoch bewahrte sie die Ruhe.',
        },
        {
          titel: '„wobei“ — Kommentierung und Einschränkung',
          erklaerung:
            '„wobei“ hängt eine begleitende Bemerkung oder eine leichte Einschränkung an, ohne das Gesagte zu widerrufen. Sehr wirksam, um einen Gedanken elegant weiterzudrehen. Verb am Ende.',
          beispiel: 'Der Plan ist gut, wobei die Finanzierung noch offen ist.',
        },
        {
          titel: 'Zweigliedrige Konnektoren',
          erklaerung:
            'Paarige Konnektoren strukturieren Argumente sichtbar: „zwar …, aber …“, „einerseits …, andererseits …“, „sowohl … als auch“, „weder … noch“, „je …, desto …“.',
          beispiel: 'Je genauer man plant, desto weniger Überraschungen erlebt man.',
        },
        {
          titel: 'Konzessive Verstärkung: „so … auch“',
          erklaerung:
            'Die Konstruktion „so + Adjektiv + auch“ leitet eine nachdrückliche Einräumung ein — literarisch und rhetorisch stark.',
          beispiel: 'So überzeugend das Argument auch klingt, es hält der Prüfung nicht stand.',
        },
      ],
      beispiele: [
        { satz: 'Sie löste die Aufgabe, indem sie das Problem in Teilschritte zerlegte.', hinweis: '„indem“ nennt das Mittel/die Methode.' },
        { satz: 'Wir sollten zusagen, zumal sich so eine Chance selten bietet.', hinweis: '„zumal“ liefert einen zusätzlichen, verstärkenden Grund.' },
        { satz: 'Die Kritik war hart; gleichwohl nahm er sie sachlich an.', hinweis: '„gleichwohl“ = gehobenes „trotzdem“, Inversion folgt.' },
        { satz: 'Der Vortrag war informativ, wobei er etwas zu lang geriet.', hinweis: '„wobei“ setzt eine begleitende Einschränkung.' },
        { satz: 'Folglich mussten wir den Zeitplan komplett überarbeiten.', hinweis: '„folglich“ zieht eine logische Konsequenz, mit Inversion.' },
        { satz: 'Er ist sowohl fachlich versiert als auch rhetorisch geschickt.', hinweis: '„sowohl … als auch“ verbindet gleichrangig.' },
        { satz: 'So gern ich zusagen würde, terminlich geht es dieses Mal nicht.', hinweis: '„so … auch/gern“ als nachdrückliche Einräumung.' },
      ],
      anwendung: [
        'Im Gespräch adeln wenige Konnektoren Ihre Argumentation sofort: „zumal“ (Grund draufsetzen), „wobei“ (relativieren), „mithin/folglich“ (Schluss ziehen). Ein bewusst platziertes „zumal“ wirkt souveräner als drei „weil“.',
        'Achten Sie nach Konjunktionaladverbien am Satzanfang zwingend auf die Inversion: „Deshalb ist das …“, nicht „Deshalb das ist …“. Das ist der häufigste Fehler auf C1.',
        '„wobei“ ist Ihr Deeskalations-Werkzeug: Sie können zustimmen und trotzdem eine Bedingung setzen, ohne zu widersprechen — sehr diplomatisch.',
        'Typischer Fehler: „trotzdem“ (Adverb, Inversion) mit „obwohl“ (Subjunktion, Verb am Ende) mischen. „Obwohl es regnete, gingen wir“ vs. „Es regnete; trotzdem gingen wir“.',
        'Vermeiden Sie es, jeden Satz mit „und“ oder „aber“ zu beginnen. Ein präziser Konnektor („hingegen“, „dennoch“, „insofern“) zeigt Denkstruktur.',
      ],
      uebungen: [
        { typ: 'Transformation', aufgabe: 'Verbinden Sie mit „indem“: „Er sparte Zeit. Er automatisierte die Routineaufgaben.“', hinweis: 'Zweiter Satz nennt das Mittel.', musterloesung: 'Er sparte Zeit, indem er die Routineaufgaben automatisierte.' },
        { typ: 'Transformation', aufgabe: 'Verbinden Sie mit „zumal“: „Wir sollten früher aufbrechen. Es könnte Stau geben.“', hinweis: 'Verstärkender Grund im Nebensatz.', musterloesung: 'Wir sollten früher aufbrechen, zumal es Stau geben könnte.' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie ein passendes Konjunktionaladverb: „Die Nachfrage war gering; ____ senkten wir den Preis.“', hinweis: 'Logische Folge, mit Inversion.', musterloesung: 'folglich (auch: daher / deshalb)' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie: „Das Konzept überzeugt, ____ die Umsetzung noch Fragen aufwirft.“', hinweis: 'Begleitende Einschränkung.', musterloesung: 'wobei' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie die Wortstellung: „Trotzdem er müde war, arbeitete er weiter.“', hinweis: '„trotzdem“ ist Adverb, kein Subjunktor.', musterloesung: 'Obwohl er müde war, arbeitete er weiter. (oder: Er war müde; trotzdem arbeitete er weiter.)' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie: „Deshalb wir haben die Entscheidung vertagt.“', hinweis: 'Inversion nach Position-1-Adverb.', musterloesung: 'Deshalb haben wir die Entscheidung vertagt.' },
        { typ: 'Transformation', aufgabe: 'Formulieren Sie mit „je …, desto …“: „Wenn man mehr übt, macht man weniger Fehler.“', hinweis: 'Komparative im Doppelbau.', musterloesung: 'Je mehr man übt, desto weniger Fehler macht man.' },
        { typ: 'Paraphrase', aufgabe: 'Ersetzen Sie „aber“ durch einen gehobeneren Kontrast-Konnektor: „Er ist begabt, aber undiszipliniert.“', hinweis: '„jedoch/allerdings/indes“.', musterloesung: 'Er ist begabt, jedoch undiszipliniert. (auch: … allerdings undiszipliniert.)' },
        { typ: 'Transformation', aufgabe: 'Bilden Sie eine nachdrückliche Einräumung mit „so … auch“: „Das Angebot ist verlockend, trotzdem lehne ich ab.“', hinweis: '„so verlockend … auch“.', musterloesung: 'So verlockend das Angebot auch ist, ich lehne ab.' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie das Paar: „____ sind die Kosten hoch, ____ ist der Nutzen unbestreitbar.“', hinweis: 'Konzessives Paar mit Inversion.', musterloesung: 'Zwar …, aber (Zwar sind die Kosten hoch, aber der Nutzen ist unbestreitbar.)' },
        { typ: 'Paraphrase', aufgabe: 'Drücken Sie „und außerdem“ gehobener aus: „Der Plan ist teuer und außerdem riskant.“', hinweis: '„überdies/zudem/obendrein“.', musterloesung: 'Der Plan ist teuer, überdies riskant. (auch: … zudem riskant.)' },
        { typ: 'Freie Produktion', aufgabe: 'Formulieren Sie ein Argument (2 Sätze), das „zumal“ und „wobei“ enthält.', hinweis: 'Grund verstärken, dann relativieren.', musterloesung: 'Beispiel: Wir sollten in Weiterbildung investieren, zumal der Markt sich rasch wandelt. Der Aufwand lohnt sich, wobei man die Angebote sorgfältig auswählen muss.' },
      ],
    },
    {
      id: 'konjunktiv-2',
      titel: 'Konjunktiv II',
      kurzbeschreibung: 'Irrealität, Höflichkeit und vorsichtige Distanz — der Modus des Möglichen.',
      grammatik: [
        {
          titel: 'Gegenwart: würde-Form vs. Originalform',
          erklaerung:
            'Der Konjunktiv II der Gegenwart wird meist mit „würde + Infinitiv“ gebildet. Bei häufigen Verben (sein, haben, Modalverben, kommen, gehen, wissen) ist die Originalform vorzuziehen: wäre, hätte, könnte, käme, wüsste.',
          beispiel: 'Ich würde gern kommen. — Aber: Ich wäre froh, wenn du dabei wärst.',
        },
        {
          titel: 'Vergangenheit: hätte/wäre + Partizip II',
          erklaerung:
            'Für die irreale Vergangenheit gibt es nur eine Form: „hätte“ oder „wäre“ + Partizip II. Sie drückt aus, dass etwas anders hätte laufen können, es aber nicht tat.',
          beispiel: 'Wenn ich das gewusst hätte, wäre ich früher gefahren.',
        },
        {
          titel: 'Irreale Bedingungssätze',
          erklaerung:
            'Im irrealen Konditional steht in beiden Teilen der Konjunktiv II. Das „wenn“ kann entfallen — dann rückt das Verb an die Spitze (Konditional-Inversion).',
          beispiel: 'Hätte ich mehr Zeit, (dann) läse ich mehr. (= Wenn ich mehr Zeit hätte …)',
        },
        {
          titel: 'Höflichkeit und Abschwächung',
          erklaerung:
            'Der Konjunktiv II macht Bitten, Ratschläge und Aussagen höflich-vorsichtig. „Könnten Sie …?“, „Ich würde meinen …“, „Es wäre schön, wenn …“ nehmen jede Schroffheit heraus.',
          beispiel: 'Dürfte ich Sie kurz stören? Ich hätte da eine Frage.',
        },
        {
          titel: 'Irreale Vergleiche und Wünsche',
          erklaerung:
            'Nach „als ob“ / „als“ steht der Konjunktiv II für einen irrealen Vergleich. „wenn … doch nur“ bzw. Verb-Erst-Stellung mit „doch“/„nur“ bildet den irrealen Wunsch.',
          beispiel: 'Er tat, als ob er alles wüsste. — Wäre er doch nur pünktlicher!',
        },
      ],
      beispiele: [
        { satz: 'An deiner Stelle würde ich das Angebot noch einmal überdenken.', hinweis: 'Höflicher, distanzierter Rat statt Imperativ.' },
        { satz: 'Das hätte auch schiefgehen können.', hinweis: 'Irreale Vergangenheit mit Modalverb: „hätte … können“.' },
        { satz: 'Käme sie früher, hätten wir mehr Zeit.', hinweis: 'Konditional-Inversion ohne „wenn“, gehobener Stil.' },
        { satz: 'Ich wüsste nicht, was daran falsch sein sollte.', hinweis: 'Originalform „wüsste“ statt „würde wissen“; höflich-vorsichtig.' },
        { satz: 'Es sieht aus, als hätte es hier gebrannt.', hinweis: '„als“ + Konjunktiv II (Verb direkt nach „als“).' },
        { satz: 'Beinahe wäre ich gestürzt.', hinweis: 'Irreale Vergangenheit für ein knapp Verfehltes.' },
        { satz: 'Hätten Sie vielleicht einen Moment Zeit für mich?', hinweis: 'Maximal höfliche Bitte; „hätten“ + Abtönung „vielleicht“.' },
      ],
      anwendung: [
        'Nutzen Sie die Originalformen (wäre, hätte, käme, wüsste, ließe, gäbe), wo sie existieren — sie klingen gebildeter als die Dauer-„würde“-Form. „Ich käme gern“ wirkt souveräner als „Ich würde gern kommen“.',
        'Der Konjunktiv II ist Ihr Höflichkeitsmotor im Gespräch: „Könnten Sie …“, „Ich würde vorschlagen …“, „Es wäre denkbar, dass …“. Er signalisiert Respekt, ohne unterwürfig zu wirken.',
        'Für vorsichtigen Widerspruch unschlagbar: „Ich würde das etwas anders sehen“ statt „Das ist falsch“. Sie halten das Gespräch offen.',
        'Typischer Fehler: doppelter Konjunktiv „würde … hätte“. Falsch: „Wenn ich Zeit hätte, würde ich es gemacht haben.“ Richtig für die Vergangenheit: „… hätte ich es gemacht.“',
        'Die Konditional-Inversion („Hätte ich gewusst …“) hebt Ihr Sprachniveau spürbar — dosiert einsetzen, sonst wirkt es theatralisch.',
      ],
      uebungen: [
        { typ: 'Transformation', aufgabe: 'Machen Sie höflicher: „Geben Sie mir das Dokument.“', hinweis: 'Konjunktiv-II-Bitte mit „können“.', musterloesung: 'Könnten Sie mir das Dokument geben?' },
        { typ: 'Transformation', aufgabe: 'Ersetzen Sie die würde-Form durch die Originalform: „Ich würde das nicht wissen.“', hinweis: 'Verb „wissen“ hat eine schöne Originalform.', musterloesung: 'Ich wüsste das nicht.' },
        { typ: 'Lückentext', aufgabe: 'Irreale Vergangenheit: „Wenn du angerufen ____, ____ ich dich abgeholt.“ (haben / haben)', hinweis: '„hätte“ … „hätte“.', musterloesung: 'hättest … hätte' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie den irrealen Vergleich: „Sie sah so aus, ____ ob sie geweint ____.“', hinweis: '„als ob“ + Konjunktiv II.', musterloesung: 'als … hätte' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie: „Wenn ich reicher wäre, würde ich ein Haus gekauft haben.“', hinweis: 'Gegenwart und Vergangenheit vermischt.', musterloesung: 'Wenn ich reicher wäre, würde ich ein Haus kaufen. (oder: Wenn ich reicher gewesen wäre, hätte ich ein Haus gekauft.)' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie: „Ich hätte gern gewusst, ob das gehen würde hätte.“', hinweis: 'Ein Konjunktiv genügt.', musterloesung: 'Ich hätte gern gewusst, ob das gegangen wäre.' },
        { typ: 'Transformation', aufgabe: 'Bilden Sie die Konditional-Inversion (ohne „wenn“): „Wenn wir mehr Personal hätten, könnten wir schneller liefern.“', hinweis: 'Verb an die Spitze.', musterloesung: 'Hätten wir mehr Personal, könnten wir schneller liefern.' },
        { typ: 'Transformation', aufgabe: 'Formulieren Sie einen irrealen Wunsch: „Schade, dass er nicht hier ist.“', hinweis: '„Wäre er doch …“ / „Wenn er doch …“.', musterloesung: 'Wäre er doch hier! (auch: Wenn er doch nur hier wäre!)' },
        { typ: 'Paraphrase', aufgabe: 'Schwächen Sie höflich ab: „Das ist eine schlechte Idee.“', hinweis: 'Konjunktiv II + Modalverb.', musterloesung: 'Das könnte sich als schwierig erweisen. (auch: Ich würde das eher nicht empfehlen.)' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie „beinahe“ + Konjunktiv: „Ich ____ den Zug beinahe ____ (verpassen).“', hinweis: 'Irreale Vergangenheit.', musterloesung: 'hätte … verpasst' },
        { typ: 'Paraphrase', aufgabe: 'Formulieren Sie einen vorsichtigen Widerspruch zu „Der Plan funktioniert garantiert.“', hinweis: 'Konjunktiv II, distanzierend.', musterloesung: 'Beispiel: Ich wäre mir da nicht so sicher — es könnte auch anders kommen.' },
        { typ: 'Freie Produktion', aufgabe: 'Beschreiben Sie in 2 Sätzen, was Sie täten, wenn Sie ein Jahr frei hätten.', hinweis: 'Irrealer Konditional in der Gegenwart.', musterloesung: 'Beispiel: Hätte ich ein Jahr frei, würde ich mehrere Sprachen vertiefen. Außerdem käme ich endlich dazu, ausgiebig zu reisen.' },
      ],
    },
    {
      id: 'konjunktiv-1',
      titel: 'Konjunktiv I & indirekte Rede',
      kurzbeschreibung: 'Distanziertes, neutrales Wiedergeben fremder Aussagen — der Modus der Berichterstattung.',
      grammatik: [
        {
          titel: 'Bildung des Konjunktiv I',
          erklaerung:
            'Der Konjunktiv I bildet sich aus dem Verbstamm des Infinitivs + Endungen (-e, -est, -e, -en, -et, -en). Kennform ist die 3. Person Singular auf „-e“: er habe, er gehe, er komme, sie sei.',
          beispiel: 'Sie sagt, er habe keine Zeit und komme später.',
        },
        {
          titel: 'Ausweichen auf Konjunktiv II',
          erklaerung:
            'Wo der Konjunktiv I nicht vom Indikativ zu unterscheiden ist (v. a. im Plural: „sie haben“ = Indikativ = Konj. I), weicht man auf den Konjunktiv II aus, um die Distanz sichtbar zu halten.',
          beispiel: 'Sie sagen, sie hätten keine Zeit. (nicht: „sie haben“ — das wäre nicht als Zitat erkennbar)',
        },
        {
          titel: '„sein“ als Sonderfall',
          erklaerung:
            'Das Verb „sein“ hat im Konjunktiv I durchgehend klare, eigene Formen: ich sei, du sei(e)st, er sei, wir seien, ihr seiet, sie seien — deshalb hier fast immer Konjunktiv I.',
          beispiel: 'Er behauptet, er sei unschuldig und die Vorwürfe seien haltlos.',
        },
        {
          titel: 'Zeitverschiebung in der indirekten Rede',
          erklaerung:
            'Die indirekte Rede kennt drei Zeitstufen: Gegenwart → Konj. I Präsens (habe/sei); Vergangenheit (alle drei) → Konj. I Perfekt (habe/sei + Partizip II); Zukunft → Konj. I mit „werde“.',
          beispiel: '„Ich kam zu spät.“ → Er sagte, er sei zu spät gekommen.',
        },
        {
          titel: 'Anpassung von Pronomen, Ort und Zeit',
          erklaerung:
            'Beim Umwandeln in indirekte Rede verschieben sich Pronomen (ich→er/sie), Orts- und Zeitangaben (hier→dort, heute→an jenem Tag) und Fragen werden zu „ob“- bzw. W-Wort-Nebensätzen.',
          beispiel: '„Kommst du morgen?“ → Sie fragte, ob er am nächsten Tag komme.',
        },
      ],
      beispiele: [
        { satz: 'Der Sprecher erklärte, die Regierung werde an ihrem Kurs festhalten.', hinweis: 'Zukunft in indirekter Rede: „werde“ + Infinitiv.' },
        { satz: 'Sie betont, sie habe von alledem nichts gewusst.', hinweis: 'Vergangenheit → Konj. I Perfekt „habe … gewusst“.' },
        { satz: 'Man munkelt, er sei bereits zurückgetreten.', hinweis: '„sein“ mit klarer Konj.-I-Form „sei“.' },
        { satz: 'Die Zeugen gaben an, sie hätten nichts Verdächtiges bemerkt.', hinweis: 'Plural: Ausweichen auf Konj. II „hätten“, weil „haben“ mehrdeutig wäre.' },
        { satz: 'Er fragte, wann der Bericht fertig sei.', hinweis: 'Indirekte W-Frage; „sei“ am Ende.' },
        { satz: 'In der Mitteilung heißt es, alle Termine fänden wie geplant statt.', hinweis: 'Konj. II „fänden“ statt uneindeutigem „finden“.' },
        { satz: 'Sie versicherte, sie werde sich umgehend darum kümmern.', hinweis: 'Distanzierte Wiedergabe eines Versprechens.' },
      ],
      anwendung: [
        'Der Konjunktiv I signalisiert: „Ich gebe wieder, ich behaupte es nicht selbst.“ Das ist im Gespräch Gold wert, wenn Sie sich von einer Aussage distanzieren wollen: „Er meint ja, das sei kein Problem …“',
        'Gesprochen benutzen viele die indirekte Rede mit „dass“ + Indikativ („Er sagt, dass er keine Zeit hat“). Das ist korrekt und üblich — der Konjunktiv I wirkt jedoch neutraler und distanzierter, besonders in Berichten, Referaten und Nachrichten.',
        'Nutzen Sie „sei“ und „habe“ als klare Marker; im Plural weichen Sie auf „hätten/wären/kämen“ aus, damit das Zitat erkennbar bleibt. So vermeiden Sie Missverständnisse.',
        'Typischer Fehler: Zeitstufe falsch. Vergangenes wird IMMER zu „habe/sei + Partizip“ — egal, ob das Original Präteritum, Perfekt oder Plusquamperfekt war.',
        'Mit dem Konjunktiv I können Sie höflich Zweifel andeuten, ohne offen zu widersprechen: „Sie sagt, es sei alles geklärt“ (Unterton: ob das stimmt, lasse ich offen).',
      ],
      uebungen: [
        { typ: 'Transformation', aufgabe: 'Indirekte Rede: „Ich habe keine Zeit.“ (Sie sagt, …)', hinweis: 'Gegenwart → Konj. I.', musterloesung: 'Sie sagt, sie habe keine Zeit.' },
        { typ: 'Transformation', aufgabe: 'Indirekte Rede: „Wir waren gestern im Kino.“ (Sie berichten, …)', hinweis: 'Vergangenheit + Plural → Konj. II ausweichen.', musterloesung: 'Sie berichten, sie seien am Vortag im Kino gewesen.' },
        { typ: 'Transformation', aufgabe: 'Indirekte Frage: „Kommst du mit?“ (Er fragte, …)', hinweis: 'Ja/Nein-Frage → „ob“.', musterloesung: 'Er fragte, ob sie mitkomme.' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie: „Der Minister sagte, er ____ (werden) zurücktreten, falls nötig.“', hinweis: 'Zukunft → „werde“.', musterloesung: 'werde' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie: „Sie behauptet, sie ____ (haben) den Brief nie ____ (erhalten).“', hinweis: 'Vergangenheit → Konj. I Perfekt.', musterloesung: 'habe … erhalten' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie: „Er sagt, er hat gestern angerufen.“ (neutrale Berichtsform)', hinweis: 'Vergangenheit → habe + Partizip.', musterloesung: 'Er sagt, er habe gestern angerufen.' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie: „Die Forscher erklärten, sie haben neue Belege gefunden.“', hinweis: 'Plural mehrdeutig → Konj. II.', musterloesung: 'Die Forscher erklärten, sie hätten neue Belege gefunden.' },
        { typ: 'Transformation', aufgabe: 'Indirekte Rede mit Zeit-/Ortsverschiebung: „Ich treffe dich morgen hier.“ (Er sagte, …)', hinweis: 'morgen→am nächsten Tag, hier→dort.', musterloesung: 'Er sagte, er treffe sie am nächsten Tag dort.' },
        { typ: 'Transformation', aufgabe: 'Wandeln Sie den Imperativ um: „Bleib ruhig!“ (Sie riet ihm, …)', hinweis: 'Aufforderung → „solle/möge“.', musterloesung: 'Sie riet ihm, er solle ruhig bleiben. (auch: … möge ruhig bleiben.)' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie „sein“: „Der Bericht besagt, die Lage ____ ernst, aber die Aussichten ____ gut.“', hinweis: 'Singular/Plural von „sein“.', musterloesung: 'sei … seien' },
        { typ: 'Paraphrase', aufgabe: 'Geben Sie distanziert wieder (mit Zweifel-Unterton): „Das Produkt ist völlig sicher.“ (Der Hersteller behauptet, …)', hinweis: 'Konj. I signalisiert Distanz.', musterloesung: 'Der Hersteller behauptet, das Produkt sei völlig sicher.' },
        { typ: 'Freie Produktion', aufgabe: 'Geben Sie eine kurze Nachricht (2 Sätze) im Nachrichtenstil in indirekter Rede wieder.', hinweis: 'Konj. I, neutraler Ton.', musterloesung: 'Beispiel: Nach Angaben der Behörde sei die Ursache noch unklar. Man werde die Öffentlichkeit informieren, sobald gesicherte Erkenntnisse vorlägen.' },
      ],
    },
    {
      id: 'subjektive-modalverben',
      titel: 'Subjektive Modalverben',
      kurzbeschreibung: 'Vermutung, Gerücht und Distanzierung — wie Modalverben Sprechereinschätzungen ausdrücken.',
      grammatik: [
        {
          titel: 'Objektiv vs. subjektiv',
          erklaerung:
            'Objektiv beschreiben Modalverben reale Umstände (Fähigkeit, Erlaubnis, Zwang). Subjektiv drücken sie den Grad der Sprechergewissheit über einen Sachverhalt aus. Die Form ist gleich, die Bedeutung ergibt sich aus dem Kontext.',
          beispiel: 'objektiv: Er kann schwimmen. — subjektiv: Er kann jetzt zu Hause sein. (Vermutung)',
        },
        {
          titel: 'Gewissheitsskala',
          erklaerung:
            '„müssen“ = starke, logisch zwingende Vermutung; „dürfte“ = begründete Annahme; „können/mag“ = Möglichkeit; „kann nicht“ = ausgeschlossen. So staffeln Sie Ihre Sicherheit fein.',
          beispiel: 'Sie muss krank sein (fast sicher). Sie dürfte krank sein (wahrscheinlich). Sie mag krank sein (möglich).',
        },
        {
          titel: '„sollen“ — Wiedergabe fremder Behauptung',
          erklaerung:
            'Subjektives „sollen“ gibt eine unbestätigte fremde Aussage wieder („man sagt, dass …“) — der Sprecher distanziert sich. „wollen“ hingegen gibt eine (bezweifelte) Selbstbehauptung des Subjekts wieder.',
          beispiel: 'Er soll sehr reich sein. (so heißt es) — Er will alles gesehen haben. (er behauptet es)',
        },
        {
          titel: 'Vergangenheit: Modalverb + Infinitiv Perfekt',
          erklaerung:
            'Die subjektive Vermutung über Vergangenes bildet sich mit „Modalverb + Partizip II + haben/sein“. Die Sprechereinschätzung bleibt im Präsens, der Inhalt liegt in der Vergangenheit.',
          beispiel: 'Sie muss den Zug verpasst haben. Er dürfte schon gegangen sein.',
        },
      ],
      beispiele: [
        { satz: 'Bei dem Lärm kann er unmöglich geschlafen haben.', hinweis: '„kann … nicht/unmöglich“ = ausgeschlossen; Vergangenheit.' },
        { satz: 'Das dürfte kein Zufall gewesen sein.', hinweis: '„dürfte“ = begründete Vermutung über Vergangenes.' },
        { satz: 'Angeblich soll die Firma vor dem Verkauf stehen.', hinweis: '„sollen“ = unbestätigtes Gerücht, Sprecher distanziert sich.' },
        { satz: 'Er will von nichts gewusst haben.', hinweis: '„wollen“ = bezweifelte Selbstbehauptung.' },
        { satz: 'Sie müsste eigentlich längst da sein.', hinweis: '„müsste“ (Konj. II) mildert die zwingende Vermutung leicht ab.' },
        { satz: 'Das mag ja stimmen, überzeugt mich aber nicht.', hinweis: '„mag“ = eingeräumte Möglichkeit mit Vorbehalt.' },
        { satz: 'Der Verdächtige will zur Tatzeit im Ausland gewesen sein.', hinweis: '„wollen“ + Infinitiv Perfekt: angezweifelte Behauptung über Vergangenes.' },
      ],
      anwendung: [
        'Mit der Gewissheitsskala klingen Sie präzise statt absolut: „Das dürfte reichen“ ist souveräner als ein pauschales „Das reicht“. Sie zeigen Urteilskraft und lassen sich eine Reserve.',
        'Subjektives „sollen“ ist Ihr elegantestes Distanzierungssignal im Gespräch: „Das neue Café soll gut sein“ — Sie geben ein Gerücht weiter, ohne dafür geradezustehen.',
        'Mit „wollen“ markieren Sie höflich Zweifel an einer fremden Selbstaussage: „Er will das nicht gesagt haben“ — Sie unterstellen nichts direkt, deuten aber Ihre Skepsis an.',
        'Typischer Fehler: „müssen“ subjektiv mit „müssen“ objektiv verwechseln. „Er muss zu Hause sein“ heißt je nach Betonung „Zwang“ oder „starke Vermutung“ — Kontext und Betonung entscheiden.',
        'Für die Vergangenheit unbedingt den Infinitiv Perfekt nehmen: „Sie muss es vergessen haben“ (nicht: „Sie musste es vergessen“ — das wäre objektiver Zwang in der Vergangenheit).',
      ],
      uebungen: [
        { typ: 'Transformation', aufgabe: 'Drücken Sie als starke Vermutung aus: „Wahrscheinlich hat er den Bus verpasst.“', hinweis: '„müssen“ + Infinitiv Perfekt.', musterloesung: 'Er muss den Bus verpasst haben.' },
        { typ: 'Transformation', aufgabe: 'Formulieren Sie als Gerücht: „Man sagt, die Preise steigen bald.“', hinweis: 'subjektives „sollen“.', musterloesung: 'Die Preise sollen bald steigen.' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie das passende Modalverb (begründete Annahme): „Es ist 18 Uhr — sie ____ jetzt eigentlich im Büro sein.“', hinweis: 'wahrscheinlich, aber nicht sicher.', musterloesung: 'dürfte (auch: müsste)' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie: „Der Zeuge ____ nichts gesehen haben, behauptet er zumindest.“', hinweis: 'bezweifelte Selbstaussage.', musterloesung: 'will' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie die Vergangenheitsform: „Sie muss den Termin vergessen.“ (Vermutung über Vergangenes)', hinweis: 'Infinitiv Perfekt nötig.', musterloesung: 'Sie muss den Termin vergessen haben.' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie: „Er soll krank, sagt man.“', hinweis: 'Vollverb fehlt.', musterloesung: 'Er soll krank sein, sagt man.' },
        { typ: 'Transformation', aufgabe: 'Räumen Sie eine Möglichkeit mit Vorbehalt ein: „Vielleicht hast du recht, aber …“', hinweis: '„mag“.', musterloesung: 'Du magst recht haben, aber … (auch: Das mag sein, aber …)' },
        { typ: 'Paraphrase', aufgabe: 'Drücken Sie Ausgeschlossenheit aus: „Es ist unmöglich, dass sie das getan hat.“', hinweis: '„kann … nicht“ + Infinitiv Perfekt.', musterloesung: 'Das kann sie nicht getan haben.' },
        { typ: 'Transformation', aufgabe: 'Distanzieren Sie sich von einer Behauptung: „Der Bericht ist angeblich manipuliert.“', hinweis: '„sollen“.', musterloesung: 'Der Bericht soll manipuliert sein.' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie die feinste Abstufung (wahrscheinlich, Konj. II): „Das ____ wohl ein Missverständnis gewesen sein.“', hinweis: '„dürfte“.', musterloesung: 'dürfte' },
        { typ: 'Paraphrase', aufgabe: 'Formulieren Sie skeptisch mit „wollen“: „Er sagt, er habe die E-Mail nie bekommen.“', hinweis: 'Zweifel an Selbstaussage.', musterloesung: 'Er will die E-Mail nie bekommen haben.' },
        { typ: 'Freie Produktion', aufgabe: 'Stellen Sie in 2 Sätzen zwei verschieden sichere Vermutungen über einen abwesenden Kollegen an.', hinweis: 'Zwei Stufen der Skala nutzen.', musterloesung: 'Beispiel: Er dürfte im Stau stehen, das passiert ihm oft. Anders lässt sich die Verspätung kaum erklären — er muss unterwegs aufgehalten worden sein.' },
      ],
    },
    {
      id: 'relativsaetze',
      titel: 'Komplexe Relativsätze',
      kurzbeschreibung: 'Präzise Bezüge herstellen: Genitiv-, Präpositional- und weiterführende Relativsätze.',
      grammatik: [
        {
          titel: 'Kasus im Relativsatz',
          erklaerung:
            'Das Relativpronomen richtet sich im Genus/Numerus nach dem Bezugswort, im Kasus aber nach seiner Funktion IM Relativsatz. Das ist der Kern jeder Fehlerquelle.',
          beispiel: 'Der Mann, dem ich vertraue, … (Dativ, weil „vertrauen“ den Dativ regiert).',
        },
        {
          titel: 'Genitiv-Relativpronomen (dessen/deren)',
          erklaerung:
            '„dessen“ (mask./neutr. Sg.) und „deren“ (fem. Sg. + Plural) drücken ein Besitz-/Zugehörigkeitsverhältnis aus. Das folgende Nomen steht ohne Artikel direkt dahinter.',
          beispiel: 'Die Autorin, deren Roman preisgekrönt wurde, liest heute Abend.',
        },
        {
          titel: 'Präposition + Relativpronomen',
          erklaerung:
            'Verlangt das Verb im Relativsatz eine Präposition, steht diese vor dem Relativpronomen. Bei Sachen ist auch „wo(r)+Präposition“ möglich, wirkt aber weniger präzise.',
          beispiel: 'Das Thema, über das wir sprachen, … / Der Grund, aus dem er ging, …',
        },
        {
          titel: 'Relativadverb „wo“ und „was“',
          erklaerung:
            'Bei Orts- und Zeitangaben nutzt man „wo“; nach „das“, „alles“, „nichts“, „etwas“, „vieles“ sowie nach ganzen Sätzen steht „was“.',
          beispiel: 'die Stadt, wo ich aufwuchs … / Er schwieg, was mich beunruhigte.',
        },
        {
          titel: 'Weiterführender Relativsatz',
          erklaerung:
            'Ein weiterführender Relativsatz (oft mit „was“) kommentiert den gesamten vorangehenden Hauptsatz und ersetzt einen Anschluss mit „und das“. Er wirkt eleganter als zwei Hauptsätze.',
          beispiel: 'Er sagte pünktlich zu, was ich sehr zu schätzen wusste.',
        },
      ],
      beispiele: [
        { satz: 'Der Kollege, auf dessen Urteil ich mich verlasse, ist im Urlaub.', hinweis: 'Genitiv + Präposition: „auf dessen Urteil“.' },
        { satz: 'Das ist genau die Unterstützung, mit der wir gerechnet hatten.', hinweis: 'Präposition „mit“ + Dativ-Relativpronomen „der“.' },
        { satz: 'Alles, was glänzt, ist nicht Gold.', hinweis: 'Nach „alles“ steht „was“.' },
        { satz: 'Sie wurde befördert, worüber sich das ganze Team freute.', hinweis: 'Weiterführend mit „wo(r)+über“, bezieht sich auf den ganzen Satz.' },
        { satz: 'Die Firma, deren Aktien gestiegen sind, expandiert nun.', hinweis: 'Genitiv Plural/fem. „deren“ + artikelloses Nomen.' },
        { satz: 'Das Dorf, in dem sie lebt, hat keinen Bahnhof.', hinweis: 'Präposition + Relativpronomen; alternativ „wo sie lebt“.' },
        { satz: 'Er kam zu spät, was niemanden überraschte.', hinweis: '„was“ kommentiert den gesamten Hauptsatz.' },
      ],
      anwendung: [
        'Der Kasus-Test rettet Sie jedes Mal: Fragen Sie, welche Rolle das Pronomen IM Relativsatz spielt. „Die Frau, ___ ich half“ → „helfen“ + Dativ → „der“.',
        '„dessen/deren“ heben Ihr Sprachniveau sichtbar — sie ersetzen umständliche „von dem/von der“-Konstruktionen. „Der Autor, dessen Werk …“ statt „Der Autor, von dem das Werk …“.',
        'Im Gespräch wirken weiterführende „was“-Sätze sehr souverän, weil sie eine Bewertung ohne neuen Hauptsatz anhängen: „… und er kam pünktlich, was mich freute.“ Flüssiger als zwei Sätze.',
        'Typischer Fehler: „deren“ mit „derer“ verwechseln. „derer“ ist ein Demonstrativpronomen (gehoben, „das Andenken derer, die …“), nicht das Genitiv-Relativpronomen.',
        'Vorsicht mit „wo“ bei Personen oder abstrakten Bezügen — „der Moment, wo …“ gilt als umgangssprachlich; präziser: „der Moment, in dem …“.',
      ],
      uebungen: [
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie das Relativpronomen: „Der Freund, ____ ich alles verdanke, ist umgezogen.“', hinweis: '„verdanken“ + Dativ.', musterloesung: 'dem' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie: „Die Studentin, ____ Arbeit ausgezeichnet wurde, promoviert jetzt.“', hinweis: 'Genitiv, feminin.', musterloesung: 'deren' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie Präposition + Pronomen: „Das Projekt, ____ ____ wir monatelang arbeiteten, ist gescheitert.“', hinweis: '„an … arbeiten“.', musterloesung: 'an dem' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie: „Der Mann, den ich helfe, ist mein Nachbar.“', hinweis: 'Kasus im Relativsatz prüfen.', musterloesung: 'Der Mann, dem ich helfe, ist mein Nachbar.' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie: „Alles, das ich weiß, habe ich von ihr.“', hinweis: 'Nach „alles“ steht …?', musterloesung: 'Alles, was ich weiß, habe ich von ihr.' },
        { typ: 'Transformation', aufgabe: 'Verbinden Sie mit Genitiv-Relativsatz: „Ich kenne den Professor. Seine Vorlesungen sind berühmt.“', hinweis: '„dessen“.', musterloesung: 'Ich kenne den Professor, dessen Vorlesungen berühmt sind.' },
        { typ: 'Transformation', aufgabe: 'Verbinden Sie mit Präposition + Relativpronomen: „Das ist das Ziel. Wir arbeiten darauf hin.“', hinweis: '„auf … hinarbeiten“.', musterloesung: 'Das ist das Ziel, auf das wir hinarbeiten.' },
        { typ: 'Transformation', aufgabe: 'Bilden Sie einen weiterführenden Relativsatz: „Er entschuldigte sich. Das versöhnte alle.“', hinweis: '„was“ für den ganzen Satz.', musterloesung: 'Er entschuldigte sich, was alle versöhnte.' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie „wo“ oder „in dem/der“: „das Jahr, ____ die Mauer fiel“', hinweis: 'Zeitangabe.', musterloesung: 'in dem (umgangssprachlich auch: wo)' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie: „Die Kinder, deren ich zuwinkte, lachten.“', hinweis: '„zuwinken“ regiert welchen Kasus?', musterloesung: 'Die Kinder, denen ich zuwinkte, lachten. (Dativ)' },
        { typ: 'Paraphrase', aufgabe: 'Ersetzen Sie die „von“-Konstruktion durch Genitiv: „Das Buch, von dem der Autor unbekannt ist, verkauft sich gut.“', hinweis: '„dessen“.', musterloesung: 'Das Buch, dessen Autor unbekannt ist, verkauft sich gut.' },
        { typ: 'Freie Produktion', aufgabe: 'Beschreiben Sie eine Person mit einem Genitiv-Relativsatz (dessen/deren) in einem Satz.', hinweis: 'Zugehörigkeit ausdrücken.', musterloesung: 'Beispiel: Meine Mentorin, deren Rat mir oft weitergeholfen hat, geht bald in den Ruhestand.' },
      ],
    },
    {
      id: 'nominalisierung',
      titel: 'Nominalisierung',
      kurzbeschreibung: 'Verdichten durch Substantivierung — der Nominalstil der Wissenschafts- und Amtssprache und sein maßvoller Einsatz.',
      grammatik: [
        {
          titel: 'Verbal- vs. Nominalstil',
          erklaerung:
            'Der Nominalstil packt Handlungen in Substantive und verdichtet Information. Er wirkt sachlich und kompakt, kann aber schwerfällig werden. Der Verbalstil ist lebendiger und leichter verständlich.',
          beispiel: 'verbal: Weil die Preise stiegen, sank die Nachfrage. → nominal: Wegen des Preisanstiegs sank die Nachfrage.',
        },
        {
          titel: 'Umwandlung Nebensatz → Nominalphrase',
          erklaerung:
            'Kausale, temporale, konditionale und konzessive Nebensätze lassen sich in Präpositionalphrasen mit Nominalisierung umformen: weil→wegen/aufgrund, wenn→bei/im Falle, nachdem→nach, obwohl→trotz.',
          beispiel: 'Nach Abschluss der Prüfung … (statt: Nachdem die Prüfung abgeschlossen war …)',
        },
        {
          titel: 'Bildung von Verbalsubstantiven',
          erklaerung:
            'Substantivierte Infinitive (das Lesen), Ableitungen auf „-ung“ (die Prüfung), „-tion“ (die Reduktion) oder Nullableitungen (der Beginn) bilden das Rückgrat des Nominalstils.',
          beispiel: 'die Durchführung, das Erreichen, der Verzicht, die Bewertung',
        },
        {
          titel: 'Genitivketten und ihre Grenzen',
          erklaerung:
            'Nominalisierungen ziehen Genitivattribute an. Zwei bis drei Glieder sind elegant; längere Ketten werden unlesbar. Dann besser wieder verbalisieren oder mit „von“ auflockern.',
          beispiel: 'lesbar: die Bewertung des Antrags — überladen: die Bewertung der Durchführung der Prüfung des Antrags',
        },
      ],
      beispiele: [
        { satz: 'Aufgrund anhaltender Nachfrage wurde die Produktion ausgeweitet.', hinweis: 'Kausaler Nominalstil mit „aufgrund“ + Genitiv.' },
        { satz: 'Bei Nichtbeachtung der Vorschriften droht ein Bußgeld.', hinweis: 'Konditional „bei“ ersetzt „wenn … nicht beachtet wird“.' },
        { satz: 'Trotz sorgfältiger Planung geriet der Zeitplan durcheinander.', hinweis: 'Konzessiv „trotz“ + Genitiv statt „obwohl“.' },
        { satz: 'Nach Prüfung der Unterlagen treffen wir eine Entscheidung.', hinweis: 'Temporal „nach“ verdichtet den „nachdem“-Satz.' },
        { satz: 'Die Einführung der Maßnahme führte zu einer deutlichen Verbesserung.', hinweis: 'Zwei Nominalisierungen, aber gut lesbar.' },
        { satz: 'Zum Zwecke der Beweissicherung wurden Fotos angefertigt.', hinweis: 'Finaler Nominalstil, typisch für Amtssprache.' },
        { satz: 'Das ständige Aufschieben wichtiger Aufgaben rächt sich am Ende.', hinweis: 'Substantivierter Infinitiv „das Aufschieben“ als Subjekt.' },
      ],
      anwendung: [
        'Nominalstil ist ein Werkzeug, kein Ideal: In Referaten und schriftlichen Zusammenfassungen verdichtet er wirkungsvoll. Im Gespräch aber lieber verbal — „weil die Kosten gestiegen sind“ klingt lebendiger als „wegen des Kostenanstiegs“.',
        'Nutzen Sie Nominalisierungen gezielt für Überschriften, Aufzählungen und den Einstieg in ein Thema; wechseln Sie dann in den Verbalstil, um verständlich zu bleiben.',
        'Ein einzelnes präzises Verbalsubstantiv wirkt souverän („die Umsetzung“, „der Verzicht“); eine Kette aus vieren erstickt den Satz. Faustregel: höchstens zwei Genitive hintereinander.',
        'Typischer Fehler: falsche Präposition beim Umwandeln — „wegen“ verlangt Genitiv (wegen des Regens), nicht Dativ. Umgangssprachliches „wegen dem Regen“ gilt geschrieben als Fehler.',
        'Erkennen Sie „Beamtendeutsch“ und entschärfen Sie es: Statt „Die Inangriffnahme der Bearbeitung erfolgt …“ sagen Sie „Wir beginnen mit der Bearbeitung …“. Weniger Substantive, mehr Verben.',
      ],
      uebungen: [
        { typ: 'Transformation', aufgabe: 'Nominalisieren Sie: „Nachdem er das Studium abgeschlossen hatte, zog er ins Ausland.“', hinweis: 'nachdem → nach + Nominalisierung.', musterloesung: 'Nach Abschluss des Studiums zog er ins Ausland.' },
        { typ: 'Transformation', aufgabe: 'Nominalisieren Sie: „Weil das Wetter schlecht war, wurde das Fest verschoben.“', hinweis: 'weil → wegen/aufgrund.', musterloesung: 'Wegen des schlechten Wetters wurde das Fest verschoben. (auch: Aufgrund des schlechten Wetters …)' },
        { typ: 'Transformation', aufgabe: 'Verbalisieren Sie (Nominalstil auflösen): „Bei Überschreitung der Frist entfällt der Anspruch.“', hinweis: 'bei → wenn.', musterloesung: 'Wenn die Frist überschritten wird, entfällt der Anspruch.' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie die richtige Präposition + Kasus: „____ mangelnder Beweise wurde das Verfahren eingestellt.“', hinweis: 'kausal, Genitiv.', musterloesung: 'Wegen / Aufgrund (mangelnder Beweise)' },
        { typ: 'Lückentext', aufgabe: 'Nominalisieren Sie das Verb: „Die ____ (durchführen) des Projekts dauerte zwei Jahre.“', hinweis: '„-ung“-Ableitung.', musterloesung: 'Durchführung' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie den Kasus: „Wegen dem Streik fielen viele Züge aus.“', hinweis: '„wegen“ + welcher Kasus?', musterloesung: 'Wegen des Streiks fielen viele Züge aus.' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Entschärfen Sie das überladene Beamtendeutsch: „Zwecks Ermöglichung der Durchführung der Prüfung …“', hinweis: 'Verbalisieren, Substantive abbauen.', musterloesung: 'Damit die Prüfung durchgeführt werden kann, … (auch: Um die Prüfung zu ermöglichen, …)' },
        { typ: 'Transformation', aufgabe: 'Nominalisieren Sie konzessiv: „Obwohl man sorgfältig geplant hatte, gab es Verzögerungen.“', hinweis: 'obwohl → trotz + Genitiv.', musterloesung: 'Trotz sorgfältiger Planung gab es Verzögerungen.' },
        { typ: 'Transformation', aufgabe: 'Verbalisieren Sie: „Nach Eingang Ihrer Zahlung versenden wir die Ware.“', hinweis: 'nach → sobald/wenn.', musterloesung: 'Sobald Ihre Zahlung eingegangen ist, versenden wir die Ware.' },
        { typ: 'Paraphrase', aufgabe: 'Machen Sie den Nominalstil mündlich-lebendig: „Die Nichteinhaltung der Absprachen führte zum Vertrauensverlust.“', hinweis: 'Verben statt Substantive.', musterloesung: 'Weil die Absprachen nicht eingehalten wurden, ging das Vertrauen verloren.' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie einen substantivierten Infinitiv als Subjekt: „____ (verzichten) auf Zucker fiel ihm schwer.“', hinweis: 'das + großgeschriebener Infinitiv.', musterloesung: 'Das Verzichten (auch: Der Verzicht)' },
        { typ: 'Freie Produktion', aufgabe: 'Formulieren Sie eine Überschrift im Nominalstil und denselben Inhalt darunter im Verbalstil (je 1 Satz).', hinweis: 'Kontrast der Register zeigen.', musterloesung: 'Beispiel: Überschrift: „Senkung der Emissionen bis 2030“. Fließtext: „Bis 2030 sollen die Emissionen deutlich gesenkt werden.“' },
      ],
    },
  ],
}

const modulB: Modul = {
  id: 'modul-b',
  titel: 'Modul B — Kompaktheit & Nuance',
  untertitel: 'Verdichtung und Feinabstimmung: mehr sagen mit weniger, präziser gefärbt.',
  themen: [
    {
      id: 'partizipialattribute',
      titel: 'Partizipialattribute',
      kurzbeschreibung: 'Ganze Relativsätze in ein vorangestelltes Attribut verdichten — das Kennzeichen gehobenen Schriftdeutschs.',
      grammatik: [
        {
          titel: 'Partizip I als Attribut (Aktiv, gleichzeitig)',
          erklaerung:
            'Das Partizip I (Infinitiv + „-d“) beschreibt einen laufenden, aktiven Vorgang, gleichzeitig zum Hauptgeschehen. Es wird wie ein Adjektiv dekliniert und steht vor dem Nomen.',
          beispiel: 'das lachende Kind = das Kind, das lacht',
        },
        {
          titel: 'Partizip II als Attribut (Passiv/abgeschlossen)',
          erklaerung:
            'Das Partizip II drückt bei transitiven Verben ein Passiv aus (das Ergebnis), bei intransitiven Perfektverben einen abgeschlossenen Vorgang. Ebenfalls dekliniert.',
          beispiel: 'der reparierte Wagen = der Wagen, der repariert wurde',
        },
        {
          titel: 'Erweitertes Partizipialattribut',
          erklaerung:
            'Zwischen Artikel und Partizip lässt sich ein ganzer Bündel von Angaben schieben. Diese „eingeschobene Klammer“ komprimiert einen Relativsatz vollständig — sehr dicht, typisch schriftsprachlich.',
          beispiel: 'die vom Ausschuss nach langer Debatte beschlossene Reform',
        },
        {
          titel: 'Gerundivum: „zu“ + Partizip I',
          erklaerung:
            'Das attributive „zu“ + Partizip I drückt eine passivische Notwendigkeit oder Möglichkeit aus (entspricht „sein + zu“). Sehr kompakt und formell.',
          beispiel: 'die zu lösende Aufgabe = die Aufgabe, die gelöst werden muss',
        },
        {
          titel: 'Auflösen in Relativsätze',
          erklaerung:
            'Erweiterte Partizipialattribute können den Lesefluss bremsen. Für gesprochenes Deutsch und für Verständlichkeit löst man sie in Relativsätze auf — die Bedeutung bleibt, die Struktur wird klarer.',
          beispiel: 'die Reform, die der Ausschuss nach langer Debatte beschloss (aufgelöst)',
        },
      ],
      beispiele: [
        { satz: 'Die aus allen Fachbereichen zusammengesetzte Kommission tagte zwei Tage.', hinweis: 'Erweitertes Partizip II-Attribut, passivisch.' },
        { satz: 'Wir suchen eine motivierte, teamfähige Fachkraft.', hinweis: 'Partizip I („motiviert“ hier lexikalisiert) als schlichtes Adjektivattribut.' },
        { satz: 'Das ist eine ernst zu nehmende Warnung.', hinweis: 'Gerundivum „zu nehmende“ = die genommen/beachtet werden muss.' },
        { satz: 'Der seit Wochen andauernde Streik lähmt den Verkehr.', hinweis: 'Partizip I mit Zeitangabe, gleichzeitig-aktiv.' },
        { satz: 'Die im Vertrag festgelegten Bedingungen gelten unverändert.', hinweis: 'Partizip II mit Ortsangabe, abgeschlossen-passivisch.' },
        { satz: 'Ein alle Erwartungen übertreffendes Ergebnis.', hinweis: 'Erweitertes Partizip I-Attribut mit Akkusativobjekt darin.' },
        { satz: 'Die noch zu klärenden Fragen vertagen wir.', hinweis: 'Gerundivum: „die noch geklärt werden müssen“.' },
      ],
      anwendung: [
        'Erweiterte Partizipialattribute sind schriftsprachliche Verdichtung — im Gespräch klingen sie gestelzt. Sagen Sie „die Reform, die gestern beschlossen wurde“, nicht „die gestern beschlossene Reform“, wenn Sie natürlich wirken wollen.',
        'Nutzen Sie kurze Partizipien aber ruhig auch mündlich: „die steigenden Preise“, „ein gelungener Abend“ — das ist idiomatisch und kompakt, ohne steif zu sein.',
        'Beim Zuhören/Lesen entschlüsseln Sie lange Attribute, indem Sie zuerst Artikel und Nomen zusammensuchen („die … Reform“) und dann das Dazwischen als Relativsatz denken.',
        'Typischer Fehler: Partizip I für Vergangenheit nutzen. „das gefallende Blatt“ gibt es nicht — Partizip I ist immer gleichzeitig-aktiv; für das gefallene Blatt braucht es das Partizip II.',
        'Das Gerundivum („die zu erledigenden Aufgaben“) wirkt sehr formell und effizient in To-do-Listen und Berichten; mündlich lieber „die Aufgaben, die noch zu erledigen sind“ oder „… die wir noch erledigen müssen“.',
      ],
      uebungen: [
        { typ: 'Transformation', aufgabe: 'Verkürzen Sie zum Partizipialattribut: „das Buch, das viel diskutiert wird“', hinweis: 'Partizip II, passivisch.', musterloesung: 'das viel diskutierte Buch' },
        { typ: 'Transformation', aufgabe: 'Verkürzen Sie: „die Sonne, die untergeht“', hinweis: 'Partizip I, gleichzeitig.', musterloesung: 'die untergehende Sonne' },
        { typ: 'Transformation', aufgabe: 'Lösen Sie in einen Relativsatz auf: „die von der Jury einstimmig ausgezeichnete Arbeit“', hinweis: 'Artikel+Nomen zuerst suchen.', musterloesung: 'die Arbeit, die von der Jury einstimmig ausgezeichnet wurde' },
        { typ: 'Lückentext', aufgabe: 'Bilden Sie das Gerundivum: „die noch ____ (lösen) Probleme“', hinweis: 'zu + Partizip I, dekliniert.', musterloesung: 'zu lösenden' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie das richtige Partizip: „ein gut ____ (bezahlen) Job“', hinweis: 'passivisch, abgeschlossen.', musterloesung: 'bezahlter' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie: „das gestern ankommende Paket ist beschädigt.“ (Es ist bereits angekommen.)', hinweis: 'Partizip I vs. II.', musterloesung: 'das gestern angekommene Paket ist beschädigt' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie die Deklination: „die vom Sturm zerstörte Häuser wurden abgerissen.“', hinweis: 'Plural-Endung des Partizips.', musterloesung: 'die vom Sturm zerstörten Häuser wurden abgerissen' },
        { typ: 'Transformation', aufgabe: 'Verkürzen Sie das erweiterte Attribut: „die Vorschläge, die im Ausschuss beraten wurden“', hinweis: 'Angabe einschieben.', musterloesung: 'die im Ausschuss beratenen Vorschläge' },
        { typ: 'Transformation', aufgabe: 'Formulieren Sie mit Gerundivum: „Aufgaben, die man dringend erledigen muss“', hinweis: 'zu + Partizip I.', musterloesung: 'dringend zu erledigende Aufgaben' },
        { typ: 'Paraphrase', aufgabe: 'Machen Sie mündlich-natürlich: „die nach zähen Verhandlungen erzielte Einigung“', hinweis: 'Relativsatz, gesprochener Stil.', musterloesung: 'die Einigung, die man nach zähen Verhandlungen erzielt hat' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie Partizip I: „ein alle ____ (überraschen) Wahlergebnis“', hinweis: 'erweitertes Partizip I mit Objekt.', musterloesung: 'überraschendes' },
        { typ: 'Freie Produktion', aufgabe: 'Beschreiben Sie ein Objekt in einem Satz mit einem erweiterten Partizipialattribut.', hinweis: 'Angaben zwischen Artikel und Partizip.', musterloesung: 'Beispiel: Der von Kritikern hochgelobte, aber kommerziell erfolglose Film läuft nur noch in wenigen Kinos.' },
      ],
    },
    {
      id: 'funktionsverbgefuege',
      titel: 'Funktionsverbgefüge',
      kurzbeschreibung: 'Feste Verbindungen aus blassem Verb und Substantiv — das Register der Amts- und Fachsprache.',
      grammatik: [
        {
          titel: 'Was ist ein Funktionsverbgefüge?',
          erklaerung:
            'Ein Funktionsverbgefüge (FVG) besteht aus einem bedeutungsarmen „Funktionsverb“ (stellen, bringen, kommen, treffen, nehmen …) und einem Substantiv, das die eigentliche Bedeutung trägt. Zusammen ersetzen sie ein Vollverb.',
          beispiel: 'eine Entscheidung treffen = entscheiden; in Frage stellen = bezweifeln',
        },
        {
          titel: 'Aktiv vs. passiv-orientierte FVG',
          erklaerung:
            'Manche FVG betonen die Handlung/den Beginn („in Gang setzen“, „zur Sprache bringen“), andere den Zustand/das Ergebnis („in Frage stehen“, „zur Debatte stehen“). Die Wahl steuert die Perspektive fein.',
          beispiel: 'etwas in Bewegung setzen (Handlung) — in Bewegung sein (Zustand)',
        },
        {
          titel: 'Feste Präpositionen',
          erklaerung:
            'Viele FVG haben eine feste Präposition, deren Kasus man mitlernen muss: „in Betracht ziehen“ (Akk.), „zur Verfügung stehen“ (Dat.), „unter Beweis stellen“. Diese Fügungen sind unveränderlich.',
          beispiel: 'etwas in Betracht ziehen, jemandem zur Verfügung stehen, Kritik üben an (+ Dat.)',
        },
        {
          titel: 'Stilwirkung und Nominalstil',
          erklaerung:
            'FVG heben das Register: Sie klingen formell, präzise und leicht distanziert — ideal für Verträge, Berichte, offizielle Reden. Übertrieben eingesetzt wirken sie aufgebläht und bürokratisch.',
          beispiel: 'in Erwägung ziehen (formell) vs. überlegen (neutral)',
        },
      ],
      beispiele: [
        { satz: 'Wir müssen diese Option ernsthaft in Betracht ziehen.', hinweis: 'FVG „in Betracht ziehen“ = erwägen; formell.' },
        { satz: 'Der Vorschlag steht morgen zur Debatte.', hinweis: 'Zustands-FVG „zur Debatte stehen“ = wird diskutiert.' },
        { satz: 'Sie stellte ihr Können eindrucksvoll unter Beweis.', hinweis: '„unter Beweis stellen“ = beweisen; gehoben.' },
        { satz: 'Die Reform brachte einen Wandel in Gang.', hinweis: '„in Gang bringen“ = starten; betont die Handlung.' },
        { satz: 'Ich möchte Ihre Behauptung in Frage stellen.', hinweis: '„in Frage stellen“ = bezweifeln; höflich-distanziert.' },
        { satz: 'Für Rückfragen stehe ich Ihnen jederzeit zur Verfügung.', hinweis: 'Höfliche Formel; „zur Verfügung stehen“ + Dativ.' },
        { satz: 'Die Behörde hat Anzeige gegen ihn erstattet.', hinweis: '„Anzeige erstatten“ = anzeigen; feste juristische Fügung.' },
      ],
      anwendung: [
        'FVG sind Register-Verstärker: Ein einziges „in Erwägung ziehen“ statt „überlegen“ hebt Ihre Rede spürbar ins Formelle. Setzen Sie sie gezielt in offiziellen Kontexten, nicht im Plauderton.',
        'Im Alltag lieber das schlichte Vollverb: Sagen Sie „Ich entscheide das morgen“, nicht „Ich treffe morgen eine Entscheidung darüber“, wenn es locker bleiben soll — sonst wirken Sie steif.',
        'Lernen Sie FVG als Ganzes samt Präposition und Kasus. „Kritik üben an“ (+ Dat.), „Einfluss nehmen auf“ (+ Akk.) — die Präposition ist nicht frei wählbar.',
        'Typischer Fehler: falsches Funktionsverb. Es heißt „eine Entscheidung TREFFEN“ (nicht „machen“ — Anglizismus!) und „eine Frage STELLEN“ (nicht „fragen stellen“).',
        'FVG mit „zur Sprache bringen“, „in Aussicht stellen“, „zum Ausdruck bringen“ machen Sie in Diskussionen souverän — sie klingen diplomatisch und geben Ihren Aussagen Gewicht.',
      ],
      uebungen: [
        { typ: 'Transformation', aufgabe: 'Ersetzen Sie das Vollverb durch ein FVG: „Wir entscheiden das kommende Woche.“', hinweis: '„eine Entscheidung treffen“.', musterloesung: 'Wir treffen kommende Woche eine Entscheidung.' },
        { typ: 'Transformation', aufgabe: 'Lösen Sie das FVG in ein Vollverb auf: „Sie zog seine Ehrlichkeit in Zweifel.“', hinweis: '„in Zweifel ziehen“ = ?', musterloesung: 'Sie bezweifelte seine Ehrlichkeit.' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie das Funktionsverb: „Die neue Regel ____ morgen in Kraft.“', hinweis: 'Zustand/Beginn eines Gesetzes.', musterloesung: 'tritt' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie das Funktionsverb: „Dürfte ich eine Frage ____?“', hinweis: 'nicht „machen“!', musterloesung: 'stellen' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie den Anglizismus: „Ich muss eine wichtige Entscheidung machen.“', hinweis: 'falsches Funktionsverb.', musterloesung: 'Ich muss eine wichtige Entscheidung treffen.' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie die Präposition: „Wir müssen das in Betracht nehmen.“', hinweis: 'FVG „in Betracht …“.', musterloesung: 'Wir müssen das in Betracht ziehen.' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie das FVG: „Nach langer Diskussion ____ wir schließlich zu einem Ergebnis.“', hinweis: '„zu einem Ergebnis kommen“.', musterloesung: 'kamen' },
        { typ: 'Transformation', aufgabe: 'Heben Sie das Register mit einem FVG: „Bitte helfen Sie mir dabei.“ (formell: mir helfen = ?)', hinweis: '„Unterstützung leisten / zur Seite stehen“.', musterloesung: 'Bitte stehen Sie mir dabei zur Seite. (auch: … leisten Sie mir Unterstützung.)' },
        { typ: 'Paraphrase', aufgabe: 'Formulieren Sie alltagsnah (FVG auflösen): „Ich möchte meine Anerkennung zum Ausdruck bringen.“', hinweis: 'schlichtes Vollverb.', musterloesung: 'Ich möchte mich anerkennend äußern. (auch: Ich möchte meine Anerkennung ausdrücken / zeigen.)' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie: „Er stellte seine Kompetenz eindrucksvoll unter ____.“', hinweis: 'FVG „unter … stellen“.', musterloesung: 'Beweis' },
        { typ: 'Transformation', aufgabe: 'Ersetzen Sie durch ein FVG: „Der Minister beeinflusste die Verhandlungen stark.“', hinweis: '„Einfluss nehmen auf“ (+ Akk.).', musterloesung: 'Der Minister nahm starken Einfluss auf die Verhandlungen.' },
        { typ: 'Freie Produktion', aufgabe: 'Schreiben Sie zwei formelle Sätze für eine offizielle E-Mail, jeder mit einem FVG.', hinweis: 'gehobenes Register.', musterloesung: 'Beispiel: Für weitere Fragen stehe ich Ihnen gern zur Verfügung. Ihren Vorschlag werden wir umgehend in Erwägung ziehen.' },
      ],
    },
    {
      id: 'modalpartikeln',
      titel: 'Modalpartikeln',
      kurzbeschreibung: 'Die „Würzwörter“ des Deutschen: doch, ja, mal, halt, eben, wohl — sie färben die Haltung des Sprechers.',
      grammatik: [
        {
          titel: 'Funktion der Modalpartikeln',
          erklaerung:
            'Modalpartikeln („Abtönungspartikeln“) tragen keine wörtliche Bedeutung, sondern signalisieren die Haltung des Sprechers und den Bezug zum Gesprächspartner. Sie sind unbetont, unflektierbar und stehen im Mittelfeld.',
          beispiel: 'Komm doch mal her! (freundlich-auffordernd, nicht wörtlich „doch“ + „mal“)',
        },
        {
          titel: 'doch, ja, eben, halt',
          erklaerung:
            '„doch“ appelliert an gemeinsames Wissen oder mildert eine Aufforderung; „ja“ betont Selbstverständliches oder warnt; „eben/halt“ drücken resignative Unabänderlichkeit aus (halt eher süddeutsch/locker, eben neutraler).',
          beispiel: 'Das ist ja klar. — Sei doch nicht so streng. — Dann müssen wir eben warten.',
        },
        {
          titel: 'mal, denn, wohl, schon',
          erklaerung:
            '„mal“ macht Aufforderungen beiläufig-freundlich; „denn“ nimmt Fragen die Schärfe; „wohl“ drückt Vermutung aus; „schon“ beschwichtigt oder räumt ein.',
          beispiel: 'Wo ist er denn? — Er wird wohl im Stau stehen. — Das wird schon klappen.',
        },
        {
          titel: 'Kombination und Stellung',
          erklaerung:
            'Modalpartikeln lassen sich kombinieren, in fester Reihenfolge (z. B. „ja mal“, „doch mal“, „doch wohl“). Sie stehen typischerweise nach dem finiten Verb und den Pronomen, vor der neuen Information.',
          beispiel: 'Ruf ihn doch mal an. — Das hast du doch wohl nicht ernst gemeint?',
        },
      ],
      beispiele: [
        { satz: 'Setz dich doch!', hinweis: '„doch“ macht die Aufforderung freundlich-einladend statt befehlend.' },
        { satz: 'Das war ja klar!', hinweis: '„ja“ betont: es war erwartbar, wir wissen es beide.' },
        { satz: 'Dann bleiben wir eben zu Hause.', hinweis: '„eben“ = resignative Einsicht in das Unabänderliche.' },
        { satz: 'Wie heißt du denn?', hinweis: '„denn“ nimmt der Frage die Schroffheit, wirkt zugewandt.' },
        { satz: 'Er ist wohl krank.', hinweis: '„wohl“ = ich vermute es, bin nicht sicher.' },
        { satz: 'Nun mach schon!', hinweis: '„schon“ als drängend-ungeduldige Aufforderung.' },
        { satz: 'Das ist doch wohl ein Scherz, oder?', hinweis: 'Kombination „doch wohl“ = ungläubige, appellierende Nachfrage.' },
      ],
      anwendung: [
        'Modalpartikeln sind der Schlüssel zu natürlichem, „muttersprachlichem“ Klang. Ohne sie wirkt korrektes Deutsch oft roboterhaft. „Komm her“ ist ein Befehl; „Komm doch mal her“ ist eine warme Einladung.',
        'Setzen Sie „doch“ und „mal“ ein, um Aufforderungen zu entschärfen — sehr wichtig für Höflichkeit im Gespräch: „Schau dir das mal an“ klingt kollegial, „Schau dir das an“ kann kommandierend wirken.',
        '„denn“ in Fragen ist fast Pflicht für zugewandte Konversation: „Was machst du denn so?“ signalisiert echtes Interesse; „Was machst du?“ klingt fast wie ein Verhör.',
        'Typischer Fehler: Modalpartikeln betonen oder wörtlich nehmen. Sie sind IMMER unbetont; „doch“ als Modalpartikel hat nichts mit dem Widerspruchs-„doch!“ zu tun.',
        'Vorsicht mit der Dosis: Zu viele Partikeln wirken schludrig. Ein bis zwei pro Äußerung reichen, um die Haltung zu färben — sie sind Gewürz, keine Hauptzutat.',
      ],
      uebungen: [
        { typ: 'Lückentext', aufgabe: 'Machen Sie die Aufforderung freundlicher: „Ruf mich an!“ → „Ruf mich ____ ____ an!“', hinweis: 'einladend, beiläufig.', musterloesung: 'doch mal' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie die zugewandte Frage: „Wie spät ist es ____?“', hinweis: 'Frage entschärfen.', musterloesung: 'denn' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie die Vermutung: „Sie ist noch nicht da — sie steht ____ im Stau.“', hinweis: 'unsichere Annahme.', musterloesung: 'wohl' },
        { typ: 'Transformation', aufgabe: 'Fügen Sie eine resignative Nuance hinzu: „Dann müssen wir warten.“', hinweis: '„eben“ oder „halt“.', musterloesung: 'Dann müssen wir eben (halt) warten.' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie die Stellung: „Doch komm her!“', hinweis: 'Modalpartikel steht im Mittelfeld, nicht am Anfang.', musterloesung: 'Komm doch her!' },
        { typ: 'Paraphrase', aufgabe: 'Erklären Sie den Unterschied und formulieren Sie beide: neutrale vs. abgetönte Aufforderung „Sei leise.“', hinweis: '„doch“/„mal“ mildert.', musterloesung: 'Neutral/streng: „Sei leise.“ Abgetönt/freundlich: „Sei doch mal leise.“ (oder: „Sei doch bitte leise.“)' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie das Erstaunen: „Das ist ____ klar, dass er sich freut!“', hinweis: 'Selbstverständliches betonen.', musterloesung: 'ja' },
        { typ: 'Transformation', aufgabe: 'Machen Sie beschwichtigend: „Es wird funktionieren.“', hinweis: '„schon“.', musterloesung: 'Es wird schon funktionieren.' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie: „Was machst denn du hier eigentlich denn?“ (doppeltes „denn“)', hinweis: 'eine Partikel genügt.', musterloesung: 'Was machst du denn hier eigentlich?' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie die ungläubige Nachfrage: „Das meinst du ____ ____ nicht ernst?“', hinweis: 'Kombination.', musterloesung: 'doch wohl' },
        { typ: 'Paraphrase', aufgabe: 'Färben Sie die Aussage vorwurfsvoll-appellierend: „Du hast es mir versprochen.“', hinweis: '„doch“ appelliert an gemeinsames Wissen.', musterloesung: 'Du hast es mir doch versprochen!' },
        { typ: 'Freie Produktion', aufgabe: 'Schreiben Sie einen kurzen, natürlich klingenden Dialog (3 Repliken) mit mindestens drei verschiedenen Modalpartikeln.', hinweis: 'Haltung färben, nicht übertreiben.', musterloesung: 'Beispiel: — Kommst du denn heute Abend mit? — Ach, ich bin halt ziemlich müde. — Komm doch einfach mal für eine Stunde, das wird dir schon guttun!' },
      ],
    },
    {
      id: 'wortbildung',
      titel: 'Wortbildung',
      kurzbeschreibung: 'Komposition, Ableitung und Präfixe — wie das Deutsche seinen Wortschatz systematisch erweitert.',
      grammatik: [
        {
          titel: 'Komposition (Zusammensetzung)',
          erklaerung:
            'Das Deutsche bildet neue Wörter durch Aneinanderfügen. Das letzte Glied (Grundwort) bestimmt Wortart, Genus und Grundbedeutung; die davor stehenden Glieder (Bestimmungswörter) präzisieren. Oft steht ein Fugenelement (-s-, -n-, -en-) dazwischen.',
          beispiel: 'die Arbeit + s + Zeit = die Arbeitszeit (fem., weil „Zeit“ das Grundwort ist)',
        },
        {
          titel: 'Derivation (Ableitung) mit Suffixen',
          erklaerung:
            'Suffixe verändern die Wortart und die Bedeutung: „-ung“ (Handlung/Ergebnis), „-heit/-keit“ (Eigenschaft), „-bar/-lich/-sam“ (Adjektive), „-ieren“ (Verben). So entstehen aus einem Stamm ganze Wortfamilien.',
          beispiel: 'frei → die Freiheit; lösen → lösbar; die Reform → reformieren',
        },
        {
          titel: 'Trennbare vs. untrennbare Präfixe',
          erklaerung:
            'Trennbare Präfixe (an-, auf-, mit-, zu-, ein- …) sind betont und lösen sich ab (er ruft an). Untrennbare (be-, ver-, er-, ent-, zer-, ge-) sind unbetont und bleiben fest; sie bilden das Partizip II ohne „ge-“.',
          beispiel: 'anrufen → er ruft an, hat angerufen — verstehen → er versteht, hat verstanden',
        },
        {
          titel: 'Bedeutungsnuancen der Präfixe',
          erklaerung:
            'Präfixe verschieben die Bedeutung systematisch: „ver-“ oft Fehler/Abschluss (sich verlaufen, verblühen), „zer-“ Zerstörung (zerbrechen), „ent-“ Entfernung/Beginn (entfernen, entflammen), „er-“ Erreichen eines Ziels (erarbeiten).',
          beispiel: 'suchen → versuchen (probieren) / ersuchen (bitten) / durchsuchen (untersuchen)',
        },
      ],
      beispiele: [
        { satz: 'Die Geschwindigkeitsbegrenzung gilt nur nachts.', hinweis: 'Kompositum aus drei Gliedern; Grundwort „Begrenzung“ (fem.).' },
        { satz: 'Seine Unnachgiebigkeit machte jede Einigung unmöglich.', hinweis: 'Ableitungskette: nachgeben → nachgiebig → Nachgiebigkeit → un-.' },
        { satz: 'Sie hat den Termin leider verschwitzt.', hinweis: '„ver-“ signalisiert hier das Versäumnis (umgangssprachlich für „vergessen“).' },
        { satz: 'Das Eis ist über Nacht zerschmolzen.', hinweis: '„zer-“ = vollständige Auflösung; untrennbar, Partizip ohne „ge-“.' },
        { satz: 'Wir müssen die alten Verträge auflösen.', hinweis: 'Trennbar „auf-“: er löst auf, hat aufgelöst.' },
        { satz: 'Die Entwicklung ist nicht mehr aufzuhalten.', hinweis: 'Ableitung „Entwicklung“ + Gerundivum „aufzuhalten“.' },
        { satz: 'Diese Argumentation ist nicht nachvollziehbar.', hinweis: 'Kompositum-Ableitung: nach + vollziehen + -bar.' },
      ],
      anwendung: [
        'Wortbildungsregeln machen Sie produktiv: Wenn Sie „-bar“, „-heit/-keit“ und die Präfixe beherrschen, können Sie Wörter selbst bilden und unbekannte entschlüsseln — das erweitert Ihren aktiven Wortschatz enorm.',
        'Achten Sie beim Sprechen auf die Betonung: Trennbare Präfixe sind betont (ÚMziehen = Wohnung wechseln), untrennbare unbetont (umZÍEHen im Sinne von umgeben) — die Betonung ändert oft die Bedeutung.',
        'Nutzen Sie Ableitungen, um Anglizismen zu vermeiden: Statt „downloaden“ geht „herunterladen“, statt „updaten“ „aktualisieren“. Deutsche Wortbildung bietet fast immer eine Alternative.',
        'Typischer Fehler: bei untrennbaren Verben fälschlich ein „ge-“ ins Partizip setzen. Es heißt „verstanden“, „bekommen“, „erklärt“ — nie „geverstanden“.',
        'Vorsicht bei Komposita-Genus: Nicht das erste, sondern das LETZTE Glied bestimmt den Artikel. „das Land“ + „die Karte“ = „die Landkarte“ (fem.!), nicht „das Landkarte“.',
      ],
      uebungen: [
        { typ: 'Lückentext', aufgabe: 'Welcher Artikel? „____ Haustürschlüssel“ (Haus + Tür + Schlüssel)', hinweis: 'Grundwort bestimmt Genus.', musterloesung: 'der (der Schlüssel)' },
        { typ: 'Transformation', aufgabe: 'Bilden Sie das Substantiv auf „-keit“: „müde“', hinweis: 'Eigenschaft.', musterloesung: 'die Müdigkeit' },
        { typ: 'Transformation', aufgabe: 'Bilden Sie ein Adjektiv auf „-bar“: „Das kann man verzeihen.“', hinweis: 'Verbstamm + -bar.', musterloesung: 'verzeihlich / verzeihbar (üblich: verzeihlich)' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie das Fugenelement: „die Arbeit__zeit“ (Arbeit + Zeit)', hinweis: 'typische s-Fuge nach „-eit“.', musterloesung: 's (die Arbeitszeit)' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie das Partizip: „Ich habe die Aufgabe gebekommen.“', hinweis: 'untrennbares Präfix „be-“.', musterloesung: 'Ich habe die Aufgabe bekommen.' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie: „Er hat gestern umgezogen.“ (Wohnungswechsel)', hinweis: 'Hilfsverb bei „umziehen“ (Bewegung).', musterloesung: 'Er ist gestern umgezogen.' },
        { typ: 'Transformation', aufgabe: 'Bilden Sie ein Verb mit passendem Präfix (Zerstörung): „das Glas / in Stücke gehen“', hinweis: '„zer-“.', musterloesung: 'Das Glas zerbrach (zersprang).' },
        { typ: 'Paraphrase', aufgabe: 'Ersetzen Sie den Anglizismus durch eine deutsche Ableitung: „Kannst du die Datei mal downloaden?“', hinweis: 'trennbares Verb.', musterloesung: 'Kannst du die Datei mal herunterladen?' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie das Präfix (Fehler/Versäumnis): „Ich habe mich im Datum ____tan.“', hinweis: '„ver-“.', musterloesung: 'vertan' },
        { typ: 'Transformation', aufgabe: 'Bilden Sie die ganze Wortfamilie zu „arbeit-“: ein Verb, ein Adjektiv, ein weiteres Substantiv.', hinweis: 'Ableitungen.', musterloesung: 'Beispiel: arbeiten (Verb), arbeitsam (Adjektiv), der Arbeiter / die Bearbeitung (Substantive)' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie das Genus: „Ich brauche einen neuen Landkarte.“', hinweis: 'Grundwort „Karte“.', musterloesung: 'Ich brauche eine neue Landkarte.' },
        { typ: 'Freie Produktion', aufgabe: 'Bilden Sie drei möglichst lange, aber sinnvolle Komposita und geben Sie den Artikel an.', hinweis: 'Grundwort entscheidet.', musterloesung: 'Beispiel: die Krankenversicherungskarte, der Verkehrssicherheitsbericht, das Ferienwohnungsangebot.' },
      ],
    },
    {
      id: 'infinitivkonstruktionen',
      titel: 'Infinitiv- & Satzverkürzungen',
      kurzbeschreibung: 'Nebensätze zu schlanken Infinitivgruppen verdichten — mit „zu“, „um … zu“, „ohne … zu“, „anstatt … zu“.',
      grammatik: [
        {
          titel: 'Infinitiv mit „zu“',
          erklaerung:
            'Nach bestimmten Verben (versuchen, beschließen, vergessen, hoffen …), Adjektiven und Substantiven steht eine Infinitivgruppe mit „zu“. Sie hat kein eigenes Subjekt — es ist mit dem des Hauptsatzes identisch.',
          beispiel: 'Er beschloss, das Angebot anzunehmen. (Subjekt „er“ gilt auch für „annehmen“)',
        },
        {
          titel: 'Verkürzung von „dass“-Sätzen',
          erklaerung:
            'Ein „dass“-Satz mit subjektgleichem Bezug lässt sich in eine Infinitivgruppe verkürzen — schlanker und eleganter. Bei Subjektverschiedenheit ist die Verkürzung nicht möglich; der „dass“-Satz bleibt.',
          beispiel: 'Ich hoffe, dass ich pünktlich bin. → Ich hoffe, pünktlich zu sein.',
        },
        {
          titel: 'Finale und modale Infinitivsätze',
          erklaerung:
            '„um … zu“ drückt Absicht/Ziel aus (statt „damit“ bei Subjektgleichheit), „ohne … zu“ eine fehlende Begleitumstand-Handlung, „anstatt … zu“ eine Alternative, die nicht gewählt wurde.',
          beispiel: 'Sie ging, ohne sich zu verabschieden. — Er lernte, um zu bestehen.',
        },
        {
          titel: '„um … zu“ vs. „damit“',
          erklaerung:
            'Bei gleichem Subjekt in Haupt- und Nebensatz nutzt man „um … zu“. Sind die Subjekte verschieden, ist nur „damit“ möglich. Das ist eine harte Regel, die viele verletzen.',
          beispiel: 'Ich spare, um zu reisen. (ich/ich) — Ich spare, damit meine Kinder studieren können. (ich/Kinder)',
        },
        {
          titel: 'Stellung von „zu“ bei trennbaren Verben',
          erklaerung:
            'Bei trennbaren Verben rückt „zu“ zwischen Präfix und Stamm und wird zusammengeschrieben: „anzurufen“, „aufzustehen“, „mitzukommen“. Bei untrennbaren steht es davor: „zu verstehen“.',
          beispiel: 'Er versprach, mich morgen anzurufen. — Es ist schwer, das zu verstehen.',
        },
      ],
      beispiele: [
        { satz: 'Sie hofft, den Wettbewerb zu gewinnen.', hinweis: 'Infinitiv mit „zu“ statt „dass“-Satz, subjektgleich.' },
        { satz: 'Er verließ den Raum, ohne ein Wort zu sagen.', hinweis: '„ohne … zu“ für einen fehlenden Begleitumstand.' },
        { satz: 'Anstatt zu klagen, suchte sie nach Lösungen.', hinweis: '„anstatt … zu“ für die nicht gewählte Alternative.' },
        { satz: 'Um Missverständnisse zu vermeiden, wiederhole ich es.', hinweis: 'Finales „um … zu“, vorangestellt.' },
        { satz: 'Ich bitte Sie, das Formular vollständig auszufüllen.', hinweis: 'Trennbares Verb: „auszufüllen“ zusammengeschrieben.' },
        { satz: 'Es ist unhöflich, einfach aufzulegen.', hinweis: 'Infinitivgruppe nach unpersönlichem „es ist + Adjektiv“.' },
        { satz: 'Er tat alles, damit seine Familie es besser hätte.', hinweis: '„damit“, weil die Subjekte verschieden sind (er / Familie).' },
      ],
      anwendung: [
        'Infinitivverkürzungen machen Ihre Rede schlank und erwachsen: „Ich versuche, pünktlich zu sein“ klingt gewandter als „Ich versuche, dass ich pünktlich bin“. Nutzen Sie sie, wo das Subjekt gleich bleibt.',
        'Die „um … zu“ / „damit“-Regel ist ein Prüfstein für Souveränität. Merken Sie sich: gleiches Subjekt → „um … zu“; verschiedene Subjekte → „damit“. Fehler hier fallen sofort auf.',
        '„ohne … zu“ und „anstatt … zu“ geben Ihren Sätzen Kontur und Nuance — mit ihnen drücken Sie elegant aus, was NICHT geschah: „Er entschied, ohne zu zögern“ ist prägnanter als zwei Hauptsätze.',
        'Typischer Fehler: „um … zu“ nach Verben der Absicht doppelt setzen. Falsch: „Ich möchte, um zu lernen.“ Richtig: „Ich möchte lernen“ (bloßer Infinitiv nach Modalverb) — „um … zu“ nur für echte Zweckangaben.',
        'Achten Sie auf das Komma: Vor „um/ohne/anstatt … zu“ steht immer ein Komma; bei bloßem „zu“-Infinitiv ist es heute meist fakultativ, empfiehlt sich aber zur Gliederung.',
      ],
      uebungen: [
        { typ: 'Transformation', aufgabe: 'Verkürzen Sie den „dass“-Satz: „Er hofft, dass er bald gesund wird.“', hinweis: 'subjektgleich → Infinitiv mit „zu“.', musterloesung: 'Er hofft, bald gesund zu werden.' },
        { typ: 'Transformation', aufgabe: 'Verbinden Sie final: „Ich stehe früh auf. Ich will den ersten Zug erreichen.“', hinweis: 'gleiches Subjekt → „um … zu“.', musterloesung: 'Ich stehe früh auf, um den ersten Zug zu erreichen.' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie „um … zu“ oder „damit“: „Ich erkläre es noch einmal, ____ alle es verstehen.“', hinweis: 'Subjekte: ich / alle.', musterloesung: 'damit' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie „um … zu“ oder „damit“: „Sie trainiert hart, ____ ____ den Marathon ____ schaffen.“', hinweis: 'Subjekt bleibt „sie“.', musterloesung: 'um … zu (um den Marathon zu schaffen)' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie: „Ich lerne Deutsch, um dass ich in Wien arbeiten kann.“', hinweis: 'Vermischung „um“ + „dass“.', musterloesung: 'Ich lerne Deutsch, um in Wien arbeiten zu können.' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie das trennbare Verb: „Vergiss nicht, mich anrufen zu.“', hinweis: '„zu“ ins Verb einfügen.', musterloesung: 'Vergiss nicht, mich anzurufen.' },
        { typ: 'Transformation', aufgabe: 'Bilden Sie „ohne … zu“: „Er ging weg. Er verabschiedete sich nicht.“', hinweis: 'fehlender Begleitumstand.', musterloesung: 'Er ging weg, ohne sich zu verabschieden.' },
        { typ: 'Transformation', aufgabe: 'Bilden Sie „anstatt … zu“: „Sie half nicht. Sie schaute nur zu.“', hinweis: 'nicht gewählte Alternative.', musterloesung: 'Anstatt zu helfen, schaute sie nur zu.' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie: „Ich möchte, um besser zu werden.“', hinweis: 'nach „möchten“ bloßer Infinitiv.', musterloesung: 'Ich möchte besser werden.' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie das trennbare Verb mit „zu“: „Es ist wichtig, gut ____ (zuhören).“', hinweis: 'zwischen Präfix und Stamm.', musterloesung: 'zuzuhören' },
        { typ: 'Paraphrase', aufgabe: 'Formulieren Sie eleganter mit Infinitivgruppe: „Es ist schön. Man kann dir helfen.“ (→ „Es ist schön, …“)', hinweis: 'Achtung: Subjektbezug.', musterloesung: 'Es ist schön, dir helfen zu können. (bei „man“ neutral: … helfen zu können.)' },
        { typ: 'Freie Produktion', aufgabe: 'Formulieren Sie ein persönliches Ziel in einem Satz mit „um … zu“ und einer „ohne … zu“-Ergänzung.', hinweis: 'zwei Infinitivgruppen kombinieren.', musterloesung: 'Beispiel: Ich stehe jeden Morgen früh auf, um zu schreiben, ohne dabei vom Alltag gestört zu werden.' },
      ],
    },
  ],
}

const modulC: Modul = {
  id: 'modul-c',
  titel: 'Modul C — Register, Idiomatik, Wirkung',
  untertitel: 'Der Feinschliff: richtige Kasus, feste Fügungen, Stilebenen und überzeugende Argumentation.',
  themen: [
    {
      id: 'praepositionen-kasus',
      titel: 'Präpositionen & Kasus',
      kurzbeschreibung: 'Die Kasusrektion der Präpositionen sicher beherrschen — inklusive Wechselpräpositionen und Genitivpräpositionen.',
      grammatik: [
        {
          titel: 'Feste Kasus: Akkusativ- und Dativpräpositionen',
          erklaerung:
            'Manche Präpositionen regieren immer denselben Kasus. Akkusativ: durch, für, gegen, ohne, um, entlang (nachgestellt). Dativ: aus, bei, mit, nach, seit, von, zu, gegenüber. Diese sind auswendig zu lernen.',
          beispiel: 'für dich (Akk.) — mit dir (Dat.) — seit einem Jahr (Dat.)',
        },
        {
          titel: 'Wechselpräpositionen (Wo? vs. Wohin?)',
          erklaerung:
            'Neun Präpositionen (an, auf, hinter, in, neben, über, unter, vor, zwischen) regieren Dativ bei Ort/Ruhe (Frage: Wo?) und Akkusativ bei Richtung/Bewegung (Frage: Wohin?).',
          beispiel: 'Das Bild hängt an der Wand (Dat., wo?) — Ich hänge das Bild an die Wand (Akk., wohin?).',
        },
        {
          titel: 'Genitivpräpositionen',
          erklaerung:
            'Präpositionen wie wegen, während, trotz, (an)statt, aufgrund, mangels, hinsichtlich, zugunsten regieren den Genitiv und markieren gehobenes Register. Umgangssprachlich wird oft (nicht standardsprachlich) der Dativ verwendet.',
          beispiel: 'während des Vortrags, trotz des Regens, zugunsten der Kläger',
        },
        {
          titel: 'Verschmelzung und feste Wendungen',
          erklaerung:
            'Präposition + Artikel verschmelzen häufig (in dem → im, an dem → am, zu der → zur, bei dem → beim). In festen Wendungen ist die Verschmelzung obligatorisch, bei Betonung des Artikels unterbleibt sie.',
          beispiel: 'im Grunde, am Anfang, zur Verfügung — aber: „an dem Tag, als …“ (betont)',
        },
      ],
      beispiele: [
        { satz: 'Wir stellen die Stühle in den Kreis.', hinweis: 'Wechselpräposition „in“ + Akkusativ, weil Bewegung/Richtung.' },
        { satz: 'Die Konferenz findet trotz des schlechten Wetters statt.', hinweis: 'Genitivpräposition „trotz“; gehobenes Register.' },
        { satz: 'Er sitzt seit einer Stunde vor dem Bildschirm.', hinweis: '„seit“ + Dativ (Zeit), „vor“ + Dativ (Ruhe, wo?).' },
        { satz: 'Zugunsten der Kinder verzichteten sie auf den Urlaub.', hinweis: 'Genitivpräposition „zugunsten“, formell.' },
        { satz: 'Leg die Unterlagen bitte auf den Tisch.', hinweis: '„auf“ + Akkusativ, Richtung (wohin?).' },
        { satz: 'Im Laufe der Jahre hat sich vieles geändert.', hinweis: 'Feste Wendung mit obligatorischer Verschmelzung „im“.' },
        { satz: 'Sie kämpfte gegen alle Widerstände an.', hinweis: '„gegen“ regiert immer den Akkusativ.' },
      ],
      anwendung: [
        'Der Wo-/Wohin-Test entscheidet bei Wechselpräpositionen jedes Mal: Fragen Sie „wohin?“ → Akkusativ (Bewegung), „wo?“ → Dativ (Ort). „Ich gehe in die Stadt“ (wohin, Akk.) vs. „Ich wohne in der Stadt“ (wo, Dat.).',
        'Genitivpräpositionen (wegen, trotz, während) heben Ihr Register hörbar. Im formellen Kontext unbedingt den Genitiv: „wegen des Staus“ — das umgangssprachliche „wegen dem Stau“ verrät mangelnde Sicherheit.',
        'Lernen Sie Präpositionen mit einem festen Beispielpronomen als Merkanker: „mit MIR“, „für MICH“, „bei MIR“ — so sitzt der Kasus reflexartig, auch im schnellen Gespräch.',
        'Typischer Fehler: „nach“ vs. „zu“ bei Zielen. Zu Personen und den meisten Orten „zu“ (zum Arzt, zu Anna), zu Ländern/Städten/Himmelsrichtungen und „Hause“ „nach“ (nach Berlin, nach Hause). Beide + Dativ.',
        'Vorsicht bei „gegenüber“: Es kann vor- oder nachgestellt werden und regiert Dativ — „mir gegenüber“ oder „gegenüber dem Bahnhof“. Nachstellung wirkt bei Personen natürlicher.',
      ],
      uebungen: [
        { typ: 'Lückentext', aufgabe: 'Wechselpräposition: „Ich lege das Buch auf ____ Tisch.“ (der Tisch)', hinweis: 'wohin? → Akkusativ.', musterloesung: 'den' },
        { typ: 'Lückentext', aufgabe: 'Wechselpräposition: „Das Buch liegt auf ____ Tisch.“ (der Tisch)', hinweis: 'wo? → Dativ.', musterloesung: 'dem' },
        { typ: 'Lückentext', aufgabe: 'Genitivpräposition: „Während ____ Sitzung (die Sitzung) klingelte sein Handy.“', hinweis: '„während“ + Genitiv.', musterloesung: 'der' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie (formell): „Wegen dem Streik kam der Bus nicht.“', hinweis: '„wegen“ + Kasus.', musterloesung: 'Wegen des Streiks kam der Bus nicht.' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie: „Ich fahre nach meiner Oma.“', hinweis: 'Person als Ziel.', musterloesung: 'Ich fahre zu meiner Oma.' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie Präposition + Artikel (Bewegung): „Die Katze springt ____ Sofa.“ (auf/das Sofa)', hinweis: 'wohin? → Akk., ggf. Verschmelzung.', musterloesung: 'aufs (auf das) Sofa' },
        { typ: 'Transformation', aufgabe: 'Verschmelzen Sie, wo möglich: „Wir treffen uns an dem Bahnhof zu der üblichen Zeit.“', hinweis: 'feste/übliche Wendungen.', musterloesung: 'Wir treffen uns am Bahnhof zur üblichen Zeit.' },
        { typ: 'Lückentext', aufgabe: 'Dativpräposition: „____ einem Jahr wohne ich in Hamburg.“ (Zeitpunkt in der Vergangenheit bis jetzt)', hinweis: 'Dauer bis Gegenwart.', musterloesung: 'Seit' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie den Kasus: „Er ging durch dem Park.“', hinweis: '„durch“ + Kasus.', musterloesung: 'Er ging durch den Park.' },
        { typ: 'Transformation', aufgabe: 'Formulieren Sie gehobener mit Genitivpräposition: „Er blieb zu Hause, weil er krank war.“ (kausal, nominal)', hinweis: '„wegen/aufgrund“ + Genitiv.', musterloesung: 'Wegen seiner Krankheit (Aufgrund seiner Erkrankung) blieb er zu Hause.' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie: „Sie wohnt gegenüber ____ Rathaus.“ (das Rathaus)', hinweis: '„gegenüber“ + Dativ.', musterloesung: 'dem' },
        { typ: 'Freie Produktion', aufgabe: 'Beschreiben Sie in 2 Sätzen einen Raum und nutzen Sie mindestens drei verschiedene Wechselpräpositionen korrekt (wo?).', hinweis: 'Ruhe → Dativ.', musterloesung: 'Beispiel: An der Wand hängt ein großes Bild, darunter steht ein Sofa. Zwischen den Fenstern liegt ein Teppich, und auf dem Tisch stehen frische Blumen.' },
      ],
    },
    {
      id: 'verben-praepositionalobjekt',
      titel: 'Verben mit Präpositionalobjekt',
      kurzbeschreibung: 'Feste Verb-Präposition-Verbindungen und ihre Pronominaladverbien (darauf, worüber) sicher einsetzen.',
      grammatik: [
        {
          titel: 'Feste Präposition und fester Kasus',
          erklaerung:
            'Viele Verben verlangen eine bestimmte Präposition mit festem Kasus, die man als Einheit lernen muss: „warten auf“ (+ Akk.), „teilnehmen an“ (+ Dat.), „sich freuen über/auf“ (+ Akk.). Die Präposition ist hier nicht wörtlich zu deuten.',
          beispiel: 'Ich warte auf den Bus (Akk.). — Sie nimmt an der Sitzung teil (Dat.).',
        },
        {
          titel: 'Bedeutungsunterschiede durch die Präposition',
          erklaerung:
            'Dieselbe Verbwurzel kann je nach Präposition die Bedeutung ändern. Besonders „sich freuen auf“ (Zukünftiges) vs. „sich freuen über“ (Gegenwärtiges/Vergangenes) ist prüfungsrelevant.',
          beispiel: 'Ich freue mich auf den Urlaub (kommt noch). — Ich freue mich über das Geschenk (habe ich schon).',
        },
        {
          titel: 'Pronominaladverbien: da(r)- und wo(r)-',
          erklaerung:
            'Bezieht sich das Präpositionalobjekt auf eine Sache, ersetzt man es durch „da(r)+Präposition“ (darauf, damit, dafür) bzw. fragt mit „wo(r)+Präposition“ (worauf, womit). Bei Personen bleibt die Präposition + Pronomen.',
          beispiel: 'Worauf wartest du? — Auf den Bus. → Ich warte darauf. Aber: Auf wen? → Auf ihn.',
        },
        {
          titel: 'Präpositionalobjekt + „dass“-Satz / Infinitiv',
          erklaerung:
            'Folgt dem Präpositionalobjekt ein Nebensatz, kündigt ein „da(r)+Präposition“-Korrelat ihn im Hauptsatz an: „Ich freue mich darauf, dass …“ / „… darauf, dich zu sehen.“',
          beispiel: 'Wir rechnen damit, dass es teurer wird. — Er besteht darauf, recht zu behalten.',
        },
      ],
      beispiele: [
        { satz: 'Sie interessiert sich sehr für alte Sprachen.', hinweis: '„sich interessieren für“ + Akkusativ.' },
        { satz: 'Wir müssen uns auf das Wesentliche konzentrieren.', hinweis: '„sich konzentrieren auf“ + Akkusativ.' },
        { satz: 'Ich freue mich schon auf das Wochenende.', hinweis: '„sich freuen auf“ = Vorfreude auf Zukünftiges.' },
        { satz: 'Worüber habt ihr euch denn gestritten?', hinweis: '„sich streiten über“; Sache → Frage mit „worüber“.' },
        { satz: 'Er leidet seit Jahren unter dem Lärm.', hinweis: '„leiden unter“ + Dativ.' },
        { satz: 'Denk bitte daran, das Licht auszuschalten.', hinweis: 'Korrelat „daran“ kündigt die Infinitivgruppe an; „denken an“.' },
        { satz: 'Auf ihn ist immer Verlass.', hinweis: 'Person → Präposition + Pronomen „auf ihn“, kein „darauf“.' },
      ],
      anwendung: [
        'Verben mit Präposition sind Vokabeln — lernen Sie sie immer als Dreiheit: Verb + Präposition + Kasus („sich kümmern um + Akk.“). Das erspart Ihnen die häufigsten C1-Fehler.',
        'Der da-/wo-Mechanismus ist ein Souveränitätsmarker: „Woran denkst du?“ – „Ich denke daran.“ Wer stattdessen „An was denkst du?“ sagt, klingt umgangssprachlich; die Pronominaladverbien wirken gepflegter.',
        'Merken Sie sich die Personen-Ausnahme: Bei Menschen KEIN da-/wo-Wort. „Auf wen wartest du?“ – „Auf meinen Chef / auf ihn“, niemals „darauf“ für eine Person.',
        'Typischer Fehler: „freuen auf“ und „freuen über“ verwechseln. Vorfreude (Zukunft) = „auf“, Freude über bereits Eingetretenes = „über“. Das wird gern geprüft.',
        'Nutzen Sie das Korrelat-„da(r)-“ vor Nebensätzen souverän: „Ich bestehe darauf, dass …“, „Es hängt davon ab, ob …“. Das strukturiert komplexe Sätze klar und wirkt sehr kompetent.',
      ],
      uebungen: [
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie Präposition + Kasus: „Ich warte ____ d__ Antwort.“ (die Antwort)', hinweis: '„warten auf“ + Akk.', musterloesung: 'auf die Antwort' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie: „Sie nimmt ____ d__ Konferenz teil.“ (die Konferenz)', hinweis: '„teilnehmen an“ + Dat.', musterloesung: 'an der Konferenz' },
        { typ: 'Lückentext', aufgabe: '„auf“ oder „über“? „Ich freue mich ____ deinen Besuch nächste Woche.“', hinweis: 'Zukunft.', musterloesung: 'auf' },
        { typ: 'Lückentext', aufgabe: '„auf“ oder „über“? „Ich habe mich sehr ____ deine Nachricht von gestern gefreut.“', hinweis: 'bereits eingetreten.', musterloesung: 'über' },
        { typ: 'Transformation', aufgabe: 'Ersetzen Sie das Sach-Objekt durch ein Pronominaladverb: „Ich denke oft an die Reise.“', hinweis: 'Sache → da(r)-.', musterloesung: 'Ich denke oft daran.' },
        { typ: 'Transformation', aufgabe: 'Bilden Sie die Frage nach dem Objekt: „Sie ärgert sich über den Lärm.“ (Sache)', hinweis: 'wo(r)-.', musterloesung: 'Worüber ärgert sie sich?' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie: „Auf was wartest du?“ (gehobener)', hinweis: 'Sache → Pronominaladverb.', musterloesung: 'Worauf wartest du?' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie: „Ich freue mich darauf meinen Bruder.“ (Person!)', hinweis: 'Personen: kein da-Wort.', musterloesung: 'Ich freue mich auf meinen Bruder.' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie das Korrelat: „Wir rechnen ____, dass es länger dauert.“', hinweis: '„rechnen mit“.', musterloesung: 'damit' },
        { typ: 'Transformation', aufgabe: 'Bilden Sie die Frage nach einer Person: „Sie wartet auf ihren Mann.“', hinweis: 'Person → Präposition + „wen“.', musterloesung: 'Auf wen wartet sie?' },
        { typ: 'Paraphrase', aufgabe: 'Verbinden Sie mit Korrelat + Infinitiv: „Er besteht darauf. Er will recht behalten.“', hinweis: 'darauf, … zu …', musterloesung: 'Er besteht darauf, recht zu behalten.' },
        { typ: 'Freie Produktion', aufgabe: 'Schreiben Sie zwei Sätze über Ihre Pläne mit „sich freuen auf“ und „sich kümmern um“ (jeweils korrekt).', hinweis: 'Verb + Präp. + Kasus beachten.', musterloesung: 'Beispiel: Ich freue mich sehr auf das lange Wochenende. Vorher muss ich mich allerdings noch um einige offene Aufgaben kümmern.' },
      ],
    },
    {
      id: 'negation-fokuspartikeln',
      titel: 'Negation & Fokuspartikeln',
      kurzbeschreibung: 'Präzise verneinen (nicht vs. kein, Stellung) und mit Fokuspartikeln (nur, sogar, gerade) gezielt hervorheben.',
      grammatik: [
        {
          titel: '„nicht“ vs. „kein“',
          erklaerung:
            '„kein“ verneint Substantive mit unbestimmtem Artikel oder ohne Artikel (Nullartikel). „nicht“ verneint alles Übrige: Verben, Adjektive, Adverbien und Substantive mit bestimmtem Artikel oder Possessiv.',
          beispiel: 'Ich habe kein Auto. — Ich habe das Auto nicht (gekauft). — Ich habe nicht mein Auto genommen.',
        },
        {
          titel: 'Stellung von „nicht“ (Satz- vs. Sondernegation)',
          erklaerung:
            'Bei Satznegation steht „nicht“ möglichst weit hinten, aber vor dem, was zum Prädikat gehört (Verbklammer-Teil, Präpositionalobjekt, Adjektivprädikat). Bei Sondernegation steht „nicht“ direkt vor dem betonten Teil.',
          beispiel: 'Er kommt heute nicht. (Satznegation) — Nicht heute kommt er, sondern morgen. (Sondernegation)',
        },
        {
          titel: 'Fokuspartikeln',
          erklaerung:
            'Fokuspartikeln (nur, auch, sogar, selbst, erst, schon, gerade, ausgerechnet, nicht einmal) heben ein Satzglied hervor und stehen meist unmittelbar davor. Sie verändern die Informationsstruktur und die Wirkung stark.',
          beispiel: 'Sogar der Chef kam. — Nur du kannst das. — Ausgerechnet heute regnet es.',
        },
        {
          titel: '„erst“ vs. „schon“ / „nur“ vs. „erst“',
          erklaerung:
            '„schon“ = früher/mehr als erwartet; „erst“ = später/weniger als erwartet (zeitlich) bzw. nicht mehr als (Menge → hier „nur“). Diese feine Erwartungsperspektive ist typisch fortgeschritten.',
          beispiel: 'Es ist erst acht Uhr (noch früh). — Es ist schon acht Uhr (schon spät). — Er ist erst zehn (nicht älter).',
        },
      ],
      beispiele: [
        { satz: 'Ich habe keine Zeit für solche Spielchen.', hinweis: '„kein“ verneint das artikellose/unbestimmte Substantiv „Zeit“.' },
        { satz: 'Das habe ich so nicht gesagt.', hinweis: '„nicht“ als Satznegation, spät im Satz.' },
        { satz: 'Nicht er hat den Fehler gemacht, sondern sein Vertreter.', hinweis: 'Sondernegation: „nicht“ direkt vor dem betonten „er“.' },
        { satz: 'Sogar die Skeptiker waren am Ende überzeugt.', hinweis: 'Fokuspartikel „sogar“ hebt das Unerwartete hervor.' },
        { satz: 'Ausgerechnet er musste das erfahren.', hinweis: '„ausgerechnet“ betont eine unpassende/ironische Fügung.' },
        { satz: 'Wir sind erst gestern angekommen.', hinweis: '„erst“ = später als man denken könnte, betont die kurze Zeitspanne.' },
        { satz: 'Nicht einmal ein Danke war ihm zu entlocken.', hinweis: '„nicht einmal“ als steigernde Negation.' },
      ],
      anwendung: [
        'Die „nicht“-Stellung ist ein feiner Kompetenztest: Bei Satznegation rutscht „nicht“ ans Ende des Mittelfelds („Ich kenne ihn nicht“), bei Kontrast direkt vor das betonte Glied („nicht HEUTE, sondern morgen“). Falsche Stellung klingt sofort fremd.',
        'Fokuspartikeln sind rhetorisch hochwirksam: „Selbst Fachleute irren sich hier“ transportiert Ihre Bewertung mit. Nutzen Sie „sogar“, „ausgerechnet“, „nur“ bewusst, um Akzente zu setzen — sie lenken die Aufmerksamkeit des Zuhörers.',
        '„erst“ vs. „schon“ verrät sofort Ihr Sprachgefühl: „Ich bin erst seit Kurzem hier“ (kurz, wenig) vs. „Ich bin schon lange hier“ (lang, viel). Die Erwartungsperspektive muss zur Aussage passen.',
        'Typischer Fehler: „nicht“ statt „kein“ vor unbestimmten Substantiven. Falsch: „Ich habe nicht ein Auto.“ Richtig: „Ich habe kein Auto.“ (Nur bei Kontrast: „Ich habe nicht EIN Auto, sondern zwei.“)',
        'Vermeiden Sie doppelte Verneinung als versehentliche Bejahung, außer als bewusstes Stilmittel (Litotes): „Das ist nicht unklug“ = „recht klug“ — elegant, wenn beabsichtigt; verwirrend, wenn zufällig.',
      ],
      uebungen: [
        { typ: 'Lückentext', aufgabe: '„nicht“ oder „kein“? „Ich trinke ____ Kaffee, nur Tee.“', hinweis: 'Substantiv ohne Artikel.', musterloesung: 'keinen' },
        { typ: 'Lückentext', aufgabe: '„nicht“ oder „kein“? „Ich verstehe deine Frage ____.“', hinweis: 'Substantiv mit Possessiv.', musterloesung: 'nicht' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie: „Ich habe nicht ein Problem damit.“', hinweis: 'unbestimmtes Substantiv.', musterloesung: 'Ich habe kein Problem damit.' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie die Stellung: „Er hat nicht das Auto gestern gewaschen, sondern das Fahrrad.“ (Kontrast liegt auf „das Auto“)', hinweis: 'Sondernegation vor dem betonten Glied.', musterloesung: 'Er hat nicht das Auto gestern gewaschen, sondern das Fahrrad. → besser: Er hat gestern nicht das Auto gewaschen, sondern das Fahrrad.' },
        { typ: 'Lückentext', aufgabe: '„erst“ oder „schon“? „Bist du ____ fertig? Das ging aber schnell!“', hinweis: 'früher als erwartet.', musterloesung: 'schon' },
        { typ: 'Lückentext', aufgabe: '„erst“ oder „schon“? „Wir haben ____ die Hälfte geschafft, es dauert also noch.“', hinweis: 'weniger als erwartet.', musterloesung: 'erst' },
        { typ: 'Transformation', aufgabe: 'Heben Sie das Unerwartete mit einer Fokuspartikel hervor: „Der Direktor persönlich hat angerufen.“', hinweis: '„sogar“/„selbst“.', musterloesung: 'Sogar der Direktor persönlich hat angerufen. (auch: Selbst der Direktor …)' },
        { typ: 'Transformation', aufgabe: 'Fügen Sie „ausgerechnet“ sinnvoll ein: „Heute ist mein Auto liegengeblieben.“', hinweis: 'ungünstige Fügung betonen.', musterloesung: 'Ausgerechnet heute ist mein Auto liegengeblieben.' },
        { typ: 'Paraphrase', aufgabe: 'Formulieren Sie eine steigernde Negation: „Er hat sich nicht bedankt, nicht einmal minimal.“', hinweis: '„nicht einmal“.', musterloesung: 'Er hat sich nicht einmal bedankt.' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie die „nicht“-Stellung: „Ich nicht kenne diesen Mann.“', hinweis: 'Satznegation ans Mittelfeldende.', musterloesung: 'Ich kenne diesen Mann nicht.' },
        { typ: 'Paraphrase', aufgabe: 'Formulieren Sie mit Litotes (nicht + Gegenteil): „Der Vortrag war ziemlich gut.“', hinweis: 'doppelte Verneinung als Stilmittel.', musterloesung: 'Der Vortrag war nicht übel. (auch: … gar nicht so schlecht.)' },
        { typ: 'Freie Produktion', aufgabe: 'Schreiben Sie zwei Sätze, in denen dieselbe Information einmal mit „nur“ und einmal mit „sogar“ eine gegensätzliche Wirkung bekommt.', hinweis: 'Fokus steuert die Bewertung.', musterloesung: 'Beispiel: Nur zehn Leute kamen zur Lesung (enttäuschend wenig). — Sogar zehn Leute kamen trotz des Unwetters (erfreulich viel).' },
      ],
    },
    {
      id: 'idiomatik',
      titel: 'Idiomatik & Redewendungen',
      kurzbeschreibung: 'Feste Wendungen, Sprichwörter und bildhafte Ausdrücke, die Ihr Deutsch lebendig und muttersprachlich klingen lassen.',
      grammatik: [
        {
          titel: 'Feste Redewendungen (Idiome)',
          erklaerung:
            'Idiome haben eine Gesamtbedeutung, die sich nicht aus den Einzelwörtern ergibt. Sie sind formstabil — man kann Wörter nicht frei austauschen. Falsch verwendet fallen sie sofort auf.',
          beispiel: 'jemandem auf den Keks gehen (nerven) — die Katze im Sack kaufen (ungeprüft kaufen)',
        },
        {
          titel: 'Kollokationen',
          erklaerung:
            'Kollokationen sind übliche Wortpartnerschaften, die man so und nicht anders sagt: „eine Entscheidung fällen/treffen“, „Maßnahmen ergreifen“, „ein Risiko eingehen“, „Kritik ernten“. Sie sind das Rückgrat idiomatischen Ausdrucks.',
          beispiel: 'starken Kaffee (nicht: „mächtigen Kaffee“) — eine Rede halten (nicht: „machen“)',
        },
        {
          titel: 'Sprichwörter und geflügelte Worte',
          erklaerung:
            'Sprichwörter verdichten Erfahrungswissen in feste Sätze; geflügelte Worte stammen oft aus Literatur oder Geschichte. Souverän eingesetzt geben sie einer Aussage Autorität und Charme.',
          beispiel: 'Wer A sagt, muss auch B sagen. — Der Klügere gibt nach. — Ende gut, alles gut.',
        },
        {
          titel: 'Register der Idiomatik',
          erklaerung:
            'Redewendungen sind stark registergebunden: „ins Gras beißen“ (salopp) vs. „von uns gehen“ (gehoben) für dasselbe. Wer das Register verwechselt, wirkt unfreiwillig komisch oder unpassend.',
          beispiel: 'salopp: die Nase voll haben — neutral: genug haben — gehoben: einer Sache überdrüssig sein',
        },
      ],
      beispiele: [
        { satz: 'Nach dem langen Tag bin ich völlig fertig — ich mache jetzt Feierabend.', hinweis: 'Idiomatisch „fertig sein“ (erschöpft), „Feierabend machen“.' },
        { satz: 'Das ist nicht mein Bier, da halte ich mich raus.', hinweis: '„nicht mein Bier sein“ = geht mich nichts an; salopp.' },
        { satz: 'Wir sollten das Kind nicht mit dem Bade ausschütten.', hinweis: 'Sprichwort: das Gute nicht mit dem Schlechten verwerfen.' },
        { satz: 'Er hat den Vertrag unter Dach und Fach gebracht.', hinweis: '„unter Dach und Fach“ = erfolgreich abgeschlossen.' },
        { satz: 'Jetzt geht es ums Ganze.', hinweis: '„ums Ganze gehen“ = die entscheidende Phase; idiomatisch.' },
        { satz: 'Sie ergriff die Initiative und traf alle nötigen Maßnahmen.', hinweis: 'Kollokationen „Initiative ergreifen“, „Maßnahmen treffen“.' },
        { satz: 'Da liegt der Hund begraben.', hinweis: 'Idiom: „das ist der eigentliche Kern des Problems“.' },
      ],
      anwendung: [
        'Idiome sind der schnellste Weg zu muttersprachlichem Klang — aber nur, wenn sie zum Register passen. Streuen Sie im lockeren Gespräch ruhig „das ist mir zu bunt“ oder „jetzt mal Butter bei die Fische“ ein, aber nie in einem formellen Vortrag.',
        'Kollokationen sind wichtiger als exotische Sprichwörter: Wer „eine Entscheidung TRIFFT“ und „Maßnahmen ERGREIFT“, klingt sofort kompetent. Lernen Sie die üblichen Verb-Substantiv-Paare aktiv mit.',
        'Verwenden Sie Redewendungen sparsam und treffsicher. Ein einziges, gut platziertes Idiom wirkt souverän; drei in einem Satz wirken angestrengt. Weniger ist mehr.',
        'Typischer Fehler: Idiome wörtlich aus der Muttersprache übersetzen. „Es regnet Katzen und Hunde“ existiert im Deutschen nicht — hier sagt man „Es gießt in Strömen“ oder „Es schüttet“.',
        'Achten Sie auf die feste Form: Man kann Idiome nicht umbauen. „jemandem einen Bären aufbinden“ bleibt so — nicht „einen Wolf aufbinden“. Lernen Sie sie als unteilbare Blöcke.',
      ],
      uebungen: [
        { typ: 'Lückentext', aufgabe: 'Vervollständigen Sie das Idiom: „Das kannst du vergessen, das steht in den ____.“ (unsicher/unwahrscheinlich)', hinweis: 'Redewendung mit Himmelskörpern.', musterloesung: 'Sternen (in den Sternen stehen)' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie die Kollokation: „Wir müssen dringend Maßnahmen ____.“', hinweis: 'nicht „machen“.', musterloesung: 'ergreifen (auch: treffen)' },
        { typ: 'Paraphrase', aufgabe: 'Erklären Sie die Bedeutung: „Er hat die Katze aus dem Sack gelassen.“', hinweis: 'ein Geheimnis …', musterloesung: 'Er hat ein Geheimnis / die verborgene Absicht verraten (preisgegeben).' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie die Kollokation: „Ich möchte eine Rede machen.“', hinweis: 'übliches Verb zu „Rede“.', musterloesung: 'Ich möchte eine Rede halten.' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie das verunglückte Idiom: „Du willst mir einen Wolf aufbinden.“', hinweis: 'festes Tier im Idiom.', musterloesung: 'Du willst mir einen Bären aufbinden.' },
        { typ: 'Transformation', aufgabe: 'Ersetzen Sie durch ein Idiom: „Er ist plötzlich verschwunden, ohne sich zu verabschieden.“', hinweis: 'auf Französisch …', musterloesung: 'Er hat sich auf Französisch (heimlich, sang- und klanglos) verabschiedet / aus dem Staub gemacht.' },
        { typ: 'Lückentext', aufgabe: 'Vervollständigen Sie das Sprichwort: „Wer A sagt, muss auch ____ sagen.“', hinweis: 'Konsequenz tragen.', musterloesung: 'B' },
        { typ: 'Paraphrase', aufgabe: 'Formulieren Sie „Ich bin sehr müde“ mit einer idiomatischen Wendung.', hinweis: 'umgangssprachlich.', musterloesung: 'Beispiel: Ich bin völlig fertig / fix und fertig / total erledigt / hundemüde.' },
        { typ: 'Transformation', aufgabe: 'Wählen Sie die richtige Registerstufe: „sterben“ — gehoben ausdrücken.', hinweis: 'nicht „ins Gras beißen“ (salopp).', musterloesung: 'von uns gehen / verscheiden / das Zeitliche segnen (gehoben)' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie: „Endlich ist der Vertrag unter ____ und ____.“ (erfolgreich abgeschlossen)', hinweis: 'festes Wortpaar.', musterloesung: 'Dach … Fach' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Korrigieren Sie die wörtliche Übersetzung: „Es regnet Katzen und Hunde.“', hinweis: 'deutsches Äquivalent.', musterloesung: 'Es gießt in Strömen. (auch: Es schüttet wie aus Eimern.)' },
        { typ: 'Freie Produktion', aufgabe: 'Schreiben Sie einen kurzen Absatz (2–3 Sätze) über einen stressigen Tag und bauen Sie mindestens zwei passende Redewendungen ein.', hinweis: 'Register konsistent halten.', musterloesung: 'Beispiel: Heute ging wirklich alles drunter und drüber. Ich hatte alle Hände voll zu tun und bin am Abend nur noch in die Federn gefallen.' },
      ],
    },
    {
      id: 'register-stilebenen',
      titel: 'Register & Stilebenen',
      kurzbeschreibung: 'Bewusst zwischen salopp, neutral und gehoben wechseln — den Ton der Situation treffen.',
      grammatik: [
        {
          titel: 'Die Stilebenen',
          erklaerung:
            'Deutsch kennt grob vier Register: salopp/umgangssprachlich (locker, unter Vertrauten), neutral/standardsprachlich (Alltag, Beruf), gehoben/formell (offiziell, schriftlich) und fachsprachlich. Dasselbe Gemeinte wird je nach Register anders gesagt.',
          beispiel: 'salopp: kriegen — neutral: bekommen — gehoben: erhalten',
        },
        {
          titel: 'Wortwahl signalisiert Register',
          erklaerung:
            'Lateinisch-fremdsprachige und abstrakte Wörter wirken gehobener, kurze germanische Wörter neutraler bis lockerer. Die Wahl steuert die Distanz und Formalität feiner als die Grammatik.',
          beispiel: 'anfangen (neutral) vs. beginnen (leicht gehoben) vs. in Angriff nehmen (formell)',
        },
        {
          titel: 'Syntax und Register',
          erklaerung:
            'Kurze Hauptsätze, Ellipsen und Modalpartikeln kennzeichnen die gesprochene, lockere Ebene. Lange, hypotaktische Sätze mit Nominalisierungen und Passiv gehören zur formell-schriftlichen Ebene.',
          beispiel: 'salopp: „Mach ich morgen.“ — formell: „Die Erledigung erfolgt am morgigen Tag.“',
        },
        {
          titel: 'Anrede und Höflichkeit',
          erklaerung:
            'Das Register zeigt sich auch in der Anrede (du/ihr vs. Sie), in Grußformeln und in der Konjunktiv-II-Höflichkeit. Ein Registerbruch (zu locker oder zu steif für die Situation) wirkt unpassend.',
          beispiel: 'salopp: „Hey, kannst du …?“ — formell: „Sehr geehrte Frau X, könnten Sie …?“',
        },
      ],
      beispiele: [
        { satz: 'Ich hätte gern die Rechnung. (neutral-höflich)', hinweis: 'Standard-Höflichkeit mit Konjunktiv II; passt fast überall.' },
        { satz: 'Wären Sie so freundlich, mir die Unterlagen zukommen zu lassen? (gehoben)', hinweis: 'Formelle Bitte; „zukommen lassen“ statt „schicken“.' },
        { satz: 'Gib mir mal kurz den Zettel. (salopp)', hinweis: 'Lockeres Register: du-Anrede, „mal“, „Zettel“ statt „Dokument“.' },
        { satz: 'Die Angelegenheit bedarf einer eingehenden Prüfung. (formell)', hinweis: 'Gehoben: „bedürfen“ + Genitiv, Nominalstil.' },
        { satz: 'Das ist echt der Hammer! (salopp)', hinweis: 'Umgangssprachliche Bewertung; nur informell angemessen.' },
        { satz: 'Wir freuen uns, Ihnen mitteilen zu dürfen, dass … (formell)', hinweis: 'Geschäftssprachliche Höflichkeitsfloskel.' },
        { satz: 'Können wir das kurz durchgehen? (neutral)', hinweis: 'Sachlich-kollegial, weder steif noch salopp.' },
      ],
      anwendung: [
        'Registerkompetenz heißt: Sie treffen den Ton der Situation, nicht bloß korrektes Deutsch. Ein Vorstellungsgespräch verlangt „Ich würde mich freuen, …“, unter Freunden reicht „Wär cool, wenn …“. Beides kann falsch sein — am falschen Ort.',
        'Der häufigste Registerfehler bei Fortgeschrittenen ist Übergehoben-Sein: Wer beim Kaffee mit Kollegen „Ich erachte das als nicht zielführend“ sagt, wirkt steif. Neutrale Sprache („Ich glaube, das bringt nichts“) ist oft souveräner als die formellste Variante.',
        'Bauen Sie sich Register-Trippel: kriegen/bekommen/erhalten, Kohle/Geld/finanzielle Mittel, quatschen/reden/sich unterhalten. So können Sie bewusst die Ebene wechseln, statt in einer festzustecken.',
        'Typischer Fehler: Anglizismen im formellen Register. „Wir müssen das Meeting canceln“ wirkt in einer offiziellen Mail unpassend; „Wir müssen den Termin absagen“ ist stilsicher. Deutsche Wörter heben das Register.',
        'Vermeiden Sie den Registerbruch innerhalb einer Äußerung: Nicht „Sehr geehrte Damen und Herren, das Angebot ist echt super.“ Halten Sie die Ebene konsequent durch — Konsistenz wirkt professionell.',
      ],
      uebungen: [
        { typ: 'Transformation', aufgabe: 'Heben Sie ins gehobene Register: „Ich hab deine Mail gekriegt.“', hinweis: 'Wortwahl + Anrede.', musterloesung: 'Ich habe Ihre Nachricht erhalten.' },
        { typ: 'Transformation', aufgabe: 'Senken Sie ins Lockere: „Wären Sie so freundlich, mir zu helfen?“', hinweis: 'du + Modalpartikel.', musterloesung: 'Kannst du mir mal helfen?' },
        { typ: 'Lückentext', aufgabe: 'Ordnen Sie zu (salopp/neutral/gehoben): „kriegen – ____ – erhalten“.', hinweis: 'die neutrale Mitte fehlt.', musterloesung: 'bekommen' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Beheben Sie den Registerbruch: „Sehr geehrte Frau Meyer, Ihr Vorschlag ist echt top.“', hinweis: 'formelle Ebene halten.', musterloesung: 'Sehr geehrte Frau Meyer, Ihr Vorschlag überzeugt uns sehr (ist ausgezeichnet).' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Ersetzen Sie den Anglizismus (formell): „Wir müssen den Termin canceln.“', hinweis: 'deutsches Verb.', musterloesung: 'Wir müssen den Termin absagen (verschieben).' },
        { typ: 'Transformation', aufgabe: 'Formulieren Sie neutral (weder steif noch salopp): „Ich erachte diesen Vorschlag als nicht zielführend.“', hinweis: 'Alltagssprache.', musterloesung: 'Ich glaube, dieser Vorschlag bringt uns nicht weiter.' },
        { typ: 'Paraphrase', aufgabe: 'Formulieren Sie dieselbe Bitte in drei Registern: „das Fenster öffnen“.', hinweis: 'salopp/neutral/gehoben.', musterloesung: 'Beispiel — salopp: „Mach mal das Fenster auf.“ neutral: „Kannst du bitte das Fenster öffnen?“ gehoben: „Wären Sie so freundlich, das Fenster zu öffnen?“' },
        { typ: 'Transformation', aufgabe: 'Heben Sie ins Formelle (Nominalstil): „Wir prüfen das genau, bevor wir entscheiden.“', hinweis: 'gehobene Wortwahl.', musterloesung: 'Vor einer Entscheidung bedarf die Angelegenheit einer eingehenden Prüfung.' },
        { typ: 'Lückentext', aufgabe: 'Welches Verb ist am gehobensten? „anfangen – beginnen – ____ nehmen“', hinweis: 'FVG.', musterloesung: 'in Angriff (in Angriff nehmen)' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Passen Sie an das lockere Gespräch an: „Ich verbleibe mit freundlichen Grüßen.“ (unter Freunden per Chat)', hinweis: 'Registerbruch beheben.', musterloesung: 'Bis dann! / Liebe Grüße / LG' },
        { typ: 'Paraphrase', aufgabe: 'Formulieren Sie eine Absage einmal salopp und einmal gehoben: „zu einer Einladung nicht kommen können“.', hinweis: 'zwei Ebenen.', musterloesung: 'Beispiel — salopp: „Sorry, ich schaff’s leider nicht.“ gehoben: „Leider ist es mir nicht möglich, Ihrer Einladung Folge zu leisten.“' },
        { typ: 'Freie Produktion', aufgabe: 'Schreiben Sie zwei kurze Nachrichten mit demselben Inhalt (eine Terminverschiebung): eine an einen Freund, eine an eine Vorgesetzte.', hinweis: 'Register konsequent durchhalten.', musterloesung: 'Beispiel — an den Freund: „Hey, können wir morgen statt heute? Mir kommt was dazwischen.“ an die Vorgesetzte: „Sehr geehrte Frau Klein, aus organisatorischen Gründen möchte ich unseren Termin gern auf morgen verschieben. Passt Ihnen das?“' },
      ],
    },
    {
      id: 'argumentation-konzession',
      titel: 'Argumentation & Konzession',
      kurzbeschreibung: 'Überzeugend argumentieren, Einwände einräumen und elegant entkräften — die Sprache der Debatte.',
      grammatik: [
        {
          titel: 'These, Begründung, Beleg',
          erklaerung:
            'Ein tragfähiges Argument gliedert sich in Behauptung (These), Begründung und Beleg/Beispiel. Sprachlich strukturiert man das mit Konnektoren: „Ich vertrete die Auffassung, dass … Denn … Ein Beispiel dafür ist …“.',
          beispiel: 'Erstens spart das Kosten. Zweitens erhöht es die Qualität. Folglich lohnt sich die Investition.',
        },
        {
          titel: 'Konzession (Einräumung)',
          erklaerung:
            'Konzessives Argumentieren räumt einen Gegeneinwand ein, um ihn dann zu entkräften — das wirkt souverän und fair. Marker: „zwar … aber“, „gewiss/freilich …, dennoch“, „so … auch“, „zugegeben, … gleichwohl“.',
          beispiel: 'Zwar ist der Weg teurer, aber er ist langfristig der einzig gangbare.',
        },
        {
          titel: 'Einschränkung und Relativierung',
          erklaerung:
            'Mit „allerdings“, „freilich“, „insofern … als“, „bis zu einem gewissen Grad“, „in gewisser Hinsicht“ differenzieren Sie, statt pauschal zu urteilen. Das signalisiert Urteilskraft und nimmt Angriffsfläche.',
          beispiel: 'Der Plan überzeugt — allerdings nur unter der Voraussetzung, dass die Finanzierung steht.',
        },
        {
          titel: 'Widerlegung und Gegenposition',
          erklaerung:
            'Um eine Gegenposition zu entkräften, benennt man sie fair und setzt dann den eigenen Einwand: „Es mag zwar stimmen, dass …, jedoch übersieht dieser Einwand …“ / „Dem ist entgegenzuhalten, dass …“.',
          beispiel: 'Man könnte einwenden, dass … Dem ist jedoch entgegenzuhalten, dass …',
        },
        {
          titel: 'Schlussfolgerung und Fazit',
          erklaerung:
            'Zum Abschluss bündelt man die Argumente mit folgernden Konnektoren: „folglich“, „mithin“, „daher“, „alles in allem“, „unterm Strich“, „somit lässt sich festhalten, dass …“.',
          beispiel: 'Alles in allem überwiegen die Vorteile; daher plädiere ich für den Vorschlag.',
        },
      ],
      beispiele: [
        { satz: 'Ich bin der festen Überzeugung, dass sich die Mühe auszahlt.', hinweis: 'Standhafte Thesen-Einleitung, gehoben.' },
        { satz: 'Zugegeben, das Verfahren ist aufwendig; gleichwohl ist es das gründlichste.', hinweis: 'Konzession „zugegeben … gleichwohl“.' },
        { satz: 'Man könnte einwenden, das sei zu teuer. Dem ist jedoch entgegenzuhalten, dass die Folgekosten sinken.', hinweis: 'Gegenposition benennen und entkräften.' },
        { satz: 'Der Vorschlag ist insofern problematisch, als er die Kleinbetriebe benachteiligt.', hinweis: '„insofern … als“ differenziert die Kritik.' },
        { satz: 'So einleuchtend die Theorie auch klingt, in der Praxis versagt sie.', hinweis: 'Konzessives „so … auch“, nachdrücklich.' },
        { satz: 'Unterm Strich überwiegen die langfristigen Vorteile.', hinweis: 'Fazit-Formel, leicht umgangssprachlich-souverän.' },
        { satz: 'Erstens fehlt das Personal, zweitens die Zeit, und drittens das Budget.', hinweis: 'Klare Aufzählung stärkt die Argumentkette.' },
      ],
      anwendung: [
        'Die Konzession ist Ihr stärkstes rhetorisches Werkzeug: Wer den Einwand des Gegenübers zuerst einräumt („Sie haben insofern recht, als …“), wirkt fair und souverän — und entkräftet ihn danach umso wirksamer mit „gleichwohl / dennoch / allerdings“.',
        'Vermeiden Sie defensive Satzeröffnungen. Statt „Das stimmt schon, dass …, aber …“ (klingt entschuldigend) sagen Sie „Zugegeben, …, gleichwohl …“ oder direkt „Ich sehe das anders, und zwar aus zwei Gründen: …“. Sie behalten so die Initiative.',
        'Strukturieren Sie hörbar mit „erstens / zweitens / drittens“ und schließen Sie mit „folglich / mithin / alles in allem“. Diese Gerüstwörter machen selbst ein komplexes Argument sofort nachvollziehbar und lassen Sie geordnet wirken.',
        'Typischer Fehler: pauschale Übertreibung („immer“, „nie“, „alle“, „völlig“). Relativieren Sie mit „in der Regel“, „häufig“, „weitgehend“, „in gewisser Hinsicht“ — differenzierte Aussagen sind schwerer angreifbar und wirken kompetenter.',
        'Nutzen Sie Konjunktiv II für vorsichtige Gegenrede: „Da würde ich widersprechen“, „Man könnte auch argumentieren, dass …“. Das hält die Debatte sachlich und offen, statt sie zu verhärten.',
      ],
      uebungen: [
        { typ: 'Transformation', aufgabe: 'Formulieren Sie konzessiv (zwar … aber): „Der Kurs ist teuer. Er ist sein Geld wert.“', hinweis: 'Einräumung + Entkräftung.', musterloesung: 'Der Kurs ist zwar teuer, aber er ist sein Geld wert.' },
        { typ: 'Transformation', aufgabe: 'Wandeln Sie die defensive Eröffnung in eine souveräne um: „Das stimmt, dass es riskant ist, aber …“', hinweis: '„Zugegeben, …, gleichwohl …“.', musterloesung: 'Zugegeben, es ist riskant; gleichwohl überwiegt die Chance. (auch: Gewiss ist es riskant, dennoch …)' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie den differenzierenden Konnektor: „Der Plan ist gut, ____ nur bei ausreichender Finanzierung.“', hinweis: 'Einschränkung.', musterloesung: 'allerdings' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie die folgernde Schlussformel: „Die Vorteile überwiegen; ____ stimme ich zu.“', hinweis: 'Konsequenz, Inversion.', musterloesung: 'folglich (auch: daher / mithin)' },
        { typ: 'Transformation', aufgabe: 'Benennen und entkräften Sie einen Einwand: These „Homeoffice steigert die Produktivität.“ Einwand: soziale Isolation.', hinweis: '„Man könnte einwenden …, dem ist jedoch entgegenzuhalten …“.', musterloesung: 'Man könnte einwenden, Homeoffice fördere die soziale Isolation. Dem ist jedoch entgegenzuhalten, dass gezielte Präsenztage den Austausch sichern.' },
        { typ: 'Fehlerkorrektur', aufgabe: 'Ersetzen Sie die pauschale Übertreibung durch eine differenzierte Aussage: „Solche Maßnahmen bringen nie etwas.“', hinweis: 'relativieren.', musterloesung: 'Solche Maßnahmen bringen erfahrungsgemäß nur selten den erhofften Effekt. (auch: … bringen nicht immer etwas.)' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie „insofern … als“: „Die Kritik ist berechtigt, ____ sie auf einen echten Mangel hinweist.“', hinweis: 'Doppelkonnektor.', musterloesung: 'insofern … als (Die Kritik ist insofern berechtigt, als sie …)' },
        { typ: 'Transformation', aufgabe: 'Bilden Sie eine nachdrückliche Konzession mit „so … auch“: „Die Idee klingt gut, aber sie ist nicht finanzierbar.“', hinweis: '„So gut … auch“.', musterloesung: 'So gut die Idee auch klingt, sie ist nicht finanzierbar.' },
        { typ: 'Paraphrase', aufgabe: 'Formulieren Sie vorsichtigen Widerspruch mit Konjunktiv II: „Das ist völlig falsch.“', hinweis: 'sachlich, offen.', musterloesung: 'Da würde ich widersprechen. (auch: Das sehe ich etwas anders. / Man könnte das auch anders sehen.)' },
        { typ: 'Transformation', aufgabe: 'Strukturieren Sie zwei Gründe sichtbar: „Wir sollten investieren, weil es Kosten spart und die Qualität steigert.“', hinweis: 'erstens/zweitens + Fazit.', musterloesung: 'Wir sollten investieren: Erstens spart es Kosten, zweitens steigert es die Qualität. Folglich lohnt sich der Schritt.' },
        { typ: 'Lückentext', aufgabe: 'Ergänzen Sie eine Fazit-Formel: „____ überwiegen die Vorteile deutlich.“', hinweis: 'bündelnd.', musterloesung: 'Alles in allem (auch: Unterm Strich / Insgesamt)' },
        { typ: 'Freie Produktion', aufgabe: 'Argumentieren Sie in 3–4 Sätzen zu einer strittigen Frage Ihrer Wahl: These, eine Konzession, Entkräftung, Fazit.', hinweis: 'vollständige Argumentstruktur.', musterloesung: 'Beispiel: Städte sollten autofreie Zentren einführen. Zugegeben, das erschwert zunächst die Anlieferung des Handels. Dieser Einwand lässt sich jedoch durch ausgewiesene Lieferzeiten entkräften. Alles in allem überwiegen die Gewinne an Luftqualität und Aufenthaltsqualität deutlich.' },
      ],
    },
  ],
}

export const module: Modul[] = [modulA, modulB, modulC]

// Bequeme Flach-Liste aller Themen (für Fortschritt & Routing).
export const alleThemen = module.flatMap((m) =>
  m.themen.map((t) => ({ modulId: m.id, thema: t })),
)

export const gesamtzahlUebungen = module.reduce(
  (summe, m) => summe + m.themen.reduce((s, t) => s + t.uebungen.length, 0),
  0,
)
