interface Props { label: string; variant: 'dark' | 'gold' | 'red' }

const styles = {
  dark: 'bg-[#1a1a18] text-white',
  gold: 'bg-[#b88c28] text-white',
  red:  'bg-[#943020] text-white',
}

export default function SectionBadge({ label, variant }: Props) {
  return (
    <span className={`absolute top-3 left-3 z-10 text-[10px] font-extrabold uppercase tracking-[0.1em] py-1.5 px-2.5 ${styles[variant]}`}>
      {label}
    </span>
  )
}
