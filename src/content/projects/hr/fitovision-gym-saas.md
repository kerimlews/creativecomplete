---
title: "Kako smo izradili Fitovision: All-in-one platformu za teretane koja je ubila 7 zasebnih alata"
subtitle: "Od kontrole pristupa u oblaku do ujedinjenog SaaS carstva — tehnički nacrt"
image: "fitovision-gym-saas"
author: "kerim-alihodza"
description: "Novi brend na hrvatskom tržištu s misijom da vlasnicima teretana pomogne uspostaviti digitalnu prisutnost i preuzeti kontrolu. Izrađeno s MERN stackom, AWS-om, React Nativeom i Node.js-om."
category: "Mobile / Web / SEO / Marketing"
url: https://fitovision.com/
logo: https://fitovision.com/uploads/files/5d879733b6b9cdd48a20aec8a096bc49.png
related_articles: ["paperpile-saas-scaling-case-study", "prepme-automation-saas", "careconnect-recruitment-automation", "nianave-ecommerce-scaling-case-study", "belags-oberflaechenreinigung-arbon-case-study"]
slug: "fitovision-gym-saas"
published: "2025-12-29"
updated: "2025-12-29"
verified: true
technologies: ["Node.js", "MongoDB", "React", "AWS", "Figma", "React Native"]
services: ["web-design", "automation", "seo", "saas-development", "mobile-development"]
duration: "18 mjeseci"
faq:
  - question: "Zašto je prilagođena SaaS platforma bolja od krpanja gotovih alata?"
    answer: "Gotovi alati stvaraju fragmentiran, skup tehnološki stack. Prilagođena platforma poput Fitovisiona je ujedinjen sustav izgrađen našim pristupom [razvoja SaaS-a](/services/saas-development/), koji uklanja neučinkovitost i stvara besprijekorno iskustvo za članove."
  - question: "Koliko je pouzdana kontrola fizičkog pristupa u oblaku?"
    answer: "Projektirali smo je za 99,99% dostupnosti koristeći AWS infrastrukturu. Premještanjem našeg temeljnog WDMS-a na AWS i uspostavom sigurne, trajne veze s kontrolerom pristupa na lokaciji, postigli smo sustav pouzdaniji od tradicionalnog, izoliranog hardvera."
---

## Ukratko

Vlasnici teretana radili su na stogu od 7+ nepovezanih alata: Mindbody za raspored, zasebne privjeske za vrata, Stripe za plaćanja, Mailchimp za email i još toga. Izgradili smo Fitovision da ih sve zamijeni. To je cloud-native platforma pokretana MERN stackom (MongoDB, Express.js, React, Node.js) na AWS-u, s React Native mobilnom aplikacijom koja služi kao ključ, novčanik i osobna iskaznica člana. Rezultat: **95% automatizacije** rada teretane, jedna pretplata umjesto sedam i bolja retencija članova jer je iskustvo bez trenja.

## Misija

Fitovision je ušao na hrvatsko tržište kako bi vlasnicima teretana pomogao uspostaviti digitalnu prisutnost i preuzeti kontrolu nad poslovanjem. Cilj je bio zamijeniti kaotičan ekosustav više alata jednom ujedinjenom platformom.

## Izazovi koje smo riješili

### Izazov 1: Dizajn logotipa i vizualnog identiteta

Fitovision je trebao vizualni identitet koji prenosi inovaciju, fitness i tehnologiju. Logotip je morao raditi na webu, mobilnim aplikacijama i fizičkim uređajima za pristup.

Dizajnirali smo cjelovit sustav brenda koristeći Figmu:
- Modernu, tehnološki naprednu estetiku koja privlači vlasnike teretana i članove
- Skalabilan sustav logotipa koji radi od ikona aplikacija do velikih natpisa
- Paletu boja inspiriranu fitnessom (energična, motivirajuća, profesionalna)
- Tipografski sustav koji osigurava čitljivost na svim platformama
- Smjernice brenda za dosljednu primjenu na svim dodirnim točkama

Vizualni identitet pozicionirao je Fitovision kao moderno, tehnološki potkovano rješenje za upravljanje teretanama.

### Izazov 2: SEO arhitektura web stranice

