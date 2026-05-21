"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }// src/components/Button/Button.tsx
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

// src/components/Card/Card.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);

var Card = ({
  title,
  status,
  subtitle,
  children,
  className = "",
  scanline = false,
  progress,
  footerBtn,
  onFooterBtn,
  meta,
  variant = "dark"
}) => {
  const [hoveredProgress, setHoveredProgress] = _react2.default.useState(null);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: ["mlt-card", `mlt-card--${variant}`, scanline ? "mlt-card--scnaline" : "", className].filter(Boolean).join(" "), "data-status": status, children: [
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-card__header", children: [
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-card__header-left", children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-card__corner", "aria-hidden": "true" }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-card__title", children: title }),
          subtitle && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-card__subtitle", children: subtitle })
        ] })
      ] }),
      status && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: `mlt-catd__status mlt-card__status--${status}`, children: status.toUpperCase() })
    ] }),
    children && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-card__body", children }),
    _optionalChain([progress, 'optionalAccess', _2 => _2.map, 'call', _3 => _3((p, i) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      "div",
      {
        className: "mlt-card__progress-wrap",
        onMouseEnter: () => p.detail ? setHoveredProgress(i) : null,
        onMouseLeave: () => setHoveredProgress(null),
        children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-card__progress-label", children: p.label }),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-card__track", children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-card__progress-bar", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              "div",
              {
                className: "mlt-card__progress-fill",
                style: { width: `${p.value / p.max * 100}%` }
              }
            ) }),
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "span", { className: "mlt-card__progress-count", children: [
              p.value,
              "/",
              p.max
            ] })
          ] }),
          p.detail && hoveredProgress === i && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-card__objective", children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-card__object-title", children: p.detail.title }),
            p.detail.description.map((line, j) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { className: "mlt-card__objective-desc", children: line }, j)),
            p.detail.items && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "ul", { className: "mlt-card__objective-items", children: p.detail.items.map((item, j) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "li", { className: "mlt-card__objective-item", children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-card__objective-icon", children: "#" }),
              item.label
            ] }, j)) })
          ] })
        ]
      },
      i
    ))]),
    meta && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-card__meta", children: meta }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-card__footer", children: footerBtn && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "button", { className: "mlt-card__footer-btn", onClick: onFooterBtn, children: [
      footerBtn,
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { children: "\u24D8" })
    ] }) })
  ] });
};

// src/components/Select/Select.tsx


var Select = ({
  options,
  value,
  multiple = false,
  placeholder = "SELECT ONE",
  label,
  onChange
}) => {
  const [open, setOpen] = _react.useState.call(void 0, false);
  const ref = _react.useRef.call(void 0, null);
  const selected = value ? Array.isArray(value) ? value : [value] : [];
  const isSelected = (val) => selected.includes(val);
  const handleSelect = (val) => {
    if (multiple) {
      const next = isSelected(val) ? selected.filter((v) => v !== val) : [...selected, val];
      _optionalChain([onChange, 'optionalCall', _4 => _4(next)]);
    } else {
      _optionalChain([onChange, 'optionalCall', _5 => _5(val)]);
      setOpen(false);
    }
  };
  _react.useEffect.call(void 0, () => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const selectedLabels = options.filter((o) => isSelected(o.value)).map((o) => o.label).join(", ");
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-select", ref, children: [
    label && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-select__label", children: label }),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      "div",
      {
        className: ["mlt-selevt__trigger", open ? "mlt-select__trigger--open" : ""].filter(Boolean).join(""),
        onClick: () => setOpen((v) => !v),
        children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: selectedLabels ? "mlt-select__value" : "mlt-select__placeholder", children: selectedLabels || placeholder }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-select__arrow", "aria-hidden": "true", children: open ? "\u2227" : "\u2228" })
        ]
      }
    ),
    open && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-select__dropdown", children: options.map((option) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      "div",
      {
        className: ["mlt-select__option", isSelected(option.value) ? "mlt-select__option--selected" : ""].filter(Boolean).join(" "),
        onClick: () => handleSelect(option.value),
        children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-select__check", children: isSelected(option.value ? "\u2713" : "") }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-select__option-label", children: option.label })
        ]
      },
      option.value
    )) })
  ] });
};

// src/components/Badge/Badge.tsx

var Badge = ({
  variant = "neutral",
  children,
  pulse = false,
  className = ""
}) => {
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "span", { className: ["mlt-badge", `mlt-badge--${variant}`, className].filter(Boolean).join(" "), children: [
    pulse && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-badge__pulse", "aria-hidde": "true" }),
    children
  ] });
};

// src/components/AreaChart/AreaChart.tsx









var _recharts = require('recharts');

