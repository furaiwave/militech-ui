import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import './Select.css';
export const Select = ({ options, value, multiple = false, placeholder = 'SELECT ONE', label, onChange, }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const selected = value ? Array.isArray(value) ? value : [value] : [];
    const isSelected = (val) => selected.includes(val);
    const handleSelect = (val) => {
        if (multiple) {
            const next = isSelected(val) ? selected.filter(v => v !== val) : [...selected, val];
            onChange?.(next);
        }
        else {
            onChange?.(val);
            setOpen(false);
        }
    };
    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);
    const selectedLabels = options.filter(o => isSelected(o.value)).map(o => o.label).join(', ');
    return (_jsxs("div", { className: "mlt-select", ref: ref, children: [label && _jsx("div", { className: "mlt-select__label", children: label }), _jsxs("div", { className: ['mlt-selevt__trigger', open ? 'mlt-select__trigger--open' : ''].filter(Boolean).join(''), onClick: () => setOpen(v => !v), children: [_jsx("span", { className: selectedLabels ? 'mlt-select__value' : 'mlt-select__placeholder', children: selectedLabels || placeholder }), _jsx("span", { className: "mlt-select__arrow", "aria-hidden": "true", children: open ? '∧' : '∨' })] }), open && (_jsx("div", { className: "mlt-select__dropdown", children: options.map(option => (_jsxs("div", { className: ['mlt-select__option', isSelected(option.value) ? 'mlt-select__option--selected' : ''].filter(Boolean).join(' '), onClick: () => handleSelect(option.value), children: [_jsx("span", { className: "mlt-select__check", children: isSelected(option.value ? '✓' : '') }), _jsx("span", { className: 'mlt-select__option-label', children: option.label })] }, option.value))) }))] }));
};
//# sourceMappingURL=Select.js.map