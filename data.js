// Lerninhalte für ICD11 Compass. Jeder Eintrag: [Code, Bezeichnung, Kernmerkmale, ICD-10-Entsprechung]
// Grundlage: ICD-11 MMS der WHO, Kapitel 6 (plus ausgewählte Codes aus Kapitel 7, 8, 16, 17 und 24).
// Bezeichnungen sind deutsche Arbeitsübersetzungen; maßgeblich ist https://icd.who.int

const GROUPS = {
  "6A0": "Neuronale Entwicklungsstörungen",
  "6A2": "Schizophrenie oder andere primäre psychotische Störungen",
  "6A4": "Katatonie",
  "6A6": "Bipolare oder verwandte Störungen",
  "6A7": "Depressive Störungen",
  "6B0": "Angst- oder furchtbezogene Störungen",
  "6B2": "Zwangsstörungen oder verwandte Störungen",
  "6B4": "Spezifisch belastungsbezogene Störungen",
  "6B6": "Dissoziative Störungen",
  "6B8": "Fütter- oder Essstörungen",
  "6C0": "Ausscheidungsstörungen",
  "6C2": "Störungen der körperlichen Belastung oder des Körpererlebens",
  "6C4": "Störungen durch Substanzgebrauch",
  "6C5": "Störungen durch Verhaltenssüchte",
  "6C7": "Impulskontrollstörungen",
  "6C9": "Disruptives Verhalten oder dissoziale Störungen",
  "6D1": "Persönlichkeitsstörungen und verwandte Merkmale",
  "6D3": "Paraphile Störungen",
  "6D5": "Artifizielle Störungen",
  "6D7": "Neurokognitive Störungen",
  "6D8": "Demenz",
  "6E2": "Psychische Störungen in Schwangerschaft, Geburt und Wochenbett",
  "6E4": "Psychologische Faktoren bei anderen Krankheiten",
  "6E6": "Sekundäre psychische oder Verhaltenssyndrome"
};

