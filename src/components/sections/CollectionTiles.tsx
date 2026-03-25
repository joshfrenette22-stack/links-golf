import { COLLECTIONS } from '@/lib/data'
import ImageWithFallback from '@/components/ui/ImageWithFallback'

const fallbacks = ['#e8e4dc', '#e0ddd8']

export default function CollectionTiles() {
  return (
    <section id="collections" className="px-12 pt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
      {COLLECTIONS.map((col, i) => (
        <div key={col.id} className="bg-[#f5f3ef] rounded overflow-hidden cursor-pointer group">
          <div className="h-[360px] overflow-hidden relative">
            <ImageWithFallback
              src={col.imageSrc} alt={col.name} fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
              fallbackColor={fallbacks[i]}
              fallbackLabel={`collection-${col.id}.jpg`}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="text-center py-5 pb-8">
            <p className="text-[13px] text-[#7a7870] mb-1">{col.subtitle}</p>
            <h2 className="text-[22px] font-extrabold text-[#1a1a18]">{col.name}</h2>
          </div>
        </div>
      ))}
    </section>
  )
}
