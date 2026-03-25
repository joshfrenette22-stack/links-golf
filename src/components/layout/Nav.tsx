'use client'
import { Search, User, Heart, ShoppingBag } from 'lucide-react'

export default function Nav() {
  return (
    <nav aria-label="Main navigation" className="sticky top-0 z-50 bg-white border-b border-[#e8e6e0]">
      <div className="grid grid-cols-3 items-center px-6 py-3">
        {/* Left links */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="/shop" className="text-[13px] font-semibold hover:opacity-50 transition-opacity">Shop</a>
          <a href="/sell" className="text-[13px] font-semibold hover:opacity-50 transition-opacity">Sell Your Clubs</a>
          <a href="/guide" className="text-[13px] font-semibold hover:opacity-50 transition-opacity">Buying Guide</a>
        </div>
        <div className="md:hidden" />

        {/* Logo */}
        <div className="flex justify-center">
          <a href="/" className="font-display font-black tracking-[0.28em] text-xl text-[#1a1a18]">LINKS</a>
        </div>

        {/* Right icons */}
        <div className="flex justify-end items-center gap-1">
          <span className="hidden md:flex items-center gap-1">
            <span className="text-[#7a7870] text-xs mr-2">United States (USD $) ▾</span>
            {[Search, User, Heart].map((Icon, i) => (
              <button key={i} className="w-9 h-9 flex items-center justify-center hover:bg-[#e8e6e0] rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e4a2c] focus-visible:ring-offset-2">
                <Icon size={18} />
              </button>
            ))}
          </span>
          <button className="w-9 h-9 flex items-center justify-center hover:bg-[#e8e6e0] rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e4a2c] focus-visible:ring-offset-2">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </nav>
  )
}
