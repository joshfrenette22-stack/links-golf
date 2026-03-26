'use client'
import { notFound } from 'next/navigation'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PRODUCTS } from '@/lib/data'
import ImageWithFallback from '@/components/ui/ImageWithFallback'
import ConditionBadge from '@/components/ui/ConditionBadge'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ProductCard from '@/components/ui/ProductCard'
import { useCart } from '@/context/CartContext'

const brandFallback: Record<string, string> = {
  Callaway: '#e4e0d8', Titleist: '#e0dcd0', TaylorMade: '#dddad4',
  Ping: '#e8e4dc', Odyssey: '#e8e4e0', Cleveland: '#e4e0d8',
}

const tabs = ['Description', 'Condition Details', 'Specs', 'Returns']
const flexOptions = ['Regular', 'Stiff', 'X-Stiff']

const productDescriptions: Record<string, string> = {
  'callaway-rogue-st-max': 'The Callaway Rogue ST Max is engineered for maximum forgiveness without sacrificing distance. The Jailbreak Speed Frame stiffens the body across all axes, transferring energy more efficiently to the ball at impact. At 10.5°, this head works beautifully for golfers with swing speeds in the 85–95mph range who want a straighter ball flight with penetrating launch.',
  'titleist-vokey-sm9': 'The Titleist Vokey SM9 54° wedge is the most-played wedge model on the PGA Tour for good reason. The SM9\'s Spin Milling creates precise, consistent groove geometry across the full face for maximum spin on every shot. In Good condition, this club delivers identical performance to new — the grooves are fully functional.',
  'taylormade-stealth-2': 'The TaylorMade Stealth 2 60X Carbon Twist Face driver is TaylorMade\'s premium distance club. 60 layers of carbon fiber reduce crown weight by 24% compared to titanium, freeing mass to be repositioned for optimal launch and spin. At 9°, this head suits faster swing speeds (95mph+) seeking a lower, more penetrating ball flight.',
  'ping-g425-putter': 'The Ping G425 putter combines solid alignment technology with a soft face insert that produces a consistent, satisfying roll. At 34", this length suits golfers 5\'8" to 6\'1" in a standard posture. The G425\'s tungsten weighting in the heel and toe provides stability on off-center hits — critical for scoring consistency.',
  'cleveland-rtx6-set': 'The Cleveland RTX6 wedge set in 52°/56° gives you the two most useful wedge gaps in the bag. Cleveland\'s HydraZip surface treatment maximizes spin in wet conditions, while the refined sole geometry suits a wide range of turf conditions. In Fair condition, these clubs are fully functional — the grooves remain sharp and effective.',
  'callaway-paradym': 'The Callaway Paradym driver represents a leap forward in driver construction — it\'s the first driver built entirely without a titanium chassis. The Paradym uses a triaxial carbon crown and sole combined with an exclusive Tungsten Speed Cartridge to optimize center of gravity with unprecedented precision. The result: exceptional ball speed with a very high moment of inertia for a forgiving feel.',
  'odyssey-white-hot-og': 'The Odyssey White Hot OG putter brings back the legendary White Hot insert that dominated greens for over two decades. The original formula — urethane blended with co-polymer — creates a soft, responsive feel that gives you precise feedback on every putt. At 35", this blade-style putter suits a traditional setup and works best on slower to mid-speed greens.',
  'ping-g430-irons': 'The Ping G430 iron set (5–PW) is the gold standard for game-improvement irons. Hyper 17-4 stainless steel construction provides exceptional durability, while the variable face thickness creates faster ball speeds across a larger area of the face. The perimeter-weighted design makes mishits far more manageable without sacrificing feel on pure strikes.',
  'taylormade-m4-3-wood': 'The TaylorMade M4 3-wood is a genuinely versatile fairway weapon. Twist Face technology corrects the common mis-hits caused by off-center contact — closing face angle on high-heel strikes, opening it on low-toe strikes. In Good condition, this M4 still delivers the same flight-correcting performance as new.',
  'titleist-vokey-sm8': 'The Titleist Vokey SM8 56° wedge in Fair condition is one of the best-value clubs on the pre-owned market. The SM8\'s tour-developed grinds and groove geometry still perform at a high level even with visible sole wear — the face grooves, which are what actually generates spin, remain fully functional. An honest, no-surprises wedge at an exceptional price point.',
}

