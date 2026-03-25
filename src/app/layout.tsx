import type { Metadata } from 'next'
import { Barlow, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LINKS — Pre-Owned Golf Equipment',
  description: 'Tour-quality clubs at real-world prices. Shop inspected pre-owned drivers, irons, wedges, and putters from Titleist, Callaway, TaylorMade, Ping, and Scotty Cameron.',
  openGraph: {
    title: 'LINKS — Pre-Owned Golf Equipment',
    description: 'Tour-quality clubs at real-world prices.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${cormorant.variable}`}>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-4 py-2 z-[100]">
          Skip to content
        </a>
        <AnnouncementBar />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
