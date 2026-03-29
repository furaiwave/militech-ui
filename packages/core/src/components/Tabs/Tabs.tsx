import React, { useState } from 'react'
import './Tabs.css'
import { Badge } from '../Badge'

type TabItem = {
    id: string
    label: string
    badge?: string | number
    disabled?: boolean
    children: React.ReactNode
}

type TabsVariant = 'default' | 'underline' | 'filled'

type TabsProps = {
    items: TabItem[]
    variant?: TabsVariant
    defaultTab?: string
    onChange?: (id: string) => void
    className?: string
}

export const Tabs = ({
    items, 
    variant = 'default',
    defaultTab = '',
    onChange,
    className = '',
}: TabsProps) => {
    const[active, setActive] = useState(defaultTab ?? items[0]?.id ?? '')

    const handleChange = (id: string) => {
        setActive(id)
        onChange?.(id)
    }

    const activeItem = items.find(i => i.id === active)

    return (
        <div className={['mlt-tabs', `mlt-tabs--${variant}`, className].filter(Boolean).join(' ')}>
            <div className="mlt-tabs__list" role="tablist">
                {items.map(item => (
                    <button
                        key={item.id}
                        role="tab"
                        aria-selected={active === item.id}
                        disabled={item.disabled}
                        className={[
                            'mlt-tabs__tab',
                            active === item.id ? 'mlt-tabs__tab--active' : '',
                            item.disabled ? 'mlt-tabs__tab--disabled' : '',
                        ].filter(Boolean).join(' ')}
                        onClick={() => !item.disabled && handleChange(item.id)}    
                    >
                        {item.label}
                        {item.badge !== undefined && (
                            <Badge variant="active">{item.badge}</Badge>
                        )}
                    </button>
                ))}
            </div>

            {variant === 'underline' && (
                <div className="mlt-tabs__underline-track">
                    <div 
                        className="mlt-tabs__underline-indicator"
                        style={{
                            width: `${100 / items.length}%`,
                            transform: `translateX(${items.findIndex(i => i.id === active) * 100}%)`
                        }}
                    />
                </div>
            )}

            <div className="mlt-tabs__panel" role="tabpanel">
                {activeItem?.children}
            </div>
        </div>  
    )
}