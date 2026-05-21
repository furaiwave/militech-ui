import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "./Checkbox"
import { useState } from "react"

const meta: Meta<typeof Checkbox> = {
    title: 'Militech/Checkbox',
    component: Checkbox
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
    render: () => (
        <div style={{ padding: 24, background: '#050505', display: 'flex', flexDirection: 'column'}}>
            <Checkbox label="WEAPONS SYSTEM ONLINE" hint="Primary armament" defaultChecked />
            <Checkbox label="DEFENSE GRID" variant="success" defaultChecked />
            <Checkbox label="SELF DESTRUCT ENABLED" variant="danger" />
            <Checkbox label="INDETERMINATE STATE" indeterminate />
            <Checkbox label="DISABLED" disabled />
            <Checkbox label="DISABLED CHECKED" disabled defaultChecked />
        </div>
    )
}

export const Group: Story = {
    render: () => {
    const [selected, setSelected] = useState<string[]>(['destroyer'])
    const options = ['DESTROYER', 'VANDAL', 'RECON', 'ASSASSIN', 'TRIAGE']

    const toggle = (val: string) => {
      setSelected(prev =>
        prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]
      )
    }

    return (
      <div style={{ padding: 24, background: '#050505', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {options.map(opt => (
          <Checkbox
            key={opt}
            label={opt}
            checked={selected.includes(opt.toLowerCase())}
            onChange={() => toggle(opt.toLowerCase())}
          />
        ))}
      </div>
    )
  },
}