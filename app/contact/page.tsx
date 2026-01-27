"use client"
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ContactForm } from "./contact-form";

const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with BIZNEEL for product inquiries, bulk orders, salon partnerships, or distributor enquiries.",
};

/**
 * Contact page - Minimal & Elegant Design
 * Matches BIZNEEL homepage brand aesthetic
 */
export default function ContactPage() {
    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: "Email",
            value: "bizneel01@gmail.com",
            link: "mailto:bizneel01@gmail.com"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            label: "Phone",
            value: "+91 91042 21284",
            link: "tel:+919104221284"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            label: "Business Hours",
            value: "Mon–Sat | 10 AM – 6 PM",
            link: null
        }
    ];

    const enquiryTypes = [
        {
            title: "Bulk Orders",
            description: "Large quantity orders for businesses and retailers"
        },
        {
            title: "Salon Partnerships",
            description: "Professional products for salon use"
        },
        {
            title: "Distributor Enquiries",
            description: "Partnership opportunities for distributors"
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
                                Let's Connect
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight text-gray-900 mb-8 leading-tight animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                            Get in
                            <br />
                            <span className="font-light text-purple-600">Touch</span>
                        </h1>

                        {/* Supporting Text */}
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                            Have questions about our products? Need a quote for bulk orders, salon
                            partnerships, or distributor enquiries? We're here to help.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Enquiry Types */}
            <section className="py-20 bg-white border-b border-purple-100">
                <Container>
                    <div className="text-center mb-16">
                        <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light">
                            We Welcome
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {enquiryTypes.map((type, index) => (
                            <div
                                key={index}
                                className="text-center group animate-fade-in opacity-0"
                                style={{
                                    animationDelay: `${index * 0.15}s`,
                                    animationFillMode: 'forwards'
                                }}
                            >
                                <div className="mb-4">
                                    <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-500">
                                        <div className="w-2 h-2 bg-purple-600 rounded-full group-hover:bg-white"></div>
                                    </div>
                                </div>
                                <h3 className="text-lg font-normal text-gray-900 mb-2">
                                    {type.title}
                                </h3>
                                <p className="text-sm text-gray-500 font-light">
                                    {type.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Contact Form & Info Grid */}
            <section className="py-28 md:py-36 bg-purple-50/30">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <div className="bg-white p-10 md:p-12 shadow-lg shadow-purple-500/5">
                            <div className="mb-8">
                                <h2 className="text-3xl font-light text-gray-900 mb-3">
                                    Send us a Message
                                </h2>
                                <p className="text-sm text-gray-500 font-light">
                                    Fill out the form and we'll get back to you shortly
                                </p>
                            </div>
                            <ContactForm />
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="mb-12">
                                <h2 className="text-3xl font-light text-gray-900 mb-3">
                                    Contact Information
                                </h2>
                                <p className="text-sm text-gray-500 font-light">
                                    Reach out to us directly through any of these channels
                                </p>
                            </div>

                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="group bg-white p-8 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 animate-fade-in opacity-0"
                                    style={{
                                        animationDelay: `${0.2 + index * 0.1}s`,
                                        animationFillMode: 'forwards'
                                    }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-500 flex-shrink-0">
                                            {info.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-sm font-light text-gray-500 mb-2 uppercase tracking-wider">
                                                {info.label}
                                            </h3>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="text-lg font-normal text-gray-900 hover:text-purple-600 transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-lg font-normal text-gray-900">
                                                    {info.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Additional Info Card */}
                            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 text-white">
                                <h3 className="text-xl font-light mb-3">Quick Response</h3>
                                <p className="text-sm text-purple-100 font-light leading-relaxed">
                                    We typically respond to all enquiries within 24 hours during business
                                    hours. For urgent matters, please call us directly.
                                </p>
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
                            Ready to Start
                            <br />
                            <span className="font-light">Your Order?</span>
                        </h2>
                        <p className="text-lg text-purple-100 mb-10 font-light leading-relaxed max-w-xl mx-auto">
                            Browse our complete range of professional hair and skin care products
                        </p>
                        <a
                            href="/products"
                            className="inline-block px-12 py-5 bg-white text-purple-700 text-sm tracking-widest uppercase font-light hover:bg-purple-50 transition-all duration-500 shadow-2xl hover:shadow-white/20 hover:scale-[1.02]"
                        >
                            View Products
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