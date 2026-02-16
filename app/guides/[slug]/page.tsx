import Link from 'next/link'
import type { Metadata } from 'next'

interface GuidePageProps {
  params: {
    slug: string
  }
}

// Guide data - this would normally come from a CMS or markdown files
const guides: Record<string, any> = {
  'how-to-choose-email-marketing-software': {
    title: 'How to Choose Email Marketing Software for Your Business',
    description: 'A complete guide to selecting the right email marketing platform. Compare features, pricing, and find the perfect fit for your needs.',
    lastUpdated: 'February 2025',
    readTime: '12 min read',
    category: 'Getting Started',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Why Email Marketing Software Matters'
      },
      {
        type: 'paragraph',
        text: 'Email marketing remains one of the most effective digital channels, with an average ROI of $42 for every $1 spent. But choosing the right platform is crucial - the wrong choice can waste money, frustrate your team, and limit your growth.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Step 1: Understand Your Business Needs'
      },
      {
        type: 'paragraph',
        text: 'Before evaluating platforms, answer these questions:'
      },
      {
        type: 'list',
        items: [
          'What is your monthly budget for email marketing?',
          'What is your current email list size?',
          'How many emails do you plan to send per month?',
          'What channels do you need? (email, SMS, push, etc.)',
          'What is your technical expertise level?',
          'Do you need advanced automation or just basic campaigns?',
          'What integrations are essential? (CRM, e-commerce, etc.)'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Step 2: Compare Key Features'
      },
      {
        type: 'paragraph',
        text: 'Not all email platforms are created equal. Here are the features that matter most:'
      },
      {
        type: 'subheading',
        text: 'Essential Features'
      },
      {
        type: 'list',
        items: [
          'Email editor & templates',
          'List management & segmentation',
          'Basic automation (welcome series, abandoned cart)',
          'Analytics & reporting',
          'Landing pages'
        ]
      },
      {
        type: 'subheading',
        text: 'Advanced Features (for growing businesses)'
      },
      {
        type: 'list',
        items: [
          'Advanced automation workflows',
          'A/B testing',
          'Multi-channel messaging (SMS, push)',
          'E-commerce integrations',
          'CRM integration',
          'Lead scoring',
          'Advanced segmentation (behavioral, RFM)'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Step 3: Evaluate Pricing Models'
      },
      {
        type: 'paragraph',
        text: 'Email marketing pricing varies widely. Understand these models:'
      },
      {
        type: 'list',
        items: [
          'Contact-based pricing: Pay based on your list size (Mailchimp, Klaviyo)',
          'Volume-based pricing: Pay based on emails sent (Brevo, Omnisend)',
          'Tiered pricing: Feature sets unlock at different levels (ActiveCampaign, HubSpot)',
          'Custom pricing: For enterprise needs (Braze, Salesforce Marketing Cloud)'
        ]
      },
      {
        type: 'box',
        typeBox: 'tip',
        title: '💡 Pro Tip',
        text: 'Don\'t just look at starting prices. Consider what happens when you grow - some platforms get very expensive at scale.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Step 4: Test Before Committing'
      },
      {
        type: 'paragraph',
        text: 'Most platforms offer free trials or free tiers. Use them!'
      },
      {
        type: 'list',
        items: [
          'Upload a small test list',
          'Create 2-3 emails with different templates',
          'Set up a basic automation',
          'Test integrations with your existing tools',
          'Check the analytics dashboard',
          'Test the support team - send them questions'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Step 5: Consider Scalability'
      },
      {
        type: 'paragraph',
        text: 'Your needs will change. Choose a platform that can grow with you:'
      },
      {
        type: 'list',
        items: [
          'Does it handle larger lists efficiently?',
          'Can you add team members?',
          'Are there advanced features you can upgrade to?',
          'What happens when you hit usage limits?',
          'Can you export your data easily?'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Platform Recommendations by Use Case'
      },
      {
        type: 'subheading',
        text: 'Best for E-commerce'
      },
      {
        type: 'paragraph',
        text: 'Klaviyo - Deep e-commerce integration, revenue tracking, and pre-built flows'
      },
      {
        type: 'subheading',
        text: 'Best for Small Businesses'
      },
      {
        type: 'paragraph',
        text: 'Mailchimp - Easy to use, great templates, affordable for starters'
      },
      {
        type: 'subheading',
        text: 'Best for Automation'
      },
      {
        type: 'paragraph',
        text: 'ActiveCampaign - Powerful automation builder, lead scoring, CRM'
      },
      {
        type: 'subheading',
        text: 'Best for Budget-Conscious'
      },
      {
        type: 'paragraph',
        text: 'Brevo - Generous free plan, multi-channel, good value'
      },
      {
        type: 'subheading',
        text: 'Best for Enterprise'
      },
      {
        type: 'paragraph',
        text: 'HubSpot - Complete marketing suite, CRM, scalability'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Common Mistakes to Avoid'
      },
      {
        type: 'list',
        items: [
          'Choosing the cheapest option without considering features',
          'Not testing integrations before committing',
          'Ignoring deliverability rates',
          'Overbuying - getting features you\'ll never use',
          'Not planning for migration costs (time and money)',
          'Forgetting about training for your team'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Next Steps'
      },
      {
        type: 'paragraph',
        text: 'Ready to make a decision? Use our tools to narrow down your options:'
      },
      {
        type: 'list',
        items: [
          'Compare platforms side-by-side',
          'Use our AI chat for personalized recommendations',
          'Read detailed platform reviews',
          'Check out current deals and discounts'
        ]
      }
    ]
  },
  'email-marketing-pricing-guide': {
    title: 'Email Marketing Pricing Guide: What You Should Pay',
    description: 'Understanding email marketing pricing models, hidden costs, and how to budget for your email marketing platform.',
    lastUpdated: 'February 2025',
    readTime: '10 min read',
    category: 'Pricing',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'How Email Marketing Platforms Price Their Services'
      },
      {
        type: 'paragraph',
        text: 'Email marketing platforms use different pricing models. Understanding these helps you choose the right platform and budget accurately.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Contact-Based Pricing'
      },
      {
        type: 'paragraph',
        text: 'You pay based on the size of your email list. The more subscribers, the higher the cost.'
      },
      {
        type: 'box',
        typeBox: 'example',
        title: 'Example',
        text: 'Mailchimp: $0 for 500 contacts, $13 for 1,000 contacts, $45 for 10,000 contacts'
      },
      {
        type: 'list',
        items: [
          'Best for: Businesses with stable or slowly growing lists',
          'Watch out for: Sudden price jumps when you hit tier thresholds',
          'Examples: Mailchimp, Klaviyo, Constant Contact'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Volume-Based Pricing'
      },
      {
        type: 'paragraph',
        text: 'You pay based on how many emails you send per month.'
      },
      {
        type: 'box',
        typeBox: 'example',
        title: 'Example',
        text: 'Brevo: 300 emails/day free, $25/month for 20,000 emails, $65/month for 100,000 emails'
      },
      {
        type: 'list',
        items: [
          'Best for: High-frequency senders with smaller lists',
          'Watch out for: Overage charges if you exceed limits',
          'Examples: Brevo, Omnisend, SendGrid'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Tiered Feature Pricing'
      },
      {
        type: 'paragraph',
        text: 'Different tiers unlock different features. Price increases with capability.'
      },
      {
        type: 'box',
        typeBox: 'example',
        title: 'Example',
        text: 'ActiveCampaign: Lite ($29) - Basic email, Plus ($49) - Automation, Professional ($149) - Full suite'
      },
      {
        type: 'list',
        items: [
          'Best for: Growing businesses needing more advanced features over time',
          'Watch out for: Paying for features you don\'t use',
          'Examples: ActiveCampaign, HubSpot, GetResponse'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Hidden Costs to Consider'
      },
      {
        type: 'subheading',
        text: 'Add-on Costs'
      },
      {
        type: 'list',
        items: [
          'SMS messaging (usually charged separately)',
          'Additional users/team members',
          'Advanced analytics or reporting',
          'Custom domains',
          'Dedicated IP addresses'
        ]
      },
      {
        type: 'subheading',
        text: 'Migration Costs'
      },
      {
        type: 'list',
        items: [
          'Time to export/import data',
          'Potential downtime during switch',
          'Template re-creation',
          'Workflow rebuild',
          'Team training'
        ]
      },
      {
        type: 'subheading',
        text: 'Growth Costs'
      },
      {
        type: 'list',
        items: [
          'Upgrading to higher tiers as you grow',
          'Paying for more contacts or emails',
          'Additional features as needs evolve'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'What Should You Pay?'
      },
      {
        type: 'subheading',
        text: 'Small Business (0-5,000 contacts)'
      },
      {
        type: 'paragraph',
        text: 'Budget: $0 - $50/month'
      },
      {
        type: 'list',
        items: [
          'Free tier: Mailchimp, Brevo, Omnisend',
          'Paid tier: $15-35/month for most platforms'
        ]
      },
      {
        type: 'subheading',
        text: 'Growing Business (5,000 - 50,000 contacts)'
      },
      {
        type: 'paragraph',
        text: 'Budget: $50 - $300/month'
      },
      {
        type: 'list',
        items: [
          'Basic tier: $50-100/month',
          'Automation tier: $150-250/month',
          'Examples: Klaviyo, ActiveCampaign, Omnisend'
        ]
      },
      {
        type: 'subheading',
        text: 'Enterprise (50,000+ contacts)'
      },
      {
        type: 'paragraph',
        text: 'Budget: $300 - $5,000+/month'
      },
      {
        type: 'list',
        items: [
          'Custom pricing: HubSpot, Braze, Salesforce',
          'Includes: Dedicated support, account management, custom features'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Money-Saving Tips'
      },
      {
        type: 'list',
        items: [
          'Pay annually: Most platforms offer 15-30% discounts for yearly payment',
          'Start with free tiers: Test before committing',
          'Clean your list regularly: Remove inactive subscribers to reduce costs',
          'Look for deals: Check our deals page for current promotions',
          'Negotiate: Enterprise pricing is often negotiable',
          'Use features efficiently: Don\'t upgrade if you won\'t use the features'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Getting Started'
      },
      {
        type: 'paragraph',
        text: 'Ready to find the right platform at the right price?'
      },
      {
        type: 'list',
        items: [
          'Use our comparison tool to compare pricing side-by-side',
          'Check our deals page for current promotions',
          'Read detailed platform reviews with pricing breakdowns',
          'Talk to our AI assistant for personalized recommendations'
        ]
      }
    ]
  },
  'ecommerce-email-marketing-guide': {
    title: 'E-commerce Email Marketing: Complete Setup Guide',
    description: 'A comprehensive guide to setting up email marketing for e-commerce. Learn about abandoned cart, welcome flows, and revenue-driving campaigns.',
    lastUpdated: 'February 2025',
    readTime: '15 min read',
    category: 'E-commerce',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Why Email Marketing is Critical for E-commerce'
      },
      {
        type: 'paragraph',
        text: 'Email marketing drives 20-30% of e-commerce revenue on average. It\'s your most effective channel for customer acquisition, retention, and lifetime value growth.'
      },
      {
        type: 'box',
        typeBox: 'stat',
        title: 'Key Stat',
        text: 'E-commerce brands that use email marketing see average order values 3x higher than those that don\'t.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Essential E-commerce Email Flows'
      },
      {
        type: 'subheading',
        text: '1. Welcome Series (The Foundation)'
      },
      {
        type: 'paragraph',
        text: 'Your welcome series is the most important automation. It sets expectations, builds trust, and starts the customer relationship.'
      },
      {
        type: 'list',
        items: [
          'Email 1 (Immediate): Welcome + discount code (10-20% off)',
          'Email 2 (Day 1): Brand story + product recommendations',
          'Email 3 (Day 2-3): Social proof + customer testimonials',
          'Email 4 (Day 5-7): Last chance reminder for welcome discount'
        ],
        stat: 'Average open rate: 50-70% | Average conversion: 15-25%'
      },
      {
        type: 'subheading',
        text: '2. Abandoned Cart (Revenue Recovery)'
      },
      {
        type: 'paragraph',
        text: 'Recover lost sales from visitors who added items but didn\'t complete checkout.'
      },
      {
        type: 'list',
        items: [
          'Email 1 (1 hour): "Did you forget something?" + product image',
          'Email 2 (24 hours): Social proof + urgency ("Items selling fast")',
          'Email 3 (48 hours): "Still thinking?" + small incentive (free shipping)',
          'Email 4 (72 hours): "Last chance" + bigger discount (10-15% off)'
        ],
        stat: 'Average recovery rate: 10-15% of abandoned carts'
      },
      {
        type: 'subheading',
        text: '3. Browse Abandonment (Earlier Capture)'
      },
      {
        type: 'paragraph',
        text: 'Capture visitors who viewed products but didn\'t add to cart.'
      },
      {
        type: 'list',
        items: [
          'Email 1 (24 hours): "Still interested in [product]?"',
          'Email 2 (72 hours): Similar products recommendation',
          'Email 3 (7 days): Check-in with different category'
        ],
        stat: 'Average conversion: 3-8% of viewers'
      },
      {
        type: 'subheading',
        text: '4. Post-Purchase (Customer Retention)'
      },
      {
        type: 'paragraph',
        text: 'Build loyalty and encourage repeat purchases.'
      },
      {
        type: 'list',
        items: [
          'Email 1 (Day 1): Shipping confirmation + tracking link',
          'Email 2 (Day 7): Delivery check-in + review request',
          'Email 3 (Day 14): "How\'s it going?" + usage tips',
          'Email 4 (Day 30): "Ready for more?" + complementary products'
        ],
        stat: 'Repeat purchase rate: 20-40% increase with post-purchase flows'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Campaign Strategies for E-commerce'
      },
      {
        type: 'subheading',
        text: 'Product Launches'
      },
      {
        type: 'list',
        items: [
          'Teaser (3-5 days before)',
          'Launch day (all channels)',
          'Social proof email (24 hours later)',
          'FOMO email (48 hours later - "almost sold out")',
          'Last call (5-7 days later)'
        ]
      },
      {
        type: 'subheading',
        text: 'Flash Sales'
      },
      {
        type: 'list',
        items: [
          'Pre-access for VIPs (4 hours before)',
          'Announcement (sale starts)',
          'Mid-sale reminder (halfway through)',
          'Final countdown (2 hours before end)',
          'Extended sale (1 hour after - for VIPs only)'
        ]
      },
      {
        type: 'subheading',
        text: 'Seasonal Campaigns'
      },
      {
        type: 'list',
        items: [
          'Black Friday / Cyber Monday',
          'Holiday gift guides',
          'New year, new you',
          'Back to school',
          'Seasonal collections (spring/summer/fall/winter)'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Best Practices for E-commerce Email'
      },
      {
        type: 'list',
        items: [
          'Use dynamic product feeds for personalized recommendations',
          'Include product images, prices, and clear CTAs',
          'Segment by purchase history and browsing behavior',
          'Send time optimization based on customer timezone',
          'Mobile optimization (50%+ of opens are on mobile)',
          'Test subject lines, content, and send times',
          'Monitor deliverability and reputation'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Choosing the Right Platform for E-commerce'
      },
      {
        type: 'subheading',
        text: 'Best Overall: Klaviyo'
      },
      {
        type: 'paragraph',
        text: 'Deep e-commerce integration, revenue tracking, and pre-built flows for every scenario.'
      },
      {
        type: 'subheading',
        text: 'Best for Small E-commerce: Omnisend'
      },
      {
        type: 'paragraph',
        text: 'Affordable, easy to use, great for Shopify stores.'
      },
      {
        type: 'subheading',
        text: 'Best for Shopify Stores: Privy'
      },
      {
        type: 'paragraph',
        text: 'Built for Shopify, excellent pop-ups, abandoned cart recovery.'
      },
      {
        type: 'subheading',
        text: 'Best Budget Option: Brevo'
      },
      {
        type: 'paragraph',
        text: 'Multi-channel, good free tier, works well for startups.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Getting Started'
      },
      {
        type: 'paragraph',
        text: 'Ready to boost your e-commerce revenue with email?'
      },
      {
        type: 'list',
        items: [
          'Compare e-commerce email platforms',
          'Use our AI chat for personalized recommendations',
          'Check current deals and promotions',
          'Read detailed e-commerce platform reviews'
        ]
      }
    ]
  },
  'klaviyo-vs-omnisend-ecommerce-automation': {
    title: 'Klaviyo vs Omnisend: E-commerce Automation Showdown',
    description: 'Deep dive comparison of Klaviyo and Omnisend automation features. Which platform delivers better e-commerce email marketing results?',
    lastUpdated: 'February 2025',
    readTime: '15 min read',
    category: 'Platform Comparison',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'The Battle for E-commerce Email Dominance'
      },
      {
        type: 'paragraph',
        text: 'Klaviyo and Omnisend are the two most popular email marketing platforms for e-commerce. Both excel at e-commerce integrations, but they take different approaches. Let\'s break down their automation capabilities.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Klaviyo Automation: Power User Paradise'
      },
      {
        type: 'subheading',
        text: 'Flow Builder'
      },
      {
        type: 'paragraph',
        text: 'Klaviyo\'s flow builder is visual and powerful. You can create complex customer journeys with branching logic, conditional splits, and triggers based on deep e-commerce data.'
      },
      {
        type: 'box',
        typeBox: 'tip',
        title: '💡 Klaviyo Strength',
        text: 'Deep Shopify sync means every purchase, cart abandonment, and browse event can trigger automated flows.'
      },
      {
        type: 'subheading',
        text: 'Pre-built Flows'
      },
      {
        type: 'paragraph',
        text: 'Klaviyo offers templates for every e-commerce scenario: welcome series, abandoned cart, browse abandonment, post-purchase, win-back campaigns.'
      },
      {
        type: 'list',
        items: [
          'Welcome series with discount',
          'Abandoned cart (3+ email flow)',
          'Browse abandonment (product viewed)',
          'Post-purchase review request',
          'Replenishment reminders',
          'Win-back campaigns'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Omnisend Automation: Simplicity First'
      },
      {
        type: 'subheading',
        text: 'Workflow Editor'
      },
      {
        type: 'paragraph',
        text: 'Omnisend\'s workflow editor is more streamlined than Klaviyo\'s. It\'s easier to get started, though less powerful for complex scenarios.'
      },
      {
        type: 'box',
        typeBox: 'tip',
        title: '💡 Omnisend Strength',
        text: 'Great for smaller e-commerce teams who need quick setup without a steep learning curve.'
      },
      {
        type: 'subheading',
        text: 'Automation Templates'
      },
      {
        type: 'paragraph',
        text: 'Omnisend provides templates covering the essentials, though fewer than Klaviyo.'
      },
      {
        type: 'list',
        items: [
          'Welcome series',
          'Abandoned cart',
          'Customer reactivation',
          'Newsletter signup',
          'Birthday emails'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Key Automation Differences'
      },
      {
        type: 'subheading',
        text: 'Trigger Capabilities'
      },
      {
        type: 'paragraph',
        text: 'Klaviyo has more sophisticated triggers based on e-commerce events.'
      },
      {
        type: 'list',
        items: [
          'Klaviyo: Product views, specific product purchases, revenue thresholds, RFM segments',
          'Omnisend: Basic e-commerce events, fewer granular triggers'
        ]
      },
      {
        type: 'subheading',
        text: 'Conditional Logic'
      },
      {
        type: 'paragraph',
        text: 'Klaviyo\'s conditional branching is more advanced.'
      },
      {
        type: 'list',
        items: [
          'Klaviyo: Multi-level splits, complex logic, OR/AND conditions',
          'Omnisend: Basic splits, simpler conditions'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Which Should You Choose?'
      },
      {
        type: 'subheading',
        text: 'Choose Klaviyo If:'
      },
      {
        type: 'list',
        items: [
          'You have a growing e-commerce business ($50k+ annual revenue)',
          'You need sophisticated customer journeys',
          'Your team has email marketing experience',
          'You want deep e-commerce analytics',
          'Budget allows for premium pricing'
        ]
      },
      {
        type: 'subheading',
        text: 'Choose Omnisend If:'
      },
      {
        type: 'list',
        items: [
          'You\'re a small e-commerce store (<$50k annual revenue)',
          'You need quick setup and ease of use',
          'You\'re just starting with email automation',
          'Budget is a primary concern',
          'You don\'t need complex flows'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Verdict'
      },
      {
        type: 'box',
        typeBox: 'stat',
        title: '🏆 Winner: Klaviyo for Power, Omnisend for Simplicity',
        text: 'Klaviyo wins on automation capabilities and features, but Omnisend wins on ease of use and pricing. Choose based on your team\'s expertise and budget.'
      }
    ]
  },
  'best-email-platforms-small-business-2025': {
    title: 'Best Email Marketing Platforms for Small Business in 2025',
    description: 'Complete guide to choosing email marketing software for small businesses. Compare Mailchimp, Brevo, Omnisend, and more based on features, pricing, and ease of use.',
    lastUpdated: 'February 2025',
    readTime: '18 min read',
    category: 'Small Business',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'What Small Businesses Need in Email Marketing'
      },
      {
        type: 'paragraph',
        text: 'Small businesses have unique needs: limited budgets, small teams, and the need for quick results. You don\'t need enterprise features, but you do need reliability and growth potential.'
      },
      {
        type: 'list',
        items: [
          'Affordable pricing (or free tiers)',
          'Easy to use (no dedicated marketing team)',
          'Quick setup (get started in hours, not days)',
          'Templates (no design team needed)',
          'Basic automation (welcome series, simple campaigns)',
          'Good support (you\'ll have questions)'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Top 5 Platforms for Small Business'
      },
      {
        type: 'subheading',
        text: '1. Mailchimp - The Safe Choice'
      },
      {
        type: 'box',
        typeBox: 'example',
        title: 'Starting Price',
        text: 'Free for up to 500 contacts, $13/month for 1,000 contacts'
      },
      {
        type: 'paragraph',
        text: 'Mailchimp is the default choice for a reason: it\'s easy, reliable, and has everything you need to get started.'
      },
      {
        type: 'list',
        items: [
          'Pros: Easy interface, great templates, large ecosystem',
          'Cons: Pricing gets expensive, limited automation',
          'Best for: Complete beginners, businesses under 5,000 contacts'
        ]
      },
      {
        type: 'subheading',
        text: '2. Brevo (Sendinblue) - Best Value'
      },
      {
        type: 'box',
        typeBox: 'example',
        title: 'Starting Price',
        text: 'Free tier with 300 emails/day, $25/month for 20,000 emails'
      },
      {
        type: 'paragraph',
        text: 'Brevo offers the best free tier in the market and multi-channel capabilities at a great price.'
      },
      {
        type: 'list',
        items: [
          'Pros: Generous free tier, multi-channel (email + SMS + chat)',
          'Cons: Interface could be improved, fewer templates',
          'Best for: Budget-conscious small businesses, startups'
        ]
      },
      {
        type: 'subheading',
        text: '3. Omnisend - Best for E-commerce'
      },
      {
        type: 'box',
        typeBox: 'example',
        title: 'Starting Price',
        text: 'Free for up to 500 contacts, $16/month for 1,000 contacts'
      },
      {
        type: 'paragraph',
        text: 'If you\'re selling online, Omnisend is built for you. Great Shopify integration and e-commerce flows.'
      },
      {
        type: 'list',
        items: [
          'Pros: E-commerce focus, easy setup, good automation templates',
          'Cons: Less advanced than Klaviyo, limited to e-commerce',
          'Best for: Shopify stores, small e-commerce brands'
        ]
      },
      {
        type: 'subheading',
        text: '4. MailerLite - Best Interface'
      },
      {
        type: 'box',
        typeBox: 'example',
        title: 'Starting Price',
        text: 'Free for up to 1,000 contacts, $10/month for 2,000 contacts'
      },
      {
        type: 'paragraph',
        text: 'MailerLite has the cleanest, easiest interface. Great for non-technical teams.'
      },
      {
        type: 'list',
        items: [
          'Pros: Beautiful UI, easy to use, good free tier',
          'Cons: Limited automation, fewer integrations',
          'Best for: Non-marketers, solopreneurs'
        ]
      },
      {
        type: 'subheading',
        text: '5. ActiveCampaign - Best Automation'
      },
      {
        type: 'box',
        typeBox: 'example',
        title: 'Starting Price',
        text: '$29/month starting, includes CRM'
      },
      {
        type: 'paragraph',
        text: 'ActiveCampaign is pricier but offers automation capabilities that blow competitors away. Good investment for growing businesses.'
      },
      {
        type: 'list',
        items: [
          'Pros: Powerful automation, built-in CRM, great support',
          'Cons: Learning curve, higher pricing',
          'Best for: Growing businesses, teams ready to scale'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Small Business Budget Guide'
      },
      {
        type: 'paragraph',
        text: 'Here\'s what to expect at different list sizes:'
      },
      {
        type: 'list',
        items: [
          '0-500 contacts: Most platforms are FREE',
          '500-2,000 contacts: $10-25/month',
          '2,000-10,000 contacts: $25-100/month',
          '10,000-50,000 contacts: $100-300/month'
        ]
      },
      {
        type: 'box',
        typeBox: 'tip',
        title: '💡 Money-Saving Tip',
        text: 'Start with free tiers. Most small businesses can stay on free tiers for 3-6 months while growing their list.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Final Recommendation'
      },
      {
        type: 'box',
        typeBox: 'stat',
        title: '🏆 Our Top Pick',
        text: 'Mailchimp for beginners, Brevo for budget-conscious, Omnisend for e-commerce. All three have excellent free tiers to get started risk-free.'
      }
    ]
  },
  'mailchimp-vs-activecampaign-automation': {
    title: 'Mailchimp vs ActiveCampaign: Automation Face-Off',
    description: 'Compare Mailchimp and ActiveCampaign automation features. Which platform delivers better customer journeys and marketing workflows?',
    lastUpdated: 'February 2025',
    readTime: '14 min read',
    category: 'Platform Comparison',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Automation: The Difference Between Good and Great'
      },
      {
        type: 'paragraph',
        text: 'Mailchimp and ActiveCampaign represent two different philosophies: Mailchimp makes automation accessible, while ActiveCampaign makes it powerful. The difference becomes obvious once you move beyond basic welcome emails.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Mailchimp Automation: Accessible but Limited'
      },
      {
        type: 'subheading',
        text: 'Customer Journeys'
      },
      {
        type: 'paragraph',
        text: 'Mailchimp\'s Customer Journeys feature is their most advanced automation. It\'s visual and easy to understand, but has limitations.'
      },
      {
        type: 'box',
        typeBox: 'tip',
        title: '💡 Mailchimp Strength',
        text: 'Great visual editor. You can see the entire customer journey at a glance.'
      },
      {
        type: 'list',
        items: [
          'Welcome series',
          'Abandoned cart (e-commerce)',
          'Re-engagement campaigns',
          'Basic branching logic'
        ]
      },
      {
        type: 'subheading',
        text: 'Limitations'
      },
      {
        type: 'paragraph',
        text: 'Mailchimp automation hits walls quickly when you need advanced features.'
      },
      {
        type: 'list',
        items: [
          'No lead scoring (premium only)',
          'Limited conditional logic',
          'No behavioral triggers beyond basic events',
          'No complex wait steps or time delays'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'ActiveCampaign Automation: Power User Dream'
      },
      {
        type: 'subheading',
        text: 'Automation Builder'
      },
      {
        type: 'paragraph',
        text: 'ActiveCampaign\'s automation builder is the gold standard. It can handle complex customer journeys with multiple conditions, branches, and triggers.'
      },
      {
        type: 'box',
        typeBox: 'tip',
        title: '💡 ActiveCampaign Strength',
        text: 'Deep behavioral tracking. You can trigger automations based on website visits, email engagement, and CRM data.'
      },
      {
        type: 'list',
        items: [
          'Multi-level conditional splits',
          'Lead scoring',
          'Site tracking and behavioral triggers',
          'CRM integration',
          'Complex wait conditions',
          'Goal tracking'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Feature-by-Feature Comparison'
      },
      {
        type: 'subheading',
        text: 'Lead Scoring'
      },
      {
        type: 'paragraph',
        text: 'ActiveCampaign has built-in lead scoring. Mailchimp doesn\'t offer this feature at any tier.'
      },
      {
        type: 'box',
        typeBox: 'example',
        title: 'ActiveCampaign',
        text: 'Score leads based on email opens, clicks, website visits, and custom behaviors.'
      },
      {
        type: 'box',
        typeBox: 'warning',
        title: 'Mailchimp',
        text: 'No native lead scoring. You\'d need to use third-party tools.'
      },
      {
        type: 'subheading',
        text: 'Conditional Logic'
      },
      {
        type: 'paragraph',
        text: 'ActiveCampaign supports OR/AND logic and complex conditions. Mailchimp is limited to basic IF/THEN.'
      },
      {
        type: 'subheading',
        text: 'CRM Integration'
      },
      {
        type: 'paragraph',
        text: 'ActiveCampaign includes a full CRM. Mailchimp requires integrations (even for their own CRM offering).'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Use Case Scenarios'
      },
      {
        type: 'subheading',
        text: 'Simple Welcome Series'
      },
      {
        type: 'list',
        items: [
          'Mailchimp: Perfect for this use case, quick setup',
          'ActiveCampaign: Overkill, but works perfectly'
        ]
      },
      {
        type: 'subheading',
        text: 'Lead Nurturing with Scoring'
      },
      {
        type: 'list',
        items: [
          'Mailchimp: Cannot do this natively',
          'ActiveCampaign: Built for exactly this scenario'
        ]
      },
      {
        type: 'subheading',
        text: 'Complex E-commerce Flows'
      },
      {
        type: 'list',
        items: [
          'Mailchimp: Limited with basic Customer Journeys',
          'ActiveCampaign: Powerful but requires e-commerce integration'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Verdict'
      },
      {
        type: 'box',
        typeBox: 'stat',
        title: '🏆 ActiveCampaign Wins on Features',
        text: 'ActiveCampaign is significantly more powerful. Choose Mailchimp only if you need simplicity and don\'t expect to grow beyond basic automation.'
      }
    ]
  },
  'email-deliverability-complete-guide': {
    title: 'Email Deliverability: The Complete Guide',
    description: 'Everything you need to know about email deliverability. Learn how to ensure your emails reach the inbox, not spam folders.',
    lastUpdated: 'February 2025',
    readTime: '20 min read',
    category: 'Technical',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'What is Email Deliverability?'
      },
      {
        type: 'paragraph',
        text: 'Email deliverability is the percentage of emails that actually reach subscribers\' inboxes. Even with a clean list and great content, poor deliverability means your emails never get seen.'
      },
      {
        type: 'box',
        typeBox: 'stat',
        title: 'Key Stat',
        text: 'Average email deliverability is 79.6%. Top brands achieve 95%+. Poor sender reputation can drop this below 50%.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Factors That Affect Deliverability'
      },
      {
        type: 'subheading',
        text: '1. Sender Reputation'
      },
      {
        type: 'paragraph',
        text: 'Your sender reputation is your email\'s credit score. ISPs (Gmail, Outlook, Yahoo) use it to decide whether to deliver your emails.'
      },
      {
        type: 'list',
        items: [
          'Complaint rates (users marking spam)',
          'Bounce rates (invalid emails)',
          'Engagement rates (opens, clicks)',
          'Spam trap hits (honey pot emails)',
          'Sending frequency consistency'
        ]
      },
      {
        type: 'subheading',
        text: '2. Authentication'
      },
      {
        type: 'paragraph',
        text: 'Email authentication proves you own your domain and aren\'t spoofing. Without it, your emails are more likely to be blocked.'
      },
      {
        type: 'list',
        items: [
          'SPF (Sender Policy Framework)',
          'DKIM (DomainKeys Identified Mail)',
          'DMARC (Domain-based Message Authentication)'
        ]
      },
      {
        type: 'box',
        typeBox: 'warning',
        title: '⚠️ Critical',
        text: 'All three (SPF, DKIM, DMARC) are required for good deliverability in 2025.'
      },
      {
        type: 'subheading',
        text: '3. Content Quality'
      },
      {
        type: 'paragraph',
        text: 'While less important than reputation, content matters. Spam filters analyze your emails for red flags.'
      },
      {
        type: 'list',
        items: [
          'Subject line quality (no ALL CAPS, excessive punctuation)',
          'Spam trigger words (free, guarantee, urgent)',
          'Image-to-text ratio',
          'Link safety (no suspicious short URLs)',
          'Code quality (no broken HTML)'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'How to Improve Deliverability'
      },
      {
        type: 'subheading',
        text: 'Maintain a Clean List'
      },
      {
        type: 'paragraph',
        text: 'Dirty lists destroy deliverability. Remove inactive and bounced emails regularly.'
      },
      {
        type: 'list',
        items: [
          'Remove hard bounces immediately',
          'Re-engagement campaigns for inactive subscribers',
          'Double opt-in for new signups',
          'Clean your list quarterly'
        ]
      },
      {
        type: 'subheading',
        text: 'Warm Up Your IP'
      },
      {
        type: 'paragraph',
        text: 'New domains or IPs need warming. Start slow and build volume gradually.'
      },
      {
        type: 'list',
        items: [
          'Day 1: Send 10-50 emails',
          'Day 2: Send 50-100 emails',
          'Day 3-7: Double daily volume',
          'Continue until you reach normal sending volume'
        ]
      },
      {
        type: 'box',
        typeBox: 'tip',
        title: '💡 Pro Tip',
        text: 'Most email platforms handle IP warming automatically. Ask your platform about their warming process.'
      },
      {
        type: 'subheading',
        text: 'Set Up Authentication'
      },
      {
        type: 'paragraph',
        text: 'Work with your IT team or email platform to configure SPF, DKIM, and DMARC records.'
      },
      {
        type: 'list',
        items: [
          'Add SPF record to your DNS',
          'Add DKIM key to your DNS',
          'Create DMARC policy',
          'Verify with your email platform'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Deliverability by Platform'
      },
      {
        type: 'paragraph',
        text: 'Some platforms have better deliverability than others due to their infrastructure and monitoring.'
      },
      {
        type: 'subheading',
        text: 'Top Performers'
      },
      {
        type: 'list',
        items: [
          'Klaviyo - Excellent for e-commerce, dedicated infrastructure',
          'Mailchimp - Good deliverability, large team monitoring',
          'ActiveCampaign - Very good, proactive deliverability team',
          'Brevo - Solid, especially for smaller senders'
        ]
      },
      {
        type: 'subheading',
        text: 'What to Ask Before Choosing'
      },
      {
        type: 'list',
        items: [
          'Do you provide dedicated IPs? (required for high volume)',
          'What\'s your average deliverability rate?',
          'How do you handle bounces and complaints?',
          'Do you offer deliverability consulting?',
          'What monitoring tools do you provide?'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Monitoring Your Deliverability'
      },
      {
        type: 'paragraph',
        text: 'Track these metrics to catch problems early.'
      },
      {
        type: 'list',
        items: [
          'Bounce rate (should be < 2%)',
          'Complaint rate (should be < 0.1%)',
          'Open rate (industry average 18-25%)',
          'Click rate (industry average 2-5%)',
          'Spam folder placement (use seed accounts to test)'
        ]
      },
      {
        type: 'box',
        typeBox: 'warning',
        title: '⚠️ Red Flags',
        text: 'If bounce rate exceeds 2% or complaint rate exceeds 0.1%, stop sending immediately. You\'re damaging your reputation.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Final Thoughts'
      },
      {
        type: 'box',
        typeBox: 'stat',
        title: 'Key Takeaway',
        text: 'Deliverability is 80% reputation management, 20% content quality. Focus on list hygiene, engagement, and authentication. Good deliverability = more revenue.'
      }
    ]
  },
  'ab-testing-email-marketing-best-practices': {
    title: 'A/B Testing in Email Marketing: Best Practices',
    description: 'Learn how to run effective A/B tests for your email campaigns. Discover what to test, how to analyze results, and improve your email marketing performance.',
    lastUpdated: 'February 2025',
    readTime: '16 min read',
    category: 'Optimization',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Why A/B Testing Matters'
      },
      {
        type: 'paragraph',
        text: 'A/B testing (split testing) lets you optimize your email campaigns by comparing two versions. Small improvements compound into big gains over time.'
      },
      {
        type: 'box',
        typeBox: 'stat',
        title: 'Impact',
        text: 'Regular A/B testing can increase open rates by 20% and click rates by 30%. That\'s huge revenue impact.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'What Should You Test?'
      },
      {
        type: 'subheading',
        text: '1. Subject Lines'
      },
      {
        type: 'paragraph',
        text: 'Subject lines have the biggest impact on open rates. Test everything.'
      },
      {
        type: 'list',
        items: [
          'Length: Short vs. long (under 50 chars vs. 50+ chars)',
          'Tone: Casual vs. professional vs. urgent',
          'Personalization: Name vs. no name vs. company name',
          'Emoji: With vs. without',
          'Question vs. statement vs. teaser',
          'Numbers: "5 tips" vs. "Five tips"'
        ]
      },
      {
        type: 'subheading',
        text: '2. Send Time'
      },
      {
        type: 'paragraph',
        text: 'When you send affects open rates dramatically. Different audiences have different peak times.'
      },
      {
        type: 'list',
        items: [
          'Morning: 9-10 AM (people checking email at work)',
          'Mid-day: 2-3 PM (lunch break browsing)',
          'Evening: 6-8 PM (personal device checking)',
          'Test day of week: Tuesday/Wednesday often outperform weekends'
        ]
      },
      {
        type: 'subheading',
        text: '3. From Name'
      },
      {
        type: 'paragraph',
        text: 'The "From" name affects trust and recognition. Test different approaches.'
      },
      {
        type: 'list',
        items: [
          'Company name: "MarketingCompare"',
          'Personal name: "John from MarketingCompare"',
          'Personal + company: "John (MarketingCompare)"',
          'Brand character: "Bob from MarketingCompare"'
        ]
      },
      {
        type: 'subheading',
        text: '4. Preview Text'
      },
      {
        type: 'paragraph',
        text: 'Preview text shows alongside the subject line in inboxes. It\'s crucial real estate.'
      },
      {
        type: 'list',
        items: [
          'Summary vs. teaser',
          'With personalization vs. without',
          'Length: Short vs. long',
          'CTA-focused vs. informative'
        ]
      },
      {
        type: 'subheading',
        text: '5. Content & Design'
      },
      {
        type: 'paragraph',
        text: 'Test how your email looks and performs with different content approaches.'
      },
      {
        type: 'list',
        items: [
          'Layout: Single column vs. multi-column',
          'Images: Heavy vs. light vs. no images',
          'CTA button vs. text link',
          'CTA placement: Top vs. middle vs. bottom',
          'Color scheme: Brand colors vs. contrasting colors',
          'Email length: Short vs. long'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'How to Run an A/B Test'
      },
      {
        type: 'subheading',
        text: 'Step 1: Define Your Hypothesis'
      },
      {
        type: 'paragraph',
        text: 'Don\'t just test randomly. Have a theory about what will work better.'
      },
      {
        type: 'box',
        typeBox: 'example',
        title: 'Good Hypothesis',
        text: 'Adding the recipient\'s first name to the subject line will increase open rates by 15% because personalization creates a sense of connection.'
      },
      {
        type: 'subheading',
        text: 'Step 2: Choose Your Variable'
      },
      {
        type: 'paragraph',
        text: 'Test ONE variable at a time. Testing multiple variables makes it impossible to know what caused the difference.'
      },
      {
        type: 'box',
        typeBox: 'warning',
        title: '⚠️ Common Mistake',
        text: 'Testing subject line AND send time AND from name all at once. You won\'t know which factor drove the results.'
      },
      {
        type: 'subheading',
        text: 'Step 3: Split Your Audience'
      },
      {
        type: 'paragraph',
        text: 'Divide your list into equal segments. Each segment should be large enough to be statistically significant.'
      },
      {
        type: 'list',
        items: [
          'Minimum: 1,000 subscribers per variant for statistical significance',
          'Ideal: 5,000+ subscribers per variant',
          'Duration: Send to 10-20% of list, wait 24-48 hours for results'
        ]
      },
      {
        type: 'subheading',
        text: 'Step 4: Send and Monitor'
      },
      {
        type: 'paragraph',
        text: 'Send both versions simultaneously to eliminate time-of-day variables.'
      },
      {
        type: 'list',
        items: [
          'Wait 24-48 hours for opens to stabilize',
          'Track opens, clicks, and conversions',
          'Don\'t stop the test early unless one variant is dramatically underperforming'
        ]
      },
      {
        type: 'subheading',
        text: 'Step 5: Analyze and Decide'
      },
      {
        type: 'paragraph',
        text: 'Compare results using your primary metric (usually open rate for subject lines, click rate for content).'
      },
      {
        type: 'list',
        items: [
          'Calculate statistical significance (p < 0.05)',
          'Compare conversion rates, not just opens',
          'Consider long-term impact (opens vs. revenue)',
          'Document learnings for future tests'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Platform A/B Testing Capabilities'
      },
      {
        type: 'subheading',
        text: 'Platforms with Built-in A/B Testing'
      },
      {
        type: 'list',
        items: [
          'Mailchimp: Good, supports subject lines, content, send time',
          'Klaviyo: Excellent, supports everything plus automated winner selection',
          'Omnisend: Good, supports subject lines and content',
          'ActiveCampaign: Excellent, supports complex test scenarios'
        ]
      },
      {
        type: 'subheading',
        text: 'Platforms Without Built-in A/B Testing'
      },
      {
        type: 'list',
        items: [
          'Brevo: Limited (upgrade required)',
          'Privy: No native A/B testing',
          'MailerLite: Basic (pro plans only)'
        ]
      },
      {
        type: 'box',
        typeBox: 'tip',
        title: '💡 Workaround',
        text: 'If your platform lacks A/B testing, manually split your list into segments and send different campaigns. More work, but effective.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'A/B Testing Best Practices'
      },
      {
        type: 'list',
        items: [
          'Test early and often: Run 1-2 tests per week',
          'Test boldly: Small changes yield small improvements',
          'Test based on data: Use analytics to find underperforming areas',
          'Test against control: Always have a baseline to compare against',
          'Don\'t test forever: Pick a winner and move on',
          'Document everything: What you tested, why, and results'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Common A/B Testing Mistakes'
      },
      {
        type: 'list',
        items: [
          'Testing too small of an audience (not statistically significant)',
          'Stopping tests too early (insufficient data)',
          'Testing multiple variables at once (confused results)',
          'Only testing subject lines (clicks matter more)',
          'Not documenting results (can\'t learn from failures)',
          'Testing for the sake of testing (no clear hypothesis)'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Getting Started'
      },
      {
        type: 'box',
        typeBox: 'stat',
        title: '🎯 First Test to Run',
        text: 'Start with subject line personalization. Test "Hi [First Name]" vs. no personalization. It\'s the easiest test with clear impact.'
      }
    ]
  }
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const guide = guides[params.slug]
  if (!guide) return { title: 'Guide' }

  return {
    title: `${guide.title} | MarketingCompare`,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: 'article',
    },
  'email-subject-line-best-practices': {
    title: 'Email Subject Line Best Practices: Boost Open Rates',
    description: 'Master email subject lines with proven best practices. Learn psychological triggers, formatting tips, and real examples that drive higher open rates.',
    lastUpdated: 'February 2025',
    readTime: '14 min read',
    category: 'Optimization',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Why Subject Lines Matter'
      },
      {
        type: 'paragraph',
        text: 'Your subject line is the gatekeeper of your email. 47% of recipients decide whether to open an email based on subject line alone. Get it wrong, and your carefully crafted content never gets seen.'
      },
      {
        type: 'box',
        typeBox: 'stat',
        title: 'Impact',
        text: '47% of email opens are decided by subject line. Improve your subject lines by 20%, and your overall email revenue grows by the same amount.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Psychological Triggers That Work'
      },
      {
        type: 'subheading',
        text: '1. Curiosity Gap'
      },
      {
        type: 'paragraph',
        text: 'Create information gaps that make people want to click. The brain hates incomplete information.'
      },
      {
        type: 'box',
        typeBox: 'example',
        title: 'Example',
        text: '"You won\'t believe this..." vs. "Check out our new products"'
      },
      {
        type: 'subheading',
        text: '2. Urgency and Scarcity'
      },
      {
        type: 'paragraph',
        text: 'FOMO (Fear Of Missing Out) is powerful. Limited-time offers trigger action.'
      },
      {
        type: 'list',
        items: [
          '"Last chance to save 20%"',
          '"Only 3 spots left for webinar"',
          '"24 hours to claim your discount"',
          '"Don\'t miss this limited offer"'
        ]
      },
      {
        type: 'box',
        typeBox: 'warning',
        title: '⚠️ Use Sparingly',
        text: 'Urgency works, but overuse it and you\'ll lose trust. Only use when truly limited.'
      },
      {
        type: 'subheading',
        text: '3. Personalization'
      },
      {
        type: 'paragraph',
        text: 'Seeing your name in an inbox stands out. It creates a sense of connection and relevance.'
      },
      {
        type: 'list',
        items: [
          '"Hi John, here\'s your exclusive offer"',
          '"Sarah, we picked these products for you"',
          '"Mike, your 20% discount is waiting"'
        ]
      },
      {
        type: 'box',
        typeBox: 'tip',
        title: '💡 Pro Tip',
        text: 'Personalization beyond names works too: location, past purchases, browsing behavior, industry.'
      },
      {
        type: 'subheading',
        text: '4. Numbers and Lists'
      },
      {
        type: 'paragraph',
        text: 'Specific numbers are more convincing than vague promises. Lists promise structured, digestible information.'
      },
      {
        type: 'list',
        items: [
          '"5 ways to increase sales" (better than "increase sales")',
          '"3 tools every marketer needs" (better than "tools you need")',
          '"10 email templates that convert" (better than "email templates")'
        ]
      },
      {
        type: 'subheading',
        text: '5. Questions'
      },
      {
        type: 'paragraph',
        text: 'Questions naturally trigger the brain to answer, which increases engagement.'
      },
      {
        type: 'list',
        items: [
          '"Ready to double your email ROI?"',
          '"Have you tried these strategies?"',
          '"What if you could automate 80% of your marketing?"',
          '"Is your email list costing you money?"'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Subject Line Length Guide'
      },
      {
        type: 'paragraph',
        text: 'Length varies by device, but there are sweet spots you should know.'
      },
      {
        type: 'subheading',
        text: 'Desktop View'
      },
      {
        type: 'paragraph',
        text: 'Desktop shows 60-80 characters. You have room for creativity but keep it focused.'
      },
      {
        type: 'subheading',
        text: 'Mobile View'
      },
      {
        type: 'paragraph',
        text: 'Mobile shows 30-40 characters. This is where most opens happen, so prioritize brevity.'
      },
      {
        type: 'box',
        typeBox: 'stat',
        title: '📱 Mobile First',
        text: '46% of email opens happen on mobile. Optimize for 30-40 characters first.'
      },
      {
        type: 'subheading',
        text: 'Character Limits by Platform'
      },
      {
        type: 'paragraph',
        text: 'Different inboxes cut off at different points. Keep your most important words early.'
      },
      {
        type: 'list',
        items: [
          'Gmail (web): 70 characters',
          'Gmail (iOS): 35 characters',
          'Outlook: 60 characters',
          'Yahoo Mail: 70 characters',
          'Apple Mail: 60 characters'
        ]
      },
      {
        type: 'box',
        typeBox: 'tip',
        title: '💡 Safe Zone',
        text: 'Keep first 30-40 characters compelling and self-contained. If truncated, recipients should still get the message.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Formatting and Style Tips'
      },
      {
        type: 'subheading',
        text: 'Do Use: Emojis'
      },
      {
        type: 'paragraph',
        text: 'Emojis stand out in text-heavy inboxes. Use them strategically, not randomly.'
      },
      {
        type: 'list',
        items: [
          '🎉 Sale, 🚀 Launch, 🔥 Hot, ⏰ Time-sensitive',
          'Use 1-2 emojis maximum',
          'Place emojis at the start for visibility',
          'Test: Some audiences find emojis unprofessional'
        ]
      },
      {
        type: 'subheading',
        text: 'Do Use: Brackets'
      },
      {
        type: 'paragraph',
        text: 'Brackets [like this] highlight key information and create visual interest.'
      },
      {
        type: 'list',
        items: [
          '"[New] 5 tips for your business"',
          '"[Inside] Your exclusive discount"',
          '"[Webinar] Learn email marketing secrets"',
          '"[Last Chance] 24 hours remaining"'
        ]
      },
      {
        type: 'subheading',
        text: 'Don\'t Use: ALL CAPS'
      },
      {
        type: 'paragraph',
        text: 'All caps looks like spam and is hard to read. Use them sparingly for emphasis only.'
      },
      {
        type: 'box',
        typeBox: 'warning',
        title: '⚠️ Spam Risk',
        text: 'Subject lines in ALL CAPS are 30% more likely to trigger spam filters. Never use them.'
      },
      {
        type: 'subheading',
        text: 'Don\'t Use: Excessive Punctuation'
      },
      {
        type: 'paragraph',
        text: 'Multiple exclamation marks, question marks, or ellipses look desperate and spammy.'
      },
      {
        type: 'list',
        items: [
          '❌ "FREE!!! FREE!!! FREE!!!"',
          '❌ "Check this out............"',
          '❌ "What??? No way!!!"',
          '✅ "Free shipping on your order"',
          '✅ "New products available now"'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Subject Line Examples by Campaign Type'
      },
      {
        type: 'subheading',
        text: 'Welcome Emails'
      },
      {
        type: 'list',
        items: [
          '"Welcome to MarketingCompare, [Name]! 🎉"',
          '"You\'re in! Here\'s what\'s next..."',
          '"Ready to transform your marketing? Let\'s go!"',
          '"[Welcome] Your exclusive 20% discount inside"'
        ]
      },
      {
        type: 'subheading',
        text: 'Promotional Emails'
      },
      {
        type: 'list',
        items: [
          '"[Flash Sale] 24 hours only - 30% off"',
          '"Last chance: Your 20% discount expires tonight ⏰"',
          '"New arrival: These 5 products are selling fast 🔥"',
          '"[VIP Access] Your private sale starts now"'
        ]
      },
      {
        type: 'subheading',
        text: 'Newsletter Emails'
      },
      {
        type: 'list',
        items: [
          '"5 email strategies you\'re not using"',
          '"This week\'s top marketing stories"',
          '"[Issue #47] What\'s new in email marketing"',
          '"Quick read: 3 tips for better conversions"'
        ]
      },
      {
        type: 'subheading',
        text: 'Abandoned Cart Emails'
      },
      {
        type: 'list',
        items: [
          '"Did you forget something? 🛒"',
          '"[Reminder] Your cart is expiring soon"',
          '"Still thinking? Here\'s 10% off to help"',
          '"[Last Chance] Your cart items are reserved for 2 hours"'
        ]
      },
      {
        type: 'subheading',
        text: 'Re-engagement Emails'
      },
      {
        type: 'list',
        items: [
          '"[Name], are you still there?"',
          '"We miss you! Here\'s 25% off to come back"',
          '"New inside! 3 things you\'ve missed"',
          '"[Important] Your account will be closed in 7 days"'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'A/B Test Your Subject Lines'
      },
      {
        type: 'paragraph',
        text: 'Don\'t guess what works. Test different approaches with your specific audience.'
      },
      {
        type: 'subheading',
        text: 'What to Test'
      },
      {
        type: 'list',
        items: [
          'Personalization: Name vs. no name',
          'Length: Short vs. long',
          'Tone: Casual vs. professional vs. urgent',
          'Content: Benefit-focused vs. curiosity-driven',
          'Emojis: With vs. without',
          'Numbers: "5 tips" vs. "tips"',
          'Questions: "Ready?" vs. statement',
          'Brackets: [New] vs. no brackets'
        ]
      },
      {
        type: 'subheading',
        text: 'How to Test'
      },
      {
        type: 'paragraph',
        text: 'Use your email platform\'s A/B testing feature or manually split your list.'
      },
      {
        type: 'list',
        items: [
          'Send test to 10-20% of your list',
          'Wait 24-48 hours for opens to accumulate',
          'Track open rates (primary metric)',
          'Send winning version to remaining list',
          'Document what worked and why'
        ]
      },
      {
        type: 'box',
        typeBox: 'tip',
        title: '💡 Minimum Sample Size',
        text: 'For statistical significance, test with at least 1,000 subscribers per variant. Smaller lists? Use 20-30% of total list.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Common Subject Line Mistakes'
      },
      {
        type: 'list',
        items: [
          'Misleading clickbait: damages trust, increases unsubscribes',
          'Generic content: "Monthly newsletter" gets ignored',
          'Spammy words: FREE, GUARANTEE, WINNER trigger filters',
          'Vague promises: "Something special" leaves readers confused',
          'Self-serving: "Check out our products" focuses on you, not them',
          'No testing: Doing the same thing forever means you\'re not optimizing'
        ]
      },
      {
        type: 'box',
        typeBox: 'warning',
        title: '⚠️ Clickbait Warning',
        text: 'Clickbait works for opens, but destroys engagement and trust. Long-term, it reduces overall effectiveness. Be honest and valuable.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Tools for Subject Line Testing'
      },
      {
        type: 'subheading',
        text: 'Email Platform Features'
      },
      {
        type: 'paragraph',
        text: 'Most platforms have built-in A/B testing. Use it!'
      },
      {
        type: 'list',
        items: [
          'Mailchimp: Built-in testing for subject lines',
          'Klaviyo: Automated A/B with winner selection',
          'Omnisend: Subject line and content testing',
          'ActiveCampaign: Advanced testing scenarios',
          'Brevo: Basic testing (upgrade required)'
        ]
      },
      {
        type: 'subheading',
        text: 'Third-Party Tools'
      },
      {
        type: 'paragraph',
        text: 'External tools can help predict subject line performance.'
      },
      {
        type: 'list',
        items: [
          'SubjectLine.com: AI-powered subject line scoring',
          'CoSchedule Headline Analyzer: Tests emotional impact',
          'SendCheck.io: Spam score and deliverability prediction',
          'Email on Acid: Preview across devices and clients'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Quick Reference Checklist'
      },
      {
        type: 'list',
        items: [
          'Keep it under 50 characters for mobile (most opens)',
          'Use personalization (first name or company)',
          'Include numbers or lists when appropriate',
          'Use 1-2 emojis strategically',
          'Create urgency only when real',
          'Ask questions to engage curiosity',
          'Test variations to find what works',
          'Avoid ALL CAPS and excessive punctuation',
          'Preview before sending (check on mobile)'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Getting Started'
      },
      {
        type: 'box',
        typeBox: 'stat',
        title: '🎯 First Test to Run',
        text: 'Test personalization vs. no personalization. It\'s the easiest win with clear impact. Add [First Name] to 50% of sends and compare open rates.'
      }
    ]
  }
}
}

export default function GuidePage({ params }: GuidePageProps) {
  const guide = guides[params.slug]

  if (!guide) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Guide not found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Return home
          </Link>
        </div>
      </div>
    )
  }

  const renderContent = (content: any[]) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'heading':
          const HeadingTag = `h${item.level}` as keyof JSX.IntrinsicElements
          return (
            <HeadingTag key={index} className={`text-${item.level === 2 ? '3xl' : '2xl'} font-bold text-gray-900 mb-4 mt-8`}>
              {item.text}
            </HeadingTag>
          )
        case 'subheading':
          return <h3 key={index} className="text-xl font-bold text-gray-900 mb-3 mt-6">{item.text}</h3>
        case 'paragraph':
          return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{item.text}</p>
        case 'list':
          return (
            <ul key={index} className="space-y-2 mb-6">
              {item.items.map((listItem: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{listItem}</span>
                </li>
              ))}
              {item.stat && (
                <div className="mt-4 text-sm text-gray-500 italic bg-gray-50 p-3 rounded">
                  {item.stat}
                </div>
              )}
            </ul>
          )
        case 'box':
          const boxStyles = {
            tip: 'bg-blue-50 border-l-4 border-blue-500',
            example: 'bg-gray-50 border-l-4 border-gray-500',
            stat: 'bg-green-50 border-l-4 border-green-500',
            warning: 'bg-red-50 border-l-4 border-red-500'
          }
          return (
            <div key={index} className={`${boxStyles[item.typeBox as keyof typeof boxStyles]} p-4 mb-6 rounded-r`}>
              <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
              <div className="text-gray-700">{item.text}</div>
            </div>
          )
        default:
          return null
      }
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MarketingCompare
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
              <Link href="/guides" className="text-blue-600 font-medium">
                Guides
              </Link>
              <Link href="/compare" className="text-gray-600 hover:text-blue-600">
                Compare
              </Link>
              <Link href="/deals" className="text-gray-600 hover:text-blue-600">
                Deals
              </Link>
              <Link href="/chat" className="text-gray-600 hover:text-blue-600">
                AI Chat
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/guides" className="text-blue-600 hover:text-blue-800">
            Guides
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">{guide.title}</span>
        </nav>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {guide.category}
            </span>
            <span className="text-gray-500 text-sm">
              {guide.lastUpdated} • {guide.readTime}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">{guide.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{guide.description}</p>

          <hr className="border-gray-200 mb-8" />

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {renderContent(guide.content)}
          </div>
        </article>

        {/* CTA */}
        <div className="bg-gray-50 rounded-lg p-8 text-center mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Your Perfect Platform</h2>
          <p className="text-gray-600 mb-6">
            Use our tools to compare email marketing platforms and find the best fit for your business.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/compare"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Compare Platforms
            </Link>
            <Link
              href="/chat"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get AI Recommendations
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 MarketingCompare. Compare with confidence.</p>
        </div>
      </footer>
    </div>
  )
}
