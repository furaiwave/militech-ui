import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
    title: 'Militech/Switch',
    component: Switch,
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
    render: () => (
        <div style={{ padding: 24, background: '#050505', display: 'flex', flexDirection: 'column', gap: 20}}>
            <Switch label="WEAPON SYSTEM" hint="Primary armament" defaultChecked />
            <Switch label="DEFENCE GRID" hint="Energy shield" variant="success" defaultChecked />
            <Switch label="SELF DESTRUCT" hint="Irreversible action" variant="danger" />
            <Switch label="OFFILE MODE" disabled />
        </div>
    )
}

export const Sizes: Story = {
    render: () => (
        <div style={{ padding: 24, background: "#050505", display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Switch size="sm" label="SMALL" defaultChecked />
            <Switch size="md" label="MEDIUM" defaultChecked />
            <Switch size="lg" label="LARGE" defaultChecked />
        </div>
    )
}

export const Controlled: Story = {
    render: () => {
        const [checked, setChecked] = React.useState(false)
        return (
            <div style={{ padding: 24, background: '#050505' }}>
                <Switch 
                    checked={checked}
                    onChange={setChecked}
                    label={ checked ? 'SYSTEM ONLINE' : 'SYSTEM OFFLINE' }
                    hint="Click to toogle"
                    variant={checked ? 'success' : 'default'}
                />
            </div>
        )
    }
}