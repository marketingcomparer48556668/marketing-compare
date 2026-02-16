'use client'

import { useState } from 'react'

interface EmailCaptureProps {
  title?: string
  subtitle?: string
  buttonText?: string
  placeholder?: string
  variant?: 'banner' | 'card' | 'inline'
  onCapture?: (email: string) => void
}

export default function EmailCapture({
  title = 'Get Email Marketing Tips & Deals',
  subtitle = 'Join 10,000+ marketers. Weekly tips, platform updates, and exclusive deals.',
  buttonText = 'Subscribe',
  placeholder = 'Enter your email',
  variant = 'card',
  onCapture
}: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('submitting')
    setMessage('')

    try {
      // TODO: Integrate with email service (SendGrid, Mailchimp, etc.)
      // For now, just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000))

      setStatus('success')
      setMessage('Check your inbox to confirm your subscription!')
      setEmail('')

      // Call custom handler if provided
      if (onCapture) {
        onCapture(email)
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  if (variant === 'banner') {
    return (
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="opacity-90">{subtitle}</p>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                className="flex-1 md:w-80 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                disabled={status === 'submitting' || status === 'success'}
              />
              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 whitespace-nowrap"
              >
                {status === 'submitting' ? 'Subscribing...' : buttonText}
              </button>
            </form>
          </div>
          {message && (
            <div className={`mt-4 text-sm ${status === 'success' ? 'opacity-90' : 'bg-red-100 text-red-700 px-4 py-2 rounded-lg'}`}>
              {message}
            </div>
          )}
        </div>
      </div>
    )
  }

  if (variant === 'card') {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{subtitle}</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={status === 'submitting' || status === 'success'}
            />
            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {status === 'submitting' ? 'Subscribing...' : buttonText}
            </button>
          </div>
          {message && (
            <div className={`mt-4 text-sm p-3 rounded-lg ${status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {message}
            </div>
          )}
          <p className="mt-4 text-xs text-gray-500">
            No spam ever. Unsubscribe anytime. We respect your privacy.
          </p>
        </form>
      </div>
    )
  }

  // Default: inline variant
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{subtitle}</p>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            disabled={status === 'submitting' || status === 'success'}
          />
          <button
            type="submit"
            disabled={status === 'submitting' || status === 'success'}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 text-sm"
          >
            {status === 'submitting' ? '...' : buttonText}
          </button>
        </div>
        {message && (
          <div className={`mt-3 text-xs p-2 rounded ${status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}
      </form>
    </div>
  )
}
