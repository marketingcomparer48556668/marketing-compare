import { NextResponse } from 'next/server'
import { scrapeAllPlatforms } from '@/lib/pricing-scraper'

export async function GET() {
  try {
    const allPricing = await scrapeAllPlatforms()

    // Convert Map to Array for JSON response
    const pricingArray = Array.from(allPricing.values())

    return NextResponse.json({
      success: true,
      data: pricingArray,
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch pricing data',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
