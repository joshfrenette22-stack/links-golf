import type React from 'react'

// Collection tiles — each card uses a plain <img> to preserve PNG alpha
// Irons card: cream bg + mix-blend-mode:multiply dissolves white residue
// Drivers card: dark bg so black background disappears naturally
// Both get a CSS gradient feather at the bottom of the image zone

const TILES = [
  {
    id: 'drivers-woods',
    name: 'Drivers & Woods',
    subtitle: 'Distance. Forgiveness. Control.',
    href: '/shop?category=drivers',
    imgSrc: '/images/products/drivers-fan.png',
    imgAlt: 'Drivers & woods collection — PING, TaylorMade, Titleist, Callaway, Cobra',
    cardBg: '#1a1a18',
    featherColor: '#1a1a18',
    textColor: '#f5f3ef',
    subtitleColor: '#9a9890',
    blendMode: undefined,
    imgObjectPosition: 'center bottom',
  },
  {
    id: 'irons-wedges',
    name: 'Irons & Wedges',
    subtitle: 'Precision. Consistency. Feel.',
    href: '/shop?category=irons',
    imgSrc: '/images/products/irons-wedges-fan.png',
    imgAlt: 'PING irons & wedges full set fanned out',
    cardBg: '#f5f3ef',
    featherColor: '#f5f3ef',
    textColor: '#1a1a18',
    subtitleColor: '#7a7870',
    blendMode: 'multiply' as React.CSSProperties['mixBlendMode'],
    imgObjectPosition: 'center bottom',
  },
]

export default function CollectionTiles() {
  return (
    <section id="collections" className="px-4 md:px-12 pt-6 md:pt-12 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
      {TILES.map((tile) => (
        <a
          key={tile.id}
          href={tile.href}
          className="rounded overflow-hidden cursor-pointer group block"
          style={{ backgroundColor: tile.cardBg }}
        >
          {/* Image zone */}
          <div className="h-[260px] md:h-[360px] relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tile.imgSrc}
              alt={tile.imgAlt}
              className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              style={{
                mixBlendMode: tile.blendMode,
                objectPosition: tile.imgObjectPosition,
              }}
              loading="lazy"
            />
            {/* Gradient feather — blends club handles into card below */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10"
              style={{
                background: `linear-gradient(to bottom, transparent 0%, ${tile.featherColor} 100%)`,
              }}
            />
          </div>

          {/* Text label */}
          <div className="text-center py-5 pb-8">
            <p className="text-[13px] mb-1" style={{ color: tile.subtitleColor }}>
              {tile.subtitle}
            </p>
            <h2 className="text-[22px] font-extrabold" style={{ color: tile.textColor }}>
              {tile.name}
            </h2>
          </div>
        </a>
      ))}
    </section>
  )
}
