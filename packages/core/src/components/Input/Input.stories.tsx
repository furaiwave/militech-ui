import type { Meta, StoryObj } from '@storybook/react'
import { Input } from "./Input"

const meta: Meta<typeof Input> = {
    title: 'Militech/Input',
    component: Input
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
    render: () => (
        <div style={{ width: 320, background: '#050505', padding: 24, display: 'flex', flexDirection: 'column', gap: 20}}>
            <Input label="CALLSIGN" placeholder="ENTER CALLSIGN" />
            <Input label="SECTOR" placeholder="SECTOR ID" prefix=">" />
            <Input label="COORDINATES" placeholder="0.000" suffix="AU" />
            <Input label="THREAT LEVEL" placeholder="0-100" hint="VALUES ABOVE 80 TRIGGER ALERT" />
            <Input label="ACCESS CODE" placeholder="XXXXXXXX" error="INVALID ACCESS CODE" />
            <Input label="DISABLED" placeholder="LOCKED" />
        </div>
    ),
}

export const Terminal: Story = {
    render: () => (
        <div style={{ width: 320, background: '#050505', padding: 24}}>
            <Input 
                prefix=">"
                placeholder="ENTER COMMAND..."
                onEnter={(val) => console.log('CMD', val)} 
            />
        </div>
    )
}