interface PricingFreshnessProps {
  lastUpdated: Date
  promotionalOffer?: {
    title: string
    description?: string
    validUntil?: Date
  }
}

export default function PricingFreshness({ lastUpdated, promotionalOffer }: PricingFreshnessProps) {
  const now = new Date()
  const diffMs = now.getTime() - lastUpdated.getTime()
  const hoursAgo = Math.floor(diffMs / (1000 * 60 * 60))
  const daysAgo = Math.floor(hoursAgo / 24)

  let freshnessColor = 'green'
  let freshnessLabel = 'Fresh'

  if (hoursAgo < 12) {
    freshnessColor = 'green'
    freshnessLabel = 'Fresh'
  } else if (hoursAgo < 24) {
    freshnessColor = 'yellow'
    freshnessLabel = 'Recent'
  } else if (hoursAgo < 72) {
    freshnessColor = 'yellow'
    freshnessLabel = 'Updated'
  } else {
    freshnessColor = 'red'
    freshnessLabel = 'Stale'
  }

  const freshnessText = daysAgo === 0
    ? 'Updated today'
    : daysAgo === 1
    ? 'Updated 1 day ago'
    : `Updated ${daysAgo} days ago`

  return (
    <div className="space-y-2">
      {/* Freshness Indicator */}
      <div className="flex items-center gap-2">
        <span className={`text-sm font-medium ${
          freshnessColor === 'green' ? 'text-green-600' :
          freshnessColor === 'yellow' ? 'text-yellow-600' :
          'text-red-600'
        }`}>
          {freshnessText}
        </span>
        <span className="text-sm text-gray-500">
          ({daysAgo === 0 ? '< 1 hour' : `${daysAgo} days`})
        </span>
        {freshnessColor === 'green' && (
          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
            ✓ Data is fresh
          </span>
        )}
      </div>

      {/* Promotional Offer */}
      {promotionalOffer && (
        <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-lg p-3">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13-9 4-9-9-9-9-9 9-9-9-4-9h-4c0 0 2 2 0 2v10c0 5.523 2 2 2H9c-1.38 0-3 2-3V8c0-1.38 3-2 2h4c0 5.523 2 2 2 2z" />
            </svg>
            <span className="font-bold">Special Offer: {promotionalOffer.title}</span>
          </div>
          {promotionalOffer.description && (
            <p className="text-sm mt-1 opacity-90">{promotionalOffer.description}</p>
          )}
          {promotionalOffer.validUntil && (
            <p className="text-xs mt-1 opacity-75">
              Valid until: {promotionalOffer.validUntil.toLocaleDateString()}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
