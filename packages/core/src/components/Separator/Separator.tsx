import React from 'react'
import './Separator.css'

type SeparatorOrientation = 'horizontal' | 'vertical'
type SeparatorVariant = 'default' | 'accent' | 'danger' | 'muted'

type SeparatorProps = {
    orientation?: SeparatorOrientation
    variant?: SeparatorVariant
    label?: string
    className?: string
}

export const Separator = ({
    orientation = 'horizontal',
    variant = 'default',
    label,
    className,
}: SeparatorProps) => {
    return(
        <div className={[
            'mlt-separator',
            `mlt-separator--${orientation}`,
            `mlt-separator--${variant}`,
            label ? 'mlt-separator--labeled' : '',
            className
        ].filter(Boolean).join(' ')}>
            {label && (
                <>
                    <div className="mlt-separator__line" />
                    <span className="mlt-separator__label">{label}</span>
                    <div className="mlt-separator__line" />
                </>
            )}
        </div>
    )
}