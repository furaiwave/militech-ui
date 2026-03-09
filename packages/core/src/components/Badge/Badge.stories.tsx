import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
    title: 'Militech/Badge',
    component: Badge,
}

export default meta
type Story = StoryObj<typeof Badge>

export const Active: Story = {
    args: { 
        variant: 'active',
        children: 'ACTIVE',
        pulse: true
    },
}

export const Threat: Story = {
    args: {
        variant: 'threat',
        children: 'THREAT DETECTED'
    },
}

export const Offline: Story = {
    args: {
        variant: 'offline',
        children: 'OFFLINE',
    },
}

export const Classified: Story = {
    args: {
        variant: 'classified',
        children: 'CLASSIFIED'
    },
}

export const Warning: Story = {
    args: {
        variant: 'warning',
        children: 'WARNING',
        pulse: true,
    }
}

export const AllBadges: Story = {
    render: () => (
        <div style = {{ display: 'flex', gap: 12, flexWrap: 'wrap', padding: 24, backgroundColor: '#050505' }}>
            <Badge variant="active" pulse>ACTIVE</Badge>
            <Badge variant="threat">THREAT</Badge>
            <Badge variant="offline">OFFLINE</Badge>
            <Badge variant="classified">CLASSIFIED</Badge>
            <Badge variant="warning" pulse>WARNING</Badge>
            <Badge variant="neutral">UNKNOWN</Badge>
        </div>
    )
}