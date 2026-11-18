// Lerninhalte für ICD11 Compass.
// Codes und Bezeichnungen: ICD-11 MMS der WHO, deutsche Testfassung (BfArM), Release 2026-01, abgeglichen am 18.11.2026.
// Kurzbeschreibungen, Abgrenzungen und Fälle sind eigene Lernzusammenfassungen, keine Originaltexte der WHO.
// Eintrag: [Code, offizielle Bezeichnung, Kernmerkmale, ICD-10]
// ICD-10-Feld: "F41.1" direkte Entsprechung · "≈F62.0" nur ungefähr, keine direkte Entsprechung · "neu" neu in ICD-11 · "" nicht angegeben

const SOURCE = "ICD-11 MMS, deutsche Testfassung (BfArM/WHO), Release 2026-01";

const GROUPS = {
  "6A0": "Neuromentale Entwicklungsstörungen",
  "6A2": "Schizophrenie oder andere primäre psychotische Störungen",
  "6A4": "Katatonie",
  "6A6": "Bipolare oder verwandte Störungen",
  "6A7": "Depressive Störungen",
  "6A8": "Verläufe affektiver Episoden",
  "6B0": "Angst- oder furchtbezogene Störungen",
  "6B2": "Zwangsstörung oder verwandte Störungen",
  "6B4": "Spezifisch belastungs-assoziierte Störungen",
  "6B6": "Dissoziative Störungen",
  "6B8": "Fütter- oder Essstörungen",
  "6C0": "Ausscheidungsstörungen",
  "6C2": "Somatische Belastungsstörung oder Störungen der Körpererfahrung",
  "6C4": "Störungen durch Substanzgebrauch",
  "6C5": "Störungen durch Verhaltenssüchte",
  "6C7": "Störungen der Impulskontrolle",
  "6C9": "Disruptives Verhalten oder dissoziale Störungen",
  "6D1": "Persönlichkeitsstörungen und zugehörige Persönlichkeitsmerkmale",
  "6D3": "Paraphile Störungen",
  "6D5": "Artifizielle Störungen",
  "6D7": "Neurokognitive Störungen",
  "6D8": "Demenz",
  "6E2": "Psychische Störungen oder Verhaltensstörungen in Zusammenhang mit Schwangerschaft, Geburt oder Wochenbett",
  "6E4": "Psychologische Faktoren oder Verhaltensfaktoren bei anderenorts klassifizierten Erkrankungen",
  "6E6": "Sekundäre psychische oder Verhaltenssyndrome"
};

