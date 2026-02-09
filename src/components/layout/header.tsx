"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import { cn } from "@/lib/utils";

/**
 * Site header - Minimal & Elegant Design
 * Matches BIZNEEL homepage brand aesthetic
 */
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInParallax, setIsInParallax] = useState(true);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Check if we're still in the parallax section (400vh)
      const parallaxSection = document.querySelector('[class*="h-[400vh]"]');
      if (parallaxSection) {
        const rect = parallaxSection.getBoundingClientRect();
        setIsInParallax(rect.bottom > 0);
      }
    };
    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "absolute md:fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500",
        "bg-transparent border-transparent",
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center z-50 relative group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative h-20 w-auto group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/previewLogo.png"
                alt="BIZNEEL Logo"
                width={240}
                height={80}
                className="h-20 w-auto object-contain transition-all duration-500 drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-light transition-colors relative group",
                  isInParallax
                    ? "text-white drop-shadow-md hover:text-purple-200"
                    : "text-white hover:text-purple-600",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300",
                    isInParallax ? "bg-white" : "bg-purple-600",
                  )}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className={cn(
                "px-8 py-3 text-sm tracking-wider uppercase font-light transition-all duration-500 shadow-sm hover:shadow-md hover:scale-[1.02]",
                isInParallax
                  ? "bg-white/90 backdrop-blur-sm text-purple-600 hover:bg-white"
                  : "bg-purple-600 text-white hover:bg-purple-700",
              )}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden relative z-50 p-2 focus:outline-none transition-colors duration-500",
              isInParallax ? "text-white" : "text-white",
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={cn(
                  "w-full h-0.5 bg-current transition-all duration-300 ease-in-out",
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : "",
                )}
              ></span>
              <span
                className={cn(
                  "w-full h-0.5 bg-current transition-all duration-300 ease-in-out",
                  isMobileMenuOpen ? "opacity-0" : "",
                )}
              ></span>
              <span
                className={cn(
                  "w-full h-0.5 bg-current transition-all duration-300 ease-in-out",
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : "",
                )}
              ></span>
            </div>
          </button>

          {/* Mobile Menu Overlay - Enhanced with Animations */}
          <div
            className={cn(
              "fixed inset-0 z-40 transition-all duration-500 ease-in-out md:hidden overflow-hidden",
              isMobileMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none",
            )}
          >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
              {/* Animated Blob Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className={cn(
                    "absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl transition-all duration-1000",
                    isMobileMenuOpen
                      ? "animate-blob opacity-100"
                      : "opacity-0 scale-50",
                  )}
                ></div>
                <div
                  className={cn(
                    "absolute bottom-0 left-0 w-[350px] h-[350px] bg-purple-400/20 rounded-full blur-3xl transition-all duration-1000",
                    isMobileMenuOpen
                      ? "animate-blob animation-delay-2000 opacity-100"
                      : "opacity-0 scale-50",
                  )}
                ></div>
                <div
                  className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl transition-all duration-1000",
                    isMobileMenuOpen
                      ? "animate-blob animation-delay-4000 opacity-100"
                      : "opacity-0 scale-50",
                  )}
                ></div>
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "absolute w-1 h-1 bg-white/20 rounded-full transition-all duration-1000",
                      isMobileMenuOpen
                        ? "animate-float-particle opacity-100"
                        : "opacity-0",
                    )}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${5 + Math.random() * 5}s`,
                      transitionDelay: `${i * 30}ms`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Animated Grid Pattern */}
              <div
                className={cn(
                  "absolute inset-0 bg-grid-pattern transition-opacity duration-1000",
                  isMobileMenuOpen ? "opacity-[0.03]" : "opacity-0",
                )}
              ></div>
            </div>

            {/* Mobile Menu Content */}
            <div className="relative flex flex-col h-full pt-28 px-8">
              <nav className="flex flex-col space-y-8">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-3xl font-light text-white hover:text-purple-200 transition-all duration-300 relative group",
                      isMobileMenuOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4",
                    )}
                    style={{
                      transitionDelay: isMobileMenuOpen
                        ? `${index * 50 + 200}ms`
                        : "0ms",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-300 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-12">
                <Link
                  href="/contact"
                  className={cn(
                    "block w-full px-8 py-4 bg-white/90 backdrop-blur-sm text-purple-700 text-center text-sm tracking-widest uppercase font-medium hover:bg-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-white/20 rounded-full relative overflow-hidden group",
                    isMobileMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4",
                  )}
                  style={{
                    transitionDelay: isMobileMenuOpen ? "450ms" : "0ms",
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">Get Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/50 to-transparent translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div
                className={cn(
                  "mt-auto pb-8 space-y-3 text-sm text-purple-100 font-light transition-all duration-300",
                  isMobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4",
                )}
                style={{
                  transitionDelay: isMobileMenuOpen ? "500ms" : "0ms",
                }}
              >
                <div className="flex items-center gap-2 group">
                  <svg
                    className="w-4 h-4 text-purple-300 group-hover:text-white transition-colors"
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
                  <a
                    href="mailto:bizneel01@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    bizneel01@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 group">
                  <svg
                    className="w-4 h-4 text-purple-300 group-hover:text-white transition-colors"
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
                  <a
                    href="tel:+919104221284"
                    className="hover:text-white transition-colors"
                  >
                    +91 91042 21284
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Inline Styles for Animations */}
      <style jsx global>{`
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
            transform: translate(20px, -30px) scale(1.5);
            opacity: 0.8;
          }
          90% {
            opacity: 0.3;
          }
        }

        .animate-float-particle {
          animation: float-particle 8s ease-in-out infinite;
        }

        /* Background Grid Pattern */
        .bg-grid-pattern {
          background-image:
            linear-gradient(
              to right,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.1) 1px,
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
      `}</style>
    </header>
  );
}
