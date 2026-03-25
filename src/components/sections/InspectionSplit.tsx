import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { IMG_INSPECTION_WORKSHOP } from '@/lib/images'

export default function InspectionSplit() {
  return (
    <section id="inspection" className="mx-12 rounded overflow-hidden grid grid-cols-1 md:grid-cols-2">
      <div className="h-[580px] relative">
        <ImageWithFallback
          src={IMG_INSPECTION_WORKSHOP} alt="Club inspection workshop"
          fill className="object-cover"
          fallbackColor="#d4cec4" fallbackLabel="inspection-workshop.jpg"
          loading="lazy"
          sizes="50vw"
        />
      </div>
      <div className="px-16 py-20 flex flex-col justify-center bg-[#f5f3ef]">
        <p className="text-[13px] font-bold mb-3 uppercase tracking-wider">Every Club. Every Time.</p>
        <h2 className="font-display font-extrabold mb-5 leading-tight" style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}>
          Inspected, Graded, Trusted
        </h2>
        <p className="text-[#7a7870] text-[15px] leading-relaxed mb-6">
          Every club that comes through our doors is put through a rigorous 12-point inspection. We check the face, shaft, grip, hosel, and finish — then grade it honestly before it ever reaches the site.
        </p>
        <p className="text-[#7a7870] text-[15px] leading-relaxed mb-8">
          Mint means near-perfect. Good means light play wear. Fair means it performs, just shows its history. No surprises when it arrives.
        </p>
        <a href="/inspection" className="inline-block border border-[#1a1a18] text-[#1a1a18] text-[11px] font-bold uppercase tracking-[0.15em] px-8 py-3.5 hover:bg-[#1a1a18] hover:text-white transition-colors self-start">
          Our Process
        </a>
      </div>
    </section>
  )
}
