import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { IMG_HERO_BG, IMG_HERO_BAG } from '@/lib/images'

export default function Hero() {
  return (
    <section id="hero" className="h-dvh relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1c2e1a 0%, #0f1e0d 40%, #1a2a18 65%, #101808 100%)' }}>
      {/* Background image */}
      <ImageWithFallback
        src={IMG_HERO_BG} alt="Golf course at sunset"
        fill className="object-cover opacity-60"
        fallbackColor="#1c2e1a" fallbackLabel="hero-bg.jpg"
        priority
      />
      {/* Product image */}
      <div className="absolute right-[22%] bottom-0 h-[82%] w-auto z-10">
        <ImageWithFallback
          src={IMG_HERO_BAG} alt="Premium golf bag"
          width={600} height={900}
          className="h-full w-auto object-bottom"
          fallbackColor="#2e4a2c" fallbackLabel="hero-bag.jpg"
          priority
        />
      </div>
      {/* Content */}
      <div className="absolute bottom-18 left-16 z-10">
        <h1 className="font-display font-extrabold text-white mb-7 leading-[1.03]" style={{ fontSize: 'clamp(42px, 5.5vw, 72px)' }}>
          Tour-quality clubs<br />at real-world prices
        </h1>
        <a
          href="/shop"
          className="border border-white/60 text-white text-[11px] font-bold uppercase tracking-[0.15em] px-8 py-3.5 hover:bg-white hover:text-[#1a1a18] transition-colors inline-block"
        >
          Shop Equipment
        </a>
      </div>
    </section>
  )
}
