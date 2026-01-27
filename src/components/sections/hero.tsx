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

            {/* Overlay - Improved gradient for better text readability */}
            <div className={`absolute inset-0 z-0 ${backgroundImage ? 'bg-gradient-to-r from-black/70 via-black/50 to-black/40' : 'bg-gradient-to-br from-purple-50 via-purple-100 to-white'}`} />

            {/* Decorative Elements - Only if no background image */}
            {!backgroundImage && (
                <>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
                </>
            )}

            <Container className="relative z-10 w-full">
                <div className={`max-w-4xl ${backgroundImage ? 'text-center md:text-left text-white mx-auto md:mx-0' : 'mx-auto text-center'}`}>
                    <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight ${backgroundImage ? 'text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]' : 'text-slate-900'}`}>
                        {title}
                    </h1>

                    {/* Prominent Tagline */}
                    <div className={`mb-6 ${backgroundImage ? 'text-purple-300' : 'text-purple-600'}`}>
                        <p className={`text-xl md:text-3xl font-bold tracking-wide ${backgroundImage ? 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]' : ''}`}>
                            YOU'LL FEEL THE DIFFERENCE
                        </p>
                    </div>

                    <p className={`text-lg md:text-xl mb-10 leading-relaxed max-w-2xl ${backgroundImage ? 'text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] mx-auto md:mx-0' : 'text-slate-600 mx-auto'}`}>
                        Discover premium cosmetics crafted with nature's finest ingredients.
                    </p>

                    {ctaText && ctaHref && (
                        <div className={`flex flex-col sm:flex-row gap-4 ${backgroundImage ? 'justify-center md:justify-start' : 'justify-center'}`}>
                            <Link
                                href={ctaHref}
                                className={cn(
                                    "inline-flex items-center justify-center text-center rounded-[30px] font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    getButtonClasses("primary", "lg"),
                                    "w-full sm:w-auto shadow-xl hover:shadow-2xl hover:scale-105"
                                )}
                            >
                                {ctaText}
                            </Link>
                            <Link
                                href="/products"
                                className={cn(
                                    "inline-flex items-center px-10 justify-center text-center rounded-[30px] font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    backgroundImage
                                        ? "bg-white/10 backdrop-blur-md border-2 border-white/60 text-white hover:bg-white/20 hover:border-white/80"
                                        : getButtonClasses("outline", "lg"),
                                    "w-full sm:w-auto hover:scale-105"
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
