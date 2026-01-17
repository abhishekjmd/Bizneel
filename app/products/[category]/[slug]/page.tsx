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
                            <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                            {product.images.length > 1 && (
                                <div className="grid grid-cols-3 gap-4">
                                    {product.images.slice(1, 4).map((img, idx) => (
                                        <div
                                            key={idx}
                                            className="relative aspect-square rounded-lg overflow-hidden bg-slate-100"
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
                            <Link href="/contact">
                                <Button size="lg" className="w-full sm:w-auto">
                                    Request a Quote
                                </Button>
                            </Link>
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
