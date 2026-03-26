export default function TradeInBanner() {
  return (
    <section id="trade-in" className="mt-12 relative min-h-[520px] overflow-hidden bg-[#f0efec] flex items-end">

      {/* Club image — raw <img> tag preserves PNG alpha, no Next.js optimization pipeline */}
      <div className="hidden md:block absolute left-0 bottom-0 w-[58%] h-full pointer-events-none select-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/products/ping-irons-fan.png"
          alt="PING irons full set fanned out"
          className="absolute bottom-0 left-0 w-full h-full object-contain object-bottom"
          style={{ mixBlendMode: 'multiply' }}
          loading="lazy"
        />
        {/* Gradient feather — fades clubs into the section background at the bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, #f0efec 100%)',
          }}
        />
        {/* Left edge fade — blends clubs into left side */}
        <div
          className="absolute top-0 left-0 bottom-0 w-16 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #f0efec 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Text zone — vertically centred in the section */}
      <div className="w-full md:w-1/2 md:ml-auto px-8 md:pr-[72px] md:pl-8 py-12 md:py-16 text-center md:text-right self-center">
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

      {/* Bottom gradient — seamless transition into the section below */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #f0efec 100%)',
        }}
      />
    </section>
  )
}
