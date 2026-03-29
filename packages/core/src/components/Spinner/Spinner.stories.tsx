import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
    title: 'Militech/Spinner',
    component: Spinner,
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Types: Story = {
    render: () => (
        <div style={{ padding: 40, background: '#050505', display: 'flex', gap: 48, alignItems: 'center' }}>
            <Spinner type="ring" label="RING" size="lg" />
            <Spinner type="radar" label="RADAR" size="lg" />
            <Spinner type="bars" label="BARS" size="lg" />
            <Spinner type="dots" label="DOTS" size="lg" />
        </div>
    )
}

export const Variant: Story = {
    render: () => (
        <div style={{ padding: 40, background: '#050505', display: 'flex', gap: 40, alignItems: 'center' }}>
            <Spinner type="ring" variant="default" label="DEFAULT" />
            <Spinner type="radar" variant="danger" label="DANGER" />
            <Spinner type="bars" variant="success" label="SUCCESS" />
            <Spinner type="dots" variant="warning" label="WARNING" />
        </div>
    )
}

export const Sizes: Story = {
    render: () => (
        <div style={{ padding: 40, background: '#050505', display: 'flex', gap: 32, alignItems: 'center' }}>
            <Spinner type="radar" size="sm" />
            <Spinner type="radar" size="md" />
            <Spinner type="radar" size="lg" />
            <Spinner type="radar" size="xl" />
        </div>
    )
}