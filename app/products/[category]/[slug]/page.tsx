import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import { getProductBySlug, products } from "@/data/products";
import { getIngredientById } from "@/data/ingredients";

interface ProductPageProps {
    params: Promise<{
        category: string;
        slug: string;
    }>;
}

/**
 * Generate static params for all products
 * Enables Static Site Generation
 */
export async function generateStaticParams() {
    return products.map((product) => ({
        category: product.category,
        slug: product.slug,
    }));
}

/**
 * Generate metadata for product pages
 */
export async function generateMetadata({
    params,
}: ProductPageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    return {
        title: product.name,
        description: product.description,
        openGraph: {
            title: product.name,
            description: product.shortDescription,
            images: [product.image],
        },
    };
}

/**
 * Product detail page - Static Site Generation
 * Displays complete product information
 */
export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return (
        <>
            {/* Product Details */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Product Images */}
                        <div className="space-y-4">
                            <div className="relative aspect-square overflow-hidden bg-[#F9F9F9]">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-8"
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                            {product.images.length > 1 && (
                                <div className="grid grid-cols-3 gap-4">
                                    {product.images.slice(1, 4).map((img, idx) => (
                                        <div
                                            key={idx}
                                            className="relative aspect-square overflow-hidden bg-[#F9F9F9]"
                                        >
                                            <Image
                                                src={img}
                                                alt={`${product.name} ${idx + 2}`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 1024px) 33vw, 16vw"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6">
                            {/* Badges */}
                            <div className="flex flex-wrap gap-2">
                                {product.new && <Badge variant="info">New</Badge>}
                                {product.badges.map((badge) => (
                                    <Badge key={badge} variant="success">
                                        {badge}
                                    </Badge>
                                ))}
                            </div>

                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                                    {product.name}
                                </h1>
                                <p className="text-2xl font-bold text-rose-600">
                                    {formatPrice(product.price)}
                                </p>
                                <p className="text-sm text-slate-600 mt-1">{product.size}</p>
                            </div>

                            <p className="text-lg text-slate-700">{product.description}</p>

                            {/* Skin Types */}
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-2">
                                    Suitable for:
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.skinTypes.map((type) => (
                                        <Badge key={type} variant="default">
                                            {type}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <a
                                href={`https://wa.me/919104221284?text=${encodeURIComponent(`Hi, I would like to inquire about ${product.name}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-gray-800 transition-all w-full sm:w-auto rounded-lg"
                            >
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.005.575 1.913.923 3.205.923 3.197 0 5.778-2.586 5.78-5.766.002-3.186-2.584-5.772-5.78-5.772zm2.062 8.326c-.199.317-.991 1.129-1.373 1.137-.306.007-1.164-.298-2.316-1.554-1.002-1.077-1.295-1.95-1.286-2.28.012-.486.634-1.155.845-1.155.087 0 .205.006.291.01.127.006.237-.024.417.408.204.475.467 1.158.508 1.25.04.093.076.216.035.318-.088.225-.213.313-.417.518-.095.094-.194.19-.084.382.111.192.483.788 1.047 1.288.729.646 1.348.847 1.54.942.191.096.305.076.417-.052.176-.2.457-.648.599-.861.125-.192.29-.148.471-.094.177.065 1.128.532 1.32.628.192.096.321.144.368.224.047.08.047.464-.197.777z" />
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S16.627 0 12 0zm0 22c-3.111 0-6.027-1.15-8.293-3.155l-2.007.514.536-1.956C.667 15.341-.004 12.696.004 12.016.028 5.399 5.405.023 12.022.023c6.611 0 11.977 5.366 11.977 11.977 0 6.611-5.366 11.977-11.977 11.977z" />
                                </svg>
                                Inquire on WhatsApp
                            </a>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Benefits */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
                        Key Benefits
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {product.benefits.map((benefit, idx) => (
                            <Card key={idx}>
                                <CardContent className="p-4 flex items-start gap-3">
                                    <span className="text-rose-500 text-xl">✓</span>
                                    <p className="text-slate-700">{benefit}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* How to Use */}
            <section className="py-16 bg-white">
                <Container size="md">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                        How to Use
                    </h2>
                    <p className="text-slate-700 leading-relaxed">{product.howToUse}</p>
                </Container>
            </section>

            {/* Ingredients */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
                        Key Ingredients
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {product.ingredients.map((ingredientId) => {
                            const ingredient = getIngredientById(ingredientId);
                            if (!ingredient) return null;

                            return (
                                <Card key={ingredientId}>
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold text-slate-900 mb-2">
                                            {ingredient.name}
                                        </h3>
                                        <p className="text-sm text-slate-600 mb-3">
                                            {ingredient.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                            {ingredient.certifications.map((cert) => (
                                                <Badge key={cert} variant="success" className="text-xs">
                                                    {cert}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                    <div className="mt-8 text-center">
                        <Link href="/ingredients">
                            <Button variant="outline">Learn More About Our Ingredients</Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    );
}
