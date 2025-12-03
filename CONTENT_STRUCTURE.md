# Content Structure Guide

## 📝 Blog Post Template

Use this template for creating new blog posts:

```markdown
---
title: "Your Blog Post Title"
description: "SEO-friendly description (150-160 characters)"
excerpt: "A compelling excerpt that appears in blog listings and social shares"
author:
  name: "Author Full Name"
  avatar: "AN" # Two initials
date: "2025--10-28" # YYYY-MM-DD format
readTime: "X min read"
image: "/images/blog/post-slug.webp"
tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]
faq:
  - question: "First question?"
    answer: "Detailed answer to first question"
  - question: "Second question?"
    answer: "Detailed answer to second question"
  - question: "Third question?"
    answer: "Detailed answer to third question"
  - question: "Fourth question?"
    answer: "Detailed answer to fourth question"
  - question: "Fifth question?"
    answer: "Detailed answer to fifth question"
relatedPosts:
  - "related-post-slug-1"
  - "related-post-slug-2"
  - "related-post-slug-3"
---

Your introduction paragraph here. Make it engaging and set the stage for what readers will learn.

## Main Section Heading

Content for your main section. Include valuable information, insights, and actionable advice.

### Subsection

More detailed content. Use subsections to break down complex topics.

- **Bullet points**: Use them for lists
- **Internal links**: Link to other pages like [our services](/services)
- **Bold text**: For emphasis on important points

## Another Main Section

Continue with your content structure.

### Key Points

1. **Numbered lists**: For sequential steps or ranked items
2. **Examples**: Provide real-world examples
3. **Data**: Include statistics when relevant

> Use blockquotes for important callouts or quotes from experts

## Conclusion

Wrap up your post with key takeaways and a call to action. Link to [related content](/blog/related-post) or encourage readers to [contact us](/contact).
```

## 🎯 FAQ Generation Tips

Every blog post should have 5-6 FAQs that:

1. **Address Common Questions**: What would readers ask after reading?
2. **Include Keywords**: Natural keyword integration for SEO
3. **Provide Value**: Give actionable, specific answers
4. **Match Blog Content**: Ensure consistency with main content
5. **Cover Different Angles**: Various aspects of the topic

### FAQ Examples by Topic:

**Social Media Marketing:**
- How long does it take to see results from social media marketing?
- Which social media platforms should my business focus on?
- Do you create the content or do we need to provide it?
- How do you ensure we get real engagement and not bots?
- Can you help with paid advertising as well as organic growth?
- What kind of reporting and analytics do you provide?

**Local SEO:**
- How long does local SEO take to show results?
- What is Google Business Profile optimization?
- Do you guarantee first-page rankings?
- How do you handle negative reviews?
- What's included in your local SEO service?
- How much does local SEO cost?

**Branding:**
- What's the difference between branding and marketing?
- How long does a branding project take?
- Do I need a complete rebrand or just a refresh?
- What deliverables do I receive?
- How do you ensure brand consistency across platforms?
- Can you help with brand strategy, not just design?

**Web Development:**
- What technologies do you use for web development?
- How long does it take to build a website?
- Do you provide ongoing maintenance?
- Is the website mobile-responsive?
- Can I update content myself after launch?
- What's included in your development package?

## 📑 Page Content Template

For service pages, about pages, etc.:

```markdown
---
title: "Page Title - CreativeComplete"
description: "Page description for SEO (150-160 characters)"
keywords: ["keyword1", "keyword2", "keyword3"]
hero:
  title: "Hero Title"
  subtitle: "Hero subtitle or tagline"
sections:
  - id: "section-id"
    title: "Section Title"
    description: "Section description text"
    image: "/images/section-image.webp"
    imageAlt: "Descriptive alt text for image"
    features:
      - "Feature or benefit 1"
      - "Feature or benefit 2"
      - "Feature or benefit 3"
    cta:
      text: "Call to Action"
      link: "/contact"
---

# Optional main content

Any additional content that doesn't fit the structured sections.
```

## 🔗 Internal Linking Strategy

### Primary Pages to Link To:
- Homepage: `/`
- Services: `/services`
- Blog: `/blog`
- Projects: `/projects`
- Contact: `/contact`

### Blog Post Internal Links:

