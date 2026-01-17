import { Container } from "@/components/layout/container";

export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface FeaturesProps {
    title?: string;
    features: Feature[];
}

/**
 * Features section for highlighting brand benefits
 * Server Component
 */
export function Features({ title, features }: FeaturesProps) {
    return (
        <section className="py-16 md:py-24 bg-white">
            <Container>
                {title && (
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
                        {title}
                    </h2>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="text-center group"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 text-3xl mb-4 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-slate-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
