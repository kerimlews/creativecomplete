/* ============================================================
   Lumora — Blog components
   In Astro: src/components/blog/{BlogHero, BlogCard, BlogPost,
                                  TOC, Newsletter, AuthorCard}.astro
   ============================================================ */

const BlogHero = () => (
  <section className="blog-hero">
    <div className="container">
      <span className="eyebrow">The Lumora field guide</span>
      <h1 className="display h1" style={{ marginTop: 24, maxWidth: "16ch" }}>
        Playbooks for <span className="italic-accent">brokerages</span><br/>
        that close more deals.
      </h1>
      <p className="lead" style={{ marginTop: 24 }}>
        Tactics, frameworks and post-mortems from the lead-response systems we run for top-performing
        real-estate teams. Written for sales leaders, ops, and hands-on agents.
      </p>

      <div className="blog-hero__filters">
        {["All posts", "Lead response", "Follow-up", "Ad creative", "Operations", "Case studies"].map((f, i) => (
          <button key={f} className={`blog-filter ${i === 0 ? "is-active" : ""}`}>{f}</button>
        ))}
      </div>
    </div>
  </section>
);

const POSTS = [
  {
    slug: "60-second-rule",
    title: "The 60-second rule: why first response time predicts close rate",
    excerpt: "Internal MIT/Lead Response Management research has shown contacting a lead within 60 seconds dramatically lifts qualification odds. Here's how to actually do it at 300+ leads/day.",
    category: "Lead response",
    readTime: "8 min",
    date: "Apr 28, 2026",
    author: "Eli Marston",
    featured: true,
    tone: "primary",
  },
  {
    slug: "dormant-database-audit",
    title: "Auditing your dormant CRM: where the next 10 listings are hiding",
    excerpt: "A repeatable 5-step audit to surface forgotten leads sitting in your database — and the re-engagement script that gets ~60% to reply.",
    category: "Follow-up",
    readTime: "12 min",
    date: "Apr 21, 2026",
    author: "Priya Saldanha",
    tone: "cream",
  },
  {
    slug: "ad-creative-cadence",
    title: "Why your ad creative needs a weekly cadence (and what to make)",
    excerpt: "Most brokerages run the same three creatives for six months. Here's the weekly production rhythm we use to keep CTR climbing without ad fatigue.",
    category: "Ad creative",
    readTime: "9 min",
    date: "Apr 14, 2026",
    author: "Marcus Cole",
    tone: "dark",
  },
  {
    slug: "scoring-model",
    title: "A scoring model for inbound real-estate leads that actually works",
    excerpt: "Generic BANT doesn't fit real estate. We share the four-axis model we use across all client engagements and how to tune it for your market.",
    category: "Operations",
    readTime: "11 min",
    date: "Apr 07, 2026",
    author: "Eli Marston",
    tone: "primary",
  },
  {
    slug: "case-meridian",
    title: "Case study: how Meridian RE booked 18 meetings/week without new ad spend",
    excerpt: "A 90-day rebuild of Meridian's lead-response and nurture stack. What we changed, what we didn't, and what it cost.",
    category: "Case studies",
    readTime: "14 min",
    date: "Mar 30, 2026",
    author: "Lumora team",
    tone: "cream",
  },
  {
    slug: "open-house-followup",
    title: "The open-house follow-up sequence we send to every visitor",
    excerpt: "From the moment they sign in to 14 days later. A copy-paste sequence that lifts open-house → meeting conversion 3.4×.",
    category: "Follow-up",
    readTime: "7 min",
    date: "Mar 24, 2026",
    author: "Priya Saldanha",
    tone: "dark",
  },
  {
    slug: "agents-tools",
    title: "Why your agents shouldn't have to learn a new tool",
    excerpt: "Hot leads should land in the inbox they already check. Here's how we route everything through the existing CRM without rebuilding it.",
    category: "Operations",
    readTime: "6 min",
    date: "Mar 17, 2026",
    author: "Marcus Cole",
    tone: "primary",
  },
];

