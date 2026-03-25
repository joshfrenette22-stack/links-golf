import { BESTSELLER_PRODUCTS } from '@/lib/data'
import ProductCard from '@/components/ui/ProductCard'

export default function BestSellers() {
  return (
    <section id="best-sellers" className="px-12 pt-12 pb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-extrabold">Best selling clubs</h2>
        <a href="/shop" className="bg-[#1a1a18] text-white text-[11px] font-bold uppercase tracking-wider px-5 py-2.5 hover:bg-[#2e4a2c] transition-colors">
          View All
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {BESTSELLER_PRODUCTS.map(p => (
          <ProductCard key={p.id} product={p} size="lg" />
        ))}
      </div>
    </section>
  )
}
