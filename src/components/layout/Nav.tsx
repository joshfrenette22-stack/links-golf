'use client'
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'

export default function Nav() {
  const { itemCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav aria-label="Main navigation" className="sticky top-0 z-50 bg-white border-b border-[#e8e6e0]">
        <div className="grid grid-cols-3 items-center px-6 py-3">
          {/* Left */}
          <div className="hidden md:flex gap-6 items-center">
            <a href="/shop" className="text-[13px] font-semibold hover:opacity-50 transition-opacity">Shop</a>
            <a href="/sell" className="text-[13px] font-semibold hover:opacity-50 transition-opacity">Sell Your Clubs</a>
            <a href="/guide" className="text-[13px] font-semibold hover:opacity-50 transition-opacity">Buying Guide</a>
            <a href="/about" className="text-[13px] font-semibold hover:opacity-50 transition-opacity">Our Story</a>
          </div>
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center hover:bg-[#e8e6e0] rounded transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>

          {/* Logo */}
          <div className="flex justify-center">
            <a href="/" className="font-display font-black tracking-wider text-[17px] text-[#1a1a18] whitespace-nowrap">Smooth Swing</a>
          </div>

          {/* Right */}
          <div className="flex justify-end items-center gap-1">
            <span className="hidden md:flex items-center gap-1">
              <span className="text-[#7a7870] text-xs mr-2">United States (USD $) ▾</span>
              {[Search, User, Heart].map((Icon, i) => (
                <button key={i} className="w-9 h-9 flex items-center justify-center hover:bg-[#e8e6e0] rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e4a2c] focus-visible:ring-offset-2">
                  <Icon size={18} />
                </button>
              ))}
            </span>
            <a href="/cart" className="w-9 h-9 flex items-center justify-center hover:bg-[#e8e6e0] rounded transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e4a2c] focus-visible:ring-offset-2">
              <ShoppingBag size={18} />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#943020] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-20 px-8" role="dialog" aria-label="Navigation menu">
          <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col">
            {[
              { label: 'Shop', href: '/shop' },
              { label: 'Sell Your Clubs', href: '/sell' },
              { label: 'Buying Guide', href: '/guide' },
              { label: 'Our Story', href: '/about' },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-[22px] font-extrabold border-b border-[#e8e6e0] py-5 hover:text-[#2e4a2c] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
