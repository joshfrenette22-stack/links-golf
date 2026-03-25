import Hero from '@/components/sections/Hero'
import CollectionTiles from '@/components/sections/CollectionTiles'
import ProductCarousel from '@/components/sections/ProductCarousel'
import InspectionSplit from '@/components/sections/InspectionSplit'
import TradeInBanner from '@/components/sections/TradeInBanner'
import PhotoGrid from '@/components/sections/PhotoGrid'
import DualPromoBanners from '@/components/sections/DualPromoBanners'
import BestSellers from '@/components/sections/BestSellers'
import AboutSection from '@/components/sections/AboutSection'
import BuyersGuide from '@/components/sections/BuyersGuide'
import CategoryShowcase from '@/components/sections/CategoryShowcase'
import BlogSection from '@/components/sections/BlogSection'
import SpotlightBanner from '@/components/sections/SpotlightBanner'
import YouTubeSection from '@/components/sections/YouTubeSection'
import MapSection from '@/components/sections/MapSection'
import Ticker from '@/components/sections/Ticker'

export default function Home() {
  return (
    <>
      <Hero />
      <CollectionTiles />
      <ProductCarousel />
      <hr className="mx-12 border-[#e8e6e0]" />
      <InspectionSplit />
      <TradeInBanner />
      <PhotoGrid />
      <DualPromoBanners />
      <BestSellers />
      <AboutSection />
      <BuyersGuide />
      <CategoryShowcase />
      <BlogSection />
      <SpotlightBanner />
      <YouTubeSection />
      <MapSection />
      <Ticker />
    </>
  )
}
