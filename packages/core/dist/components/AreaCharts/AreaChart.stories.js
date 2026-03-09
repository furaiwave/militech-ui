import { jsx as _jsx } from "react/jsx-runtime";
import { AreaChart } from './AreaChart';
const meta = {
    title: 'Militech/AreaChart',
    component: AreaChart,
};
export default meta;
const generateData = () => ['NOV', 'DEC', 'JAN', 'FEB', 'MAR', 'APR'].flatMap((month, mi) => Array.from({ length: 8 }, (_, i) => ({
    name: i === 0 ? month : '',
    value: Math.floor(80 + Math.random() * 20 + mi * 8 + i * 1.5),
})));
const data = generateData();
export const Default = {
    render: () => (_jsx("div", { style: { width: 600, background: '#050505', padding: 24 }, children: _jsx(AreaChart, { data: data, dataKey: "value", xKey: "name", label: "THREAT LEVEL OVER TIME", height: 260, color: "#ff3b3b" }) }))
};
//# sourceMappingURL=AreaChart.stories.js.map