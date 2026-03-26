import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/lib/data'
import ImageWithFallback from '@/components/ui/ImageWithFallback'

const fallbacks: Record<string, string> = {
  'how-to-choose-a-used-driver': '#c8d0c0',
  'underrated-preowned-wedges': '#d0c8b8',
  'complete-bag-under-300': '#c8d4c0',
}

interface PostContent {
  sections: Array<{ type: 'p' | 'h2' | 'li-start' | 'li' | 'li-end'; text: string }>
  ctaHeading: string
  ctaBody: string
  ctaLinkHref: string
  ctaLinkText: string
}

const postContents: Record<string, PostContent> = {
  'how-to-choose-a-used-driver': {
    ctaHeading: 'Ready to find your driver?',
    ctaBody: 'Browse our full selection of pre-owned drivers — every one inspected, graded, and ready to play.',
    ctaLinkHref: '/shop?category=drivers',
    ctaLinkText: 'Shop All Drivers',
    sections: [
      { type: 'p', text: 'Buying a pre-owned driver is one of the smartest moves a recreational golfer can make. The technology gap between a 2-year-old driver and a brand-new one is far smaller than manufacturers would like you to believe — yet the price difference can be enormous. A driver released 18 months ago often uses the exact same face architecture as this year\'s model, just without a new colorway and a marketing budget.' },
      { type: 'p', text: 'The key is knowing what to look for — and what to avoid. Pre-owned drivers span a huge range of quality, from barely-used clubs that sat in a bag twice to beat-up relics that\'ve seen 500 rounds. The condition grade tells most of the story, but knowing how to read it and what questions to ask will make sure you get a club that actually fits your game.' },
      { type: 'h2', text: 'Shaft Flex: The Most Overlooked Spec' },
      { type: 'p', text: 'Before you look at anything else — brand, loft, year — you need to know your swing speed and match the shaft flex accordingly. An improperly fitted shaft will rob you of distance and accuracy regardless of how good the head is. Most ranges and golf shops will measure your swing speed for free with a launch monitor.' },
      { type: 'p', text: 'Here\'s a general guide to shaft flex by swing speed:' },
      { type: 'p', text: '• Senior / A flex: Under 75 mph. Designed for slower tempos that need more kick to load and unload the shaft efficiently.' },
      { type: 'p', text: '• Regular flex: 75–85 mph. The most widely available flex. Suits the majority of recreational golfers.' },
      { type: 'p', text: '• Stiff flex: 85–95 mph. A common choice for mid-handicappers with an athletic swing who generate moderate club head speed.' },
      { type: 'p', text: '• X-Stiff flex: 95 mph and above. Tour players and high-speed swingers who need a stiffer profile to prevent the face from closing too fast at impact.' },
      { type: 'p', text: 'When buying pre-owned, the shaft flex is listed in the spec. If it isn\'t, contact the seller and ask directly. Playing the wrong flex — especially too stiff — is the single most common mistake recreational golfers make when buying equipment.' },
      { type: 'h2', text: 'Face Inspection and Condition Tells' },
      { type: 'p', text: 'On a pre-owned driver, light wear marks in the center of the face are completely normal and don\'t affect performance. The sweet spot develops a natural polish from repeated contact — this isn\'t damage, it\'s evidence that the club was used properly. Don\'t be put off by this.' },
      { type: 'p', text: 'What you do want to look for are red-flag signs that indicate structural compromise. Deep gouges near the face-body junction, visible dents on the crown, or a cracked hosel are all grounds for rejection. A dented crown can indicate the club was dropped or hit something hard, which may have stressed the internal weighting system. The face itself should flex uniformly — any compromise to that geometry affects ball speed directly.' },
      { type: 'p', text: 'Loft is the other major spec to consider. Most amateur golfers play too low a loft — 10.5° or higher suits the majority of players with swing speeds under 95 mph. The idea that a 9° driver goes further than a 10.5° is usually wrong for recreational golfers. Lower lofts require higher swing speeds to generate sufficient launch angle and spin. Don\'t let ego drive your loft selection.' },
      { type: 'p', text: 'When you buy from Smooth Swing, every driver in Mint or Good condition has been through our 12-point inspection. The face, shaft, hosel, grip, and overall cosmetics are all assessed before the listing goes live. Our grades mean what we say they mean — if it\'s listed as Good, it performs like a Good club.' },
      { type: 'p', text: 'Finally, consider adjustability. Many modern drivers have adjustable loft and lie settings via a hosel wrench. Make sure any adjustable weights or hosels are functioning and not stripped. We check this during our inspection and note it clearly — but it\'s worth asking about if you\'re buying from a private seller.' },
    ],
  },
  'underrated-preowned-wedges': {
    ctaHeading: 'Shop pre-owned wedges',
    ctaBody: 'Our current selection of inspected, graded wedges — from tour-preferred models to budget-friendly hidden gems.',
    ctaLinkHref: '/shop?category=wedges',
    ctaLinkText: 'Browse Wedges',
    sections: [
      { type: 'p', text: 'The wedge market is one of the most interesting corners of the pre-owned equipment world. Because grooves wear down with regular use, many serious golfers replace their wedges every season or two — which means there\'s a constant supply of barely-used clubs hitting the secondary market. The result is extraordinary value if you know what to look for.' },
      { type: 'p', text: 'The key metric for a pre-owned wedge is groove condition, not cosmetic appearance. A wedge with sole wear and paint scuffs but sharp grooves will out-spin a pristine-looking wedge with worn grooves every time. Here are five models that consistently punch above their price point on the pre-owned market.' },
      { type: 'h2', text: 'Five Wedges Worth Every Penny Pre-Owned' },
      { type: 'p', text: '1. Cleveland RTX6 — Tour-validated groove geometry available at remarkable prices on the secondary market. Cleveland has been making wedges since the 1979s and the RTX series represents decades of refinement. The HydraZip surface treatment and tour-developed ZipCore technology remain fully functional well into the club\'s second life. In Good condition, an RTX6 performs identically to new. Fair condition clubs often sell for under $50 — extraordinary value for a club that still generates tour-level spin.' },
      { type: 'p', text: '2. Callaway Mack Daddy 5 — Criminally underpriced on the pre-owned market. The JAWS groove technology on the MD5 was ahead of its time, and the club hasn\'t lost any of that performance. Callaway doesn\'t have the same wedge brand recognition as Titleist, which means MD5s sit on the secondary market at prices that genuinely don\'t reflect their quality. If you see one in Good condition under $60, buy it without hesitation.' },
      { type: 'p', text: '3. Titleist Vokey SM8 — The most-used wedge on tour has obvious prestige, but what makes the SM8 a smart pre-owned buy is its consistency. The Spin Milling process creates groove geometry that\'s proven to hold up remarkably well. On the pre-owned market, SM8s trade at 40–50% of retail. The various grinds (M, S, D, K, L, F) mean you can dial in exactly the sole interaction you need for your typical turf conditions.' },
      { type: 'p', text: '4. Ping Glide 4.0 — Consistently underrated, even by golfers who should know better. The Glide 4.0\'s sole grinds are genuinely world-class, and Ping\'s engineering standards mean the club holds its geometry through heavy use. On the pre-owned market, the Glide 4.0 trades at a meaningful discount to Vokey simply because of brand perception — not because of any performance difference. The SS and TS grinds in particular are incredibly versatile.' },
      { type: 'p', text: '5. TaylorMade Milled Grind 3 — Precision CNC milling means the groove geometry is laser-accurate from new and holds up well through use. The MG3\'s raw finish develops a natural patina that many players actually prefer for reducing glare. Even with visible sole wear, the face grooves on a Milled Grind 3 remain sharp and functional. This is a club where Fair condition is genuinely worth considering — the savings are significant and the spin performance holds.' },
      { type: 'h2', text: 'What to Check Before You Buy' },
      { type: 'p', text: 'For any pre-owned wedge, the groove inspection is paramount. Look at the face grooves under good lighting — they should have sharp, well-defined edges, not a rounded or polished appearance. Worn grooves look almost shiny in the channel versus the crisp matte lines of sharp grooves.' },
      { type: 'p', text: 'Sole wear is cosmetic. Paint wear on the back and cavity are cosmetic. The one exception is deep scoring on the face outside the groove pattern — that can indicate abnormal contact patterns and may affect the aerodynamics of the clubhead through impact.' },
      { type: 'p', text: 'All wedges listed on Smooth Swing are physically inspected before listing. We describe groove condition honestly because it\'s the only metric that actually matters for performance.' },
    ],
  },
  'complete-bag-under-300': {
    ctaHeading: 'Start building your bag',
    ctaBody: 'Browse our full pre-owned inventory. Every club inspected and graded — find your next club with confidence.',
    ctaLinkHref: '/shop',
    ctaLinkText: 'Shop All Clubs',
    sections: [
      { type: 'p', text: 'We put this challenge to ourselves: build a complete, fully playable 14-club bag using only pre-owned equipment from the secondary market for under $300 total. Not a bag of compromises — a bag you\'d actually want to play. Here\'s exactly what we bought, what we paid, and why.' },
      { type: 'p', text: 'The strategic insight that makes this work: you don\'t need to spend equally across all 14 slots. A high handicapper who misses the center of the face on 60% of shots will benefit more from a forgiving set of irons than a premium driver. Know where your game needs the most help, and weight your budget accordingly.' },
      { type: 'h2', text: 'The Full Build: Club by Club' },
      { type: 'p', text: 'Driver — $70. A TaylorMade M4 driver in Good condition. This is where most recreational golfers are tempted to overspend. The M4 remains genuinely competitive — Twist Face technology still works, the head is forgiving, and at $70 pre-owned it\'s a no-brainer. Splurge advice: If you have swing speed over 95 mph and play more than twice a week, consider spending an extra $80–100 on a more recent model.' },
      { type: 'p', text: '3-Wood — $35. A Callaway Rogue 3-wood in Fair condition. The 3-wood is arguably the most optional club in a recreational golfer\'s bag — most amateurs hit it inconsistently and would be better served by a second hybrid. But if you want one, Fair condition 3-woods in the $30–40 range are plentiful and perform identically to Good condition clubs off a tee.' },
      { type: 'p', text: 'Hybrid / 5-Wood — $30. A Cleveland Launcher Halo in Good condition. This slot is where we saved the most versus retail. Game-improvement hybrids hold their value less than irons and wedges on the secondary market — you can get genuinely excellent clubs here for $25–40. Don\'t overthink this slot.' },
      { type: 'p', text: 'Irons 5-PW — $90. This is where we\'d suggest the opposite: if you\'re going to spend slightly more anywhere, make it here. We budgeted $90 for a set of Ping G425 irons in Good condition (purchased as individual clubs). The G425 iron set is the gold standard for game improvement — the perimeter weighting, variable face thickness, and reliability of the set make a material difference to your scoring. Irons are the clubs you hit on almost every hole. Invest accordingly.' },
      { type: 'p', text: 'Gap Wedge 52° — $25. A Cleveland RTX4 in Fair condition. As discussed in our wedge guide, sole wear is cosmetic — what matters is groove condition. This RTX4 had perfect grooves and cost $25. It will perform identically to a $100 new wedge for a minimum of 2 seasons.' },
      { type: 'p', text: 'Sand Wedge 56° — $25. A Titleist Vokey SM7 in Fair condition. Same logic as above. The SM7 generates exceptional spin even with visible cosmetic wear. At $25 you are getting tour-level wedge performance.' },
      { type: 'p', text: 'Putter — $45. An Odyssey White Hot Pro in Good condition. Putting accounts for roughly 40% of your strokes in a round. The putter is arguably the single most important club in your bag, yet it\'s where most golfers are willing to compromise the most. Don\'t do this. The White Hot Pro insert is legendary for a reason. At $45 in Good condition, this is exceptional value.' },
      { type: 'h2', text: 'The Final Tally and What We Learned' },
      { type: 'p', text: 'Total: $320. Slightly over our $300 target, but we got a genuinely playable set that includes tour-caliber wedges and a properly fitted iron set. Compare this to a new budget set from a big-box store at the same price point — the pre-owned Smooth Swing bag wins on performance in every single category.' },
      { type: 'p', text: 'The key lessons: First, irons are where the real savings are in the pre-owned market — the gap between Fair condition and Good is cosmetic, not performance-related. Second, wedges are where you should prioritize groove condition over cosmetics. Third, don\'t overspend on woods — the technology plateau in drivers and fairway woods means a 2-year-old head is barely distinguishable from a new one at recreational swing speeds.' },
      { type: 'p', text: 'If you\'re a beginner or high-handicapper building your first real bag, this approach beats a full new set from a big-box store in every way: better brand names, better performance technology, more forgiveness, and lower cost. The only thing you give up is the new-club smell — and that wears off after the first round anyway.' },
    ],
  },
}

