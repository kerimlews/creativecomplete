/* ============================================================
   AI Customer System — Landing page components
   In Astro this maps to:
     src/components/ai/{AIHero, AIStats, AIServices, AIProcess,
                        AITestimonials, AIFAQ, AICTA, AIFooter}.astro
   Main keyword: AI Customer System
   ============================================================ */

const { useState } = React;

/* ----- Icons --------------------------------------------------- */
const Arrow = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Check = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Star = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 1L8.85 4.75L13 5.36L10 8.28L10.71 12.41L7 10.46L3.29 12.41L4 8.28L1 5.36L5.15 4.75L7 1Z" fill="var(--brand-primary)"/>
  </svg>
);

/* ----- Agency Logo -------------------------------------------- */
const AgencyLogo = ({ size = 22 }) => (
  <a href="#" className="logo" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
    <span aria-hidden="true" style={{
      width: size, height: size, borderRadius: 6,
      background: "linear-gradient(135deg, var(--brand-primary), var(--brand-primary-2))",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 6px 16px rgba(255,140,66,0.4)", position: "relative",
    }}>
      <span style={{ position: "absolute", inset: 4, background: "var(--bg-0)", borderRadius: 3 }}/>
      <span style={{ position: "absolute", width: 6, height: 6, borderRadius: "50%", background: "var(--brand-primary)" }}/>
    </span>
    <span style={{ fontFamily: "var(--font-display)", fontSize: size + 4, letterSpacing: "-0.02em", color: "var(--fg-0)" }}>
      CreativeComplete
    </span>
  </a>
);

/* ----- Nav ---------------------------------------------------- */
const AINav = ({ active = "home" }) => {
  const items = [
    { id: "home",     label: "Home",     href: "AICustomerSystem.html" },
    { id: "services", label: "Services", href: "#services" },
    { id: "process",  label: "How it works", href: "#process" },
    { id: "results",  label: "Results",  href: "#results" },
    { id: "blogs",    label: "Blog",     href: "AIBlogs.html" },
  ];
  return (
    <nav className="ai-nav">
      <div className="container ai-nav__inner">
        <AgencyLogo />
        <ul className="ai-nav__links">
          {items.map(it => (
            <li key={it.id}>
              <a href={it.href} className={active === it.id ? "is-active" : ""}>{it.label}</a>
            </li>
          ))}
        </ul>
        <div className="ai-nav__cta">
          <a href="#book" className="btn btn-primary">
            Book free audit <span className="arrow"><Arrow /></span>
          </a>
        </div>
        <button className="ai-nav__menu" aria-label="Open menu">
          <span/><span/><span/>
        </button>
      </div>
    </nav>
  );
};

/* ----- Hero --------------------------------------------------- */
const AIHero = () => (
  <section className="ai-hero">
    <div className="container">
      <div className="ai-hero__top">
        <span className="chip chip-primary">🏆 #1 AI Customer System Agency</span>
      </div>
      <h1 className="display h1 ai-hero__title">
        AI Customer System<br/>
        that <span className="italic-accent">qualifies, converts</span><br/>
        &amp; profits.
      </h1>
      <p className="lead ai-hero__lead">
        AI Customer System that qualifies new leads in under 60 seconds, converts them with
        AI-generated creatives, and turns your existing lead database into ongoing revenue.
        Powered by Respond.io + AdCreative.ai — configured and managed by us.
      </p>

      <div className="ai-hero__actions">
        <a href="#book" className="btn btn-primary">
          Get your free system audit <span className="arrow"><Arrow /></span>
        </a>
        <a href="#process" className="btn btn-ghost">See how it works</a>
      </div>

      <div className="ai-hero__proof">
        <div className="ai-hero__avatars">
          <span/><span/><span/><span/>
        </div>
        <div>
          <div style={{ fontWeight: 600 }}>Trusted by 50+ agencies worldwide</div>
          <div style={{ color: "var(--fg-2)", fontSize: 13 }}>From boutique consultancies to enterprise teams</div>
        </div>
      </div>

      <div className="ai-hero__floaters">
        <div className="ai-floater ai-floater--left">
          <div className="ai-floater__num">81%</div>
          <div className="ai-floater__label">Conversion rate</div>
          <div className="ai-floater__cap">With AI Agents on Respond.io</div>
        </div>
        <div className="ai-floater ai-floater--right">
          <div className="ai-floater__num">14×</div>
          <div className="ai-floater__label">More conversions</div>
          <div className="ai-floater__cap">Via AdCreative.ai ad creatives</div>
        </div>
      </div>

      <div className="ai-hero__screen">
        <AIConversationPreview />
      </div>
    </div>
  </section>
);

