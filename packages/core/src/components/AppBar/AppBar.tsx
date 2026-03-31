import React from "react"
import './AppBar.css'
import { Button } from "../Button"

type AppBarItem = {
    id: string
    icon?: React.ReactNode
    value: string | number
    accent?: boolean
    onClick?: () => void
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

                const content = (
                    <>
                        {item.icon && <span className="mlt-appbar__icon">{item.icon}</span>}
                        <span className="mlt-appbar__value">{item.value}</span>
                    </>
                )

                if(isFirst) {
                    return (
                        <Button
                            key={item.id}
                            variant={item.accent ? 'primary' : 'ghost'}
                            className={[
                                'mlt-appbar__item',
                                'mlt-appbar__item--first',
                                item.accent ? 'mlt-appbar__item--accent' : '',
                            ].filter(Boolean).join(' ')}
                            onClick={item.onClick}
                        >
                            {content}
                        </Button>
                    )
                }

                if(isLast) {
                    return (
                        <Button
                            key={item.id}
                            variant={item.accent ? 'primary' : 'ghost'}
                            onClick={item.onClick}
                            className={[
                                'mlt-appbar__item',
                                'mlt-appbar__item-rounded',
                                item.accent ? 'mlt-appbar__item--accent' : '',
                            ].filter(Boolean).join(' ')}
                        >
                            {content}
                        </Button>
                    )
                }

                return (
                    <div
                        key={item.id}
                        className={[
                            'mlt-appbar__item',
                            item.onClick ? 'mlt-appbar__item--clickable' : '',
                        ].filter(Boolean).join(' ')}
                        onClick={item.onClick}
                    >
                        {content}
                    </div>
                )
            })}
        </div>
    )
}