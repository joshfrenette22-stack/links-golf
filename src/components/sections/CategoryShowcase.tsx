import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { IMG_CATEGORY_CLUBS } from '@/lib/images'

const links = [
  { label: 'Drivers\n& Woods',  opacity: 'opacity-100', href: '/shop?category=drivers'  },
  { label: 'Irons\n& Wedges',   opacity: 'opacity-70',  href: '/shop?category=irons'    },
  { label: 'Putters\n& Bags',   opacity: 'opacity-50',  href: '/shop?category=putters'  },
]

export default function CategoryShowcase() {
  return (
    <section id="categories" className="grid grid-cols-1 md:grid-cols-2 min-h-[440px]">
      <div className="bg-[#1c2e1a] flex items-center justify-end px-16 py-16 min-h-[440px]">
        <nav className="flex flex-col gap-4" aria-label="Shop categories">
          {links.map(({ label, opacity, href }) => (
            <a
              key={label}
              href={href}
              className={`font-display font-extrabold text-white text-right leading-[1.1] whitespace-pre-line hover:opacity-60 transition-opacity ${opacity}`}
              style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className="hidden md:block bg-[#2a2018] relative overflow-hidden md:min-h-0">
        <ImageWithFallback
          src={IMG_CATEGORY_CLUBS} alt="Golf club categories"
          fill className="object-cover opacity-60"
          fallbackColor="#2a2018" fallbackLabel="category-clubs.jpg"
          loading="lazy"
          sizes="50vw"
        />
      </div>
    </section>
  )
}
