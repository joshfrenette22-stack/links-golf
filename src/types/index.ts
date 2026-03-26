export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  id: string
  name: string
  brand: string
  type: string
  spec: string
  condition: 'Mint' | 'Good' | 'Fair'
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  badge?: string
  imageSrc: string
  slug: string
  description: string
  conditionNotes: string
  specs: ProductSpec[]
  features: string[]
  relatedSlugs: string[]
}

export interface BlogPost {
  id: string
  date: string
  readTime: string
  title: string
  excerpt: string
  imageSrc: string
  slug: string
}

export interface Collection {
  id: string
  name: string
  subtitle: string
  imageSrc: string
}
