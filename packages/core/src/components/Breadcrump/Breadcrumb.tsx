import React from 'react'
import './Breadcrumb.css'

type BreadcrumbItem = {
    label: string
    href?: string
    onClick?: () => void
}

type BreadcrumbProps = {
    items: BreadcrumbItem[]
    separator?: string
    className?: string
}

export const Breadcrumb = ({
    items, 
    separator = '//',
    className = '',
}: BreadcrumbProps) => {
    return(
        <div className={[ 'mlt-breadcrumb', className].filter(Boolean).join(' ')} aria-label='breadcrumb'>
            {items.map((item, i) => {
                const isLast =  i === items.length - 1

                return (
                    <span key={i} className="mlt-breadcrumb__item">
                        { isLast ? (
                            <span className="mlt-breadcrumb__label mlt-breadcrumb__label--active">
                                {item.label}
                            </span>
                        ) : item.href ? (
                            <a href={item.href} className="mlt-breadcrumb__label mlt-breadcrumb__label--link">
                                {item.label}
                            </a>
                        ) : (
                            <span
                                className={['mlt-breadcrumb__label', item.onClick ? 'mlt-breadcrumb__label--link' : ''].filter(Boolean).join(' ')}
                                onClick={item.onClick}
                            >
                                {item.label}
                            </span>
                        )}

                        {!isLast && (
                            <span className="mlt-breadcrumb__separator" aria-hidden="true">
                                {separator}
                            </span>
                        )}
                    </span>
                )
            })}
        </div>
    )
}