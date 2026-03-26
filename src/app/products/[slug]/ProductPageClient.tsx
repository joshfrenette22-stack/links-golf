'use client'
import { notFound } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Check, Lock, RotateCcw, ShieldCheck } from 'lucide-react'
import { PRODUCTS } from '@/lib/data'
import type { Product } from '@/types'
import ConditionBadge from '@/components/ui/ConditionBadge'
import ProductCard from '@/components/ui/ProductCard'
import { useCart } from '@/context/CartContext'
import { ProductImageGallery } from '@/components/ui/ProductImageGallery'
import { ProductPriceBlock } from '@/components/ui/ProductPriceBlock'
import { ProductStatusBadges } from '@/components/ui/ProductStatusBadges'
import { ProductVariantSelector } from '@/components/ui/ProductVariantSelector'
import { ProductQuantitySelector } from '@/components/ui/ProductQuantitySelector'
import { ProductAccordion } from '@/components/ui/ProductAccordion'
import { ProductSpecsTable } from '@/components/ui/ProductSpecsTable'
import { ProductAlsoLikeInline } from '@/components/ui/ProductAlsoLikeInline'
import { ProductShareRow } from '@/components/ui/ProductShareRow'
import Breadcrumb from '@/components/ui/Breadcrumb'

const brandFallbackColors: Record<string, string> = {
  Callaway: '#e4e0d8',
  Titleist: '#e0dcd0',
  TaylorMade: '#dddad4',
  Ping: '#e8e4dc',
  Odyssey: '#e8e4e0',
  Cleveland: '#e4e0d8',
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex text-[#c8940c] text-[14px] leading-none gap-px">
      {[1,2,3,4,5].map(i => (
        <span key={i}>{i <= Math.round(rating) ? '★' : '☆'}</span>
      ))}
    </div>
  )
}

