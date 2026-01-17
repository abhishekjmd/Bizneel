import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { certifications } from "@/data/certifications";

export const metadata: Metadata = {
    title: "Certifications",
    description:
        "Our commitment to quality, ethics, and sustainability. View all our certifications and compliance standards.",
};

/**
 * Certifications page - Static Site Generation
 * Displays brand certifications and compliance
 */
export default function CertificationsPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-16">
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Our Certifications
                        </h1>
                        <p className="text-lg text-slate-600">
                            Quality, ethics, and sustainability aren&apos;t just promises—they&apos;re
                            certified. We hold ourselves to the highest standards in the industry.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Certifications Grid */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certifications.map((cert) => (
                            <Card key={cert.id} className="text-center">
                                <CardContent className="p-8">
                                    {/* Certification Logo Placeholder */}
                                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                                        <span className="text-4xl">✓</span>
                                    </div>

                                    <h2 className="text-xl font-bold text-slate-900 mb-3">
                                        {cert.name}
                                    </h2>
                                    <p className="text-slate-600">{cert.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Additional Info */}
            <section className="py-16 bg-slate-50">
                <Container size="md">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            Our Commitment
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Every product we create undergoes rigorous testing and meets strict
                            certification standards. We&apos;re committed to transparency, ethical
                            sourcing, and environmental responsibility at every step of our
                            production process.
                        </p>
                    </div>
                </Container>
            </section>
        </>
    );
}
