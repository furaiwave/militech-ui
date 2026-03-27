import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb } from './Breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
    title: 'Militech/Breadcrumb',
    component: Breadcrumb,
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
    render: () => (
        <div style={{ padding: 24, background: '#050505' }}>
            <Breadcrumb 
                items={[
                    { label: 'TEU CETI IV', href: "#" },
                    { label: 'SECTOR', href: "#"},
                    { label: 'UNIT ALPHA-7'}
                ]}
            />
        </div>
    )
}

export const CustomSeparator: Story = {
    render: () => (
        <div style={{ padding: 24, background: "#050505", display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Breadcrumb
                separator=">"
                items={[
                { label: 'SURFACE', href: '#' },
                { label: 'OPERATIONS', href: '#' },
                { label: 'BLACKSITE' },
                ]}
            />
            <Breadcrumb
                separator="∷"
                items={[
                { label: 'HOME',     href: '#' },
                { label: 'MISSIONS', href: '#' },
                { label: 'ACTIVE',   href: '#' },
                { label: 'DESTROYER' },
                ]}
            />
            <Breadcrumb
                separator="—"
                items={[
                { label: 'CLASSIFIED', href: '#' },
                { label: 'LEVEL 5' },
                ]}
            />
        </div>
    )
}