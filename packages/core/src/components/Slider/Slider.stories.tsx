import type { Meta, StoryObj } from '@storybook/react-vite'
import { Slider } from './Slider'
import { useState } from 'react'

const meta: Meta<typeof Slider> = {
  title: 'Militech/Slider',
  component: Slider,
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: () => (
    <div style={{ width: 400, padding: 24, background: '#050505', display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Slider label="MISSION PROGRESS" defaultValue={65} />
      <Slider label="THREAT LEVEL"     defaultValue={87} variant="danger" />
      <Slider label="EXTRACTION"       defaultValue={42} variant="success" />
      <Slider label="HEAT LEVEL"       defaultValue={73} variant="warning" />
      <Slider label="DISABLED"         defaultValue={50} disabled />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [val, setVal] = useState(30)
    return (
      <div style={{ width: 400, padding: 24, background: '#050505' }}>
        <Slider
          label="POWER OUTPUT"
          value={val}
          onChange={setVal}
          min={0}
          max={200}
          step={5}
        />
      </div>
    )
  },
}