'use client'

import { useState } from 'react'
import Link from 'next/link'

const platforms = [
  {
    id: 'klaviyo',
    name: 'Klaviyo',
    tagline: 'Growth marketing platform built for modern brands',
    rating: 4.8,
    pricing: 'Free - $199/month',
    bestFor: 'E-commerce brands',
    channels: ['Email', 'SMS', 'Mobile Push', 'In-app'],
    features: [
      'Real-time e-commerce sync',
      'Advanced segmentation',
      'Pre-built automation flows',
      'A/B testing',
      'Dynamic product feeds',
      'Revenue attribution',
      'Mobile app SDKs',
      'Webhooks & APIs'
    ],
    integrations: '300+ platforms',
  },
  {
    id: 'omnisend',
    name: 'Omnisend',
    tagline: 'E-commerce marketing automation made simple',
    rating: 4.7,
    pricing: 'Free - $149/month',
    bestFor: 'Small e-commerce stores',
    channels: ['Email', 'SMS', 'Push', 'WhatsApp'],
    features: [
      'E-commerce sync',
      'Automation workflows',
      'Pre-built templates',
      'A/B testing',
      'Product recommendation',
      'Customer segmentation',
      'SMS campaigns',
      'Email editor'
    ],
    integrations: '150+ platforms',
  },
  {
    id: 'privy',
    name: 'Privy',
    tagline: 'Marketing for e-commerce growth',
    rating: 4.6,
    pricing: 'Free - $99/month',
    bestFor: 'Shopify brands',
    channels: ['Email', 'SMS', 'Pop-ups'],
    features: [
      'Shopify integration',
      'Email campaigns',
      'SMS marketing',
      'Pop-up forms',
      'Automated flows',
      'Abandoned cart recovery',
      'Exit-intent popups',
      'Email templates'
    ],
    integrations: '50+ platforms',
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    tagline: 'All-in-one marketing platform',
    rating: 4.5,
    pricing: 'Free - $299/month',
    bestFor: 'Small businesses',
    channels: ['Email', 'Post', 'Ads', 'Social'],
    features: [
      'Email marketing',
      'Landing pages',
      'Social ads',
      'Postcards',
      'Basic automation',
      'Audience segmentation',
      'Reporting & analytics',
      'Website builder'
    ],
    integrations: '300+ platforms',
  },
  {
    id: 'activecampaign',
    name: 'ActiveCampaign',
    tagline: 'Customer experience automation platform',
    rating: 4.7,
    pricing: '$29 - $149/month',
    bestFor: 'SMBs growing fast',
    channels: ['Email', 'SMS', 'Marketing', 'Sales'],
    features: [
      'Email marketing',
      'Marketing automation',
      'CRM integration',
      'Lead scoring',
      'Site tracking',
      'Split testing',
      ' SMS marketing',
      'Contact management'
    ],
    integrations: '900+ platforms',
  },
  {
    id: 'hubspot',
    name: 'HubSpot Marketing Hub',
    tagline: 'Inbound marketing, sales, and service software',
    rating: 4.6,
    pricing: 'Free - $3,200/month',
    bestFor: 'Scaling teams',
    channels: ['Email', 'Ads', 'Social', 'Web'],
    features: [
      'Email marketing',
      'Marketing automation',
      'CRM included',
      'Forms & popups',
      'Landing pages',
      'Social media management',
      'Blog & SEO',
      'Analytics & reporting'
    ],
    integrations: '1,500+ platforms',
  },
  {
    id: 'braze',
    name: 'Braze',
    tagline: 'Customer engagement platform for brands',
    rating: 4.8,
    pricing: 'Custom pricing',
    bestFor: 'Enterprise teams',
    channels: ['Email', 'Push', 'In-app', 'SMS'],
    features: [
      'Multi-channel campaigns',
      'Real-time messaging',
      'Deep personalization',
      'Customer journeys',
      'Campaign orchestration',
      'Analytics dashboard',
      'A/B testing',
      'Data APIs'
    ],
    integrations: '200+ platforms',
  },
  {
    id: 'customerio',
    name: 'Customer.io',
    tagline: 'Automated messaging that humans love',
    rating: 4.7,
    pricing: '$49 - $999/month',
    bestFor: 'Product-led growth',
    channels: ['Email', 'Push', 'In-app', 'SMS'],
    features: [
      'Behavioral emails',
      'Push notifications',
      'In-app messages',
      'SMS messaging',
      'Workflows & automation',
      'Segmentation',
      'Data pipelines',
      'Reporting'
    ],
    integrations: '100+ platforms',
  },
  {
    id: 'brevo',
    name: 'Brevo (formerly Sendinblue)',
    tagline: 'Marketing platform for growing businesses',
    rating: 4.5,
    pricing: 'Free - $65/month',
    bestFor: 'Budget-conscious teams',
    channels: ['Email', 'SMS', 'Chat', 'WhatsApp'],
    features: [
      'Email campaigns',
      'SMS marketing',
      'Live chat',
      'WhatsApp campaigns',
      'Marketing automation',
      'CRM features',
      'Facebook ads',
      'Landing pages'
    ],
    integrations: '200+ platforms',
  },
  {
    id: 'drip',
    name: 'Drip',
    tagline: 'E-commerce CRM for personalized marketing',
    rating: 4.4,
    pricing: '$39 - $249/month',
    bestFor: 'Online retailers',
    channels: ['Email', 'SMS', 'Pop-ups'],
    features: [
      'E-commerce CRM',
      'Email automation',
      'SMS marketing',
      'Pop-up forms',
      'Customer segmentation',
      'Revenue tracking',
      'Split testing',
      'Workflows'
    ],
    integrations: '100+ platforms',
  },
]

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>([])

  const togglePlatform = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(p => p !== id))
    } else if (selected.length < 3) {
      setSelected([...selected, id])
    }
  }

  const selectedPlatforms = platforms.filter(p => selected.includes(p.id))

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
              <Link href="/compare" className="text-blue-600 font-medium">
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

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Compare Platforms</h1>
        <p className="text-xl text-gray-600 mb-8">
          Select up to 3 platforms to compare side-by-side
        </p>

        {/* Platform Selection */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Select Platforms ({selected.length}/3)</h2>
            {selected.length > 0 && (
              <button
                onClick={() => setSelected([])}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Clear all
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {platforms.map((platform) => {
              const isSelected = selected.includes(platform.id)
              const isDisabled = !isSelected && selected.length >= 3
              return (
                <button
                  key={platform.id}
                  onClick={() => togglePlatform(platform.id)}
                  disabled={isDisabled}
                  className={`
                    p-4 rounded-lg border-2 transition-all
                    ${isSelected
                      ? 'border-blue-500 bg-blue-50'
                      : isDisabled
                      ? 'border-gray-200 bg-gray-100 opacity-50 cursor-not-allowed'
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                    }
                  `}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                      }`}
                    >
                      {isSelected && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="font-semibold text-gray-900">{platform.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <span className="text-yellow-500">★</span>
                    <span className="font-medium">{platform.rating}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Comparison Table */}
        {selected.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-gray-900 min-w-[150px]">
                      Feature
                    </th>
                    {selectedPlatforms.map((platform) => (
                      <th key={platform.id} className="px-6 py-4 text-left min-w-[250px]">
                        <div>
                          <div className="font-bold text-lg text-gray-900">{platform.name}</div>
                          <div className="text-sm text-gray-600 mt-1">{platform.tagline}</div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Rating */}
                  <tr className="border-t border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Rating</td>
                    {selectedPlatforms.map((platform) => (
                      <td key={platform.id} className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">★</span>
                          <span className="font-bold text-lg">{platform.rating}</span>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Pricing */}
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Pricing</td>
                    {selectedPlatforms.map((platform) => (
                      <td key={platform.id} className="px-6 py-4">
                        <span className="font-medium text-blue-600">{platform.pricing}</span>
                      </td>
                    ))}
                  </tr>

                  {/* Best For */}
                  <tr className="border-t border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Best For</td>
                    {selectedPlatforms.map((platform) => (
                      <td key={platform.id} className="px-6 py-4">
                        <span>{platform.bestFor}</span>
                      </td>
                    ))}
                  </tr>

                  {/* Channels */}
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Channels</td>
                    {selectedPlatforms.map((platform) => (
                      <td key={platform.id} className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {platform.channels.map((channel) => (
                            <span
                              key={channel}
                              className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                            >
                              {channel}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Key Features */}
                  <tr className="border-t border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Key Features</td>
                    {selectedPlatforms.map((platform) => (
                      <td key={platform.id} className="px-6 py-4">
                        <ul className="space-y-1">
                          {platform.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm">
                              <span className="text-green-500">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Integrations */}
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Integrations</td>
                    {selectedPlatforms.map((platform) => (
                      <td key={platform.id} className="px-6 py-4">
                        <span>{platform.integrations}</span>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty State */}
        {selected.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Select platforms to compare</h3>
            <p className="text-gray-600">Choose up to 3 platforms from the list above</p>
          </div>
        )}
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
