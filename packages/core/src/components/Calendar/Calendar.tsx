import React, { useState, useRef, useEffect } from 'react'
import './Calendar.css'

type CalendarEvent = {
    date: string
    label: string
    variant?: 'default' | 'threat' | 'classified' | 'success'
}

type CalendarMode = 'single' | 'range'

type CalendarProps = {
    mode?: CalendarMode
    events?: CalendarEvent[]
    onSelect?: (date: string | [string, string]) => void
    className?: string
}

const DAYS = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

const toKey = (y: number, m: number, d: number) => 
    `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`

const getDaysIsMonth = (year: number, month: number) => 
    new Date(year, month + 1, 0).getDate()

const getFirstDayOfMonth = (year: number, month: number) => { 
    const day = new Date(year, month, 1).getDay()

    return day === 0 ? 6 : day - 1
}

export const Calendar = ({
    mode = 'single',
    events = [],
    onSelect,
    className = '',
}: CalendarProps) => {
    const today = new Date()
    const[viewYear, setViewYear] = useState(today.getFullYear())
    const[viewMonth, setViewMonth] = useState(today.getMonth())
    const[selected, setSelected] = useState<string[]>([])
    const[hovered, setHovered] = useState<string | null>(null)
    const[showYearPicker, setShowYearPicker] = useState(false)
    const[showMonthPicker, setShowMonthPicker] = useState(false)
    const yearPickerRef = useRef<HTMLDivElement>(null);
    const monthPickerRef = useRef<HTMLDivElement>(null);

    const daysInMonth = getDaysIsMonth(viewYear, viewMonth)
    const firstDay = getFirstDayOfMonth(viewYear, viewMonth)

    const years = Array.from({ length: 210 }, (_, i) => today.getFullYear() - 100 + i)

    useEffect(() => {
        if(showYearPicker && yearPickerRef.current){
            const activeItem = yearPickerRef.current.querySelector('.mlt-calendar__year-item--active')
            activeItem?.scrollIntoView({ block: 'center' })
        }

        if(showMonthPicker && monthPickerRef.current){
            const activeItem = monthPickerRef.current.querySelector('.mlt-calendar__month-item--active')
            activeItem?.scrollIntoView({ block: 'center'})
        }

    }, [showYearPicker, showMonthPicker])

    const eventMap = events.reduce<Record<string, CalendarEvent>>((acc, e) => {
        acc[e.date] = e
        return acc
    }, {})

    const handleDayClick = (key: string) => {
        if(mode === 'single'){
            setSelected([key])
            onSelect?.(key)
        } else {
            if(selected.length === 0 || selected.length === 2){
                setSelected([key])
            } else {
                const range: [string, string] = selected[0]! < key
                    ?[selected[0]!, key]
                    :[key, selected[0]!]
                setSelected(range)
                onSelect?.(range)
            }
        } 
    }

    /**
     * Red Hot Chili Peppers
     * I Am With You
     * Goodye Hooray
     */

    const isSelected = (key: string) => selected.includes(key)

    const isInRange = (key: string) => {
        if(mode !== 'range' || selected.length < 1) return false
        const start = selected[0]!
        const end = selected.length === 2 ? selected [1]! : hovered
        if(!end) return false
        const [s, e] = start < end ? [start, end] : [end, start]
        return key > s && key < e 
    }

    const isRangeStart = (key: string) => mode === 'range' && selected[0] === key
    const isRangeEnd = (key: string) => mode === 'range' && selected[1] === key

    const prevMonth = () => {
        if(viewMonth === 0){ setViewYear(y => y - 1); setViewMonth(11) } 
        else setViewMonth(m => m - 1)
    }

    const nextMonth = () => {
        if(viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0) }
        else setViewMonth(m => m + 1)
    }

    const todayKey = toKey(today.getFullYear(), today.getMonth(), today.getDate())

    const cells: (number | null)[] = [
        ...Array(firstDay).fill(null),
        ...Array.from({ length: daysInMonth }, (_, i) => i + 1)
    ]

    while (cells.length % 7 !== 0) cells.push(null)

    return (
        <div className={['mlt-calendar', className].filter(Boolean).join(' ')}>
            <div className="mlt-calendar__header">
                <button className="mlt-calendar__nav" onClick={prevMonth}>‹</button>
                <div className="mlt-calendar__month-label">
                    <span
                        className="mlt-calendar__month-btn"
                        onClick={() => { setShowMonthPicker(v => !v); setShowYearPicker(false) }}
                    >
                        {MONTHS[viewMonth]}
                        <span className="mlt-calendar__year-arrow">{showMonthPicker ? ' ∧' : ' ∨'}</span>
                    </span>
                    {' '}
                    <span
                        className="mlt-calendar__year mlt-calendar__year-btn"
                        onClick={() => { setShowYearPicker(v => !v); setShowMonthPicker(false) }}
                    >
                        {viewYear}
                        <span className="mlt-calendar__year-arrow">{showMonthPicker ? ' ∧' : ' ∨'}</span>
                    </span>
                </div>
                <button className="mlt-calendar__nav" onClick={nextMonth}>›</button>
            </div>
            
            {showMonthPicker && (
                <div className="mlt-calendar__month-picker" ref={monthPickerRef}>
                    {MONTHS.map((month, i) => (
                        <div
                            key={month}
                            className={['mlt-calendar__month-item', i === viewMonth ? 'mlt-calendar__month-item--active' : ''].filter(Boolean).join(' ')}
                            onClick={() =>  setViewMonth(i) }
                        >
                            {month}
                        </div>
                    ))}
                </div>
            )}

            {showYearPicker && (
                <div className="mlt-calendar__year-picker" ref={yearPickerRef}>
                    {years.map(y => (
                        <div
                            key={y}
                            className={['mlt-calendar__year-item', y === viewYear ? 'mlt-calendar__year-item--active' : ''].filter(Boolean).join(' ')}
                            onClick={() => setViewYear(y) }
                        >
                            {y}
                        </div>
                    ))}
                </div>
            )} 

            <div className="mlt-calendar__weekdays">
                {DAYS.map(d => (
                    <div key={d} className="mlt-calendar__weekday">{d}</div>
                ))}
            </div>

            <div className="mlt-calendar__grid">
                {cells.map((day, i) => {
                    if(!day) return <div key={i} className="mlt-calendar__cell mlt-calendar-calendar__cell--empty" />

                    const key = toKey(viewYear, viewMonth, day)
                    const event = eventMap[key]
                    const isToday = key === todayKey

                    return (
                        <div
                            key={key}
                            className={[
                                'mlt-calendar__cell',
                                isToday ? 'mlt-calendar__cell--today' : '',
                                isSelected(key) ? 'mlt-calendar__cell--sselected' : '',
                                isInRange(key) ? 'mlt-calendar__cell--in-range' : '',
                                isRangeStart(key) ? 'mlt-calendar__cell--range-end' : '',
                                isRangeEnd(key) ? 'mlt-calendar__cell--range-end' : '',
                                event ? `mlt-calendar__cell mlt-calendar__cell--event-${event.variant ?? 'dufault'}` : '',
                            ].filter(Boolean).join(' ')}
                            onClick={() => handleDayClick(key)}
                            onMouseEnter={() => setHovered(key)}
                            onMouseLeave={() => setHovered(null)}
                        >   
                            <span className="mlt-calendar__day">{day}</span>
                            {event && <span className="mlt-calendar__event-dot" />}
                        </div>
                    )
                })}
            </div>

            {events.filter(e => e.date.startsWith(`${viewYear}-${String(viewMonth + 1).padStart(2, '0')}`)).length > 0 && (
                <div className="mlt-calendar__events">
                    {events
                        .filter(e => e.date.startsWith(`${viewYear}-${String(viewMonth + 1).padStart(2, '0')}`))
                        .map((e, i) => (
                            <div key={i} className={`mlt-calendar__event-item mlt-calendar__event-item--${e.variant ?? 'dufault'}`}>
                                <span className="mlt-calendar__event-date">{e.date.split('_')[2]}</span>
                                <span className="mlt-calendar__event-label">{e.label}</span>
                            </div>
                        ))
                    
                    }
                </div>
            )}
        </div>
    )
}