const BlogCard = ({ post, featured = false }) => (
  <a href={`Blog.html?slug=${post.slug}`} className={`blog-card ${featured ? "is-featured" : ""} blog-card--${post.tone}`}>
    <div className={`img-placeholder ${post.tone === "cream" ? "cream" : ""} blog-card__img`}>
      {post.category} imagery
    </div>
    <div className="blog-card__body">
      <div className="blog-card__meta">
        <span className="chip">{post.category}</span>
        <span style={{ fontSize: 12, color: post.tone === "cream" ? "#5a544c" : "var(--fg-2)" }}>
          {post.readTime} · {post.date}
        </span>
      </div>
      <h3 className="blog-card__title">{post.title}</h3>
      <p className="blog-card__excerpt">{post.excerpt}</p>
      <div className="blog-card__footer">
        <span style={{ fontSize: 13 }}>By {post.author}</span>
        <span className="blog-card__arrow"><Arrow/></span>
      </div>
    </div>
  </a>
);

const BlogGrid = () => {
  const featured = POSTS.find(p => p.featured);
  const rest = POSTS.filter(p => !p.featured);
  return (
    <section className="blog-grid section">
      <div className="container">
        {featured && (
          <BlogCard post={featured} featured/>
        )}
        <div className="blog-grid__rest">
          {rest.map(p => <BlogCard key={p.slug} post={p}/>)}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => (
  <section className="newsletter">
    <div className="container">
      <div className="newsletter__card">
        <div className="newsletter__copy">
          <span className="eyebrow">The field guide newsletter</span>
          <h2 className="display h2" style={{ marginTop: 16 }}>One playbook,<br/><span className="italic-accent">every Friday.</span></h2>
          <p className="lead" style={{ marginTop: 16 }}>
            Tactical breakdowns from real client engagements. No fluff, no "10 tips" listicles.
            About 1,200 brokerage leaders read it.
          </p>
        </div>
        <form className="newsletter__form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="you@brokerage.com" className="newsletter__input"/>
          <button type="submit" className="btn btn-primary">Subscribe <span className="arrow"><Arrow/></span></button>
          <span style={{ fontSize: 12, color: "var(--fg-2)" }}>Unsubscribe anytime. We never share your email.</span>
        </form>
      </div>
    </div>
  </section>
);

/* ----- Single post ----- */
const BlogPostHero = ({ post }) => (
  <section className="post-hero">
    <div className="container post-hero__inner">
      <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
        <a href="Blogs.html" className="chip">← Back to all</a>
        <span className="chip chip-primary">{post.category}</span>
      </div>
      <h1 className="display h1" style={{ maxWidth: "20ch" }}>{post.title}</h1>
      <div className="post-hero__meta">
        <div className="post-hero__author">
          <div className="post-hero__avatar"/>
          <div>
            <div style={{ fontWeight: 600 }}>{post.author}</div>
            <div style={{ color: "var(--fg-2)", fontSize: 13 }}>Partner, Lumora</div>
          </div>
        </div>
        <div className="post-hero__sep"/>
        <div>
          <div style={{ color: "var(--fg-2)", fontSize: 12, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Published</div>
          <div style={{ fontSize: 14 }}>{post.date}</div>
        </div>
        <div className="post-hero__sep"/>
        <div>
          <div style={{ color: "var(--fg-2)", fontSize: 12, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Read time</div>
          <div style={{ fontSize: 14 }}>{post.readTime}</div>
        </div>
      </div>
      <div className="img-placeholder post-hero__img">Hero imagery — {post.category}</div>
    </div>
  </section>
);

const BlogPostBody = () => (
  <article className="post-body">
    <div className="container post-body__inner">
      <aside className="post-toc">
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-2)", marginBottom: 16 }}>On this page</div>
        <ul>
          <li><a href="#why" className="is-active">Why response time matters</a></li>
          <li><a href="#math">The math at 300 leads/day</a></li>
          <li><a href="#stack">The response stack</a></li>
          <li><a href="#playbook">A 4-week rollout plan</a></li>
          <li><a href="#metrics">Metrics that matter</a></li>
        </ul>
        <div className="post-toc__share">
          <button className="post-toc__btn">Share</button>
          <button className="post-toc__btn">Save</button>
        </div>
      </aside>

      <div className="post-prose">
        <p className="post-lead">
          The single highest-leverage variable in real-estate sales isn't your ad spend, your listing
          quality, or your agents' charisma. It's how fast you respond to an inbound lead. The
          difference between 60 seconds and 5 minutes is roughly the difference between a meeting
          on the calendar and a lead lost to a competitor.
        </p>

        <h2 id="why" className="display h3">Why response time matters</h2>
        <p>
          In real estate, intent is fragile. Someone fills out a "request a viewing" form because
          they were on your IDX site for four minutes. Within those four minutes, they probably also
          had three other tabs open. The question isn't whether they're interested — they clearly
          are — it's whether you'll be the first to acknowledge that interest.
        </p>
        <p>
          Studies on B2C lead response have shown qualifying odds drop sharply once you cross the
          5-minute mark, and effectively bottom out by 30 minutes. Real estate leads are no
          different — if anything, the urgency window is shorter because buyers are anchored to
          specific listings that move fast.
        </p>

        <blockquote className="post-quote">
          "Most agencies optimise the wrong end of the funnel. Make the first 60 seconds work
          and you don't need to spend more on ads — you just need to stop wasting the leads
          you already have."
        </blockquote>

        <h2 id="math" className="display h3">The math at 300 leads/day</h2>
        <p>
          A brokerage running 300 inbound leads per day cannot — repeat, cannot — answer them
          all manually within 60 seconds. The math doesn't work even if you staff for it. With
          a typical 8-hour SDR day and 4 minutes of handle time per lead, you'd need 25 SDRs
          working perfectly around the clock. Nobody runs a desk like that.
        </p>
        <p>
          The only way to hit a 60-second SLA at that volume is to invert the problem. Don't try
          to put a human on every first message. Put a system on every first message — one that
          acknowledges, qualifies, and routes — and put humans only on the conversations that
          score above your qualification bar.
        </p>

        <div className="post-callout">
          <div className="post-callout__num">300<span style={{ fontSize: 24 }}>/day</span></div>
          <div className="post-callout__body">
            <div style={{ fontWeight: 600, marginBottom: 4 }}>That's our floor, not our ceiling.</div>
            <div style={{ color: "var(--fg-1)", fontSize: 14 }}>
              We've configured the system for brokerages doing up to 1,200 daily inbounds across
              ten markets. Volume is rarely the constraint — discipline is.
            </div>
          </div>
        </div>

        <h2 id="stack" className="display h3">The response stack</h2>
        <p>
          We won't name the specific tools we configure — that's part of why our clients hire us — but
          conceptually the stack has four layers: a unified inbox that sees every channel, an AI
          first-touch layer, a scoring engine, and a routing engine that hands meeting-ready leads
          to the right agent.
        </p>

        <h2 id="playbook" className="display h3">A 4-week rollout plan</h2>
        <p>
          Most brokerages overscope the rollout. They want to launch all four channels and three
          nurture flows on day one and end up launching nothing. The plan we use is boring on purpose:
          one channel, one flow, one cohort of agents in week one. Then expand.
        </p>

        <h2 id="metrics" className="display h3">Metrics that matter</h2>
        <p>
          Forget dashboards with 40 tiles. Three metrics tell you whether the system is working:
          time-to-first-touch (target: under 60s), lead-to-meeting rate (target: 12%+ on cold
          inbound), and meeting-show rate (target: 70%+). If those three are healthy, the rest
          follows.
        </p>

        <div className="post-cta-inline">
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 28, letterSpacing: "-0.01em" }}>Want this audit run on your funnel?</div>
            <div style={{ color: "var(--fg-1)", marginTop: 6 }}>30-min strategy call. We'll show you exactly where the leaks are.</div>
          </div>
          <a href="Lumora.html#book" className="btn btn-primary">Book a call <span className="arrow"><Arrow/></span></a>
        </div>
      </div>
    </div>
  </article>
);

const RelatedPosts = () => {
  const related = POSTS.filter(p => !p.featured).slice(0, 3);
  return (
    <section className="related section">
      <div className="container">
        <header className="lm-section-head" style={{ alignItems: "flex-start", textAlign: "left", margin: "0 0 40px" }}>
          <span className="eyebrow">Keep reading</span>
          <h2 className="display h2">More from the field guide.</h2>
        </header>
        <div className="related__grid">
          {related.map(p => <BlogCard key={p.slug} post={p}/>)}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, {
  BlogHero, BlogCard, BlogGrid, Newsletter,
  BlogPostHero, BlogPostBody, RelatedPosts, POSTS,
});
