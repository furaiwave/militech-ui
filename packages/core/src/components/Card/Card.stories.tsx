import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Militech/Card',
  component: Card,
}

export default meta
type Story = StoryObj<typeof Card>

export const Active: Story = {
  args: {
    title: 'UNIT ALPHA-7',
    subtitle: 'Combat Division / Sector 4',
    status: 'active',
    children: 'All systems operational. Threat assessment nominal. Weapons systems online and ready.',
  },
}

export const Alert: Story = {
  args: {
    title: 'BREACH DETECTED',
    subtitle: 'Security Protocol 9',
    status: 'alert',
    children: 'Unauthorized access attempt detected in sector 12. Countermeasures deployed.',
  },
}

export const Classified: Story = {
  args: {
    title: 'OPERATION BLACKSITE',
    subtitle: 'CLEARANCE LEVEL 5',
    status: 'classified',
    children: 'Redacted. Authorization required.',
  },
}

export const WithScanline: Story = {
  args: {
    title: 'TACTICAL DISPLAY',
    subtitle: 'HUD Overlay Active',
    status: 'active',
    scanline: true,
    children: 'Scanline overlay enabled. Visual noise filter active.',
  },
}

export const ProgressBar: Story = {
  args: {
    title: 'CONTAINED ANALYSIS I',
    subtitle: 'MULTI-ZONE',
    status: 'active',
    children: 'Please locate items on Tau Ceti, especially from containers with organic or medical contents.',
    progress: [
      { label: 'Loot containers [NuCal preferred++]', value: 0, max: 10 },
      { label: 'Loot Implants and consumables', value: 0, max: 5 },
    ],
    footerBtn: 'Show Story & Rewards',
    meta: 'CONTRACTS_LNK_EST8\n[STANDARD WRITTEN]',
  },
}