Kao novi brend na hrvatskom tržištu, Fitovision se trebao plasirati za konkurentne ključne riječi softvera za upravljanje teretanama. Bez ispravnog SEO-a bili bi nevidljivi vlasnicima teretana koji traže rješenja.

Izgradili smo SEO-first arhitekturu:
- Strategiju ključnih riječi koja cilja "softver za upravljanje teretanom Hrvatska", "softver za fitness studio" i srodne pojmove
- Tehničku SEO optimizaciju koja osigurava brzo učitavanje i responzivnost na mobitelu
- Strategiju sadržaja koja stvara vrijedne resurse za vlasnike teretana
- Lokalnu SEO optimizaciju za ciljanje hrvatskog tržišta
- Interno povezivanje koje spaja stranice usluga i sadržaj bloga

Ova SEO arhitektura, koja slijedi metodologiju naše [SEO usluge](/services/seo/), pomogla je Fitovisionu da se plasira na hrvatskom fitness tržištu.

### Izazov 3: Dizajn web stranice

Web stranica je trebala objasniti složenu SaaS platformu jednostavnim riječima, pretvoriti vlasnike teretana u probne korisnike i izgraditi povjerenje u novi brend.

Dizajnirali smo web stranicu fokusiranu na konverzije koristeći React:
- Jasne vrijednosne prijedloge koji pokazuju kako Fitovision zamjenjuje 7+ alata
- Interaktivne demonstracije koje vlasnicima teretana pokazuju platformu na djelu
- Društveni dokaz (svjedočanstva, case studyji, broj korisnika)
- Transparentnost cijena koja gradi povjerenje kroz jasne pretplatničke razine
- Responzivni dizajn koji osigurava dosljedno iskustvo na svim uređajima

Dizajn web stranice, koji slijedi naša načela [web dizajna](/services/web-design/), postigao je stopu konverzije od 12% iz posjetitelja u probnu prijavu.

### Izazov 4: Multi-tenant arhitektura na backendu

Fitovision je trebao posluživati više teretana (tenanata) s jedne platforme, uz potpunu izolaciju podataka među teretanama dok učinkovito dijeli infrastrukturu.

Projektirali smo robustan multi-tenant sustav koristeći Node.js i MongoDB:
- Izolaciju tenanata koja osigurava potpuno odvajanje podataka među teretanama
- Zajedničku infrastrukturu koja smanjuje troškove uz očuvanje sigurnosti
- Skalabilan dizajn baze podataka koristeći fleksibilnu shemu MongoDB-a
- Alokaciju resursa koja sprječava da jedan tenant utječe na druge
- Sustav naplate koji prati potrošnju po tenantu za točno fakturiranje

Multi-tenant arhitektura, izgrađena s našom ekspertizom [razvoja SaaS-a](/services/saas-development/), omogućuje Fitovisionu skaliranje na tisuće teretana bez pada performansi.

### Izazov 5: WDMS — daljinsko upravljanje uređajima (SMART teretana)

Tehnički najsloženiji izazov bila je potpuna daljinska kontrola fizičkog pristupa teretani. Ne samo digitalna članska iskaznica, nego mogućnost otvaranja vrata s bilo kojeg mjesta na svijetu.

Projektirali smo Workout & Door Management System (WDMS) u oblaku:
- Cloud-first arhitekturu koja premješta svu logiku na AWS
- Sigurnu trajnu vezu između WDMS-a u oblaku i kontrolera pristupa na lokaciji
- Sustav naredbi u stvarnom vremenu koji šalje "OPEN" naredbe za manje od 2 sekunde
- Offline fallback koji osigurava da vrata rade i ako internet privremeno zakaže
- Sigurnosne protokole koji sprječavaju pokušaje neovlaštenog pristupa

WDMS, postavljen na AWS infrastrukturu, postigao je 99,99% dostupnosti i promijenio način na koji teretane kontroliraju fizički pristup.

### Izazov 6: CRM — sustav za upravljanje članovima

Vlasnici teretana trebali su sveobuhvatan CRM za upravljanje članovima, praćenje dolazaka, vođenje komunikacije i analizu ponašanja članova.

Izgradili smo prilagođeni CRM integriran s platformom:
- Profile članova koji pohranjuju potpune informacije i preferencije
- Praćenje dolazaka koje automatski bilježi prijave putem mobilne aplikacije
- Komunikacijski hub koji upravlja emailovima, SMS-ovima i push obavijestima
- Analitičku nadzornu ploču koja prikazuje retenciju članova, vršne sate i trendove
- Automatizirane tijekove rada za obnove članstva i follow-upove

