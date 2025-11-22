// JSON-LD Schema generation utilities

export interface Organization {
  name: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email: string;
  };
  sameAs?: string[];
}

export interface Article {
  headline: string;
  description: string;
  author: {
    name: string;
    url?: string;
  };
  datePublished: string;
  dateModified?: string;
  image: string;
  url: string;
}

export interface WebPage {
  name: string;
  description: string;
  url: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateOrganizationSchema(org: Organization) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: org.name,
    url: org.url,
    logo: org.logo,
    description: org.description,
    ...(org.address && {
      address: {
        '@type': 'PostalAddress',
        ...org.address
      }
    }),
    ...(org.contactPoint && {
      contactPoint: {
        '@type': 'ContactPoint',
        ...org.contactPoint
      }
    }),
    ...(org.sameAs && { sameAs: org.sameAs })
  };
}

export function generateArticleSchema(article: Article, publisher: Organization) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author.name,
      ...(article.author.url && { url: article.author.url })
    },
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: publisher.logo
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url
    }
  };
}

export function generateWebPageSchema(page: WebPage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.name,
    description: page.description,
    url: page.url
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  provider: Organization;
  serviceType: string;
  areaServed?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    provider: {
      '@type': 'Organization',
      name: service.provider.name,
      url: service.provider.url
    },
    ...(service.areaServed && { areaServed: service.areaServed })
  };
}

export function generateServiceJsonLd(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.data.title,
    "description": service.data.description,
    "provider": {
      "@type": "Organization",
      "name": "Creative Complete",
      "url": "https://creativecomplete.com"
    },
    "areaServed": "Worldwide",
    "serviceType": service.data.category || "Digital Service",
    "offers": {
      "@type": "Offer",
      "description": service.data.description
    }
  };
}

export function generateBlogPostJsonLd(blog) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.data.title,
    "description": blog.data.description,
    "datePublished": blog.data.published,
    "dateModified": blog.data.updated,
    "author": {
      "@type": "Person",
      "name": blog.data.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Creative Complete",
      "logo": {
        "@type": "ImageObject",
        "url": "https://creativecomplete.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://creativecomplete.com/blogs/${blog.slug}`
    }
  };
}

export function generateFAQJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Enhanced JSON-LD generators
export function generateBreadcrumbJsonLd(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateProjectJsonLd(project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.data.title,
    "description": project.data.description,
    "url": `https://creativecomplete.com/projects/${project.slug}`,
    "author": {
      "@type": "Organization",
      "name": "Creative Complete"
    },
    "datePublished": project.data.published
  };
}

export function generatePersonJsonLd(author) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author.data.name,
    "jobTitle": author.data.role,
    "description": author.data.bio,
    "image": author.data.image,
    "url": `https://creativecomplete.com/${author.slug}`,
    "sameAs": Object.values(author.data.social || {})
  };
}

// Add this to your existing jsonld.ts file
export function generateAboutPageJsonLd(aboutData: {
  name: string;
  description: string;
  url: string;
  founder: {
    name: string;
    url: string;
  };
  foundingDate: string;
  services: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": aboutData.name,
    "description": aboutData.description,
    "url": aboutData.url,
    "mainEntity": {
      "@type": "Organization",
      "name": aboutData.name,
      "foundingDate": aboutData.foundingDate,
      "founder": {
        "@type": "Person",
        "name": aboutData.founder.name,
        "url": aboutData.founder.url
      },
      "serviceType": aboutData.services
    }
  };
}