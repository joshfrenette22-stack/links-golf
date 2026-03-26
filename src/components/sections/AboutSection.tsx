import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { IMG_SHOP_INTERIOR } from '@/lib/images'

export default function AboutSection() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">
      <div className="bg-[#1c2e1a] px-8 md:px-16 py-14 md:py-20 flex flex-col justify-center">
        <h2 className="font-display font-extrabold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
          Get to know us
        </h2>
        <p className="text-white/75 text-[15px] leading-relaxed mb-8">
          We started Smooth Swing because we believed golfers shouldn&apos;t have to choose between quality and value. Every club on this site has been through our hands first.
        </p>
        <ul className="list-none mb-8 space-y-1.5">
          {['Every club personally inspected', 'Honest grading — no surprises', '30-day no-hassle returns'].map(item => (
            <li key={item} className="flex items-center gap-3 text-[14px] text-white/80 py-1.5">
              <span className="text-white/40 font-bold text-[13px] shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <a href="/about" className="inline-block border border-white/60 text-white text-[11px] font-bold uppercase tracking-[0.15em] px-8 py-3.5 hover:bg-white hover:text-[#1a1a18] transition-colors self-start">
          Our Story
        </a>
      </div>
      <div className="hidden md:block relative md:min-h-0">
        <ImageWithFallback
          src={IMG_SHOP_INTERIOR} alt="Smooth Swing shop interior"
          fill className="object-cover"
          fallbackColor="#788870" fallbackLabel="shop-interior.jpg"
          loading="lazy"
          sizes="50vw"
        />
      </div>
    </section>
  )
}
