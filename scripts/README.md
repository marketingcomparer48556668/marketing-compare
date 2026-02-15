# Pricing Scraper

Automated pricing scraper for marketing automation platforms.

## What it does

1. Scrapes pricing data from platform websites (Klaviyo, Omnisend, etc.)
2. Compares with existing pricing data
3. If changed: commits and pushes to GitHub
4. Vercel auto-deploys when changes are detected

## Running manually

```bash
node scripts/scrape-pricing.js
```

## Automation

**Cron job:** Runs every 6 hours
- Schedule: `0 */6 * * *` (12am, 6am, 12pm, 6pm)
- Logs: `/tmp/scraper.log`

To check the logs:
```bash
tail -f /tmp/scraper.log
```

## Next steps

- Add actual web scraping (currently using mock data)
- Add more platforms one by one
- Add error handling and retry logic
- Add notifications when pricing changes

## Why this setup

- Simple: No external services needed
- Version-controlled: Can rollback pricing changes
- Fast: Static JSON, no API latency
- Reliable: Runs on your 24/7 machine
