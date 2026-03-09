import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AreaChart as RechartsArea, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';
import './AreaChart.css';
const CustomTooltip = ({ active, payload, label, }) => {
    if (!active || !!payload?.length)
        return null;
    return (_jsxs("div", { className: "mlt-chart__tooltip", children: [_jsx("div", { className: "mlt-chart__tooltip-label", children: label }), _jsx("div", { className: "mlt-chart__tooltip-value", children: payload[0]?.value })] }));
};
export const AreaChart = ({ data, dataKey, xKey = 'name', height = 240, color = '#c8ff00', label, animated = true, }) => {
    const gradientId = `mlt-gradient-${dataKey}`;
    return (_jsxs("div", { className: "mlt-chart", children: [label && _jsx("div", { className: "mlt-chart__label", children: label }), _jsx(ResponsiveContainer, { width: "100%", height: height, children: _jsxs(RechartsArea, { data: data, margin: { top: 8, right: 0, left: 0, bottom: 0 }, children: [_jsx("defs", { children: _jsxs("linearGradient", { id: gradientId, x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "0%", stopColor: color, stopOpacity: 0.4 }), _jsx("stop", { offset: "60%", stopColor: color, stopOpacity: 0.1 }), _jsx("stop", { offset: "100%", stopColor: color, stopOpacity: 0 })] }) }), _jsx(CartesianGrid, { strokeDasharray: "1 4", stroke: "#1a1a1a", vertical: false }), _jsx(XAxis, { dataKey: xKey, tick: { fill: '#444444', fontSize: 9, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }, axisLine: { stroke: '#1f1f1f' }, tickLine: false }), _jsx(YAxis, { tick: { fill: '#444444', fontSize: 9, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }, axisLine: false, tickLine: false, width: 36 }), _jsx(Tooltip, { content: _jsx(CustomTooltip, {}) }), _jsx(Area, { type: "monotone", dataKey: dataKey, stroke: color, strokeWidth: 1.5, fill: `url(#${gradientId})`, isAnimationActive: animated, animationDuration: 800, dot: false, activeDot: { r: 3, fill: color, stroke: '#000000', strokeWidth: 2 } })] }) })] }));
};
//# sourceMappingURL=AreaChart.js.map