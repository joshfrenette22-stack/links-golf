'use client'
import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import { ChevronDown } from 'lucide-react'

const categories = [
  {
    title: 'Orders & Shipping',
    faqs: [
      { q: 'How long does shipping take?', a: 'Standard shipping takes 3–5 business days. Express (1–2 business days) is available at checkout for $12.99.' },
      { q: 'Do you ship internationally?', a: 'We currently ship to the continental US, Alaska, Hawaii, and Canada. International shipping is not yet available.' },
      { q: 'Can I change my shipping address after ordering?', a: 'Contact us within 1 hour of placing your order and we\'ll do our best to update the address before the order ships.' },
      { q: 'How do I track my order?', a: 'You\'ll receive a tracking number via email once your order ships. You can also use our Track Order page.' },
    ],
  },
  {
    title: 'Returns & Exchanges',
    faqs: [
      { q: 'What is your return policy?', a: 'We offer free returns within 30 days of delivery. If the condition doesn\'t match the description, we\'ll cover return shipping.' },
      { q: 'How do I start a return?', a: 'Log in to your account, find your order, and click "Start Return." You\'ll receive a prepaid shipping label.' },
      { q: 'When will I get my refund?', a: 'Refunds are processed within 3–5 business days of receiving the returned item.' },
      { q: 'Can I exchange for a different club?', a: 'We recommend returning for a refund and placing a new order — it\'s faster and ensures availability.' },
    ],
  },
  {
    title: 'Club Condition & Grading',
    faqs: [
      { q: 'What does "Mint" mean?', a: 'Mint clubs show no visible play wear. They look and perform like new.' },
      { q: 'What does "Fair" condition mean?', a: 'Fair clubs show visible wear from regular play but are fully functional. Performance is not compromised.' },
      { q: 'Do clubs come with original headcovers?', a: 'We include headcovers when available. Each listing specifies whether headcovers are included.' },
      { q: 'Are the clubs regripped?', a: 'Grips are described in the listing. Mint clubs have original grips. Fair clubs may benefit from regripping.' },
    ],
  },
  {
    title: 'Trade-Ins',
    faqs: [
      { q: 'How does the trade-in program work?', a: 'Submit your club details via our Sell page. We\'ll send a fair offer within 24 hours. Accept, ship free, get paid.' },
      { q: 'How long does it take to get an offer?', a: 'We review submissions and respond within 24 hours during business days.' },
      { q: 'What happens if my club is in worse condition than I described?', a: 'We\'ll contact you and may revise the offer. We\'re transparent about our reasoning.' },
    ],
  },
  {
    title: 'Buying Guide',
    faqs: [
      { q: 'How do I know which shaft flex is right for me?', a: 'As a general rule: swing speed under 85mph = Regular, 85–95mph = Stiff, 95mph+ = X-Stiff.' },
      { q: 'Do you offer club fitting?', a: 'Visit our Denver shop for in-person fitting. We also have a Buying Guide to help with online purchases.' },
      { q: 'Can I return a club that doesn\'t fit my game?', a: 'Yes — our 30-day return policy applies regardless of the reason.' },
    ],
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})
  const toggle = (key: string) => setOpenItems(prev => ({ ...prev, [key]: !prev[key] }))

  return (
    <>
      <PageHero eyebrow="Support" title="Frequently Asked Questions" size="sm" />
      <div className="max-w-[760px] mx-auto px-4 md:px-6 py-16">
        {categories.map(cat => (
          <div key={cat.title} className="mb-10">
            <h2 className="font-display font-extrabold text-[20px] mb-4 text-[#1a1a18]">{cat.title}</h2>
            {cat.faqs.map((faq, j) => {
              const key = `${cat.title}-${j}`
              return (
                <div key={key} className="border-b border-[#e8e6e0]">
                  <button onClick={() => toggle(key)} className="w-full flex items-center justify-between py-4 text-left font-semibold text-[14px] md:text-[15px]">
                    {faq.q}
                    <ChevronDown size={18} className={`shrink-0 ml-4 transition-transform text-[#7a7870] ${openItems[key] ? 'rotate-180' : ''}`} />
                  </button>
                  {openItems[key] && <p className="text-[14px] text-[#7a7870] leading-relaxed pb-5">{faq.a}</p>}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </>
  )
}
