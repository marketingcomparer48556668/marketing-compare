import Link from 'next/link'
import type { Metadata } from 'next'
import { getPlatformPricing, formatPrice } from '@/lib/pricing'

// Platform data - this should eventually be centralized
const platformData: Record<string, any> = {
  klaviyo: {
    name: 'Klaviyo',
    tagline: 'Growth marketing platform built for modern brands',
    rating: 4.8,
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
    pricing: 'Free - $199/month',
    pros: [
      'Deep e-commerce integration',
      'Powerful segmentation and automation',
      'Excellent revenue tracking',
      'Large template library'
    ],
    cons: [
      'Can be expensive for small businesses',
      'Learning curve for advanced features',
      'Limited SMS compared to dedicated platforms'
    ],
    startingPrice: 0
  },
  omnisend: {
    name: 'Omnisend',
    tagline: 'E-commerce marketing automation made simple',
    rating: 4.7,
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
    pricing: 'Free - $149/month',
    pros: [
      'Affordable pricing',
      'Easy to use',
      'Great for Shopify stores',
      'Good multi-channel support'
    ],
    cons: [
      'Less advanced than Klaviyo',
      'Limited enterprise features',
      'Smaller template library'
    ],
    startingPrice: 0
  },
  mailchimp: {
    name: 'Mailchimp',
    tagline: 'All-in-one marketing platform',
    rating: 4.5,
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
    pricing: 'Free - $299/month',
    pros: [
      'Easy to use',
      'Great templates',
      'All-in-one platform',
      'Good for beginners'
    ],
    cons: [
      'Limited automation',
      'Expensive at scale',
      'Less advanced features'
    ],
    startingPrice: 0
  },
  activecampaign: {
    name: 'ActiveCampaign',
    tagline: 'Customer experience automation platform',
    rating: 4.7,
    bestFor: 'SMBs growing fast',
    channels: ['Email', 'SMS', 'Marketing', 'Sales'],
    features: [
      'Email marketing',
      'Marketing automation',
      'CRM integration',
      'Lead scoring',
      'Site tracking',
      'Split testing',
      'SMS marketing',
      'Contact management'
    ],
    integrations: '900+ platforms',
    pricing: '$29 - $149/month',
    pros: [
      'Powerful automation builder',
      'Built-in CRM',
      'Great for e-commerce',
      'Excellent customer support'
    ],
    cons: [
      'Can be complex',
      'Interface could be cleaner',
      'Learning curve'
    ],
    startingPrice: 29
  },
  hubspot: {
    name: 'HubSpot Marketing Hub',
    tagline: 'Inbound marketing, sales, and service software',
    rating: 4.6,
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
    pricing: 'Free - $3,200/month',
    pros: [
      'Complete ecosystem',
      'Free CRM',
      'Great for inbound marketing',
      'Excellent documentation'
    ],
    cons: [
      'Very expensive',
      'Complex setup',
      'Overkill for small businesses'
    ],
    startingPrice: 0
  },
  privy: {
    name: 'Privy',
    tagline: 'Marketing for e-commerce growth',
    rating: 4.6,
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
    pricing: 'Free - $99/month',
    pros: [
      'Perfect for Shopify',
      'Affordable',
      'Great pop-ups',
      'Easy to use'
    ],
    cons: [
      'Limited to e-commerce',
      'Fewer features',
      'Limited integrations'
    ],
    startingPrice: 0
  },
  braze: {
    name: 'Braze',
    tagline: 'Customer engagement platform for brands',
    rating: 4.8,
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
    pricing: 'Custom pricing',
    pros: [
      'Enterprise-grade features',
      'Advanced personalization',
      'Great analytics',
      'Multi-channel orchestration'
    ],
    cons: [
      'Very expensive',
      'Requires technical team',
      'Not for small businesses'
    ],
    startingPrice: null
  },
  customerio: {
    name: 'Customer.io',
    tagline: 'Automated messaging that humans love',
    rating: 4.7,
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
    pricing: '$49 - $999/month',
    pros: [
      'Behavioral targeting',
      'Great for SaaS',
      'Flexible workflows',
      'Good API'
    ],
    cons: [
      'Learning curve',
      'Interface could be improved',
      'Better for technical teams'
    ],
    startingPrice: 49
  },
  brevo: {
    name: 'Brevo (formerly Sendinblue)',
    tagline: 'Marketing platform for growing businesses',
    rating: 4.5,
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
    pricing: 'Free - $65/month',
    pros: [
      'Affordable',
      'Multi-channel',
      'Generous free plan',
      'Good value for money'
    ],
    cons: [
      'Less advanced features',
      'Limited automation',
      'Smaller template library'
    ],
    startingPrice: 0
  },
  drip: {
    name: 'Drip',
    tagline: 'E-commerce CRM for personalized marketing',
    rating: 4.4,
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
    pricing: '$39 - $249/month',
    pros: [
      'E-commerce focus',
      'Revenue tracking',
      'Good automation',
      'Affordable for small businesses'
    ],
    cons: [
      'Limited to e-commerce',
      'Fewer features',
      'Less established'
    ],
    startingPrice: 39
  }
}

