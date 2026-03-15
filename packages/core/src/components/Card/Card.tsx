import React from "react";
import './card.css';

type CardStatus = 'active' | 'offline' | 'alert' | 'classified'

type ProgressItem = {
    label: string
    value: number
    max: number
}

type CardProps = {
    title: string
    status?: CardStatus
    subtitle?: string
    children?: React.ReactNode
    className?: string
    scanline?: boolean
    progress?: ProgressItem[]
    footerBtn?: string
    onFooterBtn?: () => void
    meta?: string
}


export const Card = ({
    title,
    status,
    subtitle,
    children,
    className = '',
    scanline = false,
    progress,
    footerBtn,
    onFooterBtn,
    meta,
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
            
            {children && <div className="mlt-card__body">{children}</div>}

            {progress?.map((p, i) => (
                <div className="mlt-card__progress-wrap" key={i}>
                    <div className="mlt-card__progress-label">{p.label} {p.value}/{p.max}</div>
                    <div className="mlt-card__progress-bar">
                        <div 
                            className="mlt-card__progress-fill"
                            style={{ width: `${(p.value / p.max) * 100}%`}}
                        />
                    </div>
                </div>
            ))}
            
            {meta && <div className="mlt-card__meta">{meta}</div>}

            <div className="mlt-card__footer">
                {footerBtn && (
                    <button className="mlt-card__footer-btn" onClick={onFooterBtn}>
                        {footerBtn}
                        <span>ⓘ</span>
                    </button>
                )}
            </div>
            
        </div>
    )
}