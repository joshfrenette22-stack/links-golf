// Real brand logo SVGs supplied by client + text-based fallbacks for remaining brands.
// CSS filter: brightness(0) makes all logos render as solid black so we can
// control opacity uniformly regardless of the original fill colour.

const BRANDS: { name: string; src?: string; textSvg?: React.ReactNode; wide?: boolean }[] = [
  { name: 'Brand 1',        src: '/images/brands/brand-1.svg', wide: true  },
  { name: 'Brand 2',        src: '/images/brands/brand-2.svg'              },
  { name: 'Brand 3',        src: '/images/brands/brand-3.svg'              },
  { name: 'Brand 4',        src: '/images/brands/brand-4.svg', wide: true  },
  { name: 'Brand 6',        src: '/images/brands/brand-6.svg'              },
  {
    name: 'TaylorMade',
    textSvg: (
      <svg viewBox="0 0 200 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="2" y="33" fontFamily="Arial, sans-serif" fontSize="23" fontWeight="800" fill="currentColor" letterSpacing="0.3">TaylorMade</text>
      </svg>
    ),
  },
  {
    name: 'Titleist',
    textSvg: (
      <svg viewBox="0 0 148 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="2" y="33" fontFamily="Georgia, serif" fontSize="24" fontWeight="700" fill="currentColor" letterSpacing="1">Titleist</text>
      </svg>
    ),
  },
  {
    name: 'Callaway',
    textSvg: (
      <svg viewBox="0 0 158 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="2" y="33" fontFamily="Georgia, serif" fontSize="26" fontWeight="700" fill="currentColor" letterSpacing="-0.3">Callaway</text>
      </svg>
    ),
  },
  {
    name: 'Cleveland',
    textSvg: (
      <svg viewBox="0 0 168 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="2" y="33" fontFamily="Georgia, serif" fontSize="24" fontWeight="700" fill="currentColor" letterSpacing="0.4">Cleveland</text>
      </svg>
    ),
  },
  {
    name: 'Cobra',
    textSvg: (
      <svg viewBox="0 0 108 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="2" y="33" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="900" fill="currentColor" letterSpacing="2">COBRA</text>
      </svg>
    ),
  },
  {
    name: 'Mizuno',
    textSvg: (
      <svg viewBox="0 0 126 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="2" y="33" fontFamily="Georgia, serif" fontSize="24" fontWeight="700" fill="currentColor" letterSpacing="0.4">Mizuno</text>
      </svg>
    ),
  },
  {
    name: 'Wilson',
    textSvg: (
      <svg viewBox="0 0 116 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="2" y="33" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="800" fill="currentColor" letterSpacing="1">Wilson</text>
      </svg>
    ),
  },
]

export default function BrandCarousel() {
  const items = [...BRANDS, ...BRANDS]

  return (
    <section className="bg-[#f5f3ef] border-t border-b border-[#e8e6e0] py-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-6 text-center">
        <p className="text-[11px] tracking-[0.18em] uppercase text-[#7a7870] font-medium">
          Featuring world-class brands
        </p>
      </div>

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-14 animate-marquee whitespace-nowrap items-center">
          {items.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className={`shrink-0 cursor-default select-none flex items-center transition-all duration-200 ${
                brand.src
                  ? 'opacity-30 hover:opacity-75'
                  : 'text-[#b0aa9e] hover:text-[#1a1a18]'
              } ${brand.wide ? 'w-36' : 'w-20'}`}
              title={brand.name}
            >
              {brand.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="w-full h-8 object-contain brightness-0"
                  loading="lazy"
                />
              ) : (
                brand.textSvg
              )}
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
          animation: marquee 36s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
