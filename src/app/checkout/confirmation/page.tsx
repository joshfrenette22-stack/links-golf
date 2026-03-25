'use client'
import { useEffect } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function ConfirmationPage() {
  const { clearCart } = useCart()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { clearCart() }, [])

  return (
    <div className="max-w-[640px] mx-auto px-6 py-16 md:py-20 text-center">
      <CheckCircle2 size={64} className="text-[#2e4a2c] mx-auto mb-6" />
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#2e4a2c] mb-3">Order Confirmed</p>
      <h1 className="font-display font-extrabold text-[32px] md:text-[36px] mb-4">Thank you for your order.</h1>
      <p className="text-[14px] text-[#7a7870] mb-2">Order #LG-20260325-0042</p>
      <p className="text-[14px] text-[#7a7870] mb-10">A confirmation has been sent to your email address.</p>
      <hr className="border-[#e8e6e0] mb-10" />
      <div className="bg-[#f5f3ef] p-8 text-left mb-10 rounded">
        <h2 className="font-extrabold text-[16px] mb-4">Order Summary</h2>
        {[
          { name: 'Callaway Rogue ST Max · Mint', price: 149.99 },
          { name: 'Titleist Vokey SM9 · Good', price: 79.99 },
        ].map(item => (
          <div key={item.name} className="flex justify-between text-[13px] mb-3">
            <span className="text-[#7a7870]">{item.name}</span>
            <span className="font-semibold">${item.price.toFixed(2)}</span>
          </div>
        ))}
        <hr className="border-[#e8e6e0] my-4" />
        <div className="flex justify-between text-[13px] mb-2"><span>Subtotal</span><span>$229.98</span></div>
        <div className="flex justify-between text-[13px] mb-2"><span>Shipping</span><span className="text-[#2e4a2c] font-semibold">Free</span></div>
        <div className="flex justify-between font-extrabold text-[16px] mt-2"><span>Total</span><span>$229.98</span></div>
        <hr className="border-[#e8e6e0] my-4" />
        <p className="text-[12px] text-[#7a7870]">Shipping to: 2240 Larimer St, Denver CO 80205</p>
      </div>
      <div className="flex flex-col md:flex-row gap-3 justify-center">
        <a href="/track" className="inline-block bg-[#1a1a18] text-white text-[11px] font-bold uppercase tracking-[0.15em] px-8 py-4 hover:opacity-80 transition-opacity">Track Your Order</a>
        <a href="/shop" className="inline-block border border-[#1a1a18] text-[#1a1a18] text-[11px] font-bold uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#1a1a18] hover:text-white transition-all">Continue Shopping</a>
      </div>
      <p className="text-[13px] text-[#7a7870] mt-8">Estimated delivery: 3–5 business days. You&apos;ll receive a tracking number via email once your order ships.</p>
    </div>
  )
}
