const BRANDS = [
  {
    name: 'Callaway',
    svg: (
      <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="4" y="36" fontFamily="Georgia, serif" fontSize="28" fontWeight="700" fill="currentColor" letterSpacing="-0.5">Callaway</text>
      </svg>
    ),
  },
  {
    name: 'PING',
    svg: (
      <svg viewBox="0 0 100 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="4" y="36" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="900" fill="currentColor" letterSpacing="4">PING</text>
      </svg>
    ),
  },
  {
    name: 'Titleist',
    svg: (
      <svg viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="4" y="36" fontFamily="Georgia, serif" fontSize="26" fontWeight="700" fill="currentColor" letterSpacing="1">Titleist</text>
      </svg>
    ),
  },
  {
    name: 'TaylorMade',
    svg: (
      <svg viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="4" y="36" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="800" fill="currentColor" letterSpacing="0.5">TaylorMade</text>
      </svg>
    ),
  },
  {
    name: 'Cleveland',
    svg: (
      <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="4" y="36" fontFamily="Georgia, serif" fontSize="26" fontWeight="700" fill="currentColor" letterSpacing="0.5">Cleveland</text>
      </svg>
    ),
  },
  {
    name: 'Cobra',
    svg: (
      <svg viewBox="0 0 110 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="4" y="36" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="900" fill="currentColor" letterSpacing="2">COBRA</text>
      </svg>
    ),
  },
  {
    name: 'Mizuno',
    svg: (
      <svg viewBox="0 0 130 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="4" y="36" fontFamily="Georgia, serif" fontSize="26" fontWeight="700" fill="currentColor" letterSpacing="0.5">Mizuno</text>
      </svg>
    ),
  },
  {
    name: 'Scotty Cameron',
    svg: (
      <svg viewBox="0 0 240 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="4" y="36" fontFamily="Georgia, serif" fontSize="22" fontWeight="700" fill="currentColor" letterSpacing="0.5">Scotty Cameron</text>
      </svg>
    ),
  },
  {
    name: 'Odyssey',
    svg: (
      <svg viewBox="0 0 140 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="4" y="36" fontFamily="Georgia, serif" fontSize="26" fontWeight="700" fill="currentColor" letterSpacing="0.5">Odyssey</text>
      </svg>
    ),
  },
  {
    name: 'Wilson',
    svg: (
      <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="4" y="36" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="800" fill="currentColor" letterSpacing="1">Wilson</text>
      </svg>
    ),
  },
  {
    name: 'Srixon',
    svg: (
      <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="4" y="36" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="800" fill="currentColor" letterSpacing="1">Srixon</text>
      </svg>
    ),
  },
  {
    name: 'Vokey',
    svg: (
      <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="4" y="36" fontFamily="Georgia, serif" fontSize="26" fontWeight="700" fill="currentColor" letterSpacing="0.5">Vokey</text>
      </svg>
    ),
  },
]

export default function BrandCarousel() {
  // Duplicate for seamless infinite scroll
  const items = [...BRANDS, ...BRANDS]

  return (
    <section className="bg-[#f5f3ef] border-t border-b border-[#e8e6e0] py-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-6 text-center">
        <p className="text-[11px] tracking-[0.18em] uppercase text-[#7a7870] font-medium">
          Featuring world-class brands
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-14 animate-marquee whitespace-nowrap items-center">
          {items.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="text-[#b0aa9e] hover:text-[#1a1a18] transition-colors duration-200 shrink-0 cursor-default select-none"
              title={brand.name}
            >
              {brand.svg}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
