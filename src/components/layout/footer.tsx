import Link from "next/link";
import { Container } from "./container";

/**
 * Site footer with links and brand information
 * Server Component
 */
export function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        products: [
            { href: "/products/cleansers", label: "Cleansers" },
            { href: "/products/moisturizers", label: "Moisturizers" },
            { href: "/products/serums", label: "Serums" },
            { href: "/products/masks", label: "Face Masks" },
        ],
        company: [
            { href: "/about", label: "About Us" },
            { href: "/certifications", label: "Certifications" },
            { href: "/ingredients", label: "Ingredients" },
            { href: "/contact", label: "Contact" },
        ],
    };

    return (
        <footer className="border-t border-slate-200 bg-slate-50">
            <Container>
                <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500">
                                <span className="text-xl font-bold text-white">B</span>
                            </div>
                            <span className="text-xl font-bold text-purple-600">
                                Bizneel
                            </span>
                        </Link>
                        <p className="text-sm text-slate-600 max-w-md">
                            Premium cosmetics crafted with nature&apos;s finest ingredients.
                            Vegan, cruelty-free, and sustainably made for radiant, healthy skin.
                        </p>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Products</h3>
                        <ul className="space-y-2">
                            {footerLinks.products.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-600 hover:text-purple-600 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-600 hover:text-purple-600 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 py-6">
                    <p className="text-center text-sm text-slate-600">
                        © {currentYear} Bizneel. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
