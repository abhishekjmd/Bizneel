import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import type { Category } from "@/data/categories";

export interface CategoryCardProps {
    category: Category;
}

/**
 * Category card for category navigation
 * Server Component
 */
export function CategoryCard({ category }: CategoryCardProps) {
    return (
        <Link href={`/products/${category.slug}`}>
            <Card className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Category Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-200 transition-colors">
                            {category.name}
                        </h3>
                        <p className="text-sm text-white/90">
                            {category.description}
                        </p>
                    </div>
                </div>
            </Card>
        </Link>
    );
}
