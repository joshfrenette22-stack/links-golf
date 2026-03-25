'use client'
import { createContext, useContext, useEffect, useState } from 'react'

export interface CartItem {
  productId: string
  name: string
  imageSrc: string
  price: number
  originalPrice?: number
  condition: string
  quantity: number
  flex?: string
}

interface CartContextType {
  items: CartItem[]
  itemCount: number
  subtotal: number
  addItem: (item: CartItem) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    try {
      const stored = localStorage.getItem('links-golf-cart')
      if (stored) setItems(JSON.parse(stored))
    } catch {}
  }, [])

  useEffect(() => {
    localStorage.setItem('links-golf-cart', JSON.stringify(items))
  }, [items])

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  const addItem = (item: CartItem) => {
    setItems(prev => {
      const existing = prev.find(i => i.productId === item.productId)
      if (existing) return prev.map(i => i.productId === item.productId ? { ...i, quantity: i.quantity + item.quantity } : i)
      return [...prev, item]
    })
  }

  const removeItem = (productId: string) => setItems(prev => prev.filter(i => i.productId !== productId))

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) { removeItem(productId); return }
    setItems(prev => prev.map(i => i.productId === productId ? { ...i, quantity } : i))
  }

  const clearCart = () => setItems([])

  return (
    <CartContext.Provider value={{ items, itemCount, subtotal, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
