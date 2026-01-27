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

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
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
                "sticky top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "border-b border-purple-100 bg-white/95 backdrop-blur-lg shadow-sm"
                    : "border-b border-transparent bg-white/80 backdrop-blur-md"
            )}
        >
            <Container>
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 z-50 relative group"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {/* Logo Image - Replace with your actual logo */}
                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            {/* If you have a logo image, use this: */}
                            {/* <Image
                src="/logo.png"
                alt="BIZNEEL Logo"
                width={48}
                height={48}
                className="object-contain"
              /> */}

                            {/* Fallback logo */}
                            <span className="text-2xl font-light text-white">B</span>
                        </div>
                        <span className="text-2xl font-light text-gray-900 tracking-wide">
                            BIZNEEL
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-sm font-light text-gray-700 hover:text-purple-600 transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-purple-600 text-white text-sm tracking-wider uppercase font-light hover:bg-purple-700 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02]"
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative z-50 p-2 text-gray-700 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span
                                className={cn(
                                    "w-full h-0.5 bg-current transition-all duration-300 ease-in-out",
                                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                )}
                            ></span>
                            <span
                                className={cn(
                                    "w-full h-0.5 bg-current transition-all duration-300 ease-in-out",
                                    isMobileMenuOpen ? "opacity-0" : ""
                                )}
                            ></span>
                            <span
                                className={cn(
                                    "w-full h-0.5 bg-current transition-all duration-300 ease-in-out",
                                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                )}
                            ></span>
                        </div>
                    </button>

                    {/* Mobile Menu Overlay */}
                    <div
                        className={cn(
                            "fixed inset-0 z-40 bg-white transition-all duration-500 ease-in-out md:hidden",
                            isMobileMenuOpen
                                ? "opacity-100 pointer-events-auto"
                                : "opacity-0 pointer-events-none"
                        )}
                    >
                        {/* Mobile Menu Content */}
                        <div className="flex flex-col h-full pt-28 px-8">
                            <nav className="flex flex-col space-y-8">
                                {navLinks.map((link, index) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "text-3xl font-light text-gray-900 hover:text-purple-600 transition-all duration-300",
                                            isMobileMenuOpen
                                                ? "opacity-100 translate-x-0"
                                                : "opacity-0 -translate-x-4"
                                        )}
                                        style={{
                                            transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                                        }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            {/* Mobile CTA */}
                            <div className="mt-12">
                                <Link
                                    href="/contact"
                                    className={cn(
                                        "block w-full px-8 py-4 bg-purple-600 text-white text-center text-sm tracking-widest uppercase font-light hover:bg-purple-700 transition-all duration-300 shadow-lg",
                                        isMobileMenuOpen
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-4"
                                    )}
                                    style={{
                                        transitionDelay: isMobileMenuOpen ? "250ms" : "0ms",
                                    }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Get Quote
                                </Link>
                            </div>

                            {/* Mobile Contact Info */}
                            <div
                                className={cn(
                                    "mt-auto pb-8 space-y-3 text-sm text-gray-600 font-light transition-all duration-300",
                                    isMobileMenuOpen
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4"
                                )}
                                style={{
                                    transitionDelay: isMobileMenuOpen ? "300ms" : "0ms",
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href="mailto:bizneel01@gmail.com" className="hover:text-purple-600 transition-colors">
                                        bizneel01@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <a href="tel:+919104221284" className="hover:text-purple-600 transition-colors">
                                        +91 91042 21284
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}