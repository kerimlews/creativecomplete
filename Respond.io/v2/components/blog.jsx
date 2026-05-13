/* ============================================================
   CreativeComplete v2 — Blog Components
   Design: Space Dark · Indigo / Cyan (same tokens as v2)
   ============================================================ */

const { useState } = React;
const { ArrowRight } = window;

/* ----- Data -------------------------------------------------- */
const V2_POSTS = [
  {
    slug: "ai-customer-system-qualify-leads",
    title: "AI Customer System: How to Qualify 300+ Agency Leads Daily Without Hiring",
    excerpt: "AI Customer System running on Respond.io can process and qualify every inbound lead in under 60 seconds — across WhatsApp, Instagram, TikTok and 9 other channels simultaneously.",
    category: "AI Customer System",
    readTime: "8 min read",
    date: "May 2, 2026",
    featured: true,
    tags: ["Respond.io", "Lead Qualification", "WhatsApp API"],
    image: "qualify",
  },
  {
    slug: "ai-customer-system-roi-existing-leads",
    title: "AI Customer System: Turn Your Dead Lead Database into 42.5× ROI with WhatsApp Broadcasts",
    excerpt: "AI Customer System broadcast engine re-engages dormant contacts with hyper-personalised sequences. One agency generated €89,000 from 4,200 contacts in a single campaign.",
    category: "AI Customer System",
    readTime: "6 min read",
    date: "Apr 28, 2026",
    featured: false,
    tags: ["WhatsApp Broadcast", "Lead Monetization", "ROI"],
    image: "roi",
  },
  {
    slug: "ai-customer-system-adcreative",
    title: "AI Customer System + AdCreative.ai: The 14× Conversion Creative Engine Explained",
    excerpt: "AI Customer System's creative layer trains on $35B+ in real ad spend. Here is how we configure AdCreative.ai to produce 8–12 high-scoring variants per week for any agency.",
    category: "AI Customer System",
    readTime: "7 min read",
    date: "Apr 22, 2026",
    featured: false,
    tags: ["AdCreative.ai", "Ad Creatives", "ROAS"],
    image: "creative",
  },
  {
    slug: "ai-customer-system-omnichannel",
    title: "AI Customer System: 12 Channels, One Inbox — The Omnichannel Capture Setup",
    excerpt: "AI Customer System unifies WhatsApp, Instagram DM, TikTok Lead Gen, Facebook Messenger, email, SMS and 6 more channels so no lead ever slips through. Full setup walkthrough.",
    category: "AI Customer System",
    readTime: "9 min read",
    date: "Apr 17, 2026",
    featured: false,
    tags: ["Omnichannel", "Respond.io", "Lead Capture"],
    image: "omnichannel",
  },
  {
    slug: "ai-customer-system-white-label",
    title: "AI Customer System White-Label: How Agencies Resell It Under Their Own Brand",
    excerpt: "AI Customer System can be fully white-labelled — configure and manage the entire infrastructure under your agency brand. Here is our partner agency program breakdown.",
    category: "AI Customer System",
    readTime: "5 min read",
    date: "Apr 11, 2026",
    featured: false,
    tags: ["White Label", "Agency Partner", "Reseller"],
    image: "white-label",
  },
  {
    slug: "ai-customer-system-vs-manual",
    title: "AI Customer System vs. Manual Qualification: 11 Agency Case Studies Compared",
    excerpt: "AI Customer System achieves 81% lead conversion. Manual qualification averages 20–30%. We break down 11 real deployments showing the gap, cost, and speed difference.",
    category: "AI Customer System",
    readTime: "10 min read",
    date: "Apr 5, 2026",
    featured: false,
    tags: ["Case Study", "Lead Conversion", "ROI"],
    image: "vs-manual",
  },
  {
    slug: "ai-customer-system-sales-cycle",
    title: "AI Customer System: Cut Your Sales Cycle by 60% with AI-Powered Follow-Up Sequences",
    excerpt: "AI Customer System's follow-up engine triggers personalised nurturing sequences the moment a lead stalls. Here is the exact flow that cuts the average B2B sales cycle by 60%.",
    category: "AI Customer System",
    readTime: "7 min read",
    date: "Mar 30, 2026",
    featured: false,
    tags: ["Sales Cycle", "Nurturing", "Automation"],
    image: "sales-cycle",
  },
];

