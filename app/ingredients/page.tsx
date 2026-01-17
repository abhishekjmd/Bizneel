import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ingredients } from "@/data/ingredients";

export const metadata: Metadata = {
    title: "Ingredients",
    description:
        "Learn about the natural, science-backed ingredients in our products. Complete transparency for informed skincare choices.",
};

/**
 * Ingredients page - Static Site Generation
 * Displays ingredient transparency information
 */
export default function IngredientsPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-16">
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Our Ingredients
                        </h1>
                        <p className="text-lg text-slate-600">
                            We believe in complete transparency. Every ingredient is carefully
                            selected, ethically sourced, and scientifically proven to deliver
                            results.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Ingredients Grid */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ingredients.map((ingredient) => (
                            <Card key={ingredient.id} className="h-full">
                                <CardContent className="p-6">
                                    <div className="mb-4">
                                        <h2 className="text-xl font-bold text-slate-900 mb-1">
                                            {ingredient.name}
                                        </h2>
                                        {ingredient.scientificName && (
                                            <p className="text-sm text-slate-500 italic">
                                                {ingredient.scientificName}
                                            </p>
                                        )}
                                    </div>

                                    <p className="text-slate-700 mb-4">{ingredient.description}</p>

                                    <div className="mb-4">
                                        <h3 className="text-sm font-semibold text-slate-900 mb-2">
                                            Benefits:
                                        </h3>
                                        <ul className="space-y-1">
                                            {ingredient.benefits.map((benefit, idx) => (
                                                <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                                                    <span className="text-rose-500 mt-0.5">•</span>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-4">
                                        <p className="text-sm text-slate-600">
                                            <span className="font-semibold">Source:</span>{" "}
                                            {ingredient.source}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5">
                                        {ingredient.certifications.map((cert) => (
                                            <Badge key={cert} variant="success">
                                                {cert}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
