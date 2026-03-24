import React, { useEffect } from 'react'
import './Dialog.css'

type DialogVatiant = 'default' | 'danger' | 'classified'

type DialogProps = {
    open: boolean
    variant?: DialogVatiant
    title: string
    subtitle?: string
    children?: React.ReactNode
    primaryAction?: {
        label: string
        onClick?: () => void
    } 
    secondaryAction?: {
        label: string
        onClick?: () => void
    }
    onClose?: () => void
    closeOnOverlay?: boolean
    className?: string
}

export const Dialog = ({
    open,
    variant = 'default',
    title,
    subtitle,
    children,
    primaryAction,
    secondaryAction,
    onClose,
    closeOnOverlay = true,
    className = '',
}: DialogProps) => {
    useEffect(() => {
        if(!open) return
        const handler = (e: KeyboardEvent) => {
            if(e.key === 'Escape') onClose?.()
        }

        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [open, onClose])

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [open])

    if(!open) return null

    return (
        <div
            className="mlt-dialog__backdrop"
            onClick={closeOnOverlay ? onClose : undefined}
        >
                <div
                    className={['mlt-dialog', `mlt-dialog--${variant}`, className].filter(Boolean).join(' ')}
                    onClick={e => e.stopPropagation()}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="mlt-dialog__corner mlt-dialog__corner--tl" aria-hidden="true" />
                    <div className="mlt-dialog__corner mlt-dialog__corner--tr" aria-hidden="true" />
                    <div className="mlt-dialog__corner mlt-dialog__corner--bl" aria-hidden="true" />
                    <div className="mlt-dialog__corner mlt-dialog__corner--br" aria-hidden="true" />
                </div>

                <div className="mlt-dialog__header">
                    <div className="mlt-dialog__header-left">
                        {subtitle && <div className="mlt-dialog__subtitle">{subtitle}</div>}
                        <div className="mlt-dialog__title">{title}</div>
                    </div>
                    {onClose && (
                        <button className="mlt-dialog__close" onClick={onClose} aria-label="Close">
                            ✕
                        </button>
                    )}
                </div>

                {children && (
                    <div className="mlt-dialog__body">{children}</div>
                )}

                {(primaryAction || secondaryAction) && (
                    <div className="mlt-dialog__footer">
                        {secondaryAction && (
                            <button className="mlt-dialog__btn mlt-dialog__btn--secondary" onClick={secondaryAction.onClick}>
                                {secondaryAction?.label}
                            </button>
                        )}
                        {primaryAction && (
                            <button className="mlt-dialog__btn mlt-dialog__btn--primary" onClick={primaryAction?.onClick}>
                                {primaryAction.label}
                            </button>
                        )}
                    </div>
                )}
        </div>
    )
}