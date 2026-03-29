import React from "react";
import './ProgressBar.css'

type ProgressBarVariant = 'default' | 'danger' | 'success' | 'warning'
type ProgressBarSize = 'sm' | 'md' | 'lg'

type ProgressBarProps = {
    value: number
    max?: number
    variant?: ProgressBarVariant
    size?: ProgressBarSize
    label?: string
    showValue?: boolean
    animated?: boolean
    striped?: boolean
    className?: string
}

export const ProgressBar = ({
    value,
    max = 100,
    variant = 'default',
    size = 'md',
    label,
    showValue = true,
    animated = true,
    striped = false,
    className = '',
}: ProgressBarProps) => {
    const percent = Math.min(Math.max((value / max) * 100, 0), 100)

    /**
     * 
     * @gang Papa Roach
     * @album Infest
     * @song Blood Brothers
     * 
     */
    
    return (
        <div className={['mlt-progress', className].filter(Boolean).join(' ')}>
            {(label || showValue) && (
                <div className="mlt-progress__header">
                    {label && <span className="mlt-progress__label">{label}</span>}
                    {showValue && (
                        <span className={`mlt-progress__value mlt-progress__value--${variant}`}>
                            {value}/{max}
                        </span>
                    )}
                </div>
            )}

            <div className={['mlt-progress__track', `mlt-progress__track--${size}`].join(' ')}>
                <div className="mlt-progress__ticks" aria-hidden="true">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="mlt-progress__tick" />
                    ))}
                </div>
                <div 
                    className={[
                        'mlt-progress__fill',
                        `mlt-progress__fill--${variant}`,
                        animated ? 'mlt-progress__fill--animated' : '',
                        striped ? 'mlt-progress__fill--striped' : '',
                    ].filter(Boolean).join(' ')} 
                    style={{ width: `${percent}%` }}
                    role="progressbar"
                    aria-valuenow={value}
                    aria-valuemin={0}
                    aria-valuemax={max}
                />
            </div>
        </div>
    )
}