"use client";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { useEffect } from "react";

const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bizneel's mission to create professional, reliable personal care products for salons and individual users.",
};

/**
 * About page - Enhanced 3D Design
 * Immersive experience with depth and interactions
 */
export default function AboutPage() {
  const values = [
    {
      title: "Professional-Grade Quality",
      description:
        "Formulated for consistent performance in salons and at home, with reliable results every time.",
      icon: "💎",
      gradient: "from-purple-500 to-purple-700",
    },
    {
      title: "Honest & Transparent",
      description:
        "No exaggerated claims or misleading promises. Just effective products that deliver what they say.",
      icon: "✨",
      gradient: "from-purple-600 to-purple-800",
    },
    {
      title: "Focused Product Range",
      description:
        "A curated selection of essentials—hair care and skin care products designed for everyday use.",
      icon: "🎯",
      gradient: "from-purple-700 to-purple-900",
    },
  ];

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
      {/* Hero Section - 3D Immersive */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
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
          <div className="max-w-4xl mx-auto text-center relative z-10 py-20">
            {/* Tagline */}
            <div
              className="mb-8 animate-slide-down opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <span className="inline-block text-sm tracking-[0.35em] uppercase text-purple-300 font-light">
                Who We Are
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-6xl md:text-8xl font-extralight tracking-tight text-white mb-8 leading-tight animate-fade-in-up opacity-0 transform hover:scale-105 transition-transform duration-500"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              About
              <br />
              <span className="font-light bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
                BIZNEEL
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              A professional personal care brand serving salons and individual
              users with a focused range of reliable hair and skin care
              products.
            </p>
          </div>
        </Container>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Our Story - 3D Cards */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block">
                <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-6 block animate-slide-down">
                  Our Story
                </span>
                <h2 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight mb-4">
                  Built on Reliability,
                  <br />
                  Not Marketing Hype
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 mx-auto rounded-full"></div>
              </div>
            </div>

            <div className="space-y-8 perspective-container">
              <div
                className="card-3d group animate-fade-in-up opacity-0"
                style={{
                  animationDelay: "0.2s",
                  animationFillMode: "forwards",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-purple-100/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 overflow-hidden">
                  {/* 3D Background Layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div
                    className="relative z-10"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 group-hover:text-purple-600 transition-colors duration-500">
                      Who We Are
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
                      BIZNEEL is a professional personal care brand serving
                      salons and individual users with a focused range of hair
                      and skin care products. We believe in creating products
                      that work consistently, without the need for exaggerated
                      claims or misleading promises.
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

              <div
                className="card-3d group animate-fade-in-up opacity-0"
                style={{
                  animationDelay: "0.4s",
                  animationFillMode: "forwards",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-purple-100/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div
                    className="relative z-10"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 group-hover:text-purple-600 transition-colors duration-500">
                      Our Mission
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
                      To offer reliable, effective, and easy-to-use personal
                      care products without misleading claims. We focus on
                      formulations that deliver consistent results for both
                      professional salon use and everyday personal care.
                    </p>
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-3xl">
                    <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine"></div>
                  </div>

                  <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700 -z-10"></div>
                </div>
              </div>

              <div
                className="card-3d group animate-fade-in-up opacity-0"
                style={{
                  animationDelay: "0.6s",
                  animationFillMode: "forwards",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-purple-100/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div
                    className="relative z-10"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 group-hover:text-purple-600 transition-colors duration-500">
                      What Makes Us Different
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
                      We prioritize product usability and consistency over
                      exaggerated marketing promises. Our approach is
                      straightforward: create dependable products, price them
                      fairly, and let the results speak for themselves.
                    </p>
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-3xl">
                    <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine"></div>
                  </div>

                  <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Values - 3D Grid */}
      <section className="py-32 md:py-40 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-100/30 rounded-full blur-3xl"></div>

        <Container>
          <div className="text-center mb-24 relative z-10">
            <div className="inline-block">
              <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-6 block animate-slide-down">
                Our Approach
              </span>
              <h2 className="text-4xl md:text-6xl font-light text-gray-900 max-w-3xl mx-auto leading-tight mb-4">
                What We Believe In
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto perspective-container">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-3d group animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${index * 0.15}s`,
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
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-500 relative`}
                      >
                        <span className="text-3xl transform group-hover:scale-110 transition-transform duration-500">
                          {value.icon}
                        </span>
                        <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>

                    <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-500">
                      {value.title}
                    </h3>

                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      {value.description}
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
        </Container>
      </section>

      {/* Commitment Section - 3D Elevated Card */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-purple-50/30 via-white to-purple-50/20 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

        <Container>
          <div className="max-w-5xl mx-auto">
            <div
              className="card-3d group animate-fade-in-up opacity-0"
              style={{
                animationFillMode: "forwards",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 md:p-20 border border-purple-100/50 shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 overflow-hidden">
                {/* 3D Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div
                  className="relative z-10"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6 group-hover:text-purple-600 transition-colors duration-500">
                      Our Commitment to You
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 mx-auto rounded-full"></div>
                  </div>

                  <div className="space-y-6 text-base md:text-lg text-gray-600 font-light leading-relaxed">
                    <p>
                      At BIZNEEL, we understand that choosing personal care
                      products should be straightforward. That's why we focus on
                      creating formulations that are easy to use, suitable for
                      various hair and skin types, and deliver predictable
                      results.
                    </p>
                    <p>
                      Whether you're a salon professional looking for reliable
                      products for your clients, or someone seeking effective
                      personal care solutions at home, BIZNEEL offers a range
                      that balances quality with practicality.
                    </p>
                    <p>
                      We're FDAC approved and PETA-free certified, ensuring our
                      products meet safety standards and ethical practices
                      without compromising on performance.
                    </p>
                  </div>

                  {/* Stats with 3D Effect */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-purple-200/50">
                    <div className="text-center group/stat">
                      <div className="text-4xl md:text-5xl font-light bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-3 transform group-hover/stat:scale-110 transition-transform duration-500">
                        Professional
                      </div>
                      <div className="text-sm text-gray-500 font-light">
                        Salon-Grade Quality
                      </div>
                    </div>
                    <div className="text-center group/stat">
                      <div className="text-4xl md:text-5xl font-light bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-3 transform group-hover/stat:scale-110 transition-transform duration-500">
                        Reliable
                      </div>
                      <div className="text-sm text-gray-500 font-light">
                        Consistent Results
                      </div>
                    </div>
                    <div className="text-center group/stat">
                      <div className="text-4xl md:text-5xl font-light bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-3 transform group-hover/stat:scale-110 transition-transform duration-500">
                        Honest
                      </div>
                      <div className="text-sm text-gray-500 font-light">
                        No Misleading Claims
                      </div>
                    </div>
                  </div>
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
                Experience
                <br />
                <span className="font-light bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
                  Professional Care
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-purple-100 mb-12 font-light leading-relaxed max-w-xl mx-auto">
                Discover our range of reliable hair and skin care products
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/products"
                  className="inline-block px-12 py-6 bg-white text-purple-700 text-sm tracking-widest uppercase font-medium hover:bg-purple-50 transition-all duration-500 rounded-full shadow-2xl hover:shadow-white/30 hover:scale-110 transform relative overflow-hidden group"
                >
                  <span className="relative z-10">View Products</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/50 to-transparent translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-12 py-6 border-2 border-white text-white text-sm tracking-widest uppercase font-medium hover:bg-white/10 transition-all duration-500 rounded-full hover:scale-110 transform"
                >
                  Get Quote
                </Link>
              </div>
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

        /* Animation Delays */
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

        /* Smooth transforms */
        * {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </>
  );
}
