import Link from 'next/link'

export default function EditorsPickPage() {
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
              <Link href="/compare" className="text-gray-600 hover:text-blue-600">
                Compare
              </Link>
              <Link href="/editors-pick" className="text-amber-600 font-medium">
                Editor's Pick
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Badge */}
        <div className="flex items-center justify-center mb-8">
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-lg shadow-md">
            Editor's Pick: February 2026
          </div>
        </div>

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            Klaviyo
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            The powerhouse choice for e-commerce brands
          </p>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-yellow-500 text-3xl">★★★★★</span>
            <span className="text-3xl font-bold text-gray-900">4.8</span>
          </div>
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full inline-block font-medium">
            Best For: E-commerce brands
          </div>
        </div>

        {/* Why We Chose It */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We Chose Klaviyo</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Klaviyo stands out in the crowded marketing automation space with its laser focus on e-commerce. Unlike generalist platforms, Klaviyo is built from the ground up for online retailers.
            </p>
            <p>
              The real-time data synchronization with Shopify, WooCommerce, and BigCommerce means every email is personalized based on actual purchase behavior—not just static demographic data.
            </p>
            <p>
              Revenue attribution is exceptional. You can see exactly which campaigns drove sales, which flows are converting, and what the true ROI is for every dollar spent on email marketing.
            </p>
            <p>
              The segmentation capabilities are unmatched. Create segments based on purchase history, browse behavior, email engagement, and combine them with powerful AND/OR logic to target the exact customers you want.
            </p>
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-800 mb-4">✓ Pros</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 mt-1">✓</span>
                <span>Real-time e-commerce sync</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 mt-1">✓</span>
                <span>Advanced segmentation</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 mt-1">✓</span>
                <span>Revenue-focused analytics</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 mt-1">✓</span>
                <span>300+ pre-built integrations</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 mt-1">✓</span>
                <span>Strong SMS capabilities</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 mt-1">✓</span>
                <span>Active user community</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-red-800 mb-4">✗ Cons</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-red-600 mt-1">✗</span>
                <span>Learning curve for advanced features</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-red-600 mt-1">✗</span>
                <span>Pricing scales with contacts</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-red-600 mt-1">✗</span>
                <span>Can be expensive for large lists</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-red-600 mt-1">✗</span>
                <span>Email builder could be more intuitive</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-red-600 mt-1">✗</span>
                <span>Limited non-e-commerce use cases</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Best For */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who It's Best For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <span className="text-gray-700">E-commerce brands</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-gray-700">Shopify stores</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="text-gray-700">Direct-to-consumer brands</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-gray-700">Growing teams</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-gray-700">Data-driven marketers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-700">Multi-channel needs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$0</div>
              <ul className="space-y-2 text-gray-600">
                <li>• Up to 250 contacts</li>
                <li>• Up to 500 email sends</li>
                <li>• Email marketing only</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growth</h3>
              <div className="text-4xl font-bold text-blue-600 mb-1">$45<span className="text-xl font-normal text-gray-600">/mo</span></div>
              <div className="text-sm text-gray-500 mb-4">billed annually</div>
              <ul className="space-y-2 text-gray-600">
                <li>• Up to 10,000 contacts</li>
                <li>• Email + SMS + Push</li>
                <li>• Advanced segmentation</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">Custom</div>
              <ul className="space-y-2 text-gray-600">
                <li>• Unlimited contacts</li>
                <li>• Dedicated support</li>
                <li>• Custom integrations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Try Klaviyo?</h2>
          <p className="text-xl mb-6 opacity-90">
            Start with a free account and scale as you grow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/platform/klaviyo"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Read Full Review
            </Link>
            <Link
              href="/compare"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Compare with Others
            </Link>
          </div>
        </div>

        {/* Previous Picks */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Previous Editor's Picks</h2>
          <div className="text-center text-gray-600">
            <p className="text-lg">More picks coming soon!</p>
            <p className="text-sm mt-2">Check back next month for our next Editor's Pick</p>
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
