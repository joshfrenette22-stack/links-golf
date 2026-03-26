import PageHero from '@/components/ui/PageHero'

const inspectionPoints = [
  {
    number: 1,
    name: 'Face Integrity',
    description: 'Check for micro-cracks, deep grooves beyond spec, dents that affect face flex. A compromised face affects ball speed and consistency on every shot.',
  },
  {
    number: 2,
    name: 'Shaft Straightness',
    description: 'Roll the shaft on a flat surface and sight down the length. Any bend or warp is grounds for rejection, regardless of cosmetic condition.',
  },
  {
    number: 3,
    name: 'Grip Condition',
    description: 'Grip firmness, texture, and tackiness are assessed by hand. Slipping grips introduce swing inconsistency and are replaced before listing.',
  },
  {
    number: 4,
    name: 'Hosel Fit',
    description: 'The hosel-shaft connection is checked for any play or creaking under torque. A loose hosel is a structural failure, not cosmetic wear.',
  },
  {
    number: 5,
    name: 'Crown Finish',
    description: 'The crown of woods and drivers is inspected for deep scratches or impact marks. Minor paint scuffs are cosmetic; denting indicates potential structural stress.',
  },
  {
    number: 6,
    name: 'Sole Wear',
    description: 'Every club\'s sole is examined under magnification. Wear patterns tell us how a club was played — excessive toe or heel wear can indicate swing path issues.',
  },
  {
    number: 7,
    name: 'Ferrule',
    description: 'The ferrule (the plastic ring at the hosel base) is checked for cracks or separation. A loose ferrule doesn\'t affect performance but indicates how carefully the club was handled.',
  },
  {
    number: 8,
    name: 'Loft & Lie Accuracy',
    description: 'We measure loft and lie on every iron and wedge with a calibrated gauge. Clubs outside ±1° of spec are flagged for professional adjustment.',
  },
  {
    number: 9,
    name: 'Shaft Tip',
    description: 'The tip of the shaft (where it inserts into the hosel) is inspected for micro-fractures. Tip cracks are invisible to the naked eye but catastrophic at impact.',
  },
  {
    number: 10,
    name: 'Paint Fill',
    description: 'Engraved numbers, logos, and alignment aids are checked for legibility. Missing paint fill affects alignment — a critical factor for putters and wedges.',
  },
  {
    number: 11,
    name: 'Weight Ports',
    description: 'Adjustable weight ports on drivers and fairway woods are checked for stripped screws, missing weights, or corrosion. Loose weights shift swing weight unpredictably.',
  },
  {
    number: 12,
    name: 'Overall Aesthetics',
    description: 'A final holistic assessment. Does the club look exactly as described? Photographs are taken post-inspection and matched to the listing.',
  },
]

const conditionGrades = [
  {
    grade: 'Mint',
    color: '#2e4a2c',
    description: 'Near-perfect. May have been hit fewer than 10 times. No visible wear.',
  },
  {
    grade: 'Good',
    color: '#3a6b38',
    description: 'Light play wear. Possible minor scuffs on sole or finish. Fully functional and performs like new.',
  },
  {
    grade: 'Fair',
    color: '#b88c28',
    description: 'Visible wear from regular play — sole wear, finish marks. Structurally sound. Priced accordingly.',
  },
  {
    grade: 'Poor',
    color: '#943020',
    description: 'We do not list Poor condition clubs. If a club doesn\'t pass inspection, it doesn\'t go on the site.',
  },
]

export default function InspectionPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Standard"
        title="The 12-Point Inspection"
        subtitle="Every club. Every time. No exceptions."
        size="md"
      />

      {/* 12 Inspection Points */}
      <div className="px-4 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
          {inspectionPoints.map(point => (
            <div key={point.number} className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1c2e1a] text-white flex items-center justify-center font-extrabold text-[14px]">
                {point.number}
              </div>
              <div>
                <h3 className="font-extrabold text-[16px] text-[#1a1a18] mb-1">{point.name}</h3>
                <p className="text-[14px] text-[#7a7870] leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Condition Grades */}
      <div className="bg-[#f5f3ef] px-4 md:px-12 py-16">
        <h2 className="font-display font-extrabold text-[28px] md:text-[32px] mb-10 text-center">Condition Grades Explained</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
          {conditionGrades.map(cg => (
            <div key={cg.grade} className="bg-white p-6 border border-[#e8e6e0] rounded">
              <div className="inline-block px-3 py-1 rounded text-white text-[11px] font-bold uppercase tracking-[0.1em] mb-3" style={{ backgroundColor: cg.color }}>
                {cg.grade}
              </div>
              <p className="text-[14px] text-[#7a7870] leading-relaxed">{cg.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-16 px-4">
        <h2 className="font-display font-extrabold text-[28px] md:text-[32px] mb-4">Ready to shop with confidence?</h2>
        <p className="text-[#7a7870] text-[15px] mb-8 max-w-[480px] mx-auto">Every club on LINKS has passed our 12-point inspection. No surprises. No guesswork.</p>
        <a
          href="/shop"
          className="inline-block bg-[#1a1a18] text-white text-[11px] font-bold uppercase tracking-[0.15em] px-10 py-4 hover:opacity-80 transition-opacity"
        >
          Shop All Clubs
        </a>
      </div>
    </>
  )
}
