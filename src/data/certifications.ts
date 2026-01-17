/**
 * Brand certification data structure
 */
export interface Certification {
  id: string;
  name: string;
  description: string;
  logo: string;
  verificationUrl?: string;
}

/**
 * Brand certifications and compliance information
 */
export const certifications: Certification[] = [
  {
    id: "cruelty-free",
    name: "Cruelty-Free Certified",
    description: "Never tested on animals at any stage of product development.",
    logo: "/images/certifications/cruelty-free.svg",
  },
  {
    id: "vegan",
    name: "Vegan Society Certified",
    description: "100% free from animal-derived ingredients and by-products.",
    logo: "/images/certifications/vegan.svg",
  },
  {
    id: "organic",
    name: "USDA Organic",
    description: "Made with certified organic ingredients grown without synthetic pesticides.",
    logo: "/images/certifications/organic.svg",
  },
  {
    id: "sustainable",
    name: "Sustainable Packaging",
    description: "Committed to recyclable, biodegradable, and minimal packaging.",
    logo: "/images/certifications/sustainable.svg",
  },
  {
    id: "dermatologist-tested",
    name: "Dermatologist Tested",
    description: "Clinically tested and approved by board-certified dermatologists.",
    logo: "/images/certifications/dermatologist.svg",
  },
  {
    id: "clean-beauty",
    name: "Clean Beauty",
    description: "Free from parabens, sulfates, phthalates, and synthetic fragrances.",
    logo: "/images/certifications/clean-beauty.svg",
  },
];
