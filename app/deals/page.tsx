'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Deal {
  id: string
  platform: string
  discount: string
  description: string
  expires: string
  category: string
  originalPrice?: string
  dealPrice?: string
}

const deals: Deal[] = [
  {
    id: '1',
    platform: 'Klaviyo',
    discount: '20% OFF',
    description: 'Get 20% off your first 6 months when switching from another platform',
    expires: '2024-03-31',
    category: 'New Customer',
    originalPrice: '$45/mo',
    dealPrice: '$36/mo'
  },
  {
    id: '2',
    platform: 'Omnisend',
    discount: '30% OFF',
    description: 'Annual plan discount - save 30% when you pay yearly',
    expires: '2024-04-15',
    category: 'Annual Plan',
    originalPrice: '$16/mo',
    dealPrice: '$11/mo'
  },
  {
    id: '3',
    platform: 'Privy',
    discount: '50% OFF',
    description: 'Limited time: First month at 50% off for new Shopify stores',
    expires: '2024-02-28',
    category: 'Limited Time',
    originalPrice: '$15/mo',
    dealPrice: '$7.50/mo'
  },
  {
    id: '4',
    platform: 'Mailchimp',
    discount: '15% OFF',
    description: 'Spring sale: Save on first 3 months of Essentials plan',
    expires: '2024-03-15',
    category: 'Seasonal',
    originalPrice: '$13/mo',
    dealPrice: '$11/mo'
  },
  {
    id: '5',
    platform: 'ActiveCampaign',
    discount: 'FREE TRIAL',
    description: 'Extended 30-day trial - usually only 14 days',
    expires: '2024-04-01',
    category: 'Free Trial',
  },
  {
    id: '6',
    platform: 'HubSpot',
    discount: '$1,000 CREDIT',
    description: 'Startup program: $1,000 credit for eligible startups',
    expires: 'Ongoing',
    category: 'Startup',
  },
  {
    id: '7',
    platform: 'Brevo',
    discount: '40% OFF',
    description: 'March special: 40% off first 3 months of Business plan',
    expires: '2024-03-31',
    category: 'Limited Time',
    originalPrice: '$65/mo',
    dealPrice: '$39/mo'
  },
  {
    id: '8',
    platform: 'Drip',
    discount: '25% OFF',
    description: 'Switch to Drip: Get 25% off first year when migrating from competitors',
    expires: '2024-06-30',
    category: 'Migration',
    originalPrice: '$39/mo',
    dealPrice: '$29/mo'
  },
]

const categories = ['All', 'New Customer', 'Annual Plan', 'Limited Time', 'Free Trial', 'Startup', 'Migration', 'Seasonal']

export default function DealsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredDeals = selectedCategory === 'All'
    ? deals
    : deals.filter(deal => deal.category === selectedCategory)

  const isExpiringSoon = (expires: string) => {
    if (expires === 'Ongoing') return false
    const expiryDate = new Date(expires)
    const today = new Date()
    const daysUntilExpiry = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    return daysUntilExpiry <= 7
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
              <Link href="/deals" className="text-blue-600 font-semibold">
                Deals
              </Link>
              <Link href="/chat" className="text-gray-600 hover:text-blue-600">
                AI Chat
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Current Deals & Discounts</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Save money on the best marketing platforms. Exclusive offers updated regularly.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDeals.map((deal) => (
            <div
              key={deal.id}
              className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all ${
                isExpiringSoon(deal.expires) ? 'ring-2 ring-red-500' : ''
              }`}
            >
              {isExpiringSoon(deal.expires) && (
                <div className="bg-red-100 text-red-700 text-sm font-medium px-2 py-1 rounded mb-3 inline-block">
                  ⚠️ Expiring Soon
                </div>
              )}

              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{deal.platform}</h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded mt-1">
                    {deal.category}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{deal.discount}</div>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{deal.description}</p>

              {deal.originalPrice && deal.dealPrice && (
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="text-sm text-gray-500 line-through">{deal.originalPrice}</div>
                  <div className="text-lg font-bold text-green-600">{deal.dealPrice}</div>
                </div>
              )}

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {deal.expires === 'Ongoing' ? 'Ongoing offer' : `Expires: ${new Date(deal.expires).toLocaleDateString()}`}
                </div>
                <Link
                  href={`/platform/${deal.platform.toLowerCase()}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Platform →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredDeals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No deals found for this category.</p>
          </div>
        )}

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Pro Tip</h3>
          <p className="text-gray-700">
            Many platforms offer the best deals for annual plans or new customers switching from competitors.
            Always check if you qualify for startup or non-profit discounts - they can save you thousands!
          </p>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 MarketingCompare. Deals and promotions are subject to change.</p>
        </div>
      </footer>
    </div>
  )
}
