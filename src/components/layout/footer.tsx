"use client"
import Link from "next/link";
import { Container } from "./container";

/**
 * Site footer - Minimal & Elegant Design
 * Matches BIZNEEL homepage brand aesthetic
 */
export function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        products: [
            { href: "/products", label: "Hair Care" },
            { href: "/products", label: "Skin Care" },
        ],
        company: [
            { href: "/about", label: "About Us" },
            { href: "/certifications", label: "Certifications" },
            { href: "/contact", label: "Contact" },
        ],
    };

    return (
        <footer className="border-t border-purple-100 bg-white">
            <Container>
                <div className="py-16 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                        {/* Brand - Takes more space */}
                        <div className="md:col-span-5">
                            <Link href="/" className="inline-block mb-6 group">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <span className="text-xl font-light text-white">B</span>
                                    </div>
                                    <span className="text-2xl font-light text-gray-900 tracking-wide">
                                        BIZNEEL
                                    </span>
                                </div>
                            </Link>
                            <p className="text-sm text-gray-600 font-light leading-relaxed max-w-sm mb-6">
                                Professional hair & skin care products crafted for reliable performance.
                                FDAC approved and PETA-free certified.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-2 text-sm text-gray-600 font-light">
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

                        {/* Products */}
                        <div className="md:col-span-3">
                            <h3 className="text-sm tracking-[0.2em] uppercase text-gray-900 font-normal mb-6">
                                Products
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.products.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-600 font-light hover:text-purple-600 transition-colors inline-block hover:translate-x-1 transition-transform duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="md:col-span-4">
                            <h3 className="text-sm tracking-[0.2em] uppercase text-gray-900 font-normal mb-6">
                                Company
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-600 font-light hover:text-purple-600 transition-colors inline-block hover:translate-x-1 transition-transform duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Certifications Bar */}
                    <div className="border-t border-purple-100 pt-8 pb-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <span className="text-xs text-gray-500 font-light">FDAC Approved</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-xs text-gray-500 font-light">PETA-Free</span>
                                </div>
                            </div>

                            <p className="text-xs text-gray-500 font-light">
                                © {currentYear} BIZNEEL. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}