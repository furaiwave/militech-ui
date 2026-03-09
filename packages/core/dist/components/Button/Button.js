import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Button = ({ variant = 'primary', size = 'md', loading = false, disabled = false, children, onClick, className = '', }) => {
    const base = [
        'mlt-btn',
        `mlt-btn--${variant}`,
        `mlt-btn--${size}`,
        loading ? 'mlt-btn--loading' : '',
        className,
    ].filter(Boolean).join(' ');
    return (_jsxs("button", { className: base, disabled: disabled || loading, onClick: onClick, children: [loading && _jsx("span", { className: "mlt-btn__spinner", "aria-hidden": "true" }), _jsx("span", { className: "mlt-btn__label", children: children })] }));
};
//# sourceMappingURL=Button.js.map