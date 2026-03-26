import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarGroup } from './Avatar'

const meta: Meta<typeof Avatar> = {
    title: 'Militech/Avatar',
    compoenent: Avatar
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Initials: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 16, padding: 24, background: '#050505', alignItems: 'flex-end'}}>
            <Avatar name="Destroyer Unit" size="sm" status="online" />
            <Avatar name="Vandal Unit" size="md" status="threat" />
            <Avatar name="Recon Unit" size="lg" status="offline" />
            <Avatar name="Assassin Unit" size="xl" status="classified" />
        </div>
    )
}

export const HUD: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 32, padding: 40, background: '#050505'}}>
            <Avatar name="Destroyer" size="lg" status="online" hud />
            <Avatar name="Vandal" size="lg" status="threat" hud />
            <Avatar name="Recon" size="lg" status="offline" hud />
        </div> 
    )
}

export const Group: Story = {
    render: () => (
        <div style={{ padding: 24, background: '#050505' }}>
            <AvatarGroup 
                size="md"
                avatars={[
                    { name: 'Destroyer', status: 'online' },
                    { name: 'Vandal',    status: 'threat' },
                    { name: 'Recon',     status: 'online' },
                    { name: 'Assassin',  status: 'offline' },
                    { name: 'Triage',    status: 'online' },
                    { name: 'Thief',     status: 'classified' },
                ]}
                max={4}
            />
        </div>
    )
}