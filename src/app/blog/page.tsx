import PageHero from '@/components/ui/PageHero'
import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { BLOG_POSTS } from '@/lib/data'

export default function BlogPage() {
  return (
    <>
      <PageHero title="From the Blog" subtitle="Tips, gear breakdowns, and buying advice from our team." size="sm" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12 py-16">
        {BLOG_POSTS.map(post => (
          <article key={post.id}>
            <div className="h-[280px] rounded-sm overflow-hidden mb-4 relative">
              <ImageWithFallback src={post.imageSrc} alt={post.title} fill className="object-cover" fallbackColor="#c8d0c0" sizes="33vw" />
            </div>
            <div className="text-xs text-[#7a7870] mb-2">{post.date} · {post.readTime} read</div>
            <h2 className="font-extrabold text-[18px] leading-snug mb-2.5">
              <a href={`/blog/${post.slug}`} className="hover:text-[#2e4a2c] transition-colors">{post.title}</a>
            </h2>
            <p className="text-sm text-[#7a7870] leading-relaxed mb-3">{post.excerpt}</p>
            <a href={`/blog/${post.slug}`} className="text-[13px] underline underline-offset-2 hover:text-[#2e4a2c] transition-colors">Read more</a>
          </article>
        ))}
      </div>
    </>
  )
}
