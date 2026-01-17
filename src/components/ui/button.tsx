import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

/**
 * Reusable button component with multiple variants
 * Server Component compatible
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const baseStyles =
            "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

        const variants = {
            primary:
                "bg-purple-500 text-white hover:bg-purple-600 focus:ring-purple-500 shadow-md hover:shadow-lg transition-all",
            secondary:
                "bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-500",
            outline:
                "border-2 border-purple-500 text-purple-500 hover:bg-purple-50 focus:ring-purple-500",
            ghost:
                "text-slate-700 hover:bg-slate-100 focus:ring-slate-500",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };
