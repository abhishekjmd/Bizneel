import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Quote Sent Successfully",
    description: "Your quote request has been received. We'll get back to you soon!",
};

/**
 * Quote success page - Static Site Generation
 * Confirmation page after successful form submission
 */
export default function QuoteSuccessPage() {
    return (
        <section className="py-24 bg-gradient-to-br from-rose-50 to-pink-50 min-h-[80vh] flex items-center">
            <Container size="md">
                <div className="text-center">
                    {/* Success Icon */}
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center">
                        <span className="text-4xl">✓</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Thank You!
                    </h1>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                        Your quote request has been received successfully. Our team will review
                        your inquiry and get back to you within 24 hours.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/products">
                            <Button size="lg">Browse Products</Button>
                        </Link>
                        <Link href="/">
                            <Button size="lg" variant="outline">
                                Back to Home
                            </Button>
                        </Link>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-12 p-6 bg-white rounded-xl shadow-sm max-w-md mx-auto">
                        <h2 className="font-semibold text-slate-900 mb-2">
                            What happens next?
                        </h2>
                        <ul className="text-sm text-slate-600 space-y-2 text-left">
                            <li className="flex items-start gap-2">
                                <span className="text-rose-500 mt-0.5">•</span>
                                We&apos;ll review your inquiry and product interests
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-rose-500 mt-0.5">•</span>
                                Our skincare experts will prepare personalized recommendations
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-rose-500 mt-0.5">•</span>
                                You&apos;ll receive a detailed quote via email within 24 hours
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}
