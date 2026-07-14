---
title: "Kako smo ponovno izgradili istraživački SaaS koji koristi 200.000+ akademika"
subtitle: "S PHP-a na MERN stack u 18 mjeseci — arhitektonske odluke, inženjering performansi i strategija migracije bez ijedne sekunde prekida"
image: "paperpile-saas-scaling-case-study"
author: "kerim-alihodza"
description: "Paperpile je bila postojeća istraživačka platforma izrađena na PHP-u koja se nije mogla skalirati u skladu s njihovom putanjom rasta. Redizajnirali smo cijelu arhitekturu u Figmi, ponovno napisali backend u Node.js-u, migrirali bazu podataka na MongoDB i ponovno izgradili frontend u Reactu — uz zadržavanje 100% jednakosti značajki. Rezultat: 200.000+ aktivnih korisnika, 95% ocjene performansi i 3× brže od izvornika."
category: "SaaS / Arhitektura / Web dizajn"
url: https://paperpile.com/
logo: https://alternative.me/media/256/paperpile-icon-kriuk5nzek80umqy-c.png
related_articles: ["nianave-ecommerce-scaling-case-study", "belags-oberflaechenreinigung-arbon-case-study", "imotorbike-ai-lead-qualification", "parcel-daily-conversion-boost"]
slug: "paperpile-saas-scaling-case-study"
published: "2025-12-08"
updated: "2026-05-26"
verified: true
technologies: ["Figma", "MongoDB", "React", "Node.js", "HTML", "JavaScript", "CSS"]
services: ["saas-development", "web-design"]
duration: "18 mjeseci"
stats:
  - value: "200k+"
    label: "aktivnih istraživača širom svijeta"
  - value: "95%"
    label: "Core Web Vitals ocjena performansi"
  - value: "3×"
    label: "brže od izvorne PHP verzije"
  - value: "5★"
    label: "provjerena ocjena klijenta"
faq:
  - question: "Koja je najčešća tehnička pogreška SaaS startupa?"
    answer: "Gradnja za današnji broj korisnika umjesto za sutrašnji razmjer. Tehnički dug nakuplja se brže u proizvodu sa stvarnim korisnicima nego u projektu od nule - svaka arhitektonska prečica postaje problem skaliranja kad promet poraste. Ispravan pristup je definirati ciljani razmjer prije donošenja arhitektonskih odluka."
  - question: "Kako ponovno napisati produkcijsku platformu bez rušenja onoga što radi?"
    answer: "Inkrementalnom migracijom. Mapirate svaku funkciju u postojećem sustavu, pišete ponovno paralelno, testirate prema izvornom ponašanju i migrirate značajke jednu po jednu - ne sve odjednom. Ovaj pristup održava funkcionalnost tijekom cijelog prepisivanja i omogućuje vam validaciju svake komponente prije nego što ode uživo."
---

## Ukratko

Paperpile je imao postojeću PHP istraživačku platformu sa stvarnom bazom korisnika. Arhitektura se nije mogla skalirati do mjesta kamo su trebali stići. Redizajnirali smo cijeli UI sustav u Figmi, ponovno napisali backend s PHP-a na Node.js, migrirali na MongoDB i ponovno izgradili frontend u Reactu, sve dok je proizvod radio uživo. Osamnaest mjeseci kasnije: 200.000+ aktivnih korisnika, **95%** ocjene performansi, 3× poboljšanje brzine, uz 100% jednakosti značajki zadržane tijekom cijelog procesa.

## Situacija

Paperpile je već bio funkcionalan proizvod s aktivnom bazom istraživača i akademika. Platforma je obrađivala upravljanje PDF-ovima, generiranje citata, suradničko uređivanje i integraciju s proširenjem preglednika, tehnički složen skup operacija izgrađen na PHP-u tijekom više godina.

Problem: postojeća arhitektura nije mogla podržati rast korisnika koji su ciljali. Dodavanje značajki postajalo je sporije i skuplje. Performanse su se pogoršavale kako je baza korisnika rasla. Bilo je nužno potpuno arhitektonsko prepisivanje, ali se moralo dogoditi bez rušenja proizvoda o kojem su stvarni korisnici svakodnevno ovisili.

## Izazovi koje smo riješili

### Izazov 1: Dizajn sustava komponenti koji radi na webu, mobitelu i proširenjima

PHP sučelje bilo je funkcionalno, ali nedosljedno. Različite stranice imale su različite obrasce interakcije, mobilno iskustvo bilo je loše i nije postojao zajednički jezik dizajna između web aplikacije, mobilne aplikacije i proširenja preglednika.

Što smo izgradili u Figmi:
- Potpun sustav dizajna sa zajedničkom bibliotekom komponenti (gumbi, obrasci, kartice, modali, obrasci navigacije)
- Specifikacije responzivnog dizajna za svaku komponentu kroz breakpointove
- Stanja interakcije dokumentirana za svaki interaktivni element
- Anotacije pristupačnosti za navigaciju tipkovnicom i kompatibilnost s čitačima zaslona
- Dokumentaciju dizajna koju je inženjerski tim mogao implementirati bez dvosmislenosti

Figma sustav dizajna postao je jedini izvor istine za sve vizualne odluke tijekom cijele 18-mjesečne izrade, osiguravajući dosljednost na svakoj platformi.

### Izazov 2: Arhitektura backenda koji se može skalirati na stotine tisuća korisnika

PHP backend bio je monolitna arhitektura koja nije čisto razdvajala odgovornosti. Dodavanje nove značajke često je zahtijevalo diranje više nepovezanih dijelova sustava. Skaliranje jedne komponente značilo je skaliranje svega.

