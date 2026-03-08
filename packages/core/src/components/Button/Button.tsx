import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'terminal'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonBaseProps = {
    size?: ButtonSize
    loading?: boolean
    disabled?: boolean
    className?: string
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

type ButtonProps = 
    | (ButtonBaseProps & { variant?: Exclude<ButtonVariant, 'danger'>; confirmLabel?: never})
    | (ButtonBaseProps & { variant: 'danger'; confirmLabel: string })
  
export const Button = ({
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    children,
    onClick,
    className = '',

}: ButtonProps) => {
    const base = [
        'mlt-btn',
        `mlt-btn--${variant}`,
        `mlt-btn--${size}`,
        loading ? 'mlt-btn--loading' : '',
        className,
    ].filter(Boolean).join(' ')

    return (
        <button className={base} disabled={disabled || loading} onClick={onClick}>
            {loading && <span className="mlt-btn__spinner" aria-hidden="true" />}
            <span className="mlt-btn__label">{children}</span>
        </button>
    )
}