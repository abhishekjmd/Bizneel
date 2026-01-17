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
 * Static product categories for the cosmetics catalog
 * These categories are used for navigation and product filtering
 */
export const categories: Category[] = [
  {
    id: "cleansers",
    name: "Cleansers",
    slug: "cleansers",
    description: "Gentle, effective cleansers for all skin types",
    image: "/images/categories/cleansers.jpg",
    featured: true,
  },
  {
    id: "moisturizers",
    name: "Moisturizers",
    slug: "moisturizers",
    description: "Hydrating formulas for radiant, healthy skin",
    image: "/images/categories/moisturizers.jpg",
    featured: true,
  },
  {
    id: "serums",
    name: "Serums",
    slug: "serums",
    description: "Concentrated treatments targeting specific skin concerns",
    image: "/images/categories/serums.jpg",
    featured: true,
  },
  {
    id: "masks",
    name: "Face Masks",
    slug: "masks",
    description: "Intensive treatments for deep nourishment",
    image: "/images/categories/masks.jpg",
    featured: true,
  },
  {
    id: "suncare",
    name: "Sun Care",
    slug: "suncare",
    description: "Broad-spectrum protection for daily defense",
    image: "/images/categories/suncare.jpg",
    featured: false,
  },
  {
    id: "bodycare",
    name: "Body Care",
    slug: "bodycare",
    description: "Luxurious care from head to toe",
    image: "/images/categories/bodycare.jpg",
    featured: false,
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
