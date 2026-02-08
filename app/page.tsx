"use client";

import Image from "next/image";
import { Container } from "@/components/layout/container";
import { getFeaturedCategories } from "@/data/categories";
import { getFeaturedProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";

/**
 * Homepage - BIZNEEL Professional Care
 * Minimal & Elegant Design with Brand Colors
 */
export default function HomePage() {
  const features = [
    {
      title: "Professional-Grade Formulations",
      description: "Salon-quality products crafted for consistent performance",
    },
    {
      title: "Suitable for All Hair & Skin Types",
      description: "Designed for every hair and skin type with care",
    },
    {
      title: "Salon & Home-Use Friendly",
      description: "Dependable results for professionals and everyday users",
    },
    {
      title: "Clean, Practical Product Range",
      description: "Focused formulations without overpromising",
    },
  ];

  const featuredCategories = getFeaturedCategories();
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      {/* Hero Section - Elegant Purple Brand */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl"></div>

        <Container>
          <div className="max-w-5xl mx-auto text-center relative z-10 py-32">
            {/* Tagline */}
            <div
              className="mb-8 animate-fade-in opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <span className="inline-block text-sm tracking-[0.35em] uppercase text-purple-600 font-light">
                You'll Feel The Difference
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-gray-900 mb-10 leading-[0.95] animate-fade-in opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              Professional
              <br />
              <span className="font-light text-purple-600">
                Hair & Skin Care
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-14 font-light leading-relaxed animate-fade-in opacity-0"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              A complete range of hair & skin care products crafted for daily
              care, salon use, and consistent performance.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in opacity-0"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <a
                href="/contact"
                className="group px-10 py-5 bg-purple-600 text-white text-sm tracking-widest uppercase font-light hover:bg-purple-700 transition-all duration-500 shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02]"
              >
                Get Quote
                <span className="inline-block ml-3 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#products"
                className="px-10 py-5 border-2 border-purple-200 text-gray-900 text-sm tracking-widest uppercase font-light hover:border-purple-600 hover:bg-purple-50 transition-all duration-500"
              >
                View Products
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose BIZNEEL */}
      <section className="py-28 md:py-36 bg-white">
        <Container>
          <div className="text-center mb-20">
            <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light">
              Why Choose BIZNEEL
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in opacity-0"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-500">
                    <div className="w-2 h-2 bg-purple-600 rounded-full group-hover:bg-white"></div>
                  </div>
                </div>
                <h3 className="text-lg font-normal text-gray-900 mb-4 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Product Categories */}
      <section className="py-28 md:py-36 bg-purple-50/30">
        <Container>
          <div className="text-center mb-20">
            <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-6 block">
              Our Range
            </span>
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 max-w-3xl mx-auto leading-tight">
              Product Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {featuredCategories.map((category, index) => (
              <div
                key={category.id}
                className="group bg-white rounded-2xl hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 animate-fade-in opacity-0 overflow-hidden border border-purple-100/50"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: "forwards",
                }}
              >
                {/* Category Image - Fixed aspect ratio */}
                <div className="relative aspect-square bg-gradient-to-br from-purple-50 to-white overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Category Details */}
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-light mb-4 leading-relaxed line-clamp-2">
                    {category.description}
                  </p>
                  <a
                    href={`/products/${category.id}`}
                    className="inline-flex items-center text-xs text-purple-600 font-medium tracking-wide group-hover:gap-2 transition-all"
                  >
                    Explore
                    <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-28 md:py-36 bg-white">
        <Container>
          <div className="text-center mb-20">
            <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-6 block">
              Our Products
            </span>
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 max-w-3xl mx-auto leading-tight">
              Professional Care Range
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 animate-fade-in opacity-0 overflow-hidden border border-purple-100/50"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "forwards",
                }}
              >
                {/* Product Image - Compact */}
                <div className="relative aspect-square bg-gradient-to-br from-purple-50 to-white overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Product Details - Compact */}
                <div className="p-5">
                  <h3 className="text-base font-medium text-gray-900 leading-tight mb-1 line-clamp-2 min-h-[2.5rem]">
                    {product.name}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-lg font-semibold text-purple-600">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-xs text-gray-400">
                      {product.size}
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-2 min-h-[2rem]">
                    {product.shortDescription}
                  </p>

                  <div className="flex gap-2">
                    <a
                      href={`/products/${product.category}/${product.slug}`}
                      className="flex-1 text-center px-3 py-2 bg-purple-600 text-white text-xs font-medium rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      View Details
                    </a>
                    <a
                      href="/contact"
                      className="px-3 py-2 border border-purple-200 text-purple-600 text-xs font-medium rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/products"
              className="inline-block px-10 py-5 border-2 border-purple-200 text-gray-900 text-sm tracking-widest uppercase font-light hover:border-purple-600 hover:bg-purple-50 transition-all duration-500"
            >
              View All Products
            </a>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 md:py-40 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>

        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-extralight text-white mb-8 leading-tight">
              Ready to Experience
              <br />
              <span className="font-light">Professional Care?</span>
            </h2>
            <p className="text-xl text-purple-100 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Get personalized product recommendations for your salon or
              personal use
            </p>
            <a
              href="/contact"
              className="inline-block px-12 py-6 bg-white text-purple-700 text-sm tracking-widest uppercase font-light hover:bg-purple-50 transition-all duration-500 shadow-2xl hover:shadow-white/20 hover:scale-[1.02]"
            >
              Request a Quote
            </a>
          </div>
        </Container>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </>
  );
}
