import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
    title: 'Militech/Tabs',
    component: Tabs,
}

export default meta
type Story = StoryObj<typeof Tabs>

const items = [
    {
        id: 'overview',
        label: 'Overview',
        badge: 3,
        children: 'Destroyers seek conflict. Advanced weapons systems, a personal defense barricade, and increased movement abilities allow Destroyers to take the fight to any threat.',
      },
      {
        id: 'abilities',
        label: 'Abilities',
        children: 'Search and Destroy — Activate your shoulder-mounted missile pods. Dealing sustained damage to targets launches homing missiles.',
      },
      {
        id: 'stats',
        label: 'Stats',
        children: 'Threat Level: 87 // Mobility: 62 // Defense: 74 // Offense: 95',
      },
      {
        id: 'locked',
        label: 'Classified',
        disabled: true,
        children: '',
      },
]

export const Default: Story = {
    render: () => (
        <div style={{ width: 520, background: '#050505', padding: 24 }}>
            <Tabs items={items} variant="default" />
        </div>
    )
}

export const Undeline: Story = {
    render: () => (
        <div style={{ width: 520, background: "#050505", padding: 24 }}>
            <Tabs items={items} variant="underline" />
        </div>
    )
}

export const Filled: Story = {
    render: () => (
        <div style={{ width: 520, background: "#050505", padding: 24 }}>
            <Tabs items={items} variant="filled" />
        </div>
    )
}