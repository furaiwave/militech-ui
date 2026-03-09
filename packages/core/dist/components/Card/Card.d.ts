import React from "react";
import './card.css';
type CardStatus = 'active' | 'offline' | 'alert' | 'classified';
type CardProps = {
    title: string;
    status?: CardStatus;
    subtitle?: string;
    children?: React.ReactNode;
    className?: string;
    scanline?: boolean;
};
export declare const Card: ({ title, status, subtitle, children, className, scanline, }: CardProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Card.d.ts.map