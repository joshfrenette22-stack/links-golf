'use client'
import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ProductCard from '@/components/ui/ProductCard'
import { PRODUCTS } from '@/lib/data'

const filters = ['All', 'Drivers', 'Irons', 'Wedges', 'Putters', 'Bags', 'On Sale']
const sortOptions = ['Featured', 'Price: Low–High', 'Price: High–Low', 'Newest', 'Rating']

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [sort, setSort] = useState('Featured')

  const filtered = activeFilter === 'All' ? PRODUCTS
    : activeFilter === 'On Sale' ? PRODUCTS.filter(p => p.originalPrice)
    : PRODUCTS.filter(p => p.type.toLowerCase().includes(activeFilter.toLowerCase()) || (activeFilter === 'Drivers' && p.type === 'Driver') || (activeFilter === 'Irons' && p.type === 'Irons') || (activeFilter === 'Wedges' && (p.type === 'Wedge' || p.type === 'Wedges')) || (activeFilter === 'Putters' && p.type === 'Putter'))

  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Shop' }]} />
      <PageHero
        eyebrow="Browse the collection"
        title="Pre-Owned Golf Equipment"
        subtitle="Every club inspected, graded, and ready to play."
        size="lg"
      />
      {/* Filter bar */}
      <div className="sticky top-[62px] z-40 bg-white border-b border-[#e8e6e0]">
        <div className="flex items-center justify-between px-4 md:px-12 py-3 gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-[12px] font-semibold uppercase tracking-[0.08em] px-4 py-1.5 border rounded-full cursor-pointer whitespace-nowrap transition-colors ${
                  activeFilter === f ? 'bg-[#1a1a18] text-white border-[#1a1a18]' : 'border-[#c8c4bc] hover:border-[#1a1a18]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="text-[12px] border border-[#c8c4bc] px-3 py-1.5 outline-none shrink-0"
          >
            {sortOptions.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 px-4 md:px-12 py-10">
        {filtered.map(p => <ProductCard key={p.id} product={p} size="lg" />)}
      </div>
      <div className="flex justify-center mt-4 mb-16">
        <button className="border border-[#1a1a18] text-[#1a1a18] text-[11px] font-bold uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#1a1a18] hover:text-white transition-all">
          Load More
        </button>
      </div>
    </>
  )
}
