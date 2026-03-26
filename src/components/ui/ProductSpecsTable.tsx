import { Fragment } from 'react'
import type { ProductSpec } from '@/types'

interface Props {
  specs: ProductSpec[]
}

export function ProductSpecsTable({ specs }: Props) {
  return (
    <div className="grid grid-cols-2 gap-x-8">
      {specs.map(spec => (
        <Fragment key={spec.label}>
          <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#7a7870] py-2 border-b border-[#e8e6e0]">
            {spec.label}
          </span>
          <span className="text-[13px] text-[#1a1a18] py-2 border-b border-[#e8e6e0] text-right">
            {spec.value}
          </span>
        </Fragment>
      ))}
    </div>
  )
}
