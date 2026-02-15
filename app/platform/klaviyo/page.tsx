import Link from 'next/link'
import type { Metadata } from 'next'
import { getPlatformPricing, formatPrice } from '@/lib/pricing'

export const metadata: Metadata = {
  title: 'Klaviyo Review | Pricing, Features & Comparison | MarketingCompare',
  description: 'Read our detailed Klaviyo review. Compare pricing, features, integrations, and alternatives. See why Klaviyo is great for e-commerce brands.',
  openGraph: {
    title: 'Klaviyo Review - Growth Marketing Platform',
    description: 'Detailed Klaviyo review with pricing, features, pros, cons, and alternatives for e-commerce brands.',
    url: 'https://marketing-compare.vercel.app/platform/klaviyo',
  },
}

export default function KlaviyoPage() {
  const klaviyoPricing = getPlatformPricing('klaviyo');
  const plans = klaviyoPricing?.plans || [];
  const lastUpdated = klaviyoPricing?.lastScraped ? new Date(klaviyoPricing.lastScraped).toLocaleDateString() : 'Not available';
    url: 'https://marketing-compare.vercel.app/platform/klaviyo',
  },
}

export default function KlaviyoPage() {
  const klaviyoPricing = getPlatformPricing('klaviyo');
  const plans = klaviyoPricing?.plans || [];
  const lastUpdated = klaviyoPricing?.lastScraped ? new Date(klaviyoPricing.lastScraped).toLocaleDateString() : 'Not available';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MarketingCompare
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Compare
              </Link>
              <Link href="/deals" className="text-gray-600 hover:text-blue-600">
                Deals
              </Link>
              <Link href="/chat" className="text-gray-600 hover:text-blue-600">
                AI Chat
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
          ← Back to all platforms
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Klaviyo</h1>
              <p className="text-xl text-gray-600">Growth marketing platform built for modern brands</p>
              <p className="text-sm text-gray-500 mt-2">
                Pricing last updated: {lastUpdated}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-lg">
              <span className="text-yellow-500 text-2xl">★</span>
              <span className="text-2xl font-bold text-green-800">4.8</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 mb-4">
                Klaviyo is a powerful marketing automation platform designed for e-commerce brands. It combines email marketing, SMS, mobile push, and in-app messaging into one unified platform.
              </p>
              <p className="text-gray-700">
                Known for its robust segmentation capabilities and real-time data syncing with e-commerce platforms like Shopify, WooCommerce, and BigCommerce.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Best For</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>E-commerce brands</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>D2C companies</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Shopify stores</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Multi-channel marketing teams</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`rounded-lg p-6 ${
                    index === 0
                      ? 'bg-green-50 border-2 border-green-500'
                      : index === plans.length - 1
                      ? 'bg-purple-50 border-2 border-purple-500'
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-4">
                    {formatPrice(plan.price, plan.currency)}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">{plan.period}</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Channels</h2>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">Email</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">SMS</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">Mobile Push</span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-medium">In-app</span>
              <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full font-medium">WhatsApp</span>
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-medium">RCS</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Real-time e-commerce sync</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Advanced segmentation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Pre-built automation flows</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>A/B testing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Dynamic product feeds</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Revenue attribution</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Mobile app SDKs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Webhooks & APIs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Marketing Agent AI</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Customer Hub</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Integrations</h2>
            <p className="text-gray-700 mb-4">
              Klaviyo integrates with 300+ platforms including Shopify, WooCommerce, BigCommerce, Magento, Facebook, Instagram, Google Ads, and more.
            </p>
            <p className="text-gray-600 text-sm">
              Includes API access, webhooks, and a robust developer platform for custom integrations.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 MarketingCompare. Compare with confidence.</p>
        </div>
      </footer>
    </div>
  )
}
