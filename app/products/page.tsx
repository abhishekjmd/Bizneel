"use client"
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

const metadata: Metadata = {
    title: "Products - BIZNEEL Professional Care",
    description:
        "Browse our complete collection of professional hair and skin care products. Salon-grade formulations for everyday use.",
};

/**
 * Products Page - BIZNEEL Professional Care
 * Minimal & Elegant Design with Brand Colors
 */
export default function ProductsPage() {
    // Group products by category for display
    const categoryStats = categories.map(cat => ({
        ...cat,
        count: products.filter(p => p.category === cat.id).length
    }));

    return (
        <>
            {/* Page Header - Elegant Purple */}
            <section className="relative py-24 md:py-32 bg-gradient-to-br from-purple-50 via-white to-purple-50 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-400/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl"></div>

                <Container>
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <span className="inline-block text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-6">
                            Professional Care Range
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight text-gray-900 mb-6 leading-tight">
                            Our Products
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                            Discover our complete collection of salon-grade hair and skin care products,
                            crafted for daily care and consistent performance.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Categories Overview */}
            <section className="py-20 md:py-28 bg-white border-y border-purple-100">
                <Container>
                    <div className="text-center mb-16">
                        <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light">
                            Shop by Category
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {categoryStats.map((category, index) => (
                            <div
                                key={category.id}
                                className="group bg-gradient-to-br from-purple-50/50 to-white p-10 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-700 animate-fade-in opacity-0"
                                style={{
                                    animationDelay: `${index * 0.2}s`,
                                    animationFillMode: 'forwards'
                                }}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-light text-gray-900 group-hover:text-purple-600 transition-colors">
                                        {category.name}
                                    </h3>
                                    <span className="text-sm px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-light">
                                        {category.count} {category.count === 1 ? 'Product' : 'Products'}
                                    </span>
                                </div>
                                <p className="text-gray-500 font-light leading-relaxed">
                                    {category.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* All Products Grid */}
            <section className="py-20 md:py-28 bg-purple-50/30">
                <Container>
                    <div className="text-center mb-16">
                        <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-4 block">
                            Complete Range
                        </span>
                        <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-3">
                            All Products
                        </h2>
                        <p className="text-gray-500 font-light">
                            {products.length} Professional Care Products
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {products.map((product, index) => (
                            <div
                                key={product.id}
                                className="group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animationFillMode: 'forwards'
                                }}
                            >
                                {/* Product Image */}
                                <div className="relative aspect-square bg-[#F9F9F9] overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="p-6 text-center">
                                    <h3 className="text-lg font-medium text-slate-900 mb-1">
                                        {product.name}
                                    </h3>

                                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-3">
                                        {product.size}
                                    </p>

                                    <div className="flex items-center justify-center gap-2 mb-4">
                                        <span className="text-base font-bold text-slate-900">
                                            {formatPrice(product.price)}
                                        </span>
                                    </div>

                                    {/* Action Button */}
                                    <a
                                        href={`https://wa.me/919104221284?text=${encodeURIComponent(`Hi, I would like to inquire about ${product.name}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                                    >
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.005.575 1.913.923 3.205.923 3.197 0 5.778-2.586 5.78-5.766.002-3.186-2.584-5.772-5.78-5.772zm2.062 8.326c-.199.317-.991 1.129-1.373 1.137-.306.007-1.164-.298-2.316-1.554-1.002-1.077-1.295-1.95-1.286-2.28.012-.486.634-1.155.845-1.155.087 0 .205.006.291.01.127.006.237-.024.417.408.204.475.467 1.158.508 1.25.04.093.076.216.035.318-.088.225-.213.313-.417.518-.095.094-.194.19-.084.382.111.192.483.788 1.047 1.288.729.646 1.348.847 1.54.942.191.096.305.076.417-.052.176-.2.457-.648.599-.861.125-.192.29-.148.471-.094.177.065 1.128.532 1.32.628.192.096.321.144.368.224.047.08.047.464-.197.777z" />
                                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S16.627 0 12 0zm0 22c-3.111 0-6.027-1.15-8.293-3.155l-2.007.514.536-1.956C.667 15.341-.004 12.696.004 12.016.028 5.399 5.405.023 12.022.023c6.611 0 11.977 5.366 11.977 11.977 0 6.611-5.366 11.977-11.977 11.977z" />
                                        </svg>
                                        Inquire
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 md:py-32 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>

                <Container>
                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <h2 className="text-4xl md:text-6xl font-extralight text-white mb-6 leading-tight">
                            Need Help Choosing?
                        </h2>
                        <p className="text-lg text-purple-100 mb-10 font-light leading-relaxed">
                            Get personalized product recommendations for your salon or personal care needs
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-10 py-5 bg-white text-purple-700 text-sm tracking-widest uppercase font-light hover:bg-purple-50 transition-all duration-500 shadow-2xl hover:shadow-white/20 hover:scale-[1.02]"
                        >
                            Request a Quote
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