const productSpecs: Record<string, Record<string, string>> = {
  'callaway-rogue-st-max': { Loft: '10.5°', Lie: '60.5°', Shaft: 'Project X Cypher 50', Grip: 'Golf Pride Tour Velvet', Length: '45.5"', Dexterity: 'Right-Handed' },
  'titleist-vokey-sm9': { Loft: '54°', Lie: '64°', Bounce: '10°', Shaft: 'True Temper Dynamic Gold', Grip: 'Lamkin Crossline', Dexterity: 'Right-Handed' },
  'taylormade-stealth-2': { Loft: '9°', Lie: '58°', Shaft: 'Fujikura Ventus Blue 5', Grip: 'Golf Pride Tour Velvet 360', Length: '45.75"', Dexterity: 'Right-Handed' },
  'ping-g425-putter': { Length: '34"', Loft: '3°', Lie: '70°', Grip: 'PP60', Style: 'Blade/Mallet', Dexterity: 'Right-Handed' },
  'cleveland-rtx6-set': { Lofts: '52° / 56°', Lie: '64°', Bounce: '10° (52°) / 12° (56°)', Shaft: 'True Temper Dynamic Gold', Grip: 'Cleveland Smart Sole', Dexterity: 'Right-Handed' },
  'callaway-paradym': { Loft: 'Variable (9–12°)', Lie: '58°', Shaft: 'Project X HZRDUS Smoke', Grip: 'Golf Pride Tour Velvet', Length: '45.5"', Dexterity: 'Right-Handed' },
  'odyssey-white-hot-og': { Length: '35"', Loft: '3°', Lie: '70°', Grip: 'Odyssey Pistol', Style: 'Blade', Dexterity: 'Right-Handed' },
  'ping-g430-irons': { Set: '5-Iron through PW', Lie: 'Variable by iron', Shaft: 'True Temper Dynamic Gold 105', Grip: 'Ping PP60', Dexterity: 'Right-Handed' },
  'taylormade-m4-3-wood': { Loft: '15°', Lie: '56°', Volume: '175cc', Shaft: 'Fujikura Atmos TS', Grip: 'Golf Pride MCC', Length: '43"', Dexterity: 'Right-Handed' },
  'titleist-vokey-sm8': { Loft: '56°', Lie: '64°', Bounce: '10° M-Grind', Shaft: 'True Temper Dynamic Gold', Grip: 'Lamkin Crossline', Dexterity: 'Right-Handed' },
}

const relatedMap: Record<string, string[]> = {
  'callaway-rogue-st-max': ['taylormade-stealth-2', 'callaway-paradym', 'taylormade-m4-3-wood'],
  'titleist-vokey-sm9': ['cleveland-rtx6-set', 'titleist-vokey-sm8', 'odyssey-white-hot-og'],
  'taylormade-stealth-2': ['callaway-rogue-st-max', 'callaway-paradym', 'taylormade-m4-3-wood'],
  'ping-g425-putter': ['odyssey-white-hot-og', 'ping-g430-irons', 'callaway-paradym'],
  'cleveland-rtx6-set': ['titleist-vokey-sm9', 'titleist-vokey-sm8', 'odyssey-white-hot-og'],
  'callaway-paradym': ['callaway-rogue-st-max', 'taylormade-stealth-2', 'taylormade-m4-3-wood'],
  'odyssey-white-hot-og': ['ping-g425-putter', 'ping-g430-irons', 'titleist-vokey-sm9'],
  'ping-g430-irons': ['ping-g425-putter', 'cleveland-rtx6-set', 'titleist-vokey-sm9'],
  'taylormade-m4-3-wood': ['callaway-rogue-st-max', 'taylormade-stealth-2', 'callaway-paradym'],
  'titleist-vokey-sm8': ['titleist-vokey-sm9', 'cleveland-rtx6-set', 'ping-g425-putter'],
}