export default function ProductPageClient({ slug }: { slug: string }) {
  const router = useRouter()
  const { addItem } = useCart()

  const product = PRODUCTS.find(p => p.slug === slug)
  if (!product) notFound()

  const [selectedFlex, setSelectedFlex] = useState('Regular')
  const [quantity, setQuantity] = useState(1)
  const [confirmed, setConfirmed] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  const fallbackColor = brandFallbackColors[product.brand] ?? '#e8e6e0'
  const badgeVariant = product.badge?.startsWith('-') ? 'red' : product.badge === 'Top Pick' ? 'dark' : 'gold'

  const relatedProducts = product.relatedSlugs
    .map(s => PRODUCTS.find(p => p.slug === s || p.id === s))
    .filter((p): p is Product => !!p)

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      imageSrc: product.imageSrc,
      price: product.price,
      originalPrice: product.originalPrice,
      condition: product.condition,
      quantity,
      flex: selectedFlex,
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 1800)
  }

  const handleBuyItNow = () => {
    handleAddToCart()
    router.push('/checkout')
  }

  return (
    <>
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Shop', href: '/shop' },
        { label: product.type, href: `/shop?category=${product.type.toLowerCase()}` },
        { label: product.name },
      ]} />

      {/* Back link */}
      <div className="px-4 md:px-12 pt-2 pb-0">
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 text-[12px] text-[#7a7870] hover:text-[#1a1a18] transition-colors"
        >
          <ArrowLeft size={13} />
          Back to all clubs
        </Link>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-12 py-6 max-w-[1400px] mx-auto">

        {/* LEFT: Gallery */}
        <ProductImageGallery
          imageSrc={product.imageSrc}
          productName={product.name}
          badge={product.badge}
          badgeVariant={badgeVariant as 'red' | 'dark' | 'gold'}
          fallbackColor={fallbackColor}
        />

        {/* RIGHT: Info */}
        <div className="pt-0 md:pt-2">

          {/* Stars + review count */}
          <div className="flex items-center gap-2 mb-2.5">
            <StarRating rating={product.rating} />
            <span className="text-[13px] text-[#7a7870]">({product.reviewCount} reviews)</span>
          </div>

          {/* Brand + Name */}
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7a7870] mb-1">
            {product.brand}
          </p>
          <h1 className="font-display font-extrabold text-[28px] md:text-[32px] leading-[1.08] mb-2.5">
            {product.name}
            {product.spec && (
              <span className="font-normal text-[18px] md:text-[20px] text-[#7a7870] ml-2">{product.spec}</span>
            )}
          </h1>

          {/* Price */}
          <ProductPriceBlock price={product.price} originalPrice={product.originalPrice} />

          {/* Tax note */}
          <p className="text-[12px] text-[#7a7870] mt-1.5 mb-4">
            Tax included. Shipping calculated at checkout.
          </p>

          {/* Condition badge */}
          <div className="mb-5">
            <ConditionBadge condition={product.condition} />
          </div>

          {/* Status badges */}
          <ProductStatusBadges />

          {/* Shaft flex */}
          <ProductVariantSelector
            label="Shaft Flex"
            options={['Regular', 'Stiff', 'X-Stiff']}
            selected={selectedFlex}
            onChange={setSelectedFlex}
          />

          {/* Quantity */}
          <ProductQuantitySelector value={quantity} onChange={setQuantity} />

          {/* Confirm checkbox */}
          <div className="flex items-start gap-2.5 mt-5 mb-1">
            <input
              type="checkbox"
              id="confirm-condition"
              checked={confirmed}
              onChange={e => setConfirmed(e.target.checked)}
              className="w-4 h-4 mt-0.5 flex-shrink-0 cursor-pointer accent-[#1a1a18]"
            />
            <label htmlFor="confirm-condition" className="text-[12px] text-[#7a7870] leading-relaxed cursor-pointer">
              I have reviewed the condition details for this club before purchasing.
            </label>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-[18px] mt-4 text-[12px] font-bold uppercase tracking-[0.15em] text-white transition-all rounded-sm ${
              addedToCart ? 'bg-[#2e4a2c]' : 'bg-[#1a1a18] hover:opacity-80'
            }`}
          >
            {addedToCart ? 'Added to Cart' : 'Add to Cart'}
          </button>

          {/* Buy It Now */}
          <button
            onClick={handleBuyItNow}
            className="w-full py-[18px] mt-2 text-[12px] font-bold uppercase tracking-[0.15em] text-white bg-[#222] hover:opacity-80 transition-opacity rounded-sm"
          >
            Buy It Now
          </button>

          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 mt-3.5 pt-3.5 border-t border-[#e8e6e0] text-[11px] text-[#7a7870]">
            <span className="flex items-center gap-1.5">
              <Lock size={12} className="flex-shrink-0" /> Secure Checkout
            </span>
            <span className="flex items-center gap-1.5">
              <RotateCcw size={12} className="flex-shrink-0" /> Free Returns
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={12} className="flex-shrink-0" /> Inspected
            </span>
          </div>

          {/* Accordions */}
          <ProductAccordion items={[
            {
              id: 'description',
              label: 'Description',
              defaultOpen: true,
              children: (
                <>
                  <p className="mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-[14px] text-[#7a7870]">
                        <Check size={13} className="text-[#2e4a2c] mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </>
              ),
            },
            {
              id: 'condition',
              label: 'Condition Details',
              children: (
                <>
                  <div className="flex items-center gap-2.5 mb-3">
                    <ConditionBadge condition={product.condition} />
                    <span className="text-[14px] font-semibold">{product.condition} Condition</span>
                  </div>
                  <p className="mb-4">{product.conditionNotes}</p>
                  <p className="text-[13px]">
                    Not as described?{' '}
                    <Link href="/returns" className="underline underline-offset-2 hover:text-[#2e4a2c]">
                      Our 30-day return policy
                    </Link>{' '}
                    has you covered.
                  </p>
                </>
              ),
            },
            {
              id: 'specs',
              label: 'Specifications',
              children: <ProductSpecsTable specs={product.specs} />,
            },
            {
              id: 'returns',
              label: 'Shipping & Returns',
              children: (
                <ul className="space-y-2">
                  {[
                    'Standard shipping (3–5 days): Free on orders over $75',
                    'Express shipping (1–2 days): $12.99',
                    'Ships within 1 business day of order',
                    '30-day returns — free return label provided',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={13} className="text-[#2e4a2c] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              ),
            },
          ]} />

          {/* Inline You May Also Like */}
          <ProductAlsoLikeInline products={relatedProducts} />

          {/* Share */}
          <ProductShareRow />

        </div>
      </div>

      {/* Bottom carousel */}
      <section className="border-t border-[#e8e6e0] px-4 md:px-12 py-12 max-w-[1400px] mx-auto">
        <h2 className="font-display font-extrabold text-[22px] mb-7">You may also like</h2>
        <div className="flex gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2">
          {relatedProducts.map(related => (
            <div key={related.id} className="flex-none w-[220px] md:w-[240px]">
              <ProductCard product={related} size="sm" />
            </div>
          ))}
        </div>
      </section>

      {/* Mobile sticky Add to Cart bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#e8e6e0] flex items-center gap-3 px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
        <p className="flex-1 text-[12px] font-semibold truncate">{product.name}</p>
        <p className="text-[13px] font-bold text-[#943020] flex-shrink-0">${product.price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className={`text-[10px] font-bold uppercase tracking-wider px-5 py-3 text-white flex-shrink-0 rounded-sm transition-colors ${
            addedToCart ? 'bg-[#2e4a2c]' : 'bg-[#1a1a18]'
          }`}
        >
          {addedToCart ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </>
  )
}
