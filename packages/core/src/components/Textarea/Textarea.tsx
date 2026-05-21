import React, { useState } from 'react'
import './Textarea.css'

type TextareaVariant = 'default' | 'danger' | 'success'

type TextareaProps = {
    label?: string
    placeholder?: string
    value?: string
    defaultValue?: string
    variant?: TextareaVariant
    disabled?: boolean
    readOnly?: boolean
    rows?: number
    maxLength?: number
    hint?: string
    error?: string
    resize?: 'none' | 'vertical' | 'horizontal' | 'both'
    onChange?: (value: string) => void
    className?: string
}

export const Textarea = ({
    label,
    placeholder = '',
    value,
    defaultValue,
    variant = 'default',
    disabled = false,
    readOnly = false,
    rows = 4,
    maxLength,
    hint,
    error,
    resize = 'both',
    onChange,
    className = '',
}: TextareaProps) => {
    const isControlled = value !== undefined
    const [focused, setFocused] = useState(false)
    const [internalLength, setInternalLength] = useState(defaultValue?.length ?? 0)
    const length = isControlled ? (value?.length ?? 0) : internalLength

    const resolvedVariant: TextareaVariant = error ? 'danger' : variant

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (!isControlled) setInternalLength(e.target.value.length)
        onChange?.(e.target.value)
    }

    return (
        <div className={['mlt-textarea-wrap', className].filter(Boolean).join(' ')}>
            {label && (
                <label className='mlt-textarea__label'>{label}</label>
            )}

            <div className={[
                'mlt-textarea__field',
                `mlt-textarea__field--${resolvedVariant}`,
                focused ? 'mlt-textarea__field--focused' : '',
                disabled ? 'mlt-textarea__field--disabled' : '',
            ].filter(Boolean).join(' ')}>
                <textarea 
                    className='mlt-textarea__el'
                    value={value}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    disabled={disabled}
                    readOnly={readOnly}
                    rows={rows}
                    maxLength={maxLength}
                    style={{ resize }}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChange={handleChange}
                />

                <div className="mlt-textarea__corner" aria-hidden="true" />
            </div>
            <div className="mlt-textarea__footer">
                <div>
                    {error && <div className="mlt-textarea__error">{error}</div>}
                    {!error && hint && <div className="mlt-textarea__hint">{hint}</div>}
                </div>
                {maxLength && (
                    <div className={['mlt-textarea__counter', length >= maxLength ? 'mlt-textarea__counter--limit' : ''].filter(Boolean).join(' ')}>
                        {length}/{maxLength}
                    </div>
                )}
            </div>
        </div>
    )
}