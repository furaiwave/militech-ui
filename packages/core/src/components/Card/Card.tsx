import React from "react";
import './card.css';

type CardStatus = 'active' | 'offline' | 'alert' | 'classified'

type CardProps = {
    title: string
    status?: CardStatus
    subtitle?: string
    children?: React.ReactNode
    className?: string
    scanline?: boolean
}

export const Card = ({
    title,
    status,
    subtitle,
    children,
    className = '',
    scanline = false,
}: CardProps) => {
    return (
        <div className={[ 'mlt-card', scanline ? 'mlt-card--scnaline' : '', className].filter(Boolean).join('')} data-status={status}>
            <div className="mlt-card__header">
                <div className="mlt-card__header-left">
                    <span className="mlt-card__corner" aria-hidden="true" />
                    <div>
                        <div className="mlt-card__title">{title}</div>
                        {subtitle && <div className="mlt-card__subtitle">{subtitle}</div>}
                    </div>
                </div>
                { status && (
                    <span className={`mlt-catd__status mlt-card__status--${status}`}>
                        {status.toUpperCase()}
                    </span>
                )}
            </div>
            <div className="mlt-card__body">{children}</div>
            <div className="mlt-card__footer" aria-hidden="true">
                <span className="mlt-card__footer-line" />
            </div>
        </div>
    )
}