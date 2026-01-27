"use client"
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";

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
    const categories = [
        {
            name: "Hair Care",
            description: "Professional shampoos for scalp and hair cleansing",
            count: 2,
        },
        {
            name: "Skin Care",
            description: "Massage creams, scrub, and moisturizer for complete skin nourishment",
            count: 6,
        },
    ];

    const products = [
        {
            id: 1,
            category: "Hair Care",
            name: "Rice Water Shampoo",
            size: "300 ml",
            price: "₹245",
            description: "Gentle scalp cleansing with rice water + glycerin",
            features: ["For All Hair Type", "Scalp and Hair gentle cleanse", "Professional Shampoo"],
        },
        {
            id: 2,
            category: "Hair Care",
            name: "Aloe Vera Shampoo",
            size: "300 ml",
            price: "₹195",
            description: "Mild cleansing with aloe vera for scalp comfort",
            features: ["For All Hair Type", "Scalp and Hair gentle cleanse", "Professional Shampoo"],
        },
        {
            id: 3,
            category: "Skin Care",
            name: "Papaya Massage Cream",
            size: "250 gm",
            price: "₹245",
            description: "Helps remove dead skin cells and supports skin freshness",
            features: ["Face & Body", "Exfoliating", "Skin Freshness"],
        },
        {
            id: 4,
            category: "Skin Care",
            name: "Aloe Vera Massage Cream",
            size: "250 gm",
            price: "₹245",
            description: "Helps soothe skin and provide moisture during massage",
            features: ["Soothing", "Moisturizing", "All Skin Types"],
        },
        {
            id: 5,
            category: "Skin Care",
            name: "Vitamin-C Massage Cream",
            size: "250 gm",
            price: "₹245",
            description: "Helps brighten skin appearance and support skin vitality",
            features: ["Brightening", "Vitality Boost", "Radiant Skin"],
        },
        {
            id: 6,
            category: "Skin Care",
            name: "Cocoa Butter Massage Cream",
            size: "250 gm",
            price: "₹245",
            description: "Deep nourishment with rich texture for dry skin",
            features: ["Deep Moisturizing", "Rich Texture", "Dry to Normal Skin"],
        },
        {
            id: 7,
            category: "Skin Care",
            name: "Walnut Scrub",
            size: "250 gm",
            price: "₹245",
            description: "Exfoliates and refreshes skin texture",
            features: ["Face & Body", "Dead Skin Removal", "Improved Texture"],
        },
        {
            id: 8,
            category: "Skin Care",
            name: "Almond Oil & Vitamin-E Moisturiser",
            size: "200 gm",
            price: "₹145",
            description: "Daily hydration for soft, smooth skin",
            features: ["Non-Heavy Formula", "Daily Use", "Moisture Retention"],
        },
    ];

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
                        {categories.map((category, index) => (
                            <div
                                key={index}
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
                                className="group bg-white hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-700 overflow-hidden animate-fade-in opacity-0"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animationFillMode: 'forwards'
                                }}
                            >
                                {/* Product Image Placeholder */}
                                <div className="relative h-64 bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-purple-600/5"></div>
                                    <div className="relative z-10 text-center">
                                        <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                                            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                                        </div>
                                        <span className="text-xs uppercase tracking-widest text-purple-600 font-light">
                                            {product.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Product Details */}
                                <div className="p-8">
                                    <div className="mb-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-normal text-gray-900 leading-tight pr-2">
                                                {product.name}
                                            </h3>
                                            <span className="text-2xl font-light text-purple-600 whitespace-nowrap">
                                                {product.price}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-400 font-light">{product.size}</p>
                                    </div>

                                    <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
                                        {product.description}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {product.features.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-3 py-1 bg-purple-50 text-purple-700 rounded-full font-light"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <a
                                        href="/contact"
                                        className="inline-block text-sm text-purple-600 font-light tracking-wide hover:tracking-widest transition-all group-hover:text-purple-700"
                                    >
                                        Get Quote →
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