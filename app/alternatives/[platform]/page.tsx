import Link from 'next/link'
import type { Metadata } from 'next'

// Platform data - centralized for now, should be moved to a separate file
const platformData: Record<string, any> = {
  klaviyo: {
    name: 'Klaviyo',
    tagline: 'Growth marketing platform built for modern brands',
    rating: 4.8,
    bestFor: 'E-commerce brands',
    channels: ['Email', 'SMS', 'Mobile Push', 'In-app'],
    pricing: 'Free - $199/month',
    startingPrice: 0,
    features: [
      'Real-time e-commerce sync',
      'Advanced segmentation',
      'Pre-built automation flows',
      'A/B testing',
      'Dynamic product feeds',
      'Revenue attribution',
      'Mobile app SDKs',
      'Webhooks & APIs'
    ]
  },
  omnisend: {
    name: 'Omnisend',
    tagline: 'E-commerce marketing automation made simple',
    rating: 4.7,
    bestFor: 'Small e-commerce stores',
    channels: ['Email', 'SMS', 'Push', 'WhatsApp'],
    pricing: 'Free - $149/month',
    startingPrice: 0,
    features: [
      'E-commerce sync',
      'Automation workflows',
      'Pre-built templates',
      'A/B testing',
      'Product recommendation',
      'Customer segmentation',
      'SMS campaigns',
      'Email editor'
    ]
  },
  mailchimp: {
    name: 'Mailchimp',
    tagline: 'All-in-one marketing platform',
    rating: 4.5,
    bestFor: 'Small businesses',
    channels: ['Email', 'Post', 'Ads', 'Social'],
    pricing: 'Free - $299/month',
    startingPrice: 0,
    features: [
      'Email marketing',
      'Landing pages',
      'Social ads',
      'Postcards',
      'Basic automation',
      'Audience segmentation',
      'Reporting & analytics',
      'Website builder'
    ]
  },
  activecampaign: {
    name: 'ActiveCampaign',
    tagline: 'Customer experience automation platform',
    rating: 4.7,
    bestFor: 'SMBs growing fast',
    channels: ['Email', 'SMS', 'Marketing', 'Sales'],
    pricing: '$29 - $149/month',
    startingPrice: 29,
    features: [
      'Email marketing',
      'Marketing automation',
      'CRM integration',
      'Lead scoring',
      'Site tracking',
      'Split testing',
      'SMS marketing',
      'Contact management'
    ]
  },
  hubspot: {
    name: 'HubSpot Marketing Hub',
    tagline: 'Inbound marketing, sales, and service software',
    rating: 4.6,
    bestFor: 'Scaling teams',
    channels: ['Email', 'Ads', 'Social', 'Web'],
    pricing: 'Free - $3,200/month',
    startingPrice: 0,
    features: [
      'Email marketing',
      'Marketing automation',
      'CRM included',
      'Forms & popups',
      'Landing pages',
      'Social media management',
      'Blog & SEO',
      'Analytics & reporting'
    ]
  },
  privy: {
    name: 'Privy',
    tagline: 'Marketing for e-commerce growth',
    rating: 4.6,
    bestFor: 'Shopify brands',
    channels: ['Email', 'SMS', 'Pop-ups'],
    pricing: 'Free - $99/month',
    startingPrice: 0,
    features: [
      'Shopify integration',
      'Email campaigns',
      'SMS marketing',
      'Pop-up forms',
      'Automated flows',
      'Abandoned cart recovery',
      'Exit-intent popups',
      'Email templates'
    ]
  },
  braze: {
    name: 'Braze',
    tagline: 'Customer engagement platform for brands',
    rating: 4.8,
    bestFor: 'Enterprise teams',
    channels: ['Email', 'Push', 'In-app', 'SMS'],
    pricing: 'Custom pricing',
    startingPrice: null,
    features: [
      'Multi-channel campaigns',
      'Real-time messaging',
      'Deep personalization',
      'Customer journeys',
      'Campaign orchestration',
      'Analytics dashboard',
      'A/B testing',
      'Data APIs'
    ]
  },
  customerio: {
    name: 'Customer.io',
    tagline: 'Automated messaging that humans love',
    rating: 4.7,
    bestFor: 'Product-led growth',
    channels: ['Email', 'Push', 'In-app', 'SMS'],
    pricing: '$49 - $999/month',
    startingPrice: 49,
    features: [
      'Behavioral emails',
      'Push notifications',
      'In-app messages',
      'SMS messaging',
      'Workflows & automation',
      'Segmentation',
      'Data pipelines',
      'Reporting'
    ]
  },
  brevo: {
    name: 'Brevo (formerly Sendinblue)',
    tagline: 'Marketing platform for growing businesses',
    rating: 4.5,
    bestFor: 'Budget-conscious teams',
    channels: ['Email', 'SMS', 'Chat', 'WhatsApp'],
    pricing: 'Free - $65/month',
    startingPrice: 0,
    features: [
      'Email campaigns',
      'SMS marketing',
      'Live chat',
      'WhatsApp campaigns',
      'Marketing automation',
      'CRM features',
      'Facebook ads',
      'Landing pages'
    ]
  },
  drip: {
    name: 'Drip',
    tagline: 'E-commerce CRM for personalized marketing',
    rating: 4.4,
    bestFor: 'Online retailers',
    channels: ['Email', 'SMS', 'Pop-ups'],
    pricing: '$39 - $249/month',
    startingPrice: 39,
    features: [
      'E-commerce CRM',
      'Email automation',
      'SMS marketing',
      'Pop-up forms',
      'Customer segmentation',
      'Revenue tracking',
      'Split testing',
      'Workflows'
    ]
  }
}