const UNITS = [
  { id: "m1", map: true, title: "Landkarte I: 6A bis 6B", desc: "Die großen Blöcke von Entwicklung bis Essstörung",
    items: [
      ["6A0", "Neuromentale Entwicklungsstörungen", "Intelligenzentwicklung, Sprech- und Sprachentwicklung, Autismus, Lernentwicklung, Motorik, ADHS"],
      ["6A2", "Schizophrenie oder andere primäre psychotische Störungen", "Schizophrenie, schizoaffektive, schizotype, akute und vorübergehende sowie wahnhafte Störung"],
      ["6A4", "Katatonie", "Katatonie bei einer anderen psychischen Störung oder durch Substanzen"],
      ["6A6", "Bipolare oder verwandte Störungen", "Bipolar Typ I und II, zyklothyme Störung"],
      ["6A7", "Depressive Störungen", "Einzelepisoden, rezidivierend, dysthym, gemischt depressiv und ängstlich"],
      ["6B0", "Angst- oder furchtbezogene Störungen", "Generalisierte Angst, Panik, Agoraphobie, Phobien, soziale Angst, Trennungsangst, Mutismus"],
      ["6B2", "Zwangsstörung oder verwandte Störungen", "Zwang, körperdysmorphe Störung, Krankheitsangst, Horten, Trichotillomanie"],
      ["6B4", "Spezifisch belastungs-assoziierte Störungen", "PTBS, komplexe PTBS, anhaltende Trauer, Anpassungsstörung, Bindungsstörungen"],
      ["6B6", "Dissoziative Störungen", "Neurologische Symptome, Amnesie, Trance, Identitätsstörung, Depersonalisation"],
      ["6B8", "Fütter- oder Essstörungen", "Anorexie, Bulimie, Binge-Eating, ARFID, Pica, Ruminationsstörung"]
    ] },
  { id: "m2", map: true, title: "Landkarte II: 6C bis 6E", desc: "Von Ausscheidung bis zu sekundären Syndromen",
    items: [
      ["6C0", "Ausscheidungsstörungen", "Enuresis und Enkopresis"],
      ["6C2", "Somatische Belastungsstörung oder Störungen der Körpererfahrung", "Somatische Belastungsstörung, Körperintegritätsdysphorie"],
      ["6C4", "Störungen durch Substanzgebrauch", "Alkohol, Cannabis, Opioide, Sedativa, Kokain, Stimulanzien, Nikotin und weitere"],
      ["6C5", "Störungen durch Verhaltenssüchte", "Glücksspielstörung, Computerspielstörung"],
      ["6C7", "Störungen der Impulskontrolle", "Pyromanie, Kleptomanie, zwanghafte sexuelle Verhaltensstörung, intermittierende explosible Störung"],
      ["6C9", "Disruptives Verhalten oder dissoziale Störungen", "Oppositionelles, aufsässiges Verhalten und dissoziales Verhalten"],
      ["6D1", "Persönlichkeitsstörungen und zugehörige Persönlichkeitsmerkmale", "Schweregrad (leicht-, mittel-, schwergradig) plus ausgeprägte Merkmale und Borderline-Muster"],
      ["6D3", "Paraphile Störungen", "Exhibitionistisch, voyeuristisch, pädophil, sexuell-sadistisch unter Zwang, frotteuristisch"],
      ["6D5", "Artifizielle Störungen", "Vortäuschen oder Erzeugen von Krankheit an sich selbst oder an anderen"],
      ["6D7", "Neurokognitive Störungen", "Delir, leichtgradige neurokognitive Störung, amnestische Störung, Demenzen (6D8)"],
      ["6E2", "Psychische Störungen oder Verhaltensstörungen in Zusammenhang mit Schwangerschaft, Geburt oder Wochenbett", "Mit oder ohne psychotische Symptome"],
      ["6E6", "Sekundäre psychische oder Verhaltenssyndrome", "Psychische Syndrome als direkte Folge einer anderenorts klassifizierten Erkrankung"]
    ] },
  { id: "u01", title: "Neuromentale Entwicklung", desc: "Intelligenz, Autismus, ADHS und Lernstörungen",
    items: [
      ["6A00", "Störungen der Intelligenzentwicklung", "Deutlich unterdurchschnittliche intellektuelle Funktionen und adaptives Verhalten (etwa 2 Standardabweichungen unter dem Mittel), Beginn in der Entwicklungsperiode.", "F70–F79"],
      ["6A01", "Störungen der Sprech- oder Sprachentwicklung", "Schwierigkeiten beim Verstehen oder Produzieren von Sprache oder Lauten, deutlich unter dem Altersniveau, nicht durch andere Ursachen erklärt.", "F80"],
      ["6A02", "Autismus-Spektrum-Störung", "Anhaltende Defizite in sozialer Kommunikation und Interaktion plus restriktive, repetitive und unflexible Verhaltensmuster, Interessen oder Aktivitäten.", "F84.0, F84.1, F84.5"],
      ["6A03", "Lernentwicklungsstörung", "Anhaltende, deutliche Schwierigkeiten beim Erlernen schulischer Fertigkeiten wie Lesen, Schreiben oder Rechnen.", "F81"],
      ["6A04", "Entwicklungsstörung der motorischen Koordination", "Deutliche Verzögerung grob- und feinmotorischer Fertigkeiten, Ungeschicklichkeit und Langsamkeit, die den Alltag einschränken.", "F82"],
      ["6A05", "Aufmerksamkeitsdefizit- und Hyperaktivitätsstörung", "ADHS: anhaltendes Muster von Unaufmerksamkeit und/oder Hyperaktivität-Impulsivität, Beginn vor dem 12. Lebensjahr, in mehreren Lebensbereichen.", "F90"],
      ["6A06", "Stereotype Bewegungsstörung", "Anhaltende, willkürliche, repetitive und scheinbar zwecklose Bewegungen wie Schaukeln oder Kopfschlagen, Beginn in der frühen Entwicklung.", "F98.4"]
    ] },
  { id: "u02", title: "Psychotische Störungen", desc: "Schizophrenie, Wahn und Katatonie",
    items: [
      ["6A20", "Schizophrenie", "Mindestens zwei Kernsymptome (z. B. Wahn, Halluzinationen, Ich-Störungen, formale Denkstörungen, Negativsymptome) über mindestens einen Monat.", "F20"],
      ["6A21", "Schizoaffektive Störung", "Schizophrenie-Kriterien und gleichzeitig eine mittel- oder schwergradige affektive Episode in derselben Krankheitsepisode.", "F25"],
      ["6A22", "Schizotype Störung", "Anhaltende Exzentrizität in Verhalten, Erscheinung und Sprache mit kognitiv-perzeptuellen Verzerrungen, ohne voll ausgeprägte Psychose, über mindestens 2 Jahre.", "F21"],
      ["6A23", "Akute und vorübergehende psychotische Störung", "Plötzlicher Beginn psychotischer Symptome innerhalb von 2 Wochen, rasch wechselnd in Art und Intensität, Dauer meist unter 3 Monaten.", "F23"],
      ["6A24", "Wahnhafte Störung", "Anhaltender Wahn über mindestens 3 Monate ohne weitere ausgeprägte psychotische Symptome, Funktionsniveau oft relativ erhalten.", "F22"],
      ["6A25", "Symptomatische Manifestationen primärer psychotischer Störungen", "Zusatzcodes für Positiv-, Negativ-, depressive, manische, psychomotorische und kognitive Symptome (6A25.0 bis 6A25.5).", "neu"],
      ["6A40", "Katatonie in Verbindung mit einer anderen psychischen Störung", "Mehrere Symptome wie Stupor, Mutismus, Haltungsstereotypien, Negativismus oder Flexibilitas cerea im Rahmen einer anderen psychischen Störung.", "≈F20.2"],
      ["6A41", "Katatonie durch Substanzen oder Medikamente", "Katatone Symptome während oder kurz nach einer Intoxikation oder einem Entzug oder durch Medikamente ausgelöst.", ""]
    ] },
  { id: "u03", title: "Affektive Störungen", desc: "Bipolar, Depression und Dysthymie",
    items: [
      ["6A60", "Bipolare Störung Typ I", "Mindestens eine manische oder gemischte Episode in der Vorgeschichte.", "F31"],
      ["6A61", "Bipolare Störung Typ II", "Mindestens eine hypomanische und mindestens eine depressive Episode, aber nie eine manische oder gemischte Episode.", "≈F31.8"],
      ["6A62", "Zyklothyme Störung", "Anhaltende Stimmungsinstabilität über mindestens 2 Jahre mit zahlreichen hypomanischen und depressiven Phasen, ohne volle Episoden.", "F34.0"],
      ["6A70", "Depressive Störung mit Einzelepisoden", "Eine depressive Episode (mindestens 2 Wochen gedrückte Stimmung oder Interessenverlust mit weiteren Symptomen) ohne frühere Episoden.", "F32"],
      ["6A71", "Rezidivierende depressive Störung", "Mindestens zwei depressive Episoden, getrennt durch mehrere Monate ohne relevante Stimmungsstörung.", "F33"],
      ["6A72", "Dysthyme Störung", "Anhaltend gedrückte Stimmung an den meisten Tagen über mindestens 2 Jahre, ohne volle Episodenkriterien in den ersten 2 Jahren.", "F34.1"],
      ["6A73", "Gemischte depressive Störung und Angststörung", "Depressive und Angstsymptome an den meisten Tagen über mindestens 2 Wochen; keines erfüllt allein die Kriterien einer eigenen Diagnose.", "F41.2"]
    ] },
  { id: "u04", title: "Angst und Furcht", desc: "Panik, Phobien, Sorgen und Mutismus",
    items: [
      ["6B00", "Generalisierte Angststörung", "Ausgeprägte Angst über mehrere Monate: generelle Besorgnis oder übermäßige Sorgen in vielen Lebensbereichen, dazu Anspannung, Unruhe und Schlafprobleme.", "F41.1"],
      ["6B01", "Panikstörung", "Wiederkehrende, unerwartete Panikattacken mit anhaltender Sorge vor weiteren Attacken oder deutlichem Vermeidungsverhalten.", "F41.0"],
      ["6B02", "Agoraphobie", "Angst vor Situationen, in denen Flucht schwierig oder Hilfe nicht erreichbar wäre, etwa öffentliche Verkehrsmittel, Menschenmengen oder allein außer Haus.", "F40.0"],
      ["6B03", "Spezifische Phobie", "Ausgeprägte, unverhältnismäßige Angst vor bestimmten Objekten oder Situationen wie Tieren, Höhe, Blut oder Spritzen, die gemieden werden.", "F40.2"],
      ["6B04", "Soziale Angststörung", "Ausgeprägte Angst in sozialen Situationen aus Furcht, von anderen negativ bewertet zu werden.", "F40.1"],
      ["6B05", "Störung mit Trennungsangst", "Übermäßige Angst vor der Trennung von Bezugspersonen; in ICD-11 ausdrücklich auch bei Erwachsenen diagnostizierbar.", "F93.0"],
      ["6B06", "Selektiver Mutismus", "Durchgängiges Nicht-Sprechen in bestimmten sozialen Situationen wie der Schule, obwohl in anderen gesprochen wird, über mindestens einen Monat.", "F94.0"]
    ] },
  { id: "u05", title: "Zwang und Verwandtes", desc: "Zwang, Körperbild, Krankheitsangst, Horten",
    items: [
      ["6B20", "Zwangsstörung", "Zwangsgedanken und/oder Zwangshandlungen, die viel Zeit kosten (z. B. über eine Stunde täglich) oder deutlich belasten.", "F42"],
      ["6B21", "Körperdysmorphe Störung", "Übermäßige Beschäftigung mit vermeintlichen Makeln des Aussehens, mit wiederholtem Kontrollieren, Vergleichen oder Verbergen.", "F45.2"],
      ["6B22", "Olfaktorische Referenzstörung", "Anhaltende Überzeugung, einen unangenehmen Körpergeruch zu verströmen, den andere bemerken, mit Kontroll- und Vermeidungsverhalten.", "≈F22.8"],
      ["6B23", "Krankheitsangststörung", "Hypochondrie: anhaltende Angst vor oder Beschäftigung mit einer schweren Krankheit, mit wiederholtem Prüfen oder Vermeiden. In ICD-11 bei den Zwangsspektrumsstörungen.", "F45.2"],
      ["6B24", "Pathologisches Horten", "Anhäufen von Gegenständen und große Schwierigkeiten, sie wegzugeben, sodass Wohnräume kaum noch nutzbar sind.", "≈F63.8"],
      ["6B25.0", "Trichotillomanie", "Wiederholtes Ausreißen der eigenen Haare mit deutlichem Haarverlust und erfolglosen Versuchen aufzuhören.", "F63.3"],
      ["6B25.1", "Exkoriationsstörung", "Skin-Picking: wiederholtes Kratzen oder Zupfen an der eigenen Haut mit Hautläsionen und erfolglosen Versuchen aufzuhören.", "≈L98.1"]
    ] },
  { id: "u06", title: "Trauma und Belastung", desc: "PTBS, komplexe PTBS, Trauer, Anpassung",
    items: [
      ["6B40", "Posttraumatische Belastungsstörung", "PTBS: nach einem extrem bedrohlichen Ereignis Wiedererleben im Hier und Jetzt, Vermeidung und anhaltendes Gefühl aktueller Bedrohung über mehrere Wochen.", "F43.1"],
      ["6B41", "Komplexe posttraumatische Belastungsstörung", "PTBS-Kriterien plus Störungen der Selbstorganisation: Affektregulation, negatives Selbstbild und Beziehungsprobleme, meist nach lang andauernder Traumatisierung.", "≈F62.0"],
      ["6B42", "Anhaltende Trauerstörung", "Durchdringende Trauerreaktion mit Sehnsucht nach oder Beschäftigung mit der verstorbenen Person, länger als 6 Monate und über kulturelle Normen hinaus.", "neu"],
      ["6B43", "Anpassungsstörung", "Fehlangepasste Reaktion auf eine identifizierbare Belastung: Präokkupation mit dem Stressor und Anpassungsprobleme, meist Beginn binnen eines Monats und Abklingen binnen 6 Monaten.", "F43.2"],
      ["6B44", "Reaktive Bindungsstörung", "Stark abnormes Bindungsverhalten in der frühen Kindheit nach grob unzureichender Versorgung; das Kind sucht kaum Trost bei Bezugspersonen.", "F94.1"],
      ["6B45", "Störung der sozialen Bindung mit enthemmtem Verhalten", "Distanzloses Sozialverhalten gegenüber Fremden nach grob unzureichender Versorgung in der Kindheit.", "F94.2"]
    ] },
  { id: "u07", title: "Dissoziation", desc: "Amnesie, Trance, Identität, Depersonalisation",
    items: [
      ["6B60", "Dissoziative Störung mit neurologischen Symptomen", "Motorische, sensorische oder kognitive Symptome wie Lähmungen oder nichtepileptische Anfälle, die nicht zu einer neurologischen Erkrankung passen.", "F44.4–F44.7"],
      ["6B61", "Dissoziative Amnesie", "Unfähigkeit, wichtige, meist belastende autobiografische Erinnerungen abzurufen, über normales Vergessen hinaus; mit oder ohne Fugue.", "F44.0"],
      ["6B62", "Trance-Störung", "Unfreiwillige Trancezustände mit deutlich verändertem Bewusstsein, ohne dass eine andere Identität übernimmt, außerhalb kultureller oder religiöser Praxis.", "F44.3"],
      ["6B63", "Besessenheits-Trance-Störung", "Trancezustände, in denen die gewohnte Identität durch eine äußere, besitzergreifende Identität wie einen Geist oder eine Gottheit ersetzt wird.", "F44.3"],
      ["6B64", "Dissoziative Identitätsstörung", "Mindestens zwei unterschiedliche Persönlichkeitszustände, die wiederholt die Kontrolle übernehmen, typischerweise mit Amnesie-Episoden.", "F44.81"],
      ["6B65", "Partielle dissoziative Identitätsstörung", "Ein dominanter Persönlichkeitszustand; andere Zustände dringen ein, übernehmen aber nicht wiederholt die volle Kontrolle.", "neu"],
      ["6B66", "Depersonalisations-Derealisationsstörung", "Anhaltende oder wiederkehrende Erfahrungen von Unwirklichkeit gegenüber sich selbst oder der Umwelt, bei erhaltener Realitätsprüfung.", "F48.1"]
    ] },
  { id: "u08", title: "Essen und Ausscheidung", desc: "Anorexie, Bulimie, Binge-Eating, ARFID, Enuresis",
    items: [
      ["6B80", "Anorexia nervosa", "Deutlich niedriges Körpergewicht (bei Erwachsenen BMI unter 18,5), nicht anders erklärbar, mit anhaltendem Verhalten gegen eine Gewichtszunahme.", "F50.0"],
      ["6B81", "Bulimia nervosa", "Wiederkehrende Essanfälle mit Kontrollverlust (mindestens einmal pro Woche über einen Monat) plus kompensatorisches Verhalten; Gewicht nicht deutlich niedrig.", "F50.2"],
      ["6B82", "Binge-Eating-Störung", "Wiederkehrende Essanfälle mit Kontrollverlust ohne regelmäßiges kompensatorisches Verhalten wie Erbrechen.", "≈F50.8"],
      ["6B83", "Störung mit Vermeidung oder Einschränkung der Nahrungsaufnahme", "ARFID: Vermeidung oder Einschränkung der Nahrungsaufnahme, etwa wegen sensorischer Eigenschaften oder Angst vor Folgen, ohne Sorge um Gewicht oder Figur.", "≈F50.8"],
      ["6B84", "Pica", "Regelmäßiger Verzehr nicht essbarer Substanzen wie Erde, Kreide oder Papier, ab einem Alter, in dem das unterschieden werden kann.", "F98.3"],
      ["6B85", "Ruminations-Regurgitationsstörung", "Absichtliches, wiederholtes Hochwürgen von Nahrung, die erneut gekaut, geschluckt oder ausgespuckt wird.", "F98.2"],
      ["6C00", "Enuresis", "Wiederholtes Einnässen tagsüber oder nachts ab einem Entwicklungsalter von 5 Jahren.", "F98.0"],
      ["6C01", "Enkopresis", "Wiederholtes Absetzen von Stuhl an unpassenden Stellen ab einem Entwicklungsalter von 4 Jahren.", "F98.1"]
    ] },
  { id: "u09", title: "Körper, Impulse, Verhalten", desc: "Somatische Belastung, Impulskontrolle, Sozialverhalten",
    items: [
      ["6C20", "Somatische Belastungsstörung", "Belastende Körpersymptome mit übermäßiger Aufmerksamkeit darauf und wiederholten Arztkontakten; ersetzt weitgehend die Somatisierungsstörung.", "≈F45.0, F45.1"],
      ["6C21", "Körperintegritätsdysphorie", "Anhaltender, intensiver Wunsch, körperlich behindert zu sein (etwa durch Amputation einer Extremität), Beginn meist in der frühen Adoleszenz.", "neu"],
      ["6C70", "Pyromanie", "Wiederholtes Versagen, Impulse zum Feuerlegen zu kontrollieren, mit Anspannung davor und Befriedigung danach, ohne nachvollziehbares Motiv.", "F63.1"],
      ["6C71", "Kleptomanie", "Wiederholtes Versagen, Impulse zum Stehlen zu kontrollieren, obwohl die Gegenstände weder gebraucht noch wegen ihres Werts genommen werden.", "F63.2"],
      ["6C72", "Zwanghafte sexuelle Verhaltensstörung", "Anhaltendes Unvermögen, intensive sexuelle Impulse zu kontrollieren, mit repetitivem Sexualverhalten über mindestens 6 Monate und deutlicher Beeinträchtigung.", "≈F52.7"],
      ["6C73", "Intermittierende explosible Störung", "Wiederholte kurze Ausbrüche verbaler oder körperlicher Aggression, die in keinem Verhältnis zum Anlass stehen.", "≈F63.8"],
      ["6C90", "Störung des Sozialverhaltens mit oppositionellem, aufsässigem Verhalten", "Ausgeprägt trotziges, ungehorsames, provokatives oder boshaftes Verhalten über mindestens 6 Monate; mit oder ohne chronische Reizbarkeit oder Wut.", "F91.3"],
      ["6C91", "Störung des Sozialverhaltens mit dissozialem Verhalten", "Wiederholtes Verletzen der Rechte anderer oder altersgemäßer Normen (Aggression, Zerstörung, Betrug, schwere Regelverstöße) über mindestens 12 Monate.", "F91"]
    ] },
  { id: "u10", title: "Substanzen und Sucht", desc: "Alkohol, Drogen, Glücksspiel und Gaming",
    items: [
      ["6C40", "Störungen durch Alkohol", "Schädlicher Gebrauch, Abhängigkeit, Intoxikation, Entzug und alkoholinduzierte Störungen.", "F10"],
      ["6C41", "Störungen durch Cannabis", "Schädlicher Gebrauch, Abhängigkeit, Intoxikation, Entzug und cannabisinduzierte Störungen.", "F12"],
      ["6C43", "Störungen durch Opioide", "Schädlicher Gebrauch, Abhängigkeit, Intoxikation und Entzug bei Opioiden wie Heroin oder Schmerzmitteln.", "F11"],
      ["6C44", "Störungen durch Sedativa, Hypnotika oder Anxiolytika", "Z. B. Benzodiazepine und Z-Substanzen: schädlicher Gebrauch, Abhängigkeit, Intoxikation, Entzug.", "F13"],
      ["6C45", "Störungen durch Kokain", "Schädlicher Gebrauch, Abhängigkeit, Intoxikation und Entzug bei Kokain.", "F14"],
      ["6C46", "Störungen durch Stimulanzien, einschließlich Amphetamine, Methamphetamin oder Methcathinon", "Schädlicher Gebrauch, Abhängigkeit, Intoxikation und Entzug bei Stimulanzien.", "F15"],
      ["6C4A", "Störungen durch Nikotin", "Schädlicher Gebrauch, Abhängigkeit, Intoxikation und Entzug bei Nikotin.", "F17"],
      ["6C50", "Glücksspielstörung", "Anhaltendes Glücksspielverhalten mit Kontrollverlust, zunehmender Priorität und Fortsetzung trotz negativer Folgen, meist über mindestens 12 Monate; vorwiegend online oder offline.", "F63.0"],
      ["6C51", "Computerspielstörung", "Anhaltendes Spielverhalten (online oder offline) mit Kontrollverlust, zunehmender Priorität und Fortsetzung trotz negativer Folgen.", "neu"]
    ] },
  { id: "u11", title: "Persönlichkeit", desc: "Schweregrad, Merkmale und Borderline-Muster",
    items: [
      ["6D10", "Persönlichkeitsstörung", "Anhaltende Probleme im Selbstfunktionieren (Identität, Selbstwert, Selbststeuerung) und/oder in Beziehungen über mindestens 2 Jahre; Schweregrad statt Typen.", "≈F60"],
      ["6D10.0", "Leichtgradige Persönlichkeitsstörung", "Einschränkungen betreffen nur einige Bereiche des Funktionierens; viele Beziehungen und Rollen bleiben erhalten; meist keine erhebliche Selbst- oder Fremdgefährdung.", "neu"],
      ["6D10.1", "Mittelgradige Persönlichkeitsstörung", "Mehrere Bereiche des Funktionierens sind deutlich beeinträchtigt; die meisten Beziehungen sind konflikthaft.", "neu"],
      ["6D10.2", "Schwergradige Persönlichkeitsstörung", "Schwere Beeinträchtigung im Selbstfunktionieren und in praktisch allen Beziehungen, oft mit Selbst- oder Fremdgefährdung.", "neu"],
      ["QE50.7", "Persönlichkeitsproblematik", "Ausgeprägte Persönlichkeitsauffälligkeiten unterhalb der Störungsschwelle. Kapitel 24: Faktoren, die den Gesundheitszustand beeinflussen.", "neu"],
      ["6D11.0", "Negative Affektivität bei Persönlichkeitsstörung oder -problematik", "Neigung zu vielfältigen negativen Emotionen wie Angst, Ärger, Scham oder Traurigkeit in unangemessener Häufigkeit und Intensität.", "neu"],
      ["6D11.1", "Distanziertheit bei Persönlichkeitsstörung oder -problematik", "Soziale Distanz (Meiden von Kontakten, wenige Freundschaften) und emotionale Distanz (Zurückhaltung, wenig Ausdruck).", "neu"],
      ["6D11.2", "Dissozialität bei Persönlichkeitsstörung oder -problematik", "Missachtung der Rechte und Gefühle anderer, Egozentrik und fehlende Empathie.", "neu"],
      ["6D11.3", "Enthemmung bei Persönlichkeitsstörung oder -problematik", "Impulsives Handeln auf unmittelbare Reize hin, ohne Rücksicht auf mögliche negative Folgen.", "neu"],
      ["6D11.4", "Anankasmus bei Persönlichkeitsstörung oder -problematik", "Enger Fokus auf eigene starre Standards von Perfektion und Richtig und Falsch sowie auf Kontrolle des eigenen Verhaltens und der Umgebung.", "neu"],
      ["6D11.5", "Borderline-Muster", "Durchgängige Instabilität in Beziehungen, Selbstbild und Affekten sowie ausgeprägte Impulsivität, oft mit Selbstverletzung. Wird zusätzlich zum Schweregrad kodiert.", "≈F60.3"]
    ] },
  { id: "u12", title: "Paraphilien, Artifizielles, Perinatales", desc: "Sexuelle Präferenzen, Vortäuschen, Wochenbett",
    items: [
      ["6D30", "Exhibitionistische Störung", "Anhaltendes, intensives Muster sexueller Erregung durch das Entblößen der Genitalien vor ahnungslosen Personen, mit entsprechendem Handeln oder deutlichem Leidensdruck.", "F65.2"],
      ["6D31", "Voyeuristische Störung", "Anhaltendes, intensives Muster sexueller Erregung durch das heimliche Beobachten nichtsahnender Personen beim Entkleiden, nackt oder bei sexuellen Handlungen.", "F65.3"],
      ["6D32", "Pädophile Störung", "Anhaltendes, intensives Muster sexueller Erregung durch vorpubertäre Kinder, mit entsprechendem Handeln oder deutlichem Leidensdruck.", "F65.4"],
      ["6D33", "Sexuell-sadistische Störung unter Ausübung von Zwang", "Anhaltendes, intensives Muster sexueller Erregung durch das Zufügen von Leid an einer nicht einwilligenden Person.", "≈F65.5"],
      ["6D34", "Frotteuristische Störung", "Anhaltendes, intensives Muster sexueller Erregung durch Berühren oder Reiben an nicht einwilligenden Personen, meist in Menschenmengen.", "≈F65.8"],
      ["6D50", "Artifizielle Störung an sich selbst", "Vortäuschen, Verfälschen oder absichtliches Herbeiführen von Krankheitszeichen bei sich selbst, ohne offensichtlichen äußeren Vorteil.", "F68.1"],
      ["6D51", "Artifizielle Störung, auf andere gerichtet", "Vortäuschen oder Herbeiführen von Krankheitszeichen bei einer anderen Person, meist einem abhängigen Kind. Kodiert wird bei der Person, die täuscht.", "neu"],
      ["6E20", "Psychische Störungen oder Verhaltensstörungen in Zusammenhang mit Schwangerschaft, Geburt oder Wochenbett, ohne psychotische Symptome", "Beginn meist innerhalb von etwa 6 Wochen nach der Entbindung, z. B. postpartale Depression ohne Wahn oder Halluzinationen.", "F53.0"],
      ["6E21", "Psychische Störungen oder Verhaltensstörungen in Zusammenhang mit Schwangerschaft, Geburt oder Wochenbett, mit psychotischen Symptomen", "Beginn meist innerhalb von etwa 6 Wochen nach der Entbindung, mit Wahn, Halluzinationen oder anderen psychotischen Symptomen.", "F53.1"],
      ["6E40", "Psychologische Faktoren oder Verhaltensfaktoren, die anderenorts klassifizierte Störungen oder Erkrankungen beeinflussen", "Psychische Symptome, Persönlichkeitsmerkmale oder Verhaltensweisen, die den Verlauf einer körperlichen Erkrankung ungünstig beeinflussen.", "F54"]
    ] },
  { id: "u13", title: "Neurokognition und Sekundäres", desc: "Delir, Demenzen und sekundäre Syndrome",
    items: [
      ["6D70", "Delir", "Akut einsetzende, fluktuierende Störung von Aufmerksamkeit, Orientierung und Bewusstsein, meist durch körperliche Ursache, Substanz oder Entzug.", "F05"],
      ["6D71", "Leichtgradige neurokognitive Störung", "Subjektiver und objektiver kognitiver Abbau gegenüber dem früheren Niveau, ohne wesentliche Einschränkung der Selbstständigkeit im Alltag.", "F06.7"],
      ["6D72", "Amnestische Störung", "Ausgeprägte Gedächtnisstörung bei sonst weitgehend erhaltenen kognitiven Funktionen.", "F04"],
      ["6D80", "Demenz durch Alzheimer-Krankheit", "Schleichender Beginn, meist mit Gedächtnisstörungen, langsam fortschreitend.", "F00"],
      ["6D81", "Demenz durch zerebrovaskuläre Krankheit", "Kognitiver Abbau durch Hirngefäßerkrankung oder Schlaganfälle, oft stufenweiser Verlauf.", "F01"],
      ["6D82", "Demenz durch Lewy-Körper-Krankheit", "Fluktuierende Kognition, wiederkehrende visuelle Halluzinationen und Parkinson-Symptome.", "≈F02.8"],
      ["6D83", "Frontotemporale Demenz", "Früh ausgeprägte Veränderungen von Persönlichkeit, Verhalten oder Sprache, Gedächtnis anfangs relativ erhalten.", "F02.0"],
      ["6E61", "Sekundäres psychotisches Syndrom", "Psychotische Symptome als direkte Folge einer anderenorts klassifizierten Erkrankung, z. B. bei Epilepsie oder Autoimmunerkrankung.", "F06.2"],
      ["6E62", "Sekundäres affektives Syndrom", "Depressive oder manische Symptome als direkte Folge einer anderenorts klassifizierten Erkrankung, z. B. Hypothyreose.", "F06.3"],
      ["6E63", "Sekundäres Angstsyndrom", "Angstsymptome als direkte Folge einer anderenorts klassifizierten Erkrankung, z. B. Hyperthyreose.", "F06.4"],
      ["6E68", "Sekundäre Persönlichkeitsänderung", "Anhaltende Persönlichkeitsänderung als direkte Folge einer anderenorts klassifizierten Erkrankung, z. B. nach Hirnverletzung.", "F07.0"]
    ] },
  { id: "u14", title: "Jenseits von Kapitel 6", desc: "Schlaf, Tics, Geschlecht und Belastungsreaktion",
    items: [
      ["7A00", "Chronische Insomnie", "Ein- oder Durchschlafstörung mindestens dreimal pro Woche über mindestens 3 Monate mit Beeinträchtigung am Tag. Kapitel 7: Schlaf-Wach-Störungen.", "≈F51.0"],
      ["7A01", "Kurzzeit-Insomnie", "Ein- oder Durchschlafstörung mit Beeinträchtigung am Tag, kürzer als 3 Monate. Kapitel 7: Schlaf-Wach-Störungen.", "≈F51.0"],
      ["8A05.00", "Tourette-Syndrom", "Multiple motorische Tics und mindestens ein vokaler Tic über mindestens ein Jahr, Beginn in der Entwicklungsperiode. Kapitel 8: Nervensystem.", "F95.2"],
      ["HA60", "Geschlechtsinkongruenz in der Jugend oder im Erwachsenenalter", "Ausgeprägte, anhaltende Inkongruenz zwischen erlebtem und zugewiesenem Geschlecht. Keine psychische Störung mehr, sondern Kapitel 17: sexuelle Gesundheit.", "F64.0"],
      ["HA61", "Geschlechtsinkongruenz im Kindesalter", "Ausgeprägte Inkongruenz zwischen erlebtem und zugewiesenem Geschlecht bei Kindern vor der Pubertät, über etwa 2 Jahre. Kapitel 17: sexuelle Gesundheit.", "F64.2"],
      ["QE84", "Akute Belastungsreaktion", "Vorübergehende, normale Reaktion auf ein extremes Ereignis, klingt meist binnen Tagen ab. In ICD-11 keine psychische Störung mehr, sondern Kapitel 24.", "F43.0"],
      ["GA34.41", "Prämenstruelle dysphorische Störung", "Affektive, körperliche oder kognitive Symptome in der Woche vor der Menstruation, die danach abklingen. Kapitel 16, in Kapitel 6 querverwiesen.", "≈N94.3"]
    ] },
  { id: "u15", title: "Weitere Substanzen", desc: "Halluzinogene, MDMA, Ketamin, Koffein und Komplikationen",
    items: [
      ["6C42", "Störungen durch synthetische Cannabinoide", "Schädlicher Gebrauch, Abhängigkeit, Intoxikation und Entzug bei synthetischen Cannabinoiden („Spice“). Eigene Kategorie, getrennt von Cannabis.", "neu"],
      ["6C47", "Störungen durch synthetische Cathinone", "Z. B. Mephedron („Badesalz“): schädlicher Gebrauch, Abhängigkeit, Intoxikation, Entzug. Eigene Kategorie, getrennt von den Stimulanzien.", "neu"],
      ["6C48", "Störungen durch Koffein", "Schädlicher Gebrauch, Intoxikation und Entzug bei Koffein.", "≈F15"],
      ["6C49", "Störungen durch Halluzinogene", "Z. B. LSD oder Psilocybin: schädlicher Gebrauch, Abhängigkeit, Intoxikation und halluzinogeninduzierte Störungen.", "F16"],
      ["6C4B", "Störungen durch volatile Inhalanzien", "Schnüffelstoffe wie Lösungsmittel oder Gase: schädlicher Gebrauch, Abhängigkeit, Intoxikation, Entzug.", "F18"],
      ["6C4C", "Störungen durch Methylendioxymethylamphetamin [MDMA] oder verwandte Substanzen, einschließlich Methylendioxyamphetamin [MDA]", "Ecstasy: schädlicher Gebrauch, Abhängigkeit, Intoxikation, Entzug. Eigene Kategorie.", "neu"],
      ["6C4D", "Störungen durch Dissoziativa, einschließlich Ketamin oder PCP [Phencyclidin]", "Schädlicher Gebrauch, Abhängigkeit und Intoxikation bei dissoziativ wirkenden Substanzen.", "neu"],
      ["6C40.5", "Alkoholinduziertes Delir", "Akuter Verwirrtheitszustand während einer Alkoholintoxikation oder eines Alkoholentzugs, z. B. Delirium tremens.", "F10.4"],
      ["6C40.6", "Psychotische Störung durch Alkohol", "Halluzinationen oder Wahn während oder kurz nach Intoxikation oder Entzug, die über die üblichen Effekte hinausgehen.", "F10.5"]
    ] },
  { id: "d1", kind: "diff", title: "Abgrenzungen", desc: "Ähnliche Diagnosen sicher auseinanderhalten", items: [] },
  { id: "c1", kind: "case", title: "Fälle I", desc: "Fallgeschichten aus Angst, Trauma, Stimmung und Sucht", cases: [0, 1, 2, 3, 4, 5, 6, 7] },
  { id: "c2", kind: "case", title: "Fälle II", desc: "Fallgeschichten aus Persönlichkeit, Entwicklung und Neurokognition", cases: [8, 9, 10, 11, 12, 13, 14, 15] },
  { id: "f1", fine: true, title: "Feinkodes I: Depression und ADHS", desc: "Schweregrade, psychotische Symptome, Präsentationen",
    items: [
      ["6A70.0", "Depressive Störung mit Einzelepisode, leichtgradig", "Einzelne depressive Episode, leichter Schweregrad.", "F32.0"],
      ["6A70.1", "Depressive Störung mit Einzelepisode, mittelgradig, ohne psychotische Symptome", "Einzelne depressive Episode, mittelgradig, ohne Wahn oder Halluzinationen.", "F32.1"],
      ["6A70.2", "Depressive Störung mit Einzelepisode, mittelgradig, mit psychotischen Symptomen", "Einzelne depressive Episode, mittelgradig, mit Wahn oder Halluzinationen. Diese Kombination gab es in ICD-10 nicht.", "neu"],
      ["6A70.3", "Depressive Störung mit Einzelepisode, schwergradig, ohne psychotische Symptome", "Einzelne depressive Episode, schwergradig, ohne Wahn oder Halluzinationen.", "F32.2"],
      ["6A70.4", "Depressive Störung mit Einzelepisode, schwergradig, mit psychotischen Symptomen", "Einzelne depressive Episode, schwergradig, mit Wahn oder Halluzinationen.", "F32.3"],
      ["6A05.0", "Aufmerksamkeitsdefizit- und Hyperaktivitätsstörung, vorwiegend unkonzentriert", "Unaufmerksamkeit steht klar im Vordergrund, Hyperaktivität-Impulsivität ist nicht klinisch bedeutsam.", "≈F98.80"],
      ["6A05.1", "Aufmerksamkeitsdefizit- und Hyperaktivitätsstörung, vorwiegend hyperaktiv-impulsiv", "Hyperaktivität-Impulsivität steht klar im Vordergrund, Unaufmerksamkeit ist nicht klinisch bedeutsam.", "neu"],
      ["6A05.2", "Aufmerksamkeitsdefizit- und Hyperaktivitätsstörung, kombiniert", "Sowohl Unaufmerksamkeit als auch Hyperaktivität-Impulsivität sind klinisch bedeutsam.", "≈F90.0"]
    ] },
  { id: "f2", fine: true, title: "Feinkodes II: Psychose, Essen, Alkohol", desc: "Verläufe, Gewichtsstufen, Konsummuster",
    items: [
      ["6A20.0", "Schizophrenie, erste Episode", "Erste Episode einer Schizophrenie; weiter unterteilt in gegenwärtig symptomatisch, Teil- oder Vollremission.", "neu"],
      ["6A20.1", "Schizophrenie, mehrfache Episoden", "Mindestens zwei Episoden mit dazwischenliegender Remission.", "neu"],
      ["6A20.2", "Schizophrenie, kontinuierlich", "Symptome bestehen über den größten Teil des Verlaufs ohne deutliche Remission.", "neu"],
      ["6B80.0", "Anorexia nervosa mit signifikant erniedrigtem Körpergewicht", "BMI bei Erwachsenen zwischen 14,0 und 18,5; weiter unterteilt in restriktives und Binge-Purging-Muster.", "F50.0"],
      ["6B80.1", "Anorexia nervosa mit kritisch erniedrigtem Körpergewicht", "BMI bei Erwachsenen unter 14,0, mit erhöhtem medizinischem Risiko.", "F50.0"],
      ["6C40.1", "Schädliches Muster des Gebrauchs von Alkohol", "Wiederholter oder anhaltender Konsum, der der körperlichen oder psychischen Gesundheit oder anderen Personen geschadet hat; episodisch oder kontinuierlich.", "F10.1"],
      ["6C40.2", "Alkoholabhängigkeit", "Gestörte Kontrolle über den Konsum, zunehmende Priorität des Trinkens und körperliche Merkmale wie Toleranz oder Entzug.", "F10.2"],
      ["6C40.3", "Alkoholintoxikation", "Vorübergehende, klinisch bedeutsame Störung von Bewusstsein, Kognition, Wahrnehmung, Affekt oder Verhalten durch Alkohol.", "F10.0"],
      ["6C40.4", "Alkoholentzug", "Symptome wie Zittern, Schwitzen, Unruhe oder Schlafstörung nach Reduktion oder Beenden eines anhaltenden Konsums.", "F10.3"],
      ["QE10", "Gefährlicher Alkoholgebrauch", "Konsummuster, das das Risiko schädlicher Folgen deutlich erhöht, ohne dass bereits ein Schaden eingetreten ist. Kapitel 24.", "neu"]
    ] },
  { id: "f3", fine: true, title: "Feinkodes III: Verläufe affektiver Störungen", desc: "Rezidivierende Depression, Bipolar und Verlaufsmerkmale",
    items: [
      ["6A71.0", "Rezidivierende depressive Störung, gegenwärtig leichtgradige Episode", "Wiederholte depressive Episoden, aktuell eine leichtgradige.", "F33.0"],
      ["6A71.1", "Rezidivierende depressive Störung, gegenwärtig mittelgradige Episode, ohne psychotische Symptome", "Wiederholte depressive Episoden, aktuell mittelgradig, ohne Wahn oder Halluzinationen.", "F33.1"],
      ["6A71.3", "Rezidivierende depressive Störung, gegenwärtig schwergradige Episode, ohne psychotische Symptome", "Wiederholte depressive Episoden, aktuell schwergradig, ohne Wahn oder Halluzinationen.", "F33.2"],
      ["6A71.6", "Rezidivierende depressive Störung, gegenwärtig in Teilremission", "Die Kriterien einer Episode sind nicht mehr erfüllt, es bestehen aber noch relevante Restsymptome.", "≈F33.4"],
      ["6A71.7", "Rezidivierende depressive Störung, gegenwärtig in Vollremission", "Aktuell keine relevanten depressiven Symptome mehr.", "≈F33.4"],
      ["6A60.0", "Bipolare Störung Typ I, gegenwärtig manische Episode, ohne psychotische Symptome", "Bipolar I mit aktueller Manie ohne Wahn oder Halluzinationen.", "F31.1"],
      ["6A60.1", "Bipolare Störung Typ I, gegenwärtig manische Episode, mit psychotischen Symptomen", "Bipolar I mit aktueller Manie mit Wahn oder Halluzinationen.", "F31.2"],
      ["6A60.2", "Bipolare Störung Typ I, gegenwärtig hypomanische Episode", "Bipolar I, aktuell nur hypomanisch.", "F31.0"],
      ["6A61.0", "Bipolare Störung Typ II, gegenwärtig hypomanische Episode", "Bipolar II, aktuell hypomanisch.", "neu"],
      ["6A80.3", "Gegenwärtig depressive Episode mit Melancholie", "Zusatzcode: ausgeprägter Freudverlust, Morgentief, frühes Erwachen, psychomotorische Veränderungen.", "neu"],
      ["6A80.4", "Saisonaler Beginn einer affektiven Episode", "Zusatzcode: Episoden beginnen und enden regelmäßig zu bestimmten Jahreszeiten.", "neu"],
      ["6A80.5", "Rapid Cycling", "Zusatzcode: mindestens vier affektive Episoden innerhalb von 12 Monaten.", "neu"]
    ] },
  { id: "f4", fine: true, title: "Feinkodes IV: Autismus, Einsicht, Körper", desc: "Unterformen, Krankheitseinsicht und Schweregrade",
    items: [
      ["6A02.0", "Autismus-Spektrum-Störung ohne Störung der Intelligenzentwicklung, mit leichtgradiger oder keiner Beeinträchtigung der funktionellen Sprache", "Unterform .0: Intelligenz unauffällig, Sprache weitgehend unbeeinträchtigt.", "≈F84.5"],
      ["6A02.1", "Autismus-Spektrum-Störung mit Störung der Intelligenzentwicklung, mit leichtgradiger oder keiner Beeinträchtigung der funktionellen Sprache", "Unterform .1: Intelligenzentwicklung gestört, Sprache weitgehend unbeeinträchtigt.", "neu"],
      ["6A02.2", "Autismus-Spektrum-Störung ohne Störung der Intelligenzentwicklung, mit Beeinträchtigung der funktionellen Sprache", "Unterform .2: Intelligenz unauffällig, funktionelle Sprache beeinträchtigt.", "neu"],
      ["6A02.3", "Autismus-Spektrum-Störung mit Störung der Intelligenzentwicklung, mit Beeinträchtigung der funktionellen Sprache", "Unterform .3: Intelligenzentwicklung gestört und funktionelle Sprache beeinträchtigt.", "neu"],
      ["6A02.5", "Autismus-Spektrum-Störung mit Störung der Intelligenzentwicklung, Fehlen der funktionellen Sprache", "Unterform .5: Intelligenzentwicklung gestört, keine funktionelle Sprache. Einen Code .4 gibt es nicht.", "neu"],
      ["6B20.0", "Zwangsstörung mit mittelmäßiger bis guter Krankheitseinsicht", "Die Person hält ihre Befürchtungen zumindest zeitweise für möglicherweise unbegründet. Gleiche Einteilung gibt es bei 6B21 bis 6B24.", "neu"],
      ["6B20.1", "Zwangsstörung mit schlechter bis fehlender Krankheitseinsicht", "Die Person ist meist oder ganz überzeugt, dass ihre Befürchtungen zutreffen.", "neu"],
      ["6C20.0", "Leichtgradige somatische Belastungsstörung", "Übermäßige Beschäftigung mit Symptomen, aber noch ohne starke Einschränkung des Alltags.", "neu"],
      ["6C20.2", "Schwergradige somatische Belastungsstörung", "Die Beschäftigung mit den Symptomen bestimmt das Leben; ausgeprägte Beeinträchtigung in vielen Bereichen.", "neu"],
      ["6B60.4", "Dissoziative Störung mit neurologischen Symptomen: nichtepileptischer Anfall", "Anfallsartige Episoden, die epileptischen Anfällen ähneln, ohne epileptische Aktivität im EEG.", "F44.5"]
    ] },
  { id: "yz", fine: true, title: "Restkategorien Y und Z", desc: "Sonstige und nicht näher bezeichnete Störungen",
    items: [
      ["6A0Y", "Sonstige näher bezeichnete neuromentale Entwicklungsstörungen", "Endung Y: Die Störung ist bekannt und beschrieben, passt aber in keine der aufgeführten Kategorien der Gruppe.", ""],
      ["6A7Y", "Sonstige näher bezeichnete depressive Störungen", "Endung Y: eine näher beschriebene depressive Störung außerhalb der Kategorien 6A70 bis 6A73.", ""],
      ["6A7Z", "Depressive Störungen, nicht näher bezeichnet", "Endung Z: depressive Störung, die nicht genauer bestimmt werden kann oder wurde.", ""],
      ["6B0Y", "Sonstige näher bezeichnete Angst- oder furchtbezogene Störungen", "Endung Y: eine näher beschriebene Angststörung außerhalb der Kategorien 6B00 bis 6B06.", ""],
      ["6B0Z", "Angst- oder furchtbezogene Störungen, nicht näher bezeichnet", "Endung Z: Angststörung, die nicht genauer bestimmt werden kann oder wurde.", ""],
      ["6A70.Z", "Depressive Störung mit Einzelepisoden, nicht näher bezeichnet", "Endung .Z bei einem Stammcode: Die Unterteilung ist nicht bekannt.", ""],
      ["6D10.Z", "Persönlichkeitsstörung, Schweregrad nicht näher bezeichnet", "Persönlichkeitsstörung, deren Schweregrad nicht bestimmt wurde.", ""]
    ] }
];

