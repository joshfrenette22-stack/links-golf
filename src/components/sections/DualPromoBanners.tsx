import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { IMG_BANNER_CALLAWAY_IRONS, IMG_BANNER_PUTTERS } from '@/lib/images'

const banners = [
  { src: IMG_BANNER_CALLAWAY_IRONS, text: 'Up to 20% off Callaway irons this week', fallback: '#1c2e1a', label: 'banner-callaway-irons.jpg', href: '/shop?cat=irons' },
  { src: IMG_BANNER_PUTTERS, text: '50+ putters in stock — find your perfect roll', fallback: '#3a2a18', label: 'banner-putters.jpg', href: '/shop?cat=putters' },
]

export default function DualPromoBanners() {
  return (
    <section id="promo-banners" className="grid grid-cols-1 md:grid-cols-2">
      {banners.map((b, i) => (
        <a key={i} href={b.href} className="relative h-[240px] md:h-[300px] overflow-hidden flex items-end pb-7 pl-8 cursor-pointer group block">
          <ImageWithFallback
            src={b.src} alt={b.text} fill
            className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
            fallbackColor={b.fallback} fallbackLabel={b.label}
            loading="lazy"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-black/10" />
          <p className="relative z-10 text-white font-extrabold leading-[1.2] max-w-[280px]" style={{ fontSize: 'clamp(16px, 2vw, 22px)' }}>
            {b.text}
          </p>
        </a>
      ))}
    </section>
  )
}
