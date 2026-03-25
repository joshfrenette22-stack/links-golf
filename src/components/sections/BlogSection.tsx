import { BLOG_POSTS } from '@/lib/data'
import ImageWithFallback from '@/components/ui/ImageWithFallback'

export default function BlogSection() {
  return (
    <section id="blog" className="px-4 md:px-12 py-10 md:py-16">
      <h2 className="font-extrabold text-2xl mb-8">From the blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {BLOG_POSTS.map(post => (
          <article key={post.id}>
            <div className="h-[200px] md:h-[240px] rounded-sm overflow-hidden mb-3.5 relative">
              <ImageWithFallback
                src={post.imageSrc} alt={post.title} fill
                className="object-cover"
                fallbackColor="#c8d0c0"
                loading="lazy"
                sizes="33vw"
              />
            </div>
            <div className="text-xs text-[#7a7870] mb-2">{post.date} · {post.readTime} read</div>
            <h3 className="font-extrabold text-[18px] leading-snug mb-2.5">
              <a href={`/blog/${post.slug}`} className="hover:text-[#2e4a2c] transition-colors">{post.title}</a>
            </h3>
            <p className="text-sm text-[#7a7870] leading-relaxed mb-3">{post.excerpt}</p>
            <a href={`/blog/${post.slug}`} className="text-[13px] underline underline-offset-2 hover:text-[#2e4a2c] transition-colors">Read more</a>
          </article>
        ))}
      </div>
    </section>
  )
}
