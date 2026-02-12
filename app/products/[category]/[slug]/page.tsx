"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatPrice, cn } from "@/lib/utils";
import { getProductBySlug } from "@/data/products";
import { getIngredientById } from "@/data/ingredients";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Product detail page - Premium 3D Design (Client Component)
 * Displays complete product information with immersive effects
 */
export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants: any = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    })
  };

  // 3D Mouse Movement Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(".card-3d");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        (card as HTMLElement).style.transform = `
          perspective(1000px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          scale3d(1.02, 1.02, 1.02)
        `;
      });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      (card as HTMLElement).style.transform = `
        perspective(1000px) 
        rotateX(0deg) 
        rotateY(0deg) 
        scale3d(1, 1, 1)
      `;
    };

    const cards = document.querySelectorAll(".card-3d");
    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove as any);
      card.addEventListener("mouseleave", handleMouseLeave as any);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove as any);
        card.removeEventListener("mouseleave", handleMouseLeave as any);
      });
    };
  }, []);

  if (!product) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Product Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the product you're looking for.
        </p>
        <Link href="/products">
          <Button>Back to Products</Button>
        </Link>
      </div>
    );
  }

  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  const nextImage = () => {
    setDirection(1);
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Product Hero Section - 3D Immersive */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-purple-50 via-white to-purple-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {/* Product Images - Enhanced Carousel */}
            <div
              className="space-y-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              {/* Main Image Carousel */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white to-purple-50/30 rounded-3xl border border-purple-100/50 shadow-xl group">
                <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                  <motion.div
                    key={activeImageIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.7}
                    onDragEnd={(_, info) => {
                      const swipe = info.offset.x;
                      if (swipe < -50) {
                        nextImage();
                      } else if (swipe > 50) {
                        prevImage();
                      }
                    }}
                    className="absolute inset-0 cursor-grab active:cursor-grabbing touch-none"
                  >
                    <Image
                      src={images[activeImageIndex]}
                      alt={`${product.name} - ${activeImageIndex + 1}`}
                      fill
                      className="object-contain p-8 transform transition-transform duration-700 hover:scale-105 pointer-events-none"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 flex items-center justify-center text-purple-600 md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 z-20 shadow-lg"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 flex items-center justify-center text-purple-600 md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 z-20 shadow-lg"
                      aria-label="Next image"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>

              {/* Thumbnail Navigation */}
              {images.length > 1 && (
                <div className="flex gap-4 overflow-x-auto py-2 px-1 scrollbar-hide mt-8">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={cn(
                        "relative flex-shrink-0 w-24 h-24 overflow-hidden rounded-2xl border transition-all duration-500",
                        activeImageIndex === idx
                          ? "border-purple-600 shadow-lg ring-2 ring-purple-600/20 scale-105"
                          : "border-purple-100/50 opacity-60 hover:opacity-100 hover:border-purple-300"
                      )}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        fill
                        className="object-contain p-2"
                        sizes="96px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info - Enhanced */}
            <div
              className="space-y-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              {/* Category & Badges */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.new && (
                    <Badge
                      variant="info"
                      className="bg-purple-100 text-purple-700 border-purple-200"
                    >
                      ✨ New
                    </Badge>
                  )}
                  {product.badges &&
                    product.badges.map((badge) => (
                      <Badge
                        key={badge}
                        variant="success"
                        className="bg-green-100 text-green-700 border-green-200"
                      >
                        {badge}
                      </Badge>
                    ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 leading-tight">
                  {product.name}
                </h1>
                <p className="text-3xl font-light bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-3">
                  {formatPrice(product.price)}
                </p>
                <p className="text-base text-gray-500 font-light">
                  {product.size}
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                {product.description}
              </p>

              {/* Skin Types */}
              <div>
                <h3 className="font-light text-gray-900 mb-3 text-sm tracking-widest uppercase text-gray-600">
                  Suitable for:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.skinTypes &&
                    product.skinTypes.map((type) => (
                      <Badge
                        key={type}
                        variant="default"
                        className="bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 transition-colors duration-300"
                      >
                        {type}
                      </Badge>
                    ))}
                </div>
              </div>

              {/* CTA Button - Enhanced */}
              <a
                href={`https://wa.me/919104221284?text=${encodeURIComponent(`Hi, I would like to inquire about ${product.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm uppercase tracking-widest font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-500 w-full sm:w-auto rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 transform relative overflow-hidden group"
              >
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  // className="w-5 h-5 md:w-6 md:h-6 object-contain filter brightness-0 invert"
                  priority={false}
                />
                <span>Inquire on WhatsApp</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits - 3D Cards */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

        <Container>
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-block">
                <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-6 block animate-slide-down">
                  Product Highlights
                </span>
                <h2 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight mb-4">
                  Key Benefits
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 mx-auto rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 perspective-container">
              {product.benefits &&
                product.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="card-3d group animate-fade-in-up opacity-0"
                    style={{
                      animationDelay: `${idx * 0.15}s`,
                      animationFillMode: "forwards",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="relative bg-white/80 backdrop-blur-md rounded-[2.5rem] p-10 md:p-12 border border-purple-100/40 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-700 overflow-hidden h-full">
                      {/* Subtle Background Pattern */}
                      <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 bg-[radial-gradient(circle_at_2px_2px,rgba(147,51,234,0.5)_1px,transparent_0)] bg-[size:24px_24px]"></div>

                      <div
                        className="relative z-10"
                        style={{ transform: "translateZ(40px)" }}
                      >
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <span className="text-2xl font-light text-purple-600">
                            ✨
                          </span>
                        </div>
                        <p className="text-lg md:text-xl text-gray-800 font-light leading-relaxed group-hover:text-black transition-colors duration-500">
                          {benefit}
                        </p>
                      </div>

                      {/* Corner Decoration */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-100/30 rounded-full blur-2xl group-hover:bg-purple-200/50 transition-all duration-700"></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Container>
      </section>

      {/* How to Use - 3D Card */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-purple-50/30 via-white to-purple-50/20 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

        <Container>
          <div className="max-w-5xl mx-auto">
            <div
              className="card-3d group animate-fade-in-up opacity-0"
              style={{
                animationFillMode: "forwards",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative bg-gradient-to-br from-white to-purple-50 rounded-[3rem] p-12 md:p-20 border border-purple-100/60 shadow-2xl hover:shadow-purple-500/10 transition-all duration-700 overflow-hidden">
                <div
                  className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <div>
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-purple-600 text-white mb-8 shadow-xl shadow-purple-600/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-none stroke-current stroke-1.5" aria-hidden="true">
                        <path d="M12 2v20m10-10H2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
                      Application <br />
                      <span className="text-purple-600">Guide</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-purple-600 rounded-full"></div>
                  </div>

                  <div className="bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] border border-purple-100/50 shadow-inner">
                    <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed italic">
                      " {product.howToUse} "
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -right-12 w-48 h-48 bg-purple-100/30 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Enhanced Animations & Styles */}
      <style jsx>{`
        /* Fade In Up Animation */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px) translateZ(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateZ(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        /* Slide Down Animation */
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }

        /* Shine Effect */
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }

        /* Background Grid Pattern */
        .bg-grid-pattern {
          background-image:
            linear-gradient(
              to right,
              rgba(147, 51, 234, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(147, 51, 234, 0.1) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }

        /* 3D Perspective Container */
        .perspective-container {
          perspective: 2000px;
        }

        /* Card 3D Transitions */
        .card-3d {
          transition: transform 0.3s ease-out;
          transform-style: preserve-3d;
        }

      `}</style>
    </>
  );
}
