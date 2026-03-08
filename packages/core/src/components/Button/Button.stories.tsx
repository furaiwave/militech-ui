import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import './Button.css'

const meta: Meta<typeof Button> = {
  title: 'Militech/Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'ENGAGE TARGET',
    variant: 'primary',
  },
}

export const Ghost: Story = {
  args: {
    children: 'STAND DOWN',
    variant: 'ghost',
  },
}

export const Danger: Story = {
  args: {
    children: 'SELF DESTRUCT',
    variant: 'danger',
    confirmLabel: 'confirm',
  },
}

export const Terminal: Story = {
  args: {
    children: 'EXECUTE CMD',
    variant: 'terminal',
  },
}

export const Loading: Story = {
  args: {
    children: 'SCANNING...',
    variant: 'primary',
    loading: true,
  },
}