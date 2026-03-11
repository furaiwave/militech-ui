import type { Meta, StoryObj } from '@storybook/react'
import { Table } from './Table'
import { Badge } from '../Badge'

const meta: Meta<typeof Table> = {
    title: 'Militech/Table',
    component: Table,
}

export default meta
type Story = StoryObj<typeof Table>

type Unit = {
    id: string
    callsign: string
    sector: string
    status: 'active' | 'offline' | 'threat'
    threat: number,
}

const data: Unit[] = [
    { id: 'U-001', callsign: 'DESTROYER', sector: 'SECTOR 4', status: 'active', threat: 12 },
    { id: 'U-002', callsign: 'VANDAL', sector: 'SECTOR 6', status: 'threat', threat: 45 },
    { id: 'U-003', callsign: 'RECON', sector: 'SECTOR 7', status: 'active', threat: 5 },
    { id: 'U-004', callsign: 'ASSASSIN', sector: 'SECTOR 45', status: 'offline', threat: 32 },
    { id: 'U-005', callsign: 'TRIAGE', sector: 'SECTOR 24', status: 'active', threat: 56 },
]

export const Default: Story = {
    render: () => (
        <div style={{ width: 640, background: '#050505', padding: 24 }}>
            <Table 
                label="UNIT REGISTRY"
                data={data}
                sortable
                columns={[
                    { key: 'id',       label: 'ID',       width: '80px'},
                    { key: 'callsign', label: 'CALLSIGN' },
                    { key: 'sector',   label: 'SECTOR' },
                    {
                        key: 'status',
                        label: 'STATUS',
                        render: (val) => (
                            <Badge variant={val as 'active' | 'offline' | 'threat' } pulse={val === 'active'}>
                                { String(val).toUpperCase()}
                            </Badge>
                        ),
                    },
                    { key: 'threat', label: 'THREAT %', align: 'right' },
                ]}
            />
        </div>
    )
}