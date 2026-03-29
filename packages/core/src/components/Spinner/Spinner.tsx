import React from "react";
import './Spinner.css'

type SpinnerVariant = 'default' | 'danger' | 'success' | 'warning'
type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl'
type SpinnerType = 'ring' | 'radar' | 'bars' | 'dots'

type SpinnerProps = {
    variant?: SpinnerVariant
    size?: SpinnerSize
    type?: SpinnerType
    label?: string
    className?: string
}

export const Spinner = ({
    variant = 'default',
    size = 'md',
    type = 'ring',
    label,
    className = '',
}: SpinnerProps) => {
    return (

        /**
         * 
         * @band Electric Six
         * @album Switzerland
         * @song I Buy The Drugs
         * 
         */

        <div className={['mlt-spinner-wrap', className].filter(Boolean).join(' ')}>
            <div className={[
                'mlt-spinner',
                `mlt-spinner--${variant}`,
                `mlt-spinner--${size}`,
                `mlt-spinner--${type}`,
            ].join(' ')}>
                {type === 'ring' && (
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeOpacity="0.1" strokeWidth="2" />

                        <circle 
                            cx="20" cy="20" r="16"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="square"
                            strokeDasharray="60 40"
                            className="mlt-spinner__arc"
                        />

                        <line x1="20" y1="2" x2="20" y2="6" stroke="currentColor" stopOpacity="0.3" strokeWidth="1" />
                        <line x1="38" y1="20" x2="24" y2="20" stroke="currentColor" stopOpacity="0.3" strokeWidth="1" />
                        <line x1="20" y1="38" x2="20" y2="34" stroke="currentColor" stopOpacity="0.3" strokeWidth="1" />
                        <line x1="2" y1="20" x2="6" y2="20" stroke="currentColor" stopOpacity="0.3" strokeWidth="1" />
                    </svg>
                )}

                {type === 'radar' && (
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" fill="none" />
                        <circle cx="20" cy="20" r="10" stroke="currentColor" strokeOpacity="0.1"  strokeWidth="1" fill="none" />
                        <circle cx="20" cy="20" r="4"  stroke="currentColor" strokeOpacity="0.2"  strokeWidth="1" fill="none" />
                        <line x1="20" y1="16" x2="20" y2="24" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" />
                        <line x1="16" y1="20" x2="24" y2="20" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" />
                        <line x1="20" y1="20" x2="20" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className="mlt-spinner__beam" />
                        <circle cx="20" cy="4" r="1.5" fill="currentColor" className="mlt-spinner__beam" />
                        <circle cx="20" cy="20" r="1.5" fill="currentColor" opacity="0.5" />
                    </svg>
                )}

                {type === 'bars' && (
                    <div className="mlt-spinner__bars">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="mlt-spinner__bar" style={{ animationDelay: `${i * 0.1}s` }} />
                        ))}
                    </div>
                )}

                {type === 'dots' && (
                    <div className="mlt-spinner__dots">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="mlt-spinner__dot" style={{ animationDelay: `${i * 0.15}s` }} />
                        ))}
                    </div>
                )}
            </div>

            {label && <span className="mlt-spinner__label">{label}</span>}
        </div>
    )
}