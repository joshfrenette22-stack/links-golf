import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { IMG_CATEGORY_CLUBS } from '@/lib/images'

const links = [
  { label: 'Drivers & Woods', opacity: '' },
  { label: 'Irons & Wedges', opacity: 'opacity-70' },
  { label: 'Putters & Bags', opacity: 'opacity-50' },
]

export default function CategoryShowcase() {
  return (
    <section id="categories" className="grid grid-cols-1 md:grid-cols-2 min-h-[440px]">
      <div className="bg-[#1c2e1a] flex items-center justify-end px-16 py-16">
        <div className="flex flex-col items-end gap-4">
          {links.map(l => (
            <a
              key={l.label}
              href="/shop"
              className={`font-display font-extrabold text-white hover:opacity-60 transition-opacity ${l.opacity}`}
              style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="bg-[#2a2018] relative overflow-hidden min-h-[300px] md:min-h-0">
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
