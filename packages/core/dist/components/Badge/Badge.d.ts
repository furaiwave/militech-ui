import React from "react";
import './Badge.css';
type BadgeVariant = 'active' | 'offline' | 'threat' | 'classified' | 'warning' | 'neutral';
type BadgeProps = {
    variant?: BadgeVariant;
    children: React.ReactNode;
    pulse?: boolean;
    className?: string;
};
export declare const Badge: ({ variant, children, pulse, className, }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Badge.d.ts.map