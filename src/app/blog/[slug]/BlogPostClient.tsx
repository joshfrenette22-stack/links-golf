import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/lib/data'
import ImageWithFallback from '@/components/ui/ImageWithFallback'

const fallbacks: Record<string, string> = {
  'how-to-choose-a-used-driver': '#c8d0c0',
  'underrated-preowned-wedges': '#d0c8b8',
  'complete-bag-under-300': '#c8d4c0',
}

const bodies: Record<string, { body: string[] }> = {
  'how-to-choose-a-used-driver': {
    body: [
      'Buying a pre-owned driver is one of the smartest moves a recreational golfer can make. The technology gap between a 2-year-old driver and a brand-new one is far smaller than manufacturers would like you to believe — yet the price difference can be enormous.',
      'The most important thing to check isn\'t the brand or the year — it\'s the shaft. An improperly fitted shaft will rob you of distance and accuracy no matter how good the head is. Get your swing speed measured (most ranges and golf shops offer this for free) and match the flex accordingly.',
      'Next, check the face. On a pre-owned driver, light wear marks from the sweet spot are completely normal and don\'t affect performance. Deep gouges, cracks near the face-body junction, or a dented crown are red flags. A Mint or Good grade from LINKS means we\'ve already checked all of this.',
      'Finally, consider loft. Most amateur golfers play too low a loft — 10.5° or higher suits the majority of players with swing speeds under 95mph. Don\'t let ego drive your loft selection.',
    ],
  },
  'underrated-preowned-wedges': {
    body: [
      'The wedge market is one of the most interesting corners of the pre-owned equipment world. Because grooves wear down with use, many golfers replace their wedges every season — which means there\'s a constant supply of barely-used equipment available.',
      'The Cleveland RTX series consistently punches above its price point. Cleveland has been making wedges since the 1970s and they\'ve refined the design over decades. A 2-year-old RTX in Good condition will perform identically to a brand-new one.',
      'The Titleist Vokey SM8 and SM9 are the most-used wedges on tour for good reason — but on the pre-owned market you can pick them up at 40-50% of retail. The spin milling on a Vokey still performs well even after a season of play.',
      'Callaway Mack Daddy wedges are criminally underrated. They don\'t have the same brand recognition as Vokey in the wedge category, but the groove geometry is excellent and they\'re consistently available at bargain prices pre-owned.',
    ],
  },
  'complete-bag-under-300': {
    body: [
      'We put this challenge to ourselves: build a complete, playable 14-club bag using only pre-owned equipment from our inventory for under $300. Here\'s what we bought and what we paid.',
      'Driver: TaylorMade M4 3-Wood (used as a driver alternative) — $69.99. Irons: Ping G425 set 7-iron through SW in Good condition — $399 full set, but we bought individual clubs — $85 for a 5-iron through 9-iron. Wedges: Cleveland RTX6 52° and 56° set — $94.99. Putter: Ping G425 putter — $77.99.',
      'Total: $327.97 — slightly over our $300 target, but we got a complete, matched-ish set with clubs that will perform for years. The key insight: irons are where the real savings are in the pre-owned market.',
      'If you\'re a beginner or high-handicapper building your first real bag, this is the approach we\'d recommend. Don\'t buy a full new set from a big-box store. Buy individual clubs at the grades that matter most to your game.',
    ],
  },
}

export default function BlogPostClient({ slug }: { slug: string }) {
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) notFound()

  const content = bodies[slug] ?? { body: [post.excerpt, 'More content coming soon.'] }
  const fallback = fallbacks[slug] ?? '#c8d0c0'

  return (
    <div className="max-w-[720px] mx-auto px-4 md:px-6 py-12 md:py-16">
      <p className="text-[12px] text-[#7a7870] mb-3">Golf Tips · {post.date}</p>
      <h1 className="font-display font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>{post.title}</h1>
      <p className="text-[13px] text-[#7a7870] mb-8">By LINKS Team · {post.readTime} read · {post.date}</p>
      <div className="h-[260px] md:h-[400px] relative rounded overflow-hidden mb-10">
        <ImageWithFallback src={post.imageSrc} alt={post.title} fill className="object-cover" fallbackColor={fallback} sizes="720px" />
      </div>
      <article className="text-[15px] leading-relaxed text-[#7a7870]">
        {content.body.map((para, i) => {
          if (i === 1) return (
            <div key={i}>
              <h2 className="font-display font-extrabold text-[#1a1a18] text-[22px] mt-8 mb-4">What to look for</h2>
              <p className="mb-5">{para}</p>
            </div>
          )
          if (i === 2) return (
            <div key={i}>
              <blockquote className="border-l-4 border-[#2e4a2c] pl-5 italic text-[#7a7870] my-6">
                <p>{para.substring(0, 120)}...</p>
              </blockquote>
            </div>
          )
          return <p key={i} className="mb-5">{para}</p>
        })}
      </article>
      <a href="/blog" className="text-[13px] underline underline-offset-2 hover:text-[#2e4a2c] transition-colors mt-12 block">← Back to Blog</a>
    </div>
  )
}
