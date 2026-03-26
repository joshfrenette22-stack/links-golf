'use client'

interface Props {
  label: string
  options: string[]
  selected: string
  onChange: (value: string) => void
}

export function ProductVariantSelector({ label, options, selected, onChange }: Props) {
  return (
    <div>
      <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#1a1a18] mb-2.5 mt-5">
        {label}
      </span>
      <div className="flex gap-2 flex-wrap">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`border-[1.5px] text-[12px] font-semibold px-5 py-2.5 cursor-pointer transition-all rounded-sm ${
              selected === opt
                ? 'bg-[#1a1a18] text-white border-[#1a1a18]'
                : 'border-[#c8c4bc] bg-white hover:border-[#1a1a18] text-[#1a1a18]'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}
