import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Badge } from './Badge';
const meta = {
    title: 'Militech/Badge',
    component: Badge,
};
export default meta;
export const Active = {
    args: {
        variant: 'active',
        children: 'ACTIVE',
        pulse: true
    },
};
export const Threat = {
    args: {
        variant: 'threat',
        children: 'THREAT DETECTED'
    },
};
export const Offline = {
    args: {
        variant: 'offline',
        children: 'OFFLINE',
    },
};
export const Classified = {
    args: {
        variant: 'classified',
        children: 'CLASSIFIED'
    },
};
export const Warning = {
    args: {
        variant: 'warning',
        children: 'WARNING',
        pulse: true,
    }
};
export const AllBadges = {
    render: () => (_jsxs("div", { style: { display: 'flex', gap: 12, flexWrap: 'wrap', padding: 24, backgroundColor: '#050505' }, children: [_jsx(Badge, { variant: "active", pulse: true, children: "ACTIVE" }), _jsx(Badge, { variant: "threat", children: "THREAT" }), _jsx(Badge, { variant: "offline", children: "OFFLINE" }), _jsx(Badge, { variant: "classified", children: "CLASSIFIED" }), _jsx(Badge, { variant: "warning", pulse: true, children: "WARNING" }), _jsx(Badge, { variant: "neutral", children: "UNKNOWN" })] }))
};
//# sourceMappingURL=Badge.stories.js.map