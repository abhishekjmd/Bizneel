import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { CTA } from "@/components/sections/cta";
import { Container } from "@/components/layout/container";
import { ProductGrid } from "@/components/product/product-grid";
import { CategoryCard } from "@/components/product/category-card";
import { getFeaturedProducts } from "@/data/products";
import { getFeaturedCategories } from "@/data/categories";

/**
 * Homepage - Static Site Generation
 * Showcases brand story, featured products, and categories
 */
export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const featuredCategories = getFeaturedCategories();

  const features = [
    {
      icon: "🌿",
      title: "100% Natural",
      description: "Pure ingredients sourced from nature's finest botanicals",
    },
    {
      icon: "🐰",
      title: "Cruelty-Free",
      description: "Never tested on animals, certified cruelty-free",
    },
    {
      icon: "♻️",
      title: "Sustainable",
      description: "Eco-friendly packaging and responsible sourcing",
    },
    {
      icon: "✨",
      title: "Dermatologist Tested",
      description: "Clinically proven safe for all skin types",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Radiant Skin, Naturally"
        subtitle="YOU'll FEEL THE DIFFERENCE. Discover premium cosmetics crafted with nature's finest ingredients."
        ctaText="Get a Quote"
        ctaHref="/contact"
        backgroundImage="/hero-banner.jpg"
      />

      {/* Features Section */}
      <Features title="Why Choose Bizneel" features={features} />

      {/* Featured Categories */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our curated collections designed for your unique skincare needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our best-selling products loved by thousands
            </p>
          </div>
          <ProductGrid products={featuredProducts} />
        </Container>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Transform Your Skincare?"
        description="Get personalized product recommendations and exclusive offers"
        buttonText="Request a Quote"
        buttonHref="/contact"
      />
    </>
  );
}