/* Conversation preview mock inside hero */
const AIConversationPreview = () => (
  <div className="ai-conv-preview">
    <div className="ai-conv-preview__header">
      <span className="dot online"/>
      <span style={{ fontWeight: 600, fontSize: 13 }}>AI Customer System</span>
      <span className="chip chip-primary" style={{ marginLeft: "auto", fontSize: 10 }}>LIVE · 247 active</span>
    </div>
    <div className="ai-conv-preview__body">
      <div className="msg in">Hi! I saw your ad about digital marketing services. How much does it cost?</div>
      <div className="msg out">Hi Sarah! AI Customer System here 👋 Before I share pricing, let me understand your needs. What's your monthly marketing budget?</div>
      <div className="msg in">Around €2,000–5,000 per month.</div>
      <div className="msg out is-system">✓ Lead qualified · Budget: €2–5K · Score: 87 · Routed to sales team</div>
      <div className="ai-conv-preview__time">Qualified in 43s · No human needed</div>
    </div>
    <div className="ai-conv-preview__footer">
      <span className="chip">WhatsApp</span>
      <span className="chip">Instagram</span>
      <span className="chip">Facebook</span>
      <span className="chip">TikTok</span>
      <span className="chip chip-primary">+8 more</span>
    </div>
  </div>
);

