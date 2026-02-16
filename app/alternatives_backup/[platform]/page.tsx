import Link from 'next/link'
import type { Metadata } from 'next'

// Platform data
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

interface AlternativesPageProps {
  params: {
    platform: string
  }
}

export async function generateMetadata({ params }: AlternativesPageProps): Promise<Metadata> {
  const platform = platformData[params.platform]
  if (!platform) return { title: 'Alternatives' }

  return {
    title: `Best ${platform.name} Alternatives in 2025 | MarketingCompare`,
    description: `Compare top alternatives to ${platform.name}. Find better features, pricing, and value for your email marketing needs.`,
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
    .slice(0, 7)

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
              <Link href="/guides" className="text-blue-600 font-medium">
                Guides
              </Link>
              <Link href="/compare" className="text-gray-600 hover:text-blue-600">
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Best {targetPlatform.name} Alternatives in 2025</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Looking for {targetPlatform.name} alternatives? Compare top platforms and find the perfect match for your business.
          </p>
        </div>

        {/* Why Switch */}
        {painPoints.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Switch from {targetPlatform.name}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {painPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-red-500 text-xl">✗</span>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Top Alternatives */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top {alternatives.length} Alternatives by Rating</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alternatives.map(([id, alt]) => (
              <Link
                key={id}
                href={`/platform/${id}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 block"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{alt.rating} ★</div>
                    <div className="text-sm text-gray-500">{alt.pricing}</div>
                  </div>
                  <Link
                    href={`/compare/${params.platform}-vs-${id}`}
                    className="text-blue-600 text-sm hover:text-blue-800 font-medium"
                  >
                    Compare
                  </Link>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{alt.name}</h3>
                  <p className="text-gray-600 mb-2">{alt.tagline}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Best for: {alt.bestFor}</span>
                  </div>
                </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Guides CTA */}
        <div className="bg-gray-50 rounded-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need More Help?</h2>
          <p className="opacity-90 mb-6">
            Explore our comprehensive guides for choosing the right email marketing platform, optimizing your campaigns, and growing your business.
          </p>
          <Link href="/guides" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
            Browse All Guides
          </Link>
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