CRM, izgrađen s našim mogućnostima [automatizacije](/services/automation/), eliminirao je ručne zadatke upravljanja članovima.

### Izazov 7: Sustav QR skeniranja

Članovi su trebali brz, beskontaktan način prijave i pristupa objektima bez fizičkih kartica ili privjesaka.

Implementirali smo sustav skeniranja QR kodova:
- Generiranje QR koda jedinstvenog za svakog člana u mobilnoj aplikaciji
- Integraciju skenera u kontrolere pristupa i sustave na recepciji
- Trenutnu provjeru statusa članstva u stvarnom vremenu
- Beskontaktno iskustvo koje poboljšava higijenu i praktičnost
- Analitičko praćenje koje bilježi sva skeniranja za podatke o dolascima

Sustav QR-a, u kombinaciji s React Native mobilnom aplikacijom, pružio je besprijekorno, moderno iskustvo prijave.

### Izazov 8: Sustav pretplata

Fitovision je trebao fleksibilan sustav pretplata koji upravlja s više razina cijena, ciklusa naplate i načina plaćanja i za vlasnike teretana i za njihove članove.

Izgradili smo sveobuhvatan sustav upravljanja pretplatama:
- Više razina cijena (Basic, Pro, Enterprise) za vlasnike teretana
- Upravljanje pretplatama članova koje teretanama omogućuje postavljanje vlastitih cijena
- Automatiziranu naplatu koja obrađuje plaćanja po rasporedu
- Integraciju platnog pristupnika koja podržava više načina plaćanja
- Analitiku pretplata koja prati MRR, churn i metrike rasta

Sustav pretplata, koji slijedi najbolje prakse našeg [razvoja SaaS-a](/services/saas-development/), pouzdano upravlja tisućama pretplata.

### Izazov 9: Email marketing — automatizirane email sekvence

Vlasnici teretana trebali su automatizirane email kampanje za onboarding članova, retenciju, promocije i ponovni angažman bez ručnog rada.

Izgradili smo automatizirani email marketing koristeći AWS SES:
- Welcome sekvence za nove članove
- Kampanje retencije za neaktivne članove
- Promotivne emailove za posebne ponude i događaje
- Automatizirane podsjetnike za obnove članstva
- Personalizirani sadržaj temeljen na ponašanju i preferencijama članova

Automatizirani email sustav, dio naše usluge [automatizacije](/services/automation/), uštedio je vlasnicima teretana 10+ sati tjedno uz poboljšanje angažmana članova.

## Tehnički stack

Fitovision smo izgradili koristeći moderne, skalabilne tehnologije:

- Frontend: React za web nadzornu ploču, React Native za iOS i Android aplikacije
- Backend: Node.js s Express.js-om za razvoj API-ja
- Baza podataka: MongoDB za fleksibilnu, skalabilnu pohranu podataka
- Cloud infrastruktura: AWS (EC2, S3, SES, RDS) za pouzdan hosting
- Alati za dizajn: Figma za UI/UX dizajn
- Arhitektura: MERN stack za full-stack razvoj

Ovaj stack podržava tisuće teretana koje rade istovremeno bez pada performansi.

## Rezultati

- **95% automatizacije** rada teretane
- Jedna platforma, jedna naknada umjesto 7+ zasebnih pretplata
- 30% niži troškovi softvera za vlasnike teretana
- 45% veća retencija članova
- **4,9/5 zvjezdica** ocjena aplikacije u trgovinama aplikacija
- **Provjereno 5 zvjezdica** zadovoljstvo klijenta

## Povezane usluge

Ovaj projekt kombinirao je više usluga koje nudimo:

- [Razvoj SaaS-a](/services/saas-development/) - multi-tenant platforma s MERN stackom na AWS-u
- [Mobilni razvoj](/services/mobile-development/) - React Native aplikacije za iOS i Android
- [Web dizajn](/services/web-design/) - web stranica fokusirana na konverzije s Reactom
- [Automatizacija](/services/automation/) - automatizirani CRM tijekovi rada i email marketing
- [SEO usluga](/services/seo/) - vidljivost u pretraživanju na hrvatskom fitness tržištu
