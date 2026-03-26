import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { IMG_TRADEIN_DRIVER } from '@/lib/images'

export default function TradeInBanner() {
  return (
    <section id="trade-in" className="mt-12 relative min-h-[480px] overflow-hidden bg-[#f0efec] flex items-center">
      {/* Club image — transparent PNG floats over section background */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[56%] overflow-hidden">
        <ImageWithFallback
          src={IMG_TRADEIN_DRIVER} alt="PING irons full set fanned out"
          fill className="object-contain object-center"
          fallbackColor="#f0efec" fallbackLabel="ping-irons-fan.png"
          loading="lazy"
          sizes="56vw"
        />
      </div>
      {/* Text zone */}
      <div className="w-full md:w-1/2 md:ml-auto px-8 md:pr-[72px] md:pl-8 py-12 md:py-16 text-center md:text-right">
        <h2 className="font-display font-black leading-none mb-4 text-[#1a1a18]" style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}>
          Trade in.<br />Trade up.
        </h2>
        <p className="text-[15px] text-[#7a7870] max-w-[400px] ml-auto leading-relaxed mb-7 text-center">
          Send us your old clubs and get up to 40% off your next purchase. We&apos;ll appraise, list, and ship — you just play better golf.
        </p>
        <a
          href="/sell"
          className="inline-block bg-[#1a1a18] text-white text-[11px] font-bold uppercase tracking-[0.15em] px-9 py-4 hover:bg-[#2e4a2c] transition-colors"
        >
          Start Your Trade-In
        </a>
      </div>
    </section>
  )
}