var CustomTooltip = ({
  active,
  payload,
  label
}) => {
  if (!active || !_optionalChain([payload, 'optionalAccess', _6 => _6.length])) return null;
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-chart__tooltip", children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-chart__tooltip-label", children: label }),
    payload.map((p, i) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-chart__tooltip-row", children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-chart__tooltip-dot", style: { background: p.color } }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-chart__tooltip-name", children: p.name }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-chart__tooltip-value", style: { color: p.color }, children: p.value })
    ] }, i))
  ] });
};
var CustomLegend = ({ payload }) => {
  if (!_optionalChain([payload, 'optionalAccess', _7 => _7.length])) return null;
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-chart__lgend", children: payload.map((p, i) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-chart__legend-item", children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-chart__legend-line", style: { background: p.color } }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-chart__legend-label", children: p.value })
  ] }, i)) });
};
var DEFAULT_COLORS = ["#c8ff00", "#00e5ff", "#ff3b3b", "#00ff88", "#ffaa00"];
var AreaChart = ({
  data,
  series,
  xKey = "name",
  height = 240,
  label,
  animated = true,
  showLegend = false
}) => {
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-chart", children: [
    label && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-chart__label", children: label }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _recharts.ResponsiveContainer, { width: "100%", height, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      _recharts.AreaChart,
      {
        data,
        margin: { top: 8, right: 0, left: 0, bottom: 0 },
        children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "defs", { children: series.map((s, i) => {
            const color = _nullishCoalesce(s.color, () => ( DEFAULT_COLORS[i % DEFAULT_COLORS.length]));
            return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "linearGradient", { id: `mlt-gradient-${s.key}`, x1: 0, y1: 0, x2: 0, y2: 1, children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "stop", { offset: "0%", stopColor: color, stopOpacity: 0.25 }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "stop", { offset: "50%", stopColor: color, stopOpacity: 0.08 }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "stop", { offset: "100%", stopColor: color, stopOpacity: 0 })
            ] }, s.key);
          }) }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            _recharts.CartesianGrid,
            {
              strokeDasharray: "1 6",
              stroke: "#c8ff0015",
              vertical: true
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            _recharts.XAxis,
            {
              dataKey: xKey,
              tick: { fill: "#c8ff00", fontSize: 9, fontFamily: "PPFraktion, monospace", letterSpacing: "0.1em" },
              axisLine: { stroke: "#1f1f1f" },
              tickLine: false
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            _recharts.YAxis,
            {
              tick: { fill: "#c8ff00", fontSize: 9, fontFamily: "PPFraktion, monospace", letterSpacing: "0.1em" },
              axisLine: false,
              tickLine: false,
              width: 36
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _recharts.Tooltip, { content: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CustomTooltip, {}) }),
          showLegend && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _recharts.Legend, { content: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CustomLegend, {}) }),
          series.map((s, i) => {
            const color = _nullishCoalesce(s.color, () => ( DEFAULT_COLORS[i % DEFAULT_COLORS.length]));
            return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              _recharts.Area,
              {
                type: "monotoneX",
                dataKey: s.key,
                name: _nullishCoalesce(s.label, () => ( s.key)),
                stroke: color,
                strokeWidth: 1.5,
                fill: `url(#mlt-gradient-${s.key})`,
                isAnimationActive: animated,
                animationDuration: 1200,
                animationEasing: "ease-out",
                dot: false,
                activeDot: { r: 4, fill: color, stroke: "#000000", strokeWidth: 2 }
              },
              s.key
            );
          })
        ]
      }
    ) })
  ] });
};

// src/components/Table/Table.tsx


var Table = ({
  columns,
  data: initialData,
  label,
  sortable = false,
  onRowClick,
  onDataChange
}) => {
  const [data, setData] = _react.useState.call(void 0, initialData);
  const [sortKey, setSortKey] = _react.useState.call(void 0, null);
  const [sortDir, setSortDir] = _react.useState.call(void 0, null);
  const [editingColumn, setEditingColumn] = _react.useState.call(void 0, null);
  const [editingCell, setEditingCell] = _react.useState.call(void 0, null);
  const [contextMenu, setContextMenu] = _react.useState.call(void 0, null);
  const contextRef = _react.useRef.call(void 0, null);
  _react.useEffect.call(void 0, () => {
    const handler = (e) => {
      if (contextRef.current && !contextRef.current.contains(e.target)) {
        setContextMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const handleSort = (key) => {
    if (!sortable || editingColumn) return;
    if (sortKey === key) {
      setSortDir((d) => d === "asc" ? "desc" : d === "desc" ? null : "asc");
      if (sortDir === "desc") setSortKey(null);
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };
  const handleHeaderRightClick = (e, key) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY, columnKey: key });
  };
  const handleStartEdit = () => {
    if (!contextMenu) return;
    setEditingColumn(contextMenu.columnKey);
    setContextMenu(null);
  };
  const handleStopEdit = () => {
    setEditingColumn(null);
    setEditingCell(null);
  };
  const handleCellChange = (rowIndex, key, value) => {
    const updated = data.map(
      (row, i) => i === rowIndex ? { ...row, [key]: value } : row
    );
    setData(updated);
    _optionalChain([onDataChange, 'optionalCall', _8 => _8(updated)]);
  };
  const sorted = _react2.default.useMemo(() => {
    if (!sortKey || !sortDir) return data;
    return [...data].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (av === bv) return 0;
      const cmp = av < bv ? -1 : 1;
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, [data, sortKey, sortDir]);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-table-wrap", onClick: () => editingColumn && handleStopEdit(), children: [
    label && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-table__label", children: label }),
    contextMenu && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      "div",
      {
        ref: contextRef,
        className: "mlt-table__context",
        style: { top: contextMenu.y, left: contextMenu.x },
        onClick: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-table__context-item", onClick: handleStartEdit, children: "EDIT COLUMN" }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-table__context-item mlt-table__context-item--muted", children: "CANCEL" })
        ]
      }
    ),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "table", { className: "mlt-table", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "thead", { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "tr", { children: columns.map((col) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
        "th",
        {
          className: [
            "mlt-table__th",
            sortable ? "mlt-table__th--sortable" : "",
            sortKey === col.key ? "mlt-table__th--active" : "",
            editingColumn === col.key ? "mlt-table__th--editing" : "",
            col.align ? `mlt-table__cell--${col.align}` : ""
          ].filter(Boolean).join(" "),
          style: { width: col.width },
          onClick: () => handleSort(col.key),
          onContextMenu: (e) => handleHeaderRightClick(e, col.key),
          children: [
            col.label,
            editingColumn === col.key && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-table__editing-indicator", children: " \u270E" }),
            sortable && editingColumn !== col.key && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-table__sort-icon", children: sortKey === col.key ? sortDir === "asc" ? " \u2227" : " \u2228" : " \xB7" })
          ]
        },
        col.key
      )) }) }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "tbody", { children: sorted.map((row, i) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "tr",
        {
          className: ["mlt-table__tr", onRowClick ? "mlt-table__tr--clickable" : ""].filter(Boolean).join(" "),
          onClick: () => !editingColumn && _optionalChain([onRowClick, 'optionalCall', _9 => _9(row)]),
          children: columns.map((col) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            "td",
            {
              className: [
                "mlt-table__td",
                editingColumn === col.key ? "mlt-table__td--editing" : "",
                col.align ? `mlt-table__cell--${col.align}` : ""
              ].filter(Boolean).join(" "),
              onClick: () => {
                if (editingColumn === col.key) {
                  setEditingCell({ row: i, key: col.key });
                }
              },
              children: editingColumn === col.key && _optionalChain([editingCell, 'optionalAccess', _10 => _10.row]) === i && _optionalChain([editingCell, 'optionalAccess', _11 => _11.key]) === col.key ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                "input",
                {
                  className: "mlt-table__input",
                  defaultValue: String(_nullishCoalesce(row[col.key], () => ( ""))),
                  autoFocus: true,
                  onChange: (e) => handleCellChange(i, col.key, e.target.value),
                  onBlur: () => setEditingCell(null),
                  onKeyDown: (e) => e.key === "Enter" && setEditingCell(null),
                  onClick: (e) => e.stopPropagation()
                }
              ) : col.render && editingColumn !== col.key ? col.render(row[col.key], row) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { children: String(_nullishCoalesce(row[col.key], () => ( ""))) })
            },
            col.key
          ))
        },
        i
      )) })
    ] }),
    editingColumn && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-table__edit-bar", children: [
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "span", { children: [
        "EDITING: ",
        _optionalChain([columns, 'access', _12 => _12.find, 'call', _13 => _13((c) => c.key === editingColumn), 'optionalAccess', _14 => _14.label])
      ] }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "button", { className: "mlt-table__edit-done", onClick: handleStopEdit, children: "DONE \u2713" })
    ] })
  ] });
};

