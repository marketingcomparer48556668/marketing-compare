// Helper functions to load and process pricing data
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'public/pricing.json');

export interface PricingPlan {
  name: string;
  price: number | null;
  currency: string;
  period: string;
  features: string[];
}

export interface PlatformPricing {
  name: string;
  url: string;
  plans: PricingPlan[];
  lastScraped: string;
}

export interface PricingData {
  lastUpdated: string;
  platforms: {
    [key: string]: PlatformPricing;
  };
}

let pricingCache: PricingData | null = null;
let cacheTimestamp: number = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

export function loadPricingData(): PricingData {
  const now = Date.now();

  // Return cached data if still fresh
  if (pricingCache && (now - cacheTimestamp) < CACHE_TTL) {
    return pricingCache;
  }

  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    pricingCache = JSON.parse(data);
    cacheTimestamp = now;
    return pricingCache;
  } catch (error) {
    console.error('Error loading pricing data:', error);
    return {
      lastUpdated: new Date().toISOString(),
      platforms: {},
    };
  }
}

export function getPlatformPricing(platformId: string): PlatformPricing | null {
  const data = loadPricingData();
  return data.platforms[platformId] || null;
}

export function getPlatformPlans(platformId: string): PricingPlan[] {
  const platform = getPlatformPricing(platformId);
  return platform?.plans || [];
}

export function formatPrice(price: number | null, currency: string = 'USD'): string {
  if (price === null) return 'Custom';
  if (price === 0) return 'Free';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(price);
}

export function formatPriceRange(minPrice: number | null, maxPrice: number | null, currency: string = 'USD'): string {
  if (minPrice === null || maxPrice === null) return 'Custom pricing';
  if (minPrice === 0 && maxPrice === 0) return 'Free';
  return `${formatPrice(minPrice, currency)} - ${formatPrice(maxPrice, currency)}`;
}
