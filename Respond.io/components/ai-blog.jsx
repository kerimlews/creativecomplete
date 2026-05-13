/* ============================================================
   AI Customer System — Blog components
   In Astro: src/components/ai/blog/{AIBlogHero, AIBlogCard,
             AIBlogGrid, AINewsletter, AIBlogPost}.astro
   Main keyword: AI Customer System
   ============================================================ */

/* ----- Blog Hero ---------------------------------------------- */
const AIBlogHero = () => (
  <section className="ai-blog-hero">
    <div className="container">
      <span className="eyebrow">AI Customer System — The Agency Playbook</span>
      <h1 className="display h1" style={{ marginTop: 24, maxWidth: "18ch" }}>
        AI Customer System <span className="italic-accent">insights</span><br/>
        for agencies that win.
      </h1>
      <p className="lead" style={{ marginTop: 24 }}>
        AI Customer System tactics, Respond.io strategies, AdCreative.ai playbooks, and
        omnichannel lead conversion frameworks — written for agency owners and performance
        marketing teams. We are the #1 AI Customer System agency.
      </p>
      <div className="ai-blog-hero__filters">
        {["All posts", "AI Lead Qualification", "Ad Creative AI", "WhatsApp Marketing", "Lead Monetization", "Case Studies"].map((f, i) => (
          <button key={f} className={`ai-blog-filter ${i === 0 ? "is-active" : ""}`}>{f}</button>
        ))}
      </div>
    </div>
  </section>
);

/* ----- Blog Posts Data ---------------------------------------- */
const AI_POSTS = [
  {
    slug: "ai-customer-system-qualify-300-leads",
    title: "AI Customer System: How to Qualify 300+ Agency Leads Daily Without Hiring",
    excerpt: "AI Customer System powered by Respond.io AI Agents qualifies every inbound lead in under 60 seconds — 24/7, across 12 channels. Here's the exact setup top agencies use to achieve 81% conversion rates without a single extra hire.",
    category: "AI Lead Qualification",
    readTime: "9 min",
    date: "May 6, 2026",
    author: "Kerim Alihodža",
    featured: true,
    tone: "primary",
    keyword: "AI Customer System",
  },
  {
    slug: "ai-customer-system-broadcast-roi",
    title: "AI Customer System Broadcast Campaigns: Turn Cold Leads Into 42.5× ROI",
    excerpt: "AI Customer System's most underused weapon is your existing CRM. Respond.io broadcast campaigns to dormant contacts average 42.5x ROI. Here's the exact sequence that generates revenue from leads you already paid for.",
    category: "Lead Monetization",
    readTime: "11 min",
    date: "Apr 28, 2026",
    author: "Kerim Alihodža",
    tone: "cream",
    keyword: "AI Customer System",
  },
  {
    slug: "ai-ad-creative-system-adcreative",
    title: "AI Ad Creative System: How Agencies Get 14× More Conversions With AdCreative.ai",
    excerpt: "AI Customer System's creative engine — AdCreative.ai — generates ad variants trained on $35B+ in ad spend data. Creative Scoring AI predicts performance before you spend. Here's how agencies achieve 14x conversion lifts.",
    category: "Ad Creative AI",
    readTime: "8 min",
    date: "Apr 21, 2026",
    author: "Kerim Alihodža",
    tone: "dark",
    keyword: "AI Customer System",
  },
  {
    slug: "ai-customer-system-whatsapp-guide",
    title: "AI Customer System on WhatsApp: The Complete Agency Guide to 60% Faster Sales",
    excerpt: "AI Customer System on WhatsApp Business API delivers 60% faster sales cycles and 81% qualification rates. This is the complete setup guide — from AI Agent configuration to broadcast sequences — that top agencies use.",
    category: "WhatsApp Marketing",
    readTime: "13 min",
    date: "Apr 14, 2026",
    author: "Kerim Alihodža",
    tone: "primary",
    keyword: "AI Customer System",
  },
  {
    slug: "ai-customer-system-case-study-81-percent",
    title: "AI Customer System Case Study: 81% Lead Conversion Rate in 90 Days",
    excerpt: "AI Customer System implementation for a digital marketing agency: zero to 81% conversion rate in 90 days. Full breakdown of the Respond.io + AdCreative.ai setup, the metrics that mattered, and what we'd do differently.",
    category: "Case Studies",
    readTime: "14 min",
    date: "Apr 7, 2026",
    author: "Kerim Alihodža",
    tone: "cream",
    keyword: "AI Customer System",
  },
  {
    slug: "ai-customer-system-omnichannel-guide",
    title: "AI Customer System: Omnichannel Lead Capture From WhatsApp to TikTok",
    excerpt: "AI Customer System unifies WhatsApp, Instagram, TikTok, Facebook, email, and SMS into one AI-powered inbox. Here's how conversation-led growth works across every channel — and the routing logic that makes it 60% faster.",
    category: "AI Lead Qualification",
    readTime: "10 min",
    date: "Mar 31, 2026",
    author: "Kerim Alihodža",
    tone: "dark",
    keyword: "AI Customer System",
  },
  {
    slug: "ai-customer-system-white-label-agencies",
    title: "AI Customer System White Label: How Agencies Resell AI-Powered Lead Systems",
    excerpt: "AI Customer System can be white-labelled — configured under your agency's brand, managed by our team, sold to your clients at any margin you choose. Here's the full partner program breakdown and economics.",
    category: "Case Studies",
    readTime: "7 min",
    date: "Mar 24, 2026",
    author: "Kerim Alihodža",
    tone: "primary",
    keyword: "AI Customer System",
  },
];

