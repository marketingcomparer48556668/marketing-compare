# Affiliate Programs Research - In Progress

Research date: 2026-02-13
Status: Initial web fetch attempts - many platforms require manual investigation

## Confirmed Programs (from external knowledge)

### ActiveCampaign
- **URL:** https://activecampaign.com/affiliate-program
- **Commission:** 20-30% of first year revenue
- **Payout:** Monthly after threshold met
- **Cookie:** ~90 days
- **Approval:** Manual review required

### HubSpot
- **URL:** https://hubspot.com/affiliate-program (redirects to /partners)
- **Commission:** 15% recurring
- **Payout:** Monthly
- **Cookie:** 90 days
- **Approval:** Manual review

### Drip
- **URL:** https://getdrip.com/affiliate-program
- **Commission:** ~30% recurring
- **Payout:** Monthly
- **Cookie:** 60 days
- **Approval:** Generally auto-approved

### Brevo (Sendinblue)
- **URL:** https://brevo.com/en/affiliate-program
- **Commission:** €5 per active account
- **Payout:** Monthly
- **Cookie:** Unknown
- **Approval:** Unknown

## Need Further Research

### 1. Klaviyo
**Attempted:** https://klaviyo.com/partners
**Result:** Found partner program page, but needs investigation for:
- Affiliate vs. Partner program
- Commission structure
- Payout terms
- Application process

**Action items:**
- Search for "Klaviyo affiliate program" or "Klaviyo referral program"
- Check partner program details for revenue share
- Contact Klaviyo if needed

### 2. Omnisend
**Attempted:** https://omnisend.com/affiliate-program
**Result:** 404 - Not found
**Alternative URL:** /agency-partners (found in navigation)

**Action items:**
- Check /agency-partners page
- Search for "Omnisend affiliate" or "Omnisend referral program"
- May not have public affiliate program

### 3. Privy
**Attempted:** https://privy.com/affiliate
**Result:** 404 - Not found

**Action items:**
- Check Shopify App Store (Privy is Shopify-focused)
- Search for "Privy affiliate program"
- May only have Shopify App Store referral program

### 4. Mailchimp
**Attempted:** https://mailchimp.com/resources/affiliate-program/
**Result:** 404 - Not found
**Note:** Mailchimp was acquired by Intuit in 2021

**Action items:**
- Search for "Mailchimp affiliate program" (may be discontinued)
- Check if Intuit has any referral programs
- May need to explore other revenue sources for Mailchimp

### 5. Braze
**Expected:** Partner program (enterprise-focused)
**Status:** Not yet researched

**Action items:**
- Check https://braze.com/partners
- Enterprise partner programs often don't have public affiliate
- May need direct contact for partnership inquiry

### 6. Customer.io
**Expected:** Partner program
**Status:** Not yet researched

**Action items:**
- Search for "Customer.io partner program"
- Check for referral incentives
- May require manual application

## Revenue Potential Calculation

### Current Confirmed Programs

| Platform | Commission | Example Revenue (1 signup) | Example Revenue (10 signups/mo) |
|----------|------------|------------------------------|----------------------------------|
| ActiveCampaign | 25% first year ($99/mo × 12 = $1,188) | $297 | $2,970 |
| HubSpot | 15% recurring ($45/mo) | $6.75/mo = $81/yr | $81/mo |
| Drip | 30% recurring ($39/mo) | $11.70/mo = $140/yr | $117/mo |
| Brevo | €5 flat per signup | ~$5.50 | $55/mo |

**Total confirmed potential:** ~$3,223/month (if 10 signups each)

## Next Steps

### Immediate Actions
1. **Manual browser research** - Web fetch limited, need to manually visit:
   - Klaviyo partners page details
   - Omnisend agency partners
   - Privy Shopify App Store listings
   - Braze partner program
   - Customer.io partner program

2. **Apply to confirmed programs:**
   - ActiveCampaign affiliate program
   - HubSpot affiliate program
   - Drip affiliate program
   - Brevo affiliate program

3. **Create affiliate tracking:**
   - Add `affiliateLink` field to platform data structure
   - Add `affiliateProgram` metadata (commission, cookie, etc.)
   - Implement FTC disclosures in footer

4. **Add affiliate CTA:**
   - "Sign up via our link" buttons on platform pages
   - Track clicks (basic analytics)
   - Monitor conversions through affiliate dashboards

## Implementation Priority

**High Priority (Confirmed Programs):**
1. ActiveCampaign - Strong commission, good fit for e-commerce
2. HubSpot - Established program, recurring revenue
3. Drip - High recurring commission
4. Brevo - Simple flat fee structure

**Medium Priority (Need Research):**
5. Klaviyo - Major e-commerce player, likely has program
6. Omnisend - Featured in Editor's Pick, worth investigating
7. Customer.io - Technical audience, good fit

**Low Priority (Uncertain):**
8. Privy - Shopify app store may have different model
9. Mailchimp - May have discontinued program post-Intuit
10. Braze - Enterprise focus, partnership may not be affiliate

## FTC Compliance Requirements

All affiliate links must include disclosure:
- **Where:** Near each affiliate link/button
- **What to say:** "Affiliate link" or "We may earn a commission"
- **Implementation:** Add to platform page templates

## Notes

- Web fetch results were limited due to 404s and 503s
- Many platforms use different URL structures for affiliate/partner programs
- Enterprise platforms (Braze, HubSpot Enterprise) may use partner programs instead of affiliate
- Need manual browser research for complete picture