interface ComparisonPageProps {
  params: {
    slug: string
  }
}

function getPlatformIdsFromSlug(slug: string): [string, string] | null {
  const parts = slug.split('-vs-')
  if (parts.length === 2) {
    return [parts[0], parts[1]]
  }
  return null
}

export async function generateMetadata({ params }: ComparisonPageProps): Promise<Metadata> {
  const ids = getPlatformIdsFromSlug(params.slug)
  if (!ids) return { title: 'Platform Comparison' }

  const [id1, id2] = ids
  const p1 = platformData[id1]
  const p2 = platformData[id2]

  if (!p1 || !p2) return { title: 'Platform Comparison' }

  return {
    title: `${p1.name} vs ${p2.name}: Which is Better? | MarketingCompare`,
    description: `Compare ${p1.name} and ${p2.name} side-by-side. See pricing, features, pros, cons, and find out which email marketing platform is right for your business.`,
    openGraph: {
      title: `${p1.name} vs ${p2.name}: Which is Better?`,
      description: `Side-by-side comparison of ${p1.name} and ${p2.name}. Pricing, features, pros, cons, and our recommendation.`,
      type: 'article',
    },
  }
}

export default function ComparisonPage({ params }: ComparisonPageProps) {
  const ids = getPlatformIdsFromSlug(params.slug)
  if (!ids) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Comparison not found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Return home
          </Link>
        </div>
      </div>
    )
  }

  const [id1, id2] = ids
  const p1 = platformData[id1]
  const p2 = platformData[id2]

  if (!p1 || !p2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Comparison not found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Return home
          </Link>
        </div>
      </div>
    )
  }

  // Determine verdict
  let verdict = ''
  let verdictReason = ''

  if (p1.rating > p2.rating + 0.2) {
    verdict = p1.name
    verdictReason = `${p1.name} has a significantly higher rating and better feature set for ${p1.bestFor}.`
  } else if (p2.rating > p1.rating + 0.2) {
    verdict = p2.name
    verdictReason = `${p2.name} has a significantly higher rating and better feature set for ${p2.bestFor}.`
  } else if (p1.startingPrice === null || p1.startingPrice > p2.startingPrice) {
    verdict = p2.name
    verdictReason = `${p2.name} offers better value for the price.`
  } else if (p2.startingPrice === null || p2.startingPrice > p1.startingPrice) {
    verdict = p1.name
    verdictReason = `${p1.name} offers better value for the price.`
  } else {
    verdict = 'It depends'
    verdictReason = `Both platforms are excellent. Choose ${p1.name} for ${p1.bestFor.toLowerCase()} or ${p2.name} for ${p2.bestFor.toLowerCase()}.`
  }

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
          <Link href="/compare" className="text-blue-600 hover:text-blue-800">
            Compare
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">{p1.name} vs {p2.name}</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {p1.name} vs {p2.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Which email marketing platform is better for your business?
          </p>
        </div>

        {/* Quick Comparison */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">{p1.name}</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-yellow-500">★</span>
                <span className="font-semibold">{p1.rating}</span>
              </div>
              <div className="text-gray-600">{p1.pricing}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">{p2.name}</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-yellow-500">★</span>
                <span className="font-semibold">{p2.rating}</span>
              </div>
              <div className="text-gray-600">{p2.pricing}</div>
            </div>
          </div>
        </div>

        {/* Verdict */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 mb-12 text-white">
          <h2 className="text-2xl font-bold mb-4">🏆 Our Verdict</h2>
          <div className="text-xl font-bold mb-2">{verdict}</div>
          <p className="opacity-90">{verdictReason}</p>
        </div>

        {/* Detailed Comparison */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left font-bold text-gray-900">Feature</th>
                <th className="px-6 py-4 text-left font-bold text-blue-600">{p1.name}</th>
                <th className="px-6 py-4 text-left font-bold text-purple-600">{p2.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 font-semibold text-gray-900">Rating</td>
                <td className="px-6 py-4">{p1.rating} ★</td>
                <td className="px-6 py-4">{p2.rating} ★</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="px-6 py-4 font-semibold text-gray-900">Best For</td>
                <td className="px-6 py-4">{p1.bestFor}</td>
                <td className="px-6 py-4">{p2.bestFor}</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 font-semibold text-gray-900">Pricing</td>
                <td className="px-6 py-4">{p1.pricing}</td>
                <td className="px-6 py-4">{p2.pricing}</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="px-6 py-4 font-semibold text-gray-900">Channels</td>
                <td className="px-6 py-4">
                  {p1.channels.map((c: string) => (
                    <span key={c} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-1">
                      {c}
                    </span>
                  ))}
                </td>
                <td className="px-6 py-4">
                  {p2.channels.map((c: string) => (
                    <span key={c} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium mr-1">
                      {c}
                    </span>
                  ))}
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 font-semibold text-gray-900">Integrations</td>
                <td className="px-6 py-4">{p1.integrations}</td>
                <td className="px-6 py-4">{p2.integrations}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pros & Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-4">{p1.name} - Pros & Cons</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-green-600 mb-2">✓ Pros</h4>
                <ul className="space-y-1">
                  {p1.pros.map((pro: string, i: number) => (
                    <li key={i} className="text-sm text-gray-700">{pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-600 mb-2">✗ Cons</h4>
                <ul className="space-y-1">
                  {p1.cons.map((con: string, i: number) => (
                    <li key={i} className="text-sm text-gray-700">{con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-purple-600 mb-4">{p2.name} - Pros & Cons</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-green-600 mb-2">✓ Pros</h4>
                <ul className="space-y-1">
                  {p2.pros.map((pro: string, i: number) => (
                    <li key={i} className="text-sm text-gray-700">{pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-600 mb-2">✗ Cons</h4>
                <ul className="space-y-1">
                  {p2.cons.map((con: string, i: number) => (
                    <li key={i} className="text-sm text-gray-700">{con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* When to Choose */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">When to Choose Each Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Choose {p1.name} if:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">You're a {p1.bestFor.toLowerCase()}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">You need advanced {p1.channels[0].toLowerCase()} features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">You want deep integration with {p1.integrations}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">You need {p1.features[0].toLowerCase()}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-600 mb-4">Choose {p2.name} if:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span className="text-gray-700">You're a {p2.bestFor.toLowerCase()}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span className="text-gray-700">You need advanced {p2.channels[0].toLowerCase()} features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span className="text-gray-700">You want deep integration with {p2.integrations}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span className="text-gray-700">You need {p2.features[0].toLowerCase()}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Decide?</h2>
          <p className="text-gray-600 mb-6">
            Try both platforms with their free trials and see which works best for your workflow.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href={`/platform/${id1}`}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn More About {p1.name}
            </Link>
            <Link
              href={`/platform/${id2}`}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Learn More About {p2.name}
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
