import { PRODUCTS } from '@/lib/data'
import ProductPageClient from './ProductPageClient'

export async function generateStaticParams() {
  return PRODUCTS.map(p => ({ slug: p.slug }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ProductPageClient slug={slug} />
}