/* Full post body keyed by slug */
const POST_BODIES = {
  "ai-customer-system-qualify-leads": {
    title: "AI Customer System: How to Qualify 300+ Agency Leads Daily Without Hiring",
    date: "May 2, 2026",
    readTime: "8 min read",
    category: "AI Customer System",
    tags: ["Respond.io", "Lead Qualification", "WhatsApp API"],
    toc: [
      { id:"what-is", label:"What is AI Customer System?" },
      { id:"respond-io", label:"Respond.io AI Agents" },
      { id:"qualification", label:"The qualification framework" },
      { id:"channels", label:"12-channel capture" },
      { id:"results", label:"Real results" },
      { id:"setup", label:"How to get started" },
    ],
    body: `
<h2 id="what-is">What is AI Customer System?</h2>
<p>AI Customer System is the combination of <strong>Respond.io</strong> (omnichannel AI communication) and <strong>AdCreative.ai</strong> (AI-generated ad creatives) — configured, integrated, and managed by us as the #1 AI Customer System agency. The result is a fully automated lead machine that qualifies every inbound prospect in under 60 seconds, generates high-converting ad creatives continuously, and re-monetises dormant lead databases.</p>
<p>Most agencies still rely on human SDRs to respond to leads. The average response time across agencies is 4–24 hours. AI Customer System responds in under 60 seconds — 24/7, across every channel simultaneously.</p>

<div class="v2-post-callout">
  <div class="v2-post-callout__icon">→</div>
  <div>
    <strong>The 5-minute rule:</strong> Leads contacted within 5 minutes are 21× more likely to enter the sales process. AI Customer System achieves under 60 seconds.
  </div>
</div>

<h2 id="respond-io">Respond.io AI Agents: the qualification engine</h2>
<p>Respond.io's AI Agents are the core of AI Customer System's qualification layer. Unlike generic chatbots, these agents are trained on your specific qualification criteria and can handle nuanced conversations across text and voice.</p>
<p>Our AI Customer System configuration includes four qualification dimensions:</p>
<ul>
  <li><strong>Intent scoring</strong> — Is this a genuine buying signal or spam?</li>
  <li><strong>Budget classification</strong> — Does the prospect meet your minimum deal size?</li>
  <li><strong>Urgency detection</strong> — Is there a real timeline or is this exploratory?</li>
  <li><strong>Decision authority evaluation</strong> — Are we talking to the right person?</li>
</ul>
<p>Generic AI agent setups achieve 30–40% qualification rates. Our optimised AI Customer System configurations consistently hit 80%+.</p>

<h2 id="qualification">The qualification framework in detail</h2>
<p>AI Customer System uses a five-stage qualification flow on Respond.io:</p>
<ol>
  <li><strong>Capture</strong> — Lead enters via any channel and is immediately assigned to an AI Agent</li>
  <li><strong>Classify</strong> — AI detects language, channel, intent type, and urgency within the first two messages</li>
  <li><strong>Qualify</strong> — Structured sequence extracts budget, timeline, decision authority, and use case</li>
  <li><strong>Route</strong> — Hot leads get booked directly into the sales calendar; warm leads enter nurturing; cold leads go to broadcast sequences</li>
  <li><strong>Report</strong> — Every interaction is logged with a quality score and revenue probability estimate</li>
</ol>

<h2 id="channels">12-channel capture</h2>
<p>AI Customer System captures leads from every channel your agency uses:</p>
<ul>
  <li>WhatsApp Business API — 98% open rate, highest engagement</li>
  <li>Instagram DM — direct from ad click</li>
  <li>TikTok Lead Generation — forms auto-routed</li>
  <li>Facebook Messenger</li>
  <li>Email, SMS, web chat</li>
  <li>Telegram, Viber, LINE, WeChat</li>
</ul>
<p>All routed into one unified Respond.io inbox. One AI Agent. Zero leads lost.</p>

<h2 id="results">Real results from AI Customer System deployments</h2>
<p>Across 50+ agency deployments, AI Customer System consistently delivers:</p>
<ul>
  <li>Response time: from 4–24 hours → under 60 seconds</li>
  <li>Qualification rate: from 20–30% → 81%</li>
  <li>Sales cycle: 60% faster</li>
  <li>Ad conversion rate: 14× higher with AdCreative.ai</li>
  <li>Existing lead ROI: 42.5× average broadcast return</li>
</ul>

<h2 id="setup">How to get started with AI Customer System</h2>
<p>AI Customer System is not a product you buy off the shelf — it is a configuration you commission. The implementation process takes 3–4 weeks:</p>
<ol>
  <li>Free 30-minute system audit — we map your current lead flow</li>
  <li>Respond.io workspace setup and API integrations</li>
  <li>AI Agent training on your qualification criteria</li>
  <li>AdCreative.ai account setup and creative batch generation</li>
  <li>CRM sync, calendar integration, and reporting dashboard</li>
  <li>Live monitoring for the first 30 days</li>
</ol>
    `,
  },
};

