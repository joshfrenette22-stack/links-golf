import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { IMG_YOUTUBE_THUMBNAIL } from '@/lib/images'

export default function YouTubeSection() {
  return (
    <section id="youtube" className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">
      <div className="bg-[#5a4e38] px-16 py-20 flex flex-col justify-center">
        <h2 className="font-display font-extrabold text-white text-2xl md:text-4xl mb-6">We&apos;re on YouTube</h2>
        <p className="text-white/80 text-[14px] leading-relaxed mb-4">
          Reviews, fittings, and side-by-side comparisons — our channel covers everything you need to make the right call when buying pre-owned.
        </p>
        <p className="text-white/80 text-[14px] leading-relaxed mb-4">
          From beginner builds to low-handicap upgrades, we break down the market so you don&apos;t have to.
        </p>
        <p className="text-white/80 text-[14px] leading-relaxed mb-7">
          New videos every week. Subscribe and never miss a deal.
        </p>
        <a href="#" className="inline-block border border-white/60 text-white text-[11px] font-bold uppercase tracking-[0.15em] px-8 py-3.5 hover:bg-white hover:text-[#1a1a18] transition-colors self-start mt-7">
          Watch Now
        </a>
      </div>
      <div className="bg-[#2e2618] flex items-center justify-center overflow-hidden min-h-[400px] md:min-h-0">
        <div className="w-[380px] h-[440px] bg-white rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative top-5 overflow-hidden">
          <ImageWithFallback
            src={IMG_YOUTUBE_THUMBNAIL} alt="LINKS Golf YouTube channel"
            fill className="object-cover"
            fallbackColor="#d4c8a8" fallbackLabel="youtube-thumbnail.jpg"
            loading="lazy"
            sizes="380px"
          />
        </div>
      </div>
    </section>
  )
}
