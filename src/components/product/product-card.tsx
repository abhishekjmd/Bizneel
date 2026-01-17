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
        <Link href={`/products/${product.category}/${product.slug}`}>
            <Card className="group cursor-pointer h-full flex flex-col transition-all hover:shadow-lg">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        {product.new && (
                            <Badge variant="info" className="shadow-sm">
                                New
                            </Badge>
                        )}
                        {product.badges.slice(0, 2).map((badge) => (
                            <Badge key={badge} variant="success" className="shadow-sm">
                                {badge}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2 flex-1">
                        {product.shortDescription}
                    </p>

                    <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-slate-900">
                            {formatPrice(product.price)}
                        </span>
                        <span className="text-xs text-slate-500">{product.size}</span>
                    </div>
                </div>
            </Card>
        </Link>
    );
}
