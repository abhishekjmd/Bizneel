import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export interface CTAProps {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
}

/**
 * Call-to-action section
 * Server Component
 */
export function CTA({ title, description, buttonText, buttonHref }: CTAProps) {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2" />

            <Container className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 mb-8">
                        {description}
                    </p>
                    <Link href={buttonHref}>
                        <Button
                            size="lg"
                            className="bg-white text-purple-600 hover:bg-slate-50 shadow-xl"
                        >
                            {buttonText}
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
