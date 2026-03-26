'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  id: string
  label: string
  children: React.ReactNode
  defaultOpen?: boolean
}

interface Props {
  items: AccordionItem[]
}

export function ProductAccordion({ items }: Props) {
  const defaultId = items.find(i => i.defaultOpen)?.id ?? null
  const [openId, setOpenId] = useState<string | null>(defaultId)

  return (
    <div className="mt-7 border-t border-[#e8e6e0]">
      {items.map(item => (
        <div key={item.id} className="border-b border-[#e8e6e0]">
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="flex items-center justify-between w-full bg-transparent border-none py-4 cursor-pointer text-left"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1a1a18]">
              {item.label}
            </span>
            <ChevronDown
              size={14}
              className={`text-[#7a7870] flex-shrink-0 transition-transform duration-200 ${openId === item.id ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              openId === item.id ? 'max-h-[600px]' : 'max-h-0'
            }`}
          >
            <div className="pb-4 text-[14px] leading-relaxed text-[#7a7870]">
              {item.children}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
