import React, { useState } from "react"
import { Button } from '../Button'
import './AppBar.css'

type AppBarVariant = 'light' | 'brown' | 'default'

type AppBarItem = {
    id: string
    label?: React.ReactNode
    value: React.ReactNode
    onClick?: () => void
    variant?: AppBarVariant
}

type AppBarProps = {
    items: AppBarItem[]
    className?: string
    defaultActiveId?: string
    activeId?: string
    onActiveChange?: (id: string) => void
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
    defaultActiveId,
    activeId,
    onActiveChange,
}: AppBarProps) => {
    const [internalActive, setInternalActive] = useState<string>(
        defaultActiveId ?? ''
    )
    const isControlled = activeId !== undefined
    const active = isControlled ? activeId : internalActive

    return (
        <div className={['mlt-appbar', className].filter(Boolean).join(' ')}>
            {items.map((item, i) => {
                const isFirst = i === 0
                const isLast = i === items.length - 1
                const isActive = item.id === active
                const variant: AppBarVariant = item.variant ?? 'default'

                const itemClasses = [
                    'mlt-appbar__item',
                    `mlt-appbar__item--${variant}`,
                    isFirst ? 'mlt-appbar__item--first' : '',
                    isLast ? 'mlt-appbar__item--last' : '',
                    isActive ? 'mlt-appbar__item--active' : '',
                ].filter(Boolean).join(' ')

                const handleClick = () => {
                    if (!isControlled) setInternalActive(item.id)
                    onActiveChange?.(item.id)
                    item.onClick?.()
                }

                return (
                    <Button
                        key={item.id}
                        variant="ghost"
                        className={itemClasses}
                        onClick={handleClick}
                    >
                        {item.label != null && <span className="mlt-appbar__label">{item.label}</span>}
                        <span className="mlt-appbar__value">{item.value}</span>
                    </Button>
                )
            })}
        </div>
    )
}
