"use client";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { useEffect } from "react";
import { CheckLine, Heart } from "lucide-react";

const metadata: Metadata = {
  title: "Certifications",
  description:
    "Our commitment to quality, ethics, and sustainability. FDAC approved and PETA-free certified.",
};

/**
 * Certifications page - Premium 3D Design
 * Matches BIZNEEL About Us page aesthetic with immersive 3D effects
 */
export default function CertificationsPage() {
  const certifications = [
    {
      id: "fdac",
      name: "FDAC Approved",
      description:
        "Our products meet the stringent quality and safety standards set by the Food & Drug Administration Controller, ensuring safe formulations for all hair and skin types.",
      icon: CheckLine,
      gradient: "from-purple-500 to-purple-700",
    },
    {
      id: "peta",
      name: "PETA-Free Certified",
      description:
        "100% cruelty-free commitment. None of our products or ingredients are tested on animals, and we never will. Ethical beauty you can feel good about.",
      icon: Heart,
      gradient: "from-purple-600 to-purple-800",
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
      <section className="relative min-h-[70vh] mt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
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
                Quality & Ethics
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-6xl md:text-8xl font-extralight tracking-tight text-white mb-8 leading-tight animate-fade-in-up opacity-0 transform hover:scale-105 transition-transform duration-500"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              Our
              <br />
              <span className="font-light bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
                Certifications
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              Quality and ethics aren't just promises—they're certified. We hold
              ourselves to the highest standards in the industry.
            </p>
          </div>
        </Container>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Certifications - 3D Cards */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

        <Container>
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-24">
              <div className="inline-block">
                <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-6 block animate-slide-down">
                  Our Commitment
                </span>
                <h2 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight mb-4">
                  Industry Standards
                  <br />
                  We Stand By
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 mx-auto rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-container">
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className="card-3d group animate-fade-in-up opacity-0"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationFillMode: "forwards",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-purple-100/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 h-full overflow-hidden">
                    {/* 3D Background Layer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div
                      className="relative z-10"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      {/* Icon Badge */}
                      <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
                        <div
                          className={`w-20 h-20 bg-gradient-to-br ${cert.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-500 relative`}
                        >
                          <span className="text-3xl transform group-hover:scale-110 transition-transform duration-500">
                            <cert.icon size={35} color="white" />
                          </span>
                          <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 group-hover:text-purple-600 transition-colors duration-500">
                        {cert.name}
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
                        {cert.description}
                      </p>

                      {/* Certified Badge */}
                      <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-xs text-purple-600 font-light tracking-widest uppercase">
                          Certified & Verified
                        </span>
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
              ))}
            </div>
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
                      Our Promise to You
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 mx-auto rounded-full"></div>
                  </div>

                  <div className="space-y-6 text-base md:text-lg text-gray-600 font-light leading-relaxed">
                    <p>
                      At BIZNEEL, we understand that trust is everything when it
                      comes to personal care products. Our certifications aren't
                      just badges—they represent our genuine commitment to
                      safety, ethics, and quality at every level.
                    </p>
                    <p>
                      Every product we create undergoes rigorous testing and
                      meets strict certification standards. We maintain complete
                      transparency about our sourcing, manufacturing processes,
                      and ethical practices.
                    </p>
                    <p>
                      Whether FDAC approval for safety or PETA certification for
                      cruelty-free assurance, these standards reflect our
                      dedication to delivering products you can trust and feel
                      good about using.
                    </p>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-12 border-t border-purple-200/50">
                    <div className="text-center group/stat">
                      <div className="text-4xl md:text-5xl font-light bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-3 transform group-hover/stat:scale-110 transition-transform duration-500">
                        Safety
                      </div>
                      <div className="text-sm text-gray-500 font-light">
                        FDAC Approved
                      </div>
                    </div>
                    <div className="text-center group/stat">
                      <div className="text-4xl md:text-5xl font-light bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-3 transform group-hover/stat:scale-110 transition-transform duration-500">
                        Ethical
                      </div>
                      <div className="text-sm text-gray-500 font-light">
                        PETA Certified
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
                Want to Learn
                <br />
                <span className="font-light bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
                  More Details?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-purple-100 mb-12 font-light leading-relaxed max-w-xl mx-auto">
                We're transparent about our processes and happy to answer any
                questions
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/products"
                  className="inline-block px-12 py-6 bg-white text-purple-700 text-sm tracking-widest uppercase font-medium hover:bg-purple-50 transition-all duration-500 rounded-full shadow-2xl hover:shadow-white/30 hover:scale-110 transform relative overflow-hidden group"
                >
                  <span className="relative z-10">Explore Products</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/50 to-transparent translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-12 py-6 border-2 border-white text-white text-sm tracking-widest uppercase font-medium hover:bg-white/10 transition-all duration-500 rounded-full hover:scale-110 transform"
                >
                  Contact Us
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
      `}</style>
    </>
  );
}