/* ----- Logo Strip (tools / integrations) ---------------------- */
const AILogoStrip = () => {
  const tools = ["Respond.io", "AdCreative.ai", "WhatsApp API", "Meta Ads", "TikTok Ads", "Google Ads", "HubSpot", "Salesforce"];
  return (
    <section className="ai-logos">
      <div className="container">
        <div className="ai-logos__inner">
          <span className="eyebrow" style={{ whiteSpace: "nowrap" }}>Powered by</span>
          <div className="ai-logos__row">
            {tools.map(t => <span key={t} className="ai-logos__item">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----- Stats -------------------------------------------------- */
const AIStats = () => {
  const stats = [
    { n: "81%",   l: "Lead conversion rate",       c: "With Respond.io AI Agents" },
    { n: "60%",   l: "Faster sales cycles",         c: "vs. manual qualification" },
    { n: "42.5×", l: "ROI on broadcast campaigns",  c: "From existing lead database" },
    { n: "14×",   l: "More ad conversions",         c: "With AdCreative.ai creatives" },
  ];
  return (
    <section className="ai-stats">
      <div className="container">
        <div className="ai-stats__grid">
          {stats.map((s, i) => (
            <div key={i} className="ai-stats__cell">
              <div className="stat-num">{s.n}</div>
              <div style={{ fontWeight: 600, marginTop: 12 }}>{s.l}</div>
              <div style={{ color: "var(--fg-2)", fontSize: 13, marginTop: 4 }}>{s.c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ----- Services ----------------------------------------------- */
const AIServices = () => {
  const services = [
    {
      tag: "01",
      title: "AI Lead Qualification",
      icon: "🤖",
      body: "AI Customer System qualifies every inbound lead 24/7 using Respond.io AI Agents. Intent, budget, timeline — scored in under 60 seconds across WhatsApp, Instagram, TikTok, Facebook, and 8+ more channels.",
      bullets: [
        "AI Agents on Respond.io handle first touch",
        "BANT-style qualification in every language",
        "Hot leads routed to sales · Cold leads nurtured",
        "80% of routine inquiries automated",
      ],
    },
    {
      tag: "02",
      title: "AI Ad Creative Engine",
      icon: "🎨",
      body: "AI Customer System generates high-converting ad creatives using AdCreative.ai — trained on $35B+ in ad spend data. New variants every week. 90%+ accuracy Creative Scoring predicts performance before you spend.",
      bullets: [
        "AI-generated creatives in minutes, not days",
        "Trained on $35B+ in ad spend data",
        "Creative Scoring AI — 90%+ accuracy",
        "Multi-platform: Meta, TikTok, Google, LinkedIn",
      ],
    },
    {
      tag: "03",
      title: "Omnichannel Lead Capture",
      icon: "📱",
      body: "AI Customer System unifies every customer touchpoint — WhatsApp, Instagram, TikTok, Facebook, email, SMS, web chat — into one team inbox. No lead falls through the cracks, ever.",
      bullets: [
        "Unified inbox across 12+ channels",
        "WhatsApp Business API integration",
        "Conversation-Led Growth™ framework",
        "Real-time routing and context handoff",
      ],
    },
    {
      tag: "04",
      title: "Existing Lead Monetization",
      icon: "💰",
      body: "AI Customer System mines your existing CRM for profit. Broadcast campaigns, re-engagement sequences, and AI-powered nurture flows turn dormant contacts into revenue — averaging 42.5x ROI.",
      bullets: [
        "WhatsApp broadcast campaigns (42.5x ROI)",
        "Dormant database re-engagement flows",
        "Behavior-triggered personalized sequences",
        "Segment by intent, lifecycle stage, value",
      ],
    },
  ];
  return (
    <section className="ai-services" id="services">
      <div className="container">
        <header className="ai-section-head">
          <span className="eyebrow">Our services</span>
          <h2 className="display h2">
            AI Customer System: <span className="italic-accent">four engines</span>,<br/>
            one unstoppable machine.
          </h2>
          <p className="lead">
            AI Customer System covers the entire lead lifecycle — from first message to closed deal
            to repeat revenue. Most agencies handle each part separately and lose leads at every gap.
            We close every gap.
          </p>
        </header>
        <div className="ai-services__grid">
          {services.map(s => (
            <article key={s.tag} className="card-elev ai-service">
              <div className="ai-service__head">
                <span className="ai-service__icon">{s.icon}</span>
                <span className="ai-service__tag">{s.tag}</span>
                <h3 className="display h3">{s.title}</h3>
              </div>
              <p style={{ color: "var(--fg-1)", margin: "16px 0 24px", maxWidth: "55ch" }}>{s.body}</p>
              <ul className="ai-service__bullets">
                {s.bullets.map(b => (
                  <li key={b}>
                    <span className="ai-service__dot"/>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ----- Process (tabs) ----------------------------------------- */
const AIProcess = () => {
  const tabs = [
    {
      id: "capture",
      label: "Lead capture",
      kicker: "Step 01 — Any channel",
      title: "AI Customer System catches every lead, everywhere.",
      body: "Whether a lead comes from WhatsApp, TikTok ad, Instagram DM, Facebook form, or your website — AI Customer System sees it instantly. Every lead is acknowledged within 60 seconds, 24/7. No lead sits unanswered.",
      bullets: [
        "Unified inbox: WhatsApp, Instagram, TikTok, Facebook, email, SMS",
        "AI Agents respond in the lead's own language",
        "First touch under 60 seconds, 24/7/365",
        "Automatic tagging by channel, campaign, and ad creative",
      ],
      mock: "capture",
    },
    {
      id: "qualify",
      label: "AI qualification",
      kicker: "Step 02 — Under 60 seconds",
      title: "AI Customer System scores every lead before a human sees it.",
      body: "Respond.io AI Agents ask the right questions — budget, timeline, intent, decision authority. Every conversation is scored in real time. Hot leads land on your sales team's calendar with full context. Cold leads enter nurture automatically.",
      bullets: [
        "BANT-style qualification tailored to your agency",
        "Intent, budget, and timeline scoring",
        "Hot leads → sales calendar with full context",
        "Cold leads → 90-day AI nurture sequence",
      ],
      mock: "qualify",
    },
    {
      id: "creative",
      label: "AI creative",
      kicker: "Step 03 — Weekly cadence",
      title: "AI Customer System generates creatives that actually convert.",
      body: "AdCreative.ai produces 8–12 ad variants per week, trained on $35B+ in ad spend data. Creative Scoring AI predicts performance before you spend a cent. Winners get scaled, losers get cut — automatically.",
      bullets: [
        "AdCreative.ai generates creatives in minutes",
        "Trained on $35B+ real-world ad spend data",
        "Creative Scoring AI: 90%+ accuracy",
        "A/B testing built in — scale winners automatically",
      ],
      mock: "creative",
    },
    {
      id: "monetize",
      label: "Profit existing leads",
      kicker: "Step 04 — Ongoing revenue",
      title: "AI Customer System turns your dormant database into profit.",
      body: "Your existing CRM is a goldmine. We run WhatsApp broadcast campaigns, re-engagement flows, and AI-powered nurture sequences that average 42.5x ROI. The leads you already paid for finally start paying you back.",
      bullets: [
        "Full CRM audit and lead segmentation",
        "WhatsApp broadcast campaigns (avg. 42.5x ROI)",
        "Behavior-triggered re-engagement sequences",
        "Monthly performance reports and optimisation",
      ],
      mock: "monetize",
    },
  ];

  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find(t => t.id === active);

  const mocks = {
    capture: (
      <div className="ai-mock-capture">
        {["WhatsApp · 47 new", "Instagram DM · 23 new", "TikTok Lead · 12 new", "Facebook Form · 31 new", "Web Chat · 8 new"].map((ch, i) => (
          <div key={i} className={`ai-mock-capture__row ${i === 0 ? "is-active" : ""}`}>
            <span className="dot online"/>
            <span style={{ flex: 1, fontWeight: i === 0 ? 600 : 400 }}>{ch}</span>
            <span className="chip chip-primary" style={{ fontSize: 10 }}>LIVE</span>
          </div>
        ))}
        <div style={{ marginTop: 16, padding: "12px 16px", background: "rgba(255,140,66,0.08)", borderRadius: 10, border: "1px solid rgba(255,140,66,0.25)", fontSize: 13 }}>
          <span style={{ color: "var(--brand-primary)", fontWeight: 600 }}>121 leads</span>
          <span style={{ color: "var(--fg-1)" }}> captured today · All acknowledged in &lt;60s</span>
        </div>
      </div>
    ),
    qualify: (
      <div className="ai-mock-qualify">
        {[
          { name: "Sarah K.", score: 91, tag: "HOT", status: "Booked · Sales call Thu 3pm" },
          { name: "Marc B.", score: 74, tag: "WARM", status: "Nurture flow · Day 3" },
          { name: "Emma R.", score: 62, tag: "WARM", status: "Nurture flow · Day 1" },
          { name: "Unknown", score: 18, tag: "COLD", status: "Re-engagement in 30d" },
        ].map((l, i) => (
          <div key={i} className={`ai-mock-qualify__row ${l.score < 30 ? "dim" : ""}`}>
            <div className="ai-mock-qualify__name">{l.name}</div>
            <div className="ai-mock-qualify__bar"><span style={{ width: `${l.score}%` }}/></div>
            <div className={`chip ${l.score > 80 ? "chip-primary" : ""}`} style={{ fontSize: 10 }}>{l.tag} · {l.score}</div>
          </div>
        ))}
      </div>
    ),
    creative: (
      <div className="ai-mock-creative">
        {[
          { l: "AI-generated hero ad", c: "" },
          { l: "Carousel variant A", c: "cream" },
          { l: "Video thumbnail B", c: "" },
          { l: "Story format C", c: "cream" },
          { l: "Retargeting variant", c: "" },
          { l: "UGC-style creative", c: "cream" },
        ].map((c, i) => (
          <div key={i} className={`ai-mock-creative__cell ${c.c === "cream" ? "is-cream" : ""}`}>
            <div className="img-placeholder" style={{ height: "100%", borderRadius: 8 }}>{c.l}</div>
          </div>
        ))}
      </div>
    ),
    monetize: (
      <div className="ai-mock-nurture">
        {[
          { day: "Day 0",  action: "CRM audit + lead segmentation",  status: "DONE", open: "100%" },
          { day: "Day 1",  action: "WhatsApp broadcast — offer",      status: "SENT", open: "68%" },
          { day: "Day 7",  action: "Personalised case study email",   status: "SENT", open: "41%" },
          { day: "Day 14", action: "Re-engagement video + offer",     status: "QUEUED", open: "—" },
          { day: "Day 30", action: "Final broadcast + scarcity hook", status: "SCHED", open: "—" },
        ].map((r, i) => (
          <div key={i} className={`ai-mock-nurture__row ${i === 3 ? "is-active" : ""}`}>
            <span className={`dot ${i < 3 ? "online" : i === 3 ? "active" : "dim"}`}/>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 13 }}>{r.day} — {r.action}</div>
              <div style={{ color: "var(--fg-2)", fontSize: 12 }}>Open rate: {r.open}</div>
            </div>
            <span className={`chip ${i === 3 ? "chip-primary" : ""}`} style={{ fontSize: 10 }}>{r.status}</span>
          </div>
        ))}
        <div style={{ marginTop: 12, padding: "10px 14px", background: "rgba(255,140,66,0.08)", borderRadius: 8, border: "1px solid rgba(255,140,66,0.2)", fontSize: 13 }}>
          <span style={{ color: "var(--brand-primary)", fontWeight: 700 }}>42.5×</span>
          <span style={{ color: "var(--fg-1)" }}> average ROI · This campaign: est. €127,000 revenue</span>
        </div>
      </div>
    ),
  };

  return (
    <section className="ai-process" id="process">
      <div className="container">
        <header className="ai-section-head">
          <span className="eyebrow">How it works</span>
          <h2 className="display h2">
            AI Customer System, <span className="italic-accent">end to end.</span>
          </h2>
          <p className="lead">Four operating loops working in parallel. We configure, run, and optimise everything — you focus on delivering for your clients.</p>
        </header>

        <div className="ai-tabs" role="tablist">
          {tabs.map(t => (
            <button key={t.id} role="tab" aria-selected={active === t.id}
              className={`ai-tab ${active === t.id ? "is-active" : ""}`}
              onClick={() => setActive(t.id)}>
              <span className="ai-tab__kicker">{t.kicker}</span>
              <span className="ai-tab__label">{t.label}</span>
            </button>
          ))}
        </div>

        <div className="ai-process__panel card-elev">
          <div className="ai-process__copy">
            <span className="chip chip-primary">{current.kicker}</span>
            <h3 className="display h3" style={{ marginTop: 16 }}>{current.title}</h3>
            <p style={{ color: "var(--fg-1)", margin: "16px 0 24px", maxWidth: "52ch" }}>{current.body}</p>
            <ul className="ai-process__list">
              {current.bullets.map(b => (
                <li key={b}><span className="ai-process__check"><Check/></span><span>{b}</span></li>
              ))}
            </ul>
          </div>
          <div className="ai-process__visual">{mocks[current.mock]}</div>
        </div>
      </div>
    </section>
  );
};

/* ----- Testimonials ------------------------------------------ */
const AITestimonials = () => {
  const items = [
    {
      quote: "AI Customer System transformed how we handle leads. We went from 20% contact rate to 81% conversion — and our team doesn't touch a single qualification call anymore.",
      name: "Elena Vasquez",
      role: "CEO, Digital Growth Agency",
      stat: "81% conversion rate",
    },
    {
      quote: "The existing lead monetization alone paid for 6 months of the service. We had 4,000 dormant contacts — AI Customer System turned them into €89,000 in new revenue.",
      name: "James Whitaker",
      role: "Founder, Performance Marketing Co.",
      stat: "€89K from dormant leads",
    },
    {
      quote: "AdCreative.ai creatives plus Respond.io qualification is the combination nobody talks about. Our ad ROAS went from 2.1x to 14.3x in 90 days.",
      name: "Priya Saldanha",
      role: "Head of Growth, Agency Labs",
      stat: "14.3× ad ROAS",
    },
  ];
  return (
    <section className="ai-tests" id="results">
      <div className="container">
        <header className="ai-section-head">
          <span className="eyebrow">Client results</span>
          <h2 className="display h2">
            AI Customer System. <span className="italic-accent">Real numbers.</span>
          </h2>
        </header>
        <div className="ai-tests__grid">
          {items.map((t, i) => (
            <figure key={i} className="card-elev ai-test">
              <div className="ai-test__stars">{[0,1,2,3,4].map(s => <Star key={s}/>)}</div>
              <blockquote className="ai-test__quote">"{t.quote}"</blockquote>
              <div className="ai-test__stat">{t.stat}</div>
              <figcaption className="ai-test__cap">
                <div className="ai-test__avatar"/>
                <div>
                  <div style={{ fontWeight: 600 }}>{t.name}</div>
                  <div style={{ color: "var(--fg-2)", fontSize: 13 }}>{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ----- FAQ ---------------------------------------------------- */
const AIFAQ = () => {
  const items = [
    {
      q: "What is an AI Customer System?",
      a: "AI Customer System is a fully managed lead qualification and conversion engine that combines Respond.io (for omnichannel AI conversation) and AdCreative.ai (for AI-generated ad creatives). It qualifies new leads automatically, converts them with data-driven creatives, and generates profit from your existing lead database — all without adding headcount.",
    },
    {
      q: "How does AI qualify leads better than a human?",
      a: "AI Customer System on Respond.io responds in under 60 seconds, 24/7, across every channel simultaneously. It never misses a lead, never gets tired, and applies the same qualification logic every time. In tests, AI Agents on Respond.io achieve 81% conversion rates — significantly higher than the industry average of 20–30% for human teams.",
    },
    {
      q: "Which channels does AI Customer System support?",
      a: "AI Customer System connects to 12+ channels: WhatsApp Business API, Instagram DM, TikTok, Facebook Messenger, email, SMS, web chat, Telegram, Viber, and more. All conversations flow into a single unified inbox in Respond.io, giving your team full visibility and control.",
    },
    {
      q: "How quickly can we expect results?",
      a: "Most agencies see their first qualified leads from the AI Customer System within the first 10 days. A full system build (qualification flows, nurture sequences, creative production setup) takes 3–4 weeks. The broadcast campaign for existing leads typically generates ROI within the first month.",
    },
    {
      q: "Do we need technical expertise to run this?",
      a: "None. We configure, integrate, and manage the entire AI Customer System for you. You get a monthly performance report and a dedicated account manager. Your team only needs to handle the hot leads that land in your calendar — everything else is handled by AI and our team.",
    },
    {
      q: "How does Respond.io and AdCreative.ai work together?",
      a: "Respond.io captures and qualifies leads across all channels. AdCreative.ai generates the ad creatives that bring those leads in — and the retargeting creatives that re-engage them. Together, AI Customer System closes the loop: better creatives bring better leads, and better qualification converts more of them.",
    },
    {
      q: "What ROI can agencies realistically expect?",
      a: "Based on our client data: WhatsApp broadcast campaigns average 42.5x ROI. AI-generated creatives deliver 14x more conversions vs. manually designed ads. AI qualification achieves 81% lead conversion rates. Most agencies recoup the investment in under 45 days.",
    },
    {
      q: "Can we white-label AI Customer System for our clients?",
      a: "Yes. We offer white-label AI Customer System setups for agencies who want to resell this as their own service. We configure and manage the infrastructure under your brand, and you focus on client relationships. Ask about our agency partner program on the strategy call.",
    },
    {
      q: "How does it integrate with our existing CRM?",
      a: "AI Customer System integrates natively with HubSpot, Salesforce, Pipedrive, and 50+ other CRMs through Respond.io's native integrations and Zapier. Existing leads are imported for the broadcast and re-engagement campaigns. Your CRM stays the system of record — we just make it work harder.",
    },
    {
      q: "What makes this different from other chatbot or automation tools?",
      a: "Most chatbot tools handle one channel. Most automation tools handle one step. AI Customer System handles the entire lead lifecycle — capture, qualification, creative, re-engagement — across every channel, with AI that improves over time. And unlike self-serve tools, we configure, run, and optimise everything for you. You don't hire another tool. You hire results.",
    },
  ];

  const [open, setOpen] = useState(0);
  return (
    <section className="ai-faq" id="faq">
      <div className="container ai-faq__inner">
        <header>
          <span className="eyebrow">Agency FAQ</span>
          <h2 className="display h2" style={{ marginTop: 16 }}>
            AI Customer System: <span className="italic-accent">questions answered.</span>
          </h2>
          <p className="lead" style={{ marginTop: 16 }}>
            Everything agencies ask before implementing an AI Customer System.
          </p>
          <a href="#book" className="btn btn-primary" style={{ marginTop: 24 }}>
            Still have questions? <span className="arrow"><Arrow/></span>
          </a>
        </header>
        <ul className="ai-faq__list">
          {items.map((it, i) => (
            <li key={i} className={`ai-faq__item ${open === i ? "is-open" : ""}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)} className="ai-faq__q">
                <span className="ai-faq__num">{String(i+1).padStart(2, "0")}</span>
                <span className="ai-faq__qtext">{it.q}</span>
                <span className="ai-faq__plus">{open === i ? "–" : "+"}</span>
              </button>
              {open === i && <div className="ai-faq__a">{it.a}</div>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

/* ----- CTA ---------------------------------------------------- */
const AICTA = () => (
  <section className="ai-cta" id="book">
    <div className="container">
      <div className="ai-cta__card">
        <div className="ai-cta__glow"/>
        <span className="eyebrow" style={{ position: "relative", zIndex: 1 }}>
          #1 AI Customer System Agency · Limited slots
        </span>
        <h2 className="display h2" style={{ position: "relative", zIndex: 1, marginTop: 20 }}>
          AI Customer System:<br/>
          <span className="italic-accent">your leads are waiting.</span>
        </h2>
        <p className="lead" style={{ position: "relative", zIndex: 1, marginTop: 16 }}>
          Book a free 30-minute system audit. We'll map your current lead flow, identify every
          leaking stage, and show you exactly what an AI Customer System would generate for your
          agency — even if you don't work with us.
        </p>
        <div className="ai-cta__promises">
          {["Free system audit (no pitch)", "Response within 4 hours", "Personalised ROI estimate"].map(p => (
            <div key={p} className="ai-cta__promise">
              <span className="ai-cta__check"><Check/></span>
              <span>{p}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
          <a href="#" className="btn btn-primary">
            Book free audit <span className="arrow"><Arrow/></span>
          </a>
          <a href="AIBlogs.html" className="btn btn-ghost">Read the AI Customer System blog</a>
        </div>
      </div>
    </div>
  </section>
);

/* ----- Footer ------------------------------------------------- */
const AIFooter = () => (
  <footer className="ai-footer">
    <div className="container">
      <div className="ai-footer__grid">
        <div className="ai-footer__brand">
          <AgencyLogo />
          <p style={{ color: "var(--fg-2)", marginTop: 16, fontSize: 14, maxWidth: 320 }}>
            We are the #1 AI Customer System agency. We build, configure, and manage
            AI-powered lead qualification and conversion systems for agencies worldwide.
          </p>
          <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
            <span className="chip chip-primary" style={{ fontSize: 10 }}>Respond.io Partner</span>
            <span className="chip chip-primary" style={{ fontSize: 10 }}>AdCreative.ai Partner</span>
          </div>
        </div>
        <div>
          <div className="ai-footer__head">AI Customer System</div>
          <ul>
            <li><a href="#services">AI Lead Qualification</a></li>
            <li><a href="#services">AI Creative Engine</a></li>
            <li><a href="#services">Omnichannel Capture</a></li>
            <li><a href="#services">Lead Monetization</a></li>
          </ul>
        </div>
        <div>
          <div className="ai-footer__head">Company</div>
          <ul>
            <li><a href="#process">How it works</a></li>
            <li><a href="#results">Case studies</a></li>
            <li><a href="AIBlogs.html">Blog</a></li>
            <li><a href="#book">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="ai-footer__head">Free audit</div>
          <p style={{ color: "var(--fg-2)", fontSize: 14, marginTop: 8 }}>
            30 minutes. Full AI Customer System audit included. No pitch unless you ask.
          </p>
          <a href="#book" className="btn btn-primary" style={{ marginTop: 14 }}>
            Book now <span className="arrow"><Arrow/></span>
          </a>
        </div>
      </div>
      <div className="ai-footer__legal">
        <div>© 2026 CreativeComplete · #1 AI Customer System Agency</div>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">en</a>
          <a href="#">hr</a>
          <a href="#">sl</a>
          <a href="#">de</a>
          <a href="#">fr</a>
        </div>
      </div>
    </div>
  </footer>
);

/* Export */
Object.assign(window, {
  Arrow, Check, Star, AgencyLogo,
  AINav, AIHero, AILogoStrip, AIStats, AIServices,
  AIProcess, AITestimonials, AIFAQ, AICTA, AIFooter,
});
