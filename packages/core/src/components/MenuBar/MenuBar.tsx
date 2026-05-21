import React, { useState } from 'react'
import './MenuBar.css'
import { Accordion } from '../Accordion/Accordion'
import { Button } from '../Button/Button'

const cx = (...parts: Array<string | false | null | undefined>) =>
    parts.filter(Boolean).join(' ')

type MenuItemBase = {
    id: string
    label: string
    icon?: React.ReactNode
    badge?: React.ReactNode
    disabled?: boolean
}

type MenuLeaf = MenuItemBase & {
    children?: never
    onClick?: () => void
    active?: boolean
}

type MenuGroup = MenuItemBase & {
    children: MenuLeaf[]
    onClick?: never
    active?: never
}

export type MenuItem = MenuLeaf | MenuGroup

export type MenuBarProps = {
    items: MenuItem[]
    collapsed?: boolean
    defaultCollapsed?: boolean
    header?: React.ReactNode
    footer?: React.ReactNode
    onCollapse?: (collapsed: boolean) => void
    className?: string
}

const isGroup = (item: MenuItem): item is MenuGroup =>
    Array.isArray((item as MenuGroup).children)

type MenuButtonProps = {
    variant: 'item' | 'leaf'
    icon?: React.ReactNode
    label: string
    badge?: React.ReactNode
    active?: boolean
    disabled?: boolean
    collapsed?: boolean
    onClick?: () => void
}

const MenuButton = ({
    variant,
    icon,
    label,
    badge,
    active = false,
    disabled = false,
    collapsed = false,
    onClick,
}: MenuButtonProps) => {
    const base = `mlt-menubar__${variant}`
    return (
        <Button
            variant="ghost"
            size="sm"
            disabled={disabled}
            className={cx(base, active && `${base}--active`)}
            onClick={onClick}
        >
            {icon && <span className="mlt-menubar__icon">{icon}</span>}
            {!collapsed && <span className="mlt-menubar__label">{label}</span>}
            {!collapsed && badge !== undefined && (
                <span className="mlt-menubar__badge">{badge}</span>
            )}
        </Button>
    )
}

export const MenuBar = ({
    items,
    collapsed: controlledCollapsed,
    defaultCollapsed = false,
    header,
    footer,
    onCollapse,
    className = '',
}: MenuBarProps) => {
    const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed)
    const isControlled = controlledCollapsed !== undefined
    const collapsed = isControlled ? controlledCollapsed : internalCollapsed

    const toggle = () => {
        const next = !collapsed
        if (!isControlled) setInternalCollapsed(next)
        onCollapse?.(next)
    }

    const groups = items.filter(isGroup)
    const leaves = items.filter((i): i is MenuLeaf => !isGroup(i))

    const renderLeaf = (leaf: MenuLeaf, variant: 'item' | 'leaf') => (
        <MenuButton
            key={leaf.id}
            variant={variant}
            icon={leaf.icon}
            label={leaf.label}
            badge={leaf.badge}
            active={leaf.active}
            disabled={leaf.disabled}
            onClick={leaf.onClick}
        />
    )

    return (
        <nav className={cx('mlt-menubar', collapsed && 'mlt-menubar--collapsed', className)}>
            {header && !collapsed && (
                <div className="mlt-menubar__header">{header}</div>
            )}

            <Button
                variant="ghost"
                size="sm"
                className="mlt-menubar__toggle"
                onClick={toggle}
            >
                <span className="mlt-menubar__toggle-icon">
                    {collapsed ? '›' : '‹'}
                </span>
                {!collapsed && (
                    <span className="mlt-menubar__toggle-label">COLLAPSE</span>
                )}
            </Button>

            <div className="mlt-menubar__items">
                {collapsed ? (
                    items.map(item => (
                        <MenuButton
                            key={item.id}
                            variant="item"
                            icon={item.icon}
                            label={item.label}
                            disabled={item.disabled}
                            collapsed
                            active={!isGroup(item) && item.active === true}
                            onClick={isGroup(item) ? undefined : item.onClick}
                        />
                    ))
                ) : (
                    <>
                        {groups.length > 0 && (
                            <Accordion
                                multiple
                                items={groups.map(group => ({
                                    id: group.id,
                                    title: group.label,
                                    children: group.children.map(child => renderLeaf(child, 'leaf')),
                                }))}
                            />
                        )}

                        {leaves.map(leaf => renderLeaf(leaf, 'item'))}
                    </>
                )}
            </div>

            {footer && !collapsed && (
                <div className="mlt-menubar__footer">{footer}</div>
            )}
        </nav>
    )
}
