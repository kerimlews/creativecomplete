/* ============================================================
   Lumora — Reusable Components
   In Astro this maps to:
     src/components/{Nav,Hero,Stats,Services,Process,Templates,
                      Testimonials,FAQ,CTA,Footer,BlogCard}.astro
   ============================================================ */

const { useState, useEffect, useRef } = React;

/* ----- Logo ---------------------------------------------------- */
const Logo = ({ size = 22 }) => (
  <a href="#" className="logo" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
    <span aria-hidden="true" style={{
      width: size, height: size, borderRadius: 6,
      background: "linear-gradient(135deg, var(--brand-primary), var(--brand-primary-2))",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 6px 16px rgba(255,140,66,0.4)",
      position: "relative",
    }}>
      <span style={{
        position: "absolute", inset: 4,
        background: "var(--bg-0)", borderRadius: 3,
      }}/>
      <span style={{
        position: "absolute", width: 6, height: 6, borderRadius: "50%",
        background: "var(--brand-primary)",
      }}/>
    </span>
    <span style={{
      fontFamily: "var(--font-display)",
      fontSize: size + 4, letterSpacing: "-0.02em", color: "var(--fg-0)",
    }}>Lumora</span>
  </a>
);

/* ----- Top Nav ------------------------------------------------- */
const Nav = ({ active = "home" }) => {
  const items = [
    { id: "home", label: "Home", href: "Lumora.html" },
    { id: "services", label: "Services", href: "#services" },
    { id: "process", label: "Process", href: "#process" },
    { id: "results", label: "Results", href: "#results" },
    { id: "blogs", label: "Blog", href: "Blogs.html" },
  ];
  return (
    <nav className="lm-nav">
      <div className="container lm-nav__inner">
        <Logo />
        <ul className="lm-nav__links">
          {items.map(it => (
            <li key={it.id}>
              <a href={it.href} className={active === it.id ? "is-active" : ""}>{it.label}</a>
            </li>
          ))}
        </ul>
        <div className="lm-nav__cta">
          <a href="#book" className="btn btn-primary">
            Book strategy call
            <span className="arrow"><Arrow /></span>
          </a>
        </div>
        <button className="lm-nav__menu" aria-label="Open menu">
          <span/><span/><span/>
        </button>
      </div>
    </nav>
  );
};

/* ----- Arrow icon --------------------------------------------- */
const Arrow = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ----- Hero --------------------------------------------------- */
const Hero = () => (
  <section className="lm-hero">
    <div className="container">
      <div className="lm-hero__top">
        <span className="eyebrow">For real-estate teams</span>
      </div>
      <h1 className="display h1 lm-hero__title">
        Turn 300+ daily leads<br/>
        into <span className="italic-accent">closed deals.</span>
      </h1>
      <p className="lead lm-hero__lead">
        We build the lead-response & nurture system top-performing brokerages use to qualify
        hot leads in under 60 seconds — and re-engage every cold lead sitting in your CRM.
      </p>

      <div className="lm-hero__media">
        <YouTubeShort />
        <FloatingStat
          className="lm-hero__floater is-left"
          number="< 60s"
          label="First touch"
          caption="Avg. response time we deliver"
        />
        <FloatingStat
          className="lm-hero__floater is-right"
          number="3.4×"
          label="Lead → meeting"
          caption="vs. industry baseline"
        />
      </div>

      <div className="lm-hero__bar">
        <div className="lm-hero__bar-left">
          <div className="avatars">
            <span/><span/><span/><span/>
          </div>
          <div>
            <div style={{ fontWeight: 600 }}>Trusted by 80+ brokerages</div>
            <div style={{ color: "var(--fg-2)", fontSize: 13 }}>From boutique teams to franchise networks</div>
          </div>
        </div>
        <div className="lm-hero__bar-right">
          <a href="#book" className="btn btn-primary">Book a strategy call <span className="arrow"><Arrow/></span></a>
          <a href="#process" className="btn btn-ghost">See the system</a>
        </div>
      </div>
    </div>
  </section>
);

