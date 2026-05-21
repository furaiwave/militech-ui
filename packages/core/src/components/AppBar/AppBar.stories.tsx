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
                    { id: 'level',    label: 'LV',   value: '47',     variant: 'light', onClick: () => console.log('level') },
                    { id: 'rank',     label: '·',    value: 'III',    variant: 'brown', onClick: () => console.log('rank') },
                    { id: 'kills',    label: 'KL',   value: '0',      onClick: () => console.log('kills') },
                    { id: 'capacity', label: 'CAP',  value: '10',     onClick: () => console.log('capacity') },
                    { id: 'credits',  label: 'CR',   value: '12,246', onClick: () => console.log('credits') },
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
                    { id: 'unit',   label: 'U',   value: 'ALPHA-7',  variant: 'light', onClick: () => console.log('unit') },
                    { id: 'sector', label: 'S',   value: 'SECTOR 4', onClick: () => console.log('sector') },
                    { id: 'threat', label: 'T',   value: '87%',      onClick: () => console.log('threat') },
                    { id: 'time',   label: 'T',   value: '14:32',    onClick: () => console.log('time') },
                ]}
            />
        </div>
    )
}
