import type { Meta, StoryObj } from '@storybook/react'
import { AreaChart } from './AreaChart'

const meta: Meta<typeof AreaChart> = {
    title: 'Militech/AreaChart',
    component: AreaChart,
}

export default meta
type Story = StoryObj<typeof AreaChart>

const generateData = () => 
    ['NOV', 'DEC', 'JAN', 'FEB', 'MAR', 'APR'].flatMap((month, mi) => 
        Array.from({ length: 8 }, (_, i) => ({
            name: i === 0 ? month : '',
            value: Math.floor(80 + Math.random() * 20 + mi * 8 + i * 1.5),
        }))
    )

const data = generateData()

export const Default: Story = {
    render: () => (
        <div style={{ width: 600, background: '#050505', padding: 24 }}>
            <AreaChart 
                data={data}
                dataKey="value"
                xKey="name"
                label="ASSET PERFORMANCE"
                height={260}
            />
        </div>
    )
}

export const Threat: Story = {
    render: () => (
        <div style={{ width: 600, background: '#050505', padding: 24 }}>
            <AreaChart 
                data={data}
                dataKey="value"
                xKey="name"
                label="THREAT LEVEL OVER TIME"
                height={260}
            />
        </div>
    )
}

