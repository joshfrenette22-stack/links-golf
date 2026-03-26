'use client'
import { useState } from 'react'
import { Heart, Play } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'

interface Props {
  imageSrc: string
  productName: string
  badge?: string
  badgeVariant?: 'red' | 'dark' | 'gold'
  fallbackColor: string
}

export function ProductImageGallery({ imageSrc, productName, badge, badgeVariant = 'red', fallbackColor }: Props) {
  const [activeThumb, setActiveThumb] = useState(0)
  const [isFaved, setIsFaved] = useState(false)

  const badgeClass =
    badgeVariant === 'red' ? 'bg-[#943020] text-white' :
    badgeVariant === 'gold' ? 'bg-[#b88c28] text-white' :
    'bg-[#1a1a18] text-white'

  return (
    <div className="sticky top-[80px] self-start">
      {/* Main image */}
      <div className="relative bg-[#f5f3ef] rounded-sm overflow-hidden" style={{ aspectRatio: '1/1.05' }}>
        {badge && (
          <span className={`absolute top-3.5 left-3.5 z-10 text-[10px] font-extrabold uppercase tracking-[0.1em] px-2.5 py-1.5 ${badgeClass}`}>
            {badge}
          </span>
        )}
        <button
          onClick={() => setIsFaved(f => !f)}
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center bg-white/80 rounded-full cursor-pointer hover:bg-white transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart
            size={16}
            strokeWidth={1.8}
            className={isFaved ? 'fill-[#943020] stroke-[#943020]' : 'stroke-[#1a1a18]'}
          />
        </button>
        <ImageWithFallback
          src={imageSrc}
          alt={productName}
          fill
          className="object-contain p-8"
          fallbackColor={fallbackColor}
          fallbackLabel={productName}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnail strip */}
      <div className="hidden md:flex gap-2 mt-2.5">
        {[0, 1, 2].map(i => (
          <button
            key={i}
            onClick={() => setActiveThumb(i)}
            className={`w-[80px] h-[80px] bg-[#f5f3ef] cursor-pointer border-2 rounded-sm overflow-hidden transition-colors relative flex-shrink-0 ${
              activeThumb === i ? 'border-[#1a1a18]' : 'border-transparent hover:border-[#c8c4bc]'
            }`}
            aria-label={`View image ${i + 1}`}
          >
            <ImageWithFallback
              src={imageSrc}
              alt={`${productName} view ${i + 1}`}
              fill
              className="object-contain p-1.5"
              fallbackColor={fallbackColor}
              sizes="80px"
            />
          </button>
        ))}
        {/* Video slot */}
        <button
          onClick={() => setActiveThumb(3)}
          className={`w-[80px] h-[80px] bg-[#1a1a18] cursor-pointer border-2 rounded-sm overflow-hidden transition-colors flex items-center justify-center flex-shrink-0 ${
            activeThumb === 3 ? 'border-[#1a1a18]' : 'border-transparent hover:border-[#c8c4bc]'
          }`}
          aria-label="Watch video"
        >
          <Play size={18} className="text-white/60" />
        </button>
      </div>
    </div>
  )
}
