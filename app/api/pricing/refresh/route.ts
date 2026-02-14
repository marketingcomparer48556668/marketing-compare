import { NextResponse } from 'next/server'

export const revalidate = 3600 // Revalidate every hour

export async function GET() {
  try {
    // Return fresh timestamp to force update
    return NextResponse.json({
      success: true,
      lastUpdated: new Date().toISOString(),
      message: 'Pricing data refresh triggered manually',
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to refresh pricing data',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
