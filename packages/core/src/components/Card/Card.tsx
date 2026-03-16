import React from "react";
import './Card.css';

type CardStatus = 'active' | 'offline' | 'alert' | 'classified'

type ObjectDetail = {
    title: string
    description: string[]
    items?: { label: string }[]
}

type ProgressItem = {
    label: string
    value: number
    max: number
    detail?: ObjectDetail
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
    const[hoveredProgress, setHoveredProgress] = React.useState<number | null>(null)
    
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
                <div className="mlt-card__progress-wrap" 
                    key={i}
                    onMouseEnter={() => p.detail ? setHoveredProgress(i) : null}
                    onMouseLeave={() => setHoveredProgress(null)}
                >
                    <div className="mlt-card__progress-label">{p.label}</div>
                    <div className="mlt-card__track">
                        <div className="mlt-card__progress-bar">
                            <div 
                                className="mlt-card__progress-fill"
                                style={{ width: `${(p.value / p.max) * 100}%`}}
                            />
                        </div>
                    <span className="mlt-card__progress-count">{p.value}/{p.max}</span>
                    </div>
                    {p.detail && hoveredProgress === i && (
                        <div className="mlt-card__objective">
                            <div className="mlt-card__object-title">{p.detail.title}</div>
                            {p.detail.description.map((line, j) => (
                                <p key={j} className="mlt-card__objective-desc">{line}</p>
                            ))}
                            {p.detail.items && (
                                <ul className="mlt-card__objective-items">
                                    {p.detail.items.map((item, j) => (
                                        <li key={j} className="mlt-card__objective-item">
                                            <span className="mlt-card__objective-icon">#</span>
                                            {item.label}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
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