/**
 * Homepage data loading utilities
 * Single source of truth for homepage content
 */

import { getCollection } from 'astro:content';
import type { Language } from './translations';
import { getBasePath } from './routing';
import { initializeImageGlobs, getServiceImage, getProjectImage, getTestimonialImage } from './images';
import { capitalize } from './helpers';

/**
 * Load services for homepage
 */
export async function loadHomepageServices(currentLang: Language, basePath: string) {
  const imageGlobs = initializeImageGlobs();
  const allServices = await getCollection(`services${capitalize(currentLang)}`);
  
  const services = (await Promise.all(
    allServices
      .filter(service => {
        const parts = service?.filePath ? service.filePath.split('/') : [];
        const serviceLang = parts[3] || 'en';
        return serviceLang === currentLang;
      })
      .map(async s => {
        const image = await getServiceImage(imageGlobs.services, s.data.image);
        if (!image) {
          console.warn(`Skipping service ${s.data.slug} - no image found`);
          return null;
        }
        
        // Validate image is a proper ImageMetadata object
        if (typeof image !== 'object' || !('src' in image)) {
          console.warn(`Skipping service ${s.data.slug} - invalid image metadata`);
          return null;
        }
        
        return {
          slug: s.data.slug,
          title: s.data.title,
          description: s.data.description,
          features: s.data.features,
          ctaText: s.data.ctaText,
          delay: s.data.delay || 0,
          image: image,
          url: `${basePath}/services/${s.data.slug}`,
          caseStudy: s.data.caseStudy || null
        };
      })
  )).filter((service): service is NonNullable<typeof service> => service !== null);

  // Sort services by priority (highest first) then featured
  const sortedServices = services.toSorted((a, b) => {
    const aService = allServices.find(s => s.data.slug === a.slug);
    const bService = allServices.find(s => s.data.slug === b.slug);
    
    const aFeatured = aService?.data.featured || false;
    const bFeatured = bService?.data.featured || false;
    
    if (aFeatured && !bFeatured) return -1;
    if (!aFeatured && bFeatured) return 1;
    return (bService?.data.priority || 5) - (aService?.data.priority || 5);
  });

  return sortedServices.slice(0, 3); // Top 3 for homepage
}

/**
 * Load projects for homepage
 */
export async function loadHomepageProjects(lang: Language) {
  const imageGlobs = initializeImageGlobs();
  const allProjects = await getCollection(`projects${capitalize(lang)}`);
  
  const projects = (await Promise.all(
    allProjects.map(async (project) => {
      const image = await getProjectImage(imageGlobs.projects, project.data.slug);
      if (!image) {
        console.warn(`Skipping project ${project.data.slug} - no image found`);
        return null;
      }
      
      // Validate image is a proper ImageMetadata object
      if (typeof image !== 'object' || !('src' in image)) {
        console.warn(`Skipping project ${project.data.slug} - invalid image metadata`);
        return null;
      }
      
      return {
        ...project.data,
        image: image,
      };
    })
  )).filter((project): project is NonNullable<typeof project> => project !== null && project.image !== null && project.image !== undefined);

  return projects;
}

/**
 * Load testimonials data
 * Single source of truth for testimonials
 */
export async function loadHomepageTestimonials() {
  const imageGlobs = initializeImageGlobs();
  
  return await Promise.all([
    (async () => ({
      text: "I'm impressed by how seriously they take every project. They found the most cost-effective solution that replaced 7 different tools we were using - mobile app, WDMS, SaaS platform, and landing page all in one.",
      author: "Matej Poznic",
      role: "Founder",
      company: "Fitovision",
      avatar: "MP",
      image: await getTestimonialImage(imageGlobs.testimonials, "matej-poznic"),
      caseStudy: "fitovision-gym-saas",
      verified: true
    }))(),
    {
      text: "They automated our entire order processing system. What used to take hundreds of hours monthly now runs automatically. Zero stress, zero manual work - everything from Shopify orders to complex CSV files is handled flawlessly.",
      author: "Tomislav Bratunic",
      role: "Owner", 
      company: "PrepMe",
      avatar: "TB",
      image: null,
      caseStudy: "prepme-automation-saas",
      verified: true
    },
    (async () => ({
      text: "Wir sind beeindruckt von der Detailgenauigkeit und Pünktlichkeit während des gesamten Prozesses. Das Team hat unser Recruitment-System komplett automatisiert und die Effizienz massiv gesteigert.",
      author: "Alisa Murtezi",
      role: "Geschäftsführerin",
      company: "CareConnect",
      avatar: "AM",
      image: await getTestimonialImage(imageGlobs.testimonials, "alisa-murtezi"),
      caseStudy: "careconnect-recruitment-automation", 
      verified: true
    }))()
  ]);
}

