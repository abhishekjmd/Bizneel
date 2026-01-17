import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Bizneel for product inquiries, quotes, or skincare consultations. We're here to help.",
};

/**
 * Contact page - Hybrid rendering
 * Server Component wrapper with Client Component form
 */
export default function ContactPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Get in Touch
                        </h1>
                        <p className="text-lg text-slate-600">
                            Have questions about our products? Need a custom quote? We&apos;re here
                            to help you find the perfect skincare solution.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Contact Form */}
            <section className="py-16 bg-white">
                <Container size="md">
                    <ContactForm />
                </Container>
            </section>

            {/* Contact Info */}
            <section className="py-16 bg-slate-50">
                <Container size="md">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                                <span className="text-xl">📧</span>
                            </div>
                            <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                            <p className="text-slate-600">contact@bizneel.com</p>
                        </div>

                        <div>
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                                <span className="text-xl">📞</span>
                            </div>
                            <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
                            <p className="text-slate-600">+1 (555) 123-4567</p>
                        </div>

                        <div>
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                                <span className="text-xl">⏰</span>
                            </div>
                            <h3 className="font-semibold text-slate-900 mb-2">Hours</h3>
                            <p className="text-slate-600">Mon-Fri: 9AM - 6PM EST</p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
