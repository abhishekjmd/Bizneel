import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { ProductGrid } from "@/components/product/product-grid";
import { getProductsByCategory } from "@/data/products";
import { getCategoryBySlug, categories } from "@/data/categories";

interface CategoryPageProps {
    params: Promise<{
        category: string;
    }>;
}

/**
 * Generate static params for all categories
 * Enables Static Site Generation for category pages
 */
export async function generateStaticParams() {
    return categories.map((category) => ({
        category: category.slug,
    }));
}

/**
 * Generate metadata for category pages
 */
export async function generateMetadata({
    params,
}: CategoryPageProps): Promise<Metadata> {
    const { category: categorySlug } = await params;
    const category = getCategoryBySlug(categorySlug);

    if (!category) {
        return {
            title: "Category Not Found",
        };
    }

    return {
        title: category.name,
        description: category.description,
    };
}

/**
 * Category page - Static Site Generation
 * Displays products filtered by category
 */
export default async function CategoryPage({ params }: CategoryPageProps) {
    const { category: categorySlug } = await params;
    const category = getCategoryBySlug(categorySlug);

    if (!category) {
        notFound();
    }

    const categoryProducts = getProductsByCategory(category.slug);

    return (
        <>
            {/* Category Header */}
            <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-16">
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            {category.name}
                        </h1>
                        <p className="text-lg text-slate-600">{category.description}</p>
                    </div>
                </Container>
            </section>

            {/* Products */}
            <section className="py-16 bg-white">
                <Container>
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">
                        {categoryProducts.length} Product
                        {categoryProducts.length !== 1 ? "s" : ""}
                    </h2>
                    <ProductGrid products={categoryProducts} />
                </Container>
            </section>
        </>
    );
}
