import type { Meta, StoryObj } from '@storybook/react'
import { Banner } from './Banner'

const meta: Meta<typeof Banner> = {
    title: 'Militech/Banner',
    component: Banner,
    parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof Banner>

export const Default: Story = {
    args: {
        eyebrow: 'Marathon // Season 01',
        title: 'TAU CETI IV',
        subtitle: 'Surface Operations Active',
        description: 'Deploy to the abandoned colony ship. Extract valuables. Survive the runners.',
        primaryAction: { label: 'Deploy Now' },
        secondaryAction: { label: 'View Intel' },
      },
}

export const WithBackground: Story = {
    args: {
      eyebrow: 'Classified Mission',
      title: 'Operation Blacksite',
      subtitle: 'Clearance Level 5 Required',
      description: 'All operatives report to staging area. This mission is non-negotiable.',
      primaryAction: { label: 'Accept Mission' },
      secondaryAction: { label: 'Abort' },
      backgroundImage: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1600&q=80',
      overlay: true,
    },
  }