'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I\'m your AI assistant for comparing marketing platforms. Tell me about your business size, budget, or what features matter most to you, and I\'ll help you find the perfect match. 💪'
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes('ecommerce') || lowerMessage.includes('shopify') || lowerMessage.includes('online store')) {
      return 'For e-commerce, I\'d recommend **Klaviyo** or **Omnisend** as top choices:\n\n🚀 **Klaviyo** - Best for serious e-commerce brands\n- Real-time e-commerce sync\n- Advanced segmentation\n- Strong revenue attribution\n\n💼 **Omnisend** - Great for smaller stores\n- Budget-friendly pricing\n- Easy setup\n- Ready-made automation templates\n\nWhat\'s your monthly budget?'
    }

    if (lowerMessage.includes('budget') || lowerMessage.includes('cheap') || lowerMessage.includes('affordable')) {
      return 'Based on budget, here are my recommendations:\n\n💰 **Brevo (Sendinblue)** - Free tier available\n- Generous free plan\n- Multi-channel (email + SMS + chat)\n- Good for startups\n\n💸 **Mailchimp** - Beginner-friendly\n- Free plan for up to 500 contacts\n- Easy to use\n- Great templates\n\n💵 **Privy** - E-commerce focus\n- Free tier\n- Great pop-ups for lead capture\n- Simple pricing\n\nAre you looking for something free or willing to spend around $50/month?'
    }

    if (lowerMessage.includes('enterprise') || lowerMessage.includes('large') || lowerMessage.includes('scale')) {
      return 'For enterprise or large teams, I\'d recommend:\n\n🎯 **Braze** - Top-tier for enterprise\n- Canvas journey builder\n- Real-time data streaming\n- Advanced segmentation\n- Unlimited scale\n\n🏢 **HubSpot Marketing Hub** - Complete platform\n- Full CRM integration\n- All-in-one solution\n- Extensive ecosystem\n\n⚡ **Customer.io** - Developer-friendly\n- Powerful API\n- Custom workflows\n- Product-led growth focus\n\nWhat\'s your main concern - integration complexity or budget?'
    }

    if (lowerMessage.includes('feature') || lowerMessage.includes('automation') || lowerMessage.includes('segmentation')) {
      return 'When it comes to advanced features:\n\n🔄 **ActiveCampaign** - Automation king\n- Visual automation builder\n- Complex workflows\n- Lead scoring\n- Built-in CRM\n\n📊 **Klaviyo** - Segmentation powerhouse\n- Deep e-commerce data\n- RFM analysis\n- Behavioral targeting\n\n🎨 **Braze** - Canvas workflows\n- Multi-channel orchestration\n- Journey branching\n- Real-time triggers\n\nWhich feature matters most - automation depth or channel variety?'
    }

    if (lowerMessage.includes('compare') || lowerMessage.includes('vs')) {
      return 'Here\'s a quick comparison of popular platforms:\n\n**Klaviyo vs. Omnisend:**\n- Klaviyo: More advanced, better for growth\n- Omnisend: Simpler, more affordable\n\n**Mailchimp vs. ActiveCampaign:**\n- Mailchimp: Easier, better templates\n- ActiveCampaign: More automation power\n\n**HubSpot vs. Customer.io:**\n- HubSpot: Complete ecosystem, CRM included\n- Customer.io: More developer-focused, behavioral\n\nWhich comparison would you like me to dive deeper into?'
    }

    // Default response
    return 'I\'d be happy to help you compare! To give you the best recommendation, could you tell me:\n\n1. 📊 What\'s your business type? (e-commerce, SaaS, service, etc.)\n2. 💰 What\'s your monthly budget?\n3. 📈 How big is your contact list?\n4. 🎯 What channels do you need? (email, SMS, push, etc.)\n\nOr just describe what you\'re looking for and I\'ll match you with the right platforms!'
  }

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const assistantResponse: Message = {
        role: 'assistant',
        content: generateResponse(input)
      }
      setMessages(prev => [...prev, assistantResponse])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MarketingCompare
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Compare
              </Link>
              <Link href="/deals" className="text-gray-600 hover:text-blue-600">
                Deals
              </Link>
              <Link href="/chat" className="text-blue-600 font-semibold">
                AI Chat
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Marketing Assistant</h1>
          <p className="text-gray-600">Get personalized recommendations powered by AI</p>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.content}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 rounded-lg px-4 py-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tell me about your business needs..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={isTyping || !input.trim()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
            >
              Send
            </button>
          </form>
        </div>

        <p className="text-center text-gray-500 text-sm mt-4">
          🔒 Your conversations are private. All AI processing happens in your browser.
        </p>
      </div>
    </div>
  )
}
