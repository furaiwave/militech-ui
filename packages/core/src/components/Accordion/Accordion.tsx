import React, {useState} from "react";
import './Accordion.css'

type AccordionItem = {
    id: string
    title: string
    subtitle?: string
    children: React.ReactNode
}

type AccordionProps = {
    items: AccordionItem[]
    multiple?: boolean
    defaultOpen?: string[]
    className?: string
}

export const Accordion = ({
    items,
    multiple = false,
    defaultOpen = [],
    className = '',
}: AccordionProps) => {
    const[openIds, setOpenIds] = useState<string[]>(defaultOpen)

    const toggle = (id: string) => {
        if(multiple){
            setOpenIds(prev =>
                prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
            )
        } else {
            setOpenIds(prev => prev.includes(id) ? [] : [id])
        }
    }

    const isOpen = (id: string) => openIds.includes(id)

    return (
        <div className={['mlt-accordion', className].filter(Boolean).join(' ')}>
            {items.map((item, index) => (
                <div
                    key={item.id}
                    className={['mlt-accordion__item', isOpen(item.id) ? 'mlt-accordion__item--open' : ''].filter(Boolean).join(' ')}
                > 
                    <div
                        className="mlt-accordion__trigger"
                        onClick={() => toggle(item.id)}
                        role="button"
                        aria-expanded={isOpen(item.id)}
                        tabIndex={0}
                        onKeyDown={e => e.key === 'Enter' && toggle(item.id)}
                    >
                        <div className="mlt-accordion__trigger--left">
                            <span className="mlt-accordion__index">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <div>
                                <div className="mlt-accordion__title">{item.title}</div>
                                {item.subtitle && (
                                    <div className="mlt-accordion__subtitle">{item.subtitle}</div>
                                )}
                            </div>
                        </div>
                        <span className="mlt-accordion__icon" aria-hidden="true">
                            {isOpen(item.id) ? '∧' : '∨'}
                        </span>
                    </div>

                    <div className={['mlt-accordion__body', isOpen(item.id) ? 'mlt-accordion__body--open' : ''].filter(Boolean).join(' ')}>
                        <div className="mlt-accordion__content">
                            {item.children}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

