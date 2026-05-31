---
title: "How We Rebuilt a Research SaaS Used by 200,000+ Academics"
subtitle: "PHP to MERN stack in 18 months — architecture decisions, performance engineering, and the migration strategy that kept zero downtime"
image: "paperpile-saas-scaling-case-study"
author: "kerim-alihodza"
description: "Paperpile was an existing research platform built on PHP that could not scale to their growth trajectory. We redesigned the full architecture in Figma, rewrote the backend in Node.js, migrated the database to MongoDB, and rebuilt the frontend in React — while maintaining 100% feature parity. The result: 200,000+ active users, 95% performance scores, and 3× faster than the original."
category: "SaaS / Architecture / Web Design"
url: https://paperpile.com/
logo: https://alternative.me/media/256/paperpile-icon-kriuk5nzek80umqy-c.png
related_articles: ["nianave-ecommerce-scaling-case-study", "belags-oberflaechenreinigung-arbon-case-study", "imotorbike-ai-lead-qualification", "parcel-daily-conversion-boost"]
slug: "paperpile-saas-scaling-case-study"
published: "2025-12-08"
updated: "2026-05-26"
verified: true
technologies: ["Figma", "MongoDB", "React", "Node.js", "HTML", "JavaScript", "CSS"]
services: ["saas-development", "web-design"]
duration: "18 months"
stats:
  - value: "200k+"
    label: "active researchers worldwide"
  - value: "95%"
    label: "Core Web Vitals performance score"
  - value: "3×"
    label: "faster than the original PHP version"
  - value: "5★"
    label: "verified client rating"
faq:
  - question: "What's the most common technical mistake SaaS startups make?"
    answer: "Building for today's user count instead of tomorrow's scale. Technical debt accumulates faster in a product with real users than in a greenfield project — every architectural shortcut becomes a scaling problem when traffic increases. The correct approach is to define the scale target before making architectural decisions."
  - question: "How do you rewrite a production platform without breaking what works?"
    answer: "Incremental migration. You map every function in the existing system, rewrite in parallel, test against original behavior, and migrate features one at a time — not all at once. This approach maintains functionality throughout the rewrite and allows you to validate each component before it goes live."
---

## TL;DR

Paperpile had an existing PHP research platform with a real user base. The architecture could not scale to where they needed to go. We redesigned the full UI system in Figma, rewrote the backend from PHP to Node.js, migrated to MongoDB, and rebuilt the frontend in React — all while keeping the live product running. Eighteen months later: 200,000+ active users, **95%** performance scores, 3× speed improvement, 100% feature parity maintained throughout.

## The Situation

Paperpile was already a functional product with an active user base of researchers and academics. The platform handled PDF management, citation generation, collaborative editing, and browser extension integration — a technically complex set of operations that had been built on PHP over several years.

The problem: the existing architecture could not support the user growth they were targeting. Adding features was getting slower and more expensive. Performance was degrading as the user base grew. A complete architectural rewrite was necessary — but it had to happen without breaking a product that real users depended on daily.

## The Challenges We Solved

### Challenge 1: Design a Component System That Works Across Web, Mobile, and Extensions

**The problem:** The PHP interface was functional but inconsistent — different pages had different interaction patterns, the mobile experience was poor, and there was no shared design language between the web app, mobile app, and browser extension.

**What we built in Figma:**
- A complete design system with shared component library (buttons, forms, cards, modals, navigation patterns)
- Responsive design specifications for every component across breakpoints
- Interaction states documented for every interactive element
- Accessibility annotations for keyboard navigation and screen reader compatibility
- Design documentation that the engineering team could implement without ambiguity

The Figma design system became the single source of truth for all visual decisions throughout the 18-month build — ensuring consistency across every platform.

### Challenge 2: Architect a Backend That Can Scale to Hundreds of Thousands of Users

**The problem:** The PHP backend was a monolithic architecture that did not separate concerns cleanly. Adding a new feature often required touching multiple unrelated parts of the system. Scaling one component meant scaling everything.

**Backend architecture we built (Node.js + MongoDB):**
- RESTful API design with clearly defined service boundaries
- Microservices structure allowing independent scaling of high-traffic features (PDF processing, citation lookup, collaboration sync)
- MongoDB schema designed for research document storage — flexible enough for varied citation formats, performant at the query patterns the product required
- Multi-layer caching strategy reducing database load for frequently accessed data
- Security architecture protecting research data with encryption at rest and in transit

**Frontend architecture we built (React):**
- Component-based structure with shared component library matching the Figma design system
- State management for complex real-time collaboration features
- Client-side routing for smooth navigation without full page reloads
- Code splitting to reduce initial bundle size
- Progressive enhancement ensuring functionality across browser versions

### Challenge 3: Migrate Years of Business Logic Without Losing Functionality

**The problem:** Years of PHP code contained product logic that was not fully documented. A direct rewrite without careful mapping risked introducing regressions that would break workflows researchers depended on.

**Our migration approach:**
1. Feature audit — documented every function in the existing PHP codebase with expected input/output behavior
2. Test suite built against the existing system to define "correct behavior" before touching any code
3. Feature-by-feature rewrite in Node.js, validated against the test suite at each step
4. Parallel running — new components operated alongside old ones until validated
5. Staged cutover — users migrated in cohorts, with rollback capability at each stage

The result: 100% feature parity on launch day. No user-facing regressions throughout the 18-month project. Zero forced downtime.

### Challenge 4: Performance Engineering for a Data-Heavy Research Application

**The problem:** Paperpile users work with thousands of PDFs and complex citation databases. The PHP version was slow — sub-par load times for large libraries and noticeable lag in collaborative editing sessions.

**Backend performance work:**
- MongoDB indexing optimized for the specific query patterns of research document retrieval
- Async processing for PDF analysis and citation extraction — heavy operations run in the background without blocking the user interface
- CDN integration for static assets — files served from edge locations closest to the user
- Load balancing configuration for horizontal scaling as user count grows

**Frontend performance work:**
- Code splitting: JavaScript bundles load only what each page needs
- Lazy loading for images, PDFs, and off-screen components
- Bundle optimization reducing total JavaScript payload by 60%
- Core Web Vitals monitoring integrated into the deployment pipeline

**Outcome:** **95%** performance scores consistently, sub-second search across millions of documents, collaborative editing without refresh lag, 3× faster than the original PHP version on equivalent operations.

## Results

| Metric | PHP Version | MERN Version | Change |
|--------|-------------|--------------|--------|
| Active users | Baseline | 200,000+ | Significant growth |
| Performance score | Below threshold | 95% | Industry-leading |
| Search speed | Slow | Sub-second | 3× improvement |
| Feature additions | Slow, expensive | Fast, modular | Architectural benefit |
| Platform support | Web only | Web + Mobile + Extensions | Expanded |

## What Made the Difference

Feature-by-feature migration, not a big bang rewrite. The most common failure mode in platform rewrites is attempting to rewrite everything simultaneously and launch all at once. Every component that can be isolated and validated independently reduces the overall risk. We isolated 23 distinct feature areas and validated each one before proceeding.

Performance built into the architecture, not bolted on afterward. Performance optimizations added after architecture decisions have limited effect — the ceiling is set by the architecture itself. Building caching, async processing, and database indexing into the design phase rather than the optimization phase meant there was no artificial ceiling to work around later.

Design system first. Building the Figma component library before writing any code meant that engineering decisions could reference a shared visual language from day one. Inconsistencies that appear in design are easy to fix — inconsistencies discovered during engineering review are expensive.

[Contact us to discuss your requirements →](/contact/)
