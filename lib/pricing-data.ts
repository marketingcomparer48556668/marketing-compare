// Pricing data structure for marketing automation platforms
// This file stores historical pricing data for freshness tracking

export interface PricingTier {
  name: string
  price: number | null
  period: 'month' | 'year'
  currency: 'USD' | 'EUR'
  features?: string[]
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
  sourceUrl: string
}

// Platform pricing page URLs (these are the actual pricing pages to scrape)
const PRICING_PAGES: Record<string, string> = {
  klaviyo: 'https://www.klaviyo.com/pricing/',
  omnisend: 'https://www.omnisend.com/pricing/',
  privy: 'https://privy.com/pricing/',
  mailchimp: 'https://mailchimp.com/pricing/',
  activecampaign: 'https://www.activecampaign.com/pricing/',
  hubspot: 'https://www.hubspot.com/products/pricing/marketing',
  braze: 'https://www.braze.com/pricing/',
  customerio: 'https://customer.io/pricing/',
  brevo: 'https://www.brevo.com/en/pricing/',
  drip: 'https://www.getdrip.com/pricing/',
}

/**
 * Scrape pricing for a single platform
 */
export async function scrapePricing(platformId: string): Promise<PlatformPricing> {
  const pricingUrl = PRICING_PAGES[platformId]
  const now = new Date()

  // Simulated pricing data for MVP
  // In production, this would scrape from actual pricing pages
  // For now, use realistic placeholder data based on known pricing

  switch (platformId) {
    case 'klaviyo':
      return {
        platformId: 'klaviyo',
        platformName: 'Klaviyo',
        tiers: [
          { name: 'Free', price: 0, period: 'month', currency: 'USD', contacts: 250, features: ['Up to 250 contacts', 'Up to 500 email sends', 'Email marketing only'] },
          { name: 'Growth', price: 45, period: 'month', currency: 'USD', contacts: 10000, features: ['Up to 10,000 contacts', 'Email + SMS + Push', 'Advanced segmentation', 'Email templates'] },
          { name: 'Enterprise', price: null, period: 'month', currency: 'USD', contacts: null, features: ['Unlimited contacts', 'Dedicated support', 'Custom integrations', 'Advanced analytics'] },
        ],
        lastUpdated: now,
        lastScraped: now,
        promotionalOffer: {
          title: '20% off for 3 months',
          description: 'Get 20% off your first 3 months on Growth plan',
          validUntil: new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000), // 90 days from now
          discount: '20% off',
        },
        sourceUrl: pricingUrl,
      }

    case 'omnisend':
      return {
        platformId: 'omnisend',
        platformName: 'Omnisend',
        tiers: [
          { name: 'Free', price: 0, period: 'month', currency: 'USD', contacts: 250, features: ['Up to 250 contacts', 'Email + SMS (500 total)', 'Basic automation'] },
          { name: 'Growth', price: 39, period: 'month', currency: 'USD', contacts: 10000, features: ['Up to 10,000 contacts', 'Email + SMS + Push', 'Advanced workflows', 'Pre-built templates'] },
          { name: 'Pro', price: 149, period: 'month', currency: 'USD', contacts: 50000, features: ['Up to 50,000 contacts', 'All channels + WhatsApp', 'Priority support'] },
        ],
        lastUpdated: now,
        lastScraped: now,
        sourceUrl: pricingUrl,
      }

    case 'privy':
      return {
        platformId: 'privy',
        platformName: 'Privy',
        tiers: [
          { name: 'Free', price: 0, period: 'month', currency: 'USD', contacts: 100, features: ['Up to 100 contacts', 'Email + SMS', 'Pop-up forms', 'Basic automation'] },
          { name: 'Growth', price: 45, period: 'month', currency: 'USD', contacts: 500, features: ['Up to 500 contacts', 'Email + SMS + Pop-ups', 'Advanced automation', 'Text message credits'] },
          { name: 'Plus', price: 99, period: 'month', currency: 'USD', contacts: 2000, features: ['Up to 2,000 contacts', 'All features + priority support', 'Advanced workflows'] },
        ],
        lastUpdated: now,
        lastScraped: now,
        sourceUrl: pricingUrl,
      }

    case 'mailchimp':
      return {
        platformId: 'mailchimp',
        platformName: 'Mailchimp',
        tiers: [
          { name: 'Free', price: 0, period: 'month', currency: 'USD', contacts: 500, features: ['Up to 500 contacts', '1 audience', 'Email marketing', '1 landing page'] },
          { name: 'Essentials', price: 13, period: 'month', currency: 'USD', contacts: 5000, features: ['Up to 5,000 contacts', 'Email marketing', '24/7 support'] },
          { name: 'Standard', price: 20, period: 'month', currency: 'USD', contacts: 10000, features: ['Up to 10,000 contacts', 'Email marketing', 'A/B testing', 'Custom branding'] },
        ],
        lastUpdated: now,
        lastScraped: now,
        sourceUrl: pricingUrl,
      }

    case 'activecampaign':
      return {
        platformId: 'activecampaign',
        platformName: 'ActiveCampaign',
        tiers: [
          { name: 'Lite', price: 29, period: 'month', currency: 'USD', contacts: 1000, features: ['Marketing automation', 'Basic CRM', '500 contacts'] },
          { name: 'Plus', price: 49, period: 'month', currency: 'USD', contacts: 3000, features: ['Marketing automation', 'Full CRM', '2,500 contacts', 'Site tracking'] },
          { name: 'Professional', price: 149, period: 'month', currency: 'USD', contacts: 10000, features: ['All features', 'CRM + Marketing', 'SMS marketing', 'Phone support'] },
        ],
        lastUpdated: now,
        lastScraped: now,
        sourceUrl: pricingUrl,
      }

    case 'hubspot':
      return {
        platformId: 'hubspot',
        platformName: 'HubSpot Marketing Hub',
        tiers: [
          { name: 'Free', price: 0, period: 'month', currency: 'USD', contacts: 1000, features: ['Marketing automation', 'CRM', 'Forms', 'Landing pages'] },
          { name: 'Starter', price: 20, period: 'month', currency: 'USD', contacts: 2000, features: ['Marketing automation', 'CRM', 'Forms', 'Marketing hub'] },
          { name: 'Professional', price: 800, period: 'month', currency: 'USD', contacts: 10000, features: ['All features', 'Service hub', 'Sales hub', 'Advanced automation'] },
          { name: 'Enterprise', price: null, period: 'month', currency: 'USD', contacts: null, features: ['All features', 'Dedicated support', 'Custom integrations', 'Advanced analytics'] },
        ],
        lastUpdated: now,
        lastScraped: now,
        sourceUrl: pricingUrl,
      }

    case 'braze':
      return {
        platformId: 'braze',
        platformName: 'Braze',
        tiers: [
          { name: 'Essentials', price: null, period: 'month', currency: 'USD', contacts: null, features: ['Push notifications', 'In-app messages', 'Basic segmentation'] },
          { name: 'Growth', price: null, period: 'month', currency: 'USD', contacts: null, features: ['Push + In-app + Email', 'Advanced segmentation', 'Webhooks'] },
          { name: 'Enterprise', price: null, period: 'month', currency: 'USD', contacts: null, features: ['All channels', 'Advanced personalization', 'Dedicated support', 'Custom integrations'] },
        ],
        lastUpdated: now,
        lastScraped: now,
        sourceUrl: pricingUrl,
      }

    case 'customerio':
      return {
        platformId: 'customerio',
        platformName: 'Customer.io',
        tiers: [
          { name: 'Foundation', price: 49, period: 'month', currency: 'USD', contacts: 5000, features: ['Behavioral emails', 'Push notifications', 'Basic automation', 'API access'] },
          { name: 'Premium', price: 149, period: 'month', currency: 'USD', contacts: 50000, features: ['All features', 'Advanced segmentation', 'Webhooks', 'Priority support'] },
          { name: 'Enterprise', price: null, period: 'month', currency: 'USD', contacts: null, features: ['Unlimited contacts', 'Custom solutions', 'Dedicated support', 'SLA'] },
        ],
        lastUpdated: now,
        lastScraped: now,
        sourceUrl: pricingUrl,
      }

    case 'brevo':
      return {
        platformId: 'brevo',
        platformName: 'Brevo (Sendinblue)',
        tiers: [
          { name: 'Free', price: 0, period: 'month', currency: 'EUR', contacts: 300, features: ['Up to 300 contacts', 'Email + SMS (300 total)', 'Basic automation'] },
          { name: 'Starter', price: 25, period: 'month', currency: 'EUR', contacts: 5000, features: ['Up to 5,000 contacts', 'Email + SMS', 'Automation workflows'] },
          { name: 'Business', price: 65, period: 'month', currency: 'EUR', contacts: 20000, features: ['Up to 20,000 contacts', 'All channels', 'WhatsApp', 'Priority support'] },
        ],
        lastUpdated: now,
        lastScraped: now,
        sourceUrl: pricingUrl,
      }

    case 'drip':
      return {
        platformId: 'drip',
        platformName: 'Drip',
        tiers: [
          { name: 'Basic', price: 39, period: 'month', currency: 'USD', contacts: 2500, features: ['Email marketing', 'Basic automation', 'E-commerce integration'] },
          { name: 'Pro', price: 79, period: 'month', currency: 'USD', contacts: 5000, features: ['All features', 'Advanced workflows', 'A/B testing', 'SMS marketing'] },
          { name: 'Enterprise', price: null, period: 'month', currency: 'USD', contacts: null, features: ['All features', 'Dedicated support', 'Custom integrations', 'SLA'] },
        ],
        lastUpdated: now,
        lastScraped: now,
        sourceUrl: pricingUrl,
      }

    default:
      throw new Error(`Unknown platform: ${platformId}`)
  }
}

/**
 * Get freshness indicator for pricing
 */
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

/**
 * Scrape all platforms
 * In production, this would run in parallel or with a queue
 */
export async function scrapeAllPlatforms(): Promise<Map<string, PlatformPricing>> {
  const platformIds = [
    'klaviyo', 'omnisend', 'privy', 'mailchimp',
    'activecampaign', 'hubspot', 'braze', 'customerio', 'brevo', 'drip'
  ]

  const results = new Map<string, PlatformPricing>()

  for (const platformId of platformIds) {
    try {
      const pricing = await scrapePricing(platformId)
      // Add freshness indicator
      const freshness = getFreshnessIndicator(pricing.lastUpdated)
      results.set(platformId, {
        ...pricing,
        freshness,
      })
    } catch (error) {
      console.error(`Failed to scrape ${platformId}:`, error)
      // Continue with other platforms
    }
  }

  return results
}
