import PageHero from '@/components/ui/PageHero'
import ConditionBadge from '@/components/ui/ConditionBadge'
import { Ruler, Zap, Shield, Target, CheckSquare, Wind, Weight, AlignCenter, Layers, ScanLine, Eye, Award } from 'lucide-react'

const grades = [
  {
    condition: 'Mint' as const, borderColor: '#2a6020',
    def: 'Near-perfect condition. Looks and plays like new.',
    desc: 'A Mint club shows virtually no signs of use. These clubs come from players who keep their equipment pristine or who rarely got out to play.',
    bullets: ['No visible scratches on face', 'Crown shows no marks', 'Grip like new', 'Shaft scratch-free', 'Original finish intact'],
    price: 'Mint clubs typically sell at 70–80% of retail',
  },
  {
    condition: 'Good' as const, borderColor: '#446030',
    def: 'Normal play wear from regular use. Performs like new.',
    desc: 'A Good club shows the kind of wear you\'d expect from a golfer who plays regularly and takes care of their equipment. Performance is fully intact.',
    bullets: ['Light face wear from normal play', 'Minor sole scuffs', 'Grip shows light use', 'Shaft in excellent condition', 'May have small crown marks'],
    price: 'Good clubs typically sell at 50–65% of retail',
  },
  {
    condition: 'Fair' as const, borderColor: '#705830',
    def: 'Shows its history but performs fully. Honest patina.',
    desc: 'A Fair club has been played — and you can tell. But \'Fair\' doesn\'t mean \'broken\'. Every Fair club on our site still performs to spec.',
    bullets: ['Visible face lines from play', 'Noticeable sole wear', 'Grip may need replacing', 'Finish fading possible', 'May have refinished head'],
    price: 'Fair clubs typically sell at 30–45% of retail',
  },
]

const inspectionItems = [
  { icon: Target, label: 'Face Condition' },
  { icon: Zap, label: 'Shaft Integrity' },
  { icon: Layers, label: 'Grip Wear' },
  { icon: AlignCenter, label: 'Hosel & Ferrule' },
  { icon: Shield, label: 'Crown Finish' },
  { icon: Ruler, label: 'Sole Wear' },
  { icon: ScanLine, label: 'Loft & Lie Angle' },
  { icon: Weight, label: 'Club Length' },
  { icon: Wind, label: 'Shaft Flex' },
  { icon: Weight, label: 'Head Weight' },
  { icon: Eye, label: 'Alignment Aid' },
  { icon: Award, label: 'Overall Aesthetics' },
]

export default function GradingPage() {
  return (
    <>
      <PageHero eyebrow="Transparency First" title="Our Grading System" subtitle="Every club is graded before it&apos;s listed. Here&apos;s exactly what each grade means." size="md" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12 py-16">
        {grades.map(g => (
          <div key={g.condition} className="p-8 bg-[#f5f3ef]" style={{ borderTop: `4px solid ${g.borderColor}` }}>
            <div className="flex justify-center mb-4"><ConditionBadge condition={g.condition} /></div>
            <h2 className="font-extrabold text-[24px] mb-3 text-center">{g.condition}</h2>
            <p className="font-bold text-[14px] mb-4">{g.def}</p>
            <p className="text-[14px] text-[#7a7870] leading-relaxed mb-6">{g.desc}</p>
            <ul className="space-y-1.5">
              {g.bullets.map(b => <li key={b} className="text-[13px] text-[#7a7870] flex items-start gap-2"><span className="text-[#2e4a2c] shrink-0">✓</span>{b}</li>)}
            </ul>
            <p className="text-[12px] text-[#7a7870] italic mt-4 pt-4 border-t border-[#e8e6e0]">{g.price}</p>
          </div>
        ))}
      </div>
      <div className="px-4 md:px-12 pb-16">
        <h2 className="font-extrabold text-[28px] mb-8 text-center">What We Check</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {inspectionItems.map(({ icon: Icon, label }) => (
            <div key={label} className="bg-[#f5f3ef] p-5 text-center">
              <Icon size={24} className="mx-auto text-[#2e4a2c]" />
              <p className="font-semibold text-[13px] mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
