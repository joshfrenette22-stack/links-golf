'use client'
import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import FormField from '@/components/ui/FormField'

const conditions = [
  { value: 'like-new', label: 'Like New', desc: 'Essentially unused, original packaging or similar' },
  { value: 'good', label: 'Good', desc: 'Normal play wear, no deep scratches' },
  { value: 'fair', label: 'Fair', desc: 'Visible wear, scuffs on crown or sole' },
  { value: 'poor', label: 'Poor', desc: 'Significant damage, needs regripping' },
]

const steps = [
  { n: '01', title: 'Tell us what you\'ve got', body: 'Fill out the form below with your club details. Photos help but aren\'t required.' },
  { n: '02', title: 'We make you an offer', body: 'Our team reviews your submission and sends a fair market offer within 24 hours.' },
  { n: '03', title: 'Ship and get paid', body: 'Accept the offer, ship your clubs free, and receive payment within 3 days of receipt.' },
]

export default function SellPage() {
  const [selectedCondition, setSelectedCondition] = useState('')

  return (
    <>
      <PageHero eyebrow="Trade-In Program" title="Sell Your Clubs" subtitle="Get a fair price, fast. No haggling, no listings, no waiting." size="lg" />

      {/* How it works */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12 py-16">
        {steps.map(s => (
          <div key={s.n}>
            <p className="text-[64px] font-display font-black text-[#e8e6e0] leading-none mb-2">{s.n}</p>
            <h3 className="font-extrabold text-[20px] mb-3">{s.title}</h3>
            <p className="text-[14px] text-[#7a7870] leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>

      {/* Form */}
      <div className="max-w-[680px] mx-auto px-4 md:px-6 pb-16">
        <h2 className="font-extrabold text-[28px] mb-8 text-center">Get Your Instant Quote</h2>
        <div className="space-y-4">
          <FormField label="Your Name" name="name" required />
          <FormField label="Email" name="email" type="email" required />
          <FormField label="Phone" name="phone" type="tel" />
          <hr className="border-[#e8e6e0]" />
          <p className="text-[13px] font-bold uppercase tracking-wider">Club Details</p>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Brand" name="brand" placeholder="e.g. Titleist, Callaway, TaylorMade" />
            <FormField label="Model" name="model" placeholder="e.g. Vokey SM9, Rogue ST" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Club Type" name="type" placeholder="Driver / Irons / Wedge / Putter" />
            <FormField label="Year / Age" name="year" placeholder="e.g. 2022" />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#1a1a18] mb-3">Condition</p>
            <div className="grid grid-cols-2 gap-3">
              {conditions.map(c => (
                <div
                  key={c.value}
                  onClick={() => setSelectedCondition(c.value)}
                  className={`border p-4 cursor-pointer transition-colors ${selectedCondition === c.value ? 'border-[#1a1a18] bg-[#f5f3ef]' : 'border-[#c8c4bc] hover:border-[#1a1a18]'}`}
                >
                  <p className="font-semibold text-[13px]">{c.label}</p>
                  <p className="text-[12px] text-[#7a7870] mt-1">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <FormField label="Additional Notes" name="notes" textarea rows={4} placeholder="Anything else we should know — shaft, grip, custom specs, etc." />
          <div className="border-2 border-dashed border-[#c8c4bc] p-8 text-center text-[#7a7870] text-[13px]">
            Drop photos here or click to upload (optional)
          </div>
          <button className="w-full bg-[#1a1a18] text-white text-[11px] font-bold uppercase tracking-[0.15em] py-5 hover:opacity-80 transition-opacity mt-8">
            Submit for Quote
          </button>
          <p className="text-center text-[13px] text-[#7a7870]">We typically respond within 24 hours. By submitting, you agree to our Trade-In Terms.</p>
        </div>
      </div>
    </>
  )
}