/* ----- Blog Card ---------------------------------------------- */
const AIBlogCard = ({ post, featured = false }) => (
  <a href={`AIBlog.html?slug=${post.slug}`} className={`ai-blog-card ${featured ? "is-featured" : ""} ai-blog-card--${post.tone}`}>
    <div className={`img-placeholder ${post.tone === "cream" ? "cream" : ""} ai-blog-card__img`}>
      {post.category} · {post.keyword}
    </div>
    <div className="ai-blog-card__body">
      <div className="ai-blog-card__meta">
        <span className="chip">{post.category}</span>
        <span style={{ fontSize: 12, color: post.tone === "cream" ? "#5a544c" : "var(--fg-2)" }}>
          {post.readTime} · {post.date}
        </span>
      </div>
      <h3 className="ai-blog-card__title">{post.title}</h3>
      <p className="ai-blog-card__excerpt">{post.excerpt}</p>
      <div className="ai-blog-card__footer">
        <span style={{ fontSize: 13 }}>By {post.author}</span>
        <span className="ai-blog-card__arrow"><Arrow/></span>
      </div>
    </div>
  </a>
);

/* ----- Blog Grid ---------------------------------------------- */
const AIBlogGrid = () => {
  const featured = AI_POSTS.find(p => p.featured);
  const rest = AI_POSTS.filter(p => !p.featured);
  return (
    <section className="ai-blog-grid section">
      <div className="container">
        {featured && <AIBlogCard post={featured} featured/>}
        <div className="ai-blog-grid__rest">
          {rest.map(p => <AIBlogCard key={p.slug} post={p}/>)}
        </div>
      </div>
    </section>
  );
};

/* ----- Newsletter --------------------------------------------- */
const AINewsletter = () => (
  <section className="ai-newsletter">
    <div className="container">
      <div className="ai-newsletter__card">
        <div className="ai-newsletter__copy">
          <span className="eyebrow">AI Customer System newsletter</span>
          <h2 className="display h2" style={{ marginTop: 16 }}>
            One AI playbook,<br/><span className="italic-accent">every Tuesday.</span>
          </h2>
          <p className="lead" style={{ marginTop: 16 }}>
            AI Customer System tactics, Respond.io updates, AdCreative.ai strategies —
            direct from the #1 AI Customer System agency. 2,400+ agency owners read it.
          </p>
        </div>
        <form className="ai-newsletter__form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="you@youragency.com" className="ai-newsletter__input"/>
          <button type="submit" className="btn btn-primary">
            Subscribe <span className="arrow"><Arrow/></span>
          </button>
          <span style={{ fontSize: 12, color: "var(--fg-2)" }}>
            Unsubscribe anytime. We never share your email.
          </span>
        </form>
      </div>
    </div>
  </section>
);

