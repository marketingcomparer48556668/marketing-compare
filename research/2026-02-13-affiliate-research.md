# Affiliate Programs Research

## Known Affiliate Programs

### ActiveCampaign
- URL: https://www.activecampaign.com/affiliate-program
- Commission: 20-30% of first year revenue
- Payout: Monthly after minimum threshold
- Cookie: Typically 90 days

### HubSpot
- URL: https://www.hubspot.com/affiliate-program
- Commission: 15% recurring
- Payout: Monthly
- Cookie: 90 days

### Mailchimp
- URL: https://mailchimp.com/resources/affiliate-program/
- Commission: $5 per free signup, higher for paid conversions
- Payout structure: Tiered based on volume

### Drip
- URL: https://www.getdrip.com/affiliate-program
- Commission: ~30% recurring
- Cookie: 60 days

### Brevo (Sendinblue)
- URL: https://www.brevo.com/en/affiliate-program/
- Commission: €5 per active account
- Payout: Monthly

## Programs to Research Further

### Klaviyo
- Search: "Klaviyo affiliate program" or "Klaviyo partner program"
- Likely has partner/referral program

### Customer.io
- Search: "Customer.io partner program"
- Has partner program, need commission details

### Omnisend
- Search: "Omnisend affiliate program"
- E-commerce focused, likely has program

### Privy
- Search: "Privy affiliate program"
- Shopify app, likely has referral program

### Braze
- Search: "Braze partner program"
- Enterprise-focused, may not have public affiliate

## Research Checklist

For each platform:
1. Find official affiliate/partner program page
2. Note commission structure (% or flat fee)
3. Note cookie duration
5. Note payout threshold and frequency
6. Note if approval is automatic or manual
7. Check if they have dedicated affiliate dashboard
8. Note any restrictions or compliance requirements

## Implementation Considerations

### Disclosure Requirements
- Must disclose affiliate links per FTC guidelines
- "Affiliate link" or "We may earn a commission" near links

### Tracking
- Need affiliate IDs or tracking codes for each platform
- Store in platform data structure

### Display
- Add "Sign up via our link" buttons
- Could show "Earned commission" transparency (optional)

### Data Structure Update

```typescript
interface Platform {
  // ... existing fields
  affiliateLink?: string
  affiliateProgram?: {
    available: boolean
    commissionType: 'percentage' | 'flat'
    commissionValue: number
    cookieDuration: number
    disclosureRequired: boolean
  }
}
```

## Next Steps

1. Complete research on all 10 platforms
2. Apply to relevant affiliate programs
3. Add affiliate links to platform data
4. Add disclosure to site footer
5. Create affiliate-link signup buttons on platform pages
