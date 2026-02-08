/**
 * Product category data structure
 */
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  featured: boolean;
}

/**
 * Static product categories for BIZNEEL catalog
 * These categories are used for navigation and product filtering
 */
export const categories: Category[] = [
  {
    id: "hair-care",
    name: "Hair Care",
    slug: "hair-care",
    description: "Professional shampoos for scalp and hair cleansing",
    image: "/riceWsterShampoo.jpeg",
    featured: true,
  },
  {
    id: "massage-creams",
    name: "Massage Creams",
    slug: "massage-creams",
    description: "Rich massage creams for skin nourishment and vitality",
    image: "/vitaminCMessageCream.png",
    featured: true,
  },
  {
    id: "scrubs",
    name: "Scrubs",
    slug: "scrubs",
    description: "Exfoliating scrubs to refresh and improve skin texture",
    image: "/wallnutScrub.png",
    featured: true,
  },
  {
    id: "moisturizers",
    name: "Moisturizers",
    slug: "moisturizers",
    description: "Hydrating creams for soft and smooth skin",
    image: "/WhatsApp Image 2026-01-18 at 1.02.00 AM.jpeg",
    featured: true,
  },
];

/**
 * Get category by slug
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

/**
 * Get all featured categories
 */
export function getFeaturedCategories(): Category[] {
  return categories.filter((cat) => cat.featured);
}
