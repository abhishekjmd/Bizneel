"use client"
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";

const metadata: Metadata = {
    title: "Certifications",
    description:
        "Our commitment to quality, ethics, and sustainability. FDAC approved and PETA-free certified.",
};

/**
 * Certifications page - Minimal & Elegant Design
 * Matches BIZNEEL homepage brand aesthetic
 */
export default function CertificationsPage() {
    const certifications = [
        {
            id: "fdac",
            name: "FDAC Approved",
            description: "Our products meet the stringent quality and safety standards set by the Food & Drug Administration Controller, ensuring safe formulations for all hair and skin types.",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            id: "peta",
            name: "PETA-Free",
            description: "100% cruelty-free commitment. None of our products or ingredients are tested on animals, and we never will. Ethical beauty you can feel good about.",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
                                Quality & Ethics
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight text-gray-900 mb-8 leading-tight animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                            Our
                            <br />
                            <span className="font-light text-purple-600">Certifications</span>
                        </h1>

                        {/* Supporting Text */}
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                            Quality and ethics aren't just promises—they're certified.
                            We hold ourselves to the highest standards in the industry.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Certifications Grid */}
            <section className="py-28 md:py-36 bg-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {certifications.map((cert, index) => (
                            <div
                                key={cert.id}
                                className="group relative bg-gradient-to-br from-purple-50/30 to-white p-12 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-700 animate-fade-in opacity-0"
                                style={{
                                    animationDelay: `${index * 0.2}s`,
                                    animationFillMode: 'forwards'
                                }}
                            >
                                {/* Decorative Corner Element */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                {/* Certification Badge */}
                                <div className="mb-8">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg shadow-purple-500/10 group-hover:scale-110 transition-transform duration-500">
                                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                                            {cert.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <h2 className="text-3xl font-light text-gray-900 mb-5 group-hover:text-purple-600 transition-colors duration-500">
                                    {cert.name}
                                </h2>
                                <p className="text-base text-gray-600 font-light leading-relaxed">
                                    {cert.description}
                                </p>

                                {/* Subtle Indicator */}
                                <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                                    <span className="text-xs text-purple-600 font-light tracking-widest uppercase">
                                        Certified
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Commitment Section */}
            <section className="py-28 md:py-36 bg-purple-50/30">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-6 block">
                                Our Promise
                            </span>
                            <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                                Commitment to Excellence
                            </h2>
                        </div>

                        {/* Content */}
                        <div className="bg-white p-12 md:p-16 shadow-lg shadow-purple-500/5">
                            <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                                Every product we create undergoes rigorous testing and meets strict
                                certification standards. We're committed to transparency, ethical
                                sourcing, and environmental responsibility at every step of our
                                production process.
                            </p>
                            <p className="text-lg text-gray-600 font-light leading-relaxed">
                                Our certifications reflect our dedication to delivering safe, effective,
                                and responsibly made hair and skin care products that you can trust.
                            </p>

                            {/* Trust Indicators */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 pt-12 border-t border-purple-100">
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div className="text-2xl font-light text-purple-600 mb-2">FDAC</div>
                                    <div className="text-sm text-gray-500 font-light">Approved Quality</div>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <div className="text-2xl font-light text-purple-600 mb-2">PETA</div>
                                    <div className="text-sm text-gray-500 font-light">Cruelty-Free</div>
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
                            Questions About Our
                            <br />
                            <span className="font-light">Certifications?</span>
                        </h2>
                        <p className="text-lg text-purple-100 mb-10 font-light leading-relaxed max-w-xl mx-auto">
                            We're transparent about our processes and happy to answer any questions
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-12 py-5 bg-white text-purple-700 text-sm tracking-widest uppercase font-light hover:bg-purple-50 transition-all duration-500 shadow-2xl hover:shadow-white/20 hover:scale-[1.02]"
                        >
                            Contact Us
                        </a>
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