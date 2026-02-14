import { NextResponse } from 'next/server'
import { scrapePricing, getFreshnessIndicator } from '@/lib/pricing-scraper'

export const revalidate = 3600 // Revalidate every hour

interface RouteContext {
  params: {
    platform?: string
  }
}

export async function GET(
  request: Request,
  context: RouteContext
) {
  const platform = context.params?.platform

  if (!platform) {
    return NextResponse.json(
      { success: false, error: 'Platform ID required' },
      { status: 400 }
    )
  }

  try {
    const pricing = await scrapePricing(platform)
    const freshness = getFreshnessIndicator(pricing.lastUpdated)

    return NextResponse.json({
      success: true,
      data: {
        ...pricing,
        freshness,
      },
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
