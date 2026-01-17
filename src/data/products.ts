/**
 * Product data structure
 */
export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  shortDescription: string;
  price: number;
  image: string;
  images: string[];
  featured: boolean;
  new: boolean;
  badges: string[];
  ingredients: string[];
  benefits: string[];
  howToUse: string;
  size: string;
  skinTypes: string[];
}

/**
 * Static product catalog
 * Images will be replaced with Cloudinary URLs during integration
 */
export const products: Product[] = [
  {
    id: "gentle-foam-cleanser",
    name: "Gentle Foam Cleanser",
    slug: "gentle-foam-cleanser",
    category: "cleansers",
    description: "A luxurious, pH-balanced foam cleanser that gently removes impurities while maintaining skin's natural moisture barrier. Infused with hyaluronic acid and chamomile extract for a soothing, hydrating cleanse.",
    shortDescription: "pH-balanced foam cleanser with hyaluronic acid",
    price: 32.00,
    image: "/images/products/gentle-foam-cleanser.jpg",
    images: [
      "/images/products/gentle-foam-cleanser.jpg",
      "/images/products/gentle-foam-cleanser-2.jpg",
      "/images/products/gentle-foam-cleanser-3.jpg",
    ],
    featured: true,
    new: false,
    badges: ["Vegan", "Cruelty-Free"],
    ingredients: ["hyaluronic-acid", "ceramides"],
    benefits: [
      "Removes makeup and impurities",
      "Maintains skin's pH balance",
      "Hydrates while cleansing",
      "Suitable for sensitive skin",
    ],
    howToUse: "Apply to damp skin, massage gently in circular motions, and rinse thoroughly with lukewarm water. Use morning and evening.",
    size: "150ml",
    skinTypes: ["All skin types", "Sensitive"],
  },
  {
    id: "hydrating-day-cream",
    name: "Hydrating Day Cream",
    slug: "hydrating-day-cream",
    category: "moisturizers",
    description: "A lightweight, fast-absorbing day cream that delivers 24-hour hydration. Enriched with squalane and vitamin E to protect against environmental stressors while keeping skin soft and supple.",
    shortDescription: "24-hour hydration with squalane and vitamin E",
    price: 48.00,
    image: "/images/products/hydrating-day-cream.jpg",
    images: [
      "/images/products/hydrating-day-cream.jpg",
      "/images/products/hydrating-day-cream-2.jpg",
    ],
    featured: true,
    new: false,
    badges: ["Vegan", "Organic"],
    ingredients: ["squalane", "hyaluronic-acid", "ceramides"],
    benefits: [
      "24-hour moisture retention",
      "Lightweight, non-greasy formula",
      "Antioxidant protection",
      "Perfect makeup base",
    ],
    howToUse: "Apply to clean, dry skin every morning. Gently massage until fully absorbed. Follow with SPF.",
    size: "50ml",
    skinTypes: ["Dry", "Normal", "Combination"],
  },
  {
    id: "vitamin-c-serum",
    name: "Brightening Vitamin C Serum",
    slug: "vitamin-c-serum",
    category: "serums",
    description: "A potent 15% vitamin C serum that brightens, evens skin tone, and boosts collagen production. Stabilized formula with ferulic acid for enhanced antioxidant protection and visible results.",
    shortDescription: "15% vitamin C with ferulic acid for radiant skin",
    price: 68.00,
    image: "/images/products/vitamin-c-serum.jpg",
    images: [
      "/images/products/vitamin-c-serum.jpg",
      "/images/products/vitamin-c-serum-2.jpg",
      "/images/products/vitamin-c-serum-3.jpg",
    ],
    featured: true,
    new: true,
    badges: ["Vegan", "Cruelty-Free"],
    ingredients: ["vitamin-c", "hyaluronic-acid"],
    benefits: [
      "Brightens dull complexion",
      "Reduces dark spots and hyperpigmentation",
      "Boosts collagen synthesis",
      "Protects against free radicals",
    ],
    howToUse: "Apply 3-4 drops to clean skin before moisturizer. Use in the morning for best results. Always follow with SPF.",
    size: "30ml",
    skinTypes: ["All skin types", "Dull", "Aging"],
  },
  {
    id: "niacinamide-serum",
    name: "Pore Refining Niacinamide Serum",
    slug: "niacinamide-serum",
    category: "serums",
    description: "A 10% niacinamide serum that minimizes pores, regulates sebum production, and strengthens the skin barrier. Ideal for oily and combination skin types seeking a balanced, refined complexion.",
    shortDescription: "10% niacinamide for pore refinement and oil control",
    price: 42.00,
    image: "/images/products/niacinamide-serum.jpg",
    images: [
      "/images/products/niacinamide-serum.jpg",
      "/images/products/niacinamide-serum-2.jpg",
    ],
    featured: false,
    new: true,
    badges: ["Vegan", "Cruelty-Free"],
    ingredients: ["niacinamide", "hyaluronic-acid"],
    benefits: [
      "Minimizes visible pores",
      "Controls excess oil",
      "Reduces redness and irritation",
      "Strengthens skin barrier",
    ],
    howToUse: "Apply to clean skin morning and evening before moisturizer. Can be used with other serums.",
    size: "30ml",
    skinTypes: ["Oily", "Combination", "Acne-prone"],
  },
  {
    id: "retinol-night-cream",
    name: "Age-Defying Retinol Night Cream",
    slug: "retinol-night-cream",
    category: "moisturizers",
    description: "A transformative night cream with encapsulated retinol that works while you sleep to reduce fine lines, improve texture, and promote cell renewal. Buffered formula minimizes irritation.",
    shortDescription: "Encapsulated retinol for anti-aging overnight repair",
    price: 72.00,
    image: "/images/products/retinol-night-cream.jpg",
    images: [
      "/images/products/retinol-night-cream.jpg",
      "/images/products/retinol-night-cream-2.jpg",
    ],
    featured: true,
    new: false,
    badges: ["Cruelty-Free"],
    ingredients: ["retinol", "ceramides", "squalane"],
    benefits: [
      "Reduces fine lines and wrinkles",
      "Improves skin texture and tone",
      "Accelerates cell turnover",
      "Minimized irritation formula",
    ],
    howToUse: "Apply to clean, dry skin at night. Start with 2-3 times per week, gradually increasing frequency. Always use SPF during the day.",
    size: "50ml",
    skinTypes: ["Normal", "Dry", "Aging"],
  },
  {
    id: "clay-detox-mask",
    name: "Purifying Clay Detox Mask",
    slug: "clay-detox-mask",
    category: "masks",
    description: "A deep-cleansing clay mask with kaolin and bentonite that draws out impurities, absorbs excess oil, and refines pores. Infused with tea tree oil for clarifying benefits.",
    shortDescription: "Deep-cleansing clay mask for purified skin",
    price: 38.00,
    image: "/images/products/clay-detox-mask.jpg",
    images: [
      "/images/products/clay-detox-mask.jpg",
      "/images/products/clay-detox-mask-2.jpg",
    ],
    featured: false,
    new: false,
    badges: ["Vegan", "Organic"],
    ingredients: ["niacinamide"],
    benefits: [
      "Draws out impurities and toxins",
      "Absorbs excess oil",
      "Refines and minimizes pores",
      "Clarifies complexion",
    ],
    howToUse: "Apply an even layer to clean, dry skin. Leave on for 10-15 minutes until dry. Rinse with lukewarm water. Use 1-2 times per week.",
    size: "75ml",
    skinTypes: ["Oily", "Combination", "Acne-prone"],
  },
  {
    id: "hydrating-sheet-mask",
    name: "Intensive Hydration Sheet Mask",
    slug: "hydrating-sheet-mask",
    category: "masks",
    description: "A bio-cellulose sheet mask soaked in hyaluronic acid and botanical extracts for instant hydration boost. Perfect for dry, dehydrated skin or pre-event glow.",
    shortDescription: "Bio-cellulose mask with hyaluronic acid",
    price: 12.00,
    image: "/images/products/hydrating-sheet-mask.jpg",
    images: [
      "/images/products/hydrating-sheet-mask.jpg",
    ],
    featured: false,
    new: false,
    badges: ["Vegan", "Cruelty-Free"],
    ingredients: ["hyaluronic-acid", "vitamin-c"],
    benefits: [
      "Instant hydration boost",
      "Plumps and smooths skin",
      "Reduces appearance of fine lines",
      "Cooling and soothing",
    ],
    howToUse: "Apply to clean skin and leave on for 15-20 minutes. Remove and gently pat remaining essence into skin. No need to rinse.",
    size: "1 sheet",
    skinTypes: ["All skin types", "Dry", "Dehydrated"],
  },
  {
    id: "mineral-sunscreen-spf50",
    name: "Mineral Sunscreen SPF 50",
    slug: "mineral-sunscreen-spf50",
    category: "suncare",
    description: "A lightweight, reef-safe mineral sunscreen with zinc oxide and titanium dioxide. Provides broad-spectrum UVA/UVB protection without white cast. Water-resistant for 80 minutes.",
    shortDescription: "Reef-safe mineral SPF 50 with no white cast",
    price: 36.00,
    image: "/images/products/mineral-sunscreen-spf50.jpg",
    images: [
      "/images/products/mineral-sunscreen-spf50.jpg",
      "/images/products/mineral-sunscreen-spf50-2.jpg",
    ],
    featured: true,
    new: false,
    badges: ["Vegan", "Reef-Safe", "Cruelty-Free"],
    ingredients: ["squalane"],
    benefits: [
      "Broad-spectrum SPF 50 protection",
      "No white cast formula",
      "Reef-safe and ocean-friendly",
      "Water-resistant 80 minutes",
    ],
    howToUse: "Apply generously 15 minutes before sun exposure. Reapply every 2 hours or after swimming/sweating.",
    size: "50ml",
    skinTypes: ["All skin types", "Sensitive"],
  },
];

/**
 * Get product by slug
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/**
 * Get products by category
 */
export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

/**
 * Get featured products
 */
export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

/**
 * Get new products
 */
export function getNewProducts(): Product[] {
  return products.filter((p) => p.new);
}
