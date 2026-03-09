import React, { useState, useRef, useEffect } from 'react'
import './Select.css'

type SelectOption = {
    value: string
    label: string
}

type SelectProps = {
    options: SelectOption[]
    value?: string | string[]
    multiple?: boolean
    placeholder?: string
    label?: string
    onChange?: (value: string | string[]) => void
}

export const Select = ({
    options,
    value,
    multiple = false,
    placeholder = 'SELECT ONE',
    label,
    onChange,
} : SelectProps) => {
    const[open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    const selected = value ? Array.isArray(value) ? value : [value] : []

    const isSelected = (val: string) => selected.includes(val)

    const handleSelect = (val: string) => {
        if(multiple){
            const next = isSelected(val) ? selected.filter(v => v !== val) : [...selected, val] 
            onChange?.(next)
        } else {
            onChange?.(val)
            setOpen(false)
        }
    }

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if(ref.current && !ref.current.contains(e.target as Node)){
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    const selectedLabels = options.filter(o => isSelected(o.value)).map(o => o.label).join(', ')

    return (
        <div className="mlt-select" ref={ref}>
            { label && <div className="mlt-select__label">{label}</div> }
            <div
                className={['mlt-selevt__trigger', open ? 'mlt-select__trigger--open' : ''].filter(Boolean).join('')}
                onClick={() => setOpen(v => !v)}
            >
                <span className={selectedLabels ? 'mlt-select__value' : 'mlt-select__placeholder'}>
                    {selectedLabels || placeholder}
                </span>
                <span className="mlt-select__arrow" aria-hidden="true">
                    {open ? '∧' : '∨'}
                </span>
            </div>

            {open && (
                <div className="mlt-select__dropdown">
                    {options.map(option => (
                        <div
                            key={option.value}
                            className={['mlt-select__option', isSelected(option.value) ? 'mlt-select__option--selected' : ''].filter(Boolean).join(' ')}  
                            onClick={() => handleSelect(option.value)}
                        >
                            <span className="mlt-select__check">
                                {isSelected(option.value ? '✓' : '')}
                            </span>
                            <span className='mlt-select__option-label'>{option.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}