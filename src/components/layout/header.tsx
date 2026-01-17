import Link from "next/link";
import { Container } from "./container";

/**
 * Site header with navigation
 * Server Component - no client-side interactivity needed for MVP
 */
export function Header() {
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Products" },
        { href: "/ingredients", label: "Ingredients" },
        { href: "/certifications", label: "Certifications" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500">
                            <span className="text-xl font-bold text-white">B</span>
                        </div>
                        <span className="text-xl font-bold text-purple-600">
                            Bizneel
                        </span>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-slate-700 hover:text-purple-600 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/contact"
                            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-purple-500 text-white text-sm font-medium hover:bg-purple-600 transition-all shadow-sm hover:shadow-md"
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
}
