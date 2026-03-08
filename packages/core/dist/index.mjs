// src/components/Button/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs("button", { className: base, disabled: disabled || loading, onClick, children: [
    loading && /* @__PURE__ */ jsx("span", { className: "mlt-btn__spinner", "aria-hidden": "true" }),
    /* @__PURE__ */ jsx("span", { className: "mlt-btn__label", children })
  ] });
};
export {
  Button
};
//# sourceMappingURL=index.mjs.map