import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export interface HeroProps {
    title: string;
    subtitle: string;
    ctaText?: string;
    ctaHref?: string;
}

/**
 * Hero section for homepage
 * Server Component
 */
export function Hero({ title, subtitle, ctaText, ctaHref }: HeroProps) {
    return (
        <section className="relative bg-gradient-to-br from-purple-50 via-purple-100 to-white py-20 md:py-32 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

            <Container className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                        {subtitle}
                    </p>

                    {ctaText && ctaHref && (
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href={ctaHref}>
                                <Button size="lg" className="w-full sm:w-auto">
                                    {ctaText}
                                </Button>
                            </Link>
                            <Link href="/products">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                    Browse Products
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
}
