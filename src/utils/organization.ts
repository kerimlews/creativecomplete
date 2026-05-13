/**
 * Organization data - Single source of truth
 * Used for JSON-LD schemas and metadata
 */

export const ORGANIZATION = {
  name: "CreativeComplete",
  url: "https://www.creativecomplete.com",
  logo: "https://www.creativecomplete.com/logo-gradient.svg",
  description: "AI Customer System agency that qualifies leads in 60 seconds, converts them with AI ad creatives, and generates 42.5× ROI from existing lead databases. Fully managed, no headcount added.",
  foundingDate: "2023",
  founder: {
    name: "Kerim Alihodza",
    url: "https://www.creativecomplete.com/kerim-alihodza/"
  },
  contactPoint: {
    telephone: "",
    contactType: "Customer Service",
    email: "info@creativecomplete.com"
  },
  sameAs: [
    "https://www.linkedin.com/in/kerim-alihodza-a765aa145/",
    "https://www.linkedin.com/company/creative-complete/",
    "https://twitter.com/KAlihodza82975",
    "https://instagram.com/creative_complete"
  ],
  address: {
    streetAddress: "",
    addressLocality: "Ljubljana",
    addressRegion: "Ljubljana",
    postalCode: "",
    addressCountry: "SI"
  }
} as const;
