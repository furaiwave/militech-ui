import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
    title: 'Militech/Skeleton',
    component: Skeleton,
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Text: Story = {
    render: () => (
        <div style={{ width: 320, padding: 24, background: '#050505' }}>
            <Skeleton variant="text" lines={4} />
        </div>
    )
}

export const Rect: Story = {
    render: () => (
        <div style={{ width: 320, padding: 24, background: '#050505', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Skeleton variant="rect" height={120} />
            <Skeleton variant="rect" height={40} width="60%" />
            <Skeleton variant="rect" height={20} width="40%" />
        </div>
    )
}

export const Card: Story = {
    render: () => (
        <div style={{ width: 320, padding: 24, background: '#050505' }}>
            <Skeleton variant="card" />
        </div>
    )
}

export const AllVariants: Story = {
    render: () => (
        <div style={{ width: 360, padding: 24, background: '#050505', display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
                <div style={{ fontSize: 9, letterSpacing: '0.2em', color: '#333', marginBottom: 10, fontFamily: 'monospace' }}>TEXT</div>
                <Skeleton variant="text" lines={3} />
            </div>
            <div>
                <div style={{ fontSize: 9, letterSpacing: '0.2em', color: '#333', marginBottom: 10, fontFamily: 'monospace' }}>RECT</div>
                <Skeleton variant="rect" height={60}/>
            </div>
            <div>
                <div style={{ fontSize: 9, letterSpacing: '0.2em', color: '#333', marginBottom: 10, fontFamily: 'monospace' }}>CARD</div>
                <Skeleton variant="card" />
            </div>
        </div>
    )
}