Arhitektura backenda koju smo izgradili (Node.js + MongoDB):
- RESTful dizajn API-ja s jasno definiranim granicama usluga
- Mikroservisnu strukturu koja omogućuje neovisno skaliranje značajki s velikim prometom (obrada PDF-ova, pretraga citata, sinkronizacija suradnje)
- MongoDB shemu osmišljenu za pohranu istraživačkih dokumenata, dovoljno fleksibilnu za raznolike formate citata i performantnu za obrasce upita koje je proizvod zahtijevao
- Višeslojnu strategiju predmemoriranja koja smanjuje opterećenje baze za često pristupane podatke
- Sigurnosnu arhitekturu koja štiti istraživačke podatke enkripcijom u mirovanju i u prijenosu

Arhitektura frontenda koju smo izgradili (React):
- Strukturu temeljenu na komponentama sa zajedničkom bibliotekom komponenti koja odgovara Figma sustavu dizajna
- Upravljanje stanjem za složene značajke suradnje u stvarnom vremenu
- Client-side rutiranje za glatku navigaciju bez potpunog ponovnog učitavanja stranice
- Code splitting za smanjenje početne veličine bundlea
- Progresivno poboljšanje koje osigurava funkcionalnost kroz verzije preglednika

### Izazov 3: Migracija godina poslovne logike bez gubitka funkcionalnosti

Godine PHP koda sadržavale su logiku proizvoda koja nije bila potpuno dokumentirana. Izravno prepisivanje bez pažljivog mapiranja riskiralo je uvođenje regresija koje bi srušile tijekove rada o kojima su istraživači ovisili.

Naš pristup migraciji:
1. Reviziju značajki: dokumentirali smo svaku funkciju u postojećem PHP kodu s očekivanim ponašanjem ulaza/izlaza
2. Skup testova izgrađen prema postojećem sustavu za definiranje "ispravnog ponašanja" prije diranja bilo kojeg koda
3. Prepisivanje značajku po značajku u Node.js-u, validirano prema skupu testova u svakom koraku
4. Paralelno izvođenje: nove komponente radile su uz stare dok nisu bile validirane
5. Postupan prijelaz: korisnici migrirani u kohortama, s mogućnošću vraćanja u svakoj fazi

Rezultat: 100% jednakosti značajki na dan pokretanja. Nikakvih regresija vidljivih korisnicima tijekom cijelog 18-mjesečnog projekta. Nula prisilnog prekida rada.

### Izazov 4: Inženjering performansi za istraživačku aplikaciju bogatu podacima

Paperpile korisnici rade s tisućama PDF-ova i složenim bazama citata. PHP verzija bila je spora, sa slabim vremenima učitavanja za velike biblioteke i primjetnim kašnjenjem u sesijama suradničkog uređivanja.

Rad na performansama backenda:
- MongoDB indeksiranje optimizirano za specifične obrasce upita dohvaćanja istraživačkih dokumenata
- Asinkronu obradu za analizu PDF-ova i izvlačenje citata, tako da teške operacije rade u pozadini bez blokiranja korisničkog sučelja
- CDN integraciju za statičke resurse, s datotekama posluženim s edge lokacija najbližih korisniku
- Konfiguraciju balansiranja opterećenja za horizontalno skaliranje kako broj korisnika raste

Rad na performansama frontenda:
- Code splitting: JavaScript bundleovi učitavaju samo ono što svaka stranica treba
- Lazy loading za slike, PDF-ove i komponente izvan zaslona
- Optimizaciju bundlea koja smanjuje ukupni JavaScript payload za 60%
- Praćenje Core Web Vitals integrirano u deployment pipeline

**Ishod:** dosljedno **95%** ocjene performansi, pretraga u manje od sekunde kroz milijune dokumenata, suradničko uređivanje bez kašnjenja osvježavanja, 3× brže od izvorne PHP verzije na jednakim operacijama.

## Rezultati

| Metrika | PHP verzija | MERN verzija | Promjena |
|--------|-------------|--------------|--------|
| Aktivni korisnici | Polazište | 200.000+ | Značajan rast |
| Ocjena performansi | Ispod praga | 95% | Vodeće u industriji |
| Brzina pretrage | Sporo | Ispod sekunde | 3× poboljšanje |
| Dodavanje značajki | Sporo, skupo | Brzo, modularno | Arhitektonska prednost |
| Podrška platformi | Samo web | Web + mobitel + proširenja | Prošireno |

## Što je napravilo razliku

Migracija značajku po značajku, ne big-bang prepisivanje. Najčešći način neuspjeha u prepisivanju platformi je pokušaj istovremenog prepisivanja svega i pokretanja odjednom. Svaka komponenta koja se može izolirati i neovisno validirati smanjuje ukupni rizik. Izolirali smo 23 zasebna područja značajki i validirali svako prije nego što smo nastavili.

Performanse ugrađene u arhitekturu, ne prilijepljene naknadno. Optimizacije performansi dodane nakon arhitektonskih odluka imaju ograničen učinak. Granicu postavlja sama arhitektura. Ugradnja predmemoriranja, asinkrone obrade i indeksiranja baze u fazu dizajna, umjesto u fazu optimizacije, značila je da kasnije nije bilo umjetne granice koju treba zaobilaziti.

Sustav dizajna na prvom mjestu. Izgradnja Figma biblioteke komponenti prije pisanja ijedne linije koda značila je da su inženjerske odluke mogle referencirati zajednički vizualni jezik od prvog dana. Nedosljednosti koje se pojave u dizajnu lako je popraviti. Nedosljednosti otkrivene tijekom inženjerskog pregleda su skupe.

[Kontaktirajte nas kako bismo razgovarali o vašim potrebama →](/hr/contact/)