/* ----- Single Blog Post --------------------------------------- */
const AIBlogPostHero = ({ post }) => (
  <section className="ai-post-hero">
    <div className="container ai-post-hero__inner">
      <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
        <a href="AIBlogs.html" className="chip">← Back to all</a>
        <span className="chip chip-primary">{post.category}</span>
      </div>
      <h1 className="display h1" style={{ maxWidth: "22ch" }}>{post.title}</h1>
      <div className="ai-post-hero__meta">
        <div className="ai-post-hero__author">
          <div className="ai-post-hero__avatar"/>
          <div>
            <div style={{ fontWeight: 600 }}>{post.author}</div>
            <div style={{ color: "var(--fg-2)", fontSize: 13 }}>#1 AI Customer System Agency</div>
          </div>
        </div>
        <div className="ai-post-hero__sep"/>
        <div>
          <div style={{ color: "var(--fg-2)", fontSize: 12, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Published</div>
          <div style={{ fontSize: 14 }}>{post.date}</div>
        </div>
        <div className="ai-post-hero__sep"/>
        <div>
          <div style={{ color: "var(--fg-2)", fontSize: 12, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Read time</div>
          <div style={{ fontSize: 14 }}>{post.readTime}</div>
        </div>
      </div>
      <div className="img-placeholder ai-post-hero__img">AI Customer System — {post.category}</div>
    </div>
  </section>
);

/* Featured post body — "AI Customer System: How to Qualify 300+ Agency Leads" */
const AIBlogPostBody = () => (
  <article className="ai-post-body">
    <div className="container ai-post-body__inner">
      <aside className="ai-post-toc">
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-2)", marginBottom: 16 }}>On this page</div>
        <ul>
          <li><a href="#what-is" className="is-active">What is AI Customer System?</a></li>
          <li><a href="#respond-io">Respond.io AI Agents setup</a></li>
          <li><a href="#channels">12 channels, one inbox</a></li>
          <li><a href="#qualification">The qualification framework</a></li>
          <li><a href="#results">Real results: 81% conversion</a></li>
          <li><a href="#setup">How to get started</a></li>
        </ul>
        <div className="ai-post-toc__share">
          <button className="ai-post-toc__btn">Share</button>
          <button className="ai-post-toc__btn">Save</button>
        </div>
      </aside>

      <div className="ai-post-prose">
        <p className="ai-post-lead">
          AI Customer System is the highest-leverage growth investment an agency can make in 2026.
          While competitors manually qualify leads — losing 80% to slow response and zero follow-up —
          agencies running AI Customer System convert 81% of inbound leads, automatically, 24/7,
          across every channel their clients use. This is how to build one.
        </p>

        <h2 id="what-is" className="display h3">What is an AI Customer System?</h2>
        <p>
          AI Customer System is the combination of an omnichannel conversation platform (Respond.io),
          an AI creative engine (AdCreative.ai), and the workflow logic that connects them. It handles
          the entire lead lifecycle: capture, qualification, creative nurturing, and existing lead
          monetization — without human intervention at the routine stages.
        </p>
        <p>
          The term "AI Customer System" describes a managed setup — not a single tool. It's the
          configuration, the flows, the training, the ongoing optimisation. Anyone can buy
          Respond.io. Fewer know how to configure AI Agents that achieve 81% qualification rates.
          That gap is where the value lives.
        </p>

        <blockquote className="ai-post-quote">
          "AI Customer System doesn't replace your sales team. It makes sure every lead that
          reaches your sales team is already pre-qualified, context-rich, and meeting-ready."
        </blockquote>

        <h2 id="respond-io" className="display h3">Respond.io AI Agents setup</h2>
        <p>
          Respond.io is the foundation of AI Customer System. Its AI Agents handle first-touch
          qualification across every channel — asking the right questions, scoring intent, and
          routing leads appropriately. The key is configuration: generic AI Agents achieve 30–40%
          qualification rates. Agency-tuned AI Agents achieve 80%+.
        </p>
        <p>
          The three elements of a high-performing Respond.io AI Agent are: (1) a qualification
          script calibrated to your specific lead quality criteria, (2) fallback routing for edge
          cases, and (3) a scoring model that reflects what "good" actually means for your clients.
          We tune these across hundreds of agency setups.
        </p>

        <div className="ai-post-callout">
          <div className="ai-post-callout__num">81%<span style={{ fontSize: 20 }}> conv.</span></div>
          <div className="ai-post-callout__body">
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Industry average: 20–30%</div>
            <div style={{ color: "var(--fg-1)", fontSize: 14 }}>
              AI Customer System with properly configured Respond.io AI Agents achieves 81%
              conversion rates — 3–4× the industry baseline. The difference is setup quality.
            </div>
          </div>
        </div>

        <h2 id="channels" className="display h3">12 channels, one inbox</h2>
        <p>
          AI Customer System captures leads from WhatsApp Business API, Instagram DM, TikTok
          Lead Generation, Facebook Messenger, email, SMS, web chat, Telegram, Viber, and more —
          all flowing into one unified Respond.io inbox. No lead falls through a channel gap.
        </p>

        <h2 id="qualification" className="display h3">The qualification framework</h2>
        <p>
          AI Customer System uses a four-axis qualification model adapted for agency services:
          Intent (what do they want?), Budget (can they afford it?), Timeline (when do they need it?),
          Authority (can they decide?). Each axis is scored 0–100. Leads above threshold go to
          sales. Leads below threshold enter nurture. Everything is logged, segmented, and trackable.
        </p>

        <h2 id="results" className="display h3">Real results: 81% conversion rate</h2>
        <p>
          Across our AI Customer System client base, the median lead-to-qualification conversion
          rate is 81%. The median time-to-first-touch is 34 seconds. The median sales cycle
          reduction is 60%. These aren't outliers — they're the expected baseline when AI Customer
          System is properly configured.
        </p>

        <h2 id="setup" className="display h3">How to get started</h2>
        <p>
          AI Customer System takes 3–4 weeks to configure from scratch. Week 1: channel integration
          and inbox setup. Week 2: AI Agent training and qualification flow build. Week 3: creative
          pipeline setup with AdCreative.ai. Week 4: existing lead broadcast and re-engagement.
          By week 5, most clients have their first AI-qualified pipeline fully operational.
        </p>

        <div className="ai-post-cta-inline">
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 28, letterSpacing: "-0.01em" }}>
              Want AI Customer System built for your agency?
            </div>
            <div style={{ color: "var(--fg-1)", marginTop: 6 }}>
              Free 30-minute audit. We'll map your lead flow and show you exactly what AI Customer System would generate.
            </div>
          </div>
          <a href="AICustomerSystem.html#book" className="btn btn-primary">
            Book free audit <span className="arrow"><Arrow/></span>
          </a>
        </div>
      </div>
    </div>
  </article>
);

const AIRelatedPosts = () => {
  const related = AI_POSTS.filter(p => !p.featured).slice(0, 3);
  return (
    <section className="ai-related section">
      <div className="container">
        <header className="ai-section-head" style={{ alignItems: "flex-start", textAlign: "left", margin: "0 0 40px" }}>
          <span className="eyebrow">Keep reading</span>
          <h2 className="display h2">More AI Customer System playbooks.</h2>
        </header>
        <div className="ai-related__grid">
          {related.map(p => <AIBlogCard key={p.slug} post={p}/>)}
        </div>
      </div>
    </section>
  );
};

/* Export */
Object.assign(window, {
  AIBlogHero, AIBlogCard, AIBlogGrid, AINewsletter,
  AIBlogPostHero, AIBlogPostBody, AIRelatedPosts, AI_POSTS,
});