const UNITS = [
  { id: "m1", map: true, title: "Landkarte I: 6A bis 6B", desc: "Die großen Blöcke von Entwicklung bis Essstörung",
    items: [
      ["6A0", "Neuronale Entwicklungsstörungen", "Intelligenzentwicklung, Sprache, Autismus, Lernstörungen, Motorik, ADHS"],
      ["6A2", "Schizophrenie oder andere primäre psychotische Störungen", "Schizophrenie, schizoaffektive, schizotype, akute vorübergehende und wahnhafte Störung"],
      ["6A4", "Katatonie", "Katatonie bei anderer psychischer Störung oder durch Substanzen"],
      ["6A6", "Bipolare oder verwandte Störungen", "Bipolar Typ I und II, Zyklothymie"],
      ["6A7", "Depressive Störungen", "Einzelne Episode, rezidivierend, Dysthymie, gemischte Angst und Depression"],
      ["6B0", "Angst- oder furchtbezogene Störungen", "Generalisierte Angst, Panik, Agoraphobie, Phobien, soziale Angst, Trennungsangst, Mutismus"],
      ["6B2", "Zwangsstörungen oder verwandte Störungen", "Zwang, körperdysmorphe Störung, Hypochondrie, Horten, Trichotillomanie"],
      ["6B4", "Spezifisch belastungsbezogene Störungen", "PTBS, komplexe PTBS, anhaltende Trauer, Anpassungsstörung, Bindungsstörungen"],
      ["6B6", "Dissoziative Störungen", "Dissoziative neurologische Symptome, Amnesie, Trance, Identitätsstörung, Depersonalisation"],
      ["6B8", "Fütter- oder Essstörungen", "Anorexie, Bulimie, Binge-Eating, ARFID, Pica, Ruminationsstörung"]
    ] },
  { id: "m2", map: true, title: "Landkarte II: 6C bis 6E", desc: "Von Ausscheidung bis zu sekundären Syndromen",
    items: [
      ["6C0", "Ausscheidungsstörungen", "Enuresis und Enkopresis"],
      ["6C2", "Störungen der körperlichen Belastung oder des Körpererlebens", "Körperliche Belastungsstörung, Körperintegritätsdysphorie"],
      ["6C4", "Störungen durch Substanzgebrauch", "Alkohol, Cannabis, Opioide, Sedativa, Kokain, Stimulanzien, Nikotin und weitere"],
      ["6C5", "Störungen durch Verhaltenssüchte", "Glücksspielstörung, Computerspielstörung"],
      ["6C7", "Impulskontrollstörungen", "Pyromanie, Kleptomanie, zwanghaftes Sexualverhalten, intermittierende explosible Störung"],
      ["6C9", "Disruptives Verhalten oder dissoziale Störungen", "Oppositionelles Trotzverhalten, Störung des Sozialverhaltens"],
      ["6D1", "Persönlichkeitsstörungen und verwandte Merkmale", "Schweregrad (leicht, mittel, schwer) plus prägende Merkmale und Borderline-Muster"],
      ["6D3", "Paraphile Störungen", "Exhibitionistisch, voyeuristisch, pädophil, sexueller Sadismus unter Zwang, frotteuristisch"],
      ["6D5", "Artifizielle Störungen", "Vortäuschen oder Erzeugen von Krankheit bei sich selbst oder bei anderen"],
      ["6D7", "Neurokognitive Störungen", "Delir, leichte neurokognitive Störung, amnestische Störung, Demenzen (6D8)"],
      ["6E2", "Psychische Störungen in Schwangerschaft, Geburt und Wochenbett", "Mit oder ohne psychotische Symptome"],
      ["6E6", "Sekundäre psychische oder Verhaltenssyndrome", "Psychische Syndrome als direkte Folge einer körperlichen Erkrankung"]
    ] },
  { id: "u01", title: "Neuronale Entwicklung", desc: "Intelligenz, Autismus, ADHS und Lernstörungen",
    items: [
      ["6A00", "Störungen der Intelligenzentwicklung", "Deutlich unterdurchschnittliche intellektuelle Funktionen und adaptives Verhalten (etwa 2 Standardabweichungen unter dem Mittel), Beginn in der Entwicklungsperiode.", "F70–F79"],
      ["6A01", "Entwicklungsstörungen des Sprechens oder der Sprache", "Schwierigkeiten beim Verstehen oder Produzieren von Sprache oder Lauten, deutlich unter dem Altersniveau, nicht durch andere Ursachen erklärt.", "F80"],
      ["6A02", "Autismus-Spektrum-Störung", "Anhaltende Defizite in sozialer Kommunikation und Interaktion plus restriktive, repetitive und unflexible Verhaltensmuster, Interessen oder Aktivitäten.", "F84.0"],
      ["6A03", "Entwicklungsbezogene Lernstörung", "Anhaltende, deutliche Schwierigkeiten beim Erlernen schulischer Fertigkeiten wie Lesen, Schreiben oder Rechnen.", "F81"],
      ["6A04", "Entwicklungsbezogene Störung der motorischen Koordination", "Deutliche Verzögerung grob- und feinmotorischer Fertigkeiten, Ungeschicklichkeit und Langsamkeit, die den Alltag einschränken.", "F82"],
      ["6A05", "Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS)", "Anhaltendes Muster von Unaufmerksamkeit und/oder Hyperaktivität-Impulsivität, Beginn vor dem 12. Lebensjahr, in mehreren Lebensbereichen.", "F90"],
      ["6A06", "Stereotype Bewegungsstörung", "Anhaltende, willkürliche, repetitive und scheinbar zwecklose Bewegungen wie Schaukeln oder Kopfschlagen, Beginn in der frühen Entwicklung.", "F98.4"]
    ] },
  { id: "u02", title: "Psychotische Störungen", desc: "Schizophrenie, Wahn und Katatonie",
    items: [
      ["6A20", "Schizophrenie", "Mindestens zwei Kernsymptome (z. B. Wahn, Halluzinationen, Ich-Störungen, formale Denkstörungen, Negativsymptome) über mindestens einen Monat.", "F20"],
      ["6A21", "Schizoaffektive Störung", "Schizophrenie-Kriterien und gleichzeitig eine mittelgradige oder schwere affektive Episode in derselben Krankheitsepisode.", "F25"],
      ["6A22", "Schizotype Störung", "Anhaltende Exzentrizität in Verhalten, Erscheinung und Sprache mit kognitiv-perzeptuellen Verzerrungen, ohne voll ausgeprägte Psychose, über mindestens 2 Jahre.", "F21"],
      ["6A23", "Akute vorübergehende psychotische Störung", "Plötzlicher Beginn psychotischer Symptome innerhalb von 2 Wochen, rasch wechselnd in Art und Intensität, Dauer meist unter 3 Monaten.", "F23"],
      ["6A24", "Wahnhafte Störung", "Anhaltender Wahn über mindestens 3 Monate ohne weitere ausgeprägte psychotische Symptome, Funktionsniveau oft relativ erhalten.", "F22"],
      ["6A25", "Symptomatische Manifestationen primärer psychotischer Störungen", "Zusatzcodes zur Beschreibung von Positiv-, Negativ-, depressiven, manischen, psychomotorischen und kognitiven Symptomen.", ""],
      ["6A40", "Katatonie in Verbindung mit einer anderen psychischen Störung", "Mehrere Symptome wie Stupor, Mutismus, Haltungsstereotypien, Negativismus oder Flexibilitas cerea im Rahmen einer anderen psychischen Störung.", "F20.2"]
    ] },
  { id: "u03", title: "Affektive Störungen", desc: "Bipolar, Depression und Dysthymie",
    items: [
      ["6A60", "Bipolare Störung Typ I", "Mindestens eine manische oder gemischte Episode in der Vorgeschichte.", "F31"],
      ["6A61", "Bipolare Störung Typ II", "Mindestens eine hypomane und mindestens eine depressive Episode, aber nie eine manische oder gemischte Episode.", "F31.8"],
      ["6A62", "Zyklothyme Störung", "Anhaltende Stimmungsinstabilität über mindestens 2 Jahre mit zahlreichen hypomanen und depressiven Phasen, ohne volle Episoden.", "F34.0"],
      ["6A70", "Depressive Störung, einzelne Episode", "Eine depressive Episode (mindestens 2 Wochen gedrückte Stimmung oder Interessenverlust mit weiteren Symptomen) ohne frühere Episoden.", "F32"],
      ["6A71", "Rezidivierende depressive Störung", "Mindestens zwei depressive Episoden, getrennt durch mehrere Monate ohne relevante Stimmungsstörung.", "F33"],
      ["6A72", "Dysthyme Störung", "Anhaltend gedrückte Stimmung an den meisten Tagen über mindestens 2 Jahre, ohne volle Episodenkriterien in den ersten 2 Jahren.", "F34.1"],
      ["6A73", "Gemischte depressive und Angststörung", "Depressive und Angstsymptome an den meisten Tagen über mindestens 2 Wochen, keines erfüllt allein die Kriterien einer eigenen Diagnose.", "F41.2"]
    ] },
  { id: "u04", title: "Angst und Furcht", desc: "Panik, Phobien, Sorgen und Mutismus",
    items: [
      ["6B00", "Generalisierte Angststörung", "Ausgeprägte Angst über mehrere Monate: generelle Besorgnis oder übermäßige Sorgen in vielen Lebensbereichen, dazu Anspannung, Unruhe und Schlafprobleme.", "F41.1"],
      ["6B01", "Panikstörung", "Wiederkehrende, unerwartete Panikattacken mit anhaltender Sorge vor weiteren Attacken oder deutlichem Vermeidungsverhalten.", "F41.0"],
      ["6B02", "Agoraphobie", "Angst vor Situationen, in denen Flucht schwierig oder Hilfe nicht erreichbar wäre, etwa öffentliche Verkehrsmittel, Menschenmengen oder allein außer Haus.", "F40.0"],
      ["6B03", "Spezifische Phobie", "Ausgeprägte, unverhältnismäßige Angst vor bestimmten Objekten oder Situationen wie Tieren, Höhe, Blut oder Spritzen, die gemieden werden.", "F40.2"],
      ["6B04", "Soziale Angststörung", "Ausgeprägte Angst in sozialen Situationen aus Furcht, von anderen negativ bewertet zu werden.", "F40.1"],
      ["6B05", "Trennungsangststörung", "Übermäßige Angst vor der Trennung von Bezugspersonen; in ICD-11 ausdrücklich auch bei Erwachsenen diagnostizierbar.", "F93.0"],
      ["6B06", "Selektiver Mutismus", "Durchgängiges Nicht-Sprechen in bestimmten sozialen Situationen wie der Schule, obwohl in anderen gesprochen wird, über mindestens einen Monat.", "F94.0"]
    ] },
  { id: "u05", title: "Zwang und Verwandtes", desc: "Zwang, Körperbild, Hypochondrie, Horten",
    items: [
      ["6B20", "Zwangsstörung", "Zwangsgedanken und/oder Zwangshandlungen, die viel Zeit kosten (z. B. über eine Stunde täglich) oder deutlich belasten.", "F42"],
      ["6B21", "Körperdysmorphe Störung", "Übermäßige Beschäftigung mit vermeintlichen Makeln des Aussehens, mit wiederholtem Kontrollieren, Vergleichen oder Verbergen.", "F45.2"],
      ["6B22", "Olfaktorische Referenzstörung", "Anhaltende Überzeugung, einen unangenehmen Körpergeruch zu verströmen, den andere bemerken, mit Kontroll- und Vermeidungsverhalten.", "F22.8"],
      ["6B23", "Hypochondrie (Krankheitsangststörung)", "Anhaltende Angst vor oder Beschäftigung mit einer schweren Krankheit, mit wiederholtem Prüfen oder Vermeiden; in ICD-11 bei den Zwangsspektrumsstörungen.", "F45.2"],
      ["6B24", "Pathologisches Horten", "Anhäufen von Gegenständen und große Schwierigkeiten, sie wegzugeben, sodass Wohnräume kaum noch nutzbar sind.", "F63.8"],
      ["6B25.0", "Trichotillomanie", "Wiederholtes Ausreißen der eigenen Haare mit deutlichem Haarverlust und erfolglosen Versuchen aufzuhören.", "F63.3"],
      ["6B25.1", "Dermatillomanie (Skin-Picking-Störung)", "Wiederholtes Kratzen oder Zupfen an der eigenen Haut mit Hautläsionen und erfolglosen Versuchen aufzuhören.", "L98.1"]
    ] },
  { id: "u06", title: "Trauma und Belastung", desc: "PTBS, komplexe PTBS, Trauer, Anpassung",
    items: [
      ["6B40", "Posttraumatische Belastungsstörung (PTBS)", "Nach einem extrem bedrohlichen Ereignis: Wiedererleben im Hier und Jetzt, Vermeidung und anhaltendes Gefühl aktueller Bedrohung über mehrere Wochen.", "F43.1"],
      ["6B41", "Komplexe Posttraumatische Belastungsstörung", "PTBS-Kriterien plus Störungen der Selbstorganisation: Affektregulation, negatives Selbstbild und Beziehungsprobleme, meist nach lang andauernder Traumatisierung.", "F62.0"],
      ["6B42", "Anhaltende Trauerstörung", "Durchdringende Trauerreaktion mit Sehnsucht nach oder Beschäftigung mit der verstorbenen Person, länger als 6 Monate und über kulturelle Normen hinaus. Neu in ICD-11.", ""],
      ["6B43", "Anpassungsstörung", "Fehlangepasste Reaktion auf eine identifizierbare Belastung: Präokkupation mit dem Stressor und Anpassungsprobleme, meist Beginn binnen eines Monats und Abklingen binnen 6 Monaten.", "F43.2"],
      ["6B44", "Reaktive Bindungsstörung", "Stark abnormes Bindungsverhalten in der frühen Kindheit nach grob unzureichender Versorgung; das Kind sucht kaum Trost bei Bezugspersonen.", "F94.1"],
      ["6B45", "Störung der sozialen Bindung mit Enthemmung", "Distanzloses Sozialverhalten gegenüber Fremden nach grob unzureichender Versorgung in der Kindheit.", "F94.2"]
    ] },
  { id: "u07", title: "Dissoziation", desc: "Amnesie, Trance, Identität, Depersonalisation",
    items: [
      ["6B60", "Dissoziative Störung mit neurologischen Symptomen", "Motorische, sensorische oder kognitive Symptome wie Lähmungen oder nichtepileptische Anfälle, die nicht zu einer neurologischen Erkrankung passen.", "F44.4"],
      ["6B61", "Dissoziative Amnesie", "Unfähigkeit, wichtige, meist belastende autobiografische Erinnerungen abzurufen, über normales Vergessen hinaus.", "F44.0"],
      ["6B62", "Trancestörung", "Unfreiwillige Trancezustände mit deutlich verändertem Bewusstsein, ohne dass eine andere Identität übernimmt, außerhalb kultureller oder religiöser Praxis.", "F44.3"],
      ["6B63", "Besessenheitstrance-Störung", "Trancezustände, in denen die gewohnte Identität durch eine äußere, besitzergreifende Identität wie einen Geist oder eine Gottheit ersetzt wird.", "F44.3"],
      ["6B64", "Dissoziative Identitätsstörung", "Mindestens zwei unterschiedliche Persönlichkeitszustände, die wiederholt die Kontrolle übernehmen, typischerweise mit Amnesie-Episoden.", "F44.81"],
      ["6B65", "Partielle dissoziative Identitätsstörung", "Ein dominanter Persönlichkeitszustand; andere Zustände dringen ein, übernehmen aber nicht wiederholt die volle Kontrolle.", ""],
      ["6B66", "Depersonalisations-Derealisations-Störung", "Anhaltende oder wiederkehrende Erfahrungen von Unwirklichkeit gegenüber sich selbst oder der Umwelt, bei erhaltener Realitätsprüfung.", "F48.1"]
    ] },
  { id: "u08", title: "Essen und Ausscheidung", desc: "Anorexie, Bulimie, Binge-Eating, ARFID, Enuresis",
    items: [
      ["6B80", "Anorexia nervosa", "Deutlich niedriges Körpergewicht (bei Erwachsenen BMI unter 18,5), nicht anders erklärbar, mit anhaltendem Verhalten gegen eine Gewichtszunahme.", "F50.0"],
      ["6B81", "Bulimia nervosa", "Wiederkehrende Essanfälle mit Kontrollverlust (mindestens einmal pro Woche über einen Monat) plus kompensatorisches Verhalten, Gewicht nicht deutlich niedrig.", "F50.2"],
      ["6B82", "Binge-Eating-Störung", "Wiederkehrende Essanfälle mit Kontrollverlust ohne regelmäßiges kompensatorisches Verhalten wie Erbrechen.", "F50.8"],
      ["6B83", "Vermeidend-restriktive Ernährungsstörung (ARFID)", "Vermeidung oder Einschränkung der Nahrungsaufnahme, etwa wegen sensorischer Eigenschaften oder Angst vor Folgen, ohne Sorge um Gewicht oder Figur.", "F50.8"],
      ["6B84", "Pica", "Regelmäßiger Verzehr nicht essbarer Substanzen wie Erde, Kreide oder Papier, ab einem Alter, in dem das unterschieden werden kann.", "F98.3"],
      ["6B85", "Ruminations- und Regurgitationsstörung", "Absichtliches, wiederholtes Hochwürgen von Nahrung, die erneut gekaut, geschluckt oder ausgespuckt wird.", "F98.2"],
      ["6C00", "Enuresis", "Wiederholtes Einnässen tagsüber oder nachts ab einem Entwicklungsalter von 5 Jahren.", "F98.0"],
      ["6C01", "Enkopresis", "Wiederholtes Absetzen von Stuhl an unpassenden Stellen ab einem Entwicklungsalter von 4 Jahren.", "F98.1"]
    ] },
  { id: "u09", title: "Körper, Impulse, Verhalten", desc: "Körperliche Belastung, Impulskontrolle, Sozialverhalten",
    items: [
      ["6C20", "Körperliche Belastungsstörung", "Belastende Körpersymptome mit übermäßiger Aufmerksamkeit darauf und wiederholten Arztkontakten; ersetzt weitgehend die Somatisierungsstörung.", "F45.0"],
      ["6C21", "Körperintegritätsdysphorie", "Anhaltender, intensiver Wunsch, körperlich behindert zu sein (etwa durch Amputation einer Extremität), Beginn meist in der frühen Adoleszenz.", "F68.8"],
      ["6C70", "Pyromanie", "Wiederholtes Versagen, Impulse zum Feuerlegen zu kontrollieren, mit Anspannung davor und Befriedigung danach, ohne nachvollziehbares Motiv.", "F63.1"],
      ["6C71", "Kleptomanie", "Wiederholtes Versagen, Impulse zum Stehlen zu kontrollieren, obwohl die Gegenstände weder gebraucht noch wegen ihres Werts genommen werden.", "F63.2"],
      ["6C72", "Zwanghafte Sexualverhaltensstörung", "Anhaltendes Unvermögen, intensive sexuelle Impulse zu kontrollieren, mit repetitivem Sexualverhalten über mindestens 6 Monate und deutlicher Beeinträchtigung.", "F52.7"],
      ["6C73", "Intermittierende explosible Störung", "Wiederholte kurze Ausbrüche verbaler oder körperlicher Aggression, die in keinem Verhältnis zum Anlass stehen.", "F63.8"],
      ["6C90", "Störung mit oppositionellem Trotzverhalten", "Ausgeprägt trotziges, ungehorsames, provokatives oder boshaftes Verhalten über mindestens 6 Monate.", "F91.3"],
      ["6C91", "Störung des Sozialverhaltens mit dissozialem Verhalten", "Wiederholtes Verletzen der Rechte anderer oder altersgemäßer Normen (Aggression, Zerstörung, Betrug, schwere Regelverstöße) über mindestens 12 Monate.", "F91"]
    ] },
  { id: "u10", title: "Substanzen und Sucht", desc: "Alkohol, Drogen, Glücksspiel und Gaming",
    items: [
      ["6C40", "Störungen durch Alkoholkonsum", "Schädlicher Gebrauch, Abhängigkeit, Intoxikation, Entzug und alkoholinduzierte Störungen.", "F10"],
      ["6C41", "Störungen durch Cannabiskonsum", "Schädlicher Gebrauch, Abhängigkeit, Intoxikation, Entzug und cannabisinduzierte Störungen.", "F12"],
      ["6C43", "Störungen durch Opioidkonsum", "Schädlicher Gebrauch, Abhängigkeit, Intoxikation und Entzug bei Opioiden wie Heroin oder Schmerzmitteln.", "F11"],
      ["6C44", "Störungen durch Sedativa, Hypnotika oder Anxiolytika", "Z. B. Benzodiazepine und Z-Substanzen: schädlicher Gebrauch, Abhängigkeit, Intoxikation, Entzug.", "F13"],
      ["6C45", "Störungen durch Kokainkonsum", "Schädlicher Gebrauch, Abhängigkeit, Intoxikation und Entzug bei Kokain.", "F14"],
      ["6C46", "Störungen durch Stimulanzien einschließlich Amphetaminen", "Amphetamine, Methamphetamin und Methcathinon: schädlicher Gebrauch, Abhängigkeit, Intoxikation, Entzug.", "F15"],
      ["6C4A", "Störungen durch Nikotinkonsum", "Schädlicher Gebrauch, Abhängigkeit, Intoxikation und Entzug bei Nikotin.", "F17"],
      ["6C50", "Glücksspielstörung", "Anhaltendes Glücksspielverhalten mit Kontrollverlust, zunehmender Priorität und Fortsetzung trotz negativer Folgen, meist über mindestens 12 Monate.", "F63.0"],
      ["6C51", "Computerspielstörung", "Anhaltendes Spielverhalten (online oder offline) mit Kontrollverlust, zunehmender Priorität und Fortsetzung trotz negativer Folgen. Neu in ICD-11.", ""]
    ] },
  { id: "u11", title: "Persönlichkeit", desc: "Schweregrad, Merkmale und Borderline-Muster",
    items: [
      ["6D10", "Persönlichkeitsstörung", "Anhaltende Probleme im Selbstfunktionieren (Identität, Selbstwert, Selbststeuerung) und/oder in Beziehungen über mindestens 2 Jahre; Schweregrad statt Typen.", "F60"],
      ["6D10.0", "Leichte Persönlichkeitsstörung", "Einschränkungen betreffen nur einige Bereiche des Funktionierens; viele Beziehungen und Rollen bleiben erhalten; meist keine erhebliche Selbst- oder Fremdgefährdung.", ""],
      ["6D10.1", "Mittelgradige Persönlichkeitsstörung", "Mehrere Bereiche des Funktionierens sind deutlich beeinträchtigt; die meisten Beziehungen sind konflikthaft.", ""],
      ["6D10.2", "Schwere Persönlichkeitsstörung", "Schwere Beeinträchtigung im Selbstfunktionieren und in praktisch allen Beziehungen, oft mit Selbst- oder Fremdgefährdung.", ""],
      ["QE50.7", "Persönlichkeitsschwierigkeit", "Ausgeprägte Persönlichkeitsauffälligkeiten unterhalb der Störungsschwelle; Kapitel 24 (Faktoren, die den Gesundheitszustand beeinflussen).", ""],
      ["6D11.0", "Negative Affektivität", "Neigung zu vielfältigen negativen Emotionen wie Angst, Ärger, Scham oder Traurigkeit in unangemessener Häufigkeit und Intensität.", ""],
      ["6D11.1", "Distanziertheit", "Soziale Distanz (Meiden von Kontakten, wenige Freundschaften) und emotionale Distanz (Zurückhaltung, wenig Ausdruck).", ""],
      ["6D11.2", "Dissozialität", "Missachtung der Rechte und Gefühle anderer, Egozentrik und fehlende Empathie.", ""],
      ["6D11.3", "Enthemmung", "Impulsives Handeln auf unmittelbare Reize hin, ohne Rücksicht auf mögliche negative Folgen.", ""],
      ["6D11.4", "Anankasmus", "Enger Fokus auf eigene starre Standards von Perfektion und Richtig und Falsch sowie auf Kontrolle des eigenen Verhaltens und der Umgebung.", ""],
      ["6D11.5", "Borderline-Muster", "Durchgängige Instabilität in Beziehungen, Selbstbild und Affekten sowie ausgeprägte Impulsivität, oft mit Selbstverletzung.", "F60.3"]
    ] },
  { id: "u12", title: "Paraphilien, Artifizielles, Perinatales", desc: "Sexuelle Präferenzen, Vortäuschen, Wochenbett",
    items: [
      ["6D30", "Exhibitionistische Störung", "Anhaltendes, intensives Muster sexueller Erregung durch das Entblößen der Genitalien vor ahnungslosen Personen, mit entsprechendem Handeln oder deutlichem Leidensdruck.", "F65.2"],
      ["6D31", "Voyeuristische Störung", "Anhaltendes, intensives Muster sexueller Erregung durch das heimliche Beobachten nichtsahnender Personen beim Entkleiden, nackt oder bei sexuellen Handlungen.", "F65.3"],
      ["6D32", "Pädophile Störung", "Anhaltendes, intensives Muster sexueller Erregung durch vorpubertäre Kinder, mit entsprechendem Handeln oder deutlichem Leidensdruck.", "F65.4"],
      ["6D33", "Störung mit sexuellem Sadismus unter Zwang", "Anhaltendes, intensives Muster sexueller Erregung durch das Zufügen von Leid an einer nicht einwilligenden Person.", "F65.5"],
      ["6D34", "Frotteuristische Störung", "Anhaltendes, intensives Muster sexueller Erregung durch Berühren oder Reiben an nicht einwilligenden Personen, meist in Menschenmengen.", "F65.8"],
      ["6D50", "Artifizielle Störung, selbstbezogen", "Vortäuschen, Verfälschen oder absichtliches Herbeiführen von Krankheitszeichen bei sich selbst, ohne offensichtlichen äußeren Vorteil.", "F68.1"],
      ["6D51", "Artifizielle Störung, fremdbezogen", "Vortäuschen oder Herbeiführen von Krankheitszeichen bei einer anderen Person, meist einem abhängigen Kind.", ""],
      ["6E20", "Psychische Störung in Schwangerschaft, Geburt oder Wochenbett, ohne psychotische Symptome", "Beginn meist innerhalb von etwa 6 Wochen nach der Entbindung, z. B. postpartale Depression ohne Wahn oder Halluzinationen.", "F53.0"],
      ["6E21", "Psychische Störung in Schwangerschaft, Geburt oder Wochenbett, mit psychotischen Symptomen", "Beginn meist innerhalb von etwa 6 Wochen nach der Entbindung, mit Wahn, Halluzinationen oder anderen psychotischen Symptomen.", "F53.1"],
      ["6E40", "Psychologische Faktoren oder Verhaltensfaktoren mit Einfluss auf andernorts klassifizierte Krankheiten", "Psychische Symptome oder Verhaltensweisen, die den Verlauf einer körperlichen Erkrankung ungünstig beeinflussen.", "F54"]
    ] },
  { id: "u13", title: "Neurokognition und Sekundäres", desc: "Delir, Demenzen und sekundäre Syndrome",
    items: [
      ["6D70", "Delir", "Akut einsetzende, fluktuierende Störung von Aufmerksamkeit, Orientierung und Bewusstsein, meist durch körperliche Ursache, Substanz oder Entzug.", "F05"],
      ["6D71", "Leichte neurokognitive Störung", "Subjektiver und objektiver kognitiver Abbau gegenüber dem früheren Niveau, ohne wesentliche Einschränkung der Selbstständigkeit im Alltag.", "F06.7"],
      ["6D72", "Amnestische Störung", "Ausgeprägte Gedächtnisstörung bei sonst weitgehend erhaltenen kognitiven Funktionen.", "F04"],
      ["6D80", "Demenz bei Alzheimer-Krankheit", "Schleichender Beginn, meist mit Gedächtnisstörungen, langsam fortschreitend.", "F00"],
      ["6D81", "Demenz durch zerebrovaskuläre Erkrankung", "Kognitiver Abbau durch Hirngefäßerkrankung oder Schlaganfälle, oft stufenweiser Verlauf.", "F01"],
      ["6D82", "Demenz bei Lewy-Körper-Krankheit", "Fluktuierende Kognition, wiederkehrende visuelle Halluzinationen und Parkinson-Symptome.", "F02.8"],
      ["6D83", "Frontotemporale Demenz", "Früh ausgeprägte Veränderungen von Persönlichkeit, Verhalten oder Sprache, Gedächtnis anfangs relativ erhalten.", "F02.0"],
      ["6E61", "Sekundäres psychotisches Syndrom", "Psychotische Symptome als direkte Folge einer körperlichen Erkrankung, z. B. bei Epilepsie oder Autoimmunerkrankung.", "F06.2"],
      ["6E62", "Sekundäres affektives Syndrom", "Depressive oder manische Symptome als direkte Folge einer körperlichen Erkrankung, z. B. Hypothyreose.", "F06.3"],
      ["6E63", "Sekundäres Angstsyndrom", "Angstsymptome als direkte Folge einer körperlichen Erkrankung, z. B. Hyperthyreose.", "F06.4"],
      ["6E68", "Sekundäre Persönlichkeitsveränderung", "Anhaltende Persönlichkeitsveränderung als direkte Folge einer körperlichen Erkrankung, z. B. nach Hirnverletzung.", "F07.0"]
    ] },
  { id: "u14", title: "Jenseits von Kapitel 6", desc: "Schlaf, Tics, Geschlecht und Belastungsreaktion",
    items: [
      ["7A00", "Chronische Insomnie", "Ein- oder Durchschlafstörung mindestens dreimal pro Woche über mindestens 3 Monate mit Beeinträchtigung am Tag. Kapitel 7: Schlaf-Wach-Störungen.", "F51.0"],
      ["7A01", "Kurzzeitige Insomnie", "Ein- oder Durchschlafstörung mit Beeinträchtigung am Tag, kürzer als 3 Monate. Kapitel 7: Schlaf-Wach-Störungen.", "F51.0"],
      ["8A05.00", "Tourette-Syndrom", "Multiple motorische Tics und mindestens ein vokaler Tic über mindestens ein Jahr, Beginn in der Entwicklungsperiode. Kapitel 8: Nervensystem.", "F95.2"],
      ["HA60", "Geschlechtsinkongruenz in der Adoleszenz oder im Erwachsenenalter", "Ausgeprägte, anhaltende Inkongruenz zwischen erlebtem und zugewiesenem Geschlecht. Keine psychische Störung mehr, sondern Kapitel 17: sexuelle Gesundheit.", "F64.0"],
      ["HA61", "Geschlechtsinkongruenz in der Kindheit", "Ausgeprägte Inkongruenz zwischen erlebtem und zugewiesenem Geschlecht bei Kindern vor der Pubertät, über etwa 2 Jahre. Kapitel 17: sexuelle Gesundheit.", "F64.2"],
      ["QE84", "Akute Belastungsreaktion", "Vorübergehende, normale Reaktion auf ein extremes Ereignis, klingt meist binnen Tagen ab. In ICD-11 keine psychische Störung mehr, sondern Kapitel 24.", "F43.0"],
      ["GA34.41", "Prämenstruelle dysphorische Störung", "Affektive, körperliche oder kognitive Symptome in der Woche vor der Menstruation, die danach abklingen. Kapitel 16, in Kapitel 6 querverwiesen.", "N94.3"]
    ] },
  { id: "f1", fine: true, title: "Feinkodes I: Depression und ADHS", desc: "Schweregrade, psychotische Symptome, Präsentationen",
    items: [
      ["6A70.0", "Depressive Störung, einzelne Episode, leicht", "Einzelne depressive Episode, leichter Schweregrad, keine psychotischen Symptome.", "F32.0"],
      ["6A70.1", "Depressive Störung, einzelne Episode, mittelgradig, ohne psychotische Symptome", "Einzelne depressive Episode, mittelgradig, ohne Wahn oder Halluzinationen.", "F32.1"],
      ["6A70.2", "Depressive Störung, einzelne Episode, mittelgradig, mit psychotischen Symptomen", "Einzelne depressive Episode, mittelgradig, mit Wahn oder Halluzinationen. Diese Kombination gab es in ICD-10 nicht.", ""],
      ["6A70.3", "Depressive Störung, einzelne Episode, schwer, ohne psychotische Symptome", "Einzelne depressive Episode, schwer, ohne Wahn oder Halluzinationen.", "F32.2"],
      ["6A70.4", "Depressive Störung, einzelne Episode, schwer, mit psychotischen Symptomen", "Einzelne depressive Episode, schwer, mit Wahn oder Halluzinationen.", "F32.3"],
      ["6A05.0", "ADHS, vorwiegend unaufmerksame Präsentation", "Unaufmerksamkeit steht klar im Vordergrund, Hyperaktivität-Impulsivität ist nicht klinisch bedeutsam.", "F98.80"],
      ["6A05.1", "ADHS, vorwiegend hyperaktiv-impulsive Präsentation", "Hyperaktivität-Impulsivität steht klar im Vordergrund, Unaufmerksamkeit ist nicht klinisch bedeutsam.", "F90.1"],
      ["6A05.2", "ADHS, kombinierte Präsentation", "Sowohl Unaufmerksamkeit als auch Hyperaktivität-Impulsivität sind klinisch bedeutsam.", "F90.0"]
    ] },
  { id: "f2", fine: true, title: "Feinkodes II: Psychose, Essen, Alkohol", desc: "Verläufe, Gewichtsstufen, Konsummuster",
    items: [
      ["6A20.0", "Schizophrenie, Erstmanifestation", "Erste Episode einer Schizophrenie.", ""],
      ["6A20.1", "Schizophrenie, mehrfache Episoden", "Mindestens zwei Episoden mit dazwischenliegender Remission.", ""],
      ["6A20.2", "Schizophrenie, kontinuierlich", "Symptome bestehen über den größten Teil des Verlaufs ohne deutliche Remission.", ""],
      ["6B80.0", "Anorexia nervosa mit deutlich niedrigem Körpergewicht", "BMI bei Erwachsenen zwischen 14,0 und 18,5.", "F50.0"],
      ["6B80.1", "Anorexia nervosa mit gefährlich niedrigem Körpergewicht", "BMI bei Erwachsenen unter 14,0, mit erhöhtem medizinischem Risiko.", "F50.0"],
      ["6C40.1", "Schädliches Muster des Alkoholkonsums", "Wiederholter oder anhaltender Konsum, der der körperlichen oder psychischen Gesundheit oder anderen Personen geschadet hat.", "F10.1"],
      ["6C40.2", "Alkoholabhängigkeit", "Gestörte Kontrolle über den Konsum, zunehmende Priorität des Trinkens und körperliche Merkmale wie Toleranz oder Entzug.", "F10.2"],
      ["6C40.3", "Alkoholintoxikation", "Vorübergehende, klinisch bedeutsame Störung von Bewusstsein, Kognition, Wahrnehmung, Affekt oder Verhalten durch Alkohol.", "F10.0"],
      ["6C40.4", "Alkoholentzug", "Symptome wie Zittern, Schwitzen, Unruhe oder Schlafstörung nach Reduktion oder Beenden eines anhaltenden Konsums.", "F10.3"],
      ["QE10", "Riskanter Alkoholkonsum", "Konsummuster, das das Risiko schädlicher Folgen deutlich erhöht, ohne dass bereits ein Schaden eingetreten ist. Kapitel 24.", ""]
    ] }
];

