'use client'

import { useState } from 'react'
import Link from 'next/link'

type EmailCaptureProps = {
  variant?: 'banner' | 'inline' | 'modal'
  title?: string
  description?: string
  cta?: string
  showDismiss?: boolean
}

export default function EmailCapture({
  variant = 'inline',
  title = "Get the Best Email Platform Recommendations",
  description = "Weekly tips, exclusive deals, and platform comparisons delivered to your inbox.",
  cta = "Subscribe Now",
  showDismiss = true
}: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  if (isDismissed) return null

  if (isSubmitted) {
    return (
      <div className={`${
        variant === 'banner'
          ? 'bg-green-50 border-b border-green-200'
          : 'bg-green-50 border border-green-200'
      } rounded-lg p-6`}>
        <div className="flex items-center gap-3">
          <div className="text-green-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-green-900">You're on the list!</h3>
            <p className="text-green-700 text-sm">Check your inbox for a confirmation email.</p>
          </div>
        </div>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // TODO: Integrate with actual email service
    console.log('Email submitted:', email)

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleDismiss = () => {
    setIsDismissed(true)
    // Optionally save to localStorage to not show again
    localStorage.setItem('email-capture-dismissed', 'true')
  }

  const BannerContent = () => (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm opacity-90">{description}</p>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 sm:w-64 px-4 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {isSubmitting ? 'Subscribing...' : cta}
            </button>
          </form>
          {showDismiss && (
            <button
              onClick={handleDismiss}
              className="text-white/70 hover:text-white"
              aria-label="Dismiss"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  )

  const InlineContent = () => (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            {isSubmitting ? 'Subscribing...' : cta}
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          By subscribing, you agree to our{' '}
          <Link href="#" className="text-blue-600 hover:underline">Privacy Policy</Link>
          {' '}and{' '}
          <Link href="#" className="text-blue-600 hover:underline">Terms of Service</Link>
        </p>
      </form>
      {showDismiss && (
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          aria-label="Dismiss"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )

  if (variant === 'banner') {
    return <BannerContent />
  }

  return (
    <div className="relative">
      <InlineContent />
    </div>
  )
}
