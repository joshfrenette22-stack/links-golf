interface Props {
  label: string
  type?: string
  name: string
  placeholder?: string
  required?: boolean
  error?: string
  textarea?: boolean
  rows?: number
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export default function FormField({
  label, type = 'text', name, placeholder, required, error, textarea, rows = 4, value, onChange,
}: Props) {
  const baseClass = 'w-full border border-[#c8c4bc] bg-white text-[#1a1a18] text-[14px] px-4 py-3 rounded-none outline-none focus:border-[#1a1a18] transition-colors placeholder:text-[#7a7870]/60'
  return (
    <div>
      <label htmlFor={name} className="block text-[12px] font-bold uppercase tracking-[0.1em] text-[#1a1a18] mb-1.5">
        {label}{required && <span className="text-[#943020] ml-0.5">*</span>}
      </label>
      {textarea ? (
        <textarea id={name} name={name} rows={rows} placeholder={placeholder} className={baseClass} value={value} onChange={onChange} />
      ) : (
        <input id={name} name={name} type={type} placeholder={placeholder} className={baseClass} value={value} onChange={onChange} />
      )}
      {error && <p className="text-[12px] text-[#943020] mt-1">{error}</p>}
    </div>
  )
}
