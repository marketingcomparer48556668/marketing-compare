import Link from 'next/link'

export default function PrivyPage() {
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
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Privy</h1>
              <p className="text-xl text-gray-600">Marketing for e-commerce growth</p>
            </div>
            <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-lg">
              <span className="text-yellow-500 text-2xl">★</span>
              <span className="text-2xl font-bold text-green-800">4.6</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 mb-4">
                Privy is an e-commerce marketing platform focused on helping Shopify brands grow their business through email marketing, SMS, and pop-ups.
              </p>
              <p className="text-gray-700">
                Known for its easy-to-use interface and powerful pop-up forms that help capture leads and convert visitors.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Best For</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span><span>Shopify brands</span></div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span><span>E-commerce beginners</span></div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span><span>Lead generation focus</span></div>
                <div className="flex items-center gap-2"><span className="text-green-500">✓</span><span>Budget-friendly</span></div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Free</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">$0</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Up to 100 contacts</li>
                  <li>Unlimited pop-ups</li>
                  <li>Email marketing</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-blue-500">
                <h3 className="text-lg font-semibold mb-2">Growth</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">$15<span className="text-lg font-normal text-gray-600">/mo</span></p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Up to 1,000 contacts</li>
                  <li>Email + SMS</li>
                  <li>Automation</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Scale</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">$99<span className="text-lg font-normal text-gray-600">/mo</span></p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Up to 15,000 contacts</li>
                  <li>All features</li>
                  <li>Priority support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Channels</h2>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">Email</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">SMS</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">Pop-ups</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span><span>High-converting pop-up templates</span></li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span><span>Cart abandonment emails</span></li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span><span>Abandoned checkout recovery</span></li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span><span>Shopper profiles</span></li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span><span>Automated welcome series</span></li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span><span>Product reviews integration</span></li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span><span>Shopify native</span></li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span><span>24/7 support</span></li>
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
