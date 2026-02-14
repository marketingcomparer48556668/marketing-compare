import Link from 'next/link'

export const metadata = {
  title: 'Real-Time Pricing | MarketingCompare',
  description: 'Compare pricing for marketing automation platforms with always-fresh data.',
}

interface PricingTier {
  name: string
  price: number | null
  period: string
  features: string[]
  contacts?: number
}

interface PlatformPricing {
  platformId: string
  platformName: string
  tiers: PricingTier[]
  lastUpdated: string
  freshness?: {
    hoursAgo: number
    label: string
    color: string
  }
  promotionalOffer?: {
    title: string
    description?: string
    validUntil?: string
  }
}

export default async function PricingPage() {
  // Fetch pricing data from API
  let platforms: PlatformPricing[] = []
  let fetchError: string | null = null

  try {
    const response = await fetch(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api/pricing`, {
      next: { revalidate: 60 },
      cache: 'no-store',
    })

    const result = await response.json()

    if (result.success && result.data) {
      platforms = result.data
    } else {
      fetchError = result.error || 'Failed to fetch pricing data'
    }
  } catch (error) {
    fetchError = error instanceof Error ? error.message : 'Unknown error'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">MarketingCompare</Link>
            <nav className="flex gap-6">
              <Link href="/compare" className="text-gray-600">Compare</Link>
              <Link href="/editors-pick" className="text-amber-600 font-medium">Editor's Pick</Link>
              <Link href="/pricing" className="text-blue-600 font-medium">Pricing</Link>
              <Link href="/deals" className="text-gray-600">Deals</Link>
              <Link href="/chat" className="text-gray-600">AI Chat</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Real-Time Pricing Comparison</h1>
        <p className="text-xl text-gray-600 mb-8">
          Compare pricing across all 10 marketing automation platforms with always-fresh data.
        </p>

        {fetchError ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
            <div className="text-red-800 text-xl font-bold mb-2">⚠️ Failed to fetch pricing data</div>
            <p className="text-red-700">{fetchError}</p>
            <p className="text-red-600 text-sm mt-4">Please try again later or contact support if this persists.</p>
          </div>
        ) : platforms.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            <p className="text-xl text-gray-600 mt-4">Loading pricing data...</p>
          </div>
        ) : (
          <>
            {/* Freshness Legend */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Freshness Indicator</h2>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                  <span className="text-sm text-gray-700">
                    <span className="font-bold text-green-600">Fresh</span> - Updated within 12 hours
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
                  <span className="text-sm text-gray-700">
                    <span className="font-bold text-yellow-600">Recent</span> - Updated 12-24 hours ago
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                  <span className="text-sm text-gray-700">
                    <span className="font-bold text-red-600">Stale</span> - Updated 3+ days ago
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Pricing data is automatically updated hourly. Freshness indicators show how recent the data is.
              </p>
            </div>

            {/* Pricing Comparison Table */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-gray-900 sticky left-0">Platform</th>
                      <th className="px-4 py-3 text-left font-bold text-gray-900">Pricing</th>
                      <th className="px-4 py-3 text-left font-bold text-gray-900">Features</th>
                      <th className="px-4 py-3 text-left font-bold text-gray-900">Updated</th>
                    </tr>
                  </thead>
                  <tbody>
                    {platforms.map((platform) => {
                      const freshness = platform.freshness ? platform.freshness : { hoursAgo: 0, label: 'Unknown', color: 'gray' }

                      return (
                        <tr key={platform.platformId} className="border-t border-gray-200">
                          <td className="px-4 py-4">
                            <Link
                              href={`/platform/${platform.platformId}`}
                              className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                            >
                              {platform.platformName}
                            </Link>
                          </td>
                          <td className="px-4 py-4">
                            <div className="space-y-2">
                              {platform.tiers.map((tier, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  {tier.price !== null ? (
                                    <span className="font-medium text-gray-900">
                                      {tier.price > 0 && '$'}
                                      {tier.price === 0 && 'Free'}
                                      {tier.price}
                                      <span className="text-gray-500">/{tier.period}</span>
                                    </span>
                                  ) : (
                                    <span className="text-gray-600 italic">Custom</span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <ul className="space-y-1">
                              {platform.tiers.map((tier) => (
                                <li key={tier.name} className="text-gray-600 text-xs">
                                  <strong>{tier.name}:</strong> {tier.contacts && ` ${tier.contacts} contacts`}
                                </li>
                              ))}
                            </ul>
                          </td>
                          <td className="px-4 py-4">
                            <div className="space-y-1">
                              {platform.tiers.map((tier, index) => (
                                <div key={index} className="space-y-1">
                                  {tier.features && tier.features.slice(0, 3).map((feature, idx) => (
                                    <div key={idx} className="text-gray-600">
                                      • {feature}
                                    </div>
                                  ))}
                                  {tier.features && tier.features.length > 3 && (
                                    <div className="text-gray-500 italic">
                                      +{tier.features.length - 3} more
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <span
                                className={`w-3 h-3 rounded-full ${
                                  freshness.color === 'green' ? 'bg-green-500' :
                                  freshness.color === 'yellow' ? 'bg-yellow-500' :
                                  freshness.color === 'red' ? 'bg-red-500' :
                                  'bg-gray-500'
                                }`}
                              />
                              <span className={`font-medium ${
                                freshness.color === 'green' ? 'text-green-600' :
                                freshness.color === 'yellow' ? 'text-yellow-600' :
                                freshness.color === 'red' ? 'text-red-600' :
                                'text-gray-600'
                              }`}>
                                {freshness.label}
                              </span>
                              <div className="text-xs text-gray-500">
                                ({freshness.hoursAgo}h ago)
                              </div>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Promotional Offers Section */}
            {platforms.filter(p => p.promotionalOffer).length > 0 && (
              <div className="mt-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">🎉 Active Promotional Offers</h2>
                <p className="mb-4">Don't miss out on these limited-time deals from our tracked platforms.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {platforms.filter(p => p.promotionalOffer).map((platform) => (
                    <Link
                      key={platform.platformId}
                      href={`/platform/${platform.platformId}`}
                      className="bg-white text-gray-900 p-4 rounded-lg hover:shadow-lg transition-shadow"
                    >
                      <h3 className="font-bold mb-2">{platform.platformName}</h3>
                      {platform.promotionalOffer && (
                        <>
                          <p className="text-orange-800 font-bold mb-2">
                            {platform.promotionalOffer.title}
                          </p>
                          {platform.promotionalOffer.description && (
                            <p className="text-sm mb-2">{platform.promotionalOffer.description}</p>
                          )}
                          {platform.promotionalOffer.validUntil && (
                            <p className="text-xs text-orange-700">
                              Valid until: {platform.promotionalOffer.validUntil}
                            </p>
                          )}
                        </>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Last Updated Info */}
            <div className="mt-8 text-center text-gray-500 text-sm">
              <p>💡 Pricing data is automatically updated hourly to ensure accuracy.</p>
              <p>Last full scrape: {new Date().toLocaleString()}</p>
            </div>
          </>
        )}

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2024 MarketingCompare. Compare with confidence.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