const BASICS = [
  ["Was ist die ICD-11?", "Die Internationale Klassifikation der Krankheiten in der 11. Revision der WHO. Sie ist seit 1. Jänner 2022 international in Kraft. Im deutschsprachigen Raum wird für Abrechnung und Dokumentation derzeit vielfach noch die ICD-10 verwendet; die Umstellung läuft schrittweise."],
  ["Kapitel 6", "„Psychische Störungen, Verhaltensstörungen oder neuronale Entwicklungsstörungen“. Alle Codes beginnen mit 6, danach folgt ein Buchstabe von A bis E, etwa 6A20 Schizophrenie oder 6B00 Generalisierte Angststörung."],
  ["Aufbau eines Codes", "Ein Stammcode hat vier Zeichen, z. B. 6A70. Nach dem Punkt folgen feinere Unterteilungen: 6A70.1 ist eine mittelgradige Episode. Die Buchstaben I und O kommen nicht vor, damit sie nicht mit 1 und 0 verwechselt werden."],
  ["Y und Z am Ende", "Endet ein Code auf Y, heißt das „sonstige näher bezeichnete“ (z. B. 6B0Y), endet er auf Z, heißt das „nicht näher bezeichnet“ (z. B. 6B0Z)."],
  ["Postkoordination", "Stammcodes lassen sich mit weiteren Codes kombinieren, um ein Krankheitsbild genauer zu beschreiben, etwa Symptomprofile mit 6A25. Codes werden dabei mit „&“ (Zusatzcode) oder „/“ (Cluster aus Stammcodes) verbunden."],
  ["Wichtige Neuerungen", "Komplexe PTBS, anhaltende Trauerstörung, Computerspielstörung, Binge-Eating-Störung, ARFID, zwanghafte Sexualverhaltensstörung und Horten sind neu oder eigenständig. Persönlichkeitsstörungen werden dimensional nach Schweregrad beschrieben. Geschlechtsinkongruenz wanderte in Kapitel 17, die akute Belastungsreaktion in Kapitel 24."],
  ["Andere Kapitel", "Schlafstörungen stehen in Kapitel 7 (7A…), Tics und Tourette in Kapitel 8 (8A05), sexuelle Funktionsstörungen und Geschlechtsinkongruenz in Kapitel 17 (HA…), Faktoren wie Persönlichkeitsschwierigkeit oder akute Belastungsreaktion in Kapitel 24 (Q…)."]
];
