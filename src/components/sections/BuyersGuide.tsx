import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { IMG_BUYERS_GUIDE_MAIN, IMG_GUIDE_BEGINNER, IMG_GUIDE_LOW_HANDICAP } from '@/lib/images'

const cards = [
  { label: 'Best for Beginners', src: IMG_GUIDE_BEGINNER, fallback: '#e0dcd0', lbl: 'guide-beginner.jpg' },
  { label: 'Best for Low Handicap', src: IMG_GUIDE_LOW_HANDICAP, fallback: '#dddad2', lbl: 'guide-low-handicap.jpg' },
]

export default function BuyersGuide() {
  return (
    <section id="buyers-guide" className="px-12 py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold mb-3">Build your bag on a budget</h2>
        <p className="text-[#7a7870] text-[15px] max-w-2xl leading-relaxed">
          Whether you&apos;re just starting out or rebuilding after a swing change, pre-owned equipment lets you play better clubs for less. Here&apos;s how to do it right.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {/* Main image */}
        <div className="h-[480px] relative rounded overflow-hidden">
          <ImageWithFallback
            src={IMG_BUYERS_GUIDE_MAIN} alt="Buyer's guide main"
            fill className="object-cover"
            fallbackColor="#c0b890" fallbackLabel="buyers-guide-main.jpg"
            loading="lazy"
            sizes="33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <p className="absolute bottom-4 left-4 text-white font-extrabold text-lg">Read the guide</p>
        </div>
        {/* Sub-cards */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {cards.map(card => (
            <div key={card.label} className="relative rounded overflow-hidden cursor-pointer group h-[480px]">
              <ImageWithFallback
                src={card.src} alt={card.label} fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                fallbackColor={card.fallback} fallbackLabel={card.lbl}
                loading="lazy"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-extrabold text-base">{card.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
