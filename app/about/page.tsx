"use client"
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";

 const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Bizneel's mission to create professional, reliable personal care products for salons and individual users.",
};

/**
 * About page - Minimal & Elegant Design
 * Matches BIZNEEL homepage brand aesthetic
 */
export default function AboutPage() {
    const values = [
        {
            title: "Professional-Grade Quality",
            description: "Formulated for consistent performance in salons and at home, with reliable results every time.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Honest & Transparent",
            description: "No exaggerated claims or misleading promises. Just effective products that deliver what they say.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            title: "Focused Product Range",
            description: "A curated selection of essentials—hair care and skin care products designed for everyday use.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            )
        }
    ];

    return (
        <>
            {/* Hero Section - Elegant Purple Brand */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-400/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl"></div>

                <Container>
                    <div className="max-w-4xl mx-auto text-center relative z-10 py-20">
                        {/* Tagline */}
                        <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                            <span className="inline-block text-sm tracking-[0.35em] uppercase text-purple-600 font-light">
                                Who We Are
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight text-gray-900 mb-8 leading-tight animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                            About
                            <br />
                            <span className="font-light text-purple-600">BIZNEEL</span>
                        </h1>

                        {/* Supporting Text */}
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                            A professional personal care brand serving salons and individual users
                            with a focused range of reliable hair and skin care products.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Our Story */}
            <section className="py-28 md:py-36 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-6 block">
                                Our Story
                            </span>
                            <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-12">
                                Built on Reliability,
                                <br />Not Marketing Hype
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-purple-50/30 to-white p-10 md:p-12">
                                <h3 className="text-2xl font-light text-gray-900 mb-4">Who We Are</h3>
                                <p className="text-base text-gray-600 font-light leading-relaxed">
                                    BIZNEEL is a professional personal care brand serving salons and individual
                                    users with a focused range of hair and skin care products. We believe in
                                    creating products that work consistently, without the need for exaggerated
                                    claims or misleading promises.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50/30 to-white p-10 md:p-12">
                                <h3 className="text-2xl font-light text-gray-900 mb-4">Our Mission</h3>
                                <p className="text-base text-gray-600 font-light leading-relaxed">
                                    To offer reliable, effective, and easy-to-use personal care products without
                                    misleading claims. We focus on formulations that deliver consistent results
                                    for both professional salon use and everyday personal care.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50/30 to-white p-10 md:p-12">
                                <h3 className="text-2xl font-light text-gray-900 mb-4">What Makes Us Different</h3>
                                <p className="text-base text-gray-600 font-light leading-relaxed">
                                    We prioritize product usability and consistency over exaggerated marketing
                                    promises. Our approach is straightforward: create dependable products,
                                    price them fairly, and let the results speak for themselves.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Our Values */}
            <section className="py-28 md:py-36 bg-purple-50/30">
                <Container>
                    <div className="text-center mb-20">
                        <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-6 block">
                            Our Approach
                        </span>
                        <h2 className="text-4xl md:text-6xl font-light text-gray-900 max-w-3xl mx-auto leading-tight">
                            What We Believe In
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group bg-white p-10 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-700 animate-fade-in opacity-0"
                                style={{
                                    animationDelay: `${index * 0.15}s`,
                                    animationFillMode: 'forwards'
                                }}
                            >
                                <div className="mb-6">
                                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-500">
                                        {value.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-normal text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-gray-600 font-light leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Commitment Section */}
            <section className="py-28 md:py-36 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-purple-50/50 to-white p-12 md:p-16 shadow-lg shadow-purple-500/5">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                                    Our Commitment to You
                                </h2>
                            </div>

                            <div className="space-y-6 text-base text-gray-600 font-light leading-relaxed">
                                <p>
                                    At BIZNEEL, we understand that choosing personal care products should be
                                    straightforward. That's why we focus on creating formulations that are
                                    easy to use, suitable for various hair and skin types, and deliver
                                    predictable results.
                                </p>
                                <p>
                                    Whether you're a salon professional looking for reliable products for
                                    your clients, or someone seeking effective personal care solutions at
                                    home, BIZNEEL offers a range that balances quality with practicality.
                                </p>
                                <p>
                                    We're FDAC approved and PETA-free certified, ensuring our products meet
                                    safety standards and ethical practices without compromising on performance.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-purple-100">
                                <div className="text-center">
                                    <div className="text-3xl font-light text-purple-600 mb-2">Professional</div>
                                    <div className="text-sm text-gray-500 font-light">Salon-Grade Quality</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-light text-purple-600 mb-2">Reliable</div>
                                    <div className="text-sm text-gray-500 font-light">Consistent Results</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-light text-purple-600 mb-2">Honest</div>
                                    <div className="text-sm text-gray-500 font-light">No Misleading Claims</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="relative py-28 md:py-32 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>

                <Container>
                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <h2 className="text-4xl md:text-6xl font-extralight text-white mb-6 leading-tight">
                            Experience
                            <br />
                            <span className="font-light">Professional Care</span>
                        </h2>
                        <p className="text-lg text-purple-100 mb-10 font-light leading-relaxed max-w-xl mx-auto">
                            Discover our range of reliable hair and skin care products
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <a
                                href="/products"
                                className="inline-block px-12 py-5 bg-white text-purple-700 text-sm tracking-widest uppercase font-light hover:bg-purple-50 transition-all duration-500 shadow-2xl hover:shadow-white/20 hover:scale-[1.02]"
                            >
                                View Products
                            </a>
                            <a
                                href="/contact"
                                className="inline-block px-12 py-5 border-2 border-white text-white text-sm tracking-widest uppercase font-light hover:bg-white/10 transition-all duration-500"
                            >
                                Get Quote
                            </a>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Animations */}
            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
        </>
    );
}