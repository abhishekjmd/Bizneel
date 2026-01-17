import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

/**
 * Card container component
 * Server Component compatible
 */
export function Card({ className, children, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-xl bg-white shadow-sm border border-slate-200 overflow-hidden transition-shadow hover:shadow-md",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
    return (
        <div className={cn("p-6 pb-4", className)} {...props}>
            {children}
        </div>
    );
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function CardContent({ className, children, ...props }: CardContentProps) {
    return (
        <div className={cn("p-6 pt-0", className)} {...props}>
            {children}
        </div>
    );
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
    return (
        <div className={cn("p-6 pt-4 border-t border-slate-100", className)} {...props}>
            {children}
        </div>
    );
}
