import { jsx as _jsx } from "react/jsx-runtime";
import { Select } from './Select';
import { useState } from 'react';
const meta = {
    title: 'Militech/Select',
    component: Select,
};
export default meta;
const shells = [
    { value: 'destroyer', label: 'Destroyer' },
    { value: 'vandal', label: 'Vandal' },
    { value: 'recon', label: 'Recon' },
    { value: 'assassin', label: 'Assassin' },
    { value: 'triage', label: 'Triage' },
    { value: 'thief', label: 'Thief' },
];
export const Single = {
    render: () => {
        const [val, setVal] = useState('');
        return (_jsx("div", { style: { width: 300, background: '#050505', padding: 24 }, children: _jsx(Select, { label: "SHELL", options: shells, value: val, onChange: v => setVal(v) }) }));
    },
};
export const Multiple = {
    render: () => {
        const [val, setVal] = useState(['destroyer', 'recon']);
        return (_jsx("div", { style: { width: 300, background: '#050505', padding: 24 }, children: _jsx(Select, { label: "SHELL", options: shells, value: val, multiple: true, onChange: v => setVal(v) }) }));
    },
};
//# sourceMappingURL=Select.stories.js.map