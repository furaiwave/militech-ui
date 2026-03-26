import type { Meta, StoryObj } from '@storybook/react-vite'
import { Calendar } from './Calendar'

const meta: Meta<typeof Calendar> = {
    title: 'Militech/Calendar',
    component: Calendar
}

export default meta
type Story = StoryObj<typeof Calendar>

const events = [
    { date: '2026-03-05', label: 'Mission Alpha', variant: 'default' as const },
    { date: '2026-03-12', label: 'Threat Detected', variant: 'threat' as const },
    { date: '2026-03-18', label: 'Classified Op', variant: 'classified' as const },
    { date: '2026-03-24', label: 'Extraction', variant: 'success' as const },
]

export const Single: Story = {
    render: () => (
        <div style={{ padding: 24, background: '#050505' }}>
            <Calendar mode="single" events={events} />
        </div>
    ),
}

export const Range: Story = {
    render: () => (
        <div style={{ padding: 24, background: '#050505' }}>
            <Calendar mode="range" events={events} />
        </div>
    )
}