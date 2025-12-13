/**
 * Organization data - Single source of truth
 * Used for JSON-LD schemas and metadata
 */

export const ORGANIZATION = {
  name: "Creative Complete",
  url: "https://creativecomplete.com",
  logo: "https://creativecomplete.com/logo.png",
  description: "Results-driven digital agency specializing in SEO, web design, automation, and SaaS development. We deliver measurable business growth with verified case studies.",
  foundingDate: "2023",
  founder: {
    name: "Kerim Alihodza",
    url: "https://creativecomplete.com/kerim-alihodza"
  },
  contactPoint: {
    telephone: "+387603456771",
    contactType: "Customer Service",
    email: "contact@creativecomplete.com"
  },
  sameAs: [
    "https://linkedin.com/in/kerim-alihodza-a765aa145",
    "https://twitter.com/KAlihodza82975"
  ],
  address: {
    streetAddress: "",
    addressLocality: "Sarajevo",
    addressRegion: "Federation of Bosnia and Herzegovina",
    postalCode: "",
    addressCountry: "BA"
  }
} as const;


