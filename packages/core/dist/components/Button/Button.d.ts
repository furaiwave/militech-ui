import React from 'react';
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'terminal';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonBaseProps = {
    size?: ButtonSize;
    loading?: boolean;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
type ButtonProps = (ButtonBaseProps & {
    variant?: Exclude<ButtonVariant, 'danger'>;
    confirmLabel?: never;
}) | (ButtonBaseProps & {
    variant: 'danger';
    confirmLabel: string;
});
export declare const Button: ({ variant, size, loading, disabled, children, onClick, className, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map