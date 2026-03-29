import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from './ProgressBar'

const meta: Meta<typeof ProgressBar> = {
    title: 'Militech/ProgressBar',
    component: ProgressBar
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {
    render: () => (
        <div style={{ width: 400, padding: 24, background: '#050505', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <ProgressBar label="MISSION PROGRESS" value={65} max={100} />
            <ProgressBar label="THREAT LEVEL"     value={87} max={100} variant="danger" />
            <ProgressBar label="EXTRACTIONL"     value={42} max={100} variant="success" />
            <ProgressBar label="HEAT LEVEL"     value={73} max={100} variant="warning" />
        </div>
    )
}

export const Sizes: Story = {
    render: () => (
        <div style={{ width: 400, padding: 24, background: '#050505', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <ProgressBar label="SMALL"      value={60} size="sm" />
            <ProgressBar label="MEDIUM"     value={60} size="md" />
            <ProgressBar label="LARGE"      value={60} size="lg" />
        </div>
    )
}

export const Striped: Story = {
    render: () => (
        <div style={{ width: 400, padding: 24, background: '#050505', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <ProgressBar label="STRIPED DEFAULT"   value={70} striped />
            <ProgressBar label="STRIPED DANGER"    value={60} striped variant="danger" />
        </div>
    )
}