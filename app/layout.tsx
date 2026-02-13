import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://marketing-compare.vercel.app'),
  title: 'MarketingCompare - Compare Marketing Automation Platforms',
  description: 'Compare Klaviyo, Omnisend, Mailchimp, HubSpot, ActiveCampaign, and more. Real-time pricing, AI recommendations, and detailed side-by-side comparisons.',
  keywords: 'marketing automation, email marketing, Klaviyo, Omnisend, Mailchimp, HubSpot, ActiveCampaign, Braze, Customer.io, Brevo, Drip',
  authors: [{ name: 'MarketingCompare' }],
  openGraph: {
    title: 'MarketingCompare - Compare Marketing Automation Platforms',
    description: 'Compare 10 leading marketing automation tools with real-time pricing, sentiment analysis, and AI-powered recommendations.',
    url: 'https://marketing-compare.vercel.app',
    siteName: 'MarketingCompare',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MarketingCompare - Compare Marketing Automation Platforms',
    description: 'Compare 10 leading marketing automation tools with real-time pricing, sentiment analysis, and AI-powered recommendations.',
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
    canonical: 'https://marketing-compare.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
