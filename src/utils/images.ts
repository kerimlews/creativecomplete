/**
 * Centralized image loading utilities
 * Single source of truth for image handling
 */

import type { ImageMetadata } from 'astro';

type ImageModule = () => Promise<{ default: ImageMetadata }>;
type ImageGlob = Record<string, ImageModule>;

/**
 * Generic function to load an image by slug from a glob pattern
 */
export async function loadImageBySlug(
  images: ImageGlob,
  slug: string,
  category: 'services' | 'projects' | 'testimonials'
): Promise<ImageMetadata | null> {
  const imageEntry = Object.entries(images).find(([path]) => {
    const filename = path.split('/').pop()?.replace(/\.(png|jpg|jpeg|webp)$/i, '');
    return filename === slug;
  });
  
  if (!imageEntry) {
    console.warn(`${category} image not found for slug: ${slug}`);
    return null;
  }
  
  try {
    const imageModule = await imageEntry[1]();
    
    // Astro's import.meta.glob for images returns { default: ImageMetadata }
    // Check if it's a valid ImageMetadata object
    if (!imageModule || typeof imageModule !== 'object') {
      console.warn(`Invalid image module for slug ${slug} in ${category}:`, imageModule);
      return null;
    }
    
    const imageMetadata = imageModule.default;
    
    if (!imageMetadata || typeof imageMetadata !== 'object') {
      console.warn(`Invalid image metadata for slug ${slug} in ${category}. Module:`, imageModule);
      return null;
    }
    
    // Verify it has required ImageMetadata properties (src is the most important)
    if (!('src' in imageMetadata)) {
      console.warn(`Image metadata missing src property for slug ${slug} in ${category}. Metadata:`, imageMetadata);
      return null;
    }
    
    return imageMetadata as ImageMetadata;
  } catch (error) {
    console.warn(`Failed to load ${category} image for slug ${slug}:`, error);
    return null;
  }
}

/**
 * Initialize image globs - single source of truth
 */
export function initializeImageGlobs() {
  return {
    services: import.meta.glob('/src/images/services/*.{png,jpg,jpeg,webp}', { eager: false }) as ImageGlob,
    projects: import.meta.glob('/src/images/projects/*.{png,jpg,jpeg,webp}', { eager: false }) as ImageGlob,
    testimonials: import.meta.glob('/src/images/testimonials/*.{png,jpg,jpeg,webp}', { eager: false }) as ImageGlob,
  };
}

/**
 * Load service image by slug
 */
export async function getServiceImage(images: ImageGlob, slug: string) {
  return loadImageBySlug(images, slug, 'services');
}

/**
 * Load project image by slug
 */
export async function getProjectImage(images: ImageGlob, slug: string) {
  return loadImageBySlug(images, slug, 'projects');
}

/**
 * Load testimonial image by slug
 */
export async function getTestimonialImage(images: ImageGlob, slug: string) {
  return loadImageBySlug(images, slug, 'testimonials');
}

