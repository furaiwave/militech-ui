import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from './Separator'

const meta: Meta<typeof Separator> = {
    title: 'Militech/Separator',
    component: Separator,
}

export default meta
type Story = StoryObj<typeof Separator>

export const Default: Story= {
    render: () => (
        <div style={{ width: 400, padding: 24, background: '#050505', display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Separator /> 
            <Separator variant="accent" />
            <Separator variant="danger" />
            <Separator variant="muted" />
        </div>
    )
}

export const WithLabel: Story = {
    render: () => (
        <div style={{ width: 400, padding: 24, background: '#050505', display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Separator label="SECTOR 4" variant="default" />
            <Separator label="CLASSIFIED" variant="accent" />
            <Separator label="THREAT DETECTED" variant="danger" />
            <Separator label="OR" variant="muted" />
        </div>
    )
}

export const Vertical: Story = {
    render: () => (
        <div style={{ height: 200, padding: 24, background: '#050505', display: 'flex', gap: 0, alignItems: 'stretch' }}>
            <div style={{ color: '#333', fontFamily: 'monospace', fontSize: 10, padding: '0 20px', display: 'flex', alignItems: 'center' }}>LEFT</div>
            <Separator orientation="vertical" variant="accent" />
            <div style={{ color: '#333', fontFamily: 'monospace', fontSize: 10, padding: '0 20px', display: 'flex', alignItems: 'center' }}>RIGHT</div>
            <Separator orientation="vertical" variant="danger" />
            <div style={{ color: '#333', fontFamily: 'monospace', fontSize: 10, padding: '0 20px', display: 'flex', alignItems: 'center' }}>FAR RIGHT</div>
        </div>    )
}