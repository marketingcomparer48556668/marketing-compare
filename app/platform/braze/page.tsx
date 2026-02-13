import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Braze Review | Pricing, Features & Comparison | MarketingCompare',
  description: 'Read our detailed Braze review. Compare pricing, features, integrations, and alternatives. See why Braze is great for enterprise teams.',
  openGraph: {
    title: 'Braze Review - Customer Engagement Platform',
    description: 'Detailed Braze review with pricing, features, pros, cons, and alternatives for enterprise teams.',
    url: 'https://marketing-compare.vercel.app/platform/braze',
  },
}

export default function BrazePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">MarketingCompare</Link>
            <nav className="flex gap-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600">Compare</Link>
              <Link href="/deals" className="text-gray-600 hover:text-blue-600">Deals</Link>
              <Link href="/chat" className="text-gray-600 hover:text-blue-600">AI Chat</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">← Back to all platforms</Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Braze</h1>
              <p className="text-xl text-gray-600">Customer engagement platform for brands</p>
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
                Braze is a comprehensive customer engagement platform designed for brands that need sophisticated multi-channel messaging at scale.
              </p>
              <p className="text-gray-700">
                Known for its powerful orchestration engine, real-time data streaming, and advanced customer segmentation capabilities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Best For</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span><span>Enterprise teams</span></div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span><span>High-volume messaging</span></div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span><span>Mobile-first brands</span></div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span><span>Complex journeys</span></div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Starter</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">Custom</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Up to 1M MAUs</li>
                  <li>Core channels</li>
                  <li>Basic analytics</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-blue-500">
                <h3 className="text-lg font-semibold mb-2">Growth</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">Custom</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Up to 10M MAUs</li>
                  <li>All channels</li>
                  <li>Advanced features</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">Custom</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Unlimited MAUs</li>
                  <li>Dedicated CSM</li>
                  <li>Custom integrations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Channels</h2>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">Email</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">Push</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">In-app</span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-medium">SMS</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span><span>Canvas journey builder</span></li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span><span>Real-time data streaming</span></li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span><span>Advanced segmentation</span></li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span><span>A/B testing</span></li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span><span>Liquid templating</span></li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span><span>Content cards</span></li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span><span>Deep analytics</span></li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span><span>REST API & SDKs</span></li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 MarketingCompare. Compare with confidence.</p>
        </div>
      </footer>
    </div>
  )
}
