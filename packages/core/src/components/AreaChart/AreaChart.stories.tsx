import type { Meta, StoryObj } from '@storybook/react'
import { AreaChart } from './AreaChart'

const meta: Meta<typeof AreaChart> = {
    title: 'Militech/AreaChart',
    component: AreaChart,
}

export default meta
type Story = StoryObj<typeof AreaChart>

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL']

const data = months.map(m => ({
    name: m,
    alpha: Math.floor(80 + Math.random() * 60),
    bravo: Math.floor(40 + Math.random() * 60),
    charlie: Math.floor(20 + Math.random() * 60)
}))

export const Multiline: Story = {
    render: () => (
        <div style={{ width: 640, background: '#050505', padding: 24 }}>
            <AreaChart 
                data={data}
                label="SQUAD PERFOMANCE"
                height={280}
                showLegend
                series={[
                    { key: 'alpha', label: 'Alpha', color: '#c8ff00' },
                    { key: 'bravo', label: 'Bravo', color: '#00e5ff' },
                    { key: 'charlie', label: 'Charlie', color: '#ff3b3b' },
                ]}
            />
        </div>
    )
}

export const SingleLine: Story = {
    render: () => (
        <div style={{ width: 640, background: '#050505', padding: 24 }}>
            <AreaChart 
                data={data}
                label="ASSET PERFOMANCE"
                height={280}
                series={[{ key: 'alpha', color: '#c8ff00' }]}
            />
        </div>
    )
}

export const ThreatLevel: Story = {
    render: () => (
        <div style={{ width: 640, background: '#050505', padding: 24 }}>
            <AreaChart 
                data={data}
                label="THREAT ANALYSIS"
                height={280}
                showLegend
                series={[
                    { key: 'alpha', color: '#c8ff00' },
                    { key: 'bravo', color: '#00e5ff' },
                ]}
            />
        </div>
    )
}

