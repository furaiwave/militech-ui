import type { Meta, StoryObj } from '@storybook/react'
import { Dialog } from './Dialog'
import { useState } from 'react'
import { Button } from '../Button/Button'

const meta: Meta<typeof Dialog> = {
    title: 'Militech/Dialog',
    component: Dialog,
    parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
    render: () => {
        const [open, setOpen] = useState(false)
        return(
            <div style={{ padding: 40, background: '#050505', minHeight: '100vh'}}>
                <Button onClick={() => setOpen(true)}>OPEN DIALOG</Button>
                <Dialog
                    open={open}
                    title="Deploy Operative"
                    subtitle="Mission Briefing"
                    onClose={() => setOpen(false)}
                    primaryAction={{ label: 'Deploy', onClick: () => setOpen(false) }}
                    secondaryAction={{ label: 'Abort', onClick: () => setOpen(false) }}
                >
                    Confirm deployment to TAU Ceti IV. All operatives must be equipped before entering the drop zone
                </Dialog>
            </div>
        )
    }
}

export const Danger: Story = {
    render: () => {
        const[open, setOpen] = useState(false)
        return (
            <div style={{ padding: 40, background: '#050505', minHeight: '100vh' }}>
                <Button variant="danger" confirmLabel="confirm" onClick={() => setOpen(true)}>SELF DESTRUCT</Button>
                <Dialog
                    open={open}
                    variant="danger"
                    title="Confirm Destruction"
                    subtitle="Warning // Irreversible"
                    onClose={() => setOpen(false)}
                    primaryAction={{ label: 'Confirm', onClick: () => setOpen(false) }}
                    secondaryAction={{ label: 'Cancel', onClick: () => setOpen(false) }}
                >
                    This action will permanently destroy all data in sector 12. This cannot be undone. 
                </Dialog>
            </div>
        )
    }
}

export const Classified: Story = {
    render: () => {
        const [open, setOpen] = useState(false)
        return (
            <div style={{ padding: 40, background: '#050505', minHeight: '100vh'}}>
                <Button onClick={() => setOpen(true)}>CLASSIFIED INTEL</Button>
                <Dialog
                    open={open}
                    variant="classified"
                    title="Operation Blacksite"
                    subtitle="Clearance Level 5"
                    onClose={() => setOpen(false)}
                    primaryAction={{ label: 'Acnkowledge', onClick: () => setOpen(false) }}
                >
                    This information is classified. Unathorized disclosure is punishable under UESC code 7.4.2
                </Dialog>
            </div>
        )
    } 
}