const conditionDescriptions: Record<string, string> = {
  Mint: 'Near-perfect condition. May have been hit fewer than 10 times.',
  Good: 'Light play wear. No structural issues. Performs like new.',
  Fair: 'Visible wear on sole or crown. Fully functional. Priced accordingly.',
}

function StarRating({ rating }: { rating: number }) {
  const filled = Math.round(rating)
  return (
    <span style={{ color: '#c9a227', fontSize: '16px', letterSpacing: '1px' }}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i}>{i <= filled ? '★' : '☆'}</span>
      ))}
    </span>
  )
}

export default function ProductPageClient({ slug }: { slug: string }) {
  const product = PRODUCTS.find(p => p.slug === slug)
  if (!product) notFound()

  const router = useRouter()
  const [activeThumb, setActiveThumb] = useState(0)
  const [activeTab, setActiveTab] = useState(0)
  const [selectedFlex, setSelectedFlex] = useState('Regular')
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const fallback = brandFallback[product.brand] ?? '#e8e4dc'
  const relatedSlugs = relatedMap[slug] ?? []
  const relatedProducts = relatedSlugs.map(s => PRODUCTS.find(p => p.slug === s)).filter(Boolean) as typeof PRODUCTS

  const description = productDescriptions[slug] ?? `The ${product.name} is a tour-proven ${product.type.toLowerCase()} delivering exceptional performance for golfers of all skill levels.`
  const specs = productSpecs[slug] ?? { Loft: product.spec || 'Standard', Lie: '60°', Shaft: 'Stock', Grip: 'Standard', Length: 'Standard', Dexterity: 'Right-Handed' }

  return (
    <>
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Shop', href: '/shop' },
        { label: product.type },
        { label: product.name },
      ]} />

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-12 py-8 md:py-12">
        {/* Left — Image Gallery */}
        <div>
          <div className="h-[360px] md:h-[520px] bg-[#f5f3ef] rounded overflow-hidden relative">
            <ImageWithFallback
              src={product.imageSrc} alt={product.name} fill
              className="object-contain p-8"
              fallbackColor={fallback}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex gap-2 mt-3">
            {[0, 1, 2, 3].map(i => (
              <button
                key={i}
                onClick={() => setActiveThumb(i)}
                className={`w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-[#f5f3ef] border-2 cursor-pointer rounded transition-colors ${
                  activeThumb === i ? 'border-[#1a1a18]' : 'border-transparent hover:border-[#c8c4bc]'
                } relative overflow-hidden`}
              >
                <ImageWithFallback
                  src={product.imageSrc} alt={`${product.name} view ${i + 1}`} fill
                  className="object-contain p-1"
                  fallbackColor={fallback}
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right — Product Info */}
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#7a7870] mb-1">{product.brand}</p>
          <h1 className="font-display font-extrabold text-[28px] md:text-[32px] leading-tight mb-2">{product.name}</h1>
          <p className="text-[14px] text-[#7a7870] mb-3">{product.type}{product.spec ? ` · ${product.spec}` : ''}</p>

          {/* Star rating */}
          <div className="flex items-center gap-2 mb-4">
            <StarRating rating={product.rating} />
            <span className="text-[13px] text-[#7a7870]">({product.reviewCount} reviews)</span>
          </div>

          {/* Condition badge + description */}
          <div className="mb-1"><ConditionBadge condition={product.condition} /></div>
          <p className="text-[12px] text-[#7a7870] mb-4 mt-1">{conditionDescriptions[product.condition] ?? ''}</p>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-1">
            {product.originalPrice && (
              <span className="text-[18px] text-[#7a7870] line-through">${product.originalPrice.toFixed(2)}</span>
            )}
            <span className={`text-[28px] font-bold ${product.originalPrice ? 'text-[#943020]' : 'text-[#1a1a18]'}`}>
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-[12px] text-[#943020] ml-1">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </span>
            )}
          </div>
          <p className="text-[12px] text-[#7a7870] mt-1 mb-6">Price includes tax. Free shipping on orders over $75.</p>

          {/* Shaft flex */}
          <div className="mb-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#1a1a18] mb-2">Select Shaft Flex</p>
            <div className="flex gap-2">
              {flexOptions.map(f => (
                <button
                  key={f}
                  onClick={() => setSelectedFlex(f)}
                  className={`border text-[12px] font-semibold px-5 py-2.5 transition-colors ${
                    selectedFlex === f ? 'bg-[#1a1a18] text-white border-[#1a1a18]' : 'border-[#c8c4bc] hover:border-[#1a1a18]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#1a1a18] mb-2">Quantity</p>
            <div className="border border-[#c8c4bc] inline-flex">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 py-2.5 text-[14px] border-r border-[#c8c4bc] hover:bg-[#f5f3ef]">−</button>
              <span className="px-6 py-2.5 text-[14px]">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} className="px-4 py-2.5 text-[14px] border-l border-[#c8c4bc] hover:bg-[#f5f3ef]">+</button>
            </div>
          </div>

          {/* CTAs */}
          <button
            onClick={() => addItem({ productId: product.id, name: product.name, imageSrc: product.imageSrc, price: product.price, originalPrice: product.originalPrice, condition: product.condition, quantity, flex: selectedFlex })}
            className="block w-full text-center bg-[#1a1a18] text-white text-[12px] font-bold uppercase tracking-[0.15em] py-5 hover:opacity-80 transition-opacity mt-6"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              addItem({ productId: product.id, name: product.name, imageSrc: product.imageSrc, price: product.price, originalPrice: product.originalPrice, condition: product.condition, quantity, flex: selectedFlex })
              router.push('/checkout')
            }}
            className="block w-full text-center bg-[#2e4a2c] text-white text-[12px] font-bold uppercase tracking-[0.15em] py-5 hover:opacity-80 transition-opacity mt-2"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-t border-[#e8e6e0] mt-8 pt-8 px-4 md:px-12 pb-12">
        <div className="flex gap-0 border-b border-[#e8e6e0] mb-6 overflow-x-auto [scrollbar-width:none]">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-4 md:px-6 py-3 text-[12px] md:text-[13px] font-semibold cursor-pointer border-b-2 whitespace-nowrap transition-colors ${
                activeTab === i ? 'border-[#1a1a18] text-[#1a1a18]' : 'border-transparent text-[#7a7870] hover:text-[#1a1a18]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="max-w-[680px] text-[14px] leading-relaxed text-[#7a7870]">
          {activeTab === 0 && (
            <p>{description}</p>
          )}
          {activeTab === 1 && (
            <ol className="list-decimal pl-5 space-y-2">
              <li>Face condition: {product.condition === 'Mint' ? 'No visible wear' : product.condition === 'Good' ? 'Light normal play wear' : 'Visible face wear lines from regular use'}</li>
              <li>Shaft: Inspected for straightness, no bends or cracks detected</li>
              <li>Grip: {product.condition === 'Fair' ? 'May show light wear — consider regripping' : 'In good usable condition'}</li>
              <li>Hosel and ferrule: Secure, no play detected</li>
              <li>Overall finish: Consistent with {product.condition} grade description</li>
            </ol>
          )}
          {activeTab === 2 && (
            <dl className="grid grid-cols-2 gap-x-8 gap-y-3">
              {Object.entries(specs).map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#1a1a18]">{k}</dt>
                  <dd className="mt-0.5">{v}</dd>
                </div>
              ))}
            </dl>
          )}
          {activeTab === 3 && (
            <p>We offer free returns within 30 days of delivery. If the club doesn&apos;t match the described condition, we&apos;ll make it right immediately. See our full <a href="/returns" className="underline underline-offset-2 hover:text-[#2e4a2c]">Returns Policy</a>.</p>
          )}
        </div>
      </div>

      {/* You may also like */}
      {relatedProducts.length > 0 && (
        <div className="border-t border-[#e8e6e0] py-12">
          <h2 className="font-display font-extrabold text-xl px-4 md:px-12 mb-6">You may also like</h2>
          <div className="flex gap-4 px-4 md:px-12 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {relatedProducts.map(p => (
              <div key={p.id} className="flex-none w-[200px] md:w-[250px]">
                <ProductCard product={p} size="sm" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
