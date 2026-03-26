import PageHero from '@/components/ui/PageHero'
import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { ShieldCheck, Star, RotateCcw } from 'lucide-react'

const values = [
  { icon: ShieldCheck, title: 'Honest Grading', body: 'We grade every club ourselves. If we wouldn\'t buy it at that condition, we don\'t list it. Our grades mean something.' },
  { icon: Star, title: 'Premium Quality', body: 'Pre-owned doesn\'t mean second-best. Our selection is curated — we only carry clubs that still deliver tour-level performance.' },
  { icon: RotateCcw, title: 'Community Focus', body: 'We built LINKS for golfers, not shareholders. Our pricing is fair because we want you to keep coming back, not because we have to.' },
]

const team = [
  { name: 'Marcus Webb', role: 'Founder & Head Buyer', bio: 'Former scratch golfer turned gear obsessive. Marcus personally approves every club that comes through the door.' },
  { name: 'Priya Okafor', role: 'Club Fitter & Inspector', bio: '10 years experience as a PGA-certified fitter. Priya runs our 12-point inspection process and trains new staff.' },
  { name: 'Jamie Torres', role: 'Customer Experience', bio: 'Jamie ensures every order and inquiry is handled with the same care we give the clubs. Same-day responses, always.' },
]

const stats = [
  { value: '4,200+', label: 'Clubs Sold' },
  { value: '4.9', label: 'Avg Rating' },
  { value: '3 Years', label: 'In Business' },
  { value: '12', label: 'Inspection Points' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Our Story" title="Built by Golfers, For Golfers." subtitle="We got tired of overpaying for clubs that sat in someone&apos;s garage for two years. So we built something better." size="lg" />

      {/* Origin story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-4 md:px-12 py-16 md:py-20 items-center">
        <div>
          <h2 className="font-display font-extrabold text-[28px] md:text-[36px] mb-6">Where it started</h2>
          <p className="text-[15px] leading-relaxed text-[#7a7870] mb-5">LINKS started in a garage in Denver in 2022. Our founder Marcus Webb had just paid $400 for a used driver described as &quot;excellent condition&quot; — it arrived with a dented crown and a cracked grip. He knew there had to be a better way.</p>
          <p className="text-[15px] leading-relaxed text-[#7a7870] mb-5">We built LINKS around a single idea: every club we sell has to be exactly what we say it is. No fudging the condition grade to hit a higher price point. No vague descriptions that leave buyers guessing. Just honest gear, fairly priced.</p>
          <p className="text-[15px] leading-relaxed text-[#7a7870]">Two years later, we&apos;ve sold over 4,000 clubs to golfers across the US and Canada. Every single one was inspected in-house before it shipped.</p>
        </div>
        <div className="h-[380px] md:h-[480px] relative rounded overflow-hidden">
          <ImageWithFallback src="/images/sections/shop-interior.jpg" alt="LINKS Golf shop interior" fill className="object-cover" fallbackColor="#788870" sizes="50vw" />
        </div>
      </div>

      {/* Values */}
      <div className="px-4 md:px-12 py-16 bg-[#f5f3ef]">
        <h2 className="font-display font-extrabold text-[28px] md:text-[32px] mb-12 text-center">What we stand for</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map(v => (
            <div key={v.title}>
              <v.icon size={32} className="text-[#2e4a2c]" />
              <h3 className="font-extrabold text-[20px] mt-4 mb-3">{v.title}</h3>
              <p className="text-[14px] text-[#7a7870] leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="px-4 md:px-12 py-16">
        <h2 className="font-display font-extrabold text-[28px] md:text-[32px] mb-12">The team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map(p => (
            <div key={p.name} className="text-center">
              <div className="w-[120px] h-[120px] rounded-full bg-[#c8c4bc] mx-auto mb-4 flex items-center justify-center">
                <span className="text-[32px] font-display font-black text-white">{p.name[0]}</span>
              </div>
              <h3 className="font-extrabold text-[20px]">{p.name}</h3>
              <p className="text-[13px] text-[#7a7870] mb-3">{p.role}</p>
              <p className="text-[14px] text-[#7a7870] leading-relaxed max-w-[300px] mx-auto">{p.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stat bar */}
      <div className="bg-[#1c2e1a] py-12 px-4 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center text-white">
          {stats.map(s => (
            <div key={s.label}>
              <p className="font-display font-black text-[40px] md:text-[48px] text-[#b88c28]">{s.value}</p>
              <p className="text-[13px] text-white/70 uppercase tracking-[0.1em] mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-16 px-4 bg-[#f5f3ef]">
        <h2 className="font-display font-extrabold text-[28px] md:text-[32px] mb-4">Ready to find your next club?</h2>
        <p className="text-[#7a7870] text-[15px] mb-8 max-w-[480px] mx-auto">Browse our full inventory of inspected, graded pre-owned equipment.</p>
        <a href="/shop" className="inline-block bg-[#1a1a18] text-white text-[11px] font-bold uppercase tracking-[0.15em] px-10 py-4 hover:opacity-80 transition-opacity">Shop All Clubs</a>
      </div>
    </>
  )
}