/* ----- YouTube Short embed (vertical) ------------------------- */
const YouTubeShort = () => {
  const VIDEO_ID = "dQw4w9WgXcQ"; // placeholder — replace with your Short ID
  return (
    <div className="yt-short">
      <div className="yt-short__frame">
        <div className="yt-short__player">
          <iframe
            src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&playsinline=1`}
            title="Lumora — how the system works"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="yt-short__chrome">
          <span className="chip chip-primary">Watch · 0:60</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-2)", letterSpacing: "0.1em" }}>
            HOW IT WORKS
          </span>
        </div>
      </div>
      <div className="yt-short__caption">
        <span style={{ fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.1 }}>
          The 60-second tour
        </span>
        <span style={{ color: "var(--fg-2)", fontSize: 13 }}>
          From lead capture → qualified meeting on agent's calendar
        </span>
      </div>
    </div>
  );
};

const FloatingStat = ({ number, label, caption, className = "" }) => (
  <div className={`floating-stat ${className}`}>
    <div className="floating-stat__num">{number}</div>
    <div className="floating-stat__label">{label}</div>
    <div className="floating-stat__cap">{caption}</div>
  </div>
);

/* ----- Logos strip (industry partners) ------------------------ */
const LogoStrip = () => {
  const names = ["MERIDIAN", "Northpoint", "Kasa Realty", "BLOCK&CO", "Vermilion", "Harbor Equity", "Oakline"];
  return (
    <section className="lm-logos">
      <div className="container">
        <div className="lm-logos__inner">
          <span className="eyebrow" style={{ whiteSpace: "nowrap" }}>Operators we run with</span>
          <div className="lm-logos__row">
            {names.map(n => <span key={n} className="lm-logos__item">{n}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----- Stats band --------------------------------------------- */
const Stats = () => {
  const stats = [
    { n: "300+", l: "New leads handled / day", c: "Average client volume" },
    { n: "62%", l: "Cold leads re-activated", c: "Within first 90 days" },
    { n: "< 60s", l: "First-touch response", c: "Across all channels" },
    { n: "4.1×", l: "Pipeline lift", c: "Year-over-year" },
  ];
  return (
    <section className="lm-stats">
      <div className="container">
        <div className="lm-stats__grid">
          {stats.map((s, i) => (
            <div key={i} className="lm-stats__cell">
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
const Services = () => {
  const services = [
    {
      tag: "01",
      title: "Instant lead response",
      body: "Multichannel routing across SMS, WhatsApp, email and call — first touch under 60 seconds, 24/7. Hot leads land on the right agent's screen with full context.",
      bullets: ["Round-robin & geo routing", "AI qualifier on first message", "Calendar handoff to agent"],
    },
    {
      tag: "02",
      title: "Nurture & follow-up engine",
      body: "We build the 90-day follow-up sequences that bring 30-day-old leads back to the table — without an agent touching a keyboard.",
      bullets: ["Behavior-based drip flows", "Re-engage stale CRM leads", "Listing-match notifications"],
    },
    {
      tag: "03",
      title: "Ad-creative production",
      body: "Convertible templates with images, copy and offers — produced and tested weekly. Creatives that match the lead source so message stays consistent.",
      bullets: ["Listing-feed creatives", "Buyer & seller variants", "A/B + iterative testing"],
    },
    {
      tag: "04",
      title: "Hot-lead qualification",
      body: "Score every inbound on intent, timeline, budget and location. Only meeting-ready leads hit your agents' calendars.",
      bullets: ["Custom scoring model", "Real-time intent signals", "CRM-native enrichment"],
    },
  ];
  return (
    <section className="lm-services" id="services">
      <div className="container">
        <header className="lm-section-head">
          <span className="eyebrow">Our services</span>
          <h2 className="display h2">A four-part system, <span className="italic-accent">built once</span>,<br/>that runs every day.</h2>
          <p className="lead">Most brokerages lose 70% of leads to slow response and zero follow-up. We close that gap with a system your team actually keeps using.</p>
        </header>

        <div className="lm-services__grid">
          {services.map(s => (
            <article key={s.tag} className="card-elev lm-service">
              <div className="lm-service__head">
                <span className="lm-service__tag">{s.tag}</span>
                <h3 className="display h3">{s.title}</h3>
              </div>
              <p style={{ color: "var(--fg-1)", margin: "16px 0 24px", maxWidth: "55ch" }}>{s.body}</p>
              <ul className="lm-service__bullets">
                {s.bullets.map(b => (
                  <li key={b}>
                    <span className="lm-service__dot"/>
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
const Process = () => {
  const tabs = [
    {
      id: "respond",
      label: "Immediate response",
      kicker: "00:00 — 00:60",
      title: "Reach every new lead before the competition wakes up.",
      body: "Inbound from any channel — Meta, Google, your IDX site — is acknowledged within 60 seconds with a personalised first message. The lead is qualified, scored, and either booked into an agent's calendar or routed into nurture. No lead sits.",
      bullets: [
        "Multichannel inbox across SMS, WhatsApp, email, web chat",
        "AI qualifier asks the right intent questions",
        "Hot leads booked directly to agent calendars",
        "Cold leads enter the 90-day nurture flow",
      ],
      mock: "respond",
    },
    {
      id: "nurture",
      label: "Follow-up & nurture",
      kicker: "Day 1 — Day 90",
      title: "Re-engage every existing lead sitting in your CRM.",
      body: "We pull dormant leads from your existing database and run them through buyer / seller / investor flows. Listing-match alerts, neighbourhood reports, market updates — value first, sell later. Roughly 60% of cold leads come back within the first 90 days.",
      bullets: [
        "Audit & segment your existing CRM",
        "Buyer / seller / investor sequences",
        "Behavioural triggers (visited a listing? open house?)",
        "Agent-as-author voice — never robotic",
      ],
      mock: "nurture",
    },
    {
      id: "creative",
      label: "Ad creative engine",
      kicker: "Weekly cadence",
      title: "Convertible templates with images, copy and offers.",
      body: "We produce and test 8–12 creatives a week against your audiences — listing carousels, neighbourhood reels, testimonial cards, before/after of recent sales. Winners get scaled, losers get cut. The creative system feeds the response system.",
      bullets: [
        "Template library: listing, neighbourhood, testimonial, market update",
        "Auto-generated from your IDX feed",
        "Variant testing on hooks & offers",
        "Performance loop into media planning",
      ],
      mock: "creative",
    },
    {
      id: "qualify",
      label: "Hot lead qualification",
      kicker: "Every conversation",
      title: "Only meeting-ready leads hit your agents' calendars.",
      body: "Every conversation is scored across intent, timeline, budget and location. Agents see context, history and recommended next action when they pick up. No more wasted dials, no more cold introductions.",
      bullets: [
        "BANT-style scoring tuned for real estate",
        "Timeline & budget classifier",
        "Auto-tagged in your CRM",
        "Recommended next-best action per lead",
      ],
      mock: "qualify",
    },
  ];

  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find(t => t.id === active);

  return (
    <section className="lm-process" id="process">
      <div className="container">
        <header className="lm-section-head">
          <span className="eyebrow">How we run it</span>
          <h2 className="display h2">The system, <span className="italic-accent">end to end.</span></h2>
          <p className="lead">Four operating loops working in parallel. Built on tools we configure for you and hide behind your brand.</p>
        </header>

        <div className="lm-tabs" role="tablist">
          {tabs.map(t => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              className={`lm-tab ${active === t.id ? "is-active" : ""}`}
              onClick={() => setActive(t.id)}
            >
              <span className="lm-tab__kicker">{t.kicker}</span>
              <span className="lm-tab__label">{t.label}</span>
            </button>
          ))}
        </div>

        <div className="lm-process__panel card-elev">
          <div className="lm-process__copy">
            <span className="chip chip-primary">{current.kicker}</span>
            <h3 className="display h3" style={{ marginTop: 16 }}>{current.title}</h3>
            <p style={{ color: "var(--fg-1)", margin: "16px 0 24px", maxWidth: "52ch" }}>{current.body}</p>
            <ul className="lm-process__list">
              {current.bullets.map(b => (
                <li key={b}><span className="lm-process__check"><Check/></span><span>{b}</span></li>
              ))}
            </ul>
          </div>
          <div className="lm-process__visual">
            <ProcessMock kind={current.mock} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ----- Process visualisations (placeholder mocks) ------------- */
const ProcessMock = ({ kind }) => {
  if (kind === "respond") return <ConversationMock />;
  if (kind === "nurture") return <NurtureMock />;
  if (kind === "creative") return <CreativeMock />;
  return <QualifyMock />;
};

const ConversationMock = () => (
  <div className="mock-conv">
    <div className="mock-conv__head">
      <span className="dot online"/>
      <span style={{ fontWeight: 600 }}>Sarah K.</span>
      <span style={{ color: "var(--fg-2)", fontSize: 12 }}>· buyer · 2-bed · downtown</span>
      <span className="chip chip-primary" style={{ marginLeft: "auto" }}>HOT · 92</span>
    </div>
    <div className="mock-conv__body">
      <div className="msg in">Hi, saw the listing on 14 Pinegate — is it still available?</div>
      <div className="msg out">Hi Sarah! Yes, 14 Pinegate is available — open house Saturday 11am. Want me to hold a slot?</div>
      <div className="msg in">Yes please, 11:30 if possible.</div>
      <div className="msg out is-system">✓ Booked with Marcus · Sat 11:30 · Calendar synced</div>
      <div className="mock-conv__time">Replied in 23s · routed to Marcus (downtown specialist)</div>
    </div>
  </div>
);

const NurtureMock = () => (
  <div className="mock-nurture">
    <div className="mock-nurture__row">
      <span className="dot"/>
      <div>
        <div style={{ fontWeight: 600 }}>Day 1 — Welcome + neighbourhood guide</div>
        <div style={{ color: "var(--fg-2)", fontSize: 12 }}>Email · 64% open</div>
      </div>
      <span className="chip">SENT</span>
    </div>
    <div className="mock-nurture__row">
      <span className="dot"/>
      <div>
        <div style={{ fontWeight: 600 }}>Day 7 — New listings matched to brief</div>
        <div style={{ color: "var(--fg-2)", fontSize: 12 }}>SMS + Email</div>
      </div>
      <span className="chip">SENT</span>
    </div>
    <div className="mock-nurture__row is-active">
      <span className="dot active"/>
      <div>
        <div style={{ fontWeight: 600 }}>Day 14 — Market update video</div>
        <div style={{ color: "var(--fg-2)", fontSize: 12 }}>WhatsApp · scheduled</div>
      </div>
      <span className="chip chip-primary">QUEUED</span>
    </div>
    <div className="mock-nurture__row">
      <span className="dot dim"/>
      <div>
        <div style={{ fontWeight: 600, color: "var(--fg-2)" }}>Day 30 — Re-engagement offer</div>
        <div style={{ color: "var(--fg-2)", fontSize: 12 }}>Triggers if no reply</div>
      </div>
      <span className="chip">SCHEDULED</span>
    </div>
  </div>
);

const CreativeMock = () => (
  <div className="mock-creative">
    {[
      { l: "Listing carousel", c: "cream" },
      { l: "Neighbourhood reel" },
      { l: "Testimonial card", c: "cream" },
      { l: "Market update" },
      { l: "Just sold", c: "cream" },
      { l: "Open house" },
    ].map((c, i) => (
      <div key={i} className={`mock-creative__cell ${c.c === "cream" ? "is-cream" : ""}`}>
        <div className="img-placeholder" style={{ height: "100%", borderRadius: 10 }}>{c.l}</div>
      </div>
    ))}
  </div>
);

const QualifyMock = () => (
  <div className="mock-qualify">
    <div className="mock-qualify__row">
      <div className="mock-qualify__name">Daniel R.</div>
      <div className="mock-qualify__bar"><span style={{ width: "92%" }}/></div>
      <div className="mock-qualify__score">92</div>
    </div>
    <div className="mock-qualify__row">
      <div className="mock-qualify__name">Priya S.</div>
      <div className="mock-qualify__bar"><span style={{ width: "78%" }}/></div>
      <div className="mock-qualify__score">78</div>
    </div>
    <div className="mock-qualify__row">
      <div className="mock-qualify__name">Marcus L.</div>
      <div className="mock-qualify__bar"><span style={{ width: "61%" }}/></div>
      <div className="mock-qualify__score">61</div>
    </div>
    <div className="mock-qualify__row dim">
      <div className="mock-qualify__name">Anonymous</div>
      <div className="mock-qualify__bar"><span style={{ width: "24%" }}/></div>
      <div className="mock-qualify__score">24</div>
    </div>
    <div className="mock-qualify__legend">
      <span><i className="dot hot"/> Hot · meeting-ready</span>
      <span><i className="dot warm"/> Warm · nurture</span>
      <span><i className="dot cold"/> Cold · re-engage</span>
    </div>
  </div>
);

/* ----- Templates (carousel) ---------------------------------- */
const Templates = () => {
  const templates = [
    { title: "New listing — coming soon", tag: "Buyer", body: "Drive interest before the listing goes live.", color: "primary" },
    { title: "Just sold in your area", tag: "Seller", body: "Trigger seller intent with hyper-local proof.", color: "cream" },
    { title: "Open-house reminder", tag: "Hot lead", body: "60-min, 12-hr and morning-of nudges.", color: "dark" },
    { title: "Neighbourhood guide", tag: "Nurture", body: "Value-first email for top-of-funnel buyers.", color: "primary" },
    { title: "Market snapshot — monthly", tag: "Existing", body: "Re-activate dormant leads with data.", color: "cream" },
    { title: "Investor brief", tag: "Investor", body: "Cap rate & yield highlights on new stock.", color: "dark" },
  ];
  return (
    <section className="lm-templates" id="templates">
      <div className="container">
        <header className="lm-section-head">
          <span className="eyebrow">Convertible templates</span>
          <h2 className="display h2">Plug-and-play creatives,<br/><span className="italic-accent">tuned for real estate.</span></h2>
          <p className="lead">A starter library of message + creative templates with proven copy and image structures. Customised to your brand and listings on day one.</p>
        </header>
        <div className="lm-templates__rail">
          {templates.map((t, i) => (
            <article key={i} className={`lm-template lm-template--${t.color}`}>
              <span className="chip">{t.tag}</span>
              <div className={`img-placeholder ${t.color === "cream" ? "cream" : ""}`} style={{ aspectRatio: "4 / 3", marginTop: 14, marginBottom: 16 }}>
                Listing imagery
              </div>
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: 24, margin: "0 0 6px", letterSpacing: "-0.01em" }}>{t.title}</h4>
              <p style={{ color: t.color === "cream" ? "#5a544c" : "var(--fg-1)", fontSize: 14, margin: 0 }}>{t.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ----- Testimonials ------------------------------------------ */
const Testimonials = () => {
  const items = [
    {
      quote: "We were drowning in leads and converting nothing. Three months in, our team books 18 meetings a week without lifting a finger on follow-up.",
      name: "Elena Vasquez",
      role: "Principal Broker, Meridian RE",
      stat: "18 meetings / week",
    },
    {
      quote: "The dormant-lead audit alone paid for the engagement twice over. They pulled six listings out of leads we'd written off.",
      name: "James Whitaker",
      role: "Head of Sales, Northpoint Group",
      stat: "+ $1.2M GCI",
    },
    {
      quote: "Their creative library is the best money we've spent on marketing this year. New variants every week, and we know which ones print.",
      name: "Aisha Khan",
      role: "Marketing Director, Block & Co",
      stat: "2.4× ad ROAS",
    },
  ];
  return (
    <section className="lm-tests" id="results">
      <div className="container">
        <header className="lm-section-head">
          <span className="eyebrow">What clients say</span>
          <h2 className="display h2">Real teams. <span className="italic-accent">Real numbers.</span></h2>
        </header>
        <div className="lm-tests__grid">
          {items.map((t, i) => (
            <figure key={i} className="card-elev lm-test">
              <div className="lm-test__stars">
                {[0,1,2,3,4].map(s => <Star key={s}/>)}
              </div>
              <blockquote className="lm-test__quote">"{t.quote}"</blockquote>
              <div className="lm-test__stat">{t.stat}</div>
              <figcaption className="lm-test__cap">
                <div className="lm-test__avatar"/>
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

const Star = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 1L8.85 4.75L13 5.36L10 8.28L10.71 12.41L7 10.46L3.29 12.41L4 8.28L1 5.36L5.15 4.75L7 1Z" fill="var(--brand-primary)"/>
  </svg>
);

/* ----- FAQ ----------------------------------------------------- */
const FAQ = () => {
  const items = [
    { q: "How fast does the system go live?", a: "Discovery + audit in week 1. Build & integrations in weeks 2–3. Soft launch on a single channel in week 4. Full multichannel and nurture flows live by week 6. Most clients see their first booked meeting from the system inside the first 10 days." },
    { q: "Will it work with my existing CRM?", a: "Yes. We integrate with the major real-estate CRMs (Follow Up Boss, kvCORE, Lofty, Salesforce, HubSpot) plus most IDX feeds. We don't replace your CRM — we sit next to it and feed qualified leads in." },
    { q: "What does the engagement look like?", a: "A 90-day setup followed by a monthly retainer. The retainer covers ongoing optimisation, fresh creative every week, performance reviews, and any flow changes you need. No lock-in past the first 90 days." },
    { q: "Do my agents have to learn a new tool?", a: "No. Hot leads land in their existing inbox or CRM with full context — they just take the meeting. The orchestration runs in the background." },
    { q: "How do you handle existing CRM leads?", a: "Week 1 is a full database audit. We segment dormant leads by buyer / seller / investor and timeline, then run them through value-first re-engagement flows. Roughly 60% respond inside the first 90 days." },
    { q: "What's pricing like?", a: "We work on a fixed-fee setup plus a monthly retainer scaled to lead volume. Most brokerages running 300+ leads/day land in the mid five-figures monthly. We share exact numbers on the strategy call." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="lm-faq" id="faq">
      <div className="container lm-faq__inner">
        <header>
          <span className="eyebrow">Frequently asked</span>
          <h2 className="display h2" style={{ marginTop: 16 }}>Answers, <span className="italic-accent">straight up.</span></h2>
          <p className="lead" style={{ marginTop: 16 }}>Everything we wish more agencies were upfront about.</p>
          <a href="#book" className="btn btn-primary" style={{ marginTop: 24 }}>Still have questions? <span className="arrow"><Arrow/></span></a>
        </header>
        <ul className="lm-faq__list">
          {items.map((it, i) => (
            <li key={i} className={`lm-faq__item ${open === i ? "is-open" : ""}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)} className="lm-faq__q">
                <span className="lm-faq__num">{String(i+1).padStart(2, "0")}</span>
                <span className="lm-faq__qtext">{it.q}</span>
                <span className="lm-faq__plus">{open === i ? "–" : "+"}</span>
              </button>
              {open === i && <div className="lm-faq__a">{it.a}</div>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

/* ----- CTA ----------------------------------------------------- */
const CTA = () => (
  <section className="lm-cta" id="book">
    <div className="container">
      <div className="lm-cta__card">
        <div className="lm-cta__glow"/>
        <span className="eyebrow" style={{ position: "relative", zIndex: 1 }}>Premium service · 12 client cap</span>
        <h2 className="display h2" style={{ position: "relative", zIndex: 1, marginTop: 20 }}>
          Ready to stop losing<br/>leads to <span className="italic-accent">slow follow-up?</span>
        </h2>
        <p className="lead" style={{ position: "relative", zIndex: 1, marginTop: 16 }}>
          Book a 30-minute strategy call. We'll audit your current funnel and show you exactly where the leaks are — even if you don't end up working with us.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
          <a href="#" className="btn btn-primary">Book strategy call <span className="arrow"><Arrow/></span></a>
          <a href="#" className="btn btn-ghost">Download playbook (PDF)</a>
        </div>
      </div>
    </div>
  </section>
);

/* ----- Footer ------------------------------------------------- */
const Footer = () => (
  <footer className="lm-footer">
    <div className="container">
      <div className="lm-footer__grid">
        <div className="lm-footer__brand">
          <Logo />
          <p style={{ color: "var(--fg-2)", marginTop: 16, fontSize: 14, maxWidth: 320 }}>
            We build the lead-response and nurture systems used by top-performing brokerages. Premium service, 12 active clients only.
          </p>
        </div>
        <div>
          <div className="lm-footer__head">Services</div>
          <ul>
            <li><a href="#services">Instant response</a></li>
            <li><a href="#services">Nurture engine</a></li>
            <li><a href="#services">Ad creative</a></li>
            <li><a href="#services">Lead qualification</a></li>
          </ul>
        </div>
        <div>
          <div className="lm-footer__head">Company</div>
          <ul>
            <li><a href="#process">Process</a></li>
            <li><a href="#results">Case studies</a></li>
            <li><a href="Blogs.html">Blog</a></li>
            <li><a href="#book">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="lm-footer__head">Get a strategy call</div>
          <p style={{ color: "var(--fg-2)", fontSize: 14, marginTop: 8 }}>30 minutes. Funnel audit included. No pitch unless you ask for one.</p>
          <a href="#book" className="btn btn-primary" style={{ marginTop: 14 }}>Book now <span className="arrow"><Arrow/></span></a>
        </div>
      </div>
      <div className="lm-footer__legal">
        <div>© 2026 Lumora Group · Premium client cap reached for Q3</div>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Security</a>
        </div>
      </div>
    </div>
  </footer>
);

/* Export to window */
Object.assign(window, {
  Logo, Nav, Arrow, Hero, YouTubeShort, FloatingStat, LogoStrip,
  Stats, Services, Process, Templates, Testimonials, Star, FAQ, CTA, Footer, Check,
});
