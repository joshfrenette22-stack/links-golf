import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'
import ConditionBadge from './ConditionBadge'
import type { Product } from '@/types'

interface Props {
  products: Product[]
}

const brandFallbacks: Record<string, string> = {
  Callaway: '#e4e0d8', Titleist: '#e0dcd0', TaylorMade: '#dddad4',
  Ping: '#e8e4dc', Odyssey: '#e8e4e0', Cleveland: '#e4e0d8',
}

export function ProductAlsoLikeInline({ products }: Props) {
  if (!products.length) return null
  return (
    <div className="mt-7">
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7a7870] mb-3">
        You May Also Like
      </p>
      {products.map(product => (
        <Link
          key={product.id}
          href={`/products/${product.slug}`}
          className="flex items-center gap-3.5 py-3 border-b border-[#e8e6e0] cursor-pointer hover:opacity-75 transition-opacity no-underline"
        >
          <div className="w-16 h-16 bg-[#f5f3ef] flex-shrink-0 rounded-sm overflow-hidden relative">
            <ImageWithFallback
              src={product.imageSrc}
              alt={product.name}
              fill
              className="object-contain p-1"
              fallbackColor={brandFallbacks[product.brand] ?? '#e8e6e0'}
              sizes="64px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-semibold text-[#1a1a18] truncate">{product.name}</p>
            <p className="text-[13px] text-[#7a7870] mt-0.5">
              {product.originalPrice && (
                <span className="line-through mr-1.5 text-[12px]">${product.originalPrice.toFixed(2)}</span>
              )}
              <span className={product.originalPrice ? 'text-[#943020] font-semibold' : ''}>
                ${product.price.toFixed(2)}
              </span>
            </p>
            <div className="mt-1">
              <ConditionBadge condition={product.condition} />
            </div>
          </div>
          <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1a1a18] whitespace-nowrap flex-shrink-0">
            <ShoppingBag size={12} />
            Select
          </span>
        </Link>
      ))}
    </div>
  )
}
