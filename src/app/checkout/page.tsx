'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import { Lock } from 'lucide-react'

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA',
  'HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
  'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
  'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY',
]

const inputCls = 'border border-[#c8c4bc] px-4 py-3 text-[14px] w-full outline-none focus:border-[#1a1a18] transition-colors rounded-none'

function FieldError({ msg }: { msg: string }) {
  return msg ? <p className="text-[#943020] text-[12px] mt-1">{msg}</p> : null
}

export default function CheckoutPage() {
  const router = useRouter()
  const { items, subtotal, clearCart } = useCart()

  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard')
  const shippingCost = shippingMethod === 'express' ? 12.99 : 0
  const tax = subtotal * 0.08
  const orderTotal = subtotal + shippingCost + tax

  // Form state
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [apt, setApt] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')
  const [nameOnCard, setNameOnCard] = useState('')

  // Errors
  const [errors, setErrors] = useState<Record<string, string>>({})

  function handleCardNumber(val: string) {
    const digits = val.replace(/\D/g, '').slice(0, 16)
    const formatted = digits.replace(/(.{4})/g, '$1 ').trim()
    setCardNumber(formatted)
  }

  function handleExpiry(val: string) {
    const digits = val.replace(/\D/g, '').slice(0, 4)
    if (digits.length >= 3) {
      setExpiry(digits.slice(0, 2) + '/' + digits.slice(2))
    } else {
      setExpiry(digits)
    }
  }

  function validate() {
    const e: Record<string, string> = {}
    if (!fullName.trim()) e.fullName = 'This field is required'
    if (!email.trim()) e.email = 'This field is required'
    if (!street.trim()) e.street = 'This field is required'
    if (!city.trim()) e.city = 'This field is required'
    if (!state) e.state = 'This field is required'
    if (!zip.trim()) e.zip = 'This field is required'
    const rawCard = cardNumber.replace(/\s/g, '')
    if (!rawCard || rawCard.length < 13) e.cardNumber = 'Please enter a valid card number'
    if (!expiry.trim() || expiry.length < 5) e.expiry = 'This field is required'
    if (!cvv.trim() || cvv.length < 3) e.cvv = 'This field is required'
    if (!nameOnCard.trim()) e.nameOnCard = 'This field is required'
    return e
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      clearCart()
      router.push('/order-confirmation')
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 md:gap-10 px-4 md:px-12 py-8 md:py-10">
        {/* Left — Form */}
        <div>
          {/* Contact */}
          <h2 className="font-extrabold text-[20px] mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-[0.08em] mb-1">Full Name <span className="text-[#943020]">*</span></label>
              <input
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                className={inputCls}
                placeholder="Jane Smith"
              />
              <FieldError msg={errors.fullName ?? ''} />
            </div>
            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-[0.08em] mb-1">Email <span className="text-[#943020]">*</span></label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={inputCls}
                placeholder="jane@example.com"
              />
              <FieldError msg={errors.email ?? ''} />
            </div>
            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-[0.08em] mb-1">Phone <span className="text-[#7a7870] font-normal">(optional)</span></label>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className={inputCls}
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <hr className="border-[#e8e6e0] my-8" />

          {/* Shipping Address */}
          <h2 className="font-extrabold text-[20px] mb-6">Shipping Address</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-[0.08em] mb-1">Street Address <span className="text-[#943020]">*</span></label>
              <input
                type="text"
                value={street}
                onChange={e => setStreet(e.target.value)}
                className={inputCls}
                placeholder="123 Fairway Lane"
              />
              <FieldError msg={errors.street ?? ''} />
            </div>
            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-[0.08em] mb-1">Apt / Suite <span className="text-[#7a7870] font-normal">(optional)</span></label>
              <input
                type="text"
                value={apt}
                onChange={e => setApt(e.target.value)}
                className={inputCls}
                placeholder="Apt 4B"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-[0.08em] mb-1">City <span className="text-[#943020]">*</span></label>
                <input
                  type="text"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  className={inputCls}
                  placeholder="Denver"
                />
                <FieldError msg={errors.city ?? ''} />
              </div>
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-[0.08em] mb-1">State <span className="text-[#943020]">*</span></label>
                <select
                  value={state}
                  onChange={e => setState(e.target.value)}
                  className={inputCls}
                >
                  <option value="">Select…</option>
                  {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <FieldError msg={errors.state ?? ''} />
              </div>
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-[0.08em] mb-1">ZIP Code <span className="text-[#943020]">*</span></label>
                <input
                  type="text"
                  value={zip}
                  onChange={e => setZip(e.target.value)}
                  className={inputCls}
                  placeholder="80202"
                  maxLength={10}
                />
                <FieldError msg={errors.zip ?? ''} />
              </div>
            </div>
          </div>

          <hr className="border-[#e8e6e0] my-8" />

          {/* Shipping Method */}
          <h2 className="font-extrabold text-[20px] mb-4">Shipping Method</h2>
          <div className="space-y-3">
            {[
              { value: 'standard' as const, label: 'Standard Shipping', sub: '3–5 business days', price: 'FREE' },
              { value: 'express' as const, label: 'Express Shipping', sub: '1–2 business days', price: '$12.99' },
            ].map(opt => (
              <div
                key={opt.value}
                onClick={() => setShippingMethod(opt.value)}
                className={`border p-4 cursor-pointer flex items-center justify-between transition-colors ${
                  shippingMethod === opt.value ? 'border-[#1a1a18] bg-[#f5f3ef]' : 'border-[#c8c4bc] hover:border-[#1a1a18]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${shippingMethod === opt.value ? 'border-[#1a1a18]' : 'border-[#c8c4bc]'}`}>
                    {shippingMethod === opt.value && <div className="w-2 h-2 rounded-full bg-[#1a1a18]" />}
                  </div>
                  <div>
                    <p className="font-semibold text-[14px]">{opt.label}</p>
                    <p className="text-[12px] text-[#7a7870]">{opt.sub}</p>
                  </div>
                </div>
                <span className={`font-semibold text-[14px] ${opt.price === 'FREE' ? 'text-[#2e4a2c]' : ''}`}>{opt.price}</span>
              </div>
            ))}
          </div>

          <hr className="border-[#e8e6e0] my-8" />

          {/* Payment */}
          <h2 className="font-extrabold text-[20px] mb-1">Payment</h2>
          <p className="text-[12px] text-[#7a7870] mb-5 uppercase tracking-[0.08em] font-semibold">Demo — no real payment processed</p>
          <div className="space-y-4">
            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-[0.08em] mb-1">Card Number <span className="text-[#943020]">*</span></label>
              <input
                type="text"
                value={cardNumber}
                onChange={e => handleCardNumber(e.target.value)}
                className={inputCls}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                inputMode="numeric"
              />
              <FieldError msg={errors.cardNumber ?? ''} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-[0.08em] mb-1">Expiry <span className="text-[#943020]">*</span></label>
                <input
                  type="text"
                  value={expiry}
                  onChange={e => handleExpiry(e.target.value)}
                  className={inputCls}
                  placeholder="MM/YY"
                  maxLength={5}
                  inputMode="numeric"
                />
                <FieldError msg={errors.expiry ?? ''} />
              </div>
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-[0.08em] mb-1">CVV <span className="text-[#943020]">*</span></label>
                <input
                  type="text"
                  value={cvv}
                  onChange={e => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  className={inputCls}
                  placeholder="123"
                  maxLength={4}
                  inputMode="numeric"
                />
                <FieldError msg={errors.cvv ?? ''} />
              </div>
            </div>
            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-[0.08em] mb-1">Name on Card <span className="text-[#943020]">*</span></label>
              <input
                type="text"
                value={nameOnCard}
                onChange={e => setNameOnCard(e.target.value)}
                className={inputCls}
                placeholder="Jane Smith"
              />
              <FieldError msg={errors.nameOnCard ?? ''} />
            </div>
          </div>

          {/* Place Order */}
          <button
            type="submit"
            className="block w-full text-center bg-[#1a1a18] text-white text-[12px] font-bold uppercase tracking-[0.15em] py-5 hover:opacity-80 transition-opacity mt-8"
          >
            Place Order
          </button>

          {/* Trust signals */}
          <div className="flex justify-center gap-4 md:gap-6 mt-4 text-[12px] text-[#7a7870] flex-wrap text-center">
            <span className="flex items-center gap-1.5"><Lock size={12} className="flex-shrink-0" /> Secure checkout</span>
            <span>30-day free returns</span>
            <span>Every club inspected &amp; graded</span>
          </div>

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
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className={shippingCost === 0 ? 'text-[#2e4a2c] font-semibold' : ''}>
                {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
          </div>
          <div className="border-t border-[#e8e6e0] pt-4 mt-4 flex justify-between font-extrabold text-[18px]">
            <span>Order Total</span>
            <span>${orderTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </form>
  )
}