// src/components/Input/Input.tsx


var Input = ({
  label,
  placeholder = "",
  value,
  defaultValue,
  variant = "default",
  size = "md",
  disabled = false,
  readOnly = false,
  prefix,
  suffix,
  hint,
  error,
  onChange,
  onEnter,
  className = ""
}) => {
  const [focused, setFocused] = _react.useState.call(void 0, false);
  const resolvedVariant = error ? "danger" : variant;
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: ["mlt-input-wrap", className].filter(Boolean).join(" "), children: [
    label && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "label", { className: "mlt-input__label", children: label }),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: [
      "mlt-input__field",
      `mlt-input__field--${resolvedVariant}`,
      `mlt-input__field--${size}`,
      focused ? "mlt-input__field--focused" : "",
      disabled ? "mlt-input__field--disabled" : ""
    ].filter(Boolean).join(" "), children: [
      prefix && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-input__prefix", children: prefix }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "input",
        {
          className: "mlt-input__el",
          value,
          defaultValue,
          placeholder,
          disabled,
          readOnly,
          onFocus: () => setFocused(true),
          onBlur: () => setFocused(false),
          onChange: (e) => _optionalChain([onChange, 'optionalCall', _15 => _15(e.target.value)]),
          onKeyDown: (e) => {
            if (e.key === "Enter") _optionalChain([onEnter, 'optionalCall', _16 => _16(e.currentTarget.value)]);
          }
        }
      ),
      suffix && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-input__suffix", children: suffix })
    ] }),
    error && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-input__error", children: error }),
    !error && hint && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-input__hint", children: hint })
  ] });
};

// src/components/Banner/Banner.tsx

var Banner = ({
  eyebrow,
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  overlay = true,
  className = ""
}) => {
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "section",
    {
      className: ["mlt-banner", className].filter(Boolean).join(" "),
      style: backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : void 0,
      children: [
        overlay && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-banner__overlay", "aria-hidden": "true" }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-banner__corner mlt--banner__corner--tl", "aria-hidden": "true" }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-banner__corner mlt-corner__corner--br", "aria-hidden": "true" }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-banner__scanline", "aria-hidden": "true" }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-banner__content", children: [
          eyebrow && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-banner__eyebrow", children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-banner__eyebrow-line" }),
            eyebrow,
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-banner__eyebrow-line" })
          ] }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "h1", { className: "mlt-banner__title", children: title }),
          subtitle && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-banner__subtitle", children: subtitle }),
          description && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { className: "mlt-banner__description", children: description }),
          (primaryAction || secondaryAction) && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-banner__actions", children: [
            primaryAction && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "button", { className: "mlt-banner__btn mlt-banner__btn--primary", onClick: primaryAction.onClick, children: primaryAction.label }),
            secondaryAction && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "button", { className: "mlt-banner__btn mlt-banner__btn--secondary", onClick: secondaryAction.onClick, children: secondaryAction.label })
          ] })
        ] }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-banner__footer", "aria-hidden": "true", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-banner__footer-text", children: "TAU CETI IV // SURFACE DATA" }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-banner__footer-coords", children: "37.2\xB0N 142.8\xB0E" })
        ] })
      ]
    }
  );
};

// src/components/Dialog/Dialog.tsx


