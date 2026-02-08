"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { getProductBySlug } from "@/data/products";
import { getIngredientById } from "@/data/ingredients";

/**
 * Product detail page - Premium 3D Design (Client Component)
 * Displays complete product information with immersive effects
 */
export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  // 3D Mouse Movement Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(".card-3d");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        (card as HTMLElement).style.transform = `
          perspective(1000px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          scale3d(1.02, 1.02, 1.02)
        `;
      });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = `
        perspective(1000px) 
        rotateX(0deg) 
        rotateY(0deg) 
        scale3d(1, 1, 1)
      `;
    };

    const cards = document.querySelectorAll(".card-3d");
    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove as any);
      card.addEventListener("mouseleave", handleMouseLeave as any);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove as any);
        card.removeEventListener("mouseleave", handleMouseLeave as any);
      });
    };
  }, []);

  if (!product) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Product Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the product you're looking for.
        </p>
        <Link href="/products">
          <Button>Back to Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Product Hero Section - 3D Immersive */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {/* Product Images - Enhanced */}
            <div
              className="space-y-4 animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              {/* Main Image */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white to-purple-50/30 rounded-3xl border border-purple-100/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8 transform group-hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Thumbnail Images */}
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {product.images.slice(1, 4).map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square overflow-hidden bg-gradient-to-br from-white to-purple-50/30 rounded-2xl border border-purple-100/50 shadow-lg hover:shadow-xl hover:shadow-purple-500/15 transition-all duration-500 cursor-pointer group"
                    >
                      <Image
                        src={img}
                        alt={`${product.name} ${idx + 2}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 1024px) 33vw, 16vw"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info - Enhanced */}
            <div
              className="space-y-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              {/* Category & Badges */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.new && (
                    <Badge
                      variant="info"
                      className="bg-purple-100 text-purple-700 border-purple-200"
                    >
                      ✨ New
                    </Badge>
                  )}
                  {product.badges &&
                    product.badges.map((badge) => (
                      <Badge
                        key={badge}
                        variant="success"
                        className="bg-green-100 text-green-700 border-green-200"
                      >
                        {badge}
                      </Badge>
                    ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 leading-tight">
                  {product.name}
                </h1>
                <p className="text-3xl font-light bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-3">
                  {formatPrice(product.price)}
                </p>
                <p className="text-base text-gray-500 font-light">
                  {product.size}
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                {product.description}
              </p>

              {/* Skin Types */}
              <div>
                <h3 className="font-light text-gray-900 mb-3 text-sm tracking-widest uppercase text-gray-600">
                  Suitable for:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.skinTypes &&
                    product.skinTypes.map((type) => (
                      <Badge
                        key={type}
                        variant="default"
                        className="bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 transition-colors duration-300"
                      >
                        {type}
                      </Badge>
                    ))}
                </div>
              </div>

              {/* CTA Button - Enhanced */}
              <a
                href={`https://wa.me/919104221284?text=${encodeURIComponent(`Hi, I would like to inquire about ${product.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm uppercase tracking-widest font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-500 w-full sm:w-auto rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 transform relative overflow-hidden group"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.005.575 1.913.923 3.205.923 3.197 0 5.778-2.586 5.78-5.766.002-3.186-2.584-5.772-5.78-5.772zm2.062 8.326c-.199.317-.991 1.129-1.373 1.137-.306.007-1.164-.298-2.316-1.554-1.002-1.077-1.295-1.95-1.286-2.28.012-.486.634-1.155.845-1.155.087 0 .205.006.291.01.127.006.237-.024.417.408.204.475.467 1.158.508 1.25.04.093.076.216.035.318-.088.225-.213.313-.417.518-.095.094-.194.19-.084.382.111.192.483.788 1.047 1.288.729.646 1.348.847 1.54.942.191.096.305.076.417-.052.176-.2.457-.648.599-.861.125-.192.29-.148.471-.094.177.065 1.128.532 1.32.628.192.096.321.144.368.224.047.08.047.464-.197.777z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S16.627 0 12 0zm0 22c-3.111 0-6.027-1.15-8.293-3.155l-2.007.514.536-1.956C.667 15.341-.004 12.696.004 12.016.028 5.399 5.405.023 12.022.023c6.611 0 11.977 5.366 11.977 11.977 0 6.611-5.366 11.977-11.977 11.977z" />
                </svg>
                <span>Inquire on WhatsApp</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits - 3D Cards */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

        <Container>
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-block">
                <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-6 block animate-slide-down">
                  Product Highlights
                </span>
                <h2 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight mb-4">
                  Key Benefits
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 mx-auto rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-container">
              {product.benefits &&
                product.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="card-3d group animate-fade-in-up opacity-0"
                    style={{
                      animationDelay: `${idx * 0.1}s`,
                      animationFillMode: "forwards",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-purple-100/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 overflow-hidden h-full">
                      {/* 3D Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                      <div
                        className="relative z-10 flex items-start gap-4"
                        style={{ transform: "translateZ(30px)" }}
                      >
                        <div className="text-3xl font-light text-purple-600 mt-1 group-hover:scale-125 transition-transform duration-500 flex-shrink-0">
                          ✓
                        </div>
                        <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed group-hover:text-gray-900 transition-colors duration-500">
                          {benefit}
                        </p>
                      </div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-3xl">
                        <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine"></div>
                      </div>

                      {/* 3D Glow */}
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700 -z-10"></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Container>
      </section>

      {/* How to Use - 3D Card */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-purple-50/30 via-white to-purple-50/20 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

        <Container>
          <div className="max-w-4xl mx-auto">
            <div
              className="card-3d group animate-fade-in-up opacity-0"
              style={{
                animationFillMode: "forwards",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-purple-100/50 shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 overflow-hidden">
                {/* 3D Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div
                  className="relative z-10"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <div className="mb-10">
                    <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-500">
                      How to Use
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 rounded-full"></div>
                  </div>

                  <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
                    {product.howToUse}
                  </p>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-3xl">
                  <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine"></div>
                </div>

                {/* 3D Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-700 -z-10"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Ingredients - 3D Grid */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-100/30 rounded-full blur-3xl"></div>

        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-24 relative z-10">
              <div className="inline-block">
                <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-6 block animate-slide-down">
                  Premium Formulation
                </span>
                <h2 className="text-4xl md:text-6xl font-light text-gray-900 max-w-3xl mx-auto leading-tight mb-4">
                  Key Ingredients
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 mx-auto rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container mb-12">
              {product.ingredients &&
                product.ingredients.map((ingredientId, index) => {
                  const ingredient = getIngredientById(ingredientId);
                  if (!ingredient) return null;

                  return (
                    <div
                      key={ingredientId}
                      className="card-3d group animate-fade-in-up opacity-0"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animationFillMode: "forwards",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 border border-purple-100/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 h-full overflow-hidden">
                        {/* 3D Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <div
                          className="relative z-10"
                          style={{ transform: "translateZ(30px)" }}
                        >
                          <h3 className="text-xl font-light text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-500">
                            {ingredient.name}
                          </h3>
                          <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
                            {ingredient.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {ingredient.certifications &&
                              ingredient.certifications.map((cert) => (
                                <Badge
                                  key={cert}
                                  variant="success"
                                  className="text-xs bg-green-50 text-green-700 border-green-200"
                                >
                                  {cert}
                                </Badge>
                              ))}
                          </div>
                        </div>

                        {/* Shine Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-3xl">
                          <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine"></div>
                        </div>

                        {/* 3D Glow */}
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700 -z-10"></div>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* CTA Button */}
            <div className="text-center relative z-10">
              <Link href="/ingredients">
                <Button className="px-12 py-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm tracking-widest uppercase font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-500 rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105">
                  Learn More About Our Ingredients
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Enhanced Animations & Styles */}
      <style jsx>{`
        /* Fade In Up Animation */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px) translateZ(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateZ(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        /* Slide Down Animation */
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }

        /* Shine Effect */
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }

        /* Background Grid Pattern */
        .bg-grid-pattern {
          background-image:
            linear-gradient(
              to right,
              rgba(147, 51, 234, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(147, 51, 234, 0.1) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }

        /* 3D Perspective Container */
        .perspective-container {
          perspective: 2000px;
        }

        /* Card 3D Transitions */
        .card-3d {
          transition: transform 0.3s ease-out;
          transform-style: preserve-3d;
        }

        /* Smooth transforms */
        * {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </>
  );
}
