'use client'
import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import { ChevronDown } from 'lucide-react'

const categories = [
  {
    title: 'Orders & Shipping',
    faqs: [
      { q: 'How long does shipping take?', a: 'Standard shipping takes 3–5 business days. Express (1–2 business days) is available at checkout for $12.99. Orders placed before 2pm CT ship same day.' },
      { q: 'Do you ship internationally?', a: 'We ship to the US and Canada only at this time. International shipping is not available.' },
      { q: 'Can I change my shipping address after ordering?', a: 'Contact us within 1 hour of placing your order and we\'ll do our best to update the address before the order ships. After that, it may already be packed.' },
      { q: 'How do I track my order?', a: 'You\'ll receive a tracking email within 24 hours of shipment. You can also use our Track Order page.' },
    ],
  },
  {
    title: 'Returns & Exchanges',
    faqs: [
      { q: 'What is your return policy?', a: '30 days from delivery, no questions asked. Club must be in the same condition as received. If the condition doesn\'t match the description, we\'ll cover return shipping.' },
      { q: 'How do I start a return?', a: 'Email hello@smoothswinggolf.com with your order number and we\'ll send a prepaid return label.' },
      { q: 'When will I get my refund?', a: 'Within 5 business days of receiving the returned club.' },
      { q: 'Can I exchange for a different club?', a: 'Yes. Start a return and place a new order — we\'ll expedite the exchange so you\'re not without a club for long.' },
    ],
  },
  {
    title: 'Club Condition & Grading',
    faqs: [
      { q: 'What does "Mint" mean?', a: 'Near-perfect. Fewer than 10 rounds of play. May show faint bag marks but no face or crown wear.' },
      { q: 'What does "Fair" condition mean?', a: 'Visible wear from regular play. Sole wear, finish marks on crown. Fully functional and performs exactly as expected. Priced accordingly.' },
      { q: 'Do clubs come with original headcovers?', a: 'When we have them, yes. Listed in the product description. If not mentioned, assume no headcover is included.' },
      { q: 'Are the clubs regripped?', a: 'Grip condition is assessed in our 12-point inspection. If a grip was borderline, it\'s been replaced. Described in the listing.' },
      { q: 'Can I trust the condition descriptions?', a: 'Completely. Our reputation depends on honest grading. We\'d rather sell fewer clubs at fair prices than oversell condition. Every club has been physically handled and graded by our team.' },
    ],
  },
  {
    title: 'Trade-Ins',
    faqs: [
      { q: 'How does the trade-in program work?', a: 'Fill out the form at /sell, get an offer within 24 hours, ship free, get paid within 3 days of receipt.' },
      { q: 'How long does it take to get an offer?', a: 'Within 24 hours on business days.' },
      { q: 'What happens if my club is in worse condition than I described?', a: 'We\'ll send photos and issue a revised offer. You can accept the new offer or we\'ll ship the club back to you for free.' },
      { q: 'What clubs do you accept?', a: 'Any major brand in Good condition or better. No off-brand or unbranded clubs. We generally don\'t accept clubs older than 10 years.' },
    ],
  },
  {
    title: 'Buying Guide',
    faqs: [
      { q: 'How do I know which shaft flex is right for me?', a: 'General guide: under 85 mph swing speed = Regular or Senior; 85–95 = Regular or Stiff; 95–105 = Stiff; 105+ = X-Stiff. When in doubt, go Regular.' },
      { q: 'Do you offer club fitting?', a: 'We offer basic fitting advice via email and phone. We don\'t do in-person fitting remotely, but our buying guide covers the key specs to look for.' },
      { q: 'Can I return a club that doesn\'t fit my game?', a: 'Yes — our 30-day return policy covers fit as well as condition. No questions asked.' },
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
          <div key={cat.title} id={cat.title === 'Orders & Shipping' ? 'shipping' : undefined} className="mb-10">
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
