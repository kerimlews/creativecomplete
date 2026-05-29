// v2i18n.ts. Translation utility for v2 homepage components
// Supports: en (fallback), de (German/DACH), sl (Slovenian)

export type Lang = 'en' | 'de' | 'sl';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface HeroContent {
  badge: string;
  h1Line1: string;
  h1Line2: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  trustText: string;
}

export interface StatItem {
  n: string;
  l: string;
  c: string;
}

export interface TrackContent {
  eyebrow: string;
  title: string;
  titleGrad: string;
  cta: string;
  steps: {
    label: string;
    desc: string;
  }[];
}

export interface ServiceItem {
  tag: string;
  kicker: string;
  title: string;
  body: string;
  list: string[];
  cta: string;
  blogLabel: string;
  // engine strip labels
  engTitle: string;
  engMetricLabel: string;
}

export interface ServicesContent {
  eyebrow: string;
  title: string;
  lead: string;
  bottomCta: string;
  services: ServiceItem[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface CTAContent {
  eyebrow: string;
  headline: string;
  subline: string;
  buttonText: string;
  promises: string[];
}

export interface ResultsContent {
  eyebrow: string;
  title: string;
  titleGrad: string;
  ctaSeeStudies: string;
  ctaWant: string;
  items: StatItem[];
}

export interface EndToEndContent {
  eyebrow: string;
  title: string;
  titleGrad: string;
  lead: string;
  bottomCta: string;
  phases: {
    name: string;
    tool: string;
    desc: string;
    features: string[];
    blogLabel: string;
  }[];
  strip: { n: string; l: string }[];
}

export interface TestimonialsContent {
  eyebrow: string;
  readCaseStudy: string;
  joinCta: string;
}

export interface BlogScrollContent {
  eyebrow: string;
  title: string;
  titleGrad: string;
  seeAll: string;
  viewAll: string;
  readLabel: string;
}

export interface BookingSectionContent {
  eyebrow: string;
  title: string;
  titleGrad: string;
  lead: string;
  pills: {
    label: string;
    sub: string;
  }[];
}

export interface ClientsContent {
  label: string;
}

export interface StatsContent {
  items: StatItem[];
  cta: string;
}

// ─── English ──────────────────────────────────────────────────────────────────

const en = {
  hero: {
    badge: 'AI Customer System, Live',
    h1Line1: 'We Run Your Entire Lead System.',
    h1Line2: 'You Close the Deals.',
    subtitle: 'We build the AI, run the system, and make sure every lead gets qualified, replied to, and booked. You just close.',
    ctaPrimary: 'Get free system audit',
    ctaSecondary: 'See how it works',
    trustText: 'trust AI Customer System',
  } satisfies HeroContent,

  stats: {
    items: [
      { n: '81%',   l: 'Lead conversion rate',    c: 'With AI Agents qualifying 24/7' },
      { n: '60%',   l: 'Faster sales cycles',      c: 'vs. manual qualification' },
      { n: '42.5×', l: 'Broadcast campaign ROI',   c: 'From existing lead database' },
      { n: '14×',   l: 'More ad conversions',      c: 'AI creatives vs. manual design' },
    ],
    cta: 'Get these numbers for my agency →',
  } satisfies StatsContent,

  track: {
    eyebrow: 'How we start',
    title: 'From first call to',
    titleGrad: 'live system',
    titleSuffix: ' in days, not months.',
    cta: 'Book my strategy call →',
    steps: [
      { label: 'Schedule a Call',    desc: 'Book a free system audit. 30 minutes, no pressure.' },
      { label: 'Answer Questions',   desc: 'We learn your business, channels, goals, and current lead flow.' },
      { label: 'Set Monthly Price',  desc: 'One fixed monthly fee. No surprises, no hidden costs, no per-seat pricing.' },
      { label: 'System Setup',       desc: 'We build, connect, and deploy the full AI Customer System. You do nothing.' },
      { label: 'You Winning',        desc: 'Leads qualify themselves. Hot leads book. Your CRM converts on autopilot.' },
    ],
  } satisfies TrackContent & { titleSuffix: string },

  services: {
    eyebrow: 'What we do',
    title: 'Four engines.',
    lead: 'We capture every lead, convert them with AI, and retain them with automated follow-ups. Most agencies handle each stage separately. We own the full lifecycle.',
    bottomCta: 'Activate all 4 engines →',
    services: [
      {
        tag: '01',
        kicker: 'Under 60 seconds · 24/7',
        title: 'AI Lead Qualification',
        body: 'AI Customer System qualifies every inbound lead automatically using AI Agents, scoring intent, budget, and timeline in under 60 seconds across WhatsApp, Instagram, TikTok, Facebook, and 8+ more channels.',
        list: [
          'AI Agents handle first touch 24/7',
          'BANT qualification in every language',
          'Hot leads → sales calendar instantly',
          '80% of routine inquiries automated',
        ],
        cta: 'Qualify my leads with AI →',
        blogLabel: 'How AI qualification works →',
        engTitle: 'AI Lead Qualification',
        engMetricLabel: 'avg qualify time',
      },
      {
        tag: '02',
        kicker: '$35B+ trained · Weekly production',
        title: 'AI Ad Creative Engine',
        body: 'AI Customer System generates high-converting ad creatives trained on $35B+ in ad spend data. Creative Scoring AI predicts winners with 90%+ accuracy before you spend a single cent.',
        list: [
          'Creatives in minutes, not days',
          'Trained on $35B+ real ad spend data',
          'Creative Scoring AI, 90%+ accuracy',
          'Meta, TikTok, Google, LinkedIn',
        ],
        cta: 'Generate winning creatives →',
        blogLabel: 'The 6 AI creative systems →',
        engTitle: 'AI Creative Engine',
        engMetricLabel: 'prediction accuracy',
      },
      {
        tag: '03',
        kicker: '40+ channels · Zero missed leads',
        title: 'Lead Capture & Conversion',
        body: 'AI Customer System unifies WhatsApp, Instagram, TikTok, Facebook, email, SMS, and web chat into one inbox. Capture every lead, convert them with AI, retain them with smart sequences.',
        list: [
          'Unified inbox: 40+ channels',
          'WhatsApp Business API integration',
          'Conversation-Led Growth™ framework',
          'Real-time routing with full context',
        ],
        cta: 'Capture every lead →',
        blogLabel: 'Why speed to lead decides every sale →',
        engTitle: 'Lead Capture',
        engMetricLabel: 'channels unified',
      },
      {
        tag: '04',
        kicker: 'Ongoing revenue · Avg. 42.5×',
        title: 'Existing Lead Monetization',
        body: 'AI Customer System mines your existing CRM for profit. WhatsApp broadcast campaigns and AI-powered re-engagement sequences turn dormant contacts into revenue, averaging 42.5× ROI on the first campaign.',
        list: [
          'WhatsApp broadcasts (avg. 42.5× ROI)',
          'Dormant CRM re-engagement flows',
          'Behavior-triggered sequences',
          'Segment by intent, lifecycle, value',
        ],
        cta: 'Monetize my existing database →',
        blogLabel: 'The 42.5× broadcast playbook →',
        engTitle: 'Lead Monetization',
        engMetricLabel: 'avg ROI',
      },
    ],
  } satisfies ServicesContent,

  faq: [
    {
      q: 'What exactly does CreativeComplete do for us?',
      a: 'We act as your embedded AI Customer System team. We configure, build, and fully manage the infrastructure that captures leads from every channel, qualifies them with AI Agents in under 60 seconds, and runs broadcast sequences on your existing database. You don\'t get a tool to figure out. You get a specialist team that runs the system end to end. Your team only handles the hot leads that land in your calendar.',
    },
    {
      q: 'How does AI qualify leads better than a human team?',
      a: 'AI Agents respond in under 60 seconds, 24/7, across every channel simultaneously. They apply the same BANT qualification logic every time. Intent, budget, timeline, authority. Without fatigue, inconsistency, or missed follow-ups. Our agency-configured agents achieve 81% lead conversion rates, compared to the industry average of 20–30% for human teams. The difference isn\'t the AI. It\'s the setup quality. That\'s what we own.',
    },
    {
      q: 'Which channels does it cover?',
      a: '40+ channels: WhatsApp Business API, WhatsApp Calling, Instagram DM, TikTok Business Messaging, Facebook Messenger, Facebook Messenger Calls, email (Gmail, Outlook, Yahoo), SMS (Twilio, MessageBird, Vonage), Telegram, Viber, WeChat, LINE, VoIP, and more. Every conversation. Regardless of source. Flows into one unified team inbox with full source attribution, lead scores, and conversation history. Nothing falls through the cracks.',
    },
    {
      q: 'How fast will we see results?',
      a: 'Your AI Agents can be handling inbound leads within 10 days of kickoff. A full system build. Qualification flows, nurture sequences, broadcast campaigns, creative production. Takes 3–4 weeks. Broadcast campaigns on your existing CRM typically return ROI within the first month. Most clients recoup the full investment within 45 days.',
    },
    {
      q: 'Do we need to be technical or hire anyone new?',
      a: 'No. That\'s the point. We are your AI department. We configure every workflow, connect every integration, write every qualification script, and manage ongoing optimisation. You receive a monthly performance report and a dedicated account manager. The only thing your team does is close the hot leads we route to them.',
    },
    {
      q: 'How does the creative side connect to the conversation system?',
      a: 'AI generates 8–12 high-converting ad variants weekly, trained on $35B+ in ad spend data. Creative Scoring AI ranks them before launch. Only proven winners go live. Those ads drive leads directly into the conversation system, where AI Agents qualify them instantly. Better creatives bring better leads. Better qualification converts more of them. We manage both loops together so ROAS compounds every week.',
    },
    {
      q: 'What ROI can we realistically expect?',
      a: 'Client medians, not outliers: WhatsApp broadcast campaigns average 42.5× ROI. AI-generated creatives deliver 14× more conversions versus manually designed ads. AI qualification achieves 81% lead conversion rates. Most agencies recoup the full investment within 45 days. We share full attribution data monthly so you see exactly where every result comes from.',
    },
    {
      q: 'How does it connect to our existing CRM?',
      a: 'Native integrations with HubSpot, Salesforce, Pipedrive, and 50+ CRMs. Plus Zapier for everything else. Your existing lead database is imported for broadcast and re-engagement campaigns. Your CRM stays the system of record. We build on top of it without disrupting your current processes.',
    },
    {
      q: 'What makes this different from hiring an automation freelancer or using a chatbot tool?',
      a: 'Freelancers set it up and leave. Chatbot tools handle one channel and one step. We are an ongoing, managed specialist team that owns the full lead lifecycle. Capture, qualification, creative production, re-engagement. Across every channel, continuously optimised. You get the output of a 5-person AI operations team at a fraction of the cost, without the management overhead.',
    },
  ] as FAQItem[],

  cta: {
    eyebrow: 'AI Customer System Agency · 50+ Agencies Served',
    headline: 'Stop Losing Leads<br/><span class="v2-grad">Your Ads Already Paid For.</span>',
    subline: 'Book a free 30-minute audit. We map your current lead flow, calculate your exact revenue leakage, and show you the precise AI configuration for your agency, at no cost, no obligation.',
    buttonText: 'Claim My Free Audit, Book Now',
    promises: [
      'No pitch unless you ask',
      'Custom ROI estimate on the call',
      'Response within 4 hours',
      '8 audit slots per month, agencies only',
    ],
  } satisfies CTAContent,

  results: {
    eyebrow: 'Proven results',
    title: 'Numbers that',
    titleGrad: 'speak for themselves.',
    ctaSeeStudies: 'See the case studies →',
    ctaWant: 'I want these results →',
    items: [
      { n: '81%',   l: 'Lead conversion rate',  c: 'AI Agents qualifying 24/7' },
      { n: '60%',   l: 'Faster sales cycles',    c: 'vs. manual qualification' },
      { n: '42.5×', l: 'Average broadcast ROI',  c: 'From existing lead database' },
      { n: '14×',   l: 'More ad conversions',    c: 'AI creatives vs. manual design' },
    ],
  } satisfies ResultsContent,

  endToEnd: {
    eyebrow: 'The full stack',
    title: 'AI Customer System,',
    titleGrad: 'end to end.',
    lead: 'One system that captures, converts, and retains. Fully managed by us.',
    bottomCta: 'Build this system for my agency →',
    phases: [
      {
        name: 'Create Ads',
        tool: 'AI Creative Engine',
        desc: 'AI generates high-converting images and videos from your brief. Trained on $35B+ in real ad spend data. Creative Scoring predicts winners before you spend a single cent.',
        features: [
          'Images & Videos. Any format',
          'Creative Scoring AI. 90%+ accuracy',
          'A/B Testing. Scale winners only',
          'Meta · TikTok · Google · LinkedIn',
          'Weekly fresh creative production',
        ],
        blogLabel: 'Deep dive: AI Ad Creative Engine',
      },
      {
        name: 'Capture Leads',
        tool: '40+ channels',
        desc: 'Every ad click, DM, web visitor and walk-in lands in one unified inbox. Zero missed leads across all 40+ channels.',
        features: [
          'Capture from Ads',
          'Capture from Social',
          'Capture from Website',
          'Capture from Offline',
        ],
        blogLabel: 'Deep dive: WhatsApp Lead Generation',
      },
      {
        name: 'Convert Leads',
        tool: 'AI Agents',
        desc: 'AI Agents qualify leads in under 60 seconds, route hot prospects to your team, and book appointments. Automatically.',
        features: [
          'AI Agents ✨. 24/7 qualification',
          'Team Inbox. Full context, no CRM switch',
          'Qualify Leads. BANT in every language',
          'Route Leads. Right rep, right time',
          'Book Appointments. In conversation',
        ],
        blogLabel: 'Deep dive: AI Sales Agents',
      },
      {
        name: 'Retain Customers',
        tool: 'Broadcasts',
        desc: 'Turn one-time buyers into recurring revenue. Automated sequences, smart broadcasts, and satisfaction surveys. All in conversation.',
        features: [
          'Conversational Support. Always on',
          'Promotions & Newsletters. Avg 42.5× ROI',
          'Renewal Reminders. Automated sequences',
          'CSAT & NPS Surveys. In-chat',
        ],
        blogLabel: 'Deep dive: WhatsApp Broadcasts (42.5× ROI)',
      },
    ],
    strip: [
      { n: '60s',   l: 'AI response time' },
      { n: '40+',   l: 'channels unified' },
      { n: '90%+',  l: 'creative accuracy' },
      { n: '42.5×', l: 'broadcast ROI' },
      { n: '$35B+', l: 'ad data trained' },
    ],
  } satisfies EndToEndContent,

  testimonials: {
    eyebrow: 'Client results',
    readCaseStudy: 'Read case study →',
    joinCta: 'Join us →',
  } satisfies TestimonialsContent,

  blogScroll: {
    eyebrow: 'From the blog',
    title: 'Guides that',
    titleGrad: 'close deals.',
    seeAll: 'All articles',
    viewAll: 'View all articles',
    readLabel: 'Read',
  } satisfies BlogScrollContent,

  bookingSection: {
    eyebrow: 'Book directly',
    title: "Pick a time that works.",
    titleGrad: "We'll do the rest.",
    lead: '30 minutes. We audit your current setup, calculate your revenue leakage, and show you exactly what AI Customer System would generate for your agency.',
    pills: [
      { label: 'Free audit',    sub: '30 minutes' },
      { label: 'Fast response', sub: 'Within 4 hours' },
      { label: 'No obligation', sub: 'Cancel anytime' },
      { label: 'Agencies only', sub: 'Qualified calls' },
    ],
  } satisfies BookingSectionContent,

  clients: {
    label: 'Powered by',
  } satisfies ClientsContent,
};

// ─── German ───────────────────────────────────────────────────────────────────

const de = {
  hero: {
    badge: 'KI Customer System, Live',
    h1Line1: 'Jedes Lead-Potenzial maximal ausschöpfen',
    h1Line2: 'Ohne mehr Personal einzustellen',
    subtitle: 'Wir bauen, betreiben und verantworten das KI-Kampagnensystem von Ad bis Chat. Sie erhalten nur die Ergebnisse.',
    ctaPrimary: 'Kostenloses System-Audit sichern',
    ctaSecondary: 'So funktioniert es',
    trustText: 'vertrauen dem KI Customer System',
  } satisfies HeroContent,

  stats: {
    items: [
      { n: '81%',   l: 'Lead-Conversion-Rate',      c: 'Mit KI-Agenten rund um die Uhr' },
      { n: '60%',   l: 'Kürzere Verkaufszyklen',     c: 'vs. manuelle Qualifizierung' },
      { n: '42.5×', l: 'Broadcast-Kampagnen-ROI',    c: 'Aus bestehender Lead-Datenbank' },
      { n: '14×',   l: 'Mehr Werbe-Conversions',     c: 'KI-Creatives vs. manuelles Design' },
    ],
    cta: 'Diese Zahlen für meine Agentur erreichen →',
  } satisfies StatsContent,

  track: {
    eyebrow: 'So starten wir',
    title: 'Vom ersten Anruf zum',
    titleGrad: 'Live-System',
    titleSuffix: ' in Tagen, nicht Monaten.',
    cta: 'Strategie-Call buchen →',
    steps: [
      { label: 'Termin vereinbaren',    desc: 'Kostenloses System-Audit buchen. 30 Minuten, kein Druck.' },
      { label: 'Fragen beantworten',    desc: 'Wir verstehen Ihr Geschäft, Kanäle, Ziele und den aktuellen Lead-Flow.' },
      { label: 'Fixpreis festlegen',    desc: 'Eine monatliche Pauschale. Keine Überraschungen, keine versteckten Kosten.' },
      { label: 'System-Aufbau',         desc: 'Wir bauen, verbinden und deployen das vollständige KI Customer System. Sie müssen nichts tun.' },
      { label: 'Sie gewinnen',          desc: 'Leads qualifizieren sich selbst. Heiße Leads buchen. Ihr CRM konvertiert auf Autopilot.' },
    ],
  } satisfies TrackContent & { titleSuffix: string },

  services: {
    eyebrow: 'Was wir tun',
    title: 'Vier Motoren.',
    lead: 'Wir erfassen jeden Lead, konvertieren ihn mit KI und halten ihn mit automatisierten Follow-ups. Die meisten Agenturen trennen diese Phasen. Wir besitzen den gesamten Lebenszyklus.',
    bottomCta: 'Alle 4 Motoren aktivieren →',
    services: [
      {
        tag: '01',
        kicker: 'Unter 60 Sekunden · 24/7',
        title: 'KI-Leadqualifizierung',
        body: 'Das KI Customer System qualifiziert jeden eingehenden Lead automatisch mit KI-Agenten: Intent, Budget und Timeline werden in unter 60 Sekunden über WhatsApp, Instagram, TikTok, Facebook und 8+ weitere Kanäle bewertet.',
        list: [
          'KI-Agenten übernehmen den Erstkontakt 24/7',
          'BANT-Qualifizierung in jeder Sprache',
          'Heiße Leads → Verkaufskalender sofort',
          '80 % der Routineanfragen automatisiert',
        ],
        cta: 'Meine Leads mit KI qualifizieren →',
        blogLabel: 'Wie KI-Qualifizierung funktioniert →',
        engTitle: 'KI-Leadqualifizierung',
        engMetricLabel: 'Ø Qualifizierungszeit',
      },
      {
        tag: '02',
        kicker: '$35 Mrd.+ trainiert · Wöchentliche Produktion',
        title: 'KI-Werbemittel-Engine',
        body: 'Das KI Customer System generiert hochkonvertierende Werbemittel, trainiert auf $35 Mrd.+ realen Werbeausgaben. Die Creative Scoring KI prognostiziert Gewinner mit 90 %+ Genauigkeit. Bevor Sie einen Cent ausgeben.',
        list: [
          'Creatives in Minuten, nicht Tagen',
          'Trainiert auf $35 Mrd.+ echten Werbedaten',
          'Creative Scoring KI, 90 %+ Genauigkeit',
          'Meta, TikTok, Google, LinkedIn',
        ],
        cta: 'Gewinnende Creatives generieren →',
        blogLabel: 'Die 6 KI-Creative-Systeme →',
        engTitle: 'KI-Creative-Engine',
        engMetricLabel: 'Prognose-Genauigkeit',
      },
      {
        tag: '03',
        kicker: '40+ Kanäle · Null verpasste Leads',
        title: 'Lead-Erfassung & Conversion',
        body: 'Das KI Customer System vereint WhatsApp, Instagram, TikTok, Facebook, E-Mail, SMS und Web-Chat in einem Posteingang. Jeden Lead erfassen, mit KI konvertieren, mit smarten Sequenzen halten.',
        list: [
          'Unified Inbox: 40+ Kanäle',
          'WhatsApp Business API Integration',
          'Conversation-Led Growth™ Framework',
          'Echtzeit-Routing mit vollem Kontext',
        ],
        cta: 'Jeden Lead erfassen →',
        blogLabel: 'Warum Speed-to-Lead jeden Abschluss entscheidet →',
        engTitle: 'Lead-Erfassung',
        engMetricLabel: 'vereinte Kanäle',
      },
      {
        tag: '04',
        kicker: 'Laufende Einnahmen · Ø 42.5×',
        title: 'Bestehende Leads monetarisieren',
        body: 'Das KI Customer System hebt Profit aus Ihrem bestehenden CRM. WhatsApp-Broadcast-Kampagnen und KI-gestützte Re-Engagement-Sequenzen verwandeln inaktive Kontakte in Umsatz. Ø 42.5× ROI bei der ersten Kampagne.',
        list: [
          'WhatsApp-Broadcasts (Ø 42.5× ROI)',
          'Inaktive CRM-Reaktivierungsflows',
          'Verhaltensgetriggerte Sequenzen',
          'Segmentierung nach Intent, Lifecycle, Wert',
        ],
        cta: 'Meine bestehende Datenbank monetarisieren →',
        blogLabel: 'Das 42.5×-Broadcast-Playbook →',
        engTitle: 'Lead-Monetarisierung',
        engMetricLabel: 'Ø ROI',
      },
    ],
  } satisfies ServicesContent,

  faq: [
    {
      q: 'Was genau macht CreativeComplete für uns?',
      a: 'Wir fungieren als Ihr integriertes KI Customer System Team. Wir konfigurieren, bauen und verwalten vollständig die Infrastruktur, die Leads aus jedem Kanal erfasst, sie mit KI-Agenten in unter 60 Sekunden qualifiziert und Broadcast-Sequenzen auf Ihrer bestehenden Datenbank ausführt. Sie erhalten kein Tool, das Sie selbst herausfinden müssen. Sie bekommen ein Spezialistenteam, das das System von A bis Z betreibt. Ihr Team kümmert sich nur um die heißen Leads, die in Ihrem Kalender landen.',
    },
    {
      q: 'Wie qualifiziert KI Leads besser als ein menschliches Team?',
      a: 'KI-Agenten antworten in unter 60 Sekunden, 24/7, gleichzeitig auf allen Kanälen. Sie wenden jedes Mal dieselbe BANT-Qualifizierungslogik an. Intent, Budget, Timeline, Entscheidungsbefugnis. Ohne Ermüdung, Inkonsistenz oder verpasste Follow-ups. Unsere agenturkonfigurierten Agenten erzielen 81 % Lead-Conversion-Raten, verglichen mit dem Branchendurchschnitt von 20–30 % bei menschlichen Teams. Der Unterschied liegt nicht in der KI. Sondern in der Setup-Qualität. Das ist, was wir verantworten.',
    },
    {
      q: 'Welche Kanäle sind abgedeckt?',
      a: '40+ Kanäle: WhatsApp Business API, WhatsApp Calling, Instagram DM, TikTok Business Messaging, Facebook Messenger, Facebook Messenger Calls, E-Mail (Gmail, Outlook, Yahoo), SMS (Twilio, MessageBird, Vonage), Telegram, Viber, WeChat, LINE, VoIP und mehr. Jedes Gespräch. Unabhängig von der Quelle. Fließt in einen einheitlichen Team-Posteingang mit vollständiger Quellenzuordnung, Lead-Scores und Gesprächshistorie. Nichts fällt durchs Raster.',
    },
    {
      q: 'Wie schnell sehen wir Ergebnisse?',
      a: 'Ihre KI-Agenten können eingehende Leads innerhalb von 10 Tagen nach Projektstart bearbeiten. Ein vollständiger Systemaufbau. Qualifizierungsflows, Nurture-Sequenzen, Broadcast-Kampagnen, Creative-Produktion. Dauert 3–4 Wochen. Broadcast-Kampagnen auf Ihrem bestehenden CRM bringen typischerweise im ersten Monat ROI. Die meisten Kunden amortisieren die Investition innerhalb von 45 Tagen.',
    },
    {
      q: 'Müssen wir technisch versiert sein oder neue Mitarbeiter einstellen?',
      a: 'Nein. Das ist der Punkt. Wir sind Ihre KI-Abteilung. Wir konfigurieren jeden Workflow, verbinden jede Integration, schreiben jedes Qualifizierungsskript und übernehmen die laufende Optimierung. Sie erhalten einen monatlichen Performance-Bericht und einen dedizierten Account Manager. Das Einzige, was Ihr Team tut, ist die heißen Leads abzuschließen, die wir weiterleiten.',
    },
    {
      q: 'Wie hängt die Creative-Seite mit dem Gesprächssystem zusammen?',
      a: 'KI generiert wöchentlich 8–12 hochkonvertierende Anzeigenvarianten, trainiert auf $35 Mrd.+ Werbedaten. Die Creative Scoring KI bewertet sie vor dem Launch. Nur bewährte Gewinner gehen live. Diese Anzeigen leiten Leads direkt in das Gesprächssystem, wo KI-Agenten sie sofort qualifizieren. Bessere Creatives bringen bessere Leads. Bessere Qualifizierung konvertiert mehr davon. Wir managen beide Kreisläufe gemeinsam, sodass der ROAS jede Woche steigt.',
    },
    {
      q: 'Welchen ROI können wir realistischerweise erwarten?',
      a: 'Kunden-Medianwerte, keine Ausreißer: WhatsApp-Broadcast-Kampagnen erzielen Ø 42.5× ROI. KI-generierte Creatives liefern 14× mehr Conversions als manuell gestaltete Anzeigen. KI-Qualifizierung erreicht 81 % Lead-Conversion-Raten. Die meisten Agenturen amortisieren die Investition innerhalb von 45 Tagen. Wir teilen monatlich vollständige Attribution-Daten, damit Sie genau sehen, woher jedes Ergebnis kommt.',
    },
    {
      q: 'Wie verbindet es sich mit unserem bestehenden CRM?',
      a: 'Native Integrationen mit HubSpot, Salesforce, Pipedrive und 50+ CRMs. Plus Zapier für alles andere. Ihre bestehende Lead-Datenbank wird für Broadcast- und Re-Engagement-Kampagnen importiert. Ihr CRM bleibt das System of Record. Wir bauen darauf auf, ohne Ihre bestehenden Prozesse zu stören.',
    },
    {
      q: 'Was unterscheidet das von einem Freelancer oder Chatbot-Tool?',
      a: 'Freelancer bauen auf und gehen. Chatbot-Tools decken einen Kanal und einen Schritt ab. Wir sind ein laufendes, gemanagtes Spezialistenteam, das den gesamten Lead-Lebenszyklus besitzt. Erfassung, Qualifizierung, Creative-Produktion, Re-Engagement. Auf allen Kanälen, kontinuierlich optimiert. Sie erhalten die Leistung eines 5-köpfigen KI-Operations-Teams zu einem Bruchteil der Kosten, ohne den Management-Overhead.',
    },
  ] as FAQItem[],

  cta: {
    eyebrow: 'KI Customer System Agentur · 50+ Agenturen betreut',
    headline: 'Hören Sie auf, Leads zu verlieren,<br/><span class="v2-grad">für die Ihre Werbung bereits bezahlt hat.</span>',
    subline: 'Buchen Sie ein kostenloses 30-Minuten-Audit. Wir analysieren Ihren aktuellen Lead-Flow, berechnen Ihre genaue Umsatzlücke und zeigen Ihnen die exakte KI-Konfiguration für Ihre Agentur. Kostenlos, unverbindlich.',
    buttonText: 'Kostenloses Audit jetzt sichern',
    promises: [
      'Kein Pitch, außer Sie möchten ihn',
      'Individueller ROI-Schätzwert im Call',
      'Antwort innerhalb von 4 Stunden',
      '8 Audit-Plätze pro Monat, nur für Agenturen',
    ],
  } satisfies CTAContent,

  results: {
    eyebrow: 'Bewiesene Ergebnisse',
    title: 'Zahlen, die',
    titleGrad: 'für sich sprechen.',
    ctaSeeStudies: 'Fallstudien ansehen →',
    ctaWant: 'Diese Ergebnisse haben wollen →',
    items: [
      { n: '81%',   l: 'Lead-Conversion-Rate',   c: 'KI-Agenten rund um die Uhr' },
      { n: '60%',   l: 'Kürzere Verkaufszyklen',  c: 'vs. manuelle Qualifizierung' },
      { n: '42.5×', l: 'Ø Broadcast-ROI',         c: 'Aus bestehender Lead-Datenbank' },
      { n: '14×',   l: 'Mehr Werbe-Conversions',  c: 'KI-Creatives vs. manuelles Design' },
    ],
  } satisfies ResultsContent,

  endToEnd: {
    eyebrow: 'Der komplette Stack',
    title: 'KI Customer System,',
    titleGrad: 'von A bis Z.',
    lead: 'Ein System, das erfasst, konvertiert und hält. Vollständig von uns gemanagt.',
    bottomCta: 'Dieses System für meine Agentur aufbauen →',
    phases: [
      {
        name: 'Werbung erstellen',
        tool: 'KI-Creative-Engine',
        desc: 'KI generiert hochkonvertierende Bilder und Videos aus Ihrem Briefing. Trainiert auf $35 Mrd.+ realen Werbedaten. Creative Scoring prognostiziert Gewinner, bevor Sie einen Cent ausgeben.',
        features: [
          'Bilder & Videos. Jedes Format',
          'Creative Scoring KI. 90 %+ Genauigkeit',
          'A/B-Testing. Nur Gewinner skalieren',
          'Meta · TikTok · Google · LinkedIn',
          'Wöchentlich neue Creatives',
        ],
        blogLabel: 'Tiefer Einblick: KI-Werbemittel-Engine',
      },
      {
        name: 'Leads erfassen',
        tool: '40+ Kanäle',
        desc: 'Jeder Werbeklick, DM, Web-Besucher und Walk-in landet in einem einheitlichen Posteingang. Null verpasste Leads über alle 40+ Kanäle.',
        features: [
          'Erfassung über Werbeanzeigen',
          'Erfassung über Social Media',
          'Erfassung über Website',
          'Erfassung offline',
        ],
        blogLabel: 'Tiefer Einblick: WhatsApp Lead-Generierung',
      },
      {
        name: 'Leads konvertieren',
        tool: 'KI-Agenten',
        desc: 'KI-Agenten qualifizieren Leads in unter 60 Sekunden, leiten heiße Interessenten an Ihr Team weiter und buchen Termine. Automatisch.',
        features: [
          'KI-Agenten ✨. 24/7-Qualifizierung',
          'Team-Inbox. Voller Kontext, kein CRM-Wechsel',
          'Leads qualifizieren. BANT in jeder Sprache',
          'Leads routen. Richtiger Rep, richtige Zeit',
          'Termine buchen. Im Gespräch',
        ],
        blogLabel: 'Tiefer Einblick: KI-Verkaufsagenten',
      },
      {
        name: 'Kunden halten',
        tool: 'Broadcasts',
        desc: 'Einmalkäufer in wiederkehrende Einnahmen verwandeln. Automatisierte Sequenzen, smarte Broadcasts und Zufriedenheitsumfragen. Alles im Chat.',
        features: [
          'Konversationaler Support. Immer verfügbar',
          'Aktionen & Newsletter. Ø 42.5× ROI',
          'Erinnerungen zur Vertragsverlängerung. Automatisiert',
          'CSAT & NPS-Umfragen. Im Chat',
        ],
        blogLabel: 'Tiefer Einblick: WhatsApp-Broadcasts (42.5× ROI)',
      },
    ],
    strip: [
      { n: '60s',   l: 'KI-Antwortzeit' },
      { n: '40+',   l: 'vereinte Kanäle' },
      { n: '90%+',  l: 'Creative-Genauigkeit' },
      { n: '42.5×', l: 'Broadcast-ROI' },
      { n: '$35B+', l: 'Werbedaten trainiert' },
    ],
  } satisfies EndToEndContent,

  testimonials: {
    eyebrow: 'Kundenergebnisse',
    readCaseStudy: 'Fallstudie lesen →',
    joinCta: 'Jetzt einsteigen →',
  } satisfies TestimonialsContent,

  blogScroll: {
    eyebrow: 'Aus dem Blog',
    title: 'Leitfäden, die',
    titleGrad: 'Abschlüsse bringen.',
    seeAll: 'Alle Artikel',
    viewAll: 'Alle Artikel ansehen',
    readLabel: 'Lesen',
  } satisfies BlogScrollContent,

  bookingSection: {
    eyebrow: 'Direkt buchen',
    title: 'Wählen Sie einen passenden Termin.',
    titleGrad: 'Den Rest erledigen wir.',
    lead: '30 Minuten. Wir analysieren Ihr aktuelles Setup, berechnen Ihre Umsatzlücke und zeigen Ihnen genau, was das KI Customer System für Ihre Agentur generieren würde.',
    pills: [
      { label: 'Kostenloses Audit', sub: '30 Minuten' },
      { label: 'Schnelle Antwort',  sub: 'Innerhalb von 4 Stunden' },
      { label: 'Unverbindlich',     sub: 'Jederzeit absagbar' },
      { label: 'Nur Agenturen',     sub: 'Qualifizierte Calls' },
    ],
  } satisfies BookingSectionContent,

  clients: {
    label: 'Betrieben mit',
  } satisfies ClientsContent,
};

// ─── Slovenian ────────────────────────────────────────────────────────────────

const sl = {
  hero: {
    badge: 'AI Customer System, v živo',
    h1Line1: 'Izkoristite celoten potencial vsakega leada',
    h1Line2: 'Brez povečevanja ekipe',
    subtitle: 'Zgradimo, upravljamo in prevzamemo lastništvo AI kampanje od oglasa do pogovora. Vi prejmete samo rezultate.',
    ctaPrimary: 'Pridobite brezplačen sistemski pregled',
    ctaSecondary: 'Poglejte, kako deluje',
    trustText: 'zaupa AI Customer Systemu',
  } satisfies HeroContent,

  stats: {
    items: [
      { n: '81%',   l: 'Stopnja konverzije leadov',   c: 'Z AI agenti, ki kvalificirajo 24/7' },
      { n: '60%',   l: 'Hitrejši prodajni cikli',     c: 'v primerjavi z ročno kvalifikacijo' },
      { n: '42.5×', l: 'ROI broadcast kampanj',       c: 'Iz obstoječe baze leadov' },
      { n: '14×',   l: 'Več konverzij iz oglasov',    c: 'AI kreative vs. ročno oblikovanje' },
    ],
    cta: 'Pridobi te številke za mojo agencijo →',
  } satisfies StatsContent,

  track: {
    eyebrow: 'Kako začnemo',
    title: 'Od prvega klica do',
    titleGrad: 'živega sistema',
    titleSuffix: ' v dneh, ne mesecih.',
    cta: 'Rezerviraj strateški klic →',
    steps: [
      { label: 'Rezerviraj klic',        desc: 'Brezplačen sistemski pregled. 30 minut, brez pritiska.' },
      { label: 'Odgovorite na vprašanja', desc: 'Spoznamo vaše podjetje, kanale, cilje in trenutni tok leadov.' },
      { label: 'Določimo mesečno ceno',   desc: 'Ena fiksna mesečna cena. Brez presenečenj, skritih stroškov ali cen po sedežih.' },
      { label: 'Vzpostavitev sistema',    desc: 'Zgradimo, povežemo in namestimo celoten AI Customer System. Vi ne naredite ničesar.' },
      { label: 'Vi zmagate',              desc: 'Leadi se kvalificirajo sami. Vroči leadi rezervirajo. Vaš CRM konvertira na avtopilotu.' },
    ],
  } satisfies TrackContent & { titleSuffix: string },

  services: {
    eyebrow: 'Kaj počnemo',
    title: 'Štirje motorji.',
    lead: 'Zajamemo vsak lead, ga konvertiramo z AI in zadržimo z avtomatiziranimi sledilnimi sporočili. Večina agencij vsako fazo obravnava ločeno. Mi smo lastniki celotnega življenjskega cikla.',
    bottomCta: 'Aktiviraj vse 4 motorje →',
    services: [
      {
        tag: '01',
        kicker: 'Pod 60 sekund · 24/7',
        title: 'AI kvalifikacija leadov',
        body: 'AI Customer System samodejno kvalificira vsak dohodni lead z AI agenti. Ocenjevanje namena, proračuna in časovnice v manj kot 60 sekundah prek WhatsApp, Instagram, TikTok, Facebook in 8+ dodatnih kanalov.',
        list: [
          'AI agenti skrbijo za prvi stik 24/7',
          'BANT kvalifikacija v vsakem jeziku',
          'Vroči leadi → prodajni koledar takoj',
          '80 % rutinskih povpraševanj avtomatizirano',
        ],
        cta: 'Kvalificiraj moje leade z AI →',
        blogLabel: 'Kako deluje AI kvalifikacija →',
        engTitle: 'AI kvalifikacija leadov',
        engMetricLabel: 'povp. čas kvalifikacije',
      },
      {
        tag: '02',
        kicker: '$35 mrd.+ treniranih · Tedenska produkcija',
        title: 'AI oglaševalski kreativni sistem',
        body: 'AI Customer System ustvarja visoko konverzivne oglaševalske kreative, trenirane na $35 mrd.+ podatkov o oglaševalski porabi. AI za ocenjevanje kreativ napove zmagovalce z več kot 90 % natančnostjo. Preden porabite en cent.',
        list: [
          'Kreative v minutah, ne dneh',
          'Trenirano na $35 mrd.+ resničnih oglaševalskih podatkov',
          'AI za ocenjevanje kreativ, 90 %+ natančnost',
          'Meta, TikTok, Google, LinkedIn',
        ],
        cta: 'Ustvari zmagovalne kreative →',
        blogLabel: '6 AI kreativnih sistemov →',
        engTitle: 'AI kreativni sistem',
        engMetricLabel: 'natančnost napovedi',
      },
      {
        tag: '03',
        kicker: '40+ kanalov · Nič zamujenih leadov',
        title: 'Zajem in konverzija leadov',
        body: 'AI Customer System združi WhatsApp, Instagram, TikTok, Facebook, e-pošto, SMS in spletni klepet v eno mapo. Zajamite vsak lead, ga konvertirajte z AI in zadržite s pametnimi zaporedji.',
        list: [
          'Enotna mapa: 40+ kanalov',
          'WhatsApp Business API integracija',
          'Okvir Conversation-Led Growth™',
          'Usmerjanje v realnem času s polnim kontekstom',
        ],
        cta: 'Zajami vsak lead →',
        blogLabel: 'Zakaj hitrost do leada odloči vsako prodajo →',
        engTitle: 'Zajem leadov',
        engMetricLabel: 'združenih kanalov',
      },
      {
        tag: '04',
        kicker: 'Tekoči prihodki · Povp. 42.5×',
        title: 'Monetizacija obstoječih leadov',
        body: 'AI Customer System pridobiva profit iz vašega obstoječega CRM-a. WhatsApp broadcast kampanje in AI zaporedja za reaktivacijo pretvorijo neaktivne kontakte v prihodke. Povprečno 42.5× ROI pri prvi kampanji.',
        list: [
          'WhatsApp broadcasts (povp. 42.5× ROI)',
          'Tokovi za reaktivacijo neaktivnega CRM-a',
          'Zaporedja sprožena z vedenjem',
          'Segmentacija po namenu, življenjskem ciklu, vrednosti',
        ],
        cta: 'Monetiziraj mojo obstoječo bazo →',
        blogLabel: 'Priročnik za 42.5× broadcast →',
        engTitle: 'Monetizacija leadov',
        engMetricLabel: 'povp. ROI',
      },
    ],
  } satisfies ServicesContent,

  faq: [
    {
      q: 'Kaj točno naredi CreativeComplete za nas?',
      a: 'Nastopamo kot vaša vgrajena ekipa AI Customer Systema. Konfiguriramo, zgradimo in v celoti upravljamo infrastrukturo, ki zajema leade z vsakega kanala, jih kvalificira z AI agenti v manj kot 60 sekundah in izvaja broadcast zaporedja na vaši obstoječi bazi. Ne dobite orodja, ki bi ga morali sami ugotavljati. Dobite specializirano ekipo, ki upravlja sistem od začetka do konca. Vaša ekipa se ukvarja samo z vročimi leadi, ki pristanejo v vašem koledarju.',
    },
    {
      q: 'Kako AI kvalificira leade bolje kot človeška ekipa?',
      a: 'AI agenti odgovarjajo v manj kot 60 sekundah, 24/7, na vseh kanalih hkrati. Vsakič aplicirajo enako BANT kvalifikacijsko logiko. Namen, proračun, časovnico, odločevalca. Brez utrujenosti, nedoslednosti ali zamujenih sledilnih sporočil. Naši agencijsko konfigurirani agenti dosegajo 81 % stopnjo konverzije leadov v primerjavi z industrijskim povprečjem 20–30 % za človeške ekipe. Razlika ni v AI. Je v kakovosti nastavitve. To je tisto, kar mi zagotavljamo.',
    },
    {
      q: 'Katere kanale pokriva?',
      a: '40+ kanalov: WhatsApp Business API, WhatsApp Calling, Instagram DM, TikTok Business Messaging, Facebook Messenger, Facebook Messenger Calls, e-pošta (Gmail, Outlook, Yahoo), SMS (Twilio, MessageBird, Vonage), Telegram, Viber, WeChat, LINE, VoIP in več. Vsak pogovor. Ne glede na vir. Se prelije v enotno timsko mapo s popolno atribucijo vira, ocenami leadov in zgodovino pogovorov. Nič ne pade skozi razpoke.',
    },
    {
      q: 'Kako hitro bomo videli rezultate?',
      a: 'Vaši AI agenti lahko obravnavajo dohodne leade v 10 dneh po začetku. Celoten sistemski razvoj. Kvalifikacijski tokovi, negovalná zaporedja, broadcast kampanje, produkcija kreativ. Traja 3–4 tedne. Broadcast kampanje na vašem obstoječem CRM-u tipično povrnejo ROI v prvem mesecu. Večina strank povrne celotno naložbo v 45 dneh.',
    },
    {
      q: 'Ali moramo biti tehnično podkovani ali zaposliti koga novega?',
      a: 'Ne. To je bistvo. Mi smo vaš AI oddelek. Konfiguriramo vsak potek dela, povežemo vsako integracijo, napišemo vsako kvalifikacijsko skripto in upravljamo tekočo optimizacijo. Prejmete mesečno poročilo o zmogljivosti in namenskega account managerja. Edina stvar, ki jo vaša ekipa naredi, je zaključiti vroče leade, ki jim jih mi usmerimo.',
    },
    {
      q: 'Kako je kreativna stran povezana s sistemom pogovorov?',
      a: 'AI tedensko ustvari 8–12 visoko konverzivnih oglasnih različic, treniranih na $35 mrd.+ oglaševalskih podatkov. AI za ocenjevanje kreativ jih razvrsti pred objavo. V živo gredo samo dokazani zmagovalci. Ti oglasi vodijo leade neposredno v sistem pogovorov, kjer jih AI agenti takoj kvalificirajo. Boljše kreative prinašajo boljše leade. Boljša kvalifikacija konvertira več. Oba kroga upravljamo skupaj, tako da se ROAS vsak teden povečuje.',
    },
    {
      q: 'Kakšen ROI lahko realistično pričakujemo?',
      a: 'Mediane strank, ne izjeme: WhatsApp broadcast kampanje dosegajo povprečno 42.5× ROI. AI ustvarjene kreative zagotavljajo 14× več konverzij v primerjavi z ročno oblikovanimi oglasi. AI kvalifikacija dosega 81 % stopnjo konverzije leadov. Večina agencij povrne celotno naložbo v 45 dneh. Mesečno delimo popolne podatke o atribuciji, tako da točno vidite, od kod prihaja vsak rezultat.',
    },
    {
      q: 'Kako se poveže z našim obstoječim CRM-om?',
      a: 'Nativne integracije z HubSpot, Salesforce, Pipedrive in 50+ CRM-i. Plus Zapier za vse ostalo. Vaša obstoječa baza leadov se uvozi za broadcast in reaktivacijske kampanje. Vaš CRM ostane sistem za evidentiranje. Mi gradimo na njem, ne da bi motili vaše trenutne procese.',
    },
    {
      q: 'Kaj to loči od najemanja freelancerja za avtomatizacijo ali chatbot orodja?',
      a: 'Freelancerji nastavijo in gredo. Chatbot orodja pokrivajo en kanal in en korak. Mi smo trajna, upravljana specializirana ekipa, ki je lastnik celotnega življenjskega cikla leadov. Zajem, kvalifikacija, produkcija kreativ, reaktivacija. Na vseh kanalih, neprekinjeno optimizirano. Dobite učinek 5-članske AI operativne ekipe za delček stroškov, brez upravljalskega bremena.',
    },
  ] as FAQItem[],

  cta: {
    eyebrow: 'AI Customer System Agencija · 50+ agencij',
    headline: 'Prenehajte izgubljati leade,<br/><span class="v2-grad">za katere ste že plačali z oglasi.</span>',
    subline: 'Rezervirajte brezplačen 30-minutni pregled. Analiziramo vaš trenutni tok leadov, izračunamo vašo natančno izgubo prihodkov in vam pokažemo natančno AI konfiguracijo za vašo agencijo. Brez stroškov, brez obveznosti.',
    buttonText: 'Zahtevaj brezplačen pregled zdaj',
    promises: [
      'Brez prodajnega pritiska, razen če ga želite',
      'Individualna ocena ROI na klicu',
      'Odgovor v 4 urah',
      '8 mest za pregled mesečno, samo za agencije',
    ],
  } satisfies CTAContent,

  results: {
    eyebrow: 'Dokazani rezultati',
    title: 'Številke, ki',
    titleGrad: 'govorijo same zase.',
    ctaSeeStudies: 'Poglej študije primerov →',
    ctaWant: 'Hočem te rezultate →',
    items: [
      { n: '81%',   l: 'Stopnja konverzije leadov',  c: 'AI agenti kvalificirajo 24/7' },
      { n: '60%',   l: 'Hitrejši prodajni cikli',    c: 'v primerjavi z ročno kvalifikacijo' },
      { n: '42.5×', l: 'Povp. ROI broadcastov',      c: 'Iz obstoječe baze leadov' },
      { n: '14×',   l: 'Več konverzij iz oglasov',   c: 'AI kreative vs. ročno oblikovanje' },
    ],
  } satisfies ResultsContent,

  endToEnd: {
    eyebrow: 'Celoten sklad',
    title: 'AI Customer System,',
    titleGrad: 'od začetka do konca.',
    lead: 'En sistem, ki zajema, konvertira in zadržuje. V celoti upravljan pri nas.',
    bottomCta: 'Zgradi ta sistem za mojo agencijo →',
    phases: [
      {
        name: 'Ustvari oglase',
        tool: 'AI kreativni sistem',
        desc: 'AI ustvarja visoko konverzivne slike in videe na podlagi vašega briefinga. Treniran na $35 mrd.+ resničnih oglaševalskih podatkih. Creative Scoring napove zmagovalce, preden porabite en cent.',
        features: [
          'Slike in videi. Vsak format',
          'AI za ocenjevanje kreativ. 90 %+ natančnost',
          'A/B testiranje. Skaliranje samo zmagovalcev',
          'Meta · TikTok · Google · LinkedIn',
          'Tedensko sveže kreative',
        ],
        blogLabel: 'Poglobljeno: AI oglaševalski kreativni sistem',
      },
      {
        name: 'Zajemi leade',
        tool: '40+ kanalov',
        desc: 'Vsak klik na oglas, DM, spletni obiskovalec in obisk fizično pristane v enotni mapi. Nič zamujenih leadov na vseh 40+ kanalih.',
        features: [
          'Zajem iz oglasov',
          'Zajem iz socialnih omrežij',
          'Zajem s spletnega mesta',
          'Zajem offline',
        ],
        blogLabel: 'Poglobljeno: WhatsApp generiranje leadov',
      },
      {
        name: 'Konvertiraj leade',
        tool: 'AI agenti',
        desc: 'AI agenti kvalificirajo leade v manj kot 60 sekundah, usmerijo vroče prospects k vaši ekipi in rezervirajo termine. Samodejno.',
        features: [
          'AI agenti ✨. 24/7 kvalifikacija',
          'Timska mapa. Poln kontekst, brez menjave CRM-a',
          'Kvalifikacija leadov. BANT v vsakem jeziku',
          'Usmerjanje leadov. Pravi zastopnik, pravi čas',
          'Rezervacija terminov. V pogovoru',
        ],
        blogLabel: 'Poglobljeno: AI prodajni agenti',
      },
      {
        name: 'Zadržuj stranke',
        tool: 'Broadcasts',
        desc: 'Enkratne kupce spremenite v ponavljajoče se prihodke. Avtomatizirana zaporedja, pametni broadcasts in ankete o zadovoljstvu. Vse v pogovoru.',
        features: [
          'Pogovorna podpora. Vedno na voljo',
          'Promocije in glasila. Povp. 42.5× ROI',
          'Opomniki za obnovo. Avtomatizirana zaporedja',
          'Ankete CSAT & NPS. V klepetu',
        ],
        blogLabel: 'Poglobljeno: WhatsApp broadcasts (42.5× ROI)',
      },
    ],
    strip: [
      { n: '60s',   l: 'Čas odziva AI' },
      { n: '40+',   l: 'združenih kanalov' },
      { n: '90%+',  l: 'natančnost kreativ' },
      { n: '42.5×', l: 'ROI broadcastov' },
      { n: '$35B+', l: 'treniranih oglaševalskih podatkov' },
    ],
  } satisfies EndToEndContent,

  testimonials: {
    eyebrow: 'Rezultati strank',
    readCaseStudy: 'Preberi študijo primera →',
    joinCta: 'Pridruži se nam →',
  } satisfies TestimonialsContent,

  blogScroll: {
    eyebrow: 'Iz bloga',
    title: 'Vodniki, ki',
    titleGrad: 'sklenejo posle.',
    seeAll: 'Vsi članki',
    viewAll: 'Prikaži vse članke',
    readLabel: 'Beri',
  } satisfies BlogScrollContent,

  bookingSection: {
    eyebrow: 'Rezervirajte neposredno',
    title: 'Izberite ustrezen termin.',
    titleGrad: 'Ostalo naredimo mi.',
    lead: '30 minut. Pregledamo vaše trenutno nastavitev, izračunamo vašo izgubo prihodkov in vam pokažemo točno to, kar bi AI Customer System ustvaril za vašo agencijo.',
    pills: [
      { label: 'Brezplačen pregled', sub: '30 minut' },
      { label: 'Hiter odgovor',      sub: 'V 4 urah' },
      { label: 'Brez obveznosti',    sub: 'Kadar koli odpovejte' },
      { label: 'Samo agencije',      sub: 'Kvalificirani klici' },
    ],
  } satisfies BookingSectionContent,

  clients: {
    label: 'Poganja',
  } satisfies ClientsContent,
};

// ─── Export helper ────────────────────────────────────────────────────────────

const translations = { en, de, sl } as const;

export function getV2Content(lang: Lang = 'en') {
  return translations[lang] ?? translations.en;
}

export default getV2Content;
