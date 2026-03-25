import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { IMG_MAP_BG } from '@/lib/images'

export default function MapSection() {
  return (
    <section id="map" className="relative h-[440px] overflow-hidden">
      <ImageWithFallback
        src={IMG_MAP_BG} alt="Map showing store location"
        fill className="object-cover"
        fallbackColor="#c8d8c0" fallbackLabel="map-bg.jpg"
        loading="lazy"
        sizes="100vw"
      />
      {/* Map pin */}
      <div className="absolute top-[45%] left-[46%] w-8 h-8 bg-[#2e4a2c] rounded-[50%_50%_50%_0] rotate-[-45deg] shadow-md" />
      {/* Info card */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 w-[320px] bg-white p-8 shadow-[0_8px_40px_rgba(0,0,0,0.15)] rounded-sm">
        <h3 className="font-extrabold text-[22px] mb-4">Visit our shop</h3>
        <p className="text-sm text-[#7a7870] leading-relaxed mb-2">2240 Larimer Street<br />Denver, CO 80205</p>
        <p className="text-sm text-[#7a7870] leading-relaxed mb-6">Mon–Sat: 9:00am–6:00pm<br />Sun: 10:00am–4:00pm<br /><span className="text-[#2e4a2c]">Walk-in appraisals welcome. Bring your bag.</span></p>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-[#1a1a18] text-white text-[11px] font-bold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-[#2e4a2c] transition-colors"
        >
          Get Directions
        </a>
      </div>
    </section>
  )
}
