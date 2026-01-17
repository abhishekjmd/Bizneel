"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { ContactFormData } from "@/lib/validations";
import { submitContactForm } from "./actions";

/**
 * Contact form component - Client Component
 * Handles form state and submission via Server Action
 */
export function ContactForm() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});

        const formData = new FormData(e.currentTarget);
        const data: ContactFormData = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            company: formData.get("company") as string,
            message: formData.get("message") as string,
            productInterest: formData.get("productInterest") as string,
        };

        try {
            const result = await submitContactForm(data);

            if (result.success) {
                router.push("/quote-success");
            } else {
                setErrors({ message: result.error || "Failed to submit form" });
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setErrors({ message: "An unexpected error occurred. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Card>
            <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            name="name"
                            label="Full Name"
                            placeholder="John Doe"
                            required
                            error={errors.name}
                        />
                        <Input
                            name="email"
                            type="email"
                            label="Email Address"
                            placeholder="john@example.com"
                            required
                            error={errors.email}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            name="phone"
                            type="tel"
                            label="Phone Number (Optional)"
                            placeholder="+1 (555) 123-4567"
                            error={errors.phone}
                        />
                        <Input
                            name="company"
                            label="Company (Optional)"
                            placeholder="Acme Inc."
                            error={errors.company}
                        />
                    </div>

                    <Input
                        name="productInterest"
                        label="Product of Interest (Optional)"
                        placeholder="e.g., Vitamin C Serum"
                        error={errors.productInterest}
                    />

                    <Textarea
                        name="message"
                        label="Message"
                        placeholder="Tell us about your skincare needs or questions..."
                        required
                        error={errors.message}
                        rows={6}
                    />

                    {errors.message && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-sm text-red-600">{errors.message}</p>
                        </div>
                    )}

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
