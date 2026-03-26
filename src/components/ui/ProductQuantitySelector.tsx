'use client'
import { Minus, Plus } from 'lucide-react'

interface Props {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}

export function ProductQuantitySelector({ value, onChange, min = 1, max = 10 }: Props) {
  return (
    <div>
      <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#1a1a18] mb-2.5 mt-5">
        Quantity
      </span>
      <div className="inline-flex border-[1.5px] border-[#c8c4bc] rounded-sm overflow-hidden">
        <button
          onClick={() => value > min && onChange(value - 1)}
          disabled={value <= min}
          className="w-11 h-11 flex items-center justify-center bg-white hover:bg-[#f5f3ef] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Decrease quantity"
        >
          <Minus size={14} />
        </button>
        <span className="w-12 h-11 flex items-center justify-center text-[14px] font-semibold border-x-[1.5px] border-[#c8c4bc] select-none">
          {value}
        </span>
        <button
          onClick={() => value < max && onChange(value + 1)}
          disabled={value >= max}
          className="w-11 h-11 flex items-center justify-center bg-white hover:bg-[#f5f3ef] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Increase quantity"
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  )
}
