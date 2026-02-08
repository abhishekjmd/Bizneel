"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextSection {
    title: string;
    subtitle: string;
}

interface ParallaxTextOverlaysProps {
    sections: TextSection[];
}

export function ParallaxTextOverlays({ sections }: ParallaxTextOverlaysProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Calculate fade ranges for each section
    const getOpacity = (index: number, total: number) => {
        const sectionDuration = 1 / total;
        const start = index * sectionDuration;
        const fadeIn = start;
        const fadeOut = start + sectionDuration;
        
        return useTransform(
            scrollYProgress,
            [fadeIn, fadeIn + 0.1, fadeOut - 0.1, fadeOut],
            [0, 1, 1, 0]
        );
    };

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-20">
            {sections.map((section, index) => {
                const opacity = getOpacity(index, sections.length);
                
                return (
                    <motion.div
                        key={index}
                        style={{ opacity }}
                        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                    >
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-gray-900 mb-6 leading-tight max-w-5xl">
                            {section.title}
                        </h2>
                        {section.subtitle && (
                            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl font-light leading-relaxed">
                                {section.subtitle}
                            </p>
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
}