import type { Meta, StoryObj } from '@storybook/react'
import { Stepper } from './Stepper'

const meta: Meta<typeof Stepper> = {
    title: 'Militech/Stepper',
    component: Stepper,
}

export default meta
type Story = StoryObj<typeof Stepper>

const steps = [
    { id: 'deploy',    label: 'Deploy',    subtitle: 'Operative ready' },
    { id: 'infiltrate', label: 'Infiltrate', subtitle: 'Enter sector' },
    { id: 'extract',   label: 'Extract',   subtitle: 'Secure loot' },
    { id: 'exfil',     label: 'Exfil',     subtitle: 'Exit zone' },
]

export const Horizontal: Story = {
    render: () => (
        <div style={{ width: 600, padding: 40, background: '#050505' }}>
            <Stepper steps={steps} current={2} orientation="horizontal" />
        </div>
    )
}

export const Verical: Story = {
    render: () => (
        <div style={{ width: 300, padding: 40, background: '#050505' }}>
            <Stepper steps={steps} current={1} orientation="vertical" />
        </div>
    )
}

export const WithError: Story = {
    render: () => (
        <div style={{ width: 600, padding: 40, background: '#050505' }}>
            <Stepper 
                steps={[
                    { id: 'deploy',    label: 'Deploy',    status: 'completed' },
                    { id: 'infiltrate', label: 'Infiltrate', status: 'error', subtitle: 'Breach detected' },
                    { id: 'extract',   label: 'Extract',   status: 'pending' },
                    { id: 'exfil',     label: 'Exfil',     status: 'pending' },
                ]}
                current={1}
                orientation="horizontal"
            />
        </div>
    )
}