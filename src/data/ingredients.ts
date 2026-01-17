/**
 * Ingredient data structure for transparency
 */
export interface Ingredient {
  id: string;
  name: string;
  scientificName?: string;
  description: string;
  benefits: string[];
  source: string;
  certifications: string[];
}

/**
 * Static ingredient database for transparency and education
 */
export const ingredients: Ingredient[] = [
  {
    id: "hyaluronic-acid",
    name: "Hyaluronic Acid",
    scientificName: "Sodium Hyaluronate",
    description: "A powerful humectant that can hold up to 1000x its weight in water, providing intense hydration.",
    benefits: [
      "Deep hydration",
      "Plumps fine lines",
      "Improves skin texture",
      "Suitable for all skin types",
    ],
    source: "Plant-derived fermentation",
    certifications: ["Vegan", "Cruelty-Free"],
  },
  {
    id: "vitamin-c",
    name: "Vitamin C",
    scientificName: "Ascorbic Acid",
    description: "A potent antioxidant that brightens skin and protects against environmental damage.",
    benefits: [
      "Brightens complexion",
      "Reduces dark spots",
      "Boosts collagen production",
      "Antioxidant protection",
    ],
    source: "Stabilized plant extract",
    certifications: ["Vegan", "Organic"],
  },
  {
    id: "niacinamide",
    name: "Niacinamide",
    scientificName: "Vitamin B3",
    description: "A versatile ingredient that addresses multiple skin concerns from pores to pigmentation.",
    benefits: [
      "Minimizes pores",
      "Regulates oil production",
      "Reduces redness",
      "Strengthens skin barrier",
    ],
    source: "Synthetic (nature-identical)",
    certifications: ["Vegan", "Cruelty-Free"],
  },
  {
    id: "retinol",
    name: "Retinol",
    scientificName: "Vitamin A",
    description: "A gold-standard anti-aging ingredient that accelerates cell turnover.",
    benefits: [
      "Reduces fine lines",
      "Improves skin texture",
      "Fades dark spots",
      "Unclogs pores",
    ],
    source: "Plant-derived",
    certifications: ["Cruelty-Free"],
  },
  {
    id: "squalane",
    name: "Squalane",
    description: "A lightweight, non-comedogenic oil that mimics skin's natural sebum.",
    benefits: [
      "Deep moisturization",
      "Non-greasy texture",
      "Antioxidant properties",
      "Suitable for sensitive skin",
    ],
    source: "Olive-derived",
    certifications: ["Vegan", "Organic", "Cruelty-Free"],
  },
  {
    id: "ceramides",
    name: "Ceramides",
    description: "Essential lipids that form the skin's protective barrier.",
    benefits: [
      "Restores skin barrier",
      "Locks in moisture",
      "Reduces sensitivity",
      "Prevents water loss",
    ],
    source: "Plant-derived",
    certifications: ["Vegan", "Cruelty-Free"],
  },
];

/**
 * Get ingredient by ID
 */
export function getIngredientById(id: string): Ingredient | undefined {
  return ingredients.find((ing) => ing.id === id);
}

/**
 * Get ingredients by certification
 */
export function getIngredientsByCertification(cert: string): Ingredient[] {
  return ingredients.filter((ing) => ing.certifications.includes(cert));
}
