import { PRODUCTS } from '@/lib/data'
import ProductCard from '@/components/ui/ProductCard'

export default function ProductCarousel() {
  return (
    <section id="featured" className="pt-12 pb-4">
      <div className="flex justify-between items-center px-12 mb-6">
        <h2 className="text-xl font-extrabold">Featured clubs</h2>
        <a href="/shop" className="text-[13px] underline underline-offset-2 hover:text-[#2e4a2c] transition-colors">View all</a>
      </div>
      <div className="flex gap-4 px-12 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {PRODUCTS.map(p => (
          <div key={p.id} className="flex-none w-[250px]">
            <ProductCard product={p} size="sm" />
          </div>
        ))}
      </div>
    </section>
  )
}
