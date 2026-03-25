interface Props { condition: 'Mint' | 'Good' | 'Fair' }

const styles = {
  Mint: 'bg-[#e0f0dc] text-[#2a6020]',
  Good: 'bg-[#e8f0e0] text-[#446030]',
  Fair: 'bg-[#f0ece0] text-[#705830]',
}

export default function ConditionBadge({ condition }: Props) {
  return (
    <span className={`inline-block text-[9px] font-extrabold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded-sm ${styles[condition]}`}>
      {condition}
    </span>
  )
}
