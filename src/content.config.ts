import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// Base schema for common fields
const baseSchema = {
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),
  published: z.string(),
};

// Blog schema
const blogSchema = z.object({
  ...baseSchema,
  subtitle: z.string().optional(),
  slug: z.string(),
  author: z.string(),
  published: z.string(),
  updated: z.string(),
  featuredImage: z.string().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).default([]),
  features: z.array(z.string()).default([]),
  ctaText: z.string().optional(),
  priority: z.number().min(1).max(10).default(5),
  relatedArticles: z.array(z.string()).default([]),
  faq: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).default([]),
});

// Project schema
const projectSchema = z.object({
  ...baseSchema,
  slug: z.string(),
  category: z.string(),
  stats: z.array(z.object({
    value: z.string(),
    label: z.string(),
  })).default([]),
  link: z.string().url().optional(),
  featured: z.boolean().default(false),
  featuredImage: z.string().optional(),
  priority: z.number().min(1).max(10).default(5),
  tags: z.array(z.string()).default([]),
});

// Service schema
const serviceSchema = z.object({
  ...baseSchema,
  slug: z.string(),
  features: z.array(z.string()),
  ctaText: z.string(),
  delay: z.number().default(100),
  featured: z.boolean().default(false),
  priority: z.number().min(1).max(10).default(5),
  faq: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).default([]),
});

// Author schema
const authorSchema = z.object({
  name: z.string(),
  role: z.string(),
  bio: z.string(),
  image: z.string(),
  slug: z.string(),
  social: z.object({
    linkedin: z.string().url().optional(),
    twitter: z.string().url().optional(),
    github: z.string().url().optional(),
    whatsapp: z.string().url().optional(),
  }).optional(),
});

// Define collections
// const blogs = defineCollection({
//   loader: glob({ pattern: '**/*.md', base: './src/content/blogs' }),
//   schema: blogSchema,
// });

const authors = defineCollection({
  loader: glob({ pattern: 'en/**/*.md', base: './src/content/authors' }),
  //schema: authorSchema,
});

const projects = defineCollection({
  loader: glob({ pattern: 'en/**/*.md', base: './src/content/projects' }),
  //schema: projectSchema,
});

const services = defineCollection({
  loader: glob({ pattern: 'en/**/*.md', base: './src/content/services' }),
  //schema: serviceSchema,
});

// const pages = defineCollection({
//   loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
//   schema: z.object({
//     ...baseSchema,
//     slug: z.string(),
//   }),
// });

export const collections = {
  //blogs,
  authors,
  projects,
  services,
  //pages,
};