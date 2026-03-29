import React from "react";
import './Skeleton.css'
import { Card } from "../Card/Card";

type SkeletonVariant = 'text' | 'rect' | 'circle' | 'card'

type SkeletonProps = {
    variant?: SkeletonVariant
    width?: string | number
    height?: string | number
    lines?: number
    className?: string
    animate?: boolean
}

export const Skeleton = ({
    variant = 'rect',
    width,
    height,
    lines = 3,
    className,
    animate = true,
}: SkeletonProps) => {
    if(variant === 'text'){
        return (
            <div className={['mlt-skeleton-text', className].filter(Boolean).join(' ')}>
                {Array.from({ length: lines }).map((_, i) => (
                    <div 
                        key={i}
                        className={['mlt-skeleton', animate ? 'mlt-skeleton--animate' : ''].filter(Boolean).join(' ')}
                        style={{
                            width: i === lines - 1 ? '60%' : '100%',
                            height: 10
                        }}  
                    />
                ))}
            </div>
        )
    }

    if(variant === 'card'){
        return(
            <Card title="" variant="dark" className={className}>
                <div className="mlt-skeleton-card__header">
                    <div className={['mlt-skeleton', animate? 'mlt-skeleton--animate' : ''].filter(Boolean).join(' ')} style={{ width: 40, height: 40 }} />
                    <div className="mlt-skeleton-card__header-lines">
                        <div className={['mlt-skeleton', animate? 'mlt-skeleton--animate' : ''].filter(Boolean).join(' ')} style={{ width: '60%', height: 10 }} />
                        <div className={['mlt-skeleton', animate? 'mlt-skeleton--animate' : ''].filter(Boolean).join(' ')} style={{ width: '40%', height: 8 }} />
                    </div>
                </div>
                
                <div className="mlt-skeleton-card__body">
                    {[100, 100, 70].map((w, i) => (
                        <div 
                            key={i}
                            className={['mlt-skeleton', animate? 'mlt-skeleton--animate' : ''].filter(Boolean).join(' ')}
                            style={{ width: `${w}%`, height: 9 }}
                        />
                    ))}
                </div>

                <div className="mlt-skeleton-card__footer">
                    <div className={['mlt-skeleton', animate? 'mlt-skeleton--animate' : ''].filter(Boolean).join('')} style={{ width: 80, height: 28 }}/>
                    <div className={['mlt-skeleton', animate? 'mlt-skeleton--animate': ''].filter(Boolean).join('')} style={{ width: 80, height: 28 }}/>
                </div>
            </Card>
        )
    }

    return (
        <div 
            className={[
                'mlt-skeleton',
                `mlt-skeleton--${variant}`,
                animate ? 'mlt-skeleton--animate' : '',
                className,
            ].filter(Boolean).join(' ')}
            style={{
                width: width ?? '100%',
                height: height ?? (variant === 'circle' ? 48 : 16),
            }}
        />
    )
}