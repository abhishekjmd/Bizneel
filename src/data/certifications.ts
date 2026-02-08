/**
 * Brand certification data structure
 */
export interface Certification {
  id: string;
  name: string;
  description: string;
  logo: string;
  verificationUrl?: string;
  category?: "quality" | "ethical" | "environmental" | "safety";
  details?: string;
}

/**
 * Brand certifications and compliance information
 * BIZNEEL is FDAC Approved and PETA-Free Certified
 */
export const certifications: Certification[] = [
  {
    id: "fdac-approved",
    name: "FDAC Approved",
    description:
      "Meets all regulatory standards and safety requirements set by the Food and Drug Administration.",
    logo: "/images/certifications/fdac.svg",
    category: "quality",
    details:
      "Our products undergo rigorous testing and quality assurance to meet FDAC standards, ensuring safety and efficacy for all users.",
  },
  {
    id: "peta-certified",
    name: "PETA-Free Certified",
    description: "Never tested on animals at any stage of product development.",
    logo: "/images/certifications/peta.svg",
    category: "ethical",
    details:
      "We are proud to be PETA-free certified and committed to cruelty-free practices. All our products are certified as not tested on animals.",
  },
  {
    id: "cruelty-free",
    name: "Cruelty-Free Certified",
    description: "100% free from animal-derived ingredients and by-products.",
    logo: "/images/certifications/cruelty-free.svg",
    category: "ethical",
    details:
      "Our formulations contain no animal ingredients or derivatives. Every product is certified vegan-friendly and cruelty-free.",
  },
  {
    id: "dermatologist-tested",
    name: "Dermatologist Tested",
    description:
      "Clinically tested and approved by board-certified dermatologists.",
    logo: "/images/certifications/dermatologist.svg",
    category: "safety",
    details:
      "All products are dermatologically tested to ensure safety and efficacy for all skin types, including sensitive skin.",
  },
  {
    id: "sustainable",
    name: "Sustainable Packaging",
    description:
      "Committed to recyclable, biodegradable, and minimal packaging solutions.",
    logo: "/images/certifications/sustainable.svg",
    category: "environmental",
    details:
      "We prioritize sustainable packaging made from recyclable and biodegradable materials to minimize environmental impact.",
  },
  {
    id: "clean-beauty",
    name: "Clean Beauty",
    description:
      "Free from parabens, sulfates, phthalates, and synthetic fragrances.",
    logo: "/images/certifications/clean-beauty.svg",
    category: "quality",
    details:
      "All products are formulated without parabens, sulfates, phthalates, and synthetic fragrances that harm skin.",
  },
];

/**
 * Certification categories for organization and filtering
 */
export const certificationCategories = {
  quality: {
    title: "Quality Standards",
    description: "Rigorous testing and proven results",
    icon: "✓",
    color: "from-blue-500 to-blue-700",
  },
  ethical: {
    title: "Ethical Practices",
    description: "Cruelty-free and conscious choices",
    icon: "♥",
    color: "from-red-500 to-red-700",
  },
  environmental: {
    title: "Environmental",
    description: "Sustainable and eco-conscious",
    icon: "🌿",
    color: "from-green-500 to-green-700",
  },
  safety: {
    title: "Safety Certified",
    description: "Dermatologist tested and approved",
    icon: "🛡️",
    color: "from-purple-500 to-purple-700",
  },
};
