import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Badge.css';
export const Badge = ({ variant = 'neutral', children, pulse = false, className = '', }) => {
    return (_jsxs("span", { className: ['mlt-badge', `mlt-badge--${variant}`, className].filter(Boolean).join(' '), children: [pulse && _jsx("span", { className: "mlt-badge__pulse", "aria-hidde": "true" }), children] }));
};
//# sourceMappingURL=Badge.js.map