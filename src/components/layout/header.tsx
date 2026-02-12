"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { Container } from "./container";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInParallax, setIsInParallax] = useState(true);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        const heroSection = document.querySelector("section.h-screen");
        if (heroSection) {
          const rect = heroSection.getBoundingClientRect();
          setIsInParallax(rect.bottom > 80);
        } else {
          setIsInParallax(window.scrollY < window.innerHeight - 80);
        }
      } else {
        setIsInParallax(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
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

  const isTransparent = isHomePage && isInParallax;

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 w-full transition-all duration-500",
          isMobileMenuOpen ? "z-[120]" : "z-[100]",
          isTransparent
            ? "bg-transparent py-4"
            : "bg-purple-900/95 backdrop-blur-md shadow-lg border-b border-purple-800/50 py-2",
        )}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image
                src="/previewLogo.png"
                alt="BIZNEEL Logo"
                width={200}
                height={60}
                className={cn(
                  "h-16 w-auto object-contain transition-all duration-500",
                  isTransparent
                    ? "drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)]"
                    : "brightness-0 invert",
                )}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white hover:text-purple-200 transition"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="px-6 py-3 text-sm uppercase bg-white text-purple-900"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Hamburger / X */}
            <button
              className="md:hidden relative z-[130] p-2 text-white"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={cn(
                    "w-full h-0.5 bg-current transition-all duration-300",
                    isMobileMenuOpen && "rotate-45 translate-y-2",
                  )}
                />
                <span
                  className={cn(
                    "w-full h-0.5 bg-current transition-all duration-300",
                    isMobileMenuOpen && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "w-full h-0.5 bg-current transition-all duration-300",
                    isMobileMenuOpen && "-rotate-45 -translate-y-2",
                  )}
                />
              </div>
            </button>
          </div>
        </Container>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-0 z-[105] md:hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900" />

                <div className="relative flex flex-col h-full pt-28 px-8">
                  <nav className="flex flex-col space-y-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-3xl font-light text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-12">
                    <Link
                      href="/contact"
                      className="block w-full px-8 py-4 bg-white text-purple-700 text-center uppercase"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
