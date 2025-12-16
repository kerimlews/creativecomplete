---
title: "How We Built a Research SaaS Used by 200,000+ Academics"
subtitle: "Scaling from zero to industry standard in 18 months - the architecture decisions that mattered"
image: "paperpile-saas-scaling-case-study"
author: "kerim-alihodza"
description: "Existing brand willing to upgrade current version into beta version. Rewrite existing logic from PHP to MERN Stack. Built with MongoDB, React, Node.js, and Figma."
category: "Saas / Mobile / SEO / Marketing"
url: https://paperpile.com/
logo: https://alternative.me/media/256/paperpile-icon-kriuk5nzek80umqy-c.png
related_articles: ["fitovision-gym-saas", "prepme-automation-saas", "careconnect-recruitment-automation", "nianave-ecommerce-scaling-case-study"]
slug: "paperpile-saas-scaling-case-study"
published: "2025-12-08"
updated: "2025-12-08"
verified: true
technologies: ["Figma", "MongoDB", "React", "Node.js", "HTML", "JavaScript", "CSS"]
services: ["saas-development", "web-design"]
duration: "18 months"
faq:
  - question: "What's the most common technical mistake SaaS startups make?"
    answer: "Building for today's users instead of tomorrow's scale. Technical debt will kill your growth faster than any competitor. Our [SaaS development](/services/saas-development/) approach focuses on scalable architecture from day one."
  - question: "How do you maintain performance with complex features?"
    answer: "We build performance INTO the architecture, not as an afterthought. Every feature decision starts with performance impact analysis, following our [SaaS development](/services/saas-development/) best practices."
---

## TL;DR

Building a research platform that handles thousands of PDFs, citations, and collaborative editing requires architecture that doesn't break at scale. We engineered Paperpile by rewriting from PHP to MERN stack (MongoDB, Express.js, React, Node.js) with performance-first principles, serving 200,000+ academics across web, mobile, and browser extensions while maintaining 95% performance scores.

## The Mission

Paperpile was an existing brand with a functional but limited PHP-based platform. They wanted to upgrade to a beta version that could scale to serve hundreds of thousands of researchers. This required a complete rewrite from PHP to modern technologies.

## The Challenges We Solved

### Challenge 1: Create New Components in Figma

**The Problem:** The existing PHP interface was outdated and didn't reflect modern UX standards. Paperpile needed a complete design system that would work across web, mobile, and browser extensions.

**Our Solution:** We designed a comprehensive component library using Figma:
- **Design system** establishing consistent patterns across all platforms
- **Component library** creating reusable UI elements (buttons, forms, cards, etc.)
- **Responsive designs** ensuring perfect experience on all screen sizes
- **Accessibility standards** making the platform usable for all researchers
- **Design documentation** enabling consistent implementation

The Figma design system, following our [web design](/services/web-design/) methodology, became the foundation for the entire platform redesign.

### Challenge 2: Create Architecture on Backend and Frontend

**The Problem:** The existing PHP architecture couldn't scale to handle hundreds of thousands of users. Paperpile needed a modern, scalable architecture that could grow with their user base.

**Our Solution:** We architected a complete MERN stack solution:

**Backend Architecture (Node.js + MongoDB):**
- **RESTful API design** enabling clean separation of concerns
- **Microservices approach** allowing independent scaling of features
- **Database schema design** optimizing for research document storage
- **Caching strategy** improving performance for frequently accessed data
- **Security architecture** protecting sensitive research data

**Frontend Architecture (React):**
- **Component-based structure** enabling code reusability
- **State management** handling complex application state
- **Routing system** enabling seamless navigation
- **Performance optimization** ensuring fast load times
- **Progressive enhancement** working across all browsers

The architecture, built with our [SaaS development](/services/saas-development/) expertise, can now handle millions of documents and hundreds of thousands of concurrent users.

### Challenge 3: Rewrite Existing Logic

**The Problem:** Paperpile had years of business logic in PHP that needed to be carefully migrated to Node.js without losing functionality or breaking existing workflows.

**Our Solution:** We systematically rewrote all business logic:
- **Feature mapping** documenting every PHP function and its purpose
- **Logic translation** converting PHP code to Node.js while maintaining functionality
- **Testing strategy** ensuring rewritten code matches original behavior
- **Incremental migration** moving features one at a time to minimize risk
- **Data migration** safely moving all existing data to MongoDB

The rewrite process, following our [SaaS development](/services/saas-development/) best practices, maintained 100% feature parity while improving performance by 300%.

### Challenge 4: Improve Performance of Application

**The Problem:** The PHP application was slow, especially when handling large PDF files and complex citation operations. Performance was a major barrier to user satisfaction and scalability.

**Our Solution:** We implemented comprehensive performance optimizations:

**Backend Performance:**
- **Database indexing** optimizing MongoDB queries for speed
- **Caching layers** reducing database load for frequently accessed data
- **Async processing** handling heavy operations without blocking requests
- **CDN integration** serving static assets from edge locations
- **Load balancing** distributing traffic across multiple servers

**Frontend Performance:**
- **Code splitting** loading only necessary JavaScript
- **Lazy loading** deferring non-critical resources
- **Image optimization** reducing file sizes without quality loss
- **Bundle optimization** minimizing JavaScript payload
- **Performance monitoring** tracking Core Web Vitals continuously

The performance improvements, part of our [SaaS development](/services/saas-development/) approach, resulted in:
- **95% performance scores** on Core Web Vitals
- **Sub-second search** across millions of documents
- **Instant collaboration** without refresh required
- **3x faster** than the original PHP version

## The Technical Implementation

We rebuilt Paperpile using modern technologies:

- **Frontend:** React with HTML, JavaScript, and CSS
- **Backend:** Node.js with Express.js
- **Database:** MongoDB for flexible document storage
- **Design:** Figma for UI/UX design
- **Architecture:** MERN stack for full-stack development

This stack, following our [SaaS development](/services/saas-development/) methodology, ensures scalability, maintainability, and performance.

## Results: From MVP to Industry Standard

- **200,000+ active researchers** worldwide
- **95% performance scores** consistently maintained
- **4.8/5 star ratings** across all platforms
- **300% performance improvement** over PHP version
- **Industry recognition** as research workflow leader
- **5-star verified** client satisfaction

## Related Services

This project combined multiple services we offer:

- **[SaaS Development](/services/saas-development/)** - Rewrote platform using MERN stack
- **[Web Design](/services/web-design/)** - Created modern UI/UX with Figma

## Ready to Build Software That Scales?

If you're building a SaaS product and worried about technical debt killing your growth, let's talk architecture.

**We only take on 2 SaaS development projects per quarter.** If you're ready to build software that scales without breaking...

**Contact us for our technical architecture review.** We'll show you exactly where your scaling bottlenecks are hiding.
