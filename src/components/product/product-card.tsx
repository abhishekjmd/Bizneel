'use client'
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/data/products";

export interface ProductCardProps {
    product: Product;
}

/**
 * Product card component for grid displays
 * Server Component - displays product information with optimized images
 */
export function ProductCard({ product }: ProductCardProps) {
    return (
        <Card className="group bg-white border-0 shadow-none overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            {/* Product Image - Clickable to Details */}
            <Link
                href={`/products/${product.category}/${product.slug}`}
                className="block relative aspect-[3/4] bg-gradient-to-br from-neutral-50 to-neutral-100/50 overflow-hidden"
            >
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:p-6"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Minimal Badges Overlay */}
                {(product.new || product.badges.length > 0) && (
                    <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                        {product.new && (
                            <Badge
                                variant="default"
                                className="bg-black/90 text-white text-[9px] font-light uppercase tracking-[0.15em] rounded-sm px-2.5 py-1 hover:bg-black backdrop-blur-sm border-0"
                            >
                                New Arrival
                            </Badge>
                        )}
                        {product.badges.slice(0, 1).map((badge) => (
                            <Badge
                                key={badge}
                                variant="outline"
                                className="bg-white/95 text-neutral-700 text-[9px] font-light uppercase tracking-[0.15em] rounded-sm px-2.5 py-1 backdrop-blur-md border-neutral-200/50"
                            >
                                {badge}
                            </Badge>
                        ))}
                    </div>
                )}

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-500" />
            </Link>

            {/* Product Info - More Spacious */}
            <div className="pt-6 pb-7 px-4">
                {/* Category/Size - Subtle */}
                <p className="text-[10px] font-light text-neutral-400 uppercase tracking-[0.2em] mb-2.5">
                    {product.size}
                </p>

                {/* Product Name */}
                <Link
                    href={`/products/${product.category}/${product.slug}`}
                    className="block group/title mb-4"
                >
                    <h3 className="text-[15px] font-normal text-neutral-900 leading-snug tracking-wide group-hover/title:text-neutral-600 transition-colors duration-300">
                        {product.name}
                    </h3>
                </Link>

                {/* Price - Prominent but Refined */}
                <div className="mb-5">
                    <span className="text-sm font-light text-neutral-800 tracking-wide">
                        {formatPrice(product.price)}
                    </span>
                </div>

                {/* CTA - Ultra Minimal */}

                href={`https://wa.me/919104221284?text=${encodeURIComponent(`Hi, I would like to inquire about ${product.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-light uppercase tracking-[0.2em] text-neutral-900 transition-all duration-300 group/cta relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-neutral-900 after:transition-all after:duration-300 hover:after:w-full pb-0.5"
                >
                <span>Inquire</span>
                <svg
                    viewBox="0 0 12 12"
                    className="w-2.5 h-2.5 fill-current transition-transform duration-300 group-hover/cta:translate-x-0.5"
                    aria-hidden="true"
                >
                    <path d="M6.5 1.5L11 6L6.5 10.5M10.5 6H1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
            </a>
        </div>
        </Card >
    );
}