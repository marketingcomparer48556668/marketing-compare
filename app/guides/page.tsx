import Link from 'next/link'

const guides = [
  {
    slug: 'how-to-choose-email-marketing-software',
    title: 'How to Choose Email Marketing Software for Your Business',
    description: 'A complete guide to selecting the right email marketing platform. Compare features, pricing, and find the perfect fit for your needs.',
    category: 'Getting Started',
    readTime: '12 min read',
    lastUpdated: 'February 2025',
    featured: true
  },
  {
    slug: 'email-marketing-pricing-guide',
    title: 'Email Marketing Pricing Guide: What You Should Pay',
    description: 'Understanding email marketing pricing models, hidden costs, and how to budget for your email marketing platform.',
    category: 'Pricing',
    readTime: '10 min read',
    lastUpdated: 'February 2025',
    featured: true
  },
  {
    slug: 'ecommerce-email-marketing-guide',
    title: 'E-commerce Email Marketing: Complete Setup Guide',
    description: 'A comprehensive guide to setting up email marketing for e-commerce. Learn about abandoned cart, welcome flows, and revenue-driving campaigns.',
    category: 'E-commerce',
    readTime: '15 min read',
    lastUpdated: 'February 2025',
    featured: true
  },
  {
    slug: 'klaviyo-vs-omnisend-ecommerce-automation',
    title: 'Klaviyo vs Omnisend: E-commerce Automation Showdown',
    description: 'Deep dive comparison of Klaviyo and Omnisend automation features. Which platform delivers better e-commerce email marketing results?',
    category: 'Platform Comparison',
    readTime: '15 min read',
    lastUpdated: 'February 2025',
    featured: true
  },
  {
    slug: 'best-email-platforms-small-business-2025',
    title: 'Best Email Marketing Platforms for Small Business in 2025',
    description: 'Complete guide to choosing email marketing software for small businesses. Compare Mailchimp, Brevo, Omnisend, and more based on features, pricing, and ease of use.',
    category: 'Small Business',
    readTime: '18 min read',
    lastUpdated: 'February 2025',
    featured: false
  },
  {
    slug: 'mailchimp-vs-activecampaign-automation',
    title: 'Mailchimp vs ActiveCampaign: Automation Face-Off',
    description: 'Compare Mailchimp and ActiveCampaign automation features. Which platform delivers better customer journeys and marketing workflows?',
    category: 'Platform Comparison',
    readTime: '14 min read',
    lastUpdated: 'February 2025',
    featured: false
  },
  {
    slug: 'email-deliverability-complete-guide',
    title: 'Email Deliverability: The Complete Guide',
    description: 'Everything you need to know about email deliverability. Learn how to ensure your emails reach the inbox, not spam folders.',
    category: 'Technical',
    readTime: '20 min read',
    lastUpdated: 'February 2025',
    featured: false
  },
  {
    slug: 'ab-testing-email-marketing-best-practices',
    title: 'A/B Testing in Email Marketing: Best Practices',
    description: 'Learn how to run effective A/B tests for your email campaigns. Discover what to test, how to analyze results, and improve your email marketing performance.',
    category: 'Optimization',
    readTime: '16 min read',
    lastUpdated: 'February 2025',
    featured: false
  },
  {
    slug: 'email-subject-line-best-practices',
    title: 'Email Subject Line Best Practices: Boost Open Rates',
    description: 'Master email subject lines with proven best practices. Learn psychological triggers, formatting tips, and real examples that drive higher open rates.',
    category: 'Optimization',
    readTime: '14 min read',
    lastUpdated: 'February 2025',
    featured: true
  }
]

export default function GuidesPage() {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Email Marketing Guides</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert guides to help you choose, set up, and optimize your email marketing strategy.
          </p>
        </div>

        {/* Featured Guides */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.filter(g => g.featured).map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 block"
              >
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium inline-block mb-3">
                  {guide.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{guide.readTime}</span>
                  <span>{guide.lastUpdated}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Guides */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Guides</h2>
          <div className="grid grid-cols-1 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all flex items-start gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {guide.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-gray-600 mb-2">{guide.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>📖 {guide.readTime}</span>
                    <span>📅 {guide.lastUpdated}</span>
                  </div>
                </div>
                <div className="text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 mt-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="opacity-90 mb-6">
            Our AI assistant can help you find the perfect email marketing platform for your needs.
          </p>
          <Link
            href="/chat"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Talk to AI Assistant
          </Link>
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
