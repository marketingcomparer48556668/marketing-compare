# Quick Start: SEO & Growth Features

## New Pages Available Now

### Comparison Pages
Visit these URLs to see side-by-side comparisons:

| Comparison | URL |
|------------|-----|
| Klaviyo vs Omnisend | `/compare/klaviyo-vs-omnisend` |
| Mailchimp vs HubSpot | `/compare/mailchimp-vs-hubspot` |
| ActiveCampaign vs Klaviyo | `/compare/activecampaign-vs-klaviyo` |
| Omnisend vs Mailchimp | `/compare/omnisend-vs-mailchimp` |
| Klaviyo vs ActiveCampaign | `/compare/klaviyo-vs-activecampaign` |

**Create more by combining any platform IDs:**
- Format: `/compare/{platform1}-vs-{platform2}`
- Available IDs: `klaviyo`, `omnisend`, `privy`, `mailchimp`, `activecampaign`, `hubspot`, `braze`, `customerio`, `brevo`, `drip`

### Alternatives Pages
Visit these URLs to see alternatives to each platform:

| Platform | URL |
|----------|-----|
| Mailchimp Alternatives | `/alternatives/mailchimp` |
| Klaviyo Alternatives | `/alternatives/klaviyo` |
| HubSpot Alternatives | `/alternatives/hubspot` |
| ActiveCampaign Alternatives | `/alternatives/activecampaign` |
| Omnisend Alternatives | `/alternatives/omnisend` |

**Create more for any platform:**
- Format: `/alternatives/{platform}`

---

## Email Capture

The homepage now has two email capture forms:

1. **Banner (top)**: High visibility, after hero section
2. **Card (bottom)**: Lead magnet style, after platform grid

**Current Status:**
- Forms are functional (validation, success states)
- Ready for email service integration
- Currently simulates success (no actual email sent)

---

## How to Integrate Email Service

### Option 1: SendGrid (Recommended)

1. **Sign up:** https://sendgrid.com
2. **Get API Key:** Settings → API Keys → Create Key
3. **Add to `.env.local`:**
   ```
   SENDGRID_API_KEY=your_key_here
   ```

4. **Update `components/EmailCapture.tsx`:**

Replace the TODO comment with:

```typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

await sgMail.send({
  to: email,
  from: 'hello@marketingcompare.com',
  subject: 'Welcome to MarketingCompare',
  templateId: 'd-xxxxx', // Create template in SendGrid
  dynamicTemplateData: {
    name: email.split('@')[0]
  }
})
```

5. **Install SendGrid SDK:**
   ```bash
   npm install @sendgrid/mail
   ```

### Option 2: Mailchimp

1. **Sign up:** https://mailchimp.com
2. **Get API Key:** Account → Extras → API keys
3. **Create Audience:** Lists → Create list
4. **Add to `.env.local`:**
   ```
   MAILCHIMP_API_KEY=your_key_here
   MAILCHIMP_AUDIENCE_ID=your_audience_id
   ```

5. **Update `components/EmailCapture.tsx`:**

```typescript
import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: 'us1' // Extract from API key
})

await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
  email_address: email,
  status: 'subscribed'
})
```

---

## Testing the New Pages

### Local Development

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Visit these URLs:**
   - http://localhost:3000/compare/klaviyo-vs-omnisend
   - http://localhost:3000/alternatives/mailchimp
   - http://localhost:3000 (see email capture forms)

### Before Deploying

Check:
- [ ] Comparison pages load correctly
- [ ] Alternatives pages show rankings
- [ ] Email forms validate properly
- [ ] Success/error states work
- [ ] Mobile responsive (test on phone)

---

## Deploying

The changes are ready to deploy:

```bash
git add .
git commit -m "Add SEO comparison pages, alternatives pages, and email capture"
git push
```

Vercel will auto-deploy in 2-3 minutes.

---

## Next Steps (This Week)

### Day 1-2: Set Up Email
1. Choose email service (SendGrid recommended)
2. Get API key
3. Integrate with EmailCapture component
4. Create welcome email template
5. Test signup flow

### Day 3-4: Create More Pages
1. Create 5 more comparison pages
2. Create 2 more alternatives pages
3. Add internal links between pages

### Day 5: Submit to Search Engines
1. Add new URLs to sitemap
2. Submit sitemap to Google Search Console
3. Submit to Bing Webmaster Tools
4. Monitor indexation

---

## Support Files

Created for reference:
- `ROADMAP.md` - 3-month growth plan
- `PROJECT.md` - Full project documentation
- `IMPLEMENTATION_SUMMARY.md` - Detailed implementation notes

---

*Last Updated: 2026-02-16*
