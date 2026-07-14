---
title: "Kako smo automatizirali posao od 50.000 €/mjesečno i uštedjeli im 280 sati/mjesečno"
subtitle: "Zamjena pakla ručnih tablica prilagođenom automatizacijom koja se isplati za 90 dana"
image: "prepme-automation-saas"
author: "kerim-alihodza"
description: "Razvoj alata za automatizaciju koji štedi 4 sata ručnog rada dnevno. Izrađeno s Astrom, Reactom, Node.js-om i prilagođenim tijekovima automatizacije."
related_articles: ["careconnect-recruitment-automation", "fitovision-gym-saas", "nianave-ecommerce-scaling-case-study", "paperpile-saas-scaling-case-study"]
category: "AI / CRM / Automatizacija"
url: https://prepme.hr/
logo: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKZIuKAGcnX3W8iVhgorLLMUlbHLSIWy_Eg&s
slug: "prepme-automation-saas"
published: "2025-12-22"
updated: "2025-12-22"
verified: true
technologies: ["Astro", "React", "Node.js"]
services: ["automation", "saas-development"]
duration: "3 mjeseca"
faq:
  - question: "Kako znam je li moje poslovanje spremno za automatizaciju?"
    answer: "Ako imate repetitivne zadatke koji traju 10+ sati tjedno, gubite novac time što ne automatizirate. Naša [usluga automatizacije](/services/automation/) prepoznaje prilike s velikim učinkom."
  - question: "Možete li se integrirati s postojećim sustavima poput Shopifyja?"
    answer: "Specijalizirani smo za izgradnju prilagođenih mostova između platformi - nema više ručnog prijenosa podataka. Ovo je dio naših usluga [automatizacije](/services/automation/) i [razvoja SaaS-a](/services/saas-development/)."
---

## Ukratko

PrepMe je bio zatrpan ručnom obradom narudžbi: tablice, CSV datoteke i generiranje dokumenata koji su trošili 300+ sati mjesečno. Izgradili smo prilagođenu platformu za automatizaciju koristeći Astro, React i Node.js koja je automatizirala cijeli njihov tijek rada. Rezultat: **80% manje vremena**, 280.000 $ godišnje uštede i poslovanje koje se skalira bez dodavanja osoblja.

## Misija

PrepMe je trebao alat za automatizaciju koji bi uštedio 4 sata ručnog rada dnevno. Njihov proces uključivao je raščlanjivanje velikih Excel datoteka, kombiniranje pretplata s novim narudžbama, izradu tablica za pregled i generiranje prilagođenih formata dostave, sve ručno.

## Izazovi koje smo riješili

### Izazov 1: Raščlanjivanje velikih Excel datoteka

PrepMe je primao velike Excel datoteke (često 10.000+ redaka) s podacima o narudžbama, informacijama o pretplatama i detaljima o kupcima. Ručno raščlanjivanje bilo je podložno pogreškama i trošilo 2 do 3 sata dnevno.

Izgradili smo automatizirani sustav za raščlanjivanje Excela koristeći Node.js:
- Automatiziranu obradu datoteka koja otkriva i uvozi nove Excel datoteke
- Izvlačenje podataka koje raščlanjuje složene Excel strukture s više listova
- Obradu grešaka koja prepoznaje i označava nedosljednosti podataka
- Validaciju koja osigurava kvalitetu podataka prije obrade
- Sustav bilježenja koji prati sve obrađene datoteke i greške

Automatizirani sustav raščlanjivanja smanjio je vrijeme obrade s 2 do 3 sata na 5 minuta, eliminirajući ljudsku pogrešku. Ovo je dio mogućnosti naše usluge [automatizacije](/services/automation/).

### Izazov 2: Kombiniranje pretplata s novim narudžbama

PrepMe je trebao spojiti podatke o pretplatama s novim jednokratnim narudžbama, stvarajući ujedinjeni prikaz za obradu. Ručno kombiniranje bilo je vremenski zahtjevno i sklono pogreškama.

Izgradili smo inteligentni sustav za spajanje podataka:
- Usklađivanje pretplata koje automatski povezuje pretplate s korisničkim računima
- Konsolidaciju narudžbi koja kombinira jednokratne i ponavljajuće narudžbe
- Rješavanje sukoba za slučajeve kad se pretplate i narudžbe preklapaju
- Deduplikaciju koja sprječava duple unose
- Revizijski trag koji prati sva spajanja radi transparentnosti

