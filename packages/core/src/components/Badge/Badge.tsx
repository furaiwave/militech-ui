import React from "react"
import './Badge.css'

type BadgeVariant = 'active' | 'offline' | 'threat' | 'classified' | 'warning' | 'neutral'

type BadgeProps = {
    variant?: BadgeVariant
    children: React.ReactNode
    pulse?: boolean
    className?: string
}

export const Badge = ({
    variant = 'neutral',
    children,
    pulse = false,
    className = '',
}: BadgeProps) => {
    return (
        <span className={['mlt-badge', `mlt-badge--${variant}`, className].filter(Boolean).join(' ')}>
            {pulse && <span className="mlt-badge__pulse" aria-hidde="true" />}
            {children}
        </span>
    )
}