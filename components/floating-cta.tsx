'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { useAnalytics } from "@/hooks/useAnalytics"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const { trackCTAClick } = useAnalytics()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      // Show after user scrolls 50% of the viewport
      if (scrollPosition > windowHeight * 0.5 && !isDismissed) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  if (!isVisible || isDismissed) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <div className="bg-gradient-to-r from-tiffany-500 to-tiffany-600 text-black-900 rounded-2xl shadow-2xl border border-tiffany-400/20 overflow-hidden max-w-sm">
        <div className="relative p-6">
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-2 right-2 text-black-800 hover:text-black-900 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="pr-8">
            <div className="text-sm font-semibold mb-1 tracking-wide">
              💡 FREE STRATEGY SESSION
            </div>
            <div className="text-xs mb-3 text-black-800">
              See how we can save you $50K-$200K annually
            </div>
            
            <Link
              href="https://calendly.com/innovationsynergyai/30-minute-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackCTAClick('Floating CTA Strategy Session', 500, 'floating_cta')
                setIsDismissed(true)
              }}
              className="inline-block bg-black-900 text-tiffany-400 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-black-800 transition-colors duration-300 tracking-wide uppercase"
            >
              CLAIM YOURS →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}