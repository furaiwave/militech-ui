import React, { useState } from "react";
import './Slider.css'

type SliderVariant = 'default' | 'danger' | 'success' | 'warning'

type SliderProps = {
    min?: number
    max?: number
    step?: number
    value?: number
    defaultValue?: number
    variant?: SliderVariant
    label?: string
    showValue?: boolean
    disabled?: boolean
    onChange?: (value: number) => void
    className?: string
}

export const Slider = ({
    min = 0,
    max = 100,
    step = 1,
    value,
    defaultValue = 0,
    variant = 'default',
    label,
    showValue = true,
    disabled = false,
    onChange,
    className = '',
}: SliderProps) => {
    const [internal, setInternal] = useState(defaultValue)
    const isControlled = value !== undefined
    const current = isControlled ? value : internal

    const range = max - min
    const percent = range > 0 ? ((current - min) / range) * 100 : 0

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const next = Number(e.target.value)
        if (!isControlled) setInternal(next)
        onChange?.(next)
    }

    return (
    <div className={['mlt-slider-wrap', disabled ? 'mlt-slider-wrap--disabled' : '', className].filter(Boolean).join(' ')}>
      {(label || showValue) && (
        <div className="mlt-slider__header">
          {label && <span className="mlt-slider__label">{label}</span>}
          {showValue && (
            <span className={`mlt-slider__value mlt-slider__value--${variant}`}>
              {current}
            </span>
          )}
        </div>
      )}

      <div className="mlt-slider__track-wrap">
        {/* заполненная часть */}
        <div
          className={`mlt-slider__fill mlt-slider__fill--${variant}`}
          style={{ width: `${percent}%` }}
        />

        {/* засечки */}
        <div className="mlt-slider__ticks" aria-hidden="true">
          {Array.from({ length: 11 }).map((_, i) => (
            <div key={i} className="mlt-slider__tick" />
          ))}
        </div>

        <input
          type="range"
          className={`mlt-slider mlt-slider--${variant}`}
          min={min}
          max={max}
          step={step}
          value={current}
          disabled={disabled}
          onChange={handleChange}
        />
      </div>

      {/* min/max labels */}
      <div className="mlt-slider__range">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  )
}