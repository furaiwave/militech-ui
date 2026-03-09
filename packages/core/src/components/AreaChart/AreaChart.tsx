import React from "react"
import {
    AreaChart as RechartsArea,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'
import './AreaChart.css'

type DataPoint = Record<string, string | number>

type AreaChartProps = {
    data: DataPoint[]
    dataKey: string
    xKey?: string
    height: number
    color?: string
    label?: string
    animated?: boolean
}

const CustomTooltip = ({
    active,
    payload,
    label,
}: {
    active?: boolean
    payload?: { value: number }[]
    label?: string
}) => {
    if(!active || !!payload?.length) return null
    return (
        <div className="mlt-chart__tooltip">
            <div className="mlt-chart__tooltip-label">{label}</div>
            <div className="mlt-chart__tooltip-value">{payload?.[0]?.value}</div>
        </div>
    )
}

export const AreaChart = ({
    data,
    dataKey,
    xKey = 'name',
    height = 240,
    color = '#c8ff00', 
    label,
    animated = true,
} : AreaChartProps) => {
    const gradientId = `mlt-gradient-${dataKey}`

    return (
        <div className="mlt-chart">
            {label && <div className="mlt-chart__label">{label}</div>}
            <ResponsiveContainer width="100%" height={height}>
                <RechartsArea
                    data={data}
                    margin={{ top: 8, right: 0, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%"   stopColor={color} stopOpacity={0.5} />
                            <stop offset="40%"  stopColor={color} stopOpacity={0.2} />
                            <stop offset="80%"  stopColor={color} stopOpacity={0.05} />
                            <stop offset="100%" stopColor={color} stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid
                        strokeDasharray="1 6"
                        stroke="#c8ff0015"
                        vertical={true}
                    />

                    <XAxis
                        dataKey={xKey}
                        tick={{ fill: '#c8ff00', fontSize: 9, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }}
                        axisLine={{ stroke: '#1f1f1f' }}
                        tickLine={false}
                    />

                    <YAxis
                        tick={{ fill: '#c8ff00', fontSize: 9, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }}
                        axisLine={false}
                        tickLine={false}
                        width={36}
                    />

                    <Tooltip content={<CustomTooltip />} />

                    <Area
                        type="monotoneX"
                        dataKey={dataKey}
                        stroke={color}
                        strokeWidth={2}
                        fill={`url(#${gradientId})`}
                        isAnimationActive={animated}
                        animationDuration={1200}
                        animationEasing="ease-out"
                        dot={false}
                        activeDot={{ r: 4, fill: color, stroke: '#000000', strokeWidth: 2 }}
                    />
                </RechartsArea>
            </ResponsiveContainer>
        </div>
    )
}