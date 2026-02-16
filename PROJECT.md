# MarketingCompare - Product Documentation

## Overview

MarketingCompare is a web-based comparison platform for marketing automation tools. It helps users compare 10 popular platforms (Klaviyo, Omnisend, Privy, Mailchimp, ActiveCampaign, HubSpot, Braze, Customer.io, Brevo, Drip) with real-time pricing, AI-powered recommendations, and detailed feature comparisons.

**Live Site:** https://marketing-compare.vercel.app  
**Repository:** https://github.com/marketingcomparer48556668/marketing-compare

---

## Tech Stack

- **Framework:** Next.js 14.0.4 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4.19
- **AI Runtime:** WebLLM (@mlc-ai/web-llm) - Client-side LLM inference
- **Scraping:** Playwright 1.58.2 (for pricing data)
- **Deployment:** Vercel (auto-deploy on push to `main`)

---

## Architecture

### File Structure

```
marketing-compare/
├── app/
│   ├── compare/           # Side-by-side platform comparison
│   ├── deals/             # Deals and discounts page
│   ├── editors-pick/      # Editor's Pick recommendation
│   ├── platform/          # Individual platform review pages
│   │   ├── klaviyo/
│   │   ├── omnisend/
│   │   └── ...
│   ├── chat/              # AI chat assistant
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Homepage with platform grid
│   └── globals.css        # Global styles
├── data/
│   └── pricing.json       # Pricing data (scraped, copied to public/)
├── lib/
│   └── pricing.ts         # Pricing data loader with caching
├── scripts/
│   ├── scrape-klaviyo.js      # Playwright scraper for Klaviyo
│   ├── scrape-omnisend.js     # Playwright scraper for Omnisend
│   └── scrape-pricing.js      # Generic pricing scraper
├── public/
│   └── pricing.json       # Public copy of pricing data for runtime
└── components/           # (future: reusable components)
```

### Data Flow

1. **Pricing Data:**
   - Scraped from platform websites using Playwright scripts (`scripts/*.js`)
   - Stored in `data/pricing.json` (source of truth)
   - Copied to `public/pricing.json` for client-side access
   - Loaded via `lib/pricing.ts` with 5-minute in-memory cache

2. **Static Data:**
   - Platform metadata (name, tagline, rating, channels) is embedded in page components
   - Hardcoded in `app/page.tsx`, `app/compare/page.tsx`, etc.

3. **AI Chat:**
   - WebLLM runs entirely client-side in the browser
   - No data leaves user's device
   - Hardcoded response logic in `app/chat/page.tsx`

---

## Features

### 1. Homepage (`/`)
- Hero section with value proposition
- Feature cards (Real-Time Pricing, Private AI Chat, User Sentiment)
- Platform grid with quick stats (rating, pricing, channels, best for)
- Links to individual platform pages

### 2. Compare (`/compare`)
- Select up to 3 platforms to compare side-by-side
- Comparison table with:
  - Rating
  - Pricing
  - Best For
  - Channels
  - Key Features
  - Integrations
- Empty state when no platforms selected
- Clear all button

### 3. Editor's Pick (`/editors-pick`)
- Highlights a top platform (currently Omnisend)
- Detailed recommendation with pros/cons
- Alternatives listed
- Monthly/seasonal updates suggested

### 4. Deals (`/deals`)
- Curated deals and discounts from platforms
- Filter by category (New Customer, Annual Plan, Limited Time, etc.)
- Expiring soon badges
- Original vs. deal price display
- Links to platform pages

### 5. AI Chat (`/chat`)
- Conversational AI assistant for recommendations
- Client-side WebLLM (private, no data leaves browser)
- Keyword-based responses for:
  - E-commerce / Shopify
  - Budget concerns
  - Enterprise needs
  - Feature comparisons
  - Direct platform comparisons

### 6. Platform Pages (`/platform/{id}`)
- Detailed review for each platform
- Pricing table with scraped data
- Last updated timestamp
- SEO metadata for each platform
- Back to home link

---

## Pricing Data System

### Data Format (`pricing.json`)

```json
{
  "lastUpdated": "2025-02-15T...",
  "platforms": {
    "klaviyo": {
      "name": "Klaviyo",
      "url": "https://www.klaviyo.com/pricing",
      "plans": [
        {
          "name": "Free",
          "price": 0,
          "currency": "USD",
          "period": "month",
          "features": [...]
        }
      ],
      "lastScraped": "2025-02-15T..."
    }
  }
}
```

### Loading (`lib/pricing.ts`)

- `loadPricingData()` - Loads data from `public/pricing.json`
- 5-minute in-memory cache (`CACHE_TTL = 300000`)
- Fallback to empty data if file missing/error
- Helper functions:
  - `getPlatformPricing(id)` - Get pricing for specific platform
  - `getPlatformPlans(id)` - Get plans array
  - `formatPrice(price, currency)` - Format as currency string
  - `formatPriceRange(min, max, currency)` - Format price range

### Scraping

