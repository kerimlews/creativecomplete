// JSON-LD Schema generation utilities
import { ORGANIZATION } from './organization';

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

export function generateServiceJsonLd(service: { data: { title: string; description: string; category?: string }; id: string; slug?: string }) {
  const serviceUrl = `https://creativecomplete.com/services/${service.slug || service.id}`;
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.data.title,
    "description": service.data.description,
    "url": serviceUrl,
    "provider": {
      "@type": "Organization",
      "name": ORGANIZATION.name,
      "url": ORGANIZATION.url,
      "logo": {
        "@type": "ImageObject",
        "url": ORGANIZATION.logo
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "serviceType": service.data.category || "Digital Service",
    "offers": {
      "@type": "Offer",
      "description": service.data.description
    }
  };
}

export function generateBlogPostJsonLd(blog: { data: { title: string; description: string; published: string; updated?: string; author: string }; slug: string }) {
  const blogUrl = `https://creativecomplete.com/blogs/${blog.slug}`;
  
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.data.title,
    "description": blog.data.description,
    "datePublished": blog.data.published,
    "dateModified": blog.data.updated || blog.data.published,
    "author": {
      "@type": "Person",
      "name": blog.data.author
    },
    "publisher": {
      "@type": "Organization",
      "name": ORGANIZATION.name,
      "logo": {
        "@type": "ImageObject",
        "url": ORGANIZATION.logo
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": blogUrl
    },
    "url": blogUrl
  };
}

export function generateFAQJsonLd(faqs: FAQItem[]) {
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
export function generateBreadcrumbJsonLd(breadcrumbs: BreadcrumbItem[]) {
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

export function generateProjectJsonLd(project: { data: { title: string; description: string; published: string; category?: string }; slug: string; id: string }) {
  const projectUrl = `https://creativecomplete.com/projects/${project.slug || project.id}`;
  
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": projectUrl,
    "name": project.data.title,
    "description": project.data.description,
    "url": projectUrl,
    "creator": {
      "@type": "Organization",
      "name": ORGANIZATION.name,
      "url": ORGANIZATION.url
    },
    "datePublished": project.data.published,
    ...(project.data.category && {
      "genre": project.data.category
    })
  };
}

export function generatePersonJsonLd(author: { data: { name: string; role: string; bio: string; image?: string; social?: Record<string, string> }; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author.data.name,
    "jobTitle": author.data.role,
    "description": author.data.bio,
    ...(author.data.image && { "image": author.data.image }),
    "url": `https://creativecomplete.com/${author.slug}`,
    ...(author.data.social && { "sameAs": Object.values(author.data.social) })
  };
}

/**
 * Generate JSON-LD for About page
 * Uses WebPage type (AboutPage is not a valid Schema.org type)
 */
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
    "@type": "WebPage",
    "@id": aboutData.url,
    "name": aboutData.name,
    "description": aboutData.description,
    "url": aboutData.url,
    "mainEntity": {
      "@type": "Organization",
      "name": aboutData.name,
      "url": ORGANIZATION.url,
      "logo": {
        "@type": "ImageObject",
        "url": ORGANIZATION.logo
      },
      "foundingDate": aboutData.foundingDate,
      "founder": {
        "@type": "Person",
        "name": aboutData.founder.name,
        "url": aboutData.founder.url
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services",
        "itemListElement": aboutData.services.map((service, index) => ({
          "@type": "Offer",
          "position": index + 1,
          "itemOffered": {
            "@type": "Service",
            "name": service
          }
        }))
      }
    }
  };
}

/**
 * Generate Organization JSON-LD schema
 * Should be included on homepage and key pages
 */
export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${ORGANIZATION.url}#organization`,
    "name": ORGANIZATION.name,
    "url": ORGANIZATION.url,
    "logo": {
      "@type": "ImageObject",
      "url": ORGANIZATION.logo
    },
    "description": ORGANIZATION.description,
    "foundingDate": ORGANIZATION.foundingDate,
    "founder": {
      "@type": "Person",
      "name": ORGANIZATION.founder.name,
      "url": ORGANIZATION.founder.url
    },
    ...(ORGANIZATION.contactPoint && {
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": ORGANIZATION.contactPoint.telephone,
        "contactType": ORGANIZATION.contactPoint.contactType,
        "email": ORGANIZATION.contactPoint.email
      }
    }),
    ...(ORGANIZATION.address && {
      "address": {
        "@type": "PostalAddress",
        ...ORGANIZATION.address
      }
    }),
    ...(ORGANIZATION.sameAs && {
      "sameAs": ORGANIZATION.sameAs
    })
  };
}

/**
 * Generate WebSite JSON-LD schema for homepage
 */
export function generateWebSiteJsonLd(siteUrl: string, languages: string[] = ['en', 'sl', 'de', 'hr']) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    "url": siteUrl,
    "name": ORGANIZATION.name,
    "description": ORGANIZATION.description,
    "publisher": {
      "@id": `${ORGANIZATION.url}#organization`
    },
    "inLanguage": languages,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}