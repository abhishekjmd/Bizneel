"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { ParallaxHero } from "@/components/parallax/ParallaxHero";
import { ParallaxTextOverlays } from "@/components/parallax/ParallaxTextOverlays";
import { getFeaturedCategories } from "@/data/categories";
import { getFeaturedProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useEffect, useRef } from "react";

/**
 * Homepage - BIZNEEL Professional Care
 * Enhanced 3D Scrollytelling Experience
 */
export default function HomePage() {
  const features = [
    {
      title: "Professional-Grade Formulations",
      description: "Salon-quality products crafted for consistent performance",
      icon: "💎",
    },
    {
      title: "Suitable for All Hair & Skin Types",
      description: "Designed for every hair and skin type with care",
      icon: "✨",
    },
    {
      title: "Salon & Home-Use Friendly",
      description: "Dependable results for professionals and everyday users",
      icon: "🏆",
    },
    {
      title: "Clean, Practical Product Range",
      description: "Focused formulations without overpromising",
      icon: "🌿",
    },
  ];

  const parallaxSections = [
    {
      title: "Professional Hair & Skin Care",
      subtitle: "Experience the difference with salon-grade formulations",
    },
    {
      title: "Crafted with Care",
      subtitle: "Premium ingredients for professional results",
    },
    {
      title: "For Every Hair Type",
      subtitle: "Customized solutions for your unique needs",
    },
    {
      title: "You'll Feel The Difference",
      subtitle: "Quality you can see and feel",
    },
  ];

  const featuredCategories = getFeaturedCategories();
  const featuredProducts = getFeaturedProducts();

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
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

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

  return (
    <>
      {/* Parallax Hero Section - Full Width */}
      <section className="relative w-full">
        {/* Image Sequence Parallax */}
        <ParallaxHero
          totalFrames={200}
          framesFolder="/parallax"
          fileExtension="jpg"
          filePrefix="ezgif-frame-"
        />

        {/* Text Overlays */}
        <ParallaxTextOverlays sections={parallaxSections} />

        {/* 3D Floating Elements */}
        <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
          <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-purple-400/10 rounded-full blur-xl animate-float-slow"></div>
          <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-float-medium"></div>
          <div className="floating-element absolute bottom-32 left-1/4 w-24 h-24 bg-purple-300/10 rounded-full blur-xl animate-float-fast"></div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
          <div className="relative">
            <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center pt-2 backdrop-blur-sm bg-black/10">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
            </div>
            <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-md animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Why Choose BIZNEEL - 3D Cards */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
        {/* Background 3D Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

        <Container>
          <div className="text-center mb-24 relative z-10">
            <div className="inline-block">
              <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-4 block animate-slide-down">
                Why Choose BIZNEEL
              </span>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-3d text-center group animate-fade-in-up opacity-0 transition-all duration-500"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: "forwards",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  {/* 3D Layered Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div
                    className="relative z-10"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center group-hover:from-purple-600 group-hover:to-purple-700 transition-all duration-500 shadow-lg group-hover:shadow-purple-500/50 relative">
                        <span className="text-3xl transform group-hover:scale-110 transition-transform duration-500">
                          {feature.icon}
                        </span>
                        <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>

                    <h3 className="text-lg font-medium text-gray-900 mb-4 tracking-wide group-hover:text-purple-600 transition-colors duration-500">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-3xl">
                    <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Product Categories - 3D Grid */}
      <section className="py-32 md:py-40 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-100/30 rounded-full blur-3xl"></div>

        <Container>
          <div className="text-center mb-24 relative z-10">
            <div className="inline-block">
              <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-6 block animate-slide-down">
                Our Range
              </span>
              <h2 className="text-4xl md:text-6xl font-light text-gray-900 max-w-3xl mx-auto leading-tight mb-4 animate-fade-in">
                Product Categories
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto perspective-container">
            {featuredCategories.map((category, index) => (
              <div
                key={category.id}
                className="card-3d group animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: "forwards",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative bg-white rounded-3xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 overflow-hidden border border-purple-100/50 h-full transform-gpu">
                  {/* 3D Image Container */}
                  <div className="relative w-full h-64 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 overflow-hidden rounded-[10px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 to-purple-600/10 group-hover:from-purple-400/10 group-hover:to-purple-600/20 transition-all duration-700"></div>
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-contain p-8 group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 rounded-[10px]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      style={{ transform: "translateZ(30px)" }}
                    />

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float-particle"></div>
                      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-purple-300 rounded-full animate-float-particle animation-delay-500"></div>
                      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-float-particle animation-delay-1000"></div>
                    </div>
                  </div>

                  <div className="p-6 relative z-10 bg-white/80 backdrop-blur-sm">
                    <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-500">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-light mb-4 leading-relaxed line-clamp-2">
                      {category.description}
                    </p>
                    <Link
                      href={`/products/${category.id}`}
                      className="inline-flex items-center text-xs text-purple-600 font-medium tracking-wide group-hover:gap-3 transition-all duration-500 relative"
                    >
                      <span className="relative z-10">Explore</span>
                      <span className="inline-block ml-1 transition-transform group-hover:translate-x-2 duration-500">
                        →
                      </span>
                      <div className="absolute inset-0 -left-2 -right-2 bg-purple-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    </Link>
                  </div>

                  {/* 3D Border Glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/20 via-transparent to-purple-600/20"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Products - 3D Showcase */}
      <section
        id="products"
        className="py-32 md:py-40 bg-gradient-to-b from-white via-purple-50/20 to-white relative overflow-hidden"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

        <Container>
          <div className="text-center mb-24 relative z-10">
            <div className="inline-block">
              <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-6 block animate-slide-down">
                Our Products
              </span>
              <h2 className="text-4xl md:text-6xl font-light text-gray-900 max-w-3xl mx-auto leading-tight mb-4 animate-fade-in">
                Professional Care Range
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="card-3d group animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "forwards",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative bg-white rounded-3xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 overflow-hidden border border-purple-100/50 h-full">
                  {/* Product Image with 3D Effect */}
                  <div className="relative w-full h-64 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 overflow-hidden rounded-[10px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-600/5 group-hover:to-purple-600/10 transition-all duration-700"></div>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 rounded-[10px]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      style={{ transform: "translateZ(40px)" }}
                    />

                    {/* Spotlight Effect */}
                    <div className="absolute inset-0 bg-gradient-radial from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  </div>

                  <div className="p-5 relative z-10 bg-white/90 backdrop-blur-sm">
                    <h3 className="text-base font-medium text-gray-900 leading-tight mb-2 line-clamp-2 min-h-[2.5rem] group-hover:text-purple-600 transition-colors duration-500">
                      {product.name}
                    </h3>

                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-lg font-semibold text-purple-600 group-hover:scale-110 inline-block transition-transform duration-500">
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
                      <Link
                        href={`/products/${product.category}/${product.slug}`}
                        className="flex-1 text-center px-3 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-medium rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-500 shadow-lg hover:shadow-purple-500/50 hover:scale-105 transform"
                      >
                        View Details
                      </Link>
                      <Link
                        href="/contact"
                        className="px-3 py-2.5 border-2 border-purple-200 text-purple-600 text-xs font-medium rounded-xl hover:bg-purple-50 hover:border-purple-400 transition-all duration-500 hover:scale-105 transform"
                      >
                        Quote
                      </Link>
                    </div>
                  </div>

                  {/* 3D Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 -z-10"></div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="text-center mt-20 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <Link
              href="/products"
              className="inline-block px-12 py-5 bg-white border-2 border-purple-200 text-gray-900 text-sm tracking-widest uppercase font-light hover:border-purple-600 hover:bg-purple-50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 rounded-full hover:scale-105 transform relative overflow-hidden group"
            >
              <span className="relative z-10">View All Products</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/20 to-purple-400/0 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Section - 3D Immersive */}
      <section className="relative py-40 md:py-48 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Particle Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>

        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div
              className="animate-fade-in-up opacity-0"
              style={{ animationFillMode: "forwards" }}
            >
              <h2 className="text-5xl md:text-7xl font-extralight text-white mb-8 leading-tight transform hover:scale-105 transition-transform duration-500">
                Ready to Experience
                <br />
                <span className="font-light bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
                  Professional Care?
                </span>
              </h2>

              <p className="text-xl text-purple-100 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                Get personalized product recommendations for your salon or
                personal use
              </p>

              <Link
                href="/contact"
                className="inline-block px-12 py-6 bg-white text-purple-700 text-sm tracking-widest uppercase font-medium hover:bg-purple-50 transition-all duration-500 rounded-full shadow-2xl hover:shadow-white/30 hover:scale-110 transform relative overflow-hidden group"
              >
                <span className="relative z-10">Request a Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/50 to-transparent translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
              </Link>
            </div>
          </div>
        </Container>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Enhanced Animations & Styles */}
      <style jsx global>{`
        /* Prevent horizontal scrollbar */
        body {
          overflow-x: hidden;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* 3D Perspective Container */
        .perspective-container {
          perspective: 2000px;
        }

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

        /* Blob Animation */
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -20px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(20px, 20px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 15s ease-in-out infinite;
        }

        /* Float Animations */
        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(30px, -30px) rotate(180deg);
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-40px, 40px) rotate(-180deg);
          }
        }

        @keyframes float-fast {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -50px) scale(1.2);
          }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 15s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 10s ease-in-out infinite;
        }

        /* Particle Float */
        @keyframes float-particle {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translate(var(--float-x, 20px), var(--float-y, -30px))
              scale(1.5);
            opacity: 0.8;
          }
          90% {
            opacity: 0.3;
          }
        }

        .animate-float-particle {
          animation: float-particle 8s ease-in-out infinite;
          --float-x: 20px;
          --float-y: -30px;
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

        /* Radial Gradient */
        .bg-gradient-radial {
          background: radial-gradient(
            circle at center,
            var(--tw-gradient-stops)
          );
        }

        /* Animation Delays */
        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Card 3D Transitions */
        .card-3d {
          transition: transform 0.3s ease-out;
          transform-style: preserve-3d;
        }

        /* GPU Acceleration */
        .transform-gpu {
          transform: translateZ(0);
          will-change: transform;
        }

        /* Smooth transforms for better performance */
        * {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </>
  );
}
