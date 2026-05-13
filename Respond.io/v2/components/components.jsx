/* ============================================================
   CreativeComplete v2 — Page Components
   New design: Space Dark · Indigo / Cyan · Split layouts
   In Astro → src/components/v2/{Nav,Hero,Clients,Stats,
               Services,Process,Results,Testimonials,FAQ,CTA,Footer}.astro
   ============================================================ */

const { useState } = React;

/* ----- Icons ----------------------------------------------- */
const ArrowRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ChevronRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ----- Logo ------------------------------------------------- */
const V2Logo = () => (
  <a href="index.html" style={{ display:"inline-flex", alignItems:"center", gap:10, textDecoration:"none" }}>
    <span style={{
      width:32, height:32, borderRadius:8,
      background:"linear-gradient(135deg,#6366f1,#a855f7)",
      display:"inline-flex", alignItems:"center", justifyContent:"center",
      boxShadow:"0 6px 20px rgba(99,102,241,0.45)", position:"relative",
    }}>
      <span style={{ fontFamily:"var(--font-mono)", fontSize:13, fontWeight:700, color:"#fff" }}>CC</span>
    </span>
    <span style={{ fontFamily:"var(--font-display)", fontSize:20, letterSpacing:"-0.02em", color:"var(--fg-0)" }}>
      Creative<span style={{ background:"linear-gradient(135deg,#6366f1,#22d3ee)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Complete</span>
    </span>
  </a>
);

/* ----- Nav -------------------------------------------------- */
const V2Nav = ({ active = "home" }) => {
  const links = [
    { id:"home",     label:"Home",          href:"index.html" },
    { id:"services", label:"Services",      href:"#services" },
    { id:"process",  label:"How it works",  href:"#process" },
    { id:"results",  label:"Results",       href:"#results" },
    { id:"blog",     label:"Blog",          href:"blogs.html" },
  ];
  return (
    <nav className="v2-nav">
      <div className="v2-container v2-nav__inner">
        <div className="v2-nav__logo"><V2Logo /></div>
        <ul className="v2-nav__links">
          {links.map(l => (
            <li key={l.id}>
              <a href={l.href} className={active === l.id ? "active" : ""}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="v2-nav__right">
          <span className="v2-nav__badge">🏆 #1 AI Agency</span>
          <a href="#book" className="v2-btn v2-btn-primary" style={{ height:40, padding:"0 18px", fontSize:14 }}>
            Free audit <span className="arrow"><ArrowRight /></span>
          </a>
        </div>
        <button className="v2-nav__menu" aria-label="Menu"><span/><span/><span/></button>
      </div>
    </nav>
  );
};

/* ----- Hero (split layout) ---------------------------------- */
const V2Hero = () => (
  <section className="v2-hero">
    <div className="v2-container">
      <div className="v2-hero__inner">

        {/* Left */}
        <div className="v2-hero__left">
          <div className="v2-hero__badge">
            <span className="v2-hero__badge-dot"/>
            <span className="v2-hero__badge-text">AI Customer System — Live</span>
          </div>

          <h1 className="v2-h1">
            AI Customer System<br/>
            that <span className="v2-grad">qualifies, converts</span><br/>
            &amp; profits.
          </h1>

          <p className="v2-lead">
            AI Customer System that qualifies new leads in under 60 seconds, converts them with
            AI-generated creatives, and turns your existing lead database into recurring revenue.
            We are the <strong style={{ color:"var(--fg-0)" }}>#1 AI Customer System agency</strong>.
          </p>

          <div className="v2-hero__actions">
            <a href="#book" className="v2-btn v2-btn-primary">
              Get free system audit <span className="arrow"><ArrowRight /></span>
            </a>
            <a href="#process" className="v2-btn v2-btn-outline">
              See how it works
            </a>
          </div>

          <div className="v2-hero__trust">
            <div className="v2-hero__avatars">
              <span/><span/><span/><span/>
            </div>
            <span className="v2-hero__trust-text">
              <strong style={{ color:"var(--fg-0)" }}>50+ agencies</strong> trust AI Customer System
            </span>
          </div>

          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            <span className="v2-chip">Respond.io Partner</span>
            <span className="v2-chip-cyan">AdCreative.ai Partner</span>
          </div>
        </div>

        {/* Right — dashboard card */}
        <div className="v2-hero__right">
          {/* Floating badges */}
          <div className="v2-hero__float float-tl">
            <div className="v2-hero__float-num">81%</div>
            <div className="v2-hero__float-label">Lead conversion rate</div>
          </div>
          <div className="v2-hero__float float-br">
            <div className="v2-hero__float-num" style={{ color:"var(--c2)" }}>42.5×</div>
            <div className="v2-hero__float-label">Broadcast ROI</div>
          </div>

          <div className="v2-hero__card">
            <div className="v2-dash-header">
              <div className="v2-dash-header__title">
                <span style={{ width:8, height:8, borderRadius:"50%", background:"var(--c1)", boxShadow:"0 0 8px var(--glow-1)", display:"inline-block" }}/>
                AI Customer System
              </div>
              <div className="v2-dash-header__live">Live · 247 leads today</div>
            </div>

            <div className="v2-dash-metrics">
              {[
                { n:"< 60s", l:"First response" },
                { n:"81%",   l:"Qualified" },
                { n:"14×",   l:"Ad conversions" },
              ].map(m => (
                <div key={m.l} className="v2-dash-metric">
                  <div className="v2-dash-metric__n">{m.n}</div>
                  <div className="v2-dash-metric__l">{m.l}</div>
                </div>
              ))}
            </div>

            <div className="v2-dash-feed">
              {[
                { init:"S", name:"Sarah K.", src:"WhatsApp · Meta ad", score:91, tag:"hot" },
                { init:"M", name:"Marc B.",  src:"Instagram DM",       score:74, tag:"warm" },
                { init:"E", name:"Emma R.",  src:"TikTok Lead",        score:62, tag:"warm" },
                { init:"?", name:"Unknown",  src:"Facebook Form",      score:18, tag:"cold" },
              ].map(l => (
                <div key={l.name} className="v2-dash-lead">
                  <div className="v2-dash-lead__icon">{l.init}</div>
                  <div className="v2-dash-lead__info">
                    <div className="v2-dash-lead__name">{l.name}</div>
                    <div className="v2-dash-lead__src">{l.src}</div>
                  </div>
                  <div className={`v2-dash-lead__score ${l.tag}`}>
                    {l.score > 80 ? "HOT" : l.score > 50 ? "WARM" : "COLD"} · {l.score}
                  </div>
                </div>
              ))}
            </div>

            <div className="v2-dash-footer">
              ✓ All leads responded in &lt;60s · AI Customer System active
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

/* ----- Client / tool strip ---------------------------------- */
const V2Clients = () => (
  <section className="v2-clients">
    <div className="v2-container">
      <div className="v2-clients__inner">
        <span className="v2-clients__label">Powered by</span>
        <div className="v2-clients__row">
          {["Respond.io","AdCreative.ai","WhatsApp Business API","Meta Ads","TikTok Ads","Google Ads","HubSpot","Salesforce","Zapier"].map(t => (
            <span key={t} className="v2-clients__item">{t}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ----- Stats strip ------------------------------------------ */
const V2Stats = () => {
  const stats = [
    { n:"81%",   l:"Lead conversion rate",       c:"With Respond.io AI Agents" },
    { n:"60%",   l:"Faster sales cycles",         c:"vs. manual qualification" },
    { n:"42.5×", l:"Broadcast campaign ROI",      c:"From existing lead database" },
    { n:"14×",   l:"More ad conversions",         c:"With AdCreative.ai creatives" },
  ];
  return (
    <section className="v2-stats-strip">
      <div className="v2-container">
        <div className="v2-stats-strip__grid">
          {stats.map((s, i) => (
            <div key={i} className="v2-stats-strip__cell">
              <div className="v2-stats-strip__n">{s.n}</div>
              <div className="v2-stats-strip__l">{s.l}</div>
              <div className="v2-stats-strip__c">{s.c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ----- Services --------------------------------------------- */
const V2Services = () => {
  const services = [
    {
      icon: "🤖", tag:"01",
      title: "AI Lead Qualification",
      body: "AI Customer System qualifies every inbound lead 24/7 via Respond.io AI Agents — intent, budget, timeline — scored in under 60 seconds across WhatsApp, Instagram, TikTok, Facebook, and 8+ more channels.",
      list: ["AI Agents handle first touch 24/7", "BANT qualification in every language", "Hot leads → sales calendar instantly", "80% of routine inquiries automated"],
    },
    {
      icon: "🎨", tag:"02",
      title: "AI Ad Creative Engine",
      body: "AI Customer System generates high-converting ad creatives with AdCreative.ai — trained on $35B+ in ad spend data. Creative Scoring AI (90%+ accuracy) predicts winners before you spend a cent.",
      list: ["Creatives in minutes, not days", "Trained on $35B+ real ad spend data", "Creative Scoring AI — 90%+ accuracy", "Meta, TikTok, Google, LinkedIn"],
    },
    {
      icon: "📡", tag:"03",
      title: "Omnichannel Lead Capture",
      body: "AI Customer System unifies WhatsApp, Instagram, TikTok, Facebook, email, SMS, and web chat into one Respond.io inbox. Conversation-Led Growth™ across every channel your leads actually use.",
      list: ["Unified inbox: 12+ channels", "WhatsApp Business API integration", "Conversation-Led Growth™ framework", "Real-time routing with full context"],
    },
    {
      icon: "💰", tag:"04",
      title: "Existing Lead Monetization",
      body: "AI Customer System mines your existing CRM. WhatsApp broadcast campaigns and AI-powered re-engagement sequences turn dormant contacts into revenue — averaging 42.5× ROI on the first campaign.",
      list: ["WhatsApp broadcasts (avg. 42.5× ROI)", "Dormant CRM re-engagement flows", "Behavior-triggered sequences", "Segment by intent, lifecycle, value"],
    },
  ];
  return (
    <section className="v2-services v2-section" id="services">
      <div className="v2-container">
        <div className="v2-section-head center">
          <span className="v2-eyebrow">What we do</span>
          <h2 className="v2-h2">
            AI Customer System: <span className="v2-grad">four engines.</span>
          </h2>
          <p className="v2-lead">
            AI Customer System covers the full lead lifecycle — capture, qualify, convert, monetize.
            Most agencies handle each stage separately. We close every gap.
          </p>
        </div>
        <div className="v2-services__grid">
          {services.map(s => (
            <div key={s.tag} className="v2-service">
              <div className="v2-service__icon-wrap">{s.icon}</div>
              <div className="v2-service__tag">{s.tag}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul className="v2-service__list">
                {s.list.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ----- Process (vertical timeline + sticky visual) ---------- */
const V2Process = () => {
  const steps = [
    {
      id:"capture", kicker:"Step 01 · Any channel",
      title:"Lead captured across every channel",
      body:"Every new lead — from WhatsApp, TikTok ad, Instagram DM, Facebook form, or web chat — enters the AI Customer System instantly. All conversations appear in one Respond.io inbox with full source attribution.",
      visual:"capture",
    },
    {
      id:"qualify", kicker:"Step 02 · Under 60 seconds",
      title:"AI scores and routes every lead",
      body:"Respond.io AI Agents run BANT qualification: intent, budget, timeline, authority. Hot leads get booked into your sales calendar with full context. Cold leads enter a 90-day AI nurture sequence automatically.",
      visual:"qualify",
    },
    {
      id:"creative", kicker:"Step 03 · Weekly production",
      title:"AI creatives that predict performance",
      body:"AdCreative.ai generates 8–12 ad variants weekly, trained on $35B+ in spend data. Creative Scoring AI ranks them before launch. Winners get scaled automatically. Your creative ROAS compounds every week.",
      visual:"creative",
    },
    {
      id:"monetize", kicker:"Step 04 · Ongoing revenue",
      title:"Existing database turned into profit",
      body:"Your CRM holds leads you already paid for. AI Customer System runs segmented WhatsApp broadcasts and re-engagement flows that average 42.5× ROI. Dormant contacts become your highest-margin revenue stream.",
      visual:"monetize",
    },
  ];

  const [active, setActive] = useState(0);
  const cur = steps[active];

  const visuals = {
    capture: (
      <div>
        <div className="v2-pv-header">
          <div className="v2-pv-title">
            <span style={{ width:8, height:8, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 8px #22c55e", display:"inline-block" }}/>
            Unified inbox — live
          </div>
          <span className="v2-chip" style={{ fontSize:9 }}>247 today</span>
        </div>
        <div className="v2-pv-channels">
          {[
            { name:"WhatsApp Business",  count:"94 leads",  cls:"on",  active:true  },
            { name:"Instagram DM",       count:"62 leads",  cls:"ind", active:false },
            { name:"TikTok Lead Gen",    count:"43 leads",  cls:"ind", active:false },
            { name:"Facebook Messenger", count:"31 leads",  cls:"on",  active:false },
            { name:"Web Chat",           count:"17 leads",  cls:"on",  active:false },
          ].map(c => (
            <div key={c.name} className={`v2-pv-channel ${c.active ? "active" : ""}`}>
              <span className={`v2-pv-channel__dot ${c.cls}`}/>
              <span className="v2-pv-channel__name">{c.name}</span>
              <span className="v2-pv-channel__count">{c.count}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    qualify: (
      <div>
        <div className="v2-pv-header">
          <div className="v2-pv-title">Lead qualification scores</div>
          <span className="v2-chip-cyan" style={{ fontSize:9 }}>AI scoring</span>
        </div>
        <div className="v2-pv-scores">
          {[
            { name:"Sarah K.",  val:91, label:"HOT · Booked Thu 3pm" },
            { name:"Marc B.",   val:74, label:"WARM · Day 3 nurture" },
            { name:"Emma R.",   val:62, label:"WARM · Day 1 nurture" },
            { name:"Unknown",   val:18, label:"COLD · 30d re-engage" },
          ].map(s => (
            <div key={s.name}>
              <div className="v2-pv-score">
                <span className="v2-pv-score__name">{s.name}</span>
                <div className="v2-pv-score__bar">
                  <div className="v2-pv-score__fill" style={{ width:`${s.val}%` }}/>
                </div>
                <span className="v2-pv-score__val">{s.val}</span>
              </div>
              <div style={{ fontSize:11, color:"var(--fg-2)", paddingLeft:0, marginTop:2, marginBottom:6 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop:16, padding:"10px 14px", background:"rgba(99,102,241,0.06)", borderRadius:10, border:"1px solid rgba(99,102,241,0.2)", fontSize:12, color:"var(--fg-1)" }}>
          <span style={{ color:"var(--c1-light)", fontWeight:700 }}>81%</span> qualification rate · Avg. response: 34s
        </div>
      </div>
    ),
    creative: (
      <div>
        <div className="v2-pv-header">
          <div className="v2-pv-title">Weekly creative batch</div>
          <span className="v2-chip-cyan" style={{ fontSize:9 }}>AdCreative.ai</span>
        </div>
        <div className="v2-pv-creatives">
          {[
            { score:"97", win:true  },
            { score:"89", win:true  },
            { score:"78", win:false },
            { score:"72", win:false },
            { score:"91", win:true  },
            { score:"65", win:false },
          ].map((c, i) => (
            <div key={i} className={`v2-pv-creative ${c.win ? "win" : ""}`}>
              <div className="v2-pv-creative__img"/>
              <div className="v2-pv-creative__score">{c.win ? "▲" : "▼"} {c.score}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop:12, fontSize:12, color:"var(--fg-1)", textAlign:"center" }}>
          Creative Scoring AI · 3 winners scaling · 3 paused
        </div>
      </div>
    ),
    monetize: (
      <div>
        <div className="v2-pv-header">
          <div className="v2-pv-title">Broadcast campaign</div>
          <span className="v2-chip-cyan" style={{ fontSize:9 }}>ROI: 42.5×</span>
        </div>
        <div className="v2-pv-broadcast">
          {[
            { label:"CRM audit + segmentation",       status:"DONE", dot:"dot-on" },
            { label:"WhatsApp broadcast — offer #1",  status:"SENT", dot:"dot-on" },
            { label:"Personalised case study email",  status:"SENT", dot:"dot-on" },
            { label:"Re-engagement video + offer #2", status:"ACTIVE", dot:"dot-q" },
            { label:"Final broadcast + scarcity hook", status:"SCHED", dot:"dot-s" },
          ].map((r, i) => (
            <div key={i} className={`v2-pv-brow ${r.status === "ACTIVE" ? "active" : ""}`}>
              <span className={r.dot}/>
              <div className="v2-pv-brow__info">
                <div style={{ fontWeight: r.status === "ACTIVE" ? 600 : 400 }}>{r.label}</div>
              </div>
              <span className="v2-pv-brow__roi">{r.status}</span>
            </div>
          ))}
        </div>
        <div className="v2-pv-roi-card">
          <span style={{ fontSize:13, color:"var(--fg-1)" }}>Estimated revenue</span>
          <div className="v2-pv-roi-card__big">42.5× ROI</div>
        </div>
      </div>
    ),
  };

  return (
    <section className="v2-process v2-section" id="process">
      <div className="v2-container">
        <div className="v2-section-head">
          <span className="v2-eyebrow">How it works</span>
          <h2 className="v2-h2">
            AI Customer System, <span className="v2-grad">end to end.</span>
          </h2>
          <p className="v2-lead">
            Four loops running in parallel. We configure, run, and optimise everything. You handle the hot leads that land in your calendar.
          </p>
        </div>

        <div className="v2-process__inner">
          <div className="v2-process__steps">
            {steps.map((s, i) => (
              <div
                key={s.id}
                className={`v2-process__step ${active === i ? "is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                <div className="v2-process__step-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="v2-process__step-content">
                  <div className="v2-process__step-kicker">{s.kicker}</div>
                  <div className="v2-process__step-title">{s.title}</div>
                  <div className="v2-process__step-body">{s.body}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="v2-process__visual">
            <div className="v2-process__visual-inner">
              {visuals[cur.visual]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----- Results big numbers ---------------------------------- */
const V2Results = () => (
  <section className="v2-results" id="results">
    <div className="v2-container">
      <div className="v2-results__banner">
        <div className="v2-results__banner::before"/>
        <div className="v2-section-head center" style={{ margin:0 }}>
          <span className="v2-eyebrow">Proven results</span>
          <h2 className="v2-h2" style={{ position:"relative", zIndex:1 }}>
            Numbers that <span className="v2-grad">speak for themselves.</span>
          </h2>
        </div>
        <div className="v2-results__grid">
          {[
            { n:"81%",   l:"Lead conversion rate",     c:"With Respond.io AI Agents" },
            { n:"60%",   l:"Faster sales cycles",       c:"vs. manual qualification" },
            { n:"42.5×", l:"Average broadcast ROI",     c:"From existing lead database" },
            { n:"14×",   l:"More ad conversions",       c:"AdCreative.ai vs. manual" },
          ].map((r, i) => (
            <div key={i} className="v2-results__item">
              <div className="v2-results__n">{r.n}</div>
              <div className="v2-results__l">{r.l}</div>
              <div className="v2-results__c">{r.c}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ----- Testimonials ----------------------------------------- */
const V2Testimonials = () => {
  const main = {
    quote: "AI Customer System completely changed how we handle leads. We went from a 20% contact rate to 81% conversion — and our team doesn't touch a single qualification call anymore. The Respond.io + AdCreative.ai combination is unlike anything else we've tried.",
    stat: "81% conversion rate",
    name: "Elena Vasquez",
    role: "CEO, Digital Growth Agency",
  };
  const small = [
    {
      quote: "The existing lead monetization alone paid for 6 months. We had 4,000 dormant contacts — AI Customer System turned them into €89,000 in new revenue in one broadcast cycle.",
      stat: "€89K from dormant leads",
      name: "James Whitaker",
      role: "Founder, Performance Co.",
    },
    {
      quote: "AdCreative.ai creatives plus Respond.io qualification is the combination nobody's talking about. Our ad ROAS went from 2.1× to 14.3× in 90 days. Nothing else comes close.",
      stat: "14.3× ad ROAS",
      name: "Priya Saldanha",
      role: "Head of Growth, Agency Labs",
    },
  ];

  return (
    <section className="v2-testi v2-section">
      <div className="v2-container">
        <div className="v2-section-head">
          <span className="v2-eyebrow">Client results</span>
          <h2 className="v2-h2">
            Real agencies. <span className="v2-grad">Real numbers.</span>
          </h2>
        </div>
        <div className="v2-testi__grid">
          <div className="v2-testi__main">
            <div className="v2-testi__stars">{[0,1,2,3,4].map(i => <div key={i} className="v2-testi__star"/>)}</div>
            <blockquote className="v2-testi__quote">"{main.quote}"</blockquote>
            <div className="v2-testi__stat">{main.stat}</div>
            <div className="v2-testi__author">
              <div className="v2-testi__avatar"/>
              <div>
                <div className="v2-testi__name">{main.name}</div>
                <div className="v2-testi__role">{main.role}</div>
              </div>
            </div>
          </div>
          {small.map((t, i) => (
            <div key={i} className="v2-testi__small">
              <div className="v2-testi__stars" style={{ marginBottom:16 }}>{[0,1,2,3,4].map(j => <div key={j} className="v2-testi__star"/>)}</div>
              <blockquote className="v2-testi__quote">"{t.quote}"</blockquote>
              <div className="v2-testi__stat">{t.stat}</div>
              <div className="v2-testi__author" style={{ marginTop:16 }}>
                <div className="v2-testi__avatar"/>
                <div>
                  <div className="v2-testi__name">{t.name}</div>
                  <div className="v2-testi__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ----- FAQ -------------------------------------------------- */
const V2FAQ = () => {
  const items = [
    { q:"What is an AI Customer System?", a:"AI Customer System is a fully managed lead qualification and conversion engine combining Respond.io's omnichannel AI Agents with AdCreative.ai's creative engine. It automates the full lead lifecycle — capture, qualification, nurturing, and existing lead monetization — without adding headcount. We configure and manage everything for you." },
    { q:"How does AI qualify leads better than humans?", a:"Respond.io AI Agents respond in under 60 seconds, 24/7, across every channel simultaneously. They never miss a lead, never get tired, and apply the same qualification logic every time. Properly configured AI Agents achieve 81% conversion rates vs. 20–30% for manual teams. The key is setup quality — generic AI Agents underperform; our agency-tuned configurations consistently exceed 80%." },
    { q:"Which channels does it work on?", a:"AI Customer System connects to 12+ channels through Respond.io: WhatsApp Business API, Instagram DM, TikTok Lead Generation, Facebook Messenger, email, SMS, web chat, Telegram, Viber, Line, and more. All conversations unify into one team inbox with full context, routing logic, and CRM sync." },
    { q:"How quickly will we see results?", a:"Most agencies see their first AI-qualified leads within 10 days. A full system build takes 3–4 weeks. Broadcast campaigns for existing leads typically generate ROI within the first month. Most agencies recoup the full investment within 45 days." },
    { q:"Do we need technical expertise?", a:"None. We configure, integrate, and manage the entire AI Customer System. You receive a monthly performance report and a dedicated account manager. Your team only handles the hot leads that land in your calendar — everything else is automated." },
    { q:"What ROI can we realistically expect?", a:"Based on our client data: WhatsApp broadcast campaigns average 42.5× ROI. AI-generated creatives deliver 14× more conversions vs. manually designed ads. AI qualification achieves 81% lead conversion rates. These are medians across our full client base — not cherry-picked outliers." },
    { q:"Can we white-label this for our clients?", a:"Yes. We configure the entire AI Customer System infrastructure under your agency's brand. You sell it as your own service at any margin you choose, and we handle all technical management. Ask about our agency partner program on the strategy call." },
    { q:"How does it integrate with our existing CRM?", a:"AI Customer System integrates natively with HubSpot, Salesforce, Pipedrive, and 50+ CRMs through Respond.io's native integrations and Zapier. Existing leads are imported for broadcast campaigns. Your CRM stays the system of record — we make it generate more from it." },
  ];
  const [open, setOpen] = useState(null);
  return (
    <section className="v2-faq v2-section" id="faq">
      <div className="v2-container">
        <div className="v2-faq__inner">
          <div>
            <span className="v2-eyebrow">Agency FAQ</span>
            <h2 className="v2-h2" style={{ marginTop:16 }}>
              <span className="v2-grad">Questions,</span> answered.
            </h2>
            <p className="v2-lead" style={{ marginTop:16 }}>
              Everything agencies ask before implementing AI Customer System.
            </p>
            <a href="#book" className="v2-btn v2-btn-primary" style={{ marginTop:28 }}>
              Book free audit <span className="arrow"><ArrowRight /></span>
            </a>
          </div>
          <ul className="v2-faq__list">
            {items.map((it, i) => (
              <li key={i} className={`v2-faq__item ${open === i ? "open" : ""}`}>
                <button className="v2-faq__btn" onClick={() => setOpen(open === i ? null : i)}>
                  <span className="v2-faq__num">{String(i+1).padStart(2,"0")}</span>
                  <span className="v2-faq__q">{it.q}</span>
                  <span className="v2-faq__icon">+</span>
                </button>
                <div className="v2-faq__a">{it.a}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

/* ----- CTA -------------------------------------------------- */
const V2CTA = () => (
  <section className="v2-cta" id="book">
    <div className="v2-container">
      <div className="v2-cta__card">
        <div className="v2-cta__glow"/>
        <div className="v2-cta__content">
          <span className="v2-eyebrow">#1 AI Customer System Agency · Limited slots</span>
          <h2 className="v2-h2" style={{ marginTop:20 }}>
            AI Customer System:<br/>
            <span className="v2-grad">your leads are waiting.</span>
          </h2>
          <p className="v2-lead" style={{ margin:"20px auto 0", textAlign:"center" }}>
            Book a free 30-minute system audit. We'll map your current lead flow, calculate
            your exact losses, and show what AI Customer System would generate for your
            agency — even if you don't end up working with us.
          </p>
          <div className="v2-cta__actions">
            <a href="#" className="v2-btn v2-btn-primary">
              Book free audit <span className="arrow"><ArrowRight /></span>
            </a>
            <a href="blogs.html" className="v2-btn v2-btn-outline">
              Read the AI Customer System blog
            </a>
          </div>
          <div className="v2-cta__promises">
            {["Free system audit — no pitch","Response within 4 hours","Personalised ROI estimate"].map(p => (
              <div key={p} className="v2-cta__promise">
                <span className="v2-cta__check">✓</span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ----- Footer ----------------------------------------------- */
const V2Footer = () => (
  <footer className="v2-footer">
    <div className="v2-container">
      <div className="v2-footer__grid">
        <div>
          <V2Logo />
          <p style={{ color:"var(--fg-1)", marginTop:16, fontSize:14, maxWidth:320, lineHeight:1.6 }}>
            We are the #1 AI Customer System agency. We build, configure, and manage AI-powered
            lead qualification and conversion systems for agencies worldwide.
          </p>
          <div style={{ display:"flex", gap:8, marginTop:16 }}>
            <span className="v2-chip" style={{ fontSize:9 }}>Respond.io Partner</span>
            <span className="v2-chip-cyan" style={{ fontSize:9 }}>AdCreative.ai Partner</span>
          </div>
        </div>
        <div>
          <div className="v2-footer__head">AI Customer System</div>
          <ul>
            {["AI Lead Qualification","AI Creative Engine","Omnichannel Capture","Lead Monetization"].map(s => (
              <li key={s}><a href="#services">{s}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="v2-footer__head">Company</div>
          <ul>
            {[["How it works","#process"],["Results","#results"],["Blog","blogs.html"],["Contact","#book"]].map(([l,h]) => (
              <li key={l}><a href={h}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="v2-footer__head">Free audit</div>
          <p style={{ color:"var(--fg-1)", fontSize:14, marginTop:8, lineHeight:1.6 }}>
            30 minutes. Full AI Customer System audit. No pitch unless you ask.
          </p>
          <a href="#book" className="v2-btn v2-btn-primary" style={{ marginTop:16, height:42, fontSize:14 }}>
            Book now <span className="arrow"><ArrowRight /></span>
          </a>
        </div>
      </div>

      <div className="v2-footer__legal">
        <div>© 2026 CreativeComplete · AI Customer System Agency</div>
        <div style={{ display:"flex", gap:16, alignItems:"center" }}>
          {["Privacy","Terms"].map(l => <a key={l} href="#">{l}</a>)}
          <div className="v2-footer__langs">
            {["EN","HR","SL","DE","FR"].map(lang => (
              <a key={lang} href="#" className="v2-footer__lang">{lang}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

/* Export */
Object.assign(window, {
  ArrowRight, ChevronRight, V2Logo, V2Nav, V2Hero, V2Clients, V2Stats,
  V2Services, V2Process, V2Results, V2Testimonials, V2FAQ, V2CTA, V2Footer,
});
