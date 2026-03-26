import type { Product } from '@/types'
import ImageWithFallback from './ImageWithFallback'
import ConditionBadge from './ConditionBadge'
import SectionBadge from './SectionBadge'

const brandFallback: Record<string, string> = {
  Callaway:   '#e4e0d8',
  Titleist:   '#e0dcd0',
  TaylorMade: '#dddad4',
  Ping:       '#e8e4dc',
  Odyssey:    '#e8e4e0',
  Cleveland:  '#e4e0d8',
}

interface Props { product: Product; size?: 'sm' | 'lg' }

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-[#c8940c] text-xs">
      {'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))}
    </span>
  )
}

export default function ProductCard({ product, size = 'sm' }: Props) {
  const h = size === 'lg' ? 'h-[300px]' : 'h-[280px]'
  const fallback = brandFallback[product.brand] ?? '#e8e4dc'
  const badgeVariant = product.badge?.startsWith('-') ? 'red' : product.badge === 'New In' ? 'gold' : 'dark'

  return (
    <div className="bg-white rounded overflow-hidden hover:shadow-md transition-shadow duration-200">
      <a href={`/products/${product.slug}`} className={`${h} relative overflow-hidden block group`}>
        {product.badge && <SectionBadge label={product.badge} variant={badgeVariant} />}
        <ImageWithFallback
          src={product.imageSrc} alt={product.name} fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          fallbackColor={fallback}
          fallbackLabel={`${product.id}.jpg`}
          loading="lazy"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </a>
      <div className="bg-white px-4 pt-4 pb-5">
        <p className="text-sm font-semibold text-center">{product.name}</p>
        <p className="text-xs text-[#7a7870] text-center mt-0.5">{product.type}{product.spec ? ` · ${product.spec}` : ''}</p>
        <div className="flex justify-center mt-1">
          <ConditionBadge condition={product.condition} />
        </div>
        <div className="flex justify-center items-baseline gap-2 mt-2">
          {product.originalPrice && (
            <span className="text-xs text-[#7a7870] line-through">${product.originalPrice.toFixed(2)}</span>
          )}
          <span className={`text-sm font-semibold ${product.originalPrice ? 'text-[#943020]' : 'text-[#1a1a18]'}`}>
            ${product.price.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-center items-center gap-1 mt-1">
          <StarRating rating={product.rating} />
          <span className="text-[11px] text-[#7a7870] ml-1">({product.reviewCount})</span>
        </div>
        <a href={`/products/${product.slug}`} className="block text-center text-[13px] underline underline-offset-2 mt-2.5 hover:text-[#2e4a2c] transition-colors">
          View options
        </a>
      </div>
    </div>
  )
}