**Klaviyo Scraper (`scripts/scrape-klaviyo.js`):**
- Uses Playwright (headless initially, but can run with UI)
- Navigates to https://www.klaviyo.com/pricing
- Waits for pricing calculator
- Extracts plan names, prices, features

**Omnisend Scraper (`scripts/scrape-omnisend.js`):**
- Navigates to https://www.omnisend.com/pricing
- Complex pricing with calculated values
- Extracts static Free plan, details for Standard/Pro

**Running scrapers:**
```bash
npm run scrape-klaviyo
npm run scrape-omnisend
```

---

## SEO & Metadata

### Root Metadata (`app/layout.tsx`)

- Title, description, keywords
- OpenGraph (Facebook, LinkedIn)
- Twitter Card
- Canonical URL
- Robots (index, follow)

### Platform Page Metadata

Each platform page (`app/platform/{id}/page.tsx`) has:
- Custom title and description
- OpenGraph tags
- Canonical URL

---

## Deployment

### Auto-Deploy (Vercel via GitHub Actions)

- Trigger: Push to `main` branch
- Deploys in ~2-3 minutes
- Monitor: https://github.com/marketingcomparer48556668/marketing-compare/actions

### Required GitHub Secrets

Set in: https://github.com/marketingcomparer48556668/marketing-compare/settings/secrets/actions/new

- `VERCEL_TOKEN` - Vercel deployment token
- `VERCEL_ORG_ID` - (Optional) Org ID from Vercel dashboard

### Manual Deploy

```bash
npm run deploy
```

---

## Development Workflow

### Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

### Updating Pricing

1. Run scraper:
   ```bash
   npm run scrape-klaviyo
   ```

2. Copy to public folder (if scraper doesn't do this):
   ```bash
   cp data/pricing.json public/pricing.json
   ```

3. Verify changes locally

4. Commit and push to trigger auto-deploy

### Adding a New Platform

1. Create page: `app/platform/{new-platform}/page.tsx`
2. Add metadata (SEO)
3. Add platform to arrays in:
   - `app/page.tsx` (homepage grid)
   - `app/compare/page.tsx` (comparison)
   - `app/deals/page.tsx` (if deals available)
4. Create scraper in `scripts/`
5. Add to `package.json` scripts
6. Update `pricing.json` structure
7. Test locally, then deploy

---

## Known Issues & Limitations

1. **Chat is rule-based, not true AI:**
   - Currently uses keyword matching
   - WebLLM integration not fully implemented
   - Response logic in `app/chat/page.tsx`

2. **Pricing data freshness:**
   - Scrapers need to be run manually
   - No automated refresh schedule
   - Some scrapers (Omnisend) have complex pricing that's hard to scrape

3. **Platform data duplication:**
   - Platform metadata (name, tagline, rating) is duplicated across components
   - Should be centralized in a single data source

4. **Deals are hardcoded:**
   - No automation to fetch latest deals
   - Expiration dates manual

5. **Sentiment tracking not implemented:**
   - Promised in README but not built yet
   - Would need API integrations (Reddit, Twitter, G2, etc.)

---

## Next Steps / Roadmap

### High Priority

1. **Centralize platform data:**
   - Create `data/platforms.json` with all metadata
   - Load in components, eliminate duplication
   - Make updates single-source-of-truth

2. **Automate pricing refresh:**
   - Set up cron job or GitHub Action to run scrapers
   - Commit updated pricing automatically
   - Trigger deployment on pricing changes

3. **Implement real AI chat:**
   - Integrate WebLLM properly
   - Load platform data into context
   - Allow dynamic recommendations

### Medium Priority

4. **Add sentiment tracking:**
   - Integrate with G2, Capterra APIs
   - Aggregate Reddit/Twitter mentions
   - Display sentiment scores on platform pages

5. **Improve scraping:**
   - Fix Omnisend scraper for complex pricing
   - Add scrapers for remaining platforms
   - Add error handling and retries

6. **Deals automation:**
   - Fetch deals from affiliate APIs
   - Auto-update expiration dates
   - Email alerts for expiring deals

### Low Priority

7. **User accounts:**
   - Save comparisons
   - Email alerts for price drops
   - Personalized recommendations

8. **Affiliate links:**
   - Monetize through referral links
   - Track clicks and conversions

9. **Mobile app:**
   - React Native or PWA
   - Push notifications for deals

---

## Dependencies

### Key Packages

- `next` - React framework
- `react`, `react-dom` - UI library
- `tailwindcss` - Styling
- `playwright` - Web scraping
- `axios` - HTTP client
- `cheerio` - HTML parsing (if needed)

### Development

- `typescript` - Type safety
- `@types/node`, `@types/react` - Type definitions
- `eslint` - Linting
- `autoprefixer`, `postcss` - CSS processing

---

## Contact & Support

**Repo:** https://github.com/marketingcomparer48556668/marketing-compare  
**Live Site:** https://marketing-compare.vercel.app

For issues or questions, check the repo's Issues tab.

---

*Last Updated: 2026-02-16*
