import type { Meta, StoryObj } from '@storybook/react'
import { AppBar } from './AppBar'

const meta: Meta<typeof AppBar> = {
    title: 'Militech/AppBar',
    component: AppBar,
}

export default meta
type Story = StoryObj<typeof AppBar>

export const Default: Story = {
    render: () => (
        <div style={{ padding: 40, background: '#050505' }}>
            <AppBar 
                items={[
                    { id: 'level',    value: '46',      accent: true,  icon: '◎' },
                    { id: 'rank',     value: 'III',                    icon: '•' },
                    { id: 'kills',    value: '0',                      icon: '⊡' },
                    { id: 'capacity', value: '0/140',                  icon: '≡' },
                    { id: 'credits',  value: '7,786',                  icon: '⊙' },
                ]}
            />
        </div>
    )
}

export const Minimal: Story = {
    render: () => (
        <div style={{ padding: 40, background: '#050505' }}>
            <AppBar 
                items={[
                    { id: 'unit',    value: 'ALPHA-7',  accent: true },
                    { id: 'sector',  value: 'SECTOR 4'               },
                    { id: 'threat',  value: '87%'                    },
                    { id: 'time',    value: '14:32'                   },
                ]}
            />
        </div>
    )
}