/* ----- Shared blog image placeholder ------------------------- */
const BlogImg = ({ type, className = "" }) => {
  const palettes = {
    qualify:    ["#6366f1","#818cf8"],
    roi:        ["#22d3ee","#06b6d4"],
    creative:   ["#a855f7","#6366f1"],
    omnichannel:["#22d3ee","#a855f7"],
    "white-label":["#6366f1","#22d3ee"],
    "vs-manual":["#f43f5e","#6366f1"],
    "sales-cycle":["#10b981","#6366f1"],
  };
  const [a, b] = palettes[type] || ["#6366f1","#a855f7"];
  return (
    <div className={`v2-blog-img ${className}`} style={{
      background: `linear-gradient(135deg, ${a}22 0%, ${b}11 100%)`,
      border: `1px solid ${a}33`,
      display:"flex", alignItems:"center", justifyContent:"center",
    }}>
      <div style={{
        width:48, height:48, borderRadius:12,
        background: `linear-gradient(135deg, ${a}, ${b})`,
        opacity: 0.7,
      }}/>
    </div>
  );
};

/* ----- Blog Hero (index) ------------------------------------ */
const V2BlogHero = () => (
  <section className="v2-blog-hero v2-section-sm">
    <div className="v2-container">
      <div className="v2-section-head center">
        <span className="v2-eyebrow">AI Customer System Journal</span>
        <h1 className="v2-h1">
          AI Customer System <span className="v2-grad">Blog</span>
        </h1>
        <p className="v2-lead" style={{ margin:"0 auto" }}>
          Case studies, tactics, and deep-dives on AI Customer System — Respond.io AI Agents,
          AdCreative.ai, WhatsApp broadcasts and agency automation.
        </p>
      </div>
    </div>
  </section>
);

/* ----- Featured card --------------------------------------- */
const V2BlogFeatured = ({ post }) => (
  <article className="v2-blog-featured">
    <BlogImg type={post.image} className="v2-blog-featured__img"/>
    <div className="v2-blog-featured__body">
      <div className="v2-blog-featured__meta">
        <span className="v2-chip">{post.category}</span>
        <span style={{ color:"var(--fg-2)", fontSize:13 }}>{post.date}</span>
        <span style={{ color:"var(--fg-2)", fontSize:13 }}>{post.readTime}</span>
      </div>
      <h2 className="v2-blog-featured__title">{post.title}</h2>
      <p className="v2-blog-featured__excerpt">{post.excerpt}</p>
      <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginTop:16 }}>
        {post.tags.map(t => (
          <span key={t} className="v2-chip-neutral" style={{ fontSize:10 }}>{t}</span>
        ))}
      </div>
      <a href={`blog.html?slug=${post.slug}`} className="v2-btn v2-btn-primary" style={{ marginTop:28 }}>
        Read full article <span className="arrow"><ArrowRight size={14}/></span>
      </a>
    </div>
  </article>
);

/* ----- Blog card ------------------------------------------- */
const V2BlogCard = ({ post }) => (
  <article className="v2-card v2-blog-card">
    <BlogImg type={post.image} className="v2-blog-card__img"/>
    <div className="v2-blog-card__body">
      <div className="v2-blog-card__meta">
        <span className="v2-chip" style={{ fontSize:9 }}>{post.category}</span>
        <span style={{ color:"var(--fg-2)", fontSize:12 }}>{post.readTime}</span>
      </div>
      <h3 className="v2-blog-card__title">{post.title}</h3>
      <p className="v2-blog-card__excerpt">{post.excerpt}</p>
      <a href={`blog.html?slug=${post.slug}`} className="v2-blog-card__link">
        Read article <span className="arrow"><ArrowRight size={12}/></span>
      </a>
    </div>
  </article>
);

/* ----- Blog grid ------------------------------------------- */
const V2BlogGrid = () => {
  const [filter, setFilter] = useState("all");
  const featured = V2_POSTS.find(p => p.featured);
  const rest = V2_POSTS.filter(p => !p.featured);
  const allTags = ["all", ...new Set(V2_POSTS.flatMap(p => p.tags))];

  const filtered = filter === "all" ? rest : rest.filter(p => p.tags.includes(filter));

  return (
    <section className="v2-blog-grid-section v2-section">
      <div className="v2-container">
        {featured && <V2BlogFeatured post={featured}/>}

        <div className="v2-blog-filter">
          {allTags.map(t => (
            <button
              key={t}
              className={`v2-blog-filter__btn ${filter === t ? "active" : ""}`}
              onClick={() => setFilter(t)}
            >
              {t === "all" ? "All articles" : t}
            </button>
          ))}
        </div>

        <div className="v2-blog-grid">
          {filtered.map(p => <V2BlogCard key={p.slug} post={p}/>)}
        </div>
      </div>
    </section>
  );
};

