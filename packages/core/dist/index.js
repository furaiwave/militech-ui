"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/components/Button/Button.tsx
var _jsxruntime = require('react/jsx-runtime');
var Button = ({
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  children,
  onClick,
  className = ""
}) => {
  const base = [
    "mlt-btn",
    `mlt-btn--${variant}`,
    `mlt-btn--${size}`,
    loading ? "mlt-btn--loading" : "",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "button", { className: base, disabled: disabled || loading, onClick, children: [
    loading && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-btn__spinner", "aria-hidden": "true" }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-btn__label", children })
  ] });
};


exports.Button = Button;
//# sourceMappingURL=index.js.map