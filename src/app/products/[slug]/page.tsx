import { PRODUCTS } from '@/lib/data'
import ProductPageClient from './ProductPageClient'

export async function generateStaticParams() {
  return PRODUCTS.map(p => ({ slug: p.slug }))
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  return <ProductPageClient slug={params.slug} />
}
