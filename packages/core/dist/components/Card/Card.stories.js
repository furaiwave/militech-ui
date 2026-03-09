import { Card } from './Card';
const meta = {
    title: 'Militech/Card',
    component: Card,
};
export default meta;
export const Active = {
    args: {
        title: 'UNIT ALPHA-7',
        subtitle: 'Combat Division / Sector 4',
        status: 'active',
        children: 'All systems operational. Threat assessment nominal. Weapons systems online and ready.',
    },
};
export const Alert = {
    args: {
        title: 'BREACH DETECTED',
        subtitle: 'Security Protocol 9',
        status: 'alert',
        children: 'Unauthorized access attempt detected in sector 12. Countermeasures deployed.',
    },
};
export const Classified = {
    args: {
        title: 'OPERATION BLACKSITE',
        subtitle: 'CLEARANCE LEVEL 5',
        status: 'classified',
        children: 'Redacted. Authorization required.',
    },
};
export const WithScanline = {
    args: {
        title: 'TACTICAL DISPLAY',
        subtitle: 'HUD Overlay Active',
        status: 'active',
        scanline: true,
        children: 'Scanline overlay enabled. Visual noise filter active.',
    },
};
//# sourceMappingURL=Card.stories.js.map