Automatizirani sustav spajanja, izgrađen s našom ekspertizom [automatizacije](/services/automation/), eliminirao je ručno kombiniranje podataka i smanjio greške za 98%.

### Izazov 3: Izrada tablice za pregled sa svim spojenim narudžbama

Nakon spajanja pretplata i narudžbi, PrepMe je trebao sveobuhvatnu tablicu za pregled koja prikazuje sve obrađene stavke, kako bi osoblje moglo provjeriti točnost prije konačne obrade.

Izgradili smo interaktivnu nadzornu ploču za pregled koristeći React:
- Prikaz podataka u stvarnom vremenu koji prikazuje sve spojene narudžbe u pretraživoj tablici
- Filtriranje i sortiranje koje osoblju pomaže brzo pronaći određene narudžbe
- Vizualne pokazatelje koji ističu potencijalne probleme ili sukobe
- Skupne akcije koje omogućuju odobravanje ili odbijanje više narudžbi
- Funkciju izvoza koja generira izvještaje za vođenje evidencije

Tablica za pregled, dio našeg pristupa [razvoja SaaS-a](/services/saas-development/), smanjila je vrijeme pregleda s 1 sata na 10 minuta uz poboljšanje točnosti.

### Izazov 4: Raščlanjivanje u prilagođeni format za dostavu

PrepMe je trebao transformirati podatke spojenih narudžbi u specifičan format koji je zahtijevao njihov sustav dostave. Ručno formatiranje bilo je zamorno i sklono pogreškama.

Izgradili smo automatiziranu konverziju formata:
- Sustav predložaka koji definira prilagođene izlazne formate
- Transformaciju podataka koja pretvara spojene podatke u traženu strukturu
- Validaciju formata koja osigurava da izlaz zadovoljava zahtjeve sustava dostave
- Skupnu obradu koja obrađuje više narudžbi istovremeno
- Izvještavanje o greškama koje označava sve probleme konverzije

Automatizirano formatiranje, koje slijedi našu metodologiju [automatizacije](/services/automation/), eliminiralo je ručni unos podataka i osiguralo 100% usklađenost formata.

### Izazov 5: Prilagođene Excel funkcionalnosti za izračune

PrepMe je trebao složene izračune (cijene, popusti, troškovi dostave, porezi) koji su se prije radili ručno u Excelu, trošeći sate i bili podložni pogreškama.

Izgradili smo motor za izračune:
- Pravila cijena koja automatiziraju izračune cijena na temelju proizvoda, količine i tipa kupca
- Primjenu popusta koja primjenjuje promotivne kodove i količinske popuste
- Izračun dostave koji određuje troškove na temelju težine, odredišta i razine usluge
- Izračun poreza koji računa poreze na temelju lokacije i tipa proizvoda
- Generiranje ukupnog iznosa koje proizvodi konačne iznose s raščlambama

Motor za izračune, izgrađen s našim mogućnostima [automatizacije](/services/automation/), eliminirao je ručne izračune i smanjio greške na nulu.

## Tehnička implementacija

PrepMe-ovu platformu za automatizaciju izgradili smo koristeći:

- Frontend: Astro i React za korisničko sučelje
- Backend: Node.js za tijekove automatizacije i obradu podataka
- Obrada datoteka: prilagođene biblioteke za raščlanjivanje i generiranje Excela
- Arhitektura: modularni sustav koji omogućuje jednostavno proširenje

Ovaj pristup, koji slijedi naše metodologije [automatizacije](/services/automation/) i [razvoja SaaS-a](/services/saas-development/), osigurava da sustav može rasti s PrepMe-ovim potrebama.

## Rezultati

- **80% manje** vremena ručne obrade (s 300 na 60 sati mjesečno)
- **280.000 $ godišnje uštede** na troškovima rada
- Nula grešaka u obradi narudžbi (u odnosu na 5% stope grešaka prije)
- 4 sata uštede dnevno kako je izvorno traženo
- Skalabilan temelj za 10x rast bez dodavanja osoblja
- **Provjereno 5 zvjezdica** zadovoljstvo klijenta

## Povezane usluge

Ovaj projekt kombinirao je više usluga koje nudimo:

- [Usluga automatizacije](/services/automation/) - prilagođeni tijekovi rada koji uklanjaju ručni rad
- [Razvoj SaaS-a](/services/saas-development/) - skalabilna platforma za automatizaciju
