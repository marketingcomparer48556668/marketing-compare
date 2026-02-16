const fs = require('fs');

const filePath = './app/guides/[slug]/page.tsx';
const newGuide = `  'email-subject-line-best-practices': {
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
        text: '"You won\\'t believe this..." vs. "Check out our new products"'
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
          '"Don\\'t miss this limited offer"'
        ]
      },
      {
        type: 'box',
        typeBox: 'warning',
        title: '⚠️ Use Sparingly',
        text: 'Urgency works, but overuse it and you\\'ll lose trust. Only use when truly limited.'
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
          '"Hi John, here\\'s your exclusive offer"',
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
        text: 'Don\\'t Use: ALL CAPS'
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
        text: 'Don\\'t Use: Excessive Punctuation'
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
          '"You\\'re in! Here\\'s what\\'s next..."',
          '"Ready to transform your marketing? Let\\'s go!"',
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
          '"5 email strategies you\\'re not using"',
          '"This week\\'s top marketing stories"',
          '"[Issue #47] What\\'s new in email marketing"',
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
          '"Still thinking? Here\\'s 10% off to help"',
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
          '"We miss you! Here\\'s 25% off to come back"',
          '"New inside! 3 things you\\'ve missed"',
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
        text: 'Don\\'t guess what works. Test different approaches with your specific audience.'
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
        text: 'Use your email platform\\'s A/B testing feature or manually split your list.'
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
          'No testing: Doing the same thing forever means you\\'re not optimizing'
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
        text: 'Test personalization vs. no personalization. It\\'s the easiest win with clear impact. Add [First Name] to 50% of sends and compare open rates.'
      }
    ]
  }`;

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    process.exit(1);
  }

  // Find the position before the last closing brace
  const lastBracePosition = data.lastIndexOf('  }\n}\n');

  if (lastBracePosition === -1) {
    console.error('Could not find the right position');
    process.exit(1);
  }

  // Insert the new guide before the last closing braces
  const newData = data.slice(0, lastBracePosition) + ',\n' + newGuide + '\n}' + data.slice(lastBracePosition + 3);

  fs.writeFile(filePath, newData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      process.exit(1);
    }
    console.log('New guide added successfully!');
  });
});