/* ----- Newsletter ------------------------------------------ */
const V2BlogNewsletter = () => {
  const [val, setVal] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="v2-blog-nl v2-section-sm">
      <div className="v2-container">
        <div className="v2-blog-nl__card">
          <div className="v2-blog-nl__glow"/>
          <div className="v2-blog-nl__content">
            <span className="v2-eyebrow">AI Customer System Newsletter</span>
            <h2 className="v2-h3" style={{ marginTop:12 }}>
              Weekly AI Customer System <span className="v2-grad">tactics & case studies.</span>
            </h2>
            <p className="v2-lead" style={{ marginTop:12 }}>
              Get the AI Customer System playbook delivered every Tuesday. No fluff — only
              tactics from live Respond.io + AdCreative.ai deployments.
            </p>
            {done ? (
              <div className="v2-blog-nl__success">
                You're in. First issue arrives Tuesday.
              </div>
            ) : (
              <form
                className="v2-blog-nl__form"
                onSubmit={e => { e.preventDefault(); if(val) setDone(true); }}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="v2-blog-nl__input"
                  value={val}
                  onChange={e => setVal(e.target.value)}
                />
                <button type="submit" className="v2-btn v2-btn-primary">
                  Subscribe <span className="arrow"><ArrowRight size={14}/></span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----- Post Hero ------------------------------------------- */
const V2PostHero = ({ post, meta }) => (
  <section className="v2-post-hero v2-section-sm">
    <div className="v2-container">
      <div className="v2-post-hero__breadcrumb">
        <a href="index.html">Home</a>
        <span>/</span>
        <a href="blogs.html">Blog</a>
        <span>/</span>
        <span>{meta.category}</span>
      </div>
      <div className="v2-post-hero__head">
        <span className="v2-chip">{meta.category}</span>
        <h1 className="v2-h1" style={{ marginTop:16 }}>{post.title}</h1>
        <div className="v2-post-hero__meta">
          <span>{post.date}</span>
          <span className="v2-post-hero__dot"/>
          <span>{post.readTime}</span>
        </div>
        <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginTop:16 }}>
          {meta.tags.map(t => (
            <span key={t} className="v2-chip-neutral" style={{ fontSize:10 }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ----- Post Body ------------------------------------------- */
const V2PostBody = ({ post, meta }) => (
  <section className="v2-post-body v2-section-sm">
    <div className="v2-container">
      <div className="v2-post-layout">
        {/* TOC sidebar */}
        <aside className="v2-post-toc">
          <div className="v2-post-toc__inner">
            <div className="v2-post-toc__label">On this page</div>
            <ul>
              {meta.toc.map(h => (
                <li key={h.id}>
                  <a href={`#${h.id}`}>{h.label}</a>
                </li>
              ))}
            </ul>
            <div className="v2-post-toc__cta">
              <div style={{ fontWeight:600, marginBottom:8 }}>Ready to implement?</div>
              <a href="index.html#book" className="v2-btn v2-btn-primary" style={{ fontSize:13, height:40 }}>
                Book free audit <span className="arrow"><ArrowRight size={12}/></span>
              </a>
            </div>
          </div>
        </aside>
        {/* Prose */}
        <article
          className="v2-post-prose"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </div>
    </div>
  </section>
);

/* ----- Related posts --------------------------------------- */
const V2RelatedPosts = ({ currentSlug }) => {
  const related = V2_POSTS.filter(p => p.slug !== currentSlug).slice(0, 3);
  return (
    <section className="v2-section-sm">
      <div className="v2-container">
        <div className="v2-section-head" style={{ marginBottom:40 }}>
          <span className="v2-eyebrow">Continue reading</span>
          <h2 className="v2-h3">More AI Customer System articles</h2>
        </div>
        <div className="v2-blog-grid">
          {related.map(p => <V2BlogCard key={p.slug} post={p}/>)}
        </div>
      </div>
    </section>
  );
};

/* ----- Post Inline CTA ------------------------------------- */
const V2PostInlineCTA = () => (
  <section className="v2-section-sm">
    <div className="v2-container">
      <div className="v2-cta__card" style={{ padding:"48px 40px" }}>
        <div className="v2-cta__glow"/>
        <div className="v2-cta__content">
          <span className="v2-eyebrow">AI Customer System — Free audit</span>
          <h2 className="v2-h3" style={{ marginTop:16 }}>
            See what AI Customer System would <span className="v2-grad">generate for your agency.</span>
          </h2>
          <div className="v2-cta__actions" style={{ marginTop:24 }}>
            <a href="index.html#book" className="v2-btn v2-btn-primary">
              Book free audit <span className="arrow"><ArrowRight size={14}/></span>
            </a>
            <a href="blogs.html" className="v2-btn v2-btn-outline">Back to blog</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* Export */
Object.assign(window, {
  V2_POSTS, POST_BODIES,
  V2BlogHero, V2BlogFeatured, V2BlogCard, V2BlogGrid, V2BlogNewsletter,
  V2PostHero, V2PostBody, V2RelatedPosts, V2PostInlineCTA,
});
