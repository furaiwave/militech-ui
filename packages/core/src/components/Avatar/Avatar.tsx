import React, { useState } from 'react'
import './Avatar.css'

type AvatarStatus = 'online' | 'offline' | 'threat' | 'classified'
type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'

type AvatarProps = {
    src?: string
    name?: string
    status?: AvatarStatus
    size?: AvatarSize
    hud?: boolean
    className?: string
}

const getInitials = (name: string) => 
    name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)

export const Avatar = ({
    src,
    name,
    status,
    size = 'md',
    hud = false,
    className = '',
}: AvatarProps) => {
    return (
        <div className={[
            'mlt-avatar',
            `mlt-avatar--${size}`,
            hud ? 'mly-avatar--hud' : '',
            status ? `mlt-avatar--${status}` : '',
            className,
        ].filter(Boolean).join(' ')}>
            {hud && <>
                <div className="mlt-avatar__corner mlt-avatar__corner--tl" aria-hidden="true" />
                <div className="mlt-avatar__corner mlt-avatar__corner--tr" aria-hidden="true"/>
                <div className="mlt-avatar__corner mlt-avatar__corner--bl" aria-hidden="true"/>
                <div className="mlt-avatar__corner mlt-avatar__corner--br" aria-hidden="true"/>
            </>}

            <div className="mlt-avatar__inner">
                {src ? (
                    <img src={src} alt={name ?? 'avatar'} className="mlt-avatar__img" />
                ) : (
                    <span className="mlt-avatar__initials">
                        {name ? getInitials(name) : '??'}
                    </span>
                )}
            </div>

            {status && (
                <span className={`mlt-avatar_status mlt-avatar__status--${status}`} aria-label={status} />
            )}

            {hud && name && (
                <div className="mlt-avatar__hud-label">{name}</div>
            )}
        </div>
    )
}

type AvatarGroupProps = {
    avatars: AvatarProps[]
    max?: number
    size?: AvatarSize
}

export const AvatarGroup = ({
    avatars,
    max = 4,
    size = 'md',
}: AvatarGroupProps) => {
    const visible = avatars.slice(0, max)
    const rest = avatars.length - max

    return (
        <div className="mlt-avatar-group">
            {visible.map((avatar, i) => (
                <Avatar key={i} {...avatar} size={size} className="mlt-avatar-group__item" />
            ))}
            {rest > 0 && (
                <div className={`mlt-avatar mlt-avatar--${size} mlt-avatar-group__item mlt-avatar-group__rest`}>
                    <div className="mlt-avatar__inner">
                        <span className="mlt-avatar__initials">+{rest}</span>
                    </div>
                </div>
            )}
        </div>
    )
}