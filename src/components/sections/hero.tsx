import Link from "next/link";
import { Button, getButtonClasses } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

export interface HeroProps {
    title: string;
    subtitle: string;
    ctaText?: string;
    ctaHref?: string;
    backgroundImage?: string;
}

/**
 * Hero section for homepage
 * Server Component
 */
export function Hero({ title, subtitle, ctaText, ctaHref, backgroundImage }: HeroProps) {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            {backgroundImage && (
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat animate-fade-in"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
            )}

            {/* Overlay - Gradient to ensure text readability */}
            <div className={`absolute inset-0 z-0 ${backgroundImage ? 'bg-black/30 bg-gradient-to-r from-purple-900/60 to-transparent' : 'bg-gradient-to-br from-purple-50 via-purple-100 to-white'}`} />

            {/* Decorative Elements - Only if no background image */}
            {!backgroundImage && (
                <>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
                </>
            )}

            <Container className="relative z-10 w-full">
                <div className={`max-w-3xl ${backgroundImage ? 'text-left text-white' : 'mx-auto text-center'}`}>
                    <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-md ${backgroundImage ? 'text-white' : 'text-slate-900'}`}>
                        {title}
                    </h1>
                    <p className={`text-lg md:text-2xl mb-8 leading-relaxed max-w-2xl drop-shadow-sm ${backgroundImage ? 'text-slate-100' : 'text-slate-600'}`}>
                        {subtitle}
                    </p>

                    {ctaText && ctaHref && (
                        <div className={`flex flex-col sm:flex-row gap-4 justify-center`}>
                            <Link
                                href={ctaHref}
                                className={cn(
                                    "inline-flex items-center justify-center text-center rounded-[30px] font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    getButtonClasses("primary", "lg"),
                                    "w-full sm:w-auto shadow-xl"
                                )}
                            >
                                {ctaText}
                            </Link>
                            <Link
                                href="/products"
                                className={cn(
                                    "inline-flex items-center px-10 justify-center text-center rounded-[30px] font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    backgroundImage
                                        ? "bg-white/10 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white/20"
                                        : getButtonClasses("outline", "lg"),
                                    "w-full sm:w-auto"
                                )}
                            >
                                Browse Products
                            </Link>
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
}
