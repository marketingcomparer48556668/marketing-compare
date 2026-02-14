// Pricing data structure for marketing platforms
// This file stores historical pricing data for freshness tracking

export interface PricingTier {
  name: string
  price: number | null
  period: 'month' | 'year'
  currency: 'USD' | 'EUR'
  contacts?: number
}

export interface PlatformPricing {
  platformId: string
  platformName: string
  lastUpdated: Date
  lastScraped: Date
  tiers: PricingTier[]
  promotionalOffer?: {
    title: string
    description: string
    validUntil?: Date
    discount?: string
  }
}

export interface PricingHistory {
  platformId: string
  history: Array<{
    date: Date
    pricing: PricingTier[]
    promotionalOffer?: PlatformPricing['promotionalOffer']
  }>
}

// Simulated pricing data (in production, this would come from API/database)
export const platformPricingData: Record<string, PlatformPricing> = {
  klaviyo: {
    platformId: 'klaviyo',
    platformName: 'Klaviyo',
    lastUpdated: new Date('2026-02-13T12:00:00Z'),
    lastScraped: new Date('2026-02-13T12:00:00Z'),
    tiers: [
      { name: 'Free', price: 0, period: 'month', currency: 'USD', contacts: 250 },
      { name: 'Growth', price: 45, period: 'month', currency: 'USD', contacts: 10000 },
      { name: 'Enterprise', price: null, period: 'month', currency: 'USD' },
    ],
    promotionalOffer: {
      title: '20% off for 3 months',
      description: 'Get 20% off your first 3 months on the Growth plan',
      validUntil: new Date('2026-03-15T23:59:59Z'),
      discount: '20% off',
    },
  },
  omnisend: {
    platformId: 'omnisend',
    platformName: 'Omnisend',
    lastUpdated: new Date('2026-02-13T12:00:00Z'),
    lastScraped: new Date('2026-02-13T12:00:00Z'),
    tiers: [
      { name: 'Free', price: 0, period: 'month', currency: 'USD', contacts: 250 },
      { name: 'Growth', price: 39, period: 'month', currency: 'USD', contacts: 10000 },
      { name: 'Pro', price: 149, period: 'month', currency: 'USD', contacts: 50000 },
    ],
  },
  privy: {
    platformId: 'privy',
    platformName: 'Privy',
    lastUpdated: new Date('2026-02-13T12:00:00Z'),
    lastScraped: new Date('2026-02-13T12:00:00Z'),
    tiers: [
      { name: 'Free', price: 0, period: 'month', currency: 'USD', contacts: 100 },
      { name: 'Growth', price: 45, period: 'month', currency: 'USD', contacts: 500 },
      { name: 'Plus', price: 99, period: 'month', currency: 'USD', contacts: 2000 },
    ],
  },
  mailchimp: {
    platformId: 'mailchimp',
    platformName: 'Mailchimp',
    lastUpdated: new Date('2026-02-13T12:00:00Z'),
    lastScraped: new Date('2026-02-13T12:00:00Z'),
    tiers: [
      { name: 'Free', price: 0, period: 'month', currency: 'USD', contacts: 500 },
      { name: 'Essentials', price: 13, period: 'month', currency: 'USD', contacts: 500 },
      { name: 'Standard', price: 20, period: 'month', currency: 'USD', contacts: 2500 },
    ],
  },
  activecampaign: {
    platformId: 'activecampaign',
    platformName: 'ActiveCampaign',
    lastUpdated: new Date('2026-02-13T12:00:00Z'),
    lastScraped: new Date('2026-02-13T12:00:00Z'),
    tiers: [
      { name: 'Lite', price: 29, period: 'month', currency: 'USD', contacts: 1000 },
      { name: 'Plus', price: 49, period: 'month', currency: 'USD', contacts: 3000 },
      { name: 'Professional', price: 149, period: 'month', currency: 'USD', contacts: 10000 },
    ],
  },
  hubspot: {
    platformId: 'hubspot',
    platformName: 'HubSpot Marketing Hub',
    lastUpdated: new Date('2026-02-13T12:00:00Z'),
    lastScraped: new Date('2026-02-13T12:00:00Z'),
    tiers: [
      { name: 'Free', price: 0, period: 'month', currency: 'USD', contacts: 1000 },
      { name: 'Starter', price: 20, period: 'month', currency: 'USD', contacts: 2000 },
      { name: 'Professional', price: 800, period: 'month', currency: 'USD', contacts: 10000 },
      { name: 'Enterprise', price: 3600, period: 'month', currency: 'USD', contacts: null },
    ],
  },
  braze: {
    platformId: 'braze',
    platformName: 'Braze',
    lastUpdated: new Date('2026-02-13T12:00:00Z'),
    lastScraped: new Date('2026-02-13T12:00:00Z'),
    tiers: [
      { name: 'Essentials', price: null, period: 'month', currency: 'USD' },
      { name: 'Growth', price: null, period: 'month', currency: 'USD' },
      { name: 'Enterprise', price: null, period: 'month', currency: 'USD' },
    ],
  },
  customerio: {
    platformId: 'customerio',
    platformName: 'Customer.io',
    lastUpdated: new Date('2026-02-13T12:00:00Z'),
    lastScraped: new Date('2026-02-13T12:00:00Z'),
    tiers: [
      { name: 'Foundation', price: 49, period: 'month', currency: 'USD', contacts: 5000 },
      { name: 'Premium', price: 149, period: 'month', currency: 'USD', contacts: 50000 },
      { name: 'Enterprise', price: 999, period: 'month', currency: 'USD', contacts: null },
    ],
  },
  brevo: {
    platformId: 'brevo',
    platformName: 'Brevo (Sendinblue)',
    lastUpdated: new Date('2026-02-13T12:00:00Z'),
    lastScraped: new Date('2026-02-13T12:00:00Z'),
    tiers: [
      { name: 'Free', price: 0, period: 'month', currency: 'EUR', contacts: 300 },
      { name: 'Starter', price: 25, period: 'month', currency: 'EUR', contacts: 5000 },
      { name: 'Business', price: 65, period: 'month', currency: 'EUR', contacts: 20000 },
    ],
  },
  drip: {
    platformId: 'drip',
    platformName: 'Drip',
    lastUpdated: new Date('2026-02-13T12:00:00Z'),
    lastScraped: new Date('2026-02-13T12:00:00Z'),
    tiers: [
      { name: 'Basic', price: 39, period: 'month', currency: 'USD', contacts: 2500 },
      { name: 'Pro', price: 79, period: 'month', currency: 'USD', contacts: 5000 },
      { name: 'Enterprise', price: 249, period: 'month', currency: 'USD', contacts: 10000 },
    ],
  },
}

// Helper function to get freshness indicator
export function getFreshnessIndicator(lastUpdated: Date): {
  hoursAgo: number
  label: string
  color: 'green' | 'yellow' | 'red'
} {
  const now = new Date()
  const diffMs = now.getTime() - lastUpdated.getTime()
  const hoursAgo = Math.floor(diffMs / (1000 * 60 * 60))

  if (hoursAgo < 12) {
    return { hoursAgo, label: 'Fresh', color: 'green' }
  } else if (hoursAgo < 24) {
    return { hoursAgo, label: 'Recent', color: 'yellow' }
  } else if (hoursAgo < 72) {
    return { hoursAgo, label: 'Updated', color: 'yellow' }
  } else {
    return { hoursAgo, label: 'Stale', color: 'red' }
  }
}

// Helper function to format freshness text
export function formatFreshnessText(hoursAgo: number): string {
  if (hoursAgo < 1) return 'Updated less than an hour ago'
  if (hoursAgo === 1) return 'Updated 1 hour ago'
  if (hoursAgo < 24) return `Updated ${hoursAgo} hours ago`
  const days = Math.floor(hoursAgo / 24)
  if (days === 1) return 'Updated 1 day ago'
  return `Updated ${days} days ago`
}
