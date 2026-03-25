import ImageWithFallback from '@/components/ui/ImageWithFallback'

const cells = [
  { img: '/images/lifestyle/on-course-tee-shot.jpg', product: 'Ping G430 Max', price: 'From $199.99', fallback: '#c0d4b0', label: 'on-course-tee-shot.jpg' },
  { img: '/images/lifestyle/iron-play-closeup.jpg', product: 'Titleist T200 Irons', price: '$289.99', was: '$449.99', fallback: '#d0c8b8', label: 'iron-play-closeup.jpg' },
  { img: '/images/lifestyle/bag-in-cart.jpg', product: 'Titleist Staff Bag', price: 'From $129.99', fallback: '#c8d8c0', label: 'bag-in-cart.jpg' },
  { img: '/images/lifestyle/putting-green-read.jpg', product: 'Scotty Cameron Select', price: 'From $229.99', fallback: '#d8d0c0', label: 'putting-green-read.jpg' },
]

export default function PhotoGrid() {
  return (
    <section id="photo-grid" className="grid grid-cols-2 md:grid-cols-4">
      {cells.map((cell, i) => (
        <div key={i} className="h-[380px] md:h-[380px] relative overflow-hidden cursor-pointer group">
          <ImageWithFallback
            src={cell.img} alt={cell.product} fill
            className="object-cover"
            fallbackColor={cell.fallback} fallbackLabel={cell.label}
            loading="lazy"
            sizes="25vw"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
          {/* Product card overlay */}
          <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm p-3 rounded">
            <p className="text-[13px] font-semibold text-[#1a1a18]">{cell.product}</p>
            <div className="flex items-center gap-2 mt-0.5">
              {cell.was && <span className="text-xs text-[#7a7870] line-through">{cell.was}</span>}
              <span className="text-xs font-semibold text-[#943020]">{cell.price}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
