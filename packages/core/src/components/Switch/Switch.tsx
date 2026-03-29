import React, { useState } from 'react'
import './Switch.css'

type SwitchSize = 'sm' | 'md' | 'lg'
type SwitchVariant = 'default' | 'danger' | 'success'

type SwitchProps = {
    checked?: boolean
    defaultChecked?: boolean
    disabled?: boolean
    size?: SwitchSize
    variant?: SwitchVariant
    label?: string
    hint?: string
    onChange?: (checked: boolean) => void
    className?: string
}

export const Switch = ({
    checked,
    defaultChecked = false,
    disabled = false,
    size = 'md',
    variant = 'default',
    label,
    hint,
    onChange,
    className,
}: SwitchProps) => {
    const[internal, setInternal] = useState(defaultChecked)
    const isControlled = checked !== undefined
    const isChecked = isControlled ? checked : internal

    const handleClick = () => {
        if(disabled) return
        const next = !isChecked
        if(!isControlled) setInternal(next)
            onChange?.(next)
    }

    return (
        <div className={['mlt-switch-wrap', disabled ? 'mlt-switch-wrap--disabled' : '', className].filter(Boolean).join(' ')}>
            <div className="mlt-awitch-content">
                <button
                    role="switch"
                    aria-checked={isChecked}
                    disabled={disabled}
                    className={[
                        'mlt-switch',
                        `mlt-switch--${size}`,
                        `mlt-switch--${variant}`,
                        isChecked ? 'mlt-switch--on' : 'mlt-switch--off',
                    ].filter(Boolean).join(' ')}
                    onClick={handleClick} 
                >
                    <span className="mlt-switch__track">
                        <span className="mlt-switch__track-label mlt-switch__track-label--on">ON</span>
                        <span className="mlt-switch__track-label mlt-switch__track-label--off">OFF</span>
                    </span>
                    <span className="mlt-switch__thumb" />
                </button>

                {(label || hint) && (
                    <div className="mlt-switch__info">
                        {label && <span className="mlt-switch__label">{label}</span>}
                        {hint && <span className="mlt-switch__hint">{hint}</span>}
                    </div>
                )}
            </div>
        </div>
    )
} 