export default function BlogPostClient({ slug }: { slug: string }) {
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) notFound()

  const content = postContents[slug]
  const fallback = fallbacks[slug] ?? '#c8d0c0'

  const otherPosts = BLOG_POSTS.filter(p => p.slug !== slug)

  return (
    <div className="max-w-[720px] mx-auto px-4 md:px-6 py-12 md:py-16">
      <p className="text-[12px] text-[#7a7870] mb-3">Golf Tips · {post.date}</p>
      <h1 className="font-display font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>{post.title}</h1>
      <p className="text-[13px] text-[#7a7870] mb-8">By Smooth Swing Editorial Team · {post.readTime} read · {post.date}</p>
      <div className="h-[260px] md:h-[400px] relative rounded overflow-hidden mb-10">
        <ImageWithFallback src={post.imageSrc} alt={post.title} fill className="object-cover" fallbackColor={fallback} sizes="720px" />
      </div>

      {content ? (
        <article className="text-[15px] leading-relaxed text-[#7a7870]">
          {content.sections.map((section, i) => {
            if (section.type === 'h2') {
              return <h2 key={i} className="font-display font-extrabold text-[#1a1a18] text-[22px] mt-10 mb-4">{section.text}</h2>
            }
            return <p key={i} className="mb-5">{section.text}</p>
          })}

          {/* CTA Box */}
          <div className="bg-[#f0f5ef] border border-[#2e4a2c] p-6 rounded mt-10 mb-6">
            <h3 className="font-display font-extrabold text-[#1a1a18] text-[20px] mb-2">{content.ctaHeading}</h3>
            <p className="text-[14px] text-[#7a7870] mb-4">{content.ctaBody}</p>
            <a
              href={content.ctaLinkHref}
              className="inline-block bg-[#2e4a2c] text-white text-[11px] font-bold uppercase tracking-[0.15em] px-8 py-3 hover:opacity-80 transition-opacity"
            >
              {content.ctaLinkText}
            </a>
          </div>

          {/* You might also like */}
          {otherPosts.length > 0 && (
            <div className="mt-10 mb-6">
              <h3 className="font-display font-extrabold text-[#1a1a18] text-[20px] mb-5">You might also like</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {otherPosts.map(p => (
                  <a
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="block border border-[#e8e6e0] p-4 hover:border-[#2e4a2c] transition-colors rounded"
                  >
                    <p className="text-[11px] text-[#7a7870] uppercase tracking-[0.08em] mb-1">{p.date}</p>
                    <p className="font-semibold text-[14px] text-[#1a1a18] leading-snug">{p.title}</p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </article>
      ) : (
        <article className="text-[15px] leading-relaxed text-[#7a7870]">
          <p className="mb-5">{post.excerpt}</p>
          <p>More content coming soon.</p>
        </article>
      )}

      <a href="/blog" className="text-[13px] underline underline-offset-2 hover:text-[#2e4a2c] transition-colors mt-12 block">← Back to Blog</a>
    </div>
  )
}
