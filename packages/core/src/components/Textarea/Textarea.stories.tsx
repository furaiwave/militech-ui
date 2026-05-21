import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './Textarea'

const meta: Meta<typeof Textarea> = {
    title: 'Militech/Textarea',
    component: Textarea,
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
    render: () => (
        <div style={{ width: 400, padding: 24, background: '#050505', display: 'flex', flexDirection: 'column', gap: 12}}>
            <Textarea 
                label="MISSION BRIEF"
                placeholder="Enter mission details..."
                hint="MAXIMUM 500 CHARACTERS"
                maxLength={500}
            />
            <Textarea 
                label="THREAT ASSESSMENT"
                placeholder="Describe threat level..."
                variant="danger"
                error="INVALID INTEL - RECLASSIFY"
            />
            <Textarea 
                label="EXTRACTION PLAN"
                placeholder="Confirmed route..."
                variant="success"
                defaultValue="Route Alpha confirmed. Exfil at 0300."
            />
            <Textarea 
                label="CLASSIFIED"
                placeholder="Locked"
                disabled
            />
        </div>
    )
}