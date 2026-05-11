import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { COMPANY_INFO } from '@/lib/siteData'
import './globals.css'

const Header = dynamic(() => import('@/components/Header'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })
const StickyMobileCTA = dynamic(() => import('@/components/StickyMobileCTA'), { ssr: false })
const ChatbotWidget = dynamic(() => import('@/components/ChatbotWidget'), { ssr: false })

export const metadata: Metadata = {
  metadataBase: new URL('https://tedfugunt-website.vercel.app'),
  title: `${COMPANY_INFO.name} | HVAC Repair & Installation in Chattanooga, TN`,
  description: `Professional HVAC repair, replacement, and maintenance in Chattanooga, TN. Emergency service available 24/7. Carrier dealer with financing options.`,
  keywords: [
    'HVAC repair Chattanooga',
    'AC repair Chattanooga',
    'heating repair Chattanooga',
    'HVAC installation',
    'furnace repair',
    'air conditioning service',
    'emergency HVAC',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tedfugunt-website.vercel.app',
    title: `${COMPANY_INFO.name} | HVAC Services in Chattanooga`,
    description: `Professional HVAC repair, replacement, and maintenance. Emergency service 24/7.`,
    siteName: COMPANY_INFO.name,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://tedfugunt-website.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0052cc" />
        <meta name="color-scheme" content="light" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-neutral-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
        <ChatbotWidget />
      </body>
    </html>
  )
}