// Abgrenzungen: [Code A, Code B, Fall für A, Fall für B, Unterscheidungsmerkmal]
const CONTRASTS = [
  ["6B40", "6B41", "Nach einem schweren Verkehrsunfall hat Frau K. seit zwei Monaten Flashbacks, meidet das Autofahren und ist ständig angespannt. Selbstbild und Beziehungen sind stabil.", "Herr M. wurde als Kind über Jahre misshandelt. Er hat Flashbacks und meidet Erinnerungen, fühlt sich zudem wertlos, kann Gefühle kaum regulieren und hält Nähe in Beziehungen nicht aus.", "Komplexe PTBS = alle PTBS-Kriterien plus anhaltende Störungen der Selbstorganisation: Affektregulation, negatives Selbstbild, Beziehungsprobleme."],
  ["6B43", "6A70", "Seit der Kündigung vor drei Wochen grübelt Herr S. ständig über den Jobverlust, schläft schlecht und zieht sich zurück. Die Kriterien einer depressiven Episode sind nicht erfüllt.", "Frau L. ist seit über zwei Wochen fast täglich niedergeschlagen, hat an nichts mehr Freude, schläft schlecht, fühlt sich wertlos und kann sich kaum konzentrieren. Frühere Episoden gab es nicht.", "Anpassungsstörung: Präokkupation mit einem konkreten Stressor, ohne dass die Kriterien einer anderen Störung, etwa einer depressiven Episode, erfüllt sind."],
  ["6B23", "6C20", "Herr B. ist überzeugt, an einem Hirntumor zu leiden, obwohl er kaum Beschwerden hat. Er sucht ständig im Internet nach Symptomen und lässt sich immer wieder untersuchen.", "Frau D. leidet seit Monaten unter wechselnden Schmerzen und Erschöpfung. Ihre Gedanken kreisen um die Beschwerden selbst; deswegen sucht sie immer wieder Ärzte auf.", "Krankheitsangst: Angst, eine bestimmte schwere Krankheit zu haben. Somatische Belastungsstörung: belastende Körpersymptome mit übermäßiger Aufmerksamkeit auf die Symptome."],
  ["6B01", "6B00", "Frau T. erlebt aus heiterem Himmel Anfälle mit Herzrasen, Atemnot und Todesangst. Seither hat sie große Angst vor der nächsten Attacke.", "Herr F. macht sich seit Monaten fast ständig Sorgen über Gesundheit, Finanzen und Familie, ist angespannt, unruhig und schläft schlecht.", "Panikstörung: wiederkehrende, unerwartete Panikattacken. Generalisierte Angst: anhaltende Sorgen über viele Lebensbereiche."],
  ["6B04", "6B02", "Herr R. meidet Vorträge und Feiern, weil er fürchtet, sich zu blamieren und von anderen negativ bewertet zu werden.", "Frau P. meidet Busfahren, Menschenmengen und Einkaufen allein, weil sie fürchtet, im Notfall nicht wegzukommen oder keine Hilfe zu bekommen.", "Soziale Angst: Furcht vor negativer Bewertung. Agoraphobie: Furcht vor Situationen, aus denen Flucht schwierig oder Hilfe nicht erreichbar wäre."],
  ["6B81", "6B82", "Frau A. hat mehrmals pro Woche Essanfälle mit Kontrollverlust. Danach erbricht sie regelmäßig. Ihr Gewicht ist normal.", "Herr C. hat mehrmals pro Woche Essanfälle mit Kontrollverlust und schämt sich danach sehr, erbricht aber nicht und fastet nicht.", "Entscheidend ist das regelmäßige kompensatorische Verhalten (z. B. Erbrechen): vorhanden bei Bulimie, fehlt bei Binge-Eating."],
  ["6B80", "6B83", "Eine 16-Jährige isst kaum noch, hat einen BMI von 15 und große Angst zuzunehmen. Sie findet sich zu dick.", "Ein 10-Jähriger isst nur wenige Lebensmittel, weil ihn Konsistenz und Geruch ekeln, und hat dadurch abgenommen. Sorgen um Gewicht oder Figur hat er nicht.", "Bei der Störung mit Vermeidung oder Einschränkung der Nahrungsaufnahme (ARFID) fehlt die Beschäftigung mit Gewicht und Figur."],
  ["6A60", "6A61", "Frau N. hatte vor zwei Jahren eine Woche lang kaum geschlafen, Größenideen und Kaufrausch und musste stationär aufgenommen werden. Außerdem gab es depressive Phasen.", "Herr J. hatte mehrere depressive Episoden und dazwischen einige Tage mit gehobener Stimmung und Tatendrang, ohne dass sein Alltag ernsthaft beeinträchtigt war.", "Typ I: mindestens eine manische oder gemischte Episode. Typ II: nur hypomanische und depressive Episoden, nie eine Manie."],
  ["6A72", "6A71", "Seit drei Jahren ist Frau E. an den meisten Tagen gedrückt, ohne dass je die Kriterien einer depressiven Episode erfüllt waren.", "Herr G. hatte vor vier Jahren und jetzt erneut eine depressive Episode. Dazwischen ging es ihm monatelang gut.", "Dysthymie: anhaltend leichtere Verstimmung über mindestens 2 Jahre. Rezidivierende Depression: abgrenzbare Episoden mit symptomfreien Intervallen."],
  ["6A20", "6A24", "Herr W. hört seit zwei Monaten kommentierende Stimmen, glaubt, seine Gedanken würden gesendet, und spricht zunehmend zerfahren.", "Frau H. ist seit einem halben Jahr überzeugt, dass ihr Nachbar sie überwacht. Andere psychotische Symptome hat sie nicht; sie arbeitet weiter.", "Wahnhafte Störung: Wahn als einziges ausgeprägtes Symptom, Funktionsniveau oft erhalten. Schizophrenie: mehrere Kernsymptome."],
  ["6A23", "6A20", "Innerhalb weniger Tage entwickelt Frau O. Wahnideen und Halluzinationen, die sich täglich ändern. Nach sechs Wochen ist alles abgeklungen.", "Seit über einem Monat hat Herr V. anhaltend Wahnideen, Ich-Störungen und zieht sich zunehmend zurück. Die Symptome sind stabil.", "Akute und vorübergehende psychotische Störung: plötzlicher Beginn, rasch wechselnde Symptome, kurze Dauer."],
  ["6B20", "6B21", "Herr A. muss Türschloss und Herd immer wieder kontrollieren, weil er befürchtet, sonst an einem Unglück schuld zu sein.", "Frau Z. hält ihre Nase für entstellt, kontrolliert sie stundenlang im Spiegel und versteckt sie unter den Haaren.", "Körperdysmorphe Störung: Fokus auf vermeintliche Makel des Aussehens. Zwangsstörung: Zwangsgedanken und -handlungen zu anderen Themen."],
  ["6D10", "QE50.7", "Über viele Jahre hat Herr I. erhebliche Probleme mit Selbstbild und Beziehungen in fast allen Lebensbereichen, mit deutlicher Beeinträchtigung.", "Frau Q. reagiert in bestimmten Situationen auffallend misstrauisch und schroff, im Alltag und Beruf kommt sie aber gut zurecht.", "Persönlichkeitsproblematik (QE50.7): ausgeprägte Auffälligkeiten unterhalb der Störungsschwelle, ohne relevante Funktionsbeeinträchtigung."],
  ["QE84", "6B40", "Unmittelbar nach einem Überfall ist Herr Y. benommen, zittert und weint. Zwei Tage später geht es ihm wieder weitgehend gut.", "Monate nach einem Überfall erlebt Herr X. die Tat immer wieder, meidet den Ort und ist ständig in Alarmbereitschaft.", "Akute Belastungsreaktion: normale, rasch abklingende Reaktion (Kapitel 24). PTBS: anhaltende Symptome über mehrere Wochen."],
  ["6B42", "6A70", "Acht Monate nach dem Tod ihres Mannes sehnt sich Frau U. ständig nach ihm, kann den Verlust nicht akzeptieren und ist im Alltag stark beeinträchtigt.", "Herr K. ist seit drei Wochen fast täglich niedergeschlagen, hat keinerlei Freude mehr, fühlt sich wertlos und hat Schuldgefühle, ohne dass es einen Verlust gab.", "Anhaltende Trauerstörung: Sehnsucht nach und Beschäftigung mit der verstorbenen Person stehen im Zentrum, länger als 6 Monate."],
  ["6D70", "6D80", "Ein 82-Jähriger ist seit gestern, während einer Lungenentzündung, desorientiert, mal schläfrig, mal unruhig. Der Zustand schwankt stark über den Tag.", "Bei einer 78-Jährigen haben Gedächtnis und Orientierung über drei Jahre langsam und stetig abgenommen.", "Delir: akuter Beginn, schwankende Aufmerksamkeit und Bewusstseinslage. Alzheimer-Demenz: schleichender, fortschreitender Verlauf."],
  ["6C91", "6C90", "Ein 14-Jähriger schlägt andere, stiehlt und hat wiederholt fremdes Eigentum zerstört.", "Ein 8-Jähriger ist häufig wütend, streitet ständig mit Erwachsenen und widersetzt sich Regeln, verletzt aber keine Rechte anderer.", "Dissoziales Verhalten verletzt Rechte anderer (Aggression, Diebstahl, Zerstörung). Oppositionelles Verhalten bleibt bei Trotz und Ungehorsam."],
  ["6C50", "6C51", "Herr D. verspielt regelmäßig sein Gehalt bei Sportwetten und kann trotz Schulden nicht aufhören.", "Ein 17-Jähriger spielt nächtelang Online-Rollenspiele, vernachlässigt Schule und Freunde und kann trotz Konflikten nicht aufhören.", "Glücksspielstörung: Spiel um Geld oder Wertgegenstände. Computerspielstörung: Video- oder Onlinespiele."]
];

