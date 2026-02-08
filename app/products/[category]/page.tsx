"use client";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useEffect, useState } from "react";

/**
 * Products Page - BIZNEEL Professional Care
 * Ultra-Enhanced 3D Design with Advanced Immersive Interactions
 */
export default function ProductsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Group products by category for display
  const categoryStats = categories.map((cat) => ({
    ...cat,
    count: products.filter((p) => p.category === cat.id).length,
  }));

  // Advanced 3D Mouse Movement Effect with Parallax
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
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

    window.addEventListener("mousemove", handleGlobalMouseMove);

    const cards = document.querySelectorAll(".card-3d");
    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove as any);
      card.addEventListener("mouseleave", handleMouseLeave as any);
    });

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove as any);
        card.removeEventListener("mouseleave", handleMouseLeave as any);
      });
    };
  }, []);

  return (
    <>
      {/* Page Header - Ultra 3D Elevated Design */}
      <section className="relative py-40 md:py-48 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 overflow-hidden">
        {/* Multi-Layer 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Layer 1 - Far back */}
          <div 
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/15 rounded-full blur-3xl animate-blob"
            style={{
              transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          ></div>
          
          {/* Layer 2 - Middle */}
          <div 
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"
            style={{
              transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          ></div>
          
          {/* Layer 3 - Close */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-600/10 rounded-full blur-3xl animate-blob animation-delay-4000"
            style={{
              transform: `translate(calc(-50% + ${mousePosition.x * 50}px), calc(-50% + ${mousePosition.y * 50}px))`,
              transition: 'transform 0.3s ease-out'
            }}
          ></div>

          {/* Animated Grid Overlay */}
          <div className="absolute inset-0 bg-grid-glow opacity-10"></div>
        </div>

        {/* Enhanced Floating Particles with Depth */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-float-particle-3d"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 15}s`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
            ></div>
          ))}
        </div>

        {/* Light Beams */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-purple-300/30 via-purple-300/10 to-transparent animate-pulse-slow"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-purple-300/30 via-purple-300/10 to-transparent animate-pulse-slow animation-delay-1000"></div>
        </div>

        <Container>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div
              className="animate-fade-in-up opacity-0"
              style={{ animationFillMode: "forwards" }}
            >
              {/* Floating Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 animate-float-gentle">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                <span className="text-sm tracking-[0.3em] uppercase text-purple-200 font-light">
                  Professional Care Range
                </span>
              </div>

              <h1 className="text-7xl md:text-9xl font-extralight tracking-tight text-white mb-8 leading-[0.9] transform hover:scale-105 transition-transform duration-500">
                Our{" "}
                <span className="relative inline-block">
                  <span className="font-light bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white animate-gradient-shift">
                    Products
                  </span>
                  <div className="absolute -inset-2 bg-purple-500/20 blur-2xl -z-10 animate-pulse-glow"></div>
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-purple-100 max-w-3xl mx-auto font-light leading-relaxed mb-8">
                Discover our complete collection of salon-grade hair and skin
                care products, crafted for daily care and consistent
                performance.
              </p>

              {/* Stats Bar */}
              <div className="flex items-center justify-center gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-light text-white mb-1">{products.length}+</div>
                  <div className="text-sm text-purple-300 uppercase tracking-wide">Products</div>
                </div>
                <div className="w-px h-12 bg-purple-400/30"></div>
                <div className="text-center">
                  <div className="text-4xl font-light text-white mb-1">{categories.length}</div>
                  <div className="text-sm text-purple-300 uppercase tracking-wide">Categories</div>
                </div>
                <div className="w-px h-12 bg-purple-400/30"></div>
                <div className="text-center">
                  <div className="text-4xl font-light text-white mb-1">100%</div>
                  <div className="text-sm text-purple-300 uppercase tracking-wide">Quality</div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Enhanced Bottom Wave with Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
          <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z" fill="white" opacity="0.8"></path>
            <path d="M0,20 C300,100 600,100 900,60 C1050,40 1150,20 1200,20 L1200,120 L0,120 Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Categories Overview - Ultra 3D Cards */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-white via-purple-50/20 to-white relative overflow-hidden">
        {/* Layered Background Elements */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl animate-blob-slow"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-3xl animate-blob-slow animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-300/20 rounded-full blur-3xl animate-pulse-slow"></div>

        <Container>
          <div className="text-center mb-24 relative z-10">
            <div className="inline-block">
              <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-light mb-6 block animate-slide-down">
                Shop by Category
              </span>
              <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-4">
                Explore Our <span className="text-purple-600">Range</span>
              </h2>
              <div className="h-1 w-40 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 mx-auto rounded-full animate-shimmer"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto perspective-container">
            {categoryStats.map((category, index) => (
              <div
                key={category.id}
                className="card-3d group animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: "forwards",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative bg-white/95 backdrop-blur-xl rounded-[2rem] p-12 border border-purple-100/50 shadow-2xl hover:shadow-purple-500/30 transition-all duration-700 overflow-hidden h-full group-hover:-translate-y-2">
                  {/* Multi-Layer Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-purple-50/30 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-purple-100/30 via-transparent to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Animated Corner Accents */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div
                    className="relative z-10"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-3xl md:text-4xl font-light text-gray-900 group-hover:text-purple-600 transition-colors duration-500 transform group-hover:scale-105">
                        {category.name}
                      </h3>
                      <div className="relative">
                        <span className="flex items-center gap-2 text-sm px-5 py-2.5 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full font-medium shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                          <span className="font-semibold">{category.count}</span>
                          <span>{category.count === 1 ? "Product" : "Products"}</span>
                        </span>
                        <div className="absolute inset-0 bg-purple-400 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    <p className="text-gray-600 font-light leading-relaxed text-lg">
                      {category.description}
                    </p>
                  </div>

                  {/* Multi-Direction Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-[2rem]">
                    <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-shine"></div>
                  </div>

                  {/* 3D Multi-Layer Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-[2rem] opacity-0 group-hover:opacity-15 blur-2xl transition-all duration-700 -z-10"></div>
                  <div className="absolute -inset-2 bg-gradient-to-tl from-purple-300 via-purple-400 to-purple-500 rounded-[2rem] opacity-0 group-hover:opacity-10 blur-3xl transition-all duration-700 -z-20"></div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* All Products Grid - Ultra Enhanced 3D */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern-animated opacity-[0.03]"></div>
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-radial-gradient-center opacity-20"></div>

        <Container>
          <div className="text-center mb-28 relative z-10">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-100/80 backdrop-blur-sm border border-purple-200/50 rounded-full mb-6">
                <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                <span className="text-sm tracking-[0.35em] uppercase text-purple-600 font-medium">
                  Complete Range
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-6">
                All <span className="font-medium text-purple-600">Products</span>
              </h2>
              <div className="h-1.5 w-48 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 mx-auto rounded-full mb-6 animate-shimmer"></div>
              <p className="text-gray-600 font-light text-xl">
                {products.length} Professional Care Products
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-[1600px] mx-auto">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="card-3d group animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${index * 0.04}s`,
                  animationFillMode: "forwards",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative bg-white/95 backdrop-blur-sm rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-700 border border-purple-100/50 h-full transform-gpu group-hover:-translate-y-3">
                  
                  {/* Product Image with Ultra 3D Effect */}
                  <div className="relative w-full h-72 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 overflow-hidden rounded-t-[2rem]">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-600/5 to-purple-600/10 group-hover:from-purple-600/10 group-hover:to-purple-600/20 transition-all duration-700"></div>
                    
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-10 group-hover:scale-125 group-hover:rotate-3 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      style={{ transform: "translateZ(50px)" }}
                    />

                    {/* Layered Spotlight Effect */}
                    <div className="absolute inset-0 bg-radial-gradient-spotlight opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    {/* Enhanced Floating particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float-particle-3d"></div>
                      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-purple-300 rounded-full animate-float-particle-3d animation-delay-500"></div>
                      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-500 rounded-full animate-float-particle-3d animation-delay-1000"></div>
                      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-200 rounded-full animate-float-particle-3d animation-delay-1500"></div>
                    </div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none overflow-hidden">
                      <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:animate-shimmer-sweep"></div>
                    </div>
                  </div>

                  {/* Product Details with Enhanced Design */}
                  <div className="p-7 text-center relative z-10 bg-gradient-to-b from-white/90 to-white/95 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-purple-600 transition-colors duration-500 leading-tight">
                      {product.name}
                    </h3>

                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-5 font-medium">
                      {product.size}
                    </p>

                    <div className="flex items-center justify-center gap-3 mb-7">
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent group-hover:scale-110 inline-block transition-transform duration-500">
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="flex gap-3">
                      <Link
                        href={`/products/${product.category}/${product.slug}`}
                        className="flex-1 relative text-center px-5 py-3.5 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white text-sm font-semibold rounded-2xl transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-purple-500/60 hover:scale-105 transform overflow-hidden group/btn"
                      >
                        <span className="relative z-10">View Details</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                      </Link>
                      
                      <a
                        href={`https://wa.me/919104221284?text=${encodeURIComponent(`Hi, I would like to inquire about ${product.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative px-5 py-3.5 border-2 border-purple-300 text-purple-700 text-sm font-semibold rounded-2xl hover:bg-purple-50 hover:border-purple-500 transition-all duration-500 hover:scale-105 transform flex items-center justify-center group/whatsapp overflow-hidden"
                        title="Inquire on WhatsApp"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-5 h-5 fill-current relative z-10 group-hover/whatsapp:scale-110 transition-transform duration-300"
                          aria-hidden="true"
                        >
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.005.575 1.913.923 3.205.923 3.197 0 5.778-2.586 5.78-5.766.002-3.186-2.584-5.772-5.78-5.772zm2.062 8.326c-.199.317-.991 1.129-1.373 1.137-.306.007-1.164-.298-2.316-1.554-1.002-1.077-1.295-1.95-1.286-2.28.012-.486.634-1.155.845-1.155.087 0 .205.006.291.01.127.006.237-.024.417.408.204.475.467 1.158.508 1.25.04.093.076.216.035.318-.088.225-.213.313-.417.518-.095.094-.194.19-.084.382.111.192.483.788 1.047 1.288.729.646 1.348.847 1.54.942.191.096.305.076.417-.052.176-.2.457-.648.599-.861.125-.192.29-.148.471-.094.177.065 1.128.532 1.32.628.192.096.321.144.368.224.047.08.047.464-.197.777z" />
                        </svg>
                        <div className="absolute inset-0 bg-purple-100/50 translate-x-full group-hover/whatsapp:translate-x-0 transition-transform duration-500"></div>
                      </a>
                    </div>
                  </div>

                  {/* Multi-Layer 3D Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-[2rem] opacity-0 group-hover:opacity-25 blur-2xl transition-all duration-700 -z-10"></div>
                  <div className="absolute -inset-2 bg-gradient-to-tl from-purple-300 via-purple-400 to-purple-500 rounded-[2rem] opacity-0 group-hover:opacity-15 blur-3xl transition-all duration-700 -z-20"></div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section - Ultra 3D Immersive */}
      <section className="relative py-48 md:py-56 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 overflow-hidden">
        {/* Multi-Layer 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-400/25 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/15 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Radial Glow */}
        <div className="absolute inset-0 bg-radial-gradient-center opacity-30"></div>

        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-float-particle-3d"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 15}s`,
                opacity: Math.random() * 0.4 + 0.1,
              }}
            ></div>
          ))}
        </div>

        <Container>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div
              className="animate-fade-in-up opacity-0"
              style={{ animationFillMode: "forwards" }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 animate-float-gentle">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                <span className="text-sm tracking-[0.3em] uppercase text-purple-200 font-light">
                  Get Started Today
                </span>
              </div>

              <h2 className="text-6xl md:text-8xl font-extralight text-white mb-10 leading-tight transform hover:scale-105 transition-transform duration-500">
                Need Help{" "}
                <span className="relative inline-block">
                  <span className="font-light bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white animate-gradient-shift">
                    Choosing?
                  </span>
                  <div className="absolute -inset-4 bg-purple-500/20 blur-2xl -z-10 animate-pulse-glow"></div>
                </span>
              </h2>
              
              <p className="text-2xl md:text-3xl text-purple-100 mb-14 font-light leading-relaxed max-w-3xl mx-auto">
                Get personalized product recommendations for your salon or
                personal care needs
              </p>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-16 py-7 bg-white text-purple-900 text-base tracking-widest uppercase font-bold hover:bg-purple-50 transition-all duration-500 rounded-full shadow-2xl hover:shadow-white/40 hover:scale-110 transform relative overflow-hidden group"
              >
                <span className="relative z-10">Request a Quote</span>
                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/50 to-transparent translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
              </Link>
            </div>
          </div>
        </Container>

        {/* Enhanced Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-40">
          <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z" fill="white" opacity="0.8"></path>
            <path d="M0,20 C300,100 600,100 900,60 C1050,40 1150,20 1200,20 L1200,120 L0,120 Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Ultra Enhanced Animations & Styles */}
      <style jsx global>{`
        /* Prevent horizontal scrollbar */
        body {
          overflow-x: hidden;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* 3D Perspective Container */
        .perspective-container {
          perspective: 2500px;
        }

        /* Fade In Up Animation */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(60px) translateZ(-80px) rotateX(15deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateZ(0) rotateX(0deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Slide Down Animation */
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Blob Animation */
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(30px, -30px) scale(1.15);
          }
          50% {
            transform: translate(-30px, 30px) scale(0.85);
          }
          75% {
            transform: translate(30px, 30px) scale(1.08);
          }
        }

        .animate-blob {
          animation: blob 20s ease-in-out infinite;
        }

        .animate-blob-slow {
          animation: blob 30s ease-in-out infinite;
        }

        /* 3D Particle Float */
        @keyframes float-particle-3d {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translate3d(var(--float-x, 40px), var(--float-y, -60px), 30px) scale(1.8);
            opacity: 0.9;
          }
          90% {
            opacity: 0.2;
          }
        }

        .animate-float-particle-3d {
          animation: float-particle-3d 10s ease-in-out infinite;
          --float-x: 40px;
          --float-y: -60px;
        }

        /* Gentle Float */
        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }

        /* Shine Effect */
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        .animate-shine {
          animation: shine 2s ease-in-out;
        }

        /* Shimmer Effect */
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-shimmer {
          background: linear-gradient(90deg, rgba(147, 51, 234, 0.4), rgba(167, 139, 250, 0.8), rgba(147, 51, 234, 0.4));
          background-size: 1000px 100%;
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer-sweep {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        .animate-shimmer-sweep {
          animation: shimmer-sweep 1.5s ease-out;
        }

        /* Gradient Shift */
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-shift {
          background-size: 200% auto;
          animation: gradient-shift 5s ease infinite;
        }

        /* Pulse Glow */
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        /* Pulse Slow */
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        /* Background Patterns */
        .bg-grid-pattern-animated {
          background-image: 
            linear-gradient(to right, rgba(147, 51, 234, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(147, 51, 234, 0.15) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }

        @keyframes grid-move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }

        .bg-grid-glow {
          background-image: 
            radial-gradient(circle at center, rgba(147, 51, 234, 0.3) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        /* Radial Gradients */
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }

        .bg-radial-gradient-center {
          background: radial-gradient(circle at center, rgba(147, 51, 234, 0.2) 0%, transparent 70%);
        }

        .bg-radial-gradient-spotlight {
          background: radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.6) 0%, transparent 60%);
        }

        /* Animation Delays */
        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Card 3D Transitions */
        .card-3d {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          transform-style: preserve-3d;
        }

        /* GPU Acceleration */
        .transform-gpu {
          transform: translateZ(0);
          will-change: transform;
        }

        /* Smooth transforms for better performance */
        * {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </>
  );
}