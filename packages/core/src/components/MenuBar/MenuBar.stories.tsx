import type { Meta, StoryObj } from '@storybook/react'
import { MenuBar } from './MenuBar'
import { useState } from 'react'

const meta: Meta<typeof MenuBar> = {
    title: 'Militech/MenuBar',
    component: MenuBar,
    parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof MenuBar>

const items = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '⊞',
    active: true,
    onClick: () => {},
  },
  {
    id: 'operations',
    label: 'Operations',
    icon: '⊛',
    badge: 3,
    children: [
      { id: 'active',    label: 'Active Missions', icon: '▶', onClick: () => {}, active: false },
      { id: 'pending',   label: 'Pending',         icon: '◌', onClick: () => {}, active: false },
      { id: 'completed', label: 'Completed',       icon: '✓', onClick: () => {}, active: false },
    ],
  },
  {
    id: 'units',
    label: 'Units',
    icon: '⊡',
    children: [
      { id: 'destroyer', label: 'Destroyer', icon: '◈', onClick: () => {}, active: false },
      { id: 'vandal',    label: 'Vandal',    icon: '◈', onClick: () => {}, active: false },
      { id: 'recon',     label: 'Recon',     icon: '◈', onClick: () => {}, active: false },
    ],
  },
  {
    id: 'intel',
    label: 'Intel',
    icon: '◉',
    badge: '!',
    onClick: () => {},
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: '⊙',
    onClick: () => {},
  },
  {
    id: 'classified',
    label: 'Classified',
    icon: '⊘',
    disabled: true,
    onClick: () => {},
  },
]

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '100vh', background: '#050505' }}>
      <MenuBar
        items={items}
        header={
          <div style={{ fontFamily: 'monospace', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#c8ff00' }}>
            @MILITECH/UI
          </div>
        }
        footer={
          <div style={{ fontFamily: 'monospace', fontSize: 9, color: '#333', letterSpacing: '0.1em' }}>
            v0.1.0 // TACTICAL
          </div>
        }
      />
      <div style={{ flex: 1, padding: 40, color: '#333', fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.1em' }}>
        CONTENT AREA
      </div>
    </div>
  ),
}

export const Collapsible: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
      <div style={{ display: 'flex', height: '100vh', background: '#050505' }}>
        <MenuBar
          items={items}
          collapsed={collapsed}
          onCollapse={setCollapsed}
          header={
            <div style={{ fontFamily: 'monospace', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#c8ff00' }}>
              @MILITECH/UI
            </div>
          }
        />
        <div style={{ flex: 1, padding: 40, color: '#333', fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.1em' }}>
          CONTENT AREA — click ‹ to collapse
        </div>
      </div>
    )
  },
}