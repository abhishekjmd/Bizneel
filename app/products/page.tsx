"use client";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useEffect } from "react";

const metadata: Metadata = {
  title: "Products - BIZNEEL Professional Care",
  description:
    "Browse our complete collection of professional hair and skin care products. Salon-grade formulations for everyday use.",
};

/**
 * Products Page - BIZNEEL Professional Care
 * Enhanced 3D Design with Immersive Interactions
 */
export default function ProductsPage() {
  // Group products by category for display
  const categoryStats = categories.map((cat) => ({
    ...cat,
    count: products.filter((p) => p.category === cat.id).length,
  }));

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

  return (
    <>
      {/* Page Header - 3D Elevated Design */}
      <section className="relative py-32 md:py-40 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 overflow-hidden">
        {/* Animated 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-particle"
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
              <span className="inline-block text-sm tracking-[0.35em] uppercase text-purple-300 font-light mb-6 animate-slide-down">
                Professional Care Range
              </span>
              <h1 className="text-6xl md:text-8xl font-extralight tracking-tight text-white mb-6 leading-tight transform hover:scale-105 transition-transform duration-500">
                Our{" "}
                <span className="font-light bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
                  Products
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto font-light leading-relaxed">
                Discover our complete collection of salon-grade hair and skin
                care products, crafted for daily care and consistent
                performance.
              </p>
            </div>
          </div>
        </Container>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Categories Overview - 3D Cards */}
      <section className="py-28 md:py-36 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

        <Container>
          <div className="text-center mb-20 relative z-10">
            <div className="inline-block">
              <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-4 block animate-slide-down">
                Shop by Category
              </span>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto perspective-container">
            {categoryStats.map((category, index) => (
              <div
                key={category.id}
                className="card-3d group animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: "forwards",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 border border-purple-100/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 overflow-hidden h-full">
                  {/* 3D Layered Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div
                    className="relative z-10"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 group-hover:text-purple-600 transition-colors duration-500 transform group-hover:scale-105">
                        {category.name}
                      </h3>
                      <span className="text-sm px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 rounded-full font-medium shadow-md group-hover:shadow-lg group-hover:from-purple-600 group-hover:to-purple-700 group-hover:text-white transition-all duration-500">
                        {category.count}{" "}
                        {category.count === 1 ? "Product" : "Products"}
                      </span>
                    </div>
                    <p className="text-gray-600 font-light leading-relaxed text-lg">
                      {category.description}
                    </p>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-3xl">
                    <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:animate-shine"></div>
                  </div>

                  {/* 3D Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700 -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* All Products Grid - Enhanced 3D */}
      <section className="py-28 md:py-36 bg-gradient-to-b from-purple-50/30 via-white to-purple-50/20 relative overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

        <Container>
          <div className="text-center mb-24 relative z-10">
            <div className="inline-block">
              <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-6 block animate-slide-down">
                Complete Range
              </span>
              <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-4">
                All Products
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 mx-auto rounded-full mb-4"></div>
              <p className="text-gray-500 font-light text-lg">
                {products.length} Professional Care Products
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[1600px] mx-auto">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="card-3d group animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animationFillMode: "forwards",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative bg-white overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 border border-purple-100/50 h-full transform-gpu">
                  {/* Product Image with 3D Effect */}
                  <div className="relative w-full h-64 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 overflow-hidden rounded-[10px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-600/5 group-hover:to-purple-600/10 transition-all duration-700"></div>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-8 group-hover:scale-110 group-hover:-rotate-2 transition-all duration-700 rounded-[10px]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      style={{ transform: "translateZ(40px)" }}
                    />

                    {/* Spotlight Effect */}
                    <div className="absolute inset-0 bg-gradient-radial from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    {/* Floating particles on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float-particle"></div>
                      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-purple-300 rounded-full animate-float-particle animation-delay-500"></div>
                      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-float-particle animation-delay-1000"></div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6 text-center relative z-10 bg-white/90 backdrop-blur-sm">
                    <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2 min-h-[3rem] group-hover:text-purple-600 transition-colors duration-500">
                      {product.name}
                    </h3>

                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-4 font-light">
                      {product.size}
                    </p>

                    <div className="flex items-center justify-center gap-2 mb-6">
                      <span className="text-xl font-semibold text-purple-600 group-hover:scale-110 inline-block transition-transform duration-500">
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Link
                        href={`/products/${product.category}/${product.slug}`}
                        className="flex px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-medium rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-500 shadow-lg hover:shadow-purple-500/50 hover:scale-105 transform justify-center items-center"
                      >
                        View Details
                      </Link>
                      <a
                        href={`https://wa.me/919104221284?text=${encodeURIComponent(
                          `Hi, I would like to inquire about ${product.name}`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 border-2 border-purple-200 text-purple-600 text-sm font-medium rounded-xl hover:bg-purple-50 hover:border-purple-400 transition-all duration-500 hover:scale-105 transform flex items-center justify-center"
                        title="Inquire on WhatsApp"
                      >
                        <Image
                          src="/whatsapp.png"
                          alt="WhatsApp"
                          width={24}
                          height={24}
                          sizes="(max-width: 768px) 20px, 24px"
                          className="w-5 h-5 md:w-6 md:h-6 object-contain"
                          priority={false}
                        />
                      </a>
                    </div>
                  </div>

                  {/* 3D Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 -z-10"></div>
                </div>
              </div>
            ))}
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

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-particle"
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
                Need Help{" "}
                <span className="font-light bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
                  Choosing?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-purple-100 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                Get personalized product recommendations for your salon or
                personal care needs
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

      `}</style>
    </>
  );
}