var Dialog = ({
  open,
  variant = "default",
  title,
  subtitle,
  children,
  primaryAction,
  secondaryAction,
  onClose,
  closeOnOverlay = true,
  className = ""
}) => {
  _react.useEffect.call(void 0, () => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") _optionalChain([onClose, 'optionalCall', _17 => _17()]);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);
  _react.useEffect.call(void 0, () => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  if (!open) return null;
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "div",
    {
      className: "mlt-dialog__backdrop",
      onClick: closeOnOverlay ? onClose : void 0,
      children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
          "div",
          {
            className: ["mlt-dialog", `mlt-dialog--${variant}`, className].filter(Boolean).join(" "),
            onClick: (e) => e.stopPropagation(),
            role: "dialog",
            "aria-modal": "true",
            children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-dialog__corner mlt-dialog__corner--tl", "aria-hidden": "true" }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-dialog__corner mlt-dialog__corner--tr", "aria-hidden": "true" }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-dialog__corner mlt-dialog__corner--bl", "aria-hidden": "true" }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-dialog__corner mlt-dialog__corner--br", "aria-hidden": "true" })
            ]
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-dialog__header", children: [
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-dialog__header-left", children: [
            subtitle && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-dialog__subtitle", children: subtitle }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-dialog__title", children: title })
          ] }),
          onClose && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "button", { className: "mlt-dialog__close", onClick: onClose, "aria-label": "Close", children: "\u2715" })
        ] }),
        children && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-dialog__body", children }),
        (primaryAction || secondaryAction) && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-dialog__footer", children: [
          secondaryAction && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "button", { className: "mlt-dialog__btn mlt-dialog__btn--secondary", onClick: secondaryAction.onClick, children: _optionalChain([secondaryAction, 'optionalAccess', _18 => _18.label]) }),
          primaryAction && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "button", { className: "mlt-dialog__btn mlt-dialog__btn--primary", onClick: _optionalChain([primaryAction, 'optionalAccess', _19 => _19.onClick]), children: primaryAction.label })
        ] })
      ]
    }
  );
};

// src/components/Accordion/Accordion.tsx


var Accordion = ({
  items,
  multiple = false,
  defaultOpen = [],
  className = ""
}) => {
  const [openIds, setOpenIds] = _react.useState.call(void 0, defaultOpen);
  const toggle = (id) => {
    if (multiple) {
      setOpenIds(
        (prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => prev.includes(id) ? [] : [id]);
    }
  };
  const isOpen = (id) => openIds.includes(id);
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: ["mlt-accordion", className].filter(Boolean).join(" "), children: items.map((item, index) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "div",
    {
      className: ["mlt-accordion__item", isOpen(item.id) ? "mlt-accordion__item--open" : ""].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
          "div",
          {
            className: "mlt-accordion__trigger",
            onClick: () => toggle(item.id),
            role: "button",
            "aria-expanded": isOpen(item.id),
            tabIndex: 0,
            onKeyDown: (e) => e.key === "Enter" && toggle(item.id),
            children: [
              /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-accordion__trigger--left", children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-accordion__index", children: String(index + 1).padStart(2, "0") }),
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { children: [
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-accordion__title", children: item.title }),
                  item.subtitle && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-accordion__subtitle", children: item.subtitle })
                ] })
              ] }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-accordion__icon", "aria-hidden": "true", children: isOpen(item.id) ? "\u2227" : "\u2228" })
            ]
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: ["mlt-accordion__body", isOpen(item.id) ? "mlt-accordion__body--open" : ""].filter(Boolean).join(" "), children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-accordion__content", children: item.children }) })
      ]
    },
    item.id
  )) });
};

// src/components/Avatar/Avatar.tsx

var getInitials = (name) => name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
var Avatar = ({
  src,
  name,
  status,
  size = "md",
  hud = false,
  className = ""
}) => {
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: [
    "mlt-avatar",
    `mlt-avatar--${size}`,
    hud ? "mly-avatar--hud" : "",
    status ? `mlt-avatar--${status}` : "",
    className
  ].filter(Boolean).join(" "), children: [
    hud && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-avatar__corner mlt-avatar__corner--tl", "aria-hidden": "true" }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-avatar__corner mlt-avatar__corner--tr", "aria-hidden": "true" }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-avatar__corner mlt-avatar__corner--bl", "aria-hidden": "true" }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-avatar__corner mlt-avatar__corner--br", "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-avatar__inner", children: src ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "img", { src, alt: _nullishCoalesce(name, () => ( "avatar")), className: "mlt-avatar__img" }) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-avatar__initials", children: name ? getInitials(name) : "??" }) }),
    status && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: `mlt-avatar_status mlt-avatar__status--${status}`, "aria-label": status }),
    hud && name && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-avatar__hud-label", children: name })
  ] });
};
var AvatarGroup = ({
  avatars,
  max = 4,
  size = "md"
}) => {
  const visible = avatars.slice(0, max);
  const rest = avatars.length - max;
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-avatar-group", children: [
    visible.map((avatar, i) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Avatar, { ...avatar, size, className: "mlt-avatar-group__item" }, i)),
    rest > 0 && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: `mlt-avatar mlt-avatar--${size} mlt-avatar-group__item mlt-avatar-group__rest`, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-avatar__inner", children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "span", { className: "mlt-avatar__initials", children: [
      "+",
      rest
    ] }) }) })
  ] });
};

// src/components/Calendar/Calendar.tsx


var DAYS = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
var MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
var toKey = (y, m, d) => `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
var getDaysIsMonth = (year, month) => new Date(year, month + 1, 0).getDate();
var getFirstDayOfMonth = (year, month) => {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
};
var Calendar = ({
  mode = "single",
  events = [],
  onSelect,
  className = ""
}) => {
  const today = /* @__PURE__ */ new Date();
  const [viewYear, setViewYear] = _react.useState.call(void 0, today.getFullYear());
  const [viewMonth, setViewMonth] = _react.useState.call(void 0, today.getMonth());
  const [selected, setSelected] = _react.useState.call(void 0, []);
  const [hovered, setHovered] = _react.useState.call(void 0, null);
  const [showYearPicker, setShowYearPicker] = _react.useState.call(void 0, false);
  const [showMonthPicker, setShowMonthPicker] = _react.useState.call(void 0, false);
  const yearPickerRef = _react.useRef.call(void 0, null);
  const monthPickerRef = _react.useRef.call(void 0, null);
  const daysInMonth = getDaysIsMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
  const years = Array.from({ length: 210 }, (_, i) => today.getFullYear() - 100 + i);
  _react.useEffect.call(void 0, () => {
    if (showYearPicker && yearPickerRef.current) {
      const activeItem = yearPickerRef.current.querySelector(".mlt-calendar__year-item--active");
      _optionalChain([activeItem, 'optionalAccess', _20 => _20.scrollIntoView, 'call', _21 => _21({ block: "center" })]);
    }
    if (showMonthPicker && monthPickerRef.current) {
      const activeItem = monthPickerRef.current.querySelector(".mlt-calendar__month-item--active");
      _optionalChain([activeItem, 'optionalAccess', _22 => _22.scrollIntoView, 'call', _23 => _23({ block: "center" })]);
    }
  }, [showYearPicker, showMonthPicker]);
  const eventMap = events.reduce((acc, e) => {
    acc[e.date] = e;
    return acc;
  }, {});
  const handleDayClick = (key) => {
    if (mode === "single") {
      setSelected([key]);
      _optionalChain([onSelect, 'optionalCall', _24 => _24(key)]);
    } else {
      if (selected.length === 0 || selected.length === 2) {
        setSelected([key]);
      } else {
        const range = selected[0] < key ? [selected[0], key] : [key, selected[0]];
        setSelected(range);
        _optionalChain([onSelect, 'optionalCall', _25 => _25(range)]);
      }
    }
  };
  const isSelected = (key) => selected.includes(key);
  const isInRange = (key) => {
    if (mode !== "range" || selected.length < 1) return false;
    const start = selected[0];
    const end = selected.length === 2 ? selected[1] : hovered;
    if (!end) return false;
    const [s, e] = start < end ? [start, end] : [end, start];
    return key > s && key < e;
  };
  const isRangeStart = (key) => mode === "range" && selected[0] === key;
  const isRangeEnd = (key) => mode === "range" && selected[1] === key;
  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewYear((y) => y - 1);
      setViewMonth(11);
    } else setViewMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewYear((y) => y + 1);
      setViewMonth(0);
    } else setViewMonth((m) => m + 1);
  };
  const todayKey = toKey(today.getFullYear(), today.getMonth(), today.getDate());
  const cells = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1)
  ];
  while (cells.length % 7 !== 0) cells.push(null);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: ["mlt-calendar", className].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-calendar__header", children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "button", { className: "mlt-calendar__nav", onClick: prevMonth, children: "\u2039" }),
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-calendar__month-label", children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
          "span",
          {
            className: "mlt-calendar__month-btn",
            onClick: () => {
              setShowMonthPicker((v) => !v);
              setShowYearPicker(false);
            },
            children: [
              MONTHS[viewMonth],
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-calendar__year-arrow", children: showMonthPicker ? " \u2227" : " \u2228" })
            ]
          }
        ),
        " ",
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
          "span",
          {
            className: "mlt-calendar__year mlt-calendar__year-btn",
            onClick: () => {
              setShowYearPicker((v) => !v);
              setShowMonthPicker(false);
            },
            children: [
              viewYear,
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-calendar__year-arrow", children: showMonthPicker ? " \u2227" : " \u2228" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "button", { className: "mlt-calendar__nav", onClick: nextMonth, children: "\u203A" })
    ] }),
    showMonthPicker && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-calendar__month-picker", ref: monthPickerRef, children: MONTHS.map((month, i) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "div",
      {
        className: ["mlt-calendar__month-item", i === viewMonth ? "mlt-calendar__month-item--active" : ""].filter(Boolean).join(" "),
        onClick: () => setViewMonth(i),
        children: month
      },
      month
    )) }),
    showYearPicker && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-calendar__year-picker", ref: yearPickerRef, children: years.map((y) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "div",
      {
        className: ["mlt-calendar__year-item", y === viewYear ? "mlt-calendar__year-item--active" : ""].filter(Boolean).join(" "),
        onClick: () => setViewYear(y),
        children: y
      },
      y
    )) }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-calendar__weekdays", children: DAYS.map((d) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-calendar__weekday", children: d }, d)) }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-calendar__grid", children: cells.map((day, i) => {
      if (!day) return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-calendar__cell mlt-calendar-calendar__cell--empty" }, i);
      const key = toKey(viewYear, viewMonth, day);
      const event = eventMap[key];
      const isToday = key === todayKey;
      return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
        "div",
        {
          className: [
            "mlt-calendar__cell",
            isToday ? "mlt-calendar__cell--today" : "",
            isSelected(key) ? "mlt-calendar__cell--sselected" : "",
            isInRange(key) ? "mlt-calendar__cell--in-range" : "",
            isRangeStart(key) ? "mlt-calendar__cell--range-end" : "",
            isRangeEnd(key) ? "mlt-calendar__cell--range-end" : "",
            event ? `mlt-calendar__cell mlt-calendar__cell--event-${_nullishCoalesce(event.variant, () => ( "dufault"))}` : ""
          ].filter(Boolean).join(" "),
          onClick: () => handleDayClick(key),
          onMouseEnter: () => setHovered(key),
          onMouseLeave: () => setHovered(null),
          children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-calendar__day", children: day }),
            event && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-calendar__event-dot" })
          ]
        },
        key
      );
    }) }),
    events.filter((e) => e.date.startsWith(`${viewYear}-${String(viewMonth + 1).padStart(2, "0")}`)).length > 0 && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-calendar__events", children: events.filter((e) => e.date.startsWith(`${viewYear}-${String(viewMonth + 1).padStart(2, "0")}`)).map((e, i) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: `mlt-calendar__event-item mlt-calendar__event-item--${_nullishCoalesce(e.variant, () => ( "dufault"))}`, children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-calendar__event-date", children: e.date.split("_")[2] }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-calendar__event-label", children: e.label })
    ] }, i)) })
  ] });
};

// src/components/Breadcrump/Breadcrumb.tsx

var Breadcrumb = ({
  items,
  separator = "//",
  className = ""
}) => {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: ["mlt-breadcrumb", className].filter(Boolean).join(" "), "aria-label": "breadcrumb", children: items.map((item, i) => {
    const isLast = i === items.length - 1;
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "span", { className: "mlt-breadcrumb__item", children: [
      isLast ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-breadcrumb__label mlt-breadcrumb__label--active", children: item.label }) : item.href ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "a", { href: item.href, className: "mlt-breadcrumb__label mlt-breadcrumb__label--link", children: item.label }) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "span",
        {
          className: ["mlt-breadcrumb__label", item.onClick ? "mlt-breadcrumb__label--link" : ""].filter(Boolean).join(" "),
          onClick: item.onClick,
          children: item.label
        }
      ),
      !isLast && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-breadcrumb__separator", "aria-hidden": "true", children: separator })
    ] }, i);
  }) });
};

// src/components/Tabs/Tabs.tsx


var Tabs = ({
  items,
  variant = "default",
  defaultTab = "",
  onChange,
  className = ""
}) => {
  const [active, setActive] = _react.useState.call(void 0, _nullishCoalesce(_nullishCoalesce(defaultTab, () => ( _optionalChain([items, 'access', _26 => _26[0], 'optionalAccess', _27 => _27.id]))), () => ( "")));
  const handleChange = (id) => {
    setActive(id);
    _optionalChain([onChange, 'optionalCall', _28 => _28(id)]);
  };
  const activeItem = items.find((i) => i.id === active);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: ["mlt-tabs", `mlt-tabs--${variant}`, className].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-tabs__list", role: "tablist", children: items.map((item) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      "button",
      {
        role: "tab",
        "aria-selected": active === item.id,
        disabled: item.disabled,
        className: [
          "mlt-tabs__tab",
          active === item.id ? "mlt-tabs__tab--active" : "",
          item.disabled ? "mlt-tabs__tab--disabled" : ""
        ].filter(Boolean).join(" "),
        onClick: () => !item.disabled && handleChange(item.id),
        children: [
          item.label,
          item.badge !== void 0 && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Badge, { variant: "active", children: item.badge })
        ]
      },
      item.id
    )) }),
    variant === "underline" && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-tabs__underline-track", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "div",
      {
        className: "mlt-tabs__underline-indicator",
        style: {
          width: `${100 / items.length}%`,
          transform: `translateX(${items.findIndex((i) => i.id === active) * 100}%)`
        }
      }
    ) }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-tabs__panel", role: "tabpanel", children: _optionalChain([activeItem, 'optionalAccess', _29 => _29.children]) })
  ] });
};

// src/components/Switch/Switch.tsx


var Switch = ({
  checked,
  defaultChecked = false,
  disabled = false,
  size = "md",
  variant = "default",
  label,
  hint,
  onChange,
  className
}) => {
  const [internal, setInternal] = _react.useState.call(void 0, defaultChecked);
  const isControlled = checked !== void 0;
  const isChecked = isControlled ? checked : internal;
  const handleClick = () => {
    if (disabled) return;
    const next = !isChecked;
    if (!isControlled) setInternal(next);
    _optionalChain([onChange, 'optionalCall', _30 => _30(next)]);
  };
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: ["mlt-switch-wrap", disabled ? "mlt-switch-wrap--disabled" : "", className].filter(Boolean).join(" "), children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-awitch-content", children: [
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      "button",
      {
        role: "switch",
        "aria-checked": isChecked,
        disabled,
        className: [
          "mlt-switch",
          `mlt-switch--${size}`,
          `mlt-switch--${variant}`,
          isChecked ? "mlt-switch--on" : "mlt-switch--off"
        ].filter(Boolean).join(" "),
        onClick: handleClick,
        children: [
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "span", { className: "mlt-switch__track", children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-switch__track-label mlt-switch__track-label--on", children: "ON" }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-switch__track-label mlt-switch__track-label--off", children: "OFF" })
          ] }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-switch__thumb" })
        ]
      }
    ),
    (label || hint) && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-switch__info", children: [
      label && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-switch__label", children: label }),
      hint && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-switch__hint", children: hint })
    ] })
  ] }) });
};

// src/components/Skeleton/Skeleton.tsx

var Skeleton = ({
  variant = "rect",
  width,
  height,
  lines = 3,
  className,
  animate = true
}) => {
  if (variant === "text") {
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: ["mlt-skeleton-text", className].filter(Boolean).join(" "), children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "div",
      {
        className: ["mlt-skeleton", animate ? "mlt-skeleton--animate" : ""].filter(Boolean).join(" "),
        style: {
          width: i === lines - 1 ? "60%" : "100%",
          height: 10
        }
      },
      i
    )) });
  }
  if (variant === "card") {
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, Card, { title: "", variant: "dark", className, children: [
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-skeleton-card__header", children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: ["mlt-skeleton", animate ? "mlt-skeleton--animate" : ""].filter(Boolean).join(" "), style: { width: 40, height: 40 } }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-skeleton-card__header-lines", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: ["mlt-skeleton", animate ? "mlt-skeleton--animate" : ""].filter(Boolean).join(" "), style: { width: "60%", height: 10 } }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: ["mlt-skeleton", animate ? "mlt-skeleton--animate" : ""].filter(Boolean).join(" "), style: { width: "40%", height: 8 } })
        ] })
      ] }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-skeleton-card__body", children: [100, 100, 70].map((w, i) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "div",
        {
          className: ["mlt-skeleton", animate ? "mlt-skeleton--animate" : ""].filter(Boolean).join(" "),
          style: { width: `${w}%`, height: 9 }
        },
        i
      )) }),
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-skeleton-card__footer", children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: ["mlt-skeleton", animate ? "mlt-skeleton--animate" : ""].filter(Boolean).join(""), style: { width: 80, height: 28 } }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: ["mlt-skeleton", animate ? "mlt-skeleton--animate" : ""].filter(Boolean).join(""), style: { width: 80, height: 28 } })
      ] })
    ] });
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      className: [
        "mlt-skeleton",
        `mlt-skeleton--${variant}`,
        animate ? "mlt-skeleton--animate" : "",
        className
      ].filter(Boolean).join(" "),
      style: {
        width: _nullishCoalesce(width, () => ( "100%")),
        height: _nullishCoalesce(height, () => ( (variant === "circle" ? 48 : 16)))
      }
    }
  );
};

// src/components/ProgressBar/ProgressBar.tsx

var ProgressBar = ({
  value,
  max = 100,
  variant = "default",
  size = "md",
  label,
  showValue = true,
  animated = true,
  striped = false,
  className = ""
}) => {
  const percent = Math.min(Math.max(value / max * 100, 0), 100);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: ["mlt-progress", className].filter(Boolean).join(" "), children: [
    (label || showValue) && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-progress__header", children: [
      label && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-progress__label", children: label }),
      showValue && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "span", { className: `mlt-progress__value mlt-progress__value--${variant}`, children: [
        value,
        "/",
        max
      ] })
    ] }),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: ["mlt-progress__track", `mlt-progress__track--${size}`].join(" "), children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-progress__ticks", "aria-hidden": "true", children: Array.from({ length: 10 }).map((_, i) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-progress__tick" }, i)) }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "div",
        {
          className: [
            "mlt-progress__fill",
            `mlt-progress__fill--${variant}`,
            animated ? "mlt-progress__fill--animated" : "",
            striped ? "mlt-progress__fill--striped" : ""
          ].filter(Boolean).join(" "),
          style: { width: `${percent}%` },
          role: "progressbar",
          "aria-valuenow": value,
          "aria-valuemin": 0,
          "aria-valuemax": max
        }
      )
    ] })
  ] });
};

// src/components/Toast/Toast.tsx
var _sonner = require('sonner');

var MilitechToaster = () => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  _sonner.Toaster,
  {
    position: "bottom-right",
    toastOptions: {
      classNames: {
        toast: "mlt-toast",
        title: "mlt-toast__title",
        description: "mlt-toast__desc",
        actionButton: "mlt-toast__action",
        cancelButton: "mlt-toast__cancel",
        closeButton: "mlt-toast__close",
        success: "mlt-toast--success",
        error: "mlt-toast--error",
        warning: "mlt-toast--warning",
        info: "mlt-toast--info"
      }
    }
  }
);
var toast = {
  default: (title, description) => _sonner.toast.call(void 0, title, { description }),
  success: (title, description) => _sonner.toast.success(title, { description }),
  error: (title, description) => _sonner.toast.error(title, { description }),
  warning: (title, description) => _sonner.toast.warning(title, { description }),
  info: (title, description) => _sonner.toast.info(title, { description }),
  classified: (title, description) => _sonner.toast.call(void 0, title, { description, className: "mlt-toast-classified" })
};

// src/components/Spinner/Spinner.tsx

var Spinner = ({
  variant = "default",
  size = "md",
  type = "ring",
  label,
  className = ""
}) => {
  return (
    /**
     * 
     * @band Electric Six
     * @album Switzerland
     * @song I Buy The Drugs
     * 
     */
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: ["mlt-spinner-wrap", className].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: [
        "mlt-spinner",
        `mlt-spinner--${variant}`,
        `mlt-spinner--${size}`,
        `mlt-spinner--${type}`
      ].join(" "), children: [
        type === "ring" && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "svg", { viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "circle", { cx: "20", cy: "20", r: "16", stroke: "currentColor", strokeOpacity: "0.1", strokeWidth: "2" }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            "circle",
            {
              cx: "20",
              cy: "20",
              r: "16",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "square",
              strokeDasharray: "60 40",
              className: "mlt-spinner__arc"
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "line", { x1: "20", y1: "2", x2: "20", y2: "6", stroke: "currentColor", stopOpacity: "0.3", strokeWidth: "1" }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "line", { x1: "38", y1: "20", x2: "24", y2: "20", stroke: "currentColor", stopOpacity: "0.3", strokeWidth: "1" }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "line", { x1: "20", y1: "38", x2: "20", y2: "34", stroke: "currentColor", stopOpacity: "0.3", strokeWidth: "1" }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "line", { x1: "2", y1: "20", x2: "6", y2: "20", stroke: "currentColor", stopOpacity: "0.3", strokeWidth: "1" })
        ] }),
        type === "radar" && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "svg", { viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "circle", { cx: "20", cy: "20", r: "16", stroke: "currentColor", strokeOpacity: "0.15", strokeWidth: "1", fill: "none" }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "circle", { cx: "20", cy: "20", r: "10", stroke: "currentColor", strokeOpacity: "0.1", strokeWidth: "1", fill: "none" }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "circle", { cx: "20", cy: "20", r: "4", stroke: "currentColor", strokeOpacity: "0.2", strokeWidth: "1", fill: "none" }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "line", { x1: "20", y1: "16", x2: "20", y2: "24", stroke: "currentColor", strokeOpacity: "0.2", strokeWidth: "0.5" }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "line", { x1: "16", y1: "20", x2: "24", y2: "20", stroke: "currentColor", strokeOpacity: "0.2", strokeWidth: "0.5" }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "line", { x1: "20", y1: "20", x2: "20", y2: "4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "square", className: "mlt-spinner__beam" }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "circle", { cx: "20", cy: "4", r: "1.5", fill: "currentColor", className: "mlt-spinner__beam" }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "circle", { cx: "20", cy: "20", r: "1.5", fill: "currentColor", opacity: "0.5" })
        ] }),
        type === "bars" && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-spinner__bars", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-spinner__bar", style: { animationDelay: `${i * 0.1}s` } }, i)) }),
        type === "dots" && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-spinner__dots", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-spinner__dot", style: { animationDelay: `${i * 0.15}s` } }, i)) })
      ] }),
      label && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-spinner__label", children: label })
    ] })
  );
};

// src/components/Stepper/Stepper.tsx

var getStatus = (index, current, stepStatus) => {
  if (stepStatus) return stepStatus;
  if (index < current) return "completed";
  if (index === current) return "active";
  return "pending";
};
var StepIcon = ({ status, index }) => {
  if (status === "completed") return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-stepper__icon-inner", children: "\u2713" });
  if (status === "error") return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-stepper__icon-inner", children: "\u2715" });
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-stepper__icon-inner", children: String(index + 1).padStart(2, "0") });
};
var Stepper = ({
  steps,
  current = 0,
  orientation = "horizontal",
  className = ""
}) => {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: [
    "mlt-stepper",
    `mlt-stepper--${orientation}`,
    className
  ].filter(Boolean).join(" "), children: steps.map((step, i) => {
    const status = getStatus(i, current, step.status);
    const isLast = i === steps.length - 1;
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: ["mlt-stepper__step", `mlt-stepper__step--${status}`].join(" "), children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-stepper__icon", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, StepIcon, { status, index: i }) }),
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-stepper__content", children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-stepper__label", children: step.label }),
        step.subtitle && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-stepper__subtitle", children: step.subtitle })
      ] }),
      !isLast && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: ["mlt-stepper__connector", status === "completed" ? "nlt-stepper__connector--done" : ""].filter(Boolean).join(" ") })
    ] }, step.id);
  }) });
};

// src/components/AppBar/AppBar.tsx

var AppBar = ({
  items,
  className = ""
}) => {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: ["mlt-appbar", className].filter(Boolean).join(" "), children: items.map((item, i) => {
    const isFirst = i === 0;
    const isLast = i === items.length - 1;
    const itemClasses = [
      "mlt-appbar__item",
      isFirst ? "mlt-appbar__item--accent" : "",
      isLast ? "mlt-appbar__item--last" : "",
      item.variant === "accent" ? "mlt-appbar__item--accent" : "",
      item.variant === "brown" ? "mlt-appbar__item--brown" : "",
      item.onClick ? "mlt-appbar__item--clickable" : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      "div",
      {
        className: itemClasses,
        onClick: item.onClick,
        children: [
          item.icon && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-appbar__icon", children: item.icon }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mlt-appbar__value", children: item.value })
        ]
      },
      item.id
    );
  }) });
};

// src/components/Textarea/Textarea.tsx


var Textarea = ({
  label,
  placeholder = "",
  value,
  defaultValue,
  variant = "default",
  disabled = false,
  readOnly = false,
  rows = 4,
  maxLength,
  hint,
  error,
  resize = "both",
  onChange,
  className = ""
}) => {
  const [focused, setFocused] = _react.useState.call(void 0, false);
  const [length, setLength] = _react.useState.call(void 0, _nullishCoalesce(_optionalChain([defaultValue, 'optionalAccess', _31 => _31.length]), () => ( 0)));
  const resolvedVariant = error ? "danger" : variant;
  const handleChange = (e) => {
    setLength(e.target.value.length);
    _optionalChain([onChange, 'optionalCall', _32 => _32(e.target.value)]);
  };
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: ["mlt-textarea-wrap", className].filter(Boolean).join(" "), children: [
    label && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "label", { className: "mlt-textarea__lebel", children: label }),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: [
      "mlt-textarea__field",
      `mlt-textarea__field--${resolvedVariant}`,
      focused ? "mlt-textarea__field--focused" : "",
      disabled ? "mlt-textarea__field--disabled" : ""
    ].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "textarea",
        {
          className: "mlt-textarea__el",
          value,
          defaultValue,
          placeholder,
          disabled,
          readOnly,
          rows,
          maxLength,
          style: { resize },
          onFocus: () => setFocused(true),
          onBlur: () => setFocused(false),
          onChange: handleChange
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-terxtarea__corner", "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mlt-textarea__footer", children: [
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { children: [
        error && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-textarea__error", children: error }),
        !error && hint && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mlt-textarea__hint", children: hint })
      ] }),
      maxLength && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: ["mlt-textarea__counter", length >= maxLength ? "mlt-textarea__counter--limit" : ""].filter(Boolean).join(" "), children: [
        length,
        "/",
        maxLength
      ] })
    ] })
  ] });
};

























exports.Accordion = Accordion; exports.AppBar = AppBar; exports.AreaChart = AreaChart; exports.Avatar = Avatar; exports.AvatarGroup = AvatarGroup; exports.Badge = Badge; exports.Banner = Banner; exports.Breadcrumb = Breadcrumb; exports.Button = Button; exports.Calendar = Calendar; exports.Card = Card; exports.Dialog = Dialog; exports.Input = Input; exports.MilitechToaster = MilitechToaster; exports.ProgressBar = ProgressBar; exports.Select = Select; exports.Skeleton = Skeleton; exports.Spinner = Spinner; exports.Stepper = Stepper; exports.Switch = Switch; exports.Table = Table; exports.Tabs = Tabs; exports.Textarea = Textarea; exports.toast = toast;
//# sourceMappingURL=index.js.map