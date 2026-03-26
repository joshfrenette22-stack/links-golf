import { BLOG_POSTS } from '@/lib/data'
import BlogPostClient from './BlogPostClient'

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <BlogPostClient slug={slug} />
}
