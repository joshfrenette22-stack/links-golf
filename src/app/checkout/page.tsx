'use client'
import { useState } from 'react'
import StepIndicator from '@/components/ui/StepIndicator'
import FormField from '@/components/ui/FormField'
import { useCart } from '@/context/CartContext'

export default function CheckoutPage() {
  const { items, subtotal } = useCart()
  const [shipping, setShipping] = useState('standard')

  const shippingCost = shipping === 'express' ? 12.99 : 0

  return (
    <>
      <StepIndicator steps={['Contact', 'Shipping', 'Payment', 'Review']} currentStep={0} />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 md:gap-10 px-4 md:px-12 py-8 md:py-10">
        {/* Left — Form */}
        <div>
          <h2 className="font-extrabold text-[20px] mb-6">Contact Information</h2>
          <div className="space-y-4">
            <FormField label="Email" type="email" name="email" required />
            <FormField label="Phone" type="tel" name="phone" />
          </div>

          <hr className="border-[#e8e6e0] my-8" />

          <h2 className="font-extrabold text-[20px] mb-6">Shipping Address</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField label="First Name" name="firstName" required />
              <FormField label="Last Name" name="lastName" required />
            </div>
            <FormField label="Address Line 1" name="address1" required />
            <FormField label="Address Line 2" name="address2" placeholder="Apartment, suite, etc. (optional)" />
            <div className="grid grid-cols-3 gap-4">
              <FormField label="City" name="city" required />
              <FormField label="State" name="state" required />
              <FormField label="ZIP Code" name="zip" required />
            </div>
            <FormField label="Country" name="country" value="United States" />
          </div>

          <h3 className="font-extrabold text-[16px] mt-8 mb-4">Shipping Method</h3>
          <div className="space-y-3">
            {[
              { value: 'standard', label: 'Standard Shipping', sub: '3–5 business days', price: 'FREE' },
              { value: 'express', label: 'Express Shipping', sub: '1–2 business days', price: '$12.99' },
            ].map(opt => (
              <div
                key={opt.value}
                onClick={() => setShipping(opt.value)}
                className={`border p-4 cursor-pointer flex items-center justify-between transition-colors ${
                  shipping === opt.value ? 'border-[#1a1a18] bg-[#f5f3ef]' : 'border-[#c8c4bc] hover:border-[#1a1a18]'
                }`}
              >
                <div>
                  <p className="font-semibold text-[14px]">{opt.label}</p>
                  <p className="text-[12px] text-[#7a7870]">{opt.sub}</p>
                </div>
                <span className={`font-semibold text-[14px] ${opt.price === 'FREE' ? 'text-[#2e4a2c]' : ''}`}>{opt.price}</span>
              </div>
            ))}
          </div>

          <button className="block w-full text-center bg-[#1a1a18] text-white text-[11px] font-bold uppercase tracking-[0.15em] py-5 hover:opacity-80 transition-opacity mt-8">
            Continue to Payment
          </button>
          <div className="text-center mt-4">
            <a href="/cart" className="text-[13px] underline underline-offset-2 hover:text-[#2e4a2c] transition-colors">← Return to cart</a>
          </div>
        </div>

        {/* Right — Order Summary */}
        <div className="bg-[#f5f3ef] p-8 self-start">
          <h2 className="font-extrabold text-[18px] mb-6">Order Summary</h2>
          {items.map(item => (
            <div key={item.productId} className="flex gap-3 mb-4 text-[13px]">
              <span className="flex-1 text-[#7a7870]">{item.name} × {item.quantity}</span>
              <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <hr className="border-[#e8e6e0] my-4" />
          <div className="space-y-2 text-[13px]">
            <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span className={shippingCost === 0 ? 'text-[#2e4a2c] font-semibold' : ''}>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span></div>
          </div>
          <div className="border-t border-[#e8e6e0] pt-4 mt-4 flex justify-between font-extrabold text-[18px]">
            <span>Total</span><span>${(subtotal + shippingCost).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </>
  )
}
