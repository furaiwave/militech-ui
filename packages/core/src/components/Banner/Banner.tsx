import React, { useState } from "react";
import './Banner.css'

type BannerProps = {
    eyebrow?: string
    title: string
    subtitle?: string
    description?: string
    primaryAction?: {
        label: string
        onClick?: () => void
    }

    secondaryAction?: {
        label: string
        onClick?: () => void
    }

    backgroundImage?: string
    overlay?: boolean
    className?: string
}

export const Banner = ({
    eyebrow,
    title,
    subtitle,
    description,
    primaryAction,
    secondaryAction,
    backgroundImage,
    overlay = true,
    className = '',
}: BannerProps) => {
    return (
        <section
            className={['mlt-banner', className].filter(Boolean).join(' ')}
            style={backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : undefined}
        >
            {overlay && <div className="mlt-banner__overlay" aria-hidden="true" /> }

            <div className="mlt-banner__corner mlt--banner__corner--tl" aria-hidden="true" />
            <div className="mlt-banner__corner mlt-corner__corner--br" aria-hidden="true" />

            <div className="mlt-banner__scanline" aria-hidden="true" />

            <div className="mlt-banner__content">
                {eyebrow && (
                    <div className="mlt-banner__eyebrow"> 
                        <span className="mlt-banner__eyebrow-line" />
                        {eyebrow}
                        <span className="mlt-banner__eyebrow-line" />
                    </div>
                )}

                <h1 className="mlt-banner__title">{title}</h1>

                {subtitle && (
                    <div className="mlt-banner__subtitle">{subtitle}</div>
                )}

                {description && (
                    <p className="mlt-banner__description">{description}</p>
                )}

                {(primaryAction || secondaryAction) && (
                    <div className="mlt-banner__actions">
                        {primaryAction && (
                            <button className="mlt-banner__btn mlt-banner__btn--primary" onClick={primaryAction.onClick}>
                                {primaryAction.label}
                            </button>
                        )}
                        {secondaryAction && (
                            <button className="mlt-banner__btn mlt-banner__btn--secondary" onClick={secondaryAction.onClick}>
                                {secondaryAction.label}
                            </button>
                        )}
                    </div>
                )}
            </div>

            <div className="mlt-banner__footer" aria-hidden="true">
                <span className="mlt-banner__footer-text">TAU CETI IV // SURFACE DATA</span>
                <span className="mlt-banner__footer-coords">37.2°N 142.8°E</span>
            </div>
        </section> 
    )
}