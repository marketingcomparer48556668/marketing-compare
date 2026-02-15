import Link from 'next/link'
import { getPlatformPricing, formatPrice, formatPriceRange } from '@/lib/pricing'

type PricingPlan = {
  name: string;
  price: number | null;
  currency: string;
  period: string;
  features: string[];
}

const platforms = [
  {
    id: 'klaviyo',
    name: 'Klaviyo',
    tagline: 'Growth marketing platform built for modern brands',
    rating: 4.8,
    bestFor: 'E-commerce brands',
    channels: ['Email', 'SMS', 'Mobile Push', 'In-app'],
  },
  {
    id: 'omnisend',
    name: 'Omnisend',
    tagline: 'E-commerce marketing automation made simple',
    rating: 4.7,
    bestFor: 'Small e-commerce stores',
    channels: ['Email', 'SMS', 'Push', 'WhatsApp'],
  },
  {
    id: 'privy',
    name: 'Privy',
    tagline: 'Marketing for e-commerce growth',
    rating: 4.6,
    bestFor: 'Shopify brands',
    channels: ['Email', 'SMS', 'Pop-ups'],
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    tagline: 'All-in-one marketing platform',
    rating: 4.5,
    bestFor: 'Small businesses',
    channels: ['Email', 'Post', 'Ads', 'Social'],
  },
  {
    id: 'activecampaign',
    name: 'ActiveCampaign',
    tagline: 'Customer experience automation platform',
    rating: 4.7,
    bestFor: 'SMBs growing fast',
    channels: ['Email', 'SMS', 'Marketing', 'Sales'],
  },
  {
    id: 'hubspot',
    name: 'HubSpot Marketing Hub',
    tagline: 'Inbound marketing, sales, and service software',
    rating: 4.6,
    bestFor: 'Scaling teams',
    channels: ['Email', 'Ads', 'Social', 'Web'],
  },
  {
    id: 'braze',
    name: 'Braze',
    tagline: 'Customer engagement platform for brands',
    rating: 4.8,
    bestFor: 'Enterprise teams',
    channels: ['Email', 'Push', 'In-app', 'SMS'],
  },
  {
    id: 'customerio',
    name: 'Customer.io',
    tagline: 'Automated messaging that humans love',
    rating: 4.7,
    bestFor: 'Product-led growth',
    channels: ['Email', 'Push', 'In-app', 'SMS'],
  },
  {
    id: 'brevo',
    name: 'Brevo (formerly Sendinblue)',
    tagline: 'Marketing platform for growing businesses',
    rating: 4.5,
    bestFor: 'Budget-conscious teams',
    channels: ['Email', 'SMS', 'Chat', 'WhatsApp'],
  },
  {
    id: 'drip',
    name: 'Drip',
    tagline: 'E-commerce CRM for personalized marketing',
    rating: 4.4,
    bestFor: 'Online retailers',
    channels: ['Email', 'SMS', 'Pop-ups'],
  },
]

function getPricingText(platformId: string): string {
  const pricing = getPlatformPricing(platformId);
  if (!pricing || pricing.plans.length === 0) {
    return 'Pricing coming soon';
  }

  const prices = pricing.plans
    .map((plan: PricingPlan) => plan.price)
    .filter((price): price is number => price !== null);

  if (prices.length === 0) {
    return 'Custom pricing';
  }

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const currency = pricing.plans[0]?.currency || 'USD';

  if (minPrice === 0 && maxPrice > 0) {
    return `${formatPrice(maxPrice, currency)}/mo`;
  }

  return formatPriceRange(minPrice, maxPrice, currency);
}

export default function Home() {
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
              <Link href="/editors-pick" className="text-amber-600 hover:text-amber-700 font-medium">
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

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Find Your Perfect Marketing Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare 10 leading marketing automation tools with real-time pricing, sentiment analysis, and AI-powered recommendations.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-blue-600 mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Real-Time Pricing</h3>
            <p className="text-gray-600">
              Always up-to-date pricing with promotional offers and plan comparisons.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-purple-600 mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a12.02 12.02 0 01-3.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 0.042-2.052-2-6.052" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Private AI Chat</h3>
            <p className="text-gray-600">
              Get personalized recommendations from AI that runs entirely in your browser.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-green-600 mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 00-2 2H5a2 2 0 00-2-2h2a2 2 0 002-2zm0 0V5a2 2 0 012-2h2a2 2 0 012 2v14" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">User Sentiment</h3>
            <p className="text-gray-600">
              See what real users think about each platform from multiple sources.
            </p>
          </div>
        </div>

        {/* Platform Grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform) => {
            const pricing = getPlatformPricing(platform.id);
            const pricingText = getPricingText(platform.id);

            return (
              <Link
                key={platform.id}
                href={`/platform/${platform.id}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 block"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
                  <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded">
                    <span className="text-yellow-500">★</span>
                    <span className="font-semibold text-green-800">{platform.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{platform.tagline}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">{platform.bestFor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Pricing:</span>
                    <span className="font-medium text-blue-600">{pricingText}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block mb-1">Channels:</span>
                    <div className="flex flex-wrap gap-1">
                      {platform.channels.map((channel) => (
                        <span
                          key={channel}
                          className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs"
                        >
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
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
