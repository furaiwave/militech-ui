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

type Interpolation = 'linear' | 'monotone' | 'step'

type AreaChartProps = {
    data: DataPoint[]
    series: AreaSeries[]
    xKey?: string
    height: number
    color?: string
    label?: string
    animated?: boolean
    showLegend?: boolean
    /** Линия между точками: 'linear' — осциллограф (прямые), 'monotone' — плавная, 'step' — лесенка. */
    interpolation?: Interpolation
    /** CRT-свечение фосфорного следа. */
    glow?: boolean
}

const RECHARTS_TYPE: Record<Interpolation, 'linear' | 'monotoneX' | 'stepAfter'> = {
    linear: 'linear',
    monotone: 'monotoneX',
    step: 'stepAfter',
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
    interpolation = 'step',
    glow = true,
} : AreaChartProps) => {
    const curveType = RECHARTS_TYPE[interpolation]

    return (
        <div className="mlt-chart">
            { label && <div className="mlt-chart__label">{label}</div> }
            <ResponsiveContainer width="100%" height={height}>
                <RechartsArea
                    data={data}
                    margin={{ top: 8, right: 0, left: 0, bottom: 0 }}
                >
                    <defs>
                        {/* CRT phosphor glow filter */}
                        <filter id="mlt-chart-glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="1.2" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        { series.map((s, i) => {
                            const color = s.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]!
                            return(
                                <linearGradient key={s.key} id={`mlt-gradient-${s.key}`} x1={0} y1={0} x2={0} y2={1}>
                                    <stop offset="0%" stopColor={color} stopOpacity={0.18} />
                                    <stop offset="60%" stopColor={color} stopOpacity={0.04} />
                                    <stop offset="100%" stopColor={color} stopOpacity={0} />
                                </linearGradient>
                            )
                        })}
                    </defs>

                    {/* graticule: пунктиры по обеим осям, равномерно — как сетка осциллографа */}
                    <CartesianGrid
                        strokeDasharray="2 4"
                        stroke="#c8ff0018"
                        vertical
                        horizontal
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

                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#c8ff0044', strokeDasharray: '2 4' }} />

                    { showLegend && <Legend content={<CustomLegend />} /> }
                    { series.map((s, i) => {
                        const color = s.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]!
                        return(
                            <Area
                                key={s.key}
                                type={curveType}
                                dataKey={s.key}
                                name={s.label ?? s.key}
                                stroke={color}
                                strokeWidth={1.75}
                                strokeLinejoin="miter"
                                strokeLinecap="square"
                                fill={`url(#mlt-gradient-${s.key})`}
                                filter={glow ? 'url(#mlt-chart-glow)' : undefined}
                                isAnimationActive={animated}
                                animationDuration={1200}
                                animationEasing="ease-out"
                                dot={false}
                                activeDot={{ r: 3, fill: color, stroke: '#000000', strokeWidth: 2 }}
                            />
                        )
                    })}
                </RechartsArea>
            </ResponsiveContainer>
        </div>
    )
}