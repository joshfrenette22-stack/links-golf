interface BreadcrumbItem { label: string; href?: string }
interface Props { items: BreadcrumbItem[] }

export default function Breadcrumb({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="pt-6 pb-2 px-4 md:px-12">
      <ol className="flex flex-wrap items-center gap-1 text-[12px] text-[#7a7870]">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <span className="text-[#c8c4bc]">/</span>}
              {isLast || !item.href ? (
                <span className={isLast ? 'text-[#1a1a18] font-semibold' : ''}>{item.label}</span>
              ) : (
                <a href={item.href} className="hover:text-[#1a1a18] transition-colors">{item.label}</a>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
