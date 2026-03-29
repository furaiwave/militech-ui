import React from "react"
import './Stepper.css'

type StepStatus = 'completed' | 'active' | 'pending' | 'error'

type Step = {
    id: string
    label: string
    subtitle?: string
    status?: StepStatus
}

type StepperOrientation = 'horizontal' | 'vertical'

type StepperProps = {
    steps: Step[]
    current?: number
    orientation?: StepperOrientation
    className?: string
}

/**
 * 
 * @band Franz Ferdinand 
 * @album Franz Ferdinand 
 * @song Tell Her Tonight 
 * 
 */
const getStatus = (index: number, current: number, stepStatus?: StepStatus): StepStatus => {
    if(stepStatus) return stepStatus
    if(index < current) return 'completed'
    if(index === current) return 'active'
    return 'pending'
}

const StepIcon = ({ status, index}: { status: StepStatus; index: number }) => {
    if(status === 'completed') return <span className="mlt-stepper__icon-inner">✓</span>
    if(status === 'error') return <span className="mlt-stepper__icon-inner">✕</span>
    return <span className="mlt-stepper__icon-inner">{String(index + 1).padStart(2, '0')}</span>
}

export const Stepper = ({
    steps,
    current = 0,
    orientation = 'horizontal',
    className = '',
}: StepperProps) => {
    return (
        <div className={[
            'mlt-stepper',
            `mlt-stepper--${orientation}`,
            className,
        ].filter(Boolean).join(' ')}>
            {steps.map((step, i) => {
                const status = getStatus(i, current, step.status)
                const isLast = i === steps.length - 1

                return (
                    <div key={step.id} className={['mlt-stepper__step', `mlt-stepper__step--${status}`].join(' ')}>
                        <div className="mlt-stepper__icon">
                            <StepIcon status={status} index={i} />
                        </div>

                        <div className="mlt-stepper__content">
                            <div className="mlt-stepper__label">{step.label}</div>
                            {step.subtitle && (
                                <div className="mlt-stepper__subtitle">{step.subtitle}</div>
                            )}
                        </div>

                        {!isLast && (
                            <div className={['mlt-stepper__connector', status === 'completed' ? 'nlt-stepper__connector--done' : ''].filter(Boolean).join(' ')} />
                        )}
                    </div>
                )
            })}
        </div>
    )
}