1. **Contextual Links**: Natural mentions of related topics
   ```markdown
   Learn more about [social media marketing](/services#marketing)
   ```

2. **Related Posts**: At the end of sections
   ```markdown
   For more on this topic, check our [SEO guide](/blog/seo-strategies-2025-)
   ```

3. **Call-to-Action Links**: Converting readers
   ```markdown
   Ready to get started? [Contact us](/contact) today!
   ```

### Link Density Guidelines:
- 2-3 internal links per 500 words
- Link to related blog posts
- Link to service pages from relevant content
- Always use descriptive anchor text
- Never use "click here" as anchor text

## 🏷️ Tag Strategy

### Tag Guidelines:
- Use 4-6 tags per post
- Mix broad and specific tags
- Keep tag names consistent across posts
- Use tags for category-like grouping

### Recommended Tags:

**Marketing Tags:**
- Social Media
- Marketing
- Digital Strategy
- Content Marketing
- Paid Advertising
- Email Marketing

**SEO Tags:**
- SEO
- Local SEO
- Technical SEO
- Link Building
- Keyword Research

**Business Tags:**
- Small Business
- E-commerce
- B2B Marketing
- B2C Marketing
- Startups

**Technical Tags:**
- Web Development
- SaaS
- Analytics
- Automation
- Tools

**Trend Tags:**
- 2025- Trends
- Industry News
- Case Studies
- Best Practices

## 📅 Content Calendar Template

Plan your content:

```
| Date | Post Title | Topic | Tags | Status |
|------|-----------|-------|------|--------|
| 2025--10-28 | Social Media 2025- | Marketing | Social, Marketing | Published |
| 2025--11-04 | Local SEO Guide | SEO | SEO, Local | Draft |
| 2025--11-11 | Branding Basics | Branding | Branding | Planned |
```

## 🎨 Image Requirements

### Blog Header Images:
- **Dimensions**: 1200x600px
- **Format**: WebP
- **File size**: Under 200KB
- **Naming**: `post-slug.webp`
- **Alt text**: Descriptive, keyword-rich

### Service Images:
- **Dimensions**: 800x600px
- **Format**: WebP
- **File size**: Under 150KB
- **Naming**: `service-name.webp`
- **Alt text**: Service description

### OG Images (Social Sharing):
- **Dimensions**: 1200x630px
- **Format**: WebP or PNG
- **File size**: Under 300KB
- **Include**: Title text overlay

## ✍️ Writing Best Practices

### Structure:
1. **Hook**: Engaging first paragraph
2. **Problem**: What challenge does the post address?
3. **Solution**: Your insights and recommendations
4. **Examples**: Real-world applications
5. **Conclusion**: Key takeaways and CTA

### Style:
- **Conversational tone**: Write like talking to a friend
- **Short paragraphs**: 2-4 sentences max
- **Subheadings**: Break up text every 200-300 words
- **Lists**: Use bullets and numbers for scannability
- **Bold text**: Emphasize key points
- **Links**: 2-3 internal links per post

### SEO:
- **Title**: Include primary keyword, under 60 characters
- **Description**: Include keyword, 150-160 characters
- **H2/H3**: Use keywords naturally in headings
- **First paragraph**: Include primary keyword
- **Image alt text**: Describe image with keywords
- **URL slug**: Short, keyword-rich

### Length:
- **Minimum**: 1,000 words for blog posts
- **Ideal**: 1,500-2,500 words for depth
- **Maximum**: 3,000 words (break into series if longer)

## 🔄 Content Update Cycle

### Monthly:
- Review top 10 performing posts
- Update statistics and data
- Add new internal links
- Refresh meta descriptions

### Quarterly:
- Comprehensive SEO audit
- Update outdated information
- Refresh images if needed
- Add new related posts links

### Yearly:
- Complete content refresh
- Update all dates and trends
- Reorganize if needed
- Archive or redirect obsolete posts

## 📊 Content Performance Metrics

Track these for each post:
- Page views
- Average time on page
- Bounce rate
- Social shares
- Backlinks
- Keyword rankings
- Conversions (contact form, newsletter)

Use data to:
- Identify top-performing topics
- Update underperforming content
- Plan future content strategy
- Improve conversion rates

---

**Remember**: Quality over quantity. One well-researched, comprehensive post is better than five mediocre ones!