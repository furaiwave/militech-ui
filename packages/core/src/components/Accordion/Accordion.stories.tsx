import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from './Accordion'

const meta: Meta<typeof Accordion> = {
    title: 'Militech/Accordion',
    component: Accordion,
}

export default meta
type Story = StoryObj<typeof Accordion>

const items = [
    {
        id: 'destroyer',
        title: 'Destroyer',
        subtitle: 'Combat Specialist',
        children: 'Advanced weapons systems, a personal defense barricade, and increased movement abilities allow Destroyers to take the fight to any threat or rival they encounter during a run.',
    },
    {
        id: 'vandal',
        title: 'Vandal',
        subtitle: 'Disruption Specialist',
        children: 'Vandals specialize in area denial and disruption. Their ability to control zones makes them invaluable in high-pressure extraction scenarios.',
    },
    {
        id: 'recon',
        title: 'Recon',
        subtitle: 'Intel Specialist',
        children: 'Recon operatives excel at gathering intelligence and moving unseen through hostile environments. Critical for multi-zone operations.',
    },
    {
        id: 'assassin',
        title: 'Assassin',
        subtitle: 'Elimination Specialist',
        children: 'Precision strikes and rapid elimination define the Assassin role. High risk, high reward — not for the faint of heart.',
    },
]

export const Default: Story = {
    render: () => (
        <div style={{ width: 520, background: '#050505', padding: 24}}>
            <Accordion items={items} />
        </div>
    )
}

export const MultipleOpen: Story = {
    render: () => (
        <div style={{ width: 520, background: '#050505', padding: 24}}>
            <Accordion 
                items={items}
                multiple
                defaultOpen={['destoyer', 'recon']}
            />
        </div>
    )
}