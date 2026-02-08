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
 * Static product catalog for BIZNEEL
 * Images will be replaced with Cloudinary URLs during integration
 */
export const products: Product[] = [
  // HAIR CARE PRODUCTS
  {
    id: "rice-water-shampoo",
    name: "Bizneel Professional Rice Water Shampoo",
    slug: "rice-water-shampoo",
    category: "hair-care",
    description:
      "Bizneel Rice Water Shampoo is designed for regular use and suitable for all hair types. It helps cleanse the scalp effectively without harshness and supports smoother, manageable hair. Fermented Rice Water contains vitamins B, C, and E, which help in repairing hair damage. It also decreases surface friction and improves elasticity. Glycerin provides deep hydration, reducing frizz, and enhancing curl definition.",
    shortDescription:
      "A professional shampoo formulated to gently cleanse the scalp and hair while maintaining moisture balance.",
    price: 245.0,
    image: "/riceWsterShampoo.jpeg",
    images: [
      "/riceWsterShampoo.jpeg",
    ],
    featured: true,
    new: false,
    badges: ["Professional", "For All Hair Type"],
    ingredients: ["Rice Water", "Glycerin"],
    benefits: [
      "Gentle scalp cleansing",
      "Helps maintain hair softness",
      "Suitable for daily use",
      "For all hair types",
    ],
    howToUse:
      "Apply to wet hair, massage gently into scalp and hair, rinse thoroughly.",
    size: "300ml",
    skinTypes: ["All hair types"],
  },
  {
    id: "aloe-vera-shampoo",
    name: "Bizneel Professional Aloe Vera Shampoo",
    slug: "aloe-vera-shampoo",
    category: "hair-care",
    description:
      "Bizneel Aloe Vera Shampoo helps cleanse the scalp while supporting hydration. Suitable for regular use and designed for both salon and home care routines.",
    shortDescription:
      "A mild shampoo formulated with aloe vera to support scalp comfort and gentle cleansing.",
    price: 195.0,
    image: "/aloeveraShampoo.jpeg",
    images: [
      "/aloeveraShampoo.jpeg",
    ],
    featured: true,
    new: false,
    badges: ["Professional", "For All Hair Type"],
    ingredients: ["Aloe Vera"],
    benefits: [
      "Gentle cleansing",
      "Helps soothe scalp",
      "Suitable for all hair types",
      "Everyday use formula",
    ],
    howToUse:
      "Apply to wet hair, massage gently into scalp and hair, rinse thoroughly.",
    size: "300ml",
    skinTypes: ["All hair types"],
  },

  // MASSAGE CREAMS
  {
    id: "papaya-massage-cream",
    name: "Bizneel Papaya Massage Cream",
    slug: "papaya-massage-cream",
    category: "massage-creams",
    description:
      "A rich massage cream formulated with papaya to help remove dead skin cells and support skin freshness.",
    shortDescription:
      "Helps remove dead skin cells and supports skin freshness.",
    price: 245.0,
    image: "/papayaMassageCream.png",
    images: ["/papayaMassageCream.png"],
    featured: false,
    new: false,
    badges: ["Professional"],
    ingredients: ["Papaya"],
    benefits: [
      "Helps remove dead skin cells",
      "Supports skin freshness",
      "Rich texture for massage",
    ],
    howToUse: "Apply evenly on skin and massage gently in circular motions.",
    size: "250gm",
    skinTypes: ["All skin types"],
  },
  {
    id: "aloe-vera-massage-cream",
    name: "Bizneel Aloe Vera Massage Cream",
    slug: "aloe-vera-massage-cream",
    category: "massage-creams",
    description:
      "A soothing massage cream formulated with aloe vera to help soothe skin and provide moisture during massage.",
    shortDescription: "Helps soothe skin and provide moisture during massage.",
    price: 245.0,
    image: "/aloeveraMessageCream.png",
    images: ["/aloeveraMessageCream.png"],
    featured: false,
    new: false,
    badges: ["Professional"],
    ingredients: ["Aloe Vera"],
    benefits: [
      "Helps soothe skin",
      "Provides moisture during massage",
      "Gentle on skin",
    ],
    howToUse: "Apply evenly on skin and massage gently in circular motions.",
    size: "250gm",
    skinTypes: ["All skin types"],
  },
  {
    id: "vitamin-c-massage-cream",
    name: "Bizneel Vitamin-C Massage Cream",
    slug: "vitamin-c-massage-cream",
    category: "massage-creams",
    description:
      "A revitalizing massage cream formulated with vitamin C to help brighten skin appearance and support skin vitality.",
    shortDescription:
      "Helps brighten skin appearance and support skin vitality.",
    price: 245.0,
    image: "/vitaminCMessageCream.png",
    images: ["/vitaminCMessageCream.png"],
    featured: true,
    new: false,
    badges: ["Professional"],
    ingredients: ["Vitamin-C"],
    benefits: [
      "Helps brighten skin appearance",
      "Supports skin vitality",
      "Rich texture for massage",
    ],
    howToUse: "Apply evenly on skin and massage gently in circular motions.",
    size: "250gm",
    skinTypes: ["All skin types"],
  },
  {
    id: "cocoa-butter-massage-cream",
    name: "Bizneel Cocoa Butter Massage Cream",
    slug: "cocoa-butter-massage-cream",
    category: "massage-creams",
    description:
      "Bizneel Cocoa Butter Massage Cream is designed for deep nourishment during massage. Its rich texture helps soften the skin and improve smoothness, making it ideal for dry and tired skin.",
    shortDescription:
      "A rich massage cream formulated with cocoa butter to deeply nourish and moisturize the skin.",
    price: 245.0,
    image: "/cocoaButterMessageCream.png",
    images: ["/cocoaButterMessageCream.png"],
    featured: true,
    new: false,
    badges: ["Professional"],
    ingredients: ["Cocoa Butter"],
    benefits: [
      "Deeply moisturizes skin",
      "Helps improve skin softness",
      "Rich, smooth texture for massage",
      "Suitable for dry to normal skin",
    ],
    howToUse: "Apply evenly on skin and massage gently in circular motions.",
    size: "250gm",
    skinTypes: ["Dry", "Normal"],
  },

  // SCRUB
  {
    id: "walnut-scrub",
    name: "Bizneel Walnut Scrub",
    slug: "walnut-scrub",
    category: "scrubs",
    description:
      "A walnut-based scrub designed to exfoliate and refresh the skin. Helps remove dead skin cells and improves skin texture. Suitable for face and body.",
    shortDescription:
      "A walnut-based scrub designed to exfoliate and refresh the skin.",
    price: 245.0,
    image: "/wallnutScrub.png",
    images: ["/wallnutScrub.png"],
    featured: true,
    new: false,
    badges: ["Professional"],
    ingredients: ["Walnut"],
    benefits: [
      "Helps remove dead skin cells",
      "Improves skin texture",
      "Suitable for face & body",
    ],
    howToUse:
      "Apply to damp skin, massage gently in circular motions, and rinse thoroughly with water.",
    size: "250gm",
    skinTypes: ["All skin types"],
  },

  // MOISTURIZER
  {
    id: "almond-vitamin-e-moisturizer",
    name: "Bizneel Almond Oil & Vitamin-E Moisturiser",
    slug: "almond-vitamin-e-moisturizer",
    category: "moisturizers",
    description:
      "A moisturizing cream formulated with almond oil and vitamin E to support skin hydration. Helps retain moisture and supports soft and smooth skin. Non-heavy, daily-use cream.",
    shortDescription:
      "A moisturizing cream formulated with almond oil and vitamin E to support skin hydration.",
    price: 145.0,
    image: "/WhatsApp Image 2026-01-18 at 1.02.00 AM.jpeg",
    images: ["/WhatsApp Image 2026-01-18 at 1.02.00 AM.jpeg"],
    featured: true,
    new: false,
    badges: ["Professional"],
    ingredients: ["Almond Oil", "Vitamin-E"],
    benefits: [
      "Helps retain moisture",
      "Supports soft and smooth skin",
      "Non-heavy, daily-use cream",
    ],
    howToUse: "Apply evenly on clean skin and massage until absorbed.",
    size: "200ml",
    skinTypes: ["All skin types"],
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
