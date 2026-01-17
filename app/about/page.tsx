import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Bizneel's mission to create premium, natural cosmetics that are good for you and the planet.",
};

/**
 * About page - Static Site Generation
 * Brand story and mission
 */
export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            About Bizneel
                        </h1>
                        <p className="text-lg text-slate-600">
                            Premium cosmetics crafted with nature&apos;s finest ingredients
                        </p>
                    </div>
                </Container>
            </section>

            {/* Our Story */}
            <section className="py-16 bg-white">
                <Container size="md">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
                        <p className="text-slate-700 leading-relaxed mb-6">
                            Bizneel was born from a simple belief: skincare should be both
                            effective and ethical. We saw an industry filled with harsh chemicals,
                            misleading claims, and products that compromised either results or
                            values. We knew there had to be a better way.
                        </p>
                        <p className="text-slate-700 leading-relaxed mb-6">
                            Our journey began with extensive research into natural ingredients
                            backed by science. We partnered with dermatologists, botanists, and
                            sustainability experts to create formulations that deliver real
                            results without compromise.
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                            Today, Bizneel stands for transparency, quality, and sustainability.
                            Every product we create is vegan, cruelty-free, and made with
                            ethically sourced ingredients. We believe beautiful skin shouldn&apos;t
                            come at the expense of our planet or its creatures.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Our Values */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                        Our Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center text-3xl">
                                🌱
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                Natural First
                            </h3>
                            <p className="text-slate-600">
                                We harness the power of nature, using only the finest botanical
                                ingredients proven by science.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center text-3xl">
                                💚
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                Ethical Always
                            </h3>
                            <p className="text-slate-600">
                                Cruelty-free, vegan, and sustainably sourced. We never compromise
                                on our ethical standards.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center text-3xl">
                                🔬
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                Science-Backed
                            </h3>
                            <p className="text-slate-600">
                                Every ingredient is clinically tested and dermatologist approved
                                for proven results.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <CTA
                title="Experience the Bizneel Difference"
                description="Join thousands who have transformed their skincare routine"
                buttonText="Shop Now"
                buttonHref="/products"
            />
        </>
    );
}
