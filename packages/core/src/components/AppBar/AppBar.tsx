import React from "react"
import './AppBar.css'

type AppBarItem = {
    id: string
    icon?: React.ReactNode
    value: string | number
    accent?: boolean
}

type AppBarProps = {
    items: AppBarItem[]
    className?: string
}

export const AppBar = ({
    items,
    className = '',
}: AppBarProps) => {
    return (
        <div className={['mlt-appbar', className].filter(Boolean).join(' ')}>
            {items.map((item, i) => (
                <div
                    key={item.id}
                    className={[
                        'mlt-appbar__item',
                        item.accent ? 'mlt-appbar__item--accent' : '',
                    ].filter(Boolean).join(' ')}
                >
                    {item.icon && (
                        <span className="mlt-appbar__icon">{item.icon}</span>
                    )}
                    <span className="mlt-appbar__value">{item.value}</span>
                </div>
            ))}
        </div>
    )
}