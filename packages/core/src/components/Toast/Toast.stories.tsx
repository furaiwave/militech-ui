import type { Meta, StoryObj } from '@storybook/react'
import { MilitechToaster, toast } from './Toast'
import { Button } from '../Button'

const meta: Meta = {
    title: 'Militech/Toast'
}

export default meta
type Story = StoryObj

export const Default: Story = {
    render: () => (
        <div style={{ padding: 24, background: '#050505', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <MilitechToaster />
            <Button onClick={() => toast.default('MISSION UPDATED', 'Objective data has been refreshed')}>
                DEFAULT
            </Button>
            <Button variant="terminal" onClick={() => toast.success('EXTRACTION COMPLETE', 'All operatives accounted for')}>
                SUCCESS
            </Button>
            <Button variant="danger" confirmLabel="confirm" onClick={() => toast.error('BREACH DETECTED', 'Unauthorized access in sector 12')}>
                ERROR
            </Button>
            <Button onClick={() => toast.warning('HEAT WARNING', 'Thermal signature exceeds safe threshold')}>
                WARNING
            </Button>
            <Button onClick={() => toast.info('INTEL RECEIVED', 'New data from Tau Ceti surface')}>
                INFO
            </Button>
            <Button onClick={() => toast.classified('CLASSIFIED', 'Eyes only — clearance level 5 required')}>
                CLASSIFIED
            </Button>
        </div>
    )
}