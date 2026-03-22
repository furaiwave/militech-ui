import React, { useState } from 'react'
import './Input.css'

type InputVariant = 'default' | 'danger' | 'success'
type InputSize = 'sm' | 'md' | 'lg'

type InputProps = {
    label?: string
    placeholder?: string
    value?: string
    defaultValue?: string
    variant?: InputVariant
    size?: InputSize
    disabled?: boolean
    readOnly?: boolean
    prefix?: string // example ">" or "$"
    suffix?: string // example "units"
    hint?: string
    error?: string
    onChange?: (value: string) => void
    onEnter?: (value: string) => void
    className?: string
}

export const Input = ({
    label,
    placeholder = '',
    value,
    defaultValue,
    variant = 'default',
    size = 'md',
    disabled = false,
    readOnly = false,
    prefix,
    suffix,
    hint,
    error,
    onChange,
    onEnter,
    className = '',
}: InputProps) => {
    const[focused, setFocused] = useState(false)
    const resolvedVariant: InputVariant = error ? 'danger' : variant

    return(
        <div className={['mlt-input-wrap', className].filter(Boolean).join(' ')}>
            {label && (
                <label className="mlt-input__label">{label}</label>
            )}

            <div className={[
                'mlt-input__field',
                `mlt-input__field--${resolvedVariant}`,
                `mlt-input__field--${size}`,
                focused ? 'mlt-input__field--focused' : '',
                disabled ? 'mlt-input__field--disabled' : '',
            ].filter(Boolean).join(' ')}>
                {prefix && <span className="mlt-input__prefix">{prefix}</span>}

                <input 
                    className="mlt-input__el"
                    value={value}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    disabled={disabled}
                    readOnly={readOnly}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChange={e => onChange?.(e.target.value)}
                    onKeyDown={e => {
                        if(e.key === 'Enter') onEnter?.(e.currentTarget.value)
                    }}
                />

                {suffix && <span className="mlt-input__suffix">{suffix}</span>}
            </div>

            {error && <div className="mlt-input__error">{error}</div>}
            {!error && hint && <div className="mlt-input__hint">{hint}</div>}
        </div>
    )
}