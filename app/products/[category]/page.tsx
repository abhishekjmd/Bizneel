"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Container } from "@/components/layout/container";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { formatPrice, cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Main category structure mapping for Two-Level Navigation
const mainCategoryStructure = [
  {
    id: "hair-care",
    name: "Hair Care",
    description:
      "Professional salon-grade hair care solutions for cleansing and repair.",
    subcategories: [
      {
        id: "shampoo",
        name: "Shampoo",
        description: "Cleansing and nourishing shampoos for all hair types",
        image: "/riceWsterShampoo.jpeg",
      },
    ],
  },
  {
    id: "skin-care",
    name: "Skin Care",
    description:
      "Premium skin care essentials for nourishment, hydration, and exfoliation.",
    subcategories: [
      {
        id: "moisturizers",
        name: "Moisturizers",
        description: "Hydrating and protective moisturizers for soft skin",
        image: "/images/categories/moisturiser/moisturiserOne.jpeg",
      },
      {
        id: "scrubs",
        name: "Scrubs",
        description: "Exfoliating scrubs for radiant and fresh skin",
        image: "/wallnutScrub.png",
      },
      {
        id: "massage-creams",
        name: "Massage Creams",
        description: "Nourishing massage creams for salon professional use",
        image: "/vitaminCMessageCream.png",
      },
    ],
  },
];

/**
 * Category & Product Listing Page
 * Handles two views: 
 * 1. Subcategory Selection (for main categories like hair-care)
 * 2. Product Grid Viewing (for specific categories like shampoo)
 */
export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 1. Identify if we are in a "Main Category" (e.g., hair-care)
  const mainCategory = mainCategoryStructure.find((mc) => mc.id === categoryId);

  // 2. Identify if we are in a "Product Category" (e.g., shampoo)
  const isSubcategory = categories.some((c) => c.slug === categoryId);

  // Get products that match this categoryId
  const categoryProducts = products.filter((p) => p.category === categoryId);

  // Advanced 3D Mouse Movement effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });

      const cards = document.querySelectorAll(".card-3d");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / 20) * -1;
        const rotateY = (x - centerX) / 20;

        (card as HTMLElement).style.transform = `
          perspective(1500px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          scale3d(1.03, 1.03, 1.03)
          translateZ(20px)
        `;
      });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = `
        perspective(1500px) 
        rotateX(0deg) 
        rotateY(0deg) 
        scale3d(1, 1, 1)
        translateZ(0px)
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);
    const cards = document.querySelectorAll(".card-3d");
    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove as any);
      card.addEventListener("mouseleave", handleMouseLeave as any);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove as any);
        card.removeEventListener("mouseleave", handleMouseLeave as any);
      });
    };
  }, []);

  // Determine display title
  const activeCategoryData = categories.find(c => c.slug === categoryId);
  const pageTitle = mainCategory ? mainCategory.name : (activeCategoryData?.name || categoryId.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "));

  return (
    <>
      {/* 3D Immersive Hero Header */}
      <section className="relative py-32 md:py-48 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/15 rounded-full blur-3xl animate-blob"
            style={{
              transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
              transition: "transform 0.3s ease-out"
            }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-3xl animate-blob-slow animation-delay-2000"
            style={{
              transform: `translate(${mousePosition.x * -50}px, ${mousePosition.y * -50}px)`,
              transition: "transform 0.3s ease-out"
            }}
          ></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </div>

        <Container>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                <span className="text-sm tracking-[0.3em] uppercase text-purple-200 font-light">
                  {mainCategory ? "Expert Collection" : activeCategoryData ? "Professional Range" : "Products"}
                </span>
              </div>

              <h1 className="text-7xl md:text-9xl font-extralight tracking-tight text-white mb-8 leading-[0.9]">
                {pageTitle}
              </h1>

              <p className="text-2xl md:text-3xl text-purple-100 max-w-3xl mx-auto font-light leading-relaxed">
                {mainCategory ? mainCategory.description : activeCategoryData?.description || "Browse our complete collection of professional care products."}
              </p>
            </motion.div>
          </div>
        </Container>

        {/* Bottom Fade Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
      </section>

      {/* Logic-Based View Switcher */}
      <section className="py-32 bg-white relative">
        <Container>
          {/* VIEW 1: MAIN CATEGORY -> SHOW SUBCATEGORY CARDS */}
          {mainCategory && (
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {mainCategory.subcategories.map((sub, idx) => (
                  <div
                    key={sub.id}
                  >
                    <Link
                      href={`/products/${sub.id}`}
                      className="group relative flex flex-col aspect-[3/4] overflow-hidden rounded-[3rem] bg-gray-50 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/30"
                    >
                      <Image
                        src={sub.image}
                        alt={sub.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-115"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>

                      <div className="absolute inset-0 flex flex-col items-center justify-end p-12 text-white text-center">
                        <h3 className="text-4xl font-light tracking-wide mb-3 transform group-hover:scale-105 transition-transform duration-500">{sub.name}</h3>
                        <p className="text-base text-white/70 font-light mb-8 opacity-0 group-hover:opacity-100 transition-all duration-700">
                          {sub.description}
                        </p>
                        <div className="px-8 py-3 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full text-xs tracking-widest uppercase hover:bg-white hover:text-purple-950 transition-all duration-500">
                          Explore Collection
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIEW 2: PRODUCT LISTING -> SHOW PRODUCT GRID */}
          {!mainCategory && categoryProducts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {categoryProducts.map((product, idx) => (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-purple-100 h-full flex flex-col transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  {/* Product Image Area */}
                  <div className="relative aspect-square bg-gradient-to-br from-purple-50/50 to-white overflow-hidden p-10">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-8 transform transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>

                  {/* Product Details Area */}
                  <div className="p-8 flex flex-col flex-grow text-center">
                    <div className="mb-4">
                      {product.new && (
                        <span className="text-[10px] tracking-widest uppercase px-3 py-1 bg-purple-100 text-purple-600 rounded-full font-bold mb-2 inline-block">New arrival</span>
                      )}
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-500 line-clamp-2 min-h-[3rem]">
                        {product.name}
                      </h3>
                    </div>

                    <div className="mt-auto">
                      <p className="text-2xl font-light text-purple-600 mb-6">{formatPrice(product.price)}</p>
                      <Link
                        href={`/products/${product.category}/${product.slug}`}
                        className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-2xl text-sm font-semibold tracking-widest uppercase transition-all duration-500 shadow-lg shadow-purple-200 hover:shadow-purple-400/40 hover:-translate-y-1"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* EMPTY STATE */}
          {!mainCategory && categoryProducts.length === 0 && (
            <div className="text-center py-48">
              <div className="mb-8 opacity-20 transform scale-150">
                <Image src="/logo.png" alt="Bizneel" width={100} height={100} className="mx-auto grayscale" />
              </div>
              <h2 className="text-3xl font-light text-gray-300 mb-8">Our expert collection for "{categoryId}" is coming soon.</h2>
              <Link href="/products" className="inline-flex items-center gap-2 text-purple-600 font-medium hover:gap-4 transition-all duration-300">
                <span>View Full Catalog</span>
                <span>→</span>
              </Link>
            </div>
          )}
        </Container>
      </section>

      {/* Custom Keyframes & Utility Styles */}
      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }
        @keyframes blob-slow {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(-50px, 40px) scale(1.2); opacity: 0.8; }
        }
        .animate-blob { animation: blob 12s infinite alternate ease-in-out; }
        .animate-blob-slow { animation: blob-slow 20s infinite alternate ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        
        .card-3d { 
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); 
          transform-style: preserve-3d;
          will-change: transform;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </>
  );
}