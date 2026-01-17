import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ProductGrid } from "@/components/product/product-grid";
import { CategoryCard } from "@/components/product/category-card";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
    title: "Products",
    description:
        "Browse our complete collection of premium natural cosmetics. Vegan, cruelty-free skincare for all skin types.",
};

/**
 * Products listing page - Static Site Generation
 * Displays all products and category filters
 */
export default function ProductsPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-16">
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Our Products
                        </h1>
                        <p className="text-lg text-slate-600">
                            Discover our complete collection of premium skincare products,
                            crafted with the finest natural ingredients for radiant, healthy skin.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Categories */}
            <section className="py-12 bg-white border-b border-slate-200">
                <Container>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
                        Shop by Category
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category) => (
                            <CategoryCard key={category.id} category={category} />
                        ))}
                    </div>
                </Container>
            </section>

            {/* All Products */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">
                        All Products ({products.length})
                    </h2>
                    <ProductGrid products={products} />
                </Container>
            </section>
        </>
    );
}