interface AlternativesPageProps {
  params: {
    platform: string
  }
}

// Pain points for switching from each platform
const switchFromPainPoints: Record<string, string[]> = {
  mailchimp: [
    'Limited automation capabilities',
    'Pricing gets expensive quickly',
    'Basic segmentation',
    'Less advanced features compared to competitors',
    'Limited customer support'
  ],
  klaviyo: [
    'Can be expensive for small businesses',
    'Steep learning curve for advanced features',
    'Limited SMS capabilities compared to dedicated platforms',
    'Higher pricing tiers'
  ],
  hubspot: [
    'Very expensive at scale',
    'Complex setup and implementation',
    'Overkill for small businesses',
    'Steep learning curve',
    'Requires dedicated team to manage'
  ],
  activecampaign: [
    'Interface can be overwhelming',
    'Learning curve for automation builder',
    'Email editor could be improved',
    'Limited native SMS features'
  ],
  omnisend: [
    'Less advanced than Klaviyo',
    'Limited enterprise features',
    'Smaller template library',
    'Fewer integrations'
  ],
  privy: [
    'Limited to e-commerce',
    'Fewer features',
    'Limited integrations',
    'Not suitable for non-e-commerce businesses'
  ]
}

export async function generateMetadata({ params }: AlternativesPageProps): Promise<Metadata> {
  const platform = platformData[params.platform]
  if (!platform) return { title: 'Alternatives' }

  return {
    title: `Best ${platform.name} Alternatives in 2025 | MarketingCompare`,
    description: `Looking for ${platform.name} alternatives? Compare the top email marketing platforms. Find better pricing, features, and value for your business.`,
    openGraph: {
      title: `Best ${platform.name} Alternatives in 2025`,
      description: `Compare top alternatives to ${platform.name}. Find better features, pricing, and value for your email marketing needs.`,
      type: 'article',
    },
  }
}

export default function AlternativesPage({ params }: AlternativesPageProps {
  const targetPlatform = platformData[params.platform]

  if (!targetPlatform) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Platform not found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Return home
          </Link>
        </div>
      </div>
    )
  }

  // Get alternatives (exclude target platform, sort by rating)
  const alternatives = Object.entries(platformData)
    .filter(([id]) => id !== params.platform)
    .sort(([, a], [, b]) => b.rating - a.rating)
    .slice(0, 7) // Top 7 alternatives

  const painPoints = switchFromPainPoints[params.platform] || []

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
                Home
              </Link>
              <Link href="/compare" className="text-blue-600 font-medium">
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
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">Alternatives to {targetPlatform.name}</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Looking for something better?
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Best {targetPlatform.name} Alternatives in 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare top alternatives to {targetPlatform.name}. Find better features, pricing, and value for your email marketing needs.
          </p>
        </div>

        {/* Why Switch */}
        {painPoints.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Switch from {targetPlatform.name}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {painPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✗</span>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Alternatives List */}
        <div className="space-y-6 mb-12">
          {alternatives.map(([id, alt], index) => (
            <div key={id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">{alt.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">{alt.tagline}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-semibold">{alt.rating}</span>
                    </div>
                    <span className="text-blue-600 font-medium">{alt.pricing}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Best For</h4>
                  <p className="text-gray-600">{alt.bestFor}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Channels</h4>
                  <div className="flex flex-wrap gap-1">
                    {alt.channels.map((channel: string) => (
                      <span key={channel} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {alt.features.slice(0, 4).map((feature: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-500">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  href={`/platform/${id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Read Full Review
                </Link>
                <Link
                  href={`/compare/${params.platform}-vs-${id}`}
                  className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Compare Side-by-Side
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-900 min-w-[150px]">
                    Platform
                  </th>
                  {alternatives.slice(0, 5).map(([id, alt]) => (
                    <th key={id} className="px-4 py-3 text-left min-w-[180px]">
                      <div className="font-bold text-gray-900">{alt.name}</div>
                      <div className="text-sm text-gray-600">{alt.rating} ★</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 font-semibold text-gray-900">Best For</td>
                  {alternatives.slice(0, 5).map(([id, alt]) => (
                    <td key={id} className="px-4 py-3 text-sm">{alt.bestFor}</td>
                  ))}
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">Pricing</td>
                  {alternatives.slice(0, 5).map(([id, alt]) => (
                    <td key={id} className="px-4 py-3 text-sm text-blue-600 font-medium">{alt.pricing}</td>
                  ))}
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 font-semibold text-gray-900">Channels</td>
                  {alternatives.slice(0, 5).map(([id, alt]) => (
                    <td key={id} className="px-4 py-3 text-sm">
                      {alt.channels.slice(0, 2).join(', ')}
                      {alt.channels.length > 2 && '...'}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Migration Guide */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 mb-12 text-white">
          <h2 className="text-2xl font-bold mb-4">🔄 How to Switch from {targetPlatform.name}</h2>
          <ol className="space-y-3">
            <li className="flex gap-3">
              <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
              <span>Export your email lists and contacts from {targetPlatform.name}</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
              <span>Choose your new platform and set up your account</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
              <span>Import your contacts and re-create your email templates</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</span>
              <span>Set up your automation workflows (may need some reconfiguration)</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">5</span>
              <span>Test thoroughly before cancelling your {targetPlatform.name} subscription</span>
            </li>
          </ol>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Unsure?</h2>
          <p className="text-gray-600 mb-6">
            Use our AI chat assistant to get personalized recommendations based on your specific needs.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/chat"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Talk to AI Assistant
            </Link>
            <Link
              href="/compare"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Compare Platforms
            </Link>
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
