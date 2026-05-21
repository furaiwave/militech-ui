import React, { useState } from "react";
import './Checkbox.css'

type CheckboxVariant = 'default' | 'danger' | 'success'

type CheckboxProps = {
    checked?: boolean
    defaultChecked?: boolean
    disabled?: boolean
    indeterminate?: boolean
    variant?: CheckboxVariant
    label?: string
    hint?: string
    onChange?: (checked: boolean) => void
    className?: string
}

export const Checkbox = ({
    checked,
    defaultChecked = false,
    disabled = false,
    indeterminate = false,
    variant = 'default',
    label,
    hint,
    onChange,
    className = '',
}: CheckboxProps) => {
    const[internal, setInternal] = useState(defaultChecked)
    const isControlled = checked !== undefined
    const isChecked = isControlled ? checked : internal

    const handleClick = () => {
        if (disabled) return
        const next = !isChecked
        if (!isControlled) setInternal(next)
        onChange?.(next)
    }

    return (
        <div className={[
            'mlt-checkbox-wrap',
            disabled ? 'mlt-checkbox-wrap--disabled' : '',
            className,
        ].filter(Boolean).join(' ')}
        onClick={handleClick}
        >
            <div className={[
                'mlt-checkbox',
                `mlt-checkbox--${variant}`,
                isChecked ? 'mlt-checkbox--checked' : '',
                indeterminate ? 'mlt-checkbox--indeterminate' : '',
            ].filter(Boolean).join(' ')}
                role="checkbox"
                aria-checked={indeterminate ? 'mixed' : isChecked}
                aria-disabled={disabled}
                tabIndex={disabled ? -1 : 0}
                onKeyDown={e => e.key === ' ' && handleClick()}
            >
                {isChecked && !indeterminate && (
                    <svg viewBox="0 0 12 12" fill="none" className="mlt-checkbox__check">
                        <polyline 
                            points="1.5,6 4.5,9, 10.5,3"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="square"
                            strokeLinejoin="miter"
                        />
                    </svg>
                )}
                {indeterminate && (
                    <svg viewBox="0 0 12 12" fill="none" className="mlt-checkbox__check">
                        <line x1="2" y1="6" x2="10" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                    </svg>
                )}
            </div>
            {(label || hint) && (
                <div className="mlt-checkbox__info">
                    { label && <span className="mlt-checkbox__label">{label}</span> }
                    { hint && <span className="mlt-checkbox__hint">{hint}</span> }
                </div>
            )}
        </div>
    )
}