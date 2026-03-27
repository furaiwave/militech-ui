import React from "react"
import {
    AreaChart as RechartsArea,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts'
import './AreaChart.css'

type DataPoint = Record<string, string | number>

type AreaSeries = {
    key: string
    label?: string
    color?: string
}

type AreaChartProps = {
    data: DataPoint[]
    series: AreaSeries[]
    xKey?: string
    height: number
    color?: string
    label?: string
    animated?: boolean
    showLegend?: boolean
}

const CustomTooltip = ({
    active,
    payload,
    label,
}: {
    active?: boolean
    payload?: { value: number; name: string; color: string }[]
    label?: string
}) => {
    if(!active || !payload?.length) return null
    return (
        <div className="mlt-chart__tooltip">
            <div className="mlt-chart__tooltip-label">{label}</div>
            {payload.map((p, i) => (
                <div key={i} className="mlt-chart__tooltip-row">
                    <span className="mlt-chart__tooltip-dot" style={{ background: p.color }} />
                    <span className="mlt-chart__tooltip-name">{p.name}</span>
                    <span className="mlt-chart__tooltip-value" style={{ color: p.color }}>{p.value}</span>
                </div>
            ))}
        </div>
    )
}

const CustomLegend = ({ payload  } : { payload? : { value: string; color: string}[] }) => {
    if(!payload?.length) return null
    return (
        <div className="mlt-chart__lgend">
            {payload.map((p, i) => (
                <div key={i} className="mlt-chart__legend-item">
                    <span className="mlt-chart__legend-line" style={{ background: p.color }} />
                    <span className="mlt-chart__legend-label">{p.value}</span>
                </div>
            ))}
        </div>
    )
}

const DEFAULT_COLORS = ['#c8ff00', '#00e5ff', '#ff3b3b', '#00ff88', '#ffaa00']

export const AreaChart = ({
    data,
    series,
    xKey = 'name',
    height = 240,
    label,
    animated = true,
    showLegend = false,
} : AreaChartProps) => {
    return (
        <div className="mlt-chart">
            { label && <div className="mlt-chart__label">{label}</div> }
            <ResponsiveContainer width="100%" height={height}>
                <RechartsArea
                    data={data}
                    margin={{ top: 8, right: 0, left: 0, bottom: 0 }}
                >
                    <defs>
                        { series.map((s, i) => {
                            const color = s.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]!
                            return(
                                <linearGradient key={s.key} id={`mlt-gradient-${s.key}`} x1={0} y1={0} x2={0} y2={1}>
                                    <stop offset="0%" stopColor={color} stopOpacity={0.25} />
                                    <stop offset="50%" stopColor={color} stopOpacity={0.08} />
                                    <stop offset="100%" stopColor={color} stopOpacity={0} />
                                </linearGradient>
                            )
                        })}
                    </defs>

                    <CartesianGrid
                        strokeDasharray="1 6"
                        stroke="#c8ff0015"
                        vertical={true}
                    />

                    <XAxis
                        dataKey={xKey}
                        tick={{ fill: '#c8ff00', fontSize: 9, fontFamily: 'PPFraktion, monospace', letterSpacing: '0.1em' }}
                        axisLine={{ stroke: '#1f1f1f' }}
                        tickLine={false}
                    />

                    <YAxis
                        tick={{ fill: '#c8ff00', fontSize: 9, fontFamily: 'PPFraktion, monospace', letterSpacing: '0.1em' }}
                        axisLine={false}
                        tickLine={false}
                        width={36}
                    />

                    <Tooltip content={<CustomTooltip />} />

                    { showLegend && <Legend content={<CustomLegend />} /> }
                    { series.map((s, i) => {
                        const color = s.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]!
                        return(
                            <Area
                                key={s.key}
                                type="monotoneX"
                                dataKey={s.key}
                                name={s.label ?? s.key}
                                stroke={color}
                                strokeWidth={1.5}
                                fill={`url(#mlt-gradient-${s.key})`}
                                isAnimationActive={animated}
                                animationDuration={1200}
                                animationEasing="ease-out"
                                dot={false}
                                activeDot={{ r: 4, fill: color, stroke: '#000000', strokeWidth: 2 }}
                            />
                        )
                    })}
                </RechartsArea>
            </ResponsiveContainer>
        </div>
    )
}