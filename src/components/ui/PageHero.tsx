interface Props {
  title: string
  subtitle?: string
  eyebrow?: string
  bgColor?: string
  textColor?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = { sm: 'py-16 md:py-16', md: 'py-16 md:py-24', lg: 'py-16 md:py-32' }

export default function PageHero({
  title, subtitle, eyebrow,
  bgColor = 'bg-[#1c2e1a]', textColor = 'text-white',
  size = 'md',
}: Props) {
  return (
    <div className={`${bgColor} ${sizes[size]} px-12`}>
      {eyebrow && (
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#b88c28] mb-3">{eyebrow}</p>
      )}
      <h1 className={`font-display font-extrabold ${textColor} leading-[1.05]`} style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
        {title}
      </h1>
      {subtitle && (
        <p className="text-[16px] text-white/75 max-w-[560px] mt-4">{subtitle}</p>
      )}
    </div>
  )
}
