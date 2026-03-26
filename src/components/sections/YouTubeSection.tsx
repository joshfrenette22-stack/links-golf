'use client'
import { useState } from 'react'
import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { IMG_YOUTUBE_THUMBNAIL } from '@/lib/images'

export default function YouTubeSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id="youtube" className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">
      <div className="bg-[#5a4e38] px-16 py-20 flex flex-col justify-center">
        <h2 className="font-display font-extrabold text-white text-2xl md:text-4xl mb-6">We&apos;re on YouTube</h2>
        <p className="text-white/80 text-[14px] leading-relaxed mb-4">
          Watch our club fitters tear down, inspect, and review the equipment that comes through our doors. No sponsored content — just honest takes from people who play the game.
        </p>
        <p className="text-white/80 text-[14px] leading-relaxed mb-4">
          From head-to-head driver testing to deep dives on iron sets by handicap range, every video is built to help you buy smarter and play better.
        </p>
        <p className="text-white/80 text-[14px] leading-relaxed mb-7">
          New videos every Tuesday and Friday. Subscribe and join over 40,000 golfers who trust our gear advice.
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="inline-block border border-white/60 text-white text-[11px] font-bold uppercase tracking-[0.15em] px-8 py-3.5 hover:bg-white hover:text-[#1a1a18] transition-colors self-start mt-7"
        >
          Watch Now
        </button>
      </div>
      <div className="hidden md:flex bg-[#2e2618] items-center justify-center overflow-hidden">
        <div className="w-[380px] h-[440px] bg-white rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative top-5 overflow-hidden">
          <ImageWithFallback
            src={IMG_YOUTUBE_THUMBNAIL} alt="Smooth Swing Golf YouTube channel"
            fill className="object-cover"
            fallbackColor="#d4c8a8" fallbackLabel="youtube-thumbnail.jpg"
            loading="lazy"
            sizes="380px"
          />
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div className="relative w-full max-w-[800px]" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-10 right-0 text-white text-[28px] font-light hover:opacity-70"
            >×</button>
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
