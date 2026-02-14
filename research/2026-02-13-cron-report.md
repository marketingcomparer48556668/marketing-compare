# Marketing Platforms Research - 2026-02-13

## Research Status: BLOCKED - Tool Not Configured

**Issue:** The web_search tool requires a Brave Search API key to function.
**Impact:** Cannot perform automated research on marketing platform developments, pricing changes, sentiment shifts, or emerging trends.

---

## Known Platform Context (From Project Documentation)

### 10 Tracked Platforms
1. **Klaviyo** - E-commerce benchmark, "king" of the space
2. **Omnisend** - Direct e-commerce competitor
3. **Privy** - Lead capture + simple e-commerce
4. **Mailchimp** - SMB incumbent, established brand
5. **ActiveCampaign** - Automation powerhouse
6. **HubSpot** - Full CRM suite, enterprise focus
7. **Braze** - Enterprise, cross-channel, mobile-first
8. **Customer.io** - SaaS/dev-friendly
9. **Brevo** - Budget-friendly, Europe-focused
10. **Drip** - E-commerce focused

### Strategic Moats Being Built
1. **Client-side LLM chat** - Privacy-first, no API calls
2. **Real-time pricing tracking** - Always-fresh data, change alerts
3. **Incident tracking** - Downtime monitoring critical for campaigns
4. **Sentiment aggregation** - Real user sentiment from multiple sources
5. **Technical depth** - MCP support, API documentation, developer features

---

## Research Priorities (To Execute When Tool is Configured)

### High-Priority Monitoring

#### 1. Platform Updates & Feature Releases
- Track new AI feature launches (content generation, send time optimization, predictive analytics)
- Monitor API expansions and new integrations
- Watch for MCP (Model Context Protocol) support announcements
- Track pricing model changes, tier restructuring, and promotional offers

#### 2. Emerging Platforms
- Identify new entrants in marketing automation space (2025-2026)
- Watch Product Hunt, Hacker News, and tech press for launches
- Track funding announcements for new competitors
- Monitor AI-native marketing tools (potential disruptors)

#### 3. Sentiment & Pain Points
- Monitor Reddit (r/marketing, r/ecommerce), Twitter, and forums
- Track G2/Capterra review sentiment shifts
- Identify recurring complaints about the 10 tracked platforms
- Watch for "platform exodus" discussions or migration patterns

#### 4. Industry Trends
- AI adoption in marketing automation (trends, concerns, best practices)
- Privacy regulations impacting marketing tools (GDPR updates, CCPA, etc.)
- Cross-channel engagement patterns (SMS, WhatsApp, in-app messaging)
- E-commerce integration demands and shifts

#### 5. Pricing & Market Positioning
- Competitive pricing changes
- Freemium vs. paid strategy shifts
- Enterprise vs. SMB positioning changes
- Regional pricing differences (especially for Europe-based platforms)

---

## Strategic Insights Needed

### Competitive Gaps to Identify
- What features do users consistently request but platforms don't deliver?
- Which platforms are lagging in AI adoption?
- Where are integration pain points highest?
- What are the most common migration reasons?

### Opportunity Areas for MarketingCompare
- Emerging comparison angles not currently covered
- Data points that would be high-value but underserved
- Communities or forums where comparison content would resonate
- Partnership opportunities with complementary tools

---

## Recommended Actions

### Immediate (To Enable Research)
1. **Configure Brave Search API:**
   - Run: `openclaw configure --section web`
   - Add: `BRAVE_API_KEY` environment variable
   - Alternative: Set via Gateway environment

2. **Alternative Research Sources:**
   - Use `browser` tool for targeted site visits (slower but functional)
   - Set up RSS feeds for platform blogs/changelogs
   - Configure API access to review platforms (G2, Capterra) if available

### Ongoing (Once Research Enabled)
1. **Daily:** Check for major announcements, pricing changes, incidents
2. **Weekly:** Sentiment analysis, emerging platform discovery, trend tracking
3. **Monthly:** Comprehensive competitive analysis, strategic gaps report
4. **Quarterly:** Market positioning review, platform landscape shifts

---

## Data Infrastructure Recommendations

### To Build
1. **Platform Changelog Tracker** - Auto-scrape changelogs/release notes
2. **Pricing Database** - Historical pricing with change timestamps
3. **Incident Log** - Downtime events, severity, resolution time
4. **Sentiment Score Database** - Time-series sentiment by platform
5. **Competitive Feature Matrix** - Track feature parity across platforms

### Tools to Consider
- Web scraping (Puppeteer/Playwright) for pricing pages
- API integrations (status pages, review platforms)
- RSS parsers for changelogs/blogs
- Twitter/Reddit API for sentiment monitoring

---

## Project Status Update

**Deployment:** ✅ Live at https://marketing-compare.vercel.app
**MVP Status:** Skeleton in progress (lorem ipsum data)
**Next Steps:**
1. Complete MVP skeleton with all features
2. Get UX feedback
3. Swap lorem ipsum with real scraped data
4. Build pricing scraper pipeline
5. Set up incident tracking
6. Build sentiment aggregation
7. Launch and gather traffic

---

## Next Cron Run Recommendations

Once Brave API is configured, this cron job should:

1. **Research Template:**
   - Query: "{platform name} updates 2025 2026 features pricing"
   - Query: "new marketing automation platform 2025 2026"
   - Query: "email marketing AI trends 2025"
   - Query: "{platform name} complaints Reddit issues"

2. **Output Format:**
   - Executive summary of key developments
   - Platform-specific updates (if any)
   - Emerging platforms discovered
   - Sentiment shifts or pain points
   - Strategic recommendations

3. **Delivery:**
   - Save to `/marketing-compare/research/YYYY-MM-DD.md`
   - Highlight urgent items (major pricing changes, security issues)
   - Flag items requiring Boss attention

---

_Report generated: 2026-02-13 02:55 UTC (Europe/Vilnius)_
_Research blocked: Missing Brave Search API key_
