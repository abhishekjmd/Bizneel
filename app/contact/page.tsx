'use client'
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ContactForm } from "./contact-form";

const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with BIZNEEL for product inquiries, bulk orders, salon partnerships, or distributor enquiries.",
};

/**
 * Enhanced Contact Page - Premium 3D Design
 * Matches About Us, Products, and Product Detail pages
 */
export default function ContactPage() {
  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email",
      value: "bizneel01@gmail.com",
      link: "mailto:bizneel01@gmail.com",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: "Phone",
      value: "+91 91042 21284",
      link: "tel:+919104221284",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      label: "Business Hours",
      value: "Mon–Sat | 10 AM – 6 PM",
      link: null,
    },
  ];

  const enquiryTypes = [
    {
      title: "Bulk Orders",
      description: "Large quantity orders for businesses and retailers",
      icon: "📦",
    },
    {
      title: "Salon Partnerships",
      description: "Professional products for salon use",
      icon: "✨",
    },
    {
      title: "Distributor Enquiries",
      description: "Partnership opportunities for distributors",
      icon: "🤝",
    },
  ];

  return (
    <>
      {/* PREMIUM HERO SECTION - Enhanced 3D Design */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950">
        {/* Multi-Layer 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Layer 1 - Far back */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-3xl animate-blob"></div>

          {/* Layer 2 - Middle */}
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

          {/* Layer 3 - Close */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

          {/* Animated Grid Overlay */}
          <div className="absolute inset-0 bg-grid-glow opacity-10"></div>
        </div>

        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-float-particle-3d"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 15}s`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
            ></div>
          ))}
        </div>

        {/* Light Beams */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-purple-300/30 via-purple-300/10 to-transparent animate-pulse-slow"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-purple-300/30 via-purple-300/10 to-transparent animate-pulse-slow animation-delay-1000"></div>
        </div>

        <Container>
          <div className="max-w-5xl mx-auto text-center relative z-10 py-20">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 animate-float-gentle">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              <span className="text-sm tracking-[0.3em] uppercase text-purple-200 font-light">
                Let's Connect
              </span>
            </div>

            {/* Main Heading with Gradient */}
            <h1
              className="text-7xl md:text-9xl font-extralight tracking-tight text-white mb-8 leading-[0.9] animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              Get in
              <br />
              <span className="relative inline-block">
                <span className="font-light bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white animate-gradient-shift">
                  Touch
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 via-purple-400/40 to-purple-500/30 blur-2xl -z-10 animate-pulse-glow"></div>
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              className="text-2xl md:text-3xl text-purple-100/90 max-w-3xl mx-auto font-light leading-relaxed mb-8 animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              Have questions about our products? Need a quote for bulk orders,
              salon partnerships, or distributor enquiries? We're here to help.
            </p>
          </div>
        </Container>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
          <svg
            className="absolute bottom-0 w-full h-24 text-white"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{
              filter: "drop-shadow(0 -2px 10px rgba(0,0,0,0.1))",
            }}
          >
            <path
              d="M0,30 Q300,60 600,30 T1200,30 L1200,120 L0,120 Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>

      {/* ENQUIRY TYPES - Enhanced 3D Cards */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-white via-purple-50/20 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

        <Container>
          <div className="text-center mb-24 relative z-10">
            <div className="inline-block">
              <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-6 block animate-slide-down">
                We Welcome
              </span>
              <h2 className="text-5xl md:text-7xl font-light text-gray-900 leading-tight mb-4">
                Enquiry <span className="text-purple-600">Types</span>
              </h2>
              <div className="h-1 w-40 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 mx-auto rounded-full animate-shimmer"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto perspective-container">
            {enquiryTypes.map((type, index) => (
              <div
                key={index}
                className="card-3d group animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: "forwards",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-purple-100/50 shadow-2xl hover:shadow-purple-500/30 transition-all duration-700 overflow-hidden h-full group-hover:-translate-y-2">
                  {/* Multi-Layer Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-purple-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-purple-100/30 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Animated Corner Accents */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div
                    className="relative z-10"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-500">
                        <span className="text-3xl">{type.icon}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-500 text-center">
                      {type.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-light text-center leading-relaxed">
                      {type.description}
                    </p>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-3xl">
                    <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-shine"></div>
                  </div>

                  {/* 3D Multi-Layer Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-15 blur-2xl transition-all duration-700 -z-10"></div>
                  <div className="absolute -inset-2 bg-gradient-to-tl from-purple-300 via-purple-400 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-10 blur-3xl transition-all duration-700 -z-20"></div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CONTACT FORM & INFO - Enhanced Layout */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
            {/* Contact Form */}
            <div
              className="card-3d group animate-fade-in-up opacity-0"
              style={{
                animationDelay: "0.2s",
                animationFillMode: "forwards",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-purple-100/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 overflow-hidden">
                {/* 3D Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div
                  className="relative z-10"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-500">
                      Send us a Message
                    </h2>
                    <p className="text-sm text-gray-500 font-light">
                      Fill out the form and we'll get back to you shortly
                    </p>
                  </div>
                  <ContactForm />
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-3xl">
                  <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine"></div>
                </div>

                {/* 3D Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700 -z-10"></div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3">
                  Contact <span className="text-purple-600">Information</span>
                </h2>
                <p className="text-sm text-gray-500 font-light">
                  Reach out to us directly through any of these channels
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="card-3d group animate-fade-in-up opacity-0"
                  style={{
                    animationDelay: `${0.4 + index * 0.15}s`,
                    animationFillMode: "forwards",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-purple-100/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div
                      className="relative z-10 flex items-start gap-4"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center text-white group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-500 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-light text-gray-500 mb-2 uppercase tracking-wider">
                          {info.label}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-lg font-normal text-gray-900 hover:text-purple-600 transition-colors group-hover:text-purple-600"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-normal text-gray-900">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-3xl">
                      <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine"></div>
                    </div>

                    {/* Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700 -z-10"></div>
                  </div>
                </div>
              ))}

              {/* Quick Response Card */}
              <div
                className="card-3d group animate-fade-in-up opacity-0"
                style={{
                  animationDelay: "0.85s",
                  animationFillMode: "forwards",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-8 text-white overflow-hidden">
                  <div
                    className="relative z-10"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <h3 className="text-xl font-light mb-3">
                      ⚡ Quick Response
                    </h3>
                    <p className="text-sm text-purple-100 font-light leading-relaxed">
                      We typically respond to all enquiries within 24 hours
                      during business hours. For urgent matters, please call us
                      directly.
                    </p>
                  </div>

                  {/* Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA SECTION - Premium 3D */}
      <section className="relative py-32 md:py-40 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 overflow-hidden">
        {/* Multi-Layer 3D Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-400/25 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-float-particle-3d"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 15}s`,
                opacity: Math.random() * 0.4 + 0.1,
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
              <h2 className="text-5xl md:text-7xl font-extralight text-white mb-8 leading-tight">
                Ready to Explore
                <br />
                <span className="relative inline-block">
                  <span className="font-light bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white animate-gradient-shift">
                    Our Products?
                  </span>
                  <div className="absolute -inset-4 bg-purple-500/20 blur-2xl -z-10 animate-pulse-glow"></div>
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-purple-100 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                Browse our complete range of professional hair and skin care
                products
              </p>
              <a
                href="/products"
                className="inline-flex items-center gap-3 px-12 py-6 bg-white text-purple-900 text-sm tracking-widest uppercase font-bold rounded-full shadow-2xl hover:shadow-white/40 hover:scale-110 transition-all duration-500 relative overflow-hidden group"
              >
                <span className="relative z-10">View Products</span>
                <svg
                  className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/50 to-transparent translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
              </a>
            </div>
          </div>
        </Container>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-40">
          <svg
            className="absolute bottom-0 w-full h-32"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z"
              fill="white"
              opacity="0.8"
            ></path>
            <path
              d="M0,20 C300,100 600,100 900,60 C1050,40 1150,20 1200,20 L1200,120 L0,120 Z"
              fill="white"
            ></path>
          </svg>
        </div>
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
          perspective: 2500px;
        }

        /* Fade In Up Animation */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(60px) translateZ(-80px) rotateX(15deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateZ(0) rotateX(0deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Slide Down Animation */
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Blob Animation */
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(30px, -30px) scale(1.15);
          }
          50% {
            transform: translate(-30px, 30px) scale(0.85);
          }
          75% {
            transform: translate(30px, 30px) scale(1.08);
          }
        }

        .animate-blob {
          animation: blob 20s ease-in-out infinite;
        }

        /* 3D Particle Float */
        @keyframes float-particle-3d {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translate3d(40px, -60px, 30px) scale(1.8);
            opacity: 0.9;
          }
          90% {
            opacity: 0.2;
          }
        }

        .animate-float-particle-3d {
          animation: float-particle-3d 10s ease-in-out infinite;
        }

        /* Gentle Float */
        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }

        /* Shine Effect */
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        .animate-shine {
          animation: shine 2s ease-in-out;
        }

        /* Shimmer Effect */
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-shimmer {
          background: linear-gradient(
            90deg,
            rgba(147, 51, 234, 0.4),
            rgba(167, 139, 250, 0.8),
            rgba(147, 51, 234, 0.4)
          );
          background-size: 1000px 100%;
          animation: shimmer 3s linear infinite;
        }

        /* Gradient Shift */
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-shift {
          background-size: 200% auto;
          animation: gradient-shift 5s ease infinite;
        }

        /* Pulse Glow */
        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        /* Pulse Slow */
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        /* Background Patterns */
        .bg-grid-glow {
          background-image: radial-gradient(
            circle at center,
            rgba(147, 51, 234, 0.3) 1px,
            transparent 1px
          );
          background-size: 40px 40px;
        }

        /* Animation Delays */
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
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
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

        /* Radial Gradients */
        .bg-radial-gradient-center {
          background: radial-gradient(
            circle at center,
            rgba(147, 51, 234, 0.2) 0%,
            transparent 70%
          );
        }
      `}</style>
    </>
  );
}
