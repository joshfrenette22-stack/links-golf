import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { IMG_HERO_BG } from '@/lib/images'

export default function Hero() {
  return (
    <section id="hero" className="h-dvh relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1c2e1a 0%, #0f1e0d 40%, #1a2a18 65%, #101808 100%)' }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={IMG_HERO_BG} alt="Golf course at sunset"
          fill className="object-cover opacity-60"
          fallbackColor="#1c2e1a" fallbackLabel="hero-bg.jpg"
          priority
          sizes="100vw"
        />
      </div>
      {/* Content */}
      <div className="absolute bottom-16 left-16 z-10">
        <h1 className="font-display font-extrabold text-white mb-7 leading-[1.03]" style={{ fontSize: 'clamp(42px, 5.5vw, 72px)' }}>
          Tour-quality clubs at<br />real-world prices
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
