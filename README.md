# MarketingCompare

AI-powered comparison platform for marketing automation solutions. Find your perfect platform with real-time pricing, incident tracking, and personalized recommendations.

## Features

- **10 Platforms Tracked:** Klaviyo, Omnisend, Privy, Mailchimp, ActiveCampaign, HubSpot, Braze, Customer.io, Brevo, Drip
- **AI-Powered Chat:** Private, runs in your browser via WebLLM — no data leaves your device
- **Real-Time Pricing:** Always-fresh pricing data with "last updated" freshness signals
- **Incident Tracking:** Downtime monitoring and QoS tracking
- **Public Sentiment:** Aggregated user sentiment scores
- **Side-by-Side Comparison:** Compare up to 3 platforms at once

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- WebLLM (@mlc-ai/web-llm) - Client-side LLM inference

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Deployment

### Auto-Deploy

This site uses GitHub Actions for automatic deployment to Vercel.

**Trigger:** Push to `main` branch → Deployed automatically in ~2-3 minutes

**Monitor:** https://github.com/marketingcomparer48556668/marketing-compare/actions

### Manual Deploy

```bash
npm run deploy
```

Deployed on Vercel: [https://marketing-compare.vercel.app](https://marketing-compare.vercel.app)

### Configure GitHub Secrets (One-time setup)

Go to: https://github.com/marketingcomparer48556668/marketing-compare/settings/secrets/actions/new

Add these secrets:

**VERCEL_TOKEN**
- Token: [Your Vercel token]
- Get token: https://vercel.com/account/tokens
- Repo: marketing-compare

**VERCEL_ORG_ID** (Optional)
- Org ID: [Get from Vercel dashboard → General → Project ID]

---

## Deployment Status

- **Status:** ✅ Live
- **Last Deployed:** 2026-02-12 23:08 UTC
- **URL:** https://marketing-compare.vercel.app
- **Auto-Deploy:** ✅ Active (via GitHub Actions)

---

_Updated: 2026-02-12 23:08 UTC_
