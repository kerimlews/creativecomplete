/**
 * Homepage data utilities
 * Single source of truth for homepage content generation
 */

import type { Language } from './translations';
import { t } from './translations';
import { getServiceImage } from './constants';
import { getServiceUrl } from './routing';

/**
 * Generate services data for homepage based on language
 */
export function getHomepageServicesData(lang: Language) {
  return [
    {
      slug: 'seo',
      title: t('homepage.services.seo.title', lang),
      description: t('homepage.services.seo.description', lang),
      features: [
        t('homepage.services.seo.feature1', lang),
        t('homepage.services.seo.feature2', lang),
        t('homepage.services.seo.feature3', lang),
        t('homepage.services.seo.feature4', lang),
        t('homepage.services.seo.feature5', lang),
      ],
      ctaText: t('homepage.services.seo.cta', lang),
      delay: 100,
      caseStudy: {
        slug: 'local-seo-case-study-page-5-to-page',
        results: '47 new clients in 90 days for plumbing company'
      },
      image: getServiceImage('seo'),
      url: getServiceUrl(lang, 'seo')
    },
    {
      slug: 'web-design',
      title: t('homepage.services.web_design.title', lang),
      description: t('homepage.services.web_design.description', lang),
      features: [
        t('homepage.services.web_design.feature1', lang),
        t('homepage.services.web_design.feature2', lang),
        t('homepage.services.web_design.feature3', lang),
        t('homepage.services.web_design.feature4', lang),
        t('homepage.services.web_design.feature5', lang),
      ],
      ctaText: t('homepage.services.web_design.cta', lang),
      delay: 200,
      caseStudy: {
        slug: 'why-your-beautiful-website-isnt-making-sales',
        results: '15 qualified leads/month vs previous 2'
      },
      image: getServiceImage('web-design'),
      url: getServiceUrl(lang, 'web-design')
    },
    {
      slug: 'automation',
      title: t('homepage.services.automation.title', lang),
      description: t('homepage.services.automation.description', lang),
      features: [
        t('homepage.services.automation.feature1', lang),
        t('homepage.services.automation.feature2', lang),
        t('homepage.services.automation.feature3', lang),
        t('homepage.services.automation.feature4', lang),
        t('homepage.services.automation.feature5', lang),
      ],
      ctaText: t('homepage.services.automation.cta', lang),
      delay: 300,
      caseStudy: {
        slug: 'ai-automation-saved-20-hours-weekly',
        results: '20 hours weekly saved for service business'
      },
      image: getServiceImage('automation'),
      url: getServiceUrl(lang, 'automation')
    },
    {
      slug: 'saas-development',
      title: t('homepage.services.saas.title', lang),
      description: t('homepage.services.saas.description', lang),
      features: [
        t('homepage.services.saas.feature1', lang),
        t('homepage.services.saas.feature2', lang),
        t('homepage.services.saas.feature3', lang),
        t('homepage.services.saas.feature4', lang),
        t('homepage.services.saas.feature5', lang),
      ],
      ctaText: t('homepage.services.saas.cta', lang),
      delay: 400,
      caseStudy: {
        slug: 'from-idea-to-10k-mrr-saas-case-study',
        results: '$10K MRR from internal tool productization'
      },
      image: getServiceImage('saas-development'),
      url: getServiceUrl(lang, 'saas-development')
    },
    {
      slug: 'ecommerce',
      title: t('homepage.services.ecommerce.title', lang),
      description: t('homepage.services.ecommerce.description', lang),
      features: [
        t('homepage.services.ecommerce.feature1', lang),
        t('homepage.services.ecommerce.feature2', lang),
        t('homepage.services.ecommerce.feature3', lang),
        t('homepage.services.ecommerce.feature4', lang),
        t('homepage.services.ecommerce.feature5', lang),
      ],
      ctaText: t('homepage.services.ecommerce.cta', lang),
      delay: 500,
      caseStudy: {
        slug: 'why-your-online-store-isnt-converting',
        results: '185% conversion rate increase for specialty store'
      },
      image: getServiceImage('ecommerce'),
      url: getServiceUrl(lang, 'ecommerce')
    },
    {
      slug: 'mobile-development',
      title: t('homepage.services.mobile.title', lang),
      description: t('homepage.services.mobile.description', lang),
      features: [
        t('homepage.services.mobile.feature1', lang),
        t('homepage.services.mobile.feature2', lang),
        t('homepage.services.mobile.feature3', lang),
        t('homepage.services.mobile.feature4', lang),
        t('homepage.services.mobile.feature5', lang),
      ],
      ctaText: t('homepage.services.mobile.cta', lang),
      delay: 600,
      caseStudy: {
        slug: 'how-mobile-app-3x-revenue-local-business',
        results: '3X revenue growth for fitness studio'
      },
      image: getServiceImage('mobile-development'),
      url: getServiceUrl(lang, 'mobile-development')
    }
  ];
}

