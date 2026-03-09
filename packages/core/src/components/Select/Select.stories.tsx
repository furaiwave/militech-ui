import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'
import { useState } from 'react'

const meta: Meta<typeof Select> = {
  title: 'Militech/Select',
  component: Select,
}

export default meta
type Story = StoryObj<typeof Select>

const shells = [
  { value: 'destroyer', label: 'Destroyer' },
  { value: 'vandal',    label: 'Vandal' },
  { value: 'recon',     label: 'Recon' },
  { value: 'assassin',  label: 'Assassin' },
  { value: 'triage',    label: 'Triage' },
  { value: 'thief',     label: 'Thief' },
]

export const Single: Story = {
  render: () => {
    const [val, setVal] = useState('')
    return (
      <div style={{ width: 300, background: '#050505', padding: 24 }}>
        <Select
          label="SHELL"
          options={shells}
          value={val}
          onChange={v => setVal(v as string)}
        />
      </div>
    )
  },
}

export const Multiple: Story = {
  render: () => {
    const [val, setVal] = useState<string[]>(['destroyer', 'recon'])
    return (
      <div style={{ width: 300, background: '#050505', padding: 24 }}>
        <Select
          label="SHELL"
          options={shells}
          value={val}
          multiple
          onChange={v => setVal(v as string[])}
        />
      </div>
    )
  },
}