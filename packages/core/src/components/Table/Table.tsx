import React, { useState, useRef, useEffect } from 'react'
import './Table.css'

type SortDirection = 'asc' | 'desc' | null

type Column<TRow extends Record<string, unknown>> = {
  key: keyof TRow & string
  label: string
  width?: string
  align?: 'left' | 'center' | 'right'
  editable?: boolean
  render?: (value: TRow[keyof TRow], row: TRow) => React.ReactNode
}

type TableProps<TRow extends Record<string, unknown>> = {
  columns: Column<TRow>[]
  data: TRow[]
  label?: string
  sortable?: boolean
  onRowClick?: (row: TRow) => void
  onDataChange?: (data: TRow[]) => void
}

type ContextMenu = {
  x: number
  y: number
  columnKey: string
} | null

export const Table = <TRow extends Record<string, unknown>>({
  columns,
  data: initialData,
  label,
  sortable = false,
  onRowClick,
  onDataChange,
}: TableProps<TRow>) => {
  const [data, setData] = useState<TRow[]>(initialData)
  const [sortKey, setSortKey] = useState<keyof TRow | null>(null)
  const [sortDir, setSortDir] = useState<SortDirection>(null)
  const [editingColumn, setEditingColumn] = useState<string | null>(null)
  const [editingCell, setEditingCell] = useState<{ row: number; key: string } | null>(null)
  const [contextMenu, setContextMenu] = useState<ContextMenu>(null)
  const contextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (contextRef.current && !contextRef.current.contains(e.target as Node)) {
        setContextMenu(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSort = (key: keyof TRow) => {
    if (!sortable || editingColumn) return
    if (sortKey === key) {
      setSortDir(d => d === 'asc' ? 'desc' : d === 'desc' ? null : 'asc')
      if (sortDir === 'desc') setSortKey(null)
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  const handleHeaderRightClick = (e: React.MouseEvent, key: string) => {
    e.preventDefault()
    setContextMenu({ x: e.clientX, y: e.clientY, columnKey: key })
  }

  const handleStartEdit = () => {
    if (!contextMenu) return
    setEditingColumn(contextMenu.columnKey)
    setContextMenu(null)
  }

  const handleStopEdit = () => {
    setEditingColumn(null)
    setEditingCell(null)
  }

  const handleCellChange = (rowIndex: number, key: string, value: string) => {
    const updated = data.map((row, i) =>
      i === rowIndex ? { ...row, [key]: value } : row
    ) as TRow[]
    setData(updated)
    onDataChange?.(updated)
  }

  const sorted = React.useMemo(() => {
    if (!sortKey || !sortDir) return data
    return [...data].sort((a, b) => {
      const av = a[sortKey]
      const bv = b[sortKey]
      if (av === bv) return 0
      const cmp = av! < bv! ? -1 : 1
      return sortDir === 'asc' ? cmp : -cmp
    })
  }, [data, sortKey, sortDir])

  return (
    <div className="mlt-table-wrap" onClick={() => editingColumn && handleStopEdit()}>
      {label && <div className="mlt-table__label">{label}</div>}

      {contextMenu && (
        <div
          ref={contextRef}
          className="mlt-table__context"
          style={{ top: contextMenu.y, left: contextMenu.x }}
          onClick={e => e.stopPropagation()}
        >
          <div className="mlt-table__context-item" onClick={handleStartEdit}>
            EDIT COLUMN
          </div>
          <div className="mlt-table__context-item mlt-table__context-item--muted">
            CANCEL
          </div>
        </div>
      )}

      <table className="mlt-table" onClick={e => e.stopPropagation()}>
        <thead>
          <tr>
            {columns.map(col => (
              <th
                key={col.key}
                className={[
                  'mlt-table__th',
                  sortable ? 'mlt-table__th--sortable' : '',
                  sortKey === col.key ? 'mlt-table__th--active' : '',
                  editingColumn === col.key ? 'mlt-table__th--editing' : '',
                  col.align ? `mlt-table__cell--${col.align}` : '',
                ].filter(Boolean).join(' ')}
                style={{ width: col.width }}
                onClick={() => handleSort(col.key)}
                onContextMenu={e => handleHeaderRightClick(e, col.key)}
              >
                {col.label}
                {editingColumn === col.key && (
                  <span className="mlt-table__editing-indicator"> ✎</span>
                )}
                {sortable && editingColumn !== col.key && (
                  <span className="mlt-table__sort-icon">
                    {sortKey === col.key
                      ? sortDir === 'asc' ? ' ∧' : ' ∨'
                      : ' ·'}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, i) => (
            <tr
              key={i}
              className={['mlt-table__tr', onRowClick ? 'mlt-table__tr--clickable' : ''].filter(Boolean).join(' ')}
              onClick={() => !editingColumn && onRowClick?.(row)}
            >
              {columns.map(col => (
                <td
                  key={col.key}
                  className={[
                    'mlt-table__td',
                    editingColumn === col.key ? 'mlt-table__td--editing' : '',
                    col.align ? `mlt-table__cell--${col.align}` : '',
                  ].filter(Boolean).join(' ')}
                  onClick={() => {
                    if (editingColumn === col.key) {
                      setEditingCell({ row: i, key: col.key })
                    }
                  }}
                >
                  {editingColumn === col.key && editingCell?.row === i && editingCell?.key === col.key ? (
                    <input
                      className="mlt-table__input"
                      defaultValue={String(row[col.key] ?? '')}
                      autoFocus
                      onChange={e => handleCellChange(i, col.key, e.target.value)}
                      onBlur={() => setEditingCell(null)}
                      onKeyDown={e => e.key === 'Enter' && setEditingCell(null)}
                      onClick={e => e.stopPropagation()}
                    />
                  ) : col.render && editingColumn !== col.key ? (
                    col.render(row[col.key], row)
                  ) : (
                    <span>{String(row[col.key] ?? '')}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {editingColumn && (
        <div className="mlt-table__edit-bar">
          <span>EDITING: {columns.find(c => c.key === editingColumn)?.label}</span>
          <button className="mlt-table__edit-done" onClick={handleStopEdit}>
            DONE ✓
          </button>
        </div>
      )}
    </div>
  )
}