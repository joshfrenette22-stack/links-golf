'use client'
import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import FormField from '@/components/ui/FormField'
import { MapPin, Mail, Phone, CheckCircle2, ChevronDown } from 'lucide-react'

const subjects = ['General Question', 'Order Issue', 'Trade-In', 'Club Fitting Advice']

const faqs = [
  { q: 'How long does shipping take?', a: '3–5 business days for standard shipping. Express (1–2 days) is available at checkout.' },
  { q: 'Can I return a club if it\'s not right?', a: 'Yes, within 30 days of delivery, no questions asked.' },
  { q: 'How do I get a trade-in quote?', a: 'Fill out the form at /sell and we\'ll get back to you within 24 hours.' },
]

export default function ContactPage() {
  const [subject, setSubject] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <PageHero eyebrow="Get in Touch" title="We&apos;re here to help." subtitle="Questions about a club, an order, or a trade-in? We respond within one business day." size="md" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 px-4 md:px-12 py-12 md:py-16">
        {/* Form */}
        <div>
          <h2 className="font-extrabold text-[24px] mb-6">Send us a message</h2>
          {submitted ? (
            <div className="bg-[#e0f0dc] p-8 rounded text-center">
              <CheckCircle2 size={40} className="text-[#2e4a2c] mx-auto mb-3" />
              <h3 className="font-extrabold text-[20px] mb-2">Message received.</h3>
              <p className="text-[14px] text-[#7a7870]">We&apos;ll get back to you within one business day.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <FormField label="Name" name="name" required />
              <FormField label="Email" name="email" type="email" required />
              <FormField label="Order Number" name="orderNumber" placeholder="If your question is about an order" />
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#1a1a18] mb-2">Subject</p>
                <div className="flex flex-wrap gap-2">
                  {subjects.map(s => (
                    <button key={s} onClick={() => setSubject(s)} className={`text-[12px] font-semibold px-4 py-2 transition-colors ${subject === s ? 'bg-[#1a1a18] text-white' : 'border border-[#c8c4bc] hover:border-[#1a1a18]'}`}>{s}</button>
                  ))}
                </div>
              </div>
              <FormField label="Message" name="message" textarea rows={5} required />
              <button onClick={() => setSubmitted(true)} className="w-full bg-[#1a1a18] text-white text-[11px] font-bold uppercase tracking-[0.15em] py-4 hover:opacity-80 transition-opacity mt-6">Send Message</button>
            </div>
          )}
        </div>

        {/* Info cards */}
        <div>
          {[
            { icon: MapPin, title: 'Visit Us', lines: ['2240 Larimer Street, Denver CO 80205', 'Mon–Sat 9am–6pm · Sun 11am–4pm'], link: 'Get directions →', href: '#' },
            { icon: Mail, title: 'Email Us', lines: ['hello@linksgolf.com', 'Trade-in: sell@linksgolf.com'], link: 'Send an email →', href: 'mailto:hello@linksgolf.com' },
            { icon: Phone, title: 'Call Us', lines: ['(720) 555-0194', 'Mon–Fri 9am–5pm MT'], link: null, href: null },
          ].map(card => (
            <div key={card.title} className="bg-[#f5f3ef] p-6 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <card.icon size={20} className="text-[#2e4a2c]" />
                <h3 className="font-extrabold text-[16px]">{card.title}</h3>
              </div>
              {card.lines.map(l => <p key={l} className="text-[14px] text-[#7a7870]">{l}</p>)}
              {card.link && <a href={card.href ?? '#'} className="text-[13px] underline underline-offset-2 hover:text-[#2e4a2c] transition-colors mt-2 inline-block">{card.link}</a>}
            </div>
          ))}
          <div className="bg-[#1c2e1a] text-white p-6 mt-4">
            <h3 className="font-extrabold text-[16px] mb-3">Quick answers</h3>
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/20 last:border-none">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-3 text-left text-[13px] font-semibold">
                  {faq.q} <ChevronDown size={16} className={`transition-transform shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <p className="text-[13px] text-white/75 pb-3">{faq.a}</p>}
              </div>
            ))}
            <a href="/faq" className="text-[13px] underline underline-offset-2 text-white/75 hover:text-white mt-3 inline-block">See all FAQs →</a>
          </div>
        </div>
      </div>
    </>
  )
}
