import React from "react"
import './AppBar.css'

type AppBarItem = {
    id: string
    icon?: React.ReactNode
    value: string | number
    onClick?: () => void
    variant?: 'accent' | 'brown' | 'default'
}

type AppBarProps = {
    items: AppBarItem[]
    className?: string
}

/**
 * 
 * @band Bullet For My Valentine
 * @album The Poison
 * @song Tears Don't Fall
 */

export const AppBar = ({
    items,
    className = '',
}: AppBarProps) => {
    return (
        <div className={['mlt-appbar', className].filter(Boolean).join(' ')}>
            {items.map((item, i) => {
                const isFirst = i === 0
                const isLast = i === items.length - 1
                
                const itemClasses = [
                    'mlt-appbar__item',
                    isFirst ? 'mlt-appbar__item--accent' : '',
                    isLast ? 'mlt-appbar__item--last' : '',
                    item.variant === 'accent' ? 'mlt-appbar__item--accent' : '',
                    item.variant === 'brown' ? 'mlt-appbar__item--brown' : '',
                    item.onClick ? 'mlt-appbar__item--clickable' : ''
                ].filter(Boolean).join(' ')

                return (
                    <div 
                        key={item.id} 
                        className={itemClasses}
                        onClick={item.onClick}
                    >
                        {item.icon && <span className="mlt-appbar__icon">{item.icon}</span>}
                        <span className="mlt-appbar__value">{item.value}</span>
                    </div>
                )
            })}
        </div>
    )
}