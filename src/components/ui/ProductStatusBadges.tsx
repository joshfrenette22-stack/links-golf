import { Truck, RotateCcw } from 'lucide-react'

export function ProductStatusBadges() {
  return (
    <div className="flex flex-col gap-2 py-4 border-t border-b border-[#e8e6e0]">
      <div className="flex items-center gap-2.5 text-[13px] text-[#7a7870]">
        <span className="w-2 h-2 rounded-full bg-[#2e4a2c] flex-shrink-0" />
        In stock — ships within 1 business day
      </div>
      <div className="flex items-center gap-2.5 text-[13px] text-[#7a7870]">
        <Truck size={14} className="text-[#7a7870] flex-shrink-0" />
        Free standard shipping on orders over $75
      </div>
      <div className="flex items-center gap-2.5 text-[13px] text-[#7a7870]">
        <RotateCcw size={14} className="text-[#7a7870] flex-shrink-0" />
        30-day returns — no questions asked
      </div>
    </div>
  )
}
