'use client'
import { useCart } from '@/context/CartContext'
import PageHero from '@/components/ui/PageHero'
import ImageWithFallback from '@/components/ui/ImageWithFallback'
import ConditionBadge from '@/components/ui/ConditionBadge'
import { ShoppingBag } from 'lucide-react'

export default function CartPage() {
  const { items, itemCount, subtotal, removeItem, updateQuantity } = useCart()
  const shipping = subtotal >= 75 ? 0 : 9.99
  const tax = subtotal * 0.08
  const orderTotal = subtotal + shipping + tax

  return (
    <>
      <PageHero title="Your Cart" size="sm" />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 md:gap-10 px-4 md:px-12 py-8 md:py-12">
        {/* Cart items */}
        <div>
          {itemCount === 0 ? (
            <div className="py-24 text-center">
              <ShoppingBag size={48} className="text-[#c8c4bc] mx-auto mb-4" />
              <h2 className="font-display font-extrabold text-xl mb-3">Your cart is empty</h2>
              <p className="text-[#7a7870] text-[15px] mb-6">Browse our collection to find your next club.</p>
              <a href="/shop" className="inline-block bg-[#1a1a18] text-white text-[11px] font-bold uppercase tracking-[0.15em] px-8 py-4 hover:opacity-80 transition-opacity">
                Shop All Clubs
              </a>
            </div>
          ) : (
            <div>
              {items.map(item => (
                <div key={item.productId} className="flex flex-wrap md:flex-nowrap items-start gap-4 md:gap-5 py-6 border-b border-[#e8e6e0]">
                  <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-[#f5f3ef] flex-shrink-0 relative rounded">
                    <ImageWithFallback src={item.imageSrc} alt={item.name} fill className="object-contain p-2" fallbackColor="#e8e4dc" sizes="100px" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-[15px]">{item.name}</p>
                    <p className="text-[12px] text-[#7a7870] mt-0.5">{item.condition} condition{item.flex ? ` · ${item.flex} flex` : ''}</p>
                    <div className="mt-1"><ConditionBadge condition={item.condition as 'Mint' | 'Good' | 'Fair'} /></div>
                    <div className="border border-[#c8c4bc] inline-flex mt-3">
                      <button onClick={() => updateQuantity(item.productId, item.quantity - 1)} className="px-3 py-2 text-[13px] border-r border-[#c8c4bc] hover:bg-[#f5f3ef]">−</button>
                      <span className="px-4 py-2 text-[13px]">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.productId, item.quantity + 1)} className="px-3 py-2 text-[13px] border-l border-[#c8c4bc] hover:bg-[#f5f3ef]">+</button>
                    </div>
                  </div>
                  <div className="text-right ml-auto">
                    {item.originalPrice && <p className="text-[12px] text-[#7a7870] line-through">${(item.originalPrice * item.quantity).toFixed(2)}</p>}
                    <p className="font-semibold text-[16px]">${(item.price * item.quantity).toFixed(2)}</p>
                    <button onClick={() => removeItem(item.productId)} className="text-[11px] text-[#7a7870] underline mt-2 cursor-pointer hover:text-[#943020] transition-colors">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order summary */}
        {itemCount > 0 && (
          <div className="bg-[#f5f3ef] p-8 self-start">
            <h2 className="font-extrabold text-[18px] mb-6">Order Summary</h2>
            <div className="space-y-3 text-[14px] mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                {shipping === 0
                  ? <span className="text-[#2e4a2c] font-semibold">FREE</span>
                  : <span>${shipping.toFixed(2)}</span>
                }
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>
            <div className="border-t border-[#e8e6e0] pt-4 flex justify-between font-extrabold text-[22px]">
              <span>Order Total</span>
              <span>${orderTotal.toFixed(2)}</span>
            </div>
            <a href="/checkout" className="block text-center bg-[#1a1a18] text-white text-[11px] font-bold uppercase tracking-[0.15em] py-5 hover:opacity-80 transition-opacity mt-6">
              Proceed to Checkout
            </a>
            <a href="/shop" className="block text-center border border-[#1a1a18] text-[#1a1a18] text-[11px] font-bold uppercase tracking-[0.15em] py-4 hover:bg-[#1a1a18] hover:text-white transition-all mt-2">
              Continue Shopping
            </a>
            <div className="flex justify-center gap-4 md:gap-6 mt-6 text-[11px] text-[#7a7870] flex-wrap">
              <span>🔒 Secure Checkout</span>
              <span>↩ Free Returns</span>
              <span>✓ Inspected Clubs</span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
