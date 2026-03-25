import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { IMG_SHOP_INTERIOR } from '@/lib/images'

export default function AboutSection() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">
      <div className="bg-[#1c2e1a] px-16 py-20 flex flex-col justify-center">
        <h2 className="font-display font-extrabold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
          Get to know us
        </h2>
        <p className="text-white/75 text-[15px] leading-relaxed mb-8">
          We started LINKS because we believed golfers shouldn&apos;t have to choose between quality and value. Every club on this site has been through our hands first.
        </p>
        <ul className="space-y-3 mb-10">
          {['Every club personally inspected', 'Honest grading — no surprises', '30-day no-hassle returns'].map(item => (
            <li key={item} className="flex items-center gap-3 text-white/80 text-[14px]">
              <span className="text-[#b88c28] font-bold">✓</span> {item}
            </li>
          ))}
        </ul>
        <a href="/about" className="inline-block border border-white/60 text-white text-[11px] font-bold uppercase tracking-[0.15em] px-8 py-3.5 hover:bg-white hover:text-[#1a1a18] transition-colors self-start">
          Our Story
        </a>
      </div>
      <div className="relative min-h-[400px] md:min-h-0">
        <ImageWithFallback
          src={IMG_SHOP_INTERIOR} alt="LINKS Golf shop interior"
          fill className="object-cover"
          fallbackColor="#788870" fallbackLabel="shop-interior.jpg"
          loading="lazy"
          sizes="50vw"
        />
      </div>
    </section>
  )
}
