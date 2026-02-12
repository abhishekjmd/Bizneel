"use client";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ContactForm } from "./contact-form";
import { Handshake, Package, Sparkle, Mail, Phone, Clock } from "lucide-react";

const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with BIZNEEL for product inquiries, bulk orders, salon partnerships, or distributor enquiries.",
};

/**
 * Contact Page - Premium 3D Design
 * Matches About Us and Certifications pages aesthetic
 */
export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bizneel01@gmail.com",
      link: "mailto:bizneel01@gmail.com",
      gradient: "from-purple-500 to-purple-700",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 91042 21284",
      link: "tel:+919104221284",
      gradient: "from-purple-600 to-purple-800",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon–Sat | 10 AM – 6 PM",
      link: null,
      gradient: "from-purple-700 to-purple-900",
    },
  ];

  const enquiryTypes = [
    {
      title: "Bulk Orders",
      description: "Large quantity orders for businesses and retailers",
      icon: Package,
      gradient: "from-purple-500 to-purple-700",
    },
    {
      title: "Salon Partnerships",
      description: "Professional products for salon use",
      icon: Sparkle,
      gradient: "from-purple-600 to-purple-800",
    },
    {
      title: "Distributor Enquiries",
      description: "Partnership opportunities for distributors",
      icon: Handshake,
      gradient: "from-purple-700 to-purple-900",
    },
  ];

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
                Let's Connect
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-6xl md:text-8xl font-extralight tracking-tight text-white mb-8 leading-tight animate-fade-in-up opacity-0 transform hover:scale-105 transition-transform duration-500"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              Get in
              <br />
              <span className="font-light bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
                Touch
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              Have questions about our products? Need a quote for bulk orders,
              salon partnerships, or distributor enquiries? We're here to help.
            </p>
          </div>
        </Container>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Enquiry Types - 3D Cards */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

        <Container>
          <div className="text-center mb-20 relative z-10">
            <div className="inline-block">
              <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-6 block animate-slide-down">
                We Welcome
              </span>
              <h2 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight mb-4">
                How We Can Help
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 mx-auto rounded-full"></div>
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
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 border border-purple-100/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 h-full overflow-hidden">
                  {/* 3D Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div
                    className="relative z-10"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${type.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-500 relative mx-auto`}
                      >
                        <span className="text-3xl transform group-hover:scale-110 transition-transform duration-500">
                          <type.icon size={35} color="white" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>

                    <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-500 text-center">
                      {type.title}
                    </h3>

                    <p className="text-sm text-gray-600 font-light leading-relaxed text-center">
                      {type.description}
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

      {/* Contact Form & Info - 3D Layout */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
            {/* Contact Form */}
            <div
              className="card-3d group animate-fade-in-up opacity-0"
              style={{
                animationDelay: "0.2s",
                animationFillMode: "forwards",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-purple-100/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 overflow-hidden h-full">
                {/* 3D Background Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div
                  className="relative z-10"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 group-hover:text-purple-600 transition-colors duration-500">
                    Send us a Message
                  </h2>
                  <p className="text-sm text-gray-500 font-light mb-8">
                    Fill out the form and we'll get back to you shortly
                  </p>
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
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
                  Contact
                  <br />
                  <span className="text-purple-600">Information</span>
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
                    animationDelay: `${0.35 + index * 0.15}s`,
                    animationFillMode: "forwards",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-purple-100/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div
                      className="relative z-10 flex items-start gap-4"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-500 flex-shrink-0`}
                      >
                        <info.icon size={28} color="white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xs font-light text-gray-500 mb-2 uppercase tracking-widest">
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

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-3xl">
                      <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine"></div>
                    </div>

                    <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700 -z-10"></div>
                  </div>
                </div>
              ))}

              {/* Quick Response Card */}
              <div
                className="card-3d group animate-fade-in-up opacity-0"
                style={{
                  animationDelay: "0.8s",
                  animationFillMode: "forwards",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-8 text-white overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-purple-600 to-purple-700/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

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

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-3xl">
                    <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine"></div>
                  </div>

                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-700 -z-10"></div>
                </div>
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
                Ready to Explore
                <br />
                <span className="font-light bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
                  Our Products?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-purple-100 mb-12 font-light leading-relaxed max-w-xl mx-auto">
                Browse our complete range of professional hair and skin care
                products
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
                  href="/about"
                  className="inline-block px-12 py-6 border-2 border-white text-white text-sm tracking-widest uppercase font-medium hover:bg-white/10 transition-all duration-500 rounded-full hover:scale-110 transform"
                >
                  Learn More
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
