"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineAll = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black-900 border-t border-neutral-800 p-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex-1">
            <h3 className="text-white-50 font-semibold mb-2 text-sm">Cookie & Privacy Notice</h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Innovation Synergy AI uses cookies to enhance your experience and analyze site usage. 
              We respect your privacy and comply with all applicable American data protection laws. 
              By clicking "Accept All," you consent to our use of cookies for analytics and marketing.{" "}
              <Link href="/cookie-policy" className="text-tiffany-500 hover:text-tiffany-400 underline">
                Learn more about our cookie policy
              </Link>
              .
            </p>
          </div>
          <div className="flex space-x-4">
            <Button
              onClick={declineAll}
              className="border border-neutral-600 text-neutral-300 bg-transparent font-medium px-6 py-2 rounded-none hover:bg-neutral-800 hover:text-white-50 transition-all duration-300 text-sm"
            >
              Decline All
            </Button>
            <Button
              onClick={acceptAll}
              className="bg-tiffany-500 text-black-900 font-semibold px-6 py-2 rounded-none hover:bg-tiffany-400 transition-all duration-300 text-sm"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}