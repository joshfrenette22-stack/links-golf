import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { IMG_SPOTLIGHT_BG } from '@/lib/images'

export default function SpotlightBanner() {
  return (
    <section id="spotlight" className="relative h-[340px] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[#1c2e1a] -z-10" />
      <ImageWithFallback
        src={IMG_SPOTLIGHT_BG} alt="Club of the week spotlight"
        fill className="object-cover opacity-70"
        fallbackColor="#1c2e1a" fallbackLabel="spotlight-bg.jpg"
        loading="lazy"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ background: 'repeating-linear-gradient(45deg, #fff, #fff 30px, transparent 30px, transparent 31px)' }}
      />
      <h2
        className="relative z-10 font-display font-black text-white text-center"
        style={{ fontSize: 'clamp(42px, 7vw, 88px)' }}
      >
        Club of the week
      </h2>
    </section>
  )
}
