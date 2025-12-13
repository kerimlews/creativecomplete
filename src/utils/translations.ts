export type Language = 'en' | 'hr' | 'de' | 'sl';

export interface TranslationConfig {
  defaultLanguage: Language;
  supportedLanguages: Language[];
  languageNames: Record<Language, string>;
}

export const translationConfig: TranslationConfig = {
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'hr', 'de', 'sl'],
  languageNames: {
    en: 'English',
    hr: 'Hrvatski',
    de: 'Deutsch',
    sl: 'Slovenščina'
  }
};

// Route name translations
const routeNames = {
  services: {
    en: 'services',
    hr: 'usluge',
    de: 'dienstleistungen',
    sl: 'storitve'
  },
  projects: {
    en: 'projects',
    hr: 'projekti',
    de: 'projekte',
    sl: 'projekti'
  }
};

/**
 * Get translated route name for services
 */
export function getServicesRouteName(lang: Language): string {
  return routeNames.services[lang];
}

/**
 * Get translated route name for projects
 */
export function getProjectsRouteName(lang: Language): string {
  return routeNames.projects[lang];
}

/**
 * Extract language from URL path
 * Example: /hr/services → 'hr'
 */
export function getLanguageFromUrl(url: URL): Language {
  const pathSegments = url.pathname.split('/').filter(Boolean);
  
  // Check if first segment is a supported language
  if (pathSegments.length > 0 && translationConfig.supportedLanguages.includes(pathSegments[0] as Language)) {
    return pathSegments[0] as Language;
  }
  
  return translationConfig.defaultLanguage;
}

/**
 * Get URL for a specific language
 * Handles translated route names for services and projects
 */