// Fälle: {a: richtiger Code, d: Ablenker, t: Fallgeschichte, w: Begründung}
const CASES = [
  { a: "6A71.1", d: ["6A70.1", "6A71.3", "6A72"], t: "Frau K., 34, ist seit drei Wochen niedergeschlagen, schläft schlecht und schafft ihre Arbeit nur mit Mühe. Es ist ihre dritte depressive Episode; zwischen den Episoden ging es ihr gut. Wahn oder Halluzinationen bestehen nicht. Der Schweregrad wird als mittelgradig eingeschätzt.", w: "Wiederholte Episoden → 6A71. Aktuell mittelgradig ohne psychotische Symptome → .1." },
  { a: "6B41", d: ["6B40", "6D11.5", "6B43"], t: "Herr L., 29, wurde in der Kindheit über Jahre schwer vernachlässigt und misshandelt. Er hat Albträume und Flashbacks, meidet alles, was ihn erinnert, und ist ständig auf der Hut. Er schämt sich, hält sich für wertlos, reagiert auf Kleinigkeiten mit heftigen Gefühlen und bricht Beziehungen immer wieder ab.", w: "PTBS-Kernsymptome plus Störungen der Selbstorganisation (Affektregulation, Selbstbild, Beziehungen) → komplexe PTBS." },
  { a: "6A05.0", d: ["6A05.2", "6B00", "6A03"], t: "Frau M., 31, war schon als Schülerin verträumt und vergesslich. Bis heute verliert sie ständig Dinge, verpasst Termine und kann sich bei langweiligen Aufgaben kaum konzentrieren. Unruhe oder Impulsivität sind nicht auffällig.", w: "ADHS mit Beginn in der Kindheit, im Vordergrund nur Unaufmerksamkeit → vorwiegend unkonzentrierte Präsentation." },
  { a: "6B82", d: ["6B81", "6B80", "6B83"], t: "Herr P., 42, isst seit Monaten mehrmals pro Woche in kurzer Zeit große Mengen und fühlt sich dabei wie fremdgesteuert. Danach schämt er sich, erbricht aber nicht, fastet nicht und treibt keinen übermäßigen Sport. Er hat deutlich zugenommen.", w: "Essanfälle mit Kontrollverlust ohne regelmäßiges kompensatorisches Verhalten → Binge-Eating-Störung." },
  { a: "6C40.2", d: ["6C40.1", "QE10", "6C40.4"], t: "Herr R., 55, trinkt seit Jahren täglich. Er hat mehrfach erfolglos versucht aufzuhören, braucht immer mehr, um eine Wirkung zu spüren, und zittert morgens, bis er etwas getrunken hat. Hobbys und Familie treten zunehmend in den Hintergrund.", w: "Kontrollverlust, Priorität des Trinkens, Toleranz und Entzugszeichen → Alkoholabhängigkeit." },
  { a: "6A61", d: ["6A60", "6A62", "6A71"], t: "Frau S., 27, hatte bereits zwei depressive Episoden. Im Frühjahr war sie eine Woche lang voller Energie, brauchte wenig Schlaf und hatte viele Ideen. Kollegen fiel das auf, ihr Alltag blieb aber intakt, und es gab nie psychotische Symptome oder einen Klinikaufenthalt.", w: "Depressive Episoden plus Hypomanie ohne je eine Manie → bipolare Störung Typ II." },
  { a: "6B23", d: ["6C20", "6B20", "6B01"], t: "Herr T., 38, ist seit einem Jahr überzeugt, an Darmkrebs erkrankt zu sein. Unauffällige Untersuchungen beruhigen ihn nur kurz. Er tastet täglich seinen Bauch ab, liest stundenlang über Symptome und verlangt immer neue Untersuchungen.", w: "Anhaltende Angst vor einer bestimmten schweren Krankheit mit Prüfverhalten → Krankheitsangststörung (Hypochondrie), 6B23." },
  { a: "6B42", d: ["6B43", "6A70", "6B40"], t: "Frau U., 66, hat vor neun Monaten ihren Sohn verloren. Sie denkt fast ununterbrochen an ihn, kann den Tod nicht akzeptieren, fühlt sich innerlich leer und hat sich von allen Aktivitäten zurückgezogen. Ihr Umfeld empfindet die Trauer als ungewöhnlich lang und intensiv.", w: "Sehnsucht nach und Beschäftigung mit dem Verstorbenen über mehr als 6 Monate, über kulturelle Normen hinaus → anhaltende Trauerstörung." },
  { a: "6D10.1", d: ["6D10.0", "6D10.2", "QE50.7"], t: "Frau V., 24, erlebt seit der Jugend starke Stimmungsschwankungen, ein instabiles Selbstbild und heftige Konflikte in fast allen Beziehungen. Sie verletzt sich gelegentlich selbst. Ausbildung und Freundschaften sind deutlich beeinträchtigt, einige Bereiche funktionieren aber noch. Akute Lebensgefahr bestand nie.", w: "Deutliche Beeinträchtigung in mehreren Bereichen, aber nicht in praktisch allen und ohne schwere Gefährdung → mittelgradig. Das Borderline-Muster würde zusätzlich mit 6D11.5 kodiert." },
  { a: "6A02.0", d: ["6A22", "6B04", "6D11.1"], t: "Herr W., 26, hatte schon als Kind kaum Freunde und Probleme, Mimik und Andeutungen zu verstehen. Er braucht feste Abläufe, reagiert stark auf Geräusche und beschäftigt sich intensiv mit Fahrplänen. Intelligenz und Sprache sind unauffällig.", w: "Soziale Kommunikationsdefizite und repetitive Interessen seit der Kindheit, Intelligenz und Sprache unauffällig → Autismus-Spektrum-Störung, Unterform .0." },
  { a: "6E21", d: ["6A23", "6E20", "6A60"], t: "Frau X., 30, hat vor zwei Wochen entbunden. Seit einigen Tagen ist sie verwirrt, hört Stimmen und ist überzeugt, ihr Baby sei vertauscht worden. Zuvor hatte sie nie psychische Probleme.", w: "Beginn im Wochenbett mit Halluzinationen und Wahn → Störung in Zusammenhang mit dem Wochenbett, mit psychotischen Symptomen." },
  { a: "6D82", d: ["6D80", "6D83", "6D70"], t: "Herr Y., 74, sieht seit Monaten immer wieder Menschen und Tiere in der Wohnung, die nicht da sind. Seine geistige Leistungsfähigkeit schwankt stark von Tag zu Tag. Außerdem geht er kleinschrittig und zittert leicht.", w: "Fluktuierende Kognition, visuelle Halluzinationen und Parkinson-Symptome → Demenz durch Lewy-Körper-Krankheit." },
  { a: "6B66", d: ["6B64", "6B61", "6A20"], t: "Frau Z., 22, fühlt sich seit Monaten immer wieder, als stünde sie neben sich und beobachte sich selbst wie in einem Film. Die Umgebung wirkt unwirklich. Sie weiß dabei, dass dieser Eindruck nicht der Realität entspricht.", w: "Depersonalisation und Derealisation bei erhaltener Realitätsprüfung → Depersonalisations-Derealisationsstörung." },
  { a: "6C51", d: ["6C50", "6A05", "6C72"], t: "Jonas, 16, spielt seit über einem Jahr täglich viele Stunden Onlinespiele. Er schwänzt die Schule, hat Freunde und Sport aufgegeben und reagiert gereizt, wenn die Eltern das Spielen begrenzen. Ums Geld geht es dabei nicht.", w: "Kontrollverlust, Vorrang vor anderen Interessen und Fortsetzung trotz Folgen bei Videospielen → Computerspielstörung." },
  { a: "6B60", d: ["6B61", "6C20", "6B62"], t: "Frau A., 35, hat seit einem Konflikt am Arbeitsplatz Anfälle mit Zuckungen und kurzen Bewusstseinsstörungen. Das EEG zeigt während der Anfälle keine epileptische Aktivität; neurologisch ist sie unauffällig.", w: "Neurologisch wirkende Symptome, die zu keiner neurologischen Erkrankung passen → dissoziative Störung mit neurologischen Symptomen (genauer 6B60.4)." },
  { a: "6A62", d: ["6A61", "6A72", "6D11.5"], t: "Herr B., 33, berichtet, dass seine Stimmung seit Jahren ständig schwankt: Mal ist er tagelang überdreht und kreativ, dann wieder lustlos und niedergeschlagen. Die Kriterien einer hypomanischen oder depressiven Episode waren nie voll erfüllt.", w: "Anhaltende Stimmungsinstabilität über mindestens 2 Jahre ohne volle Episoden → zyklothyme Störung." }
];

