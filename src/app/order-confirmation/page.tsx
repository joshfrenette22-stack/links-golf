'use client'
import { useEffect, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import type { CartItem } from '@/context/CartContext'

function addBusinessDays(date: Date, days: number): Date {
  const result = new Date(date)
  let added = 0
  while (added < days) {
    result.setDate(result.getDate() + 1)
    const day = result.getDay()
    if (day !== 0 && day !== 6) added++
  }
  return result
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function OrderConfirmationPage() {
  const [orderNumber, setOrderNumber] = useState('')
  const [estimatedDelivery, setEstimatedDelivery] = useState('')
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartSubtotal, setCartSubtotal] = useState(0)
  const [toast, setToast] = useState(false)

  useEffect(() => {
    // Read cart before clearing
    try {
      const stored = localStorage.getItem('smooth_swing_cart')
      if (stored) {
        const items: CartItem[] = JSON.parse(stored)
        setCartItems(items)
        const sub = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
        setCartSubtotal(sub)
        localStorage.removeItem('smooth_swing_cart')
      }
    } catch {}

    // Generate order number
    const digits = Math.floor(10000 + Math.random() * 90000)
    setOrderNumber(`SS-${digits}`)

    // Estimated delivery: 5 business days from today
    const delivery = addBusinessDays(new Date(), 5)
    setEstimatedDelivery(formatDate(delivery))
  }, [])

  const shipping = cartSubtotal >= 75 ? 0 : 9.99
  const tax = cartSubtotal * 0.08
  const total = cartSubtotal + shipping + tax

  return (
    <div className="max-w-[640px] mx-auto px-4 py-16 text-center">
      {/* Checkmark */}
      <div className="flex justify-center mb-6">
        <CheckCircle2 size={64} color="#2e4a2c" />
      </div>

      <h1 className="font-display font-extrabold text-[32px] md:text-[40px] mb-3">Order Confirmed</h1>
      <p className="text-[#7a7870] text-[15px] mb-1">Order <span className="font-semibold text-[#1a1a18]">#{orderNumber}</span></p>
      <p className="text-[#7a7870] text-[14px] mb-8">Estimated Arrival: <span className="font-semibold text-[#1a1a18]">{estimatedDelivery}</span></p>

      {/* Summary box */}
      {cartItems.length > 0 && (
        <div className="bg-[#f5f3ef] p-6 text-left mb-8 rounded">
          <h2 className="font-extrabold text-[16px] mb-4">Order Summary</h2>
          {cartItems.map(item => (
            <div key={item.productId} className="flex justify-between text-[13px] mb-2">
              <span className="text-[#7a7870]">{item.name} × {item.quantity}</span>
              <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <hr className="border-[#e8e6e0] my-3" />
          <div className="space-y-1.5 text-[13px]">
            <div className="flex justify-between">
              <span className="text-[#7a7870]">Subtotal</span>
              <span>${cartSubtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#7a7870]">Shipping</span>
              <span className={shipping === 0 ? 'text-[#2e4a2c] font-semibold' : ''}>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#7a7870]">Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
          </div>
          <div className="border-t border-[#e8e6e0] mt-3 pt-3 flex justify-between font-extrabold text-[16px]">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      )}

      {/* CTA buttons */}
      <div className="flex gap-3 justify-center flex-wrap">
        <a
          href="/shop"
          className="bg-[#1a1a18] text-white text-[11px] font-bold uppercase tracking-[0.15em] px-8 py-4 hover:opacity-80 transition-opacity inline-block"
        >
          Continue Shopping
        </a>
        <button
          onClick={() => setToast(true)}
          className="border border-[#1a1a18] text-[#1a1a18] text-[11px] font-bold uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#1a1a18] hover:text-white transition-all inline-block"
        >
          Track Your Order
        </button>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-[#1c2e1a] text-white px-6 py-4 rounded shadow-lg text-[14px] z-50">
          Tracking info will be emailed to you shortly.
        </div>
      )}
    </div>
  )
}