export function getLocalizedUrl(path: string, targetLang: Language, currentLang?: Language): string {
  // Remove current language prefix if present
  let cleanPath = path;
  if (currentLang && path.startsWith(`/${currentLang}`)) {
    cleanPath = path.slice(currentLang.length + 1);
  }
  
  // Handle services routes - translate to proper language
  if (cleanPath.startsWith('/services')) {
    const serviceId = cleanPath.replace('/services', '').replace(/^\//, '').replace(/\/$/, '');
    if (serviceId) {
      // Use route name directly to avoid circular dependency
      const servicesRoute = getServicesRouteName(targetLang);
      const basePath = targetLang === 'en' ? `/${servicesRoute}/` : `/${targetLang}/${servicesRoute}/`;
      return `${basePath}${serviceId}/`;
    }
    const servicesRoute = getServicesRouteName(targetLang);
    return targetLang === 'en' ? `/${servicesRoute}/` : `/${targetLang}/${servicesRoute}/`;
  }
  
  // Handle projects routes - translate to proper language
  if (cleanPath.startsWith('/projects')) {
    const projectId = cleanPath.replace('/projects', '').replace(/^\//, '').replace(/\/$/, '');
    if (projectId) {
      // Use route name directly to avoid circular dependency
      const projectsRoute = getProjectsRouteName(targetLang);
      const basePath = targetLang === 'en' ? `/${projectsRoute}/` : `/${targetLang}/${projectsRoute}/`;
      return `${basePath}${projectId}/`;
    }
    const projectsRoute = getProjectsRouteName(targetLang);
    return targetLang === 'en' ? `/${projectsRoute}/` : `/${targetLang}/${projectsRoute}/`;
  }
  
  // Ensure path starts with slash
  if (!cleanPath.startsWith('/')) {
    cleanPath = `/${cleanPath}`;
  }
  
  // Add trailing slash if not root
  if (cleanPath !== '/' && !cleanPath.endsWith('/')) {
    cleanPath = `${cleanPath}/`;
  }
  
  // For default language, don't prefix with language code
  if (targetLang === translationConfig.defaultLanguage) {
    return cleanPath;
  }
  
  // For other languages, prefix with language code
  return `/${targetLang}${cleanPath}`;
}

/**
 * Get all language variants for a page
 */
export function getLanguageAlternates(url: URL, path: string): Array<{ lang: Language; href: string }> {
  const currentLang = getLanguageFromUrl(url);
  
  return translationConfig.supportedLanguages.map(lang => ({
    lang,
    href: getLocalizedUrl(path, lang, currentLang)
  }));
}

/**
 * Simple translation function (in a real app, you'd use i18n library)
 */
export function t(key: string, lang: Language, params: Record<string, string> = {}): string {
  // Simple translation dictionary - in a real app, this would be more comprehensive
  const translations: Record<string, Record<Language, string>> = {
    // Navigation
    'nav.home': {
      en: 'Home',
      hr: 'Početna',
      de: 'Startseite',
      sl: 'Domov'
    },
    'nav.services': {
      en: 'Services',
      hr: 'Usluge',
      de: 'Dienstleistungen',
      sl: 'Storitve'
    },
    'nav.projects': {
      en: 'Projects',
      hr: 'Projekti',
      de: 'Projekte',
      sl: 'Projekti'
    },
    'nav.blog': {
      en: 'Blog',
      hr: 'Blog',
      de: 'Blog',
      sl: 'Blog'
    },
    'nav.contact': {
      en: 'Contact',
      hr: 'Kontakt',
      de: 'Kontakt',
      sl: 'Kontakt'
    },
    'nav.about': {
      en: 'About',
      hr: 'O nama',
      de: 'Über uns',
      sl: 'O nas'
    },

    // Footer
    'footer.rights': {
      en: 'All rights reserved',
      hr: 'Sva prava pridržana',
      de: 'Alle Rechte vorbehalten',
      sl: 'Vse pravice pridržane'
    },

    // CTA Buttons
    'cta.get_started': {
      en: 'Get Started',
      hr: 'Započnite',
      de: 'Loslegen',
      sl: 'Začnite'
    },
    'cta.learn_more': {
      en: 'Learn More',
      hr: 'Saznajte Više',
      de: 'Mehr Erfahren',
      sl: 'Več informacij'
    },
    'cta.contact_us': {
      en: 'Contact Us',
      hr: 'Kontaktirajte Nas',
      de: 'Kontaktieren Sie Uns',
      sl: 'Kontaktirajte nas'
    },
    'cta.get_free_audit': {
      en: 'Get Free Audit',
      hr: 'Besplatni Audit',
      de: 'Kostenlose Analyse',
      sl: 'Brezplačna revizija'
    },

    // Services Page
    'services.title': {
      en: 'Digital Services That Deliver Real Results',
      hr: 'Digitalne Usluge Koje Daju Stvarne Rezultate',
      de: 'Digitale Dienstleistungen mit messbaren Ergebnissen',
      sl: 'Digitalne storitve, ki prinašajo realne rezultate'
    },
    'services.description': {
      en: 'Comprehensive digital marketing services including SEO, web design, automation, SaaS development, e-commerce, and mobile apps. Real results, not empty promises.',
      hr: 'Sveobuhvatne digitalne marketinške usluge uključujući SEO, web dizajn, automatizaciju, SaaS razvoj, e-trgovinu i mobilne aplikacije. Stvarni rezultati, ne prazna obećanja.',
      de: 'Umfassende digitale Marketingdienstleistungen einschließlich SEO, Webdesign, Automatisierung, SaaS-Entwicklung, E-Commerce und mobile Apps. Reale Ergebnisse, keine leeren Versprechen.',
      sl: 'Celovite digitalne marketinške storitve, vključno z SEO, spletnim oblikovanjem, avtomatizacijo, razvojem SaaS, e-trgovino in mobilnimi aplikacijami. Resnični rezultati, ne praznih obljub.'
    },
    'services.hero_title': {
      en: 'Digital Services That Deliver <span class="text-gradient">Real Results</span>',
      hr: 'Digitalne Usluge Koje Daju <span class="text-gradient">Stvarne Rezultate</span>',
      de: 'Digitale Dienstleistungen mit <span class="text-gradient">messbaren Ergebnissen</span>',
      sl: 'Digitalne storitve, ki prinašajo <span class="text-gradient">realne rezultate</span>'
    },
    'services.hero_subtitle': {
      en: 'We don\'t just build websites or run ads - we drive measurable business growth with proven strategies and technical excellence.',
      hr: 'Ne samo gradimo web stranice ili pokrećemo oglase - pokrećemo mjerljiv rast poslovanja s provjerenim strategijama i tehničkom izvrsnošću.',
      de: 'Wir bauen nicht nur Websites oder schalten Anzeigen - wir treiben messbares Geschäftswachstum mit bewährten Strategien und technischer Exzellenz voran.',
      sl: 'Ne gradimo samo spletnih strani ali vodimo oglasov - spodbujamo merljiv poslovni rast s preverjenimi strategijami in tehnično odličnostjo.'
    },
    'services.portfolio_title': {
      en: 'Our Comprehensive Service Portfolio',
      hr: 'Naš Sveobuhvatni Portfolio Usluga',
      de: 'Unser umfassendes Dienstleistungsportfolio',
      sl: 'Naš celovit portfelj storitev'
    },
    'services.portfolio_subtitle': {
      en: 'Each service is backed by verified case studies and proven methodologies',
      hr: 'Svaka usluga je podržana verificiranim studijama slučaja i provjerenim metodologijama',
      de: 'Jeder Service wird durch verifizierte Fallstudien und bewährte Methoden unterstützt',
      sl: 'Vsaka storitev je podprta z preverjenimi študijami primerov in dokazanimi metodologijami'
    },
    'services.all_services': {
      en: 'All Services',
      hr: 'Sve Usluge',
      de: 'Alle Dienstleistungen',
      sl: 'Vse storitve'
    },
    'services.process_title': {
      en: 'Our Proven Process for Success',
      hr: 'Naš Dokazani Proces za Uspjeh',
      de: 'Unser bewährter Prozess für Erfolg',
      sl: 'Naš dokazani proces za uspeh'
    },
    'services.process_subtitle': {
      en: 'A systematic approach that ensures measurable results every time',
      hr: 'Sistematski pristup koji osigurava mjerljive rezultate svaki put',
      de: 'Ein systematischer Ansatz, der jedes Mal messbare Ergebnisse gewährleistet',
      sl: 'Sistematičen pristop, ki zagotavlja merljive rezultate vsakič'
    },
    'services.discovery_title': {
      en: 'Discovery & Strategy',
      hr: 'Otkriće i Strategija',
      de: 'Entdeckung & Strategie',
      sl: 'Odkritje in strategija'
    },
    'services.discovery_desc': {
      en: 'Deep analysis of your business, competition, and goals to create a custom strategy with clear KPIs.',
      hr: 'Dubinska analiza vašeg poslovanja, konkurencije i ciljeva za stvaranje prilagođene strategije s jasnim KPI-jevima.',
      de: 'Tiefgehende Analyse Ihres Geschäfts, Wettbewerbs und Ziele zur Erstellung einer maßgeschneiderten Strategie mit klaren KPIs.',
      sl: 'Globoka analiza vašega poslovanja, konkurence in ciljev za ustvarjanje prilagojene strategije z jasnimi KPI-ji.'
    },
    'services.implementation_title': {
      en: 'Implementation',
      hr: 'Implementacija',
      de: 'Implementierung',
      sl: 'Implementacija'
    },
    'services.implementation_desc': {
      en: 'Rapid execution with expert precision, regular updates, and transparent communication throughout.',
      hr: 'Brza izvedba s stručnom preciznošću, redovitim ažuriranjima i transparentnom komunikacijom tijekom cijelog procesa.',
      de: 'Schnelle Ausführung mit Expertenpräzision, regelmäßigen Updates und transparenter Kommunikation während des gesamten Prozesses.',
      sl: 'Hitra izvedba s strokovno natančnostjo, rednimi posodobitvami in transparentno komunikacijo skozi celoten proces.'
    },
    'services.optimization_title': {
      en: 'Optimization',
      hr: 'Optimizacija',
      de: 'Optimierung',
      sl: 'Optimizacija'
    },
    'services.optimization_desc': {
      en: 'Continuous monitoring, testing, and refinement to maximize performance and ROI.',
      hr: 'Kontinuirano praćenje, testiranje i usavršavanje za maksimiziranje performansi i ROI-a.',
      de: 'Kontinuierliche Überwachung, Tests und Verfeinerung zur Maximierung der Leistung und des ROI.',
      sl: 'Nenehno spremljanje, testiranje in izboljševanje za maksimizacijo učinkovitosti in donosa naložbe.'
    },
    'services.scale_title': {
      en: 'Scale & Grow',
      hr: 'Skaliranje i Rast',
      de: 'Skalieren & Wachsen',
      sl: 'Širitev in rast'
    },
    'services.scale_desc': {
      en: 'Strategic expansion of successful initiatives to drive sustainable long-term growth.',
      hr: 'Strateško širenje uspješnih inicijativa za pokretanje održivog dugoročnog rasta.',
      de: 'Strategische Erweiterung erfolgreicher Initiativen zur Förderung nachhaltigen langfristigen Wachstums.',
      sl: 'Strateška širitev uspešnih pobud za spodbujanje trajnostne dolgoročne rasti.'
    },
    'services.case_studies_title': {
      en: 'Real Results, Real Clients',
      hr: 'Stvarni Rezultati, Stvarni Klijenti',
      de: 'Reale Ergebnisse, reale Kunden',
      sl: 'Resnični rezultati, resnični stranki'
    },
    'services.case_studies_subtitle': {
      en: 'Every service is backed by verified case studies with measurable outcomes',
      hr: 'Svaka usluga je podržana verificiranim studijama slučaja s mjerljivim ishodima',
      de: 'Jeder Service wird durch verifizierte Fallstudien mit messbaren Ergebnissen unterstützt',
      sl: 'Vsaka storitev je podprta s preverjenimi študijami primerov z merljivimi rezultati'
    },

    // Service Detail Page
    'service.delivery_time': {
      en: 'Delivery Time',
      hr: 'Vrijeme Isporuke',
      de: 'Lieferzeit',
      sl: 'Čas dostave'
    },
    'service.priority': {
      en: 'Priority',
      hr: 'Prioritet',
      de: 'Priorität',
      sl: 'Prioriteta'
    },
    'service.category': {
      en: 'Category',
      hr: 'Kategorija',
      de: 'Kategorie',
      sl: 'Kategorija'
    },
    'service.author': {
      en: 'Author',
      hr: 'Autor',
      de: 'Autor',
      sl: 'Avtor'
    },
    'service.featured': {
      en: 'Featured Service',
      hr: 'Istaknuta Usluga',
      de: 'Ausgewählter Service',
      sl: 'Izpostavljena storitev'
    },
    'service.whats_included': {
      en: 'What\'s Included',
      hr: 'Što je Uključeno',
      de: 'Was ist enthalten',
      sl: 'Kaj je vključeno'
    },

    // Categories
    'category.seo': {
      en: 'SEO',
      hr: 'SEO',
      de: 'SEO',
      sl: 'SEO'
    },
    'category.web-design': {
      en: 'Web Design',
      hr: 'Web Dizajn',
      de: 'Webdesign',
      sl: 'Spletno oblikovanje'
    },
    'category.automation': {
      en: 'Automation',
      hr: 'Automatizacija',
      de: 'Automatisierung',
      sl: 'Avtomatizacija'
    },
    'category.mobile-development': {
      en: 'Mobile Development',
      hr: 'Mobilni Razvoj',
      de: 'Mobile Entwicklung',
      sl: 'Mobilni razvoj'
    },
    'category.ecommerce': {
      en: 'E-commerce',
      hr: 'E-trgovina',
      de: 'E-Commerce',
      sl: 'E-trgovina'
    },
    'category.saas-development': {
      en: 'SaaS Development',
      hr: 'SaaS Razvoj',
      de: 'SaaS-Entwicklung',
      sl: 'Razvoj SaaS'
    },

    // Common UI elements
    'read_more': {
      en: 'Read More',
      hr: 'Pročitaj Više',
      de: 'Mehr lesen',
      sl: 'Preberi več'
    },
    'read_case_study': {
      en: 'Read Case Study',
      hr: 'Pročitaj Studiju Slučaja',
      de: 'Fallstudie lesen',
      sl: 'Preberi študijo primera'
    },
    'view_project': {
      en: 'View Project',
      hr: 'Pogledaj Projekt',
      de: 'Projekt ansehen',
      sl: 'Ogled projekta'
    },
    'back_to_services': {
      en: 'Back to Services',
      hr: 'Natrag na Usluge',
      de: 'Zurück zu Dienstleistungen',
      sl: 'Nazaj na storitve'
    },

    // Case Studies
    'case_studies.seo_title': {
      en: 'From Page 5 to #1 in 90 Days',
      hr: 'Od stranice 5 do #1 u 90 dana',
      de: 'Von Seite 5 zu #1 in 90 Tagen',
      sl: 'Od strani 5 do #1 v 90 dneh'
    },
    'case_studies.seo_desc': {
      en: 'Local plumbing company achieved 47 new clients through strategic SEO implementation.',
      hr: 'Lokalna vodovodna tvrtka postigla je 47 novih klijenata kroz stratešku implementaciju SEO-a.',
      de: 'Lokales Sanitärunternehmen erreichte 47 neue Kunden durch strategische SEO-Implementierung.',
      sl: 'Lokalno podjetje za vodovodne storitve je doseglo 47 novih strank s strateško implementacijo SEO.'
    },
    'case_studies.automation_title': {
      en: '20 Hours Weekly Saved with AI',
      hr: '20 sati tjedno ušteđeno s AI',
      de: '20 Stunden wöchentlich mit KI gespart',
      sl: '20 ur tedensko prihranjeno z AI'
    },
    'case_studies.automation_desc': {
      en: 'Service business automated scheduling and invoicing, reclaiming 20+ hours weekly.',
      hr: 'Posao usluga automatizirao je raspoređivanje i fakturiranje, vraćajući 20+ sati tjedno.',
      de: 'Serviceunternehmen automatisierte Terminplanung und Rechnungsstellung und sparte 20+ Stunden pro Woche.',
      sl: 'Podjetje za storitve je avtomatiziralo načrtovanje in izdajanje računov, s čimer je prihranilo 20+ ur tedensko.'
    },
    'case_studies.mobile_title': {
      en: '3X Revenue with Mobile App',
      hr: '3X prihoda s mobilnom aplikacijom',
      de: '3X Umsatz mit mobiler App',
      sl: '3x prihodki z mobilno aplikacijo'
    },
    'case_studies.mobile_desc': {
      en: 'Fitness studio tripled revenue and reduced customer churn by 45% with custom app.',
      hr: 'Teretana je utrostručila prihod i smanjila odljev kupaca za 45% s prilagođenom aplikacijom.',
      de: 'Fitnessstudio verdreifachte Umsatz und reduzierte Kundenabwanderung um 45% mit maßgeschneiderter App.',
      sl: 'Fitnes center je potrojil prihodke in zmanjšal odliv strank za 45% s prilagojeno aplikacijo.'
    },

    // Homepage
    'services.title': {
      en: 'Digital Solutions That Drive Real Revenue',
      hr: 'Digitalne Usluge Koje Daju Stvarne Rezultate',
      de: 'Digitale Dienstleistungen mit messbaren Ergebnissen',
      sl: 'Digitalne storitve, ki prinašajo realne rezultate'
    },
    'services.subtitle': {
      en: 'Each service is backed by verified case studies with measurable results',
      hr: 'Svaka usluga je podržana verificiranim studijama slučaja s mjerljivim rezultatima',
      de: 'Jeder Service wird durch verifizierte Fallstudien mit messbaren Ergebnissen unterstützt',
      sl: 'Vsaka storitev je podprta s preverjenimi študijami primerov z merljivimi rezultati'
    },
    'projects.title': {
      en: 'Verified Case Studies With Real Metrics',
      hr: 'Verificirane Studije Slučaja sa Stvarnim Metrikama',
      de: 'Verifizierte Fallstudien mit realen Metriken',
      sl: 'Preverjene študije primerov z resničnimi metričnimi podatki'
    },
    'projects.subtitle': {
      en: 'Every project has a detailed case study showing exactly how we achieved these results',
      hr: 'Svaki projekt ima detaljnu studiju slučaja koja pokazuje točno kako smo postigli ove rezultate',
      de: 'Jedes Projekt hat eine detaillierte Fallstudie, die zeigt, wie wir diese Ergebnisse genau erreicht haben',
      sl: 'Vsak projekt ima podrobno študijo primera, ki prikazuje, kako smo natančno dosegli te rezultate'
    },
    'projects.view_all': {
      en: 'Explore All Case Studies',
      hr: 'Istraži Sve Studije Slučaja',
      de: 'Alle Fallstudien erkunden',
      sl: 'Raziščite vse študije primerov'
    },
    'cta.title': {
      en: 'Ready to Get Similar Results?',
      hr: 'Spremni za Slične Rezultate?',
      de: 'Bereit für ähnliche Ergebnisse?',
      sl: 'Ste pripravljeni na podobne rezultate?'
    },
    'cta.subtitle': {
      en: 'Stop wondering what\'s possible and start seeing real growth metrics for your business',
      hr: 'Prestanite se pitati što je moguće i počnite vidjeti stvarne metrike rasta za vaše poslovanje',
      de: 'Hören Sie auf, sich zu fragen, was möglich ist, und beginnen Sie, reale Wachstumsmetriken für Ihr Unternehmen zu sehen',
      sl: 'Nehaj se spraševati, kaj je mogoče, in začni videti resnične metrike rasti za svoje podjetje'
    },
    'cta.urgency': {
      en: 'Currently Accepting 3 New Clients This Month',
      hr: 'Trenutno Prihvaćamo 3 Nova Klijenta Ovaj Mjesec',
      de: 'Derzeit nehmen wir 3 neue Kunden diesen Monat an',
      sl: 'Trenutno sprejemamo 3 nove stranke ta mesec'
    },
    'cta.primary_button': {
      en: 'Get My Free Growth Audit',
      hr: 'Dobij Moj Besplatni Audit Rasta',
      de: 'Holen Sie sich meine kostenlose Wachstumsanalyse',
      sl: 'Pridobite mojo brezplačno revizijo rasti'
    },
    'cta.secondary_button': {
      en: 'Schedule Strategy Call',
      hr: 'Zakaži Strategijski Poziv',
      de: 'Strategiegespräch planen',
      sl: 'Načrtujte strateški klic'
    },
    'cta.security_note': {
      en: 'Your information is secure. We don\'t do spam or pressure tactics.',
      hr: 'Vaše informacije su sigurne. Ne radimo spam ili taktike pritiska.',
      de: 'Ihre Informationen sind sicher. Wir machen keinen Spam oder Drucktaktiken.',
      sl: 'Vaše informacije so varne. Ne pošiljamo neželene pošte ali uporabljamo pritisk.'
    },

    // Hero Section
    'hero.title': {
      en: 'Results-Driven Digital Agency - 287% Growth Guarantee',
      hr: 'Agencija Vođena Rezultatima - 287% Garancija Rasta',
      de: 'Ergebnisorientierte Digitalagentur - 287% Wachstumsgarantie',
      sl: 'Agencija, ki jo vodijo rezultati - 287% garancija rasti'
    },
    'hero.subtitle': {
      en: 'We deliver measurable revenue growth through strategic digital solutions. 287% average increase in qualified leads for our clients.',
      hr: 'Dostavljamo mjerljiv rast prihoda kroz strateška digitalna rješenja. 287% prosječnog povećanja kvalificiranih potencijala za naše klijente.',
      de: 'Wir liefern messbares Umsatzwachstum durch strategische digitale Lösungen. 287% durchschnittliche Steigerung qualifizierter Leads für unsere Kunden.',
      sl: 'Dostavljamo merljiv rast prihodkov s strateškimi digitalnimi rešitvami. 287% povprečno povečanje kvalificiranih potencialov za naše stranke.'
    },
    'hero.cta_text': {
      en: 'Get My Free Growth Audit',
      hr: 'Dobij Moj Besplatni Audit Rasta',
      de: 'Holen Sie sich meine kostenlose Wachstumsanalyse',
      sl: 'Pridobite mojo brezplačno revizijo rasti'
    },
    'hero.secondary_cta_text': {
      en: 'See Real Case Studies →',
      hr: 'Pogledaj Stvarne Studije Slučaja →',
      de: 'Reale Fallstudien ansehen →',
      sl: 'Oglejte si resnične študije primerov →'
    },
    'hero.stats.lead_increase': {
      en: 'Avg. Lead Increase',
      hr: 'Prosječno Povećanje Potencijala',
      de: 'Durchschnittliche Lead-Steigerung',
      sl: 'Povprečno povečanje potencialov'
    },
    'hero.stats.new_clients': {
      en: 'New Clients in 90 Days',
      hr: 'Novi Klijenti u 90 Dana',
      de: 'Neue Kunden in 90 Tagen',
      sl: 'Nove stranke v 90 dneh'
    },
    'hero.stats.conversion_rate': {
      en: 'Avg. Conversion Rate',
      hr: 'Prosječna Stopa Konverzije',
      de: 'Durchschnittliche Conversion-Rate',
      sl: 'Povprečna stopnja konverzije'
    },
    'hero.stats.hours_saved': {
      en: 'Hours Saved Weekly',
      hr: 'Sati Ušteđeni Tjedno',
      de: 'Stunden wöchentlich gespart',
      sl: 'Ur prihranjeno tedensko'
    },

    // About Page
    'about.title': {
      en: 'About Us - Creative Complete | Custom Software & Automation Solutions',
      hr: 'O nama - Creative Complete | Prilagođeni softver i automatizacijska rješenja',
      de: 'Über uns - Creative Complete | Individuelle Software & Automatisierungslösungen',
      sl: 'O nas - Creative Complete | Prilagojene programske in avtomatizacijske rešitve'
    },
    'about.description': {
      en: 'Learn about Creative Complete - we build custom software, automate business processes, and drive growth. Founded by Kerim Alihodza.',
      hr: 'Saznajte o Creative Complete - gradimo prilagođeni softver, automatiziramo poslovne procese i pokrećemo rast. Osnovao Kerim Alihodza.',
      de: 'Erfahren Sie mehr über Creative Complete - wir entwickeln individuelle Software, automatisieren Geschäftsprozesse und fördern Wachstum. Gegründet von Kerim Alihodza.',
      sl: 'Spoznajte Creative Complete - razvijamo prilagojeno programsko opremo, avtomatiziramo poslovne procese in spodbujamo rast. Ustanovil Kerim Alihodza.'
    },

    // Contact Page
    'contact.title': {
      en: 'Get In Touch',
      hr: 'Stupite u kontakt',
      de: 'Kontakt aufnehmen',
      sl: 'Stopite v stik'
    },
    'contact.subtitle': {
      en: 'Ready to bring your project to life? Let\'s discuss how we can help your business grow.',
      hr: 'Spremni da oživite svoj projekt? Razgovarajmo kako možemo pomoći vašem poslovanju da raste.',
      de: 'Bereit, Ihr Projekt zum Leben zu erwecken? Lassen Sie uns besprechen, wie wir Ihrem Unternehmen helfen können zu wachsen.',
      sl: 'Ste pripravljeni oživiti svoj projekt? Pogovorimo se, kako lahko pomagamo vašemu podjetju rasti.'
    },
    'kerim.title': {
      en: 'Kerim Alihodza - CEO & Business Mechanic',
      hr: 'Kerim Alihodza - CEO & Business Mechanic',
      de: 'Kerim Alihodza - CEO & Business Mechanic',
      sl: 'Kerim Alihodza - CEO & Business Mechanic'
    },
    'kerim.description': {
      en: '10+ years transforming businesses from \'potential\' to \'profit\' through ruthless digital strategy and engineered growth systems.',
      hr: '10+ godina transformacije poslovanja od \'potencijala\' do \'profita\' kroz nemilosrdnu digitalnu strategiju i inženjerske sustave rasta.',
      de: '10+ Jahre Transformation von Unternehmen von \'Potenzial\' zu \'Profit\' durch gnadenlose digitale Strategie und entwickelte Wachstumssysteme.',
      sl: '10+ let preoblikovanja podjetij od \'potenciala\' do \'profita\' skozi neusmiljeno digitalno strategijo in inženirske sisteme rasti.'
    },
    'kerim.subtitle': {
      en: 'CEO & Business Mechanic',
      hr: 'CEO & Business Mechanic',
      de: 'CEO & Business Mechanic',
      sl: 'CEO & Business Mechanic'
    },
    'kerim.quote': {
      en: 'I don\'t build pretty websites. I engineer revenue machines that make competitors sweat and clients wonder why they waited so long.',
      hr: 'Ne gradim lijepe web stranice. Konstruiram strojeve za prihod koji natjeraju konkurente da se znoje i klijente da se pitaju zašto su čekali tako dugo.',
      de: 'Ich baue keine hübschen Websites. Ich konstruiere Umsatzmaschinen, die Konkurrenten zum Schwitzen bringen und Kunden sich fragen lassen, warum sie so lange gewartet haben.',
      sl: 'Ne gradim lepih spletnih strani. Konstruiram stroje za prihodke, ki konkurente spravijo v znoj in stranke se sprašujejo, zakaj so čakali tako dolgo.'
    },
    'kerim.bio.header': {
      en: 'The 10-Year Reality Check',
      hr: '10-godišnja provjera stvarnosti',
      de: 'Die 10-Jahres-Realitätsprüfung',
      sl: '10-letni pregled resničnosti'
    },
    'kerim.bio.text1': {
      en: 'I\'ve spent the last decade in the trenches of digital business transformation. Not in theory. Not in conferences. In the fucking reality of taking businesses from struggling to dominant.',
      hr: 'Posljednjih deset godina proveo sam u rovovima digitalne transformacije poslovanja. Ne u teoriji. Ne na konferencijama. U jebenoj stvarnosti pretvaranja poslovanja iz borbe u dominantno.',
      de: 'Ich habe das letzte Jahrzehnt in den Schützengräben der digitalen Geschäftstransformation verbracht. Nicht in der Theorie. Nicht auf Konferenzen. In der verdammten Realität, Unternehmen von kämpfend zu dominant zu machen.',
      sl: 'Zadnjih deset let sem preživel v jarkih digitalne preobrazbe podjetij. Ne v teoriji. Ne na konferencah. V prekleti resničnosti spreminjanja podjetij iz boja v dominantna.'
    },
    'kerim.bio.text2': {
      en: 'Most agencies sell dreams. I deliver measurable outcomes. While others talk about "brand presence," I\'m engineering systems that drive 300% revenue growth, automate 80% of manual work, and position businesses as market leaders.',
      hr: 'Većina agencija prodaje snove. Ja isporučujem mjerljive rezultate. Dok drugi govore o "prisutnosti brenda", ja konstruiram sustave koji pokreću 300% rast prihoda, automatiziraju 80% ručnog rada i pozicioniraju poslovanja kao lidere tržišta.',
      de: 'Die meisten Agenturen verkaufen Träume. Ich liefere messbare Ergebnisse. Während andere über "Markenpräsenz" reden, konstruiere ich Systeme, die 300% Umsatzwachstum antreiben, 80% der manuellen Arbeit automatisieren und Unternehmen als Marktführer positionieren.',
      sl: 'Večina agencij prodaja sanje. Jaz dostavljam merljive rezultate. Medtem ko drugi govorijo o "prisotnosti blagovne znamke", konstruiram sisteme, ki poganjajo 300% rast prihodkov, avtomatizirajo 80% ročnega dela in pozicionirajo podjetja kot vodilne na trgu.'
    },
    'privacy.title': {
      en: 'Privacy Policy - Creative Complete',
      hr: 'Politika privatnosti - Creative Complete',
      de: 'Datenschutzrichtlinie - Creative Complete',
      sl: 'Pravilnik o zasebnosti - Creative Complete'
    },
    'privacy.description': {
      en: 'Learn how Creative Complete protects your privacy and handles your data. Our commitment to transparency and GDPR compliance.',
      hr: 'Saznajte kako Creative Complete štiti vašu privatnost i upravlja vašim podacima. Naša posvećenost transparentnosti i usklađenosti s GDPR-om.',
      de: 'Erfahren Sie, wie Creative Complete Ihre Privatsphäre schützt und Ihre Daten behandelt. Unser Engagement für Transparenz und DSGVO-Konformität.',
      sl: 'Spoznajte, kako Creative Complete ščiti vašo zasebnost in upravlja vaše podatke. Naša zavezanost preglednosti in skladnosti z GDPR.'
    },
    'privacy.header': {
      en: 'Privacy Policy',
      hr: 'Politika privatnosti',
      de: 'Datenschutzrichtlinie',
      sl: 'Pravilnik o zasebnosti'
    },
    'privacy.subtitle': {
      en: 'Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.',
      hr: 'Vaša privatnost je važna za nas. Ova politika objašnjava kako prikupljamo, koristimo i štitimo vaše osobne podatke.',
      de: 'Ihre Privatsphäre ist uns wichtig. Diese Richtlinie erklärt, wie wir Ihre personenbezogenen Daten sammeln, verwenden und schützen.',
      sl: 'Vaša zasebnost je pomembna za nas. Ta pravilnik pojasnjuje, kako zbiramo, uporabljamo in ščitimo vaše osebne podatke.'
    },
    'terms.title': {
      en: 'Terms of Use - Creative Complete',
      hr: 'Uvjeti korištenja - Creative Complete',
      de: 'Nutzungsbedingungen - Creative Complete',
      sl: 'Pogoji uporabe - Creative Complete'
    },
    'terms.description': {
      en: 'Terms and conditions governing your use of Creative Complete digital agency services. Read our terms of use agreement.',
      hr: 'Uvjeti i odredbe koji uređuju vaše korištenje usluga digitalne agencije Creative Complete. Pročitajte naš ugovor o uvjetima korištenja.',
      de: 'Allgemeine Geschäftsbedingungen für die Nutzung der Dienstleistungen der Digitalagentur Creative Complete. Lesen Sie unsere Nutzungsvereinbarung.',
      sl: 'Pogoji in določila, ki urejajo vaše uporabo storitev digitalne agencije Creative Complete. Preberite našo pogodbo o pogojih uporabe.'
    },
    'terms.header': {
      en: 'Terms of Use',
      hr: 'Uvjeti korištenja',
      de: 'Nutzungsbedingungen',
      sl: 'Pogoji uporabe'
    },
    'terms.subtitle': {
      en: 'Please read these terms carefully before using our services. By accessing our website, you agree to be bound by these terms.',
      hr: 'Molimo pažljivo pročitajte ove uvjete prije korištenja naših usluga. Pristupanjem našoj web stranici, slažete se biti vezani ovim uvjetima.',
      de: 'Bitte lesen Sie diese Bedingungen sorgfältig durch, bevor Sie unsere Dienstleistungen nutzen. Durch den Zugriff auf unsere Website stimmen Sie zu, an diese Bedingungen gebunden zu sein.',
      sl: 'Prosimo, da pozorno preberete te pogoje pred uporabo naših storitev. Z dostopom do naše spletne strani se strinjate, da ste vezani na te pogoje.'
    },
    '404.title': {
      en: '404 - Page Not Found',
      hr: '404 - Stranica nije pronađena',
      de: '404 - Seite nicht gefunden',
      sl: '404 - Stran ni najdena'
    },
    '404.subtitle': {
      en: 'Page Not Found',
      hr: 'Stranica nije pronađena',
      de: 'Seite nicht gefunden',
      sl: 'Stran ni najdena'
    },
    '404.description': {
      en: 'Oops! It seems you\'ve ventured into uncharted territory. The page you\'re looking for might have been moved, deleted, or never existed in the first place.',
      hr: 'Ups! Čini se da ste zalutali u neistraženi teritorij. Stranica koju tražite možda je premještena, izbrisana ili nikada nije postojala.',
      de: 'Hoppla! Es scheint, als wären Sie in unerforschtes Gebiet vorgedrungen. Die Seite, die Sie suchen, wurde möglicherweise verschoben, gelöscht oder hat nie existiert.',
      sl: 'Ups! Zdi se, da ste zašli v neodkriti teritorij. Stran, ki jo iščete, je bila morda premaknjena, izbrisana ali sploh ni nikoli obstajala.'
    },
    '404.button': {
      en: 'Back to Homepage',
      hr: 'Povratak na početnu',
      de: 'Zurück zur Startseite',
      sl: 'Nazaj na domačo stran'
    }
  };

  let translation = translations[key]?.[lang] || translations[key]?.[translationConfig.defaultLanguage] || key;
  
  // Replace parameters in translation
  Object.entries(params).forEach(([param, value]) => {
    translation = translation.replace(`{{${param}}}`, value);
  });
  
  return translation;
}

/**
 * Check if a path is the current active page
 */
export function isActivePath(currentPath: string, targetPath: string): boolean {
  const normalizedCurrent = currentPath.replace(/\/$/, '');
  const normalizedTarget = targetPath.replace(/\/$/, '');
  
  if (normalizedTarget === '') {
    return normalizedCurrent === '';
  }
  
  return normalizedCurrent.startsWith(normalizedTarget);
}

/**
 * Get breadcrumb items for a page
 */
export function getBreadcrumbs(path: string, lang: Language): Array<{ name: string; url: string }> {
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs: Array<{ name: string; url: string }> = [];
  
  let currentPath = '';
  
  // Home breadcrumb
  breadcrumbs.push({
    name: t('nav.home', lang),
    url: getLocalizedUrl('/', lang)
  });
  
  // Add other segments
  segments.forEach(segment => {
    currentPath += `/${segment}`;
    
    // Skip language segment for breadcrumb display
    if (translationConfig.supportedLanguages.includes(segment as Language)) {
      return;
    }
    
    let name = segment;
    
    // Translate common segments
    const translationKey = `nav.${segment}` as keyof typeof translations;
    if (translations[translationKey]) {
      name = t(translationKey, lang);
    } else {
      // Capitalize and replace hyphens
      name = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
    }
    
    breadcrumbs.push({
      name,
      url: getLocalizedUrl(currentPath, lang)
    });
  });
  
  return breadcrumbs;
}