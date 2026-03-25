'use client'
import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import FormField from '@/components/ui/FormField'
import StepIndicator from '@/components/ui/StepIndicator'

const trackingSteps = ['Order Placed', 'Inspected & Packed', 'Shipped', 'Out for Delivery', 'Delivered']

const timeline = [
  { date: 'Mar 25, 2026 2:14 PM', event: 'Package in transit', location: 'Salt Lake City, UT', latest: true },
  { date: 'Mar 25, 2026 6:02 AM', event: 'Departed facility', location: 'Denver, CO', latest: false },
  { date: 'Mar 24, 2026 3:45 PM', event: 'Picked up by carrier', location: 'Denver, CO', latest: false },
  { date: 'Mar 24, 2026 10:00 AM', event: 'Inspection complete, packed and labeled', location: '', latest: false },
  { date: 'Mar 23, 2026 9:30 AM', event: 'Order received', location: '', latest: false },
]

export default function TrackPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <PageHero
        eyebrow="Order Management"
        title="Track Your Order"
        subtitle="Enter your order number and email to see real-time status."
        size="md"
      />
      {!submitted ? (
        <div className="max-w-[480px] mx-auto px-6 py-16 text-center">
          <div className="space-y-4 text-left">
            <FormField label="Order Number" name="orderNumber" placeholder="e.g. LG-20260325-0042" required />
            <FormField label="Email Address" name="email" type="email" required />
          </div>
          <button
            onClick={() => setSubmitted(true)}
            className="mt-6 w-full bg-[#1a1a18] text-white text-[11px] font-bold uppercase tracking-[0.15em] py-4 hover:opacity-80 transition-opacity"
          >
            Track Order
          </button>
        </div>
      ) : (
        <div className="max-w-[680px] mx-auto px-4 md:px-6 py-12">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div>
              <p className="font-extrabold text-[18px]">Order #LG-20260325-0042</p>
              <p className="text-[13px] text-[#7a7870]">Placed March 23, 2026</p>
            </div>
            <span className="bg-[#e0f0dc] text-[#2a6020] font-bold text-[12px] px-3 py-1">In Transit</span>
          </div>
          <StepIndicator steps={trackingSteps} currentStep={2} />
          <div className="bg-[#f5f3ef] p-6 mt-8 text-left rounded">
            <h3 className="font-extrabold text-[16px] mb-4">Shipment Details</h3>
            <div className="grid grid-cols-2 gap-y-3 text-[13px]">
              {[['Carrier', 'UPS'], ['Tracking #', '1Z999AA10123456784'], ['Shipped from', 'Denver, CO'], ['Est. delivery', '2 business days']].map(([k, v]) => (
                <div key={k}><p className="text-[11px] uppercase tracking-wider text-[#7a7870] font-bold">{k}</p><p className="mt-0.5">{v}</p></div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="font-extrabold text-[16px] mb-6">Tracking Timeline</h3>
            <div className="relative pl-6 border-l-2 border-[#e8e6e0] space-y-5">
              {timeline.map((event, i) => (
                <div key={i} className="relative">
                  <div className={`absolute left-[-25px] top-1 w-3 h-3 rounded-full ${event.latest ? 'bg-[#2e4a2c]' : 'bg-[#c8c4bc]'}`} />
                  <p className="font-semibold text-[13px]">{event.event}{event.location ? ` — ${event.location}` : ''}</p>
                  <p className="text-[11px] text-[#7a7870] mt-0.5">{event.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
