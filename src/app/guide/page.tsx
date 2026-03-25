'use client'
import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import ImageWithFallback from '@/components/ui/ImageWithFallback'

const sections = [
  { id: 'drivers', title: 'Drivers', fallback: '#e8e4d8', body1: 'A driver is the most exciting club in the bag — and often the most expensive. Pre-owned drivers are one of the best values in golf because technology doesn\'t change as dramatically as manufacturers would like you to believe.', body2: 'When buying used, focus on shaft flex and loft over brand loyalty. A 10.5° driver with the right flex will outperform a 9° in the wrong hands every time.', tip: 'Look for drivers 1–2 generations old from major brands — they\'re 60–70% cheaper with 95% of the performance.' },
  { id: 'irons', title: 'Irons', fallback: '#e0ddd8', body1: 'Irons are the workhorses of your bag. A set of 6 irons in Good condition will cost you a fraction of retail and last years of consistent play.', body2: 'Game improvement irons (cavity back) are generally better for mid-to-high handicappers. Blade irons suit single-figure players. When buying used, focus on shaft type (steel vs graphite) and lie angle.', tip: 'Buying a mixed set (not a matched set) can save 40% — the clubs still perform, they just don\'t share a serial number.' },
  { id: 'wedges', title: 'Wedges', fallback: '#dddad2', body1: 'Wedges wear faster than any other club due to the friction of ball contact. But that also means the used market is full of near-new wedges from golfers who upgraded after one season.', body2: 'Loft is the key spec: most golfers need a 52° gap wedge, 56° sand wedge, and optionally a 60° lob wedge. Don\'t overcomplicate it.', tip: 'A slightly worn wedge face can actually provide more spin on some shots. Don\'t dismiss Fair-condition wedges.' },
  { id: 'putters', title: 'Putters', fallback: '#e4e0d8', body1: 'The putter is the most personal club in the bag. Style (blade vs mallet), length, and feel are subjective — which is why the pre-owned market is perfect for trying different models without commitment.', body2: 'Length matters most: 33" for shorter players, 34" for most, 35" for tall players. Feel the balance before buying if possible.', tip: 'Scotty Camerons, Ping Anser models, and Odyssey White Hot putters hold their value and performance exceptionally well pre-owned.' },
  { id: 'bags', title: 'Bags', fallback: '#e0dcd4', body1: 'A golf bag is one of the safest pre-owned purchases you can make — the technology doesn\'t evolve, the wear is easy to assess, and quality bags last decades.', body2: 'Cart bags are heavier but offer more storage. Stand bags are lighter and versatile. Staff bags are for tour players or serious club fitters.', tip: 'Look for bags with external putter wells and waterproof zippers — they\'re worth the premium even on the pre-owned market.' },
  { id: 'preowned', title: 'Pre-Owned Tips', fallback: '#d4d0c8', body1: 'Buying pre-owned doesn\'t mean buying blind. At LINKS, every club has been through our 12-point inspection — so you know exactly what you\'re getting before you buy.', body2: 'Set a budget, identify the 2–3 clubs you most need to upgrade, and buy the best condition you can afford for those clubs. The rest of the bag can wait.', tip: 'Don\'t buy a whole bag at once. Identify the weakest link in your current set and start there.' },
]

const sidebarLinks = sections.map(s => ({ id: s.id, label: s.title }))

export default function GuidePage() {
  const [activeSection, setActiveSection] = useState('drivers')

  return (
    <>
      <PageHero eyebrow="Expert Advice" title="The LINKS Buying Guide" subtitle="Everything you need to build a better bag without overspending." size="lg" />
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 md:gap-12 px-4 md:px-12 py-12 md:py-16">
        {/* Sidebar — desktop */}
        <aside className="sticky top-[130px] self-start hidden lg:block">
          <nav className="space-y-2">
            {sidebarLinks.map(link => (
              <a key={link.id} href={`#${link.id}`} onClick={() => setActiveSection(link.id)} className={`block text-[13px] font-semibold transition-colors py-1 ${activeSection === link.id ? 'text-[#2e4a2c]' : 'text-[#7a7870] hover:text-[#1a1a18]'}`}>{link.label}</a>
            ))}
          </nav>
        </aside>
        {/* Mobile pill nav */}
        <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] col-span-full">
          {sidebarLinks.map(link => (
            <a key={link.id} href={`#${link.id}`} className="text-[12px] font-semibold px-4 py-2 border border-[#c8c4bc] rounded-full whitespace-nowrap hover:border-[#1a1a18] transition-colors">{link.label}</a>
          ))}
        </div>
        {/* Content */}
        <div className="space-y-16">
          {sections.map(s => (
            <div key={s.id} id={s.id}>
              <h2 className="font-display font-extrabold text-[28px] mb-4">{s.title}</h2>
              <div className="h-[220px] md:h-[280px] relative rounded overflow-hidden mb-6">
                <ImageWithFallback src={`/images/sections/${s.id}-guide.jpg`} alt={s.title} fill className="object-cover" fallbackColor={s.fallback} sizes="(max-width: 1024px) 100vw, calc(100vw - 300px)" />
              </div>
              <p className="text-[15px] leading-relaxed text-[#7a7870] mb-4">{s.body1}</p>
              <p className="text-[15px] leading-relaxed text-[#7a7870] mb-6">{s.body2}</p>
              <div className="bg-[#f5f3ef] border-l-4 border-[#2e4a2c] p-5 mb-8">
                <p className="text-[#2e4a2c] font-bold text-[12px] uppercase mb-2">LINKS Tip:</p>
                <p className="text-[14px] text-[#7a7870]">{s.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