const BASICS = [
  ["Was ist die ICD-11?", "Die Internationale Klassifikation der Krankheiten in der 11. Revision der WHO. Sie ist seit 1. Jänner 2022 international in Kraft. Die deutsche Fassung des BfArM ist derzeit eine Testversion; in Österreich und Deutschland wird für Abrechnung und Dokumentation noch die ICD-10 verwendet."],
  ["Kapitel 6", "„Psychische Störungen, Verhaltensstörungen oder neuromentale Entwicklungsstörungen“. Alle Codes beginnen mit 6, danach folgt ein Buchstabe von A bis E, etwa 6A20 Schizophrenie oder 6B00 Generalisierte Angststörung."],
  ["Aufbau eines Codes", "Ein Stammcode hat vier Zeichen, z. B. 6A70. Nach dem Punkt folgen feinere Unterteilungen: 6A70.1 ist eine mittelgradige Episode ohne psychotische Symptome. Die Buchstaben I und O kommen nicht vor, damit sie nicht mit 1 und 0 verwechselt werden."],
  ["Y und Z am Ende", "Endet ein Code auf Y, heißt das „sonstige näher bezeichnete“ (z. B. 6B0Y), endet er auf Z, heißt das „nicht näher bezeichnet“ (z. B. 6B0Z). Auch Stammcodes haben solche Restkategorien, etwa 6A70.Z."],
  ["Postkoordination", "Stammcodes lassen sich mit weiteren Codes kombinieren, um ein Krankheitsbild genauer zu beschreiben, etwa Symptomprofile mit 6A25 oder Verlaufsmerkmale mit 6A80. Codes werden dabei mit „&“ (Zusatzcode) oder „/“ (Cluster aus Stammcodes) verbunden."],
  ["Wichtige Neuerungen", "Komplexe PTBS, anhaltende Trauerstörung, Computerspielstörung, Binge-Eating-Störung, ARFID, zwanghafte sexuelle Verhaltensstörung und Horten sind neu oder eigenständig. Persönlichkeitsstörungen werden nach Schweregrad beschrieben. Geschlechtsinkongruenz wanderte in Kapitel 17, die akute Belastungsreaktion in Kapitel 24."],
  ["Andere Kapitel", "Schlafstörungen stehen in Kapitel 7 (7A…), Tics und Tourette in Kapitel 8 (8A05), sexuelle Funktionsstörungen und Geschlechtsinkongruenz in Kapitel 17 (HA…), Faktoren wie Persönlichkeitsproblematik oder akute Belastungsreaktion in Kapitel 24 (Q…)."],
  ["ICD-10 in dieser App", "Bei jedem Code steht die ICD-10-Entsprechung. „≈“ heißt: keine direkte Entsprechung, nur ungefähr vergleichbar. „Neu“ heißt: In der ICD-10 gab es dafür keinen eigenen Code."],
  ["Quelle", "Codes und Bezeichnungen: ICD-11 MMS, deutsche Testfassung (BfArM/WHO), Release 2026-01. Kurzbeschreibungen, Abgrenzungen und Fälle sind eigene, vereinfachte Lernzusammenfassungen."]
];
