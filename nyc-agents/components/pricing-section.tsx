'use client'

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAnalytics } from "@/hooks/useAnalytics"
import LoadingState, { ButtonLoadingState } from "@/components/LoadingState"
import { useState } from "react"

interface PricingCardProps extends React.ComponentPropsWithoutRef<typeof Card> {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  paymentUrl: string
  variant?: "default" | "featured" | "premium" | "dark"
  badge?: string
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  paymentUrl,
  variant = "default",
  badge,
  className,
  ...props
}: PricingCardProps) {
  const { trackPricingSelection } = useAnalytics()
  const [isLoading, setIsLoading] = useState(false)
  
  const handlePricingClick = () => {
    setIsLoading(true)
    // Extract numeric price value for tracking
    const numericPrice = parseInt(price.replace(/[$,]/g, ''))
    trackPricingSelection(name, numericPrice)
  }
  const cardClasses = cn(
    "p-8 flex flex-col h-full relative",
    {
      "bg-white-50 border border-neutral-200 hover:shadow-xl transition-all duration-300": variant === "default",
      "bg-black-900 text-white-50 border-2 border-tiffany-500 hover:shadow-2xl transition-all duration-300":
        variant === "featured",
      "bg-black-900 text-white-50 border border-tiffany-500 hover:shadow-2xl transition-all duration-300":
        variant === "premium",
      "bg-black-900 text-white-50 border border-tiffany-500 p-8 hover:shadow-2xl transition-all duration-300":
        variant === "dark",
    },
    className,
  )

  const buttonClasses = cn(
    "font-semibold px-8 py-4 rounded-none transition-all duration-300 tracking-wide uppercase text-sm mt-auto w-full",
    {
      "bg-tiffany-500 text-black-900 hover:bg-gold-400": true,
    },
  )

  const cardId = `pricing-${name.toLowerCase()}`
  const priceId = `price-${name.toLowerCase()}`
  const featuresId = `features-${name.toLowerCase()}`

  return (
    <Card 
      className={cardClasses} 
      {...props}
      role="region"
      aria-labelledby={cardId}
      aria-describedby={`${priceId} ${featuresId}`}
    >
      {badge && (
        <div
          className={cn(
            "absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold uppercase rounded-full",
            {
              "bg-tiffany-500 text-black-900": variant === "featured",
            },
          )}
          role="img"
          aria-label={`${badge} pricing package`}
        >
          {badge}
        </div>
      )}
      <CardHeader className="pb-6 text-center">
        <CardTitle
          id={cardId}
          className={cn("font-display text-4xl font-light", variant === "default" ? "text-black-900" : "text-white-50")}
        >
          {name} Package
        </CardTitle>
        <CardDescription className={cn("text-lg", variant === "default" ? "text-neutral-600" : "text-neutral-300")}>
          {description}
        </CardDescription>
        <div 
          id={priceId}
          className={cn("text-5xl font-bold mt-4", variant === "default" ? "text-black-900" : "text-tiffany-500")}
          aria-label={`${price.replace(/[$,]/g, '')} dollars per ${period}`}
        >
          {price}
          <span className="text-xl font-normal" aria-hidden="true">/{period}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul 
          id={featuresId}
          className="space-y-3 text-left"
          role="list"
          aria-label={`Features included in ${name} package`}
        >
          {features.map((feature, index) => (
            <li
              key={index}
              className={cn("flex items-center", variant === "default" ? "text-neutral-700" : "text-neutral-300")}
              role="listitem"
            >
              <CheckIcon 
                className={cn("mr-3 h-5 w-5", variant === "default" ? "text-black-900" : "text-tiffany-500")} 
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-6">
        <Button 
          asChild 
          className={cn(
            buttonClasses,
            "focus:outline-none focus:ring-2 focus:ring-tiffany-400 focus:ring-offset-2",
            variant === "default" ? "focus:ring-offset-white" : "focus:ring-offset-black-900"
          )} 
          disabled={isLoading}
          onClick={handlePricingClick}
        >
          <Link 
            href={paymentUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`${cta} - ${name} package for ${price} per ${period} - Opens booking calendar in new window`}
            aria-describedby={`${priceId} ${featuresId}`}
          >
            <ButtonLoadingState isLoading={isLoading} loadingText="Opening Calendar...">
              {cta}
            </ButtonLoadingState>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function PricingSection() {
  const packages = [
    {
      id: "foundation",
      name: "Foundation",
      price: "$3,497",
      period: "month",
      description: "Small businesses ready for AI transformation",
      features: [
        "AI infrastructure assessment",
        "Voice agent implementation",
        "Basic automation setup", 
        "Customer service optimization",
        "Remote installation & training",
        "Email & phone support",
      ],
      cta: "START TRANSFORMATION",
      paymentUrl: "https://calendly.com/innovationsynergyai/30-minute-discovery-call",
      variant: "dark",
      className: "animate-fade-in-up stagger-0",
    },
    {
      id: "professional",
      name: "Professional", 
      price: "$6,997",
      period: "month",
      description: "Growing businesses seeking competitive advantage",
      features: [
        "Complete infrastructure overhaul",
        "Custom voice AI personality",
        "Multi-channel integration",
        "Advanced workflow automation",
        "Data enrichment systems",
        "Priority support & account manager",
        "Monthly optimization reviews",
      ],
      cta: "ACCELERATE GROWTH",
      paymentUrl: "https://calendly.com/innovationsynergyai/30-minute-discovery-call", 
      variant: "featured",
      badge: "MOST POPULAR",
      className: "animate-fade-in-up stagger-200",
    },
    {
      id: "elite",
      name: "Elite",
      price: "$12,997",
      period: "month", 
      description: "Enterprise-level American businesses",
      features: [
        "White-glove enterprise deployment",
        "Custom AI ecosystem development",
        "Proprietary voice synthesis",
        "Advanced compliance integration",
        "24/7 dedicated support team",
        "Quarterly strategy sessions",
        "Custom feature development",
        "Multi-location deployment",
      ],
      cta: "DOMINATE YOUR MARKET",
      paymentUrl: "https://calendly.com/innovationsynergyai/30-minute-discovery-call",
      variant: "premium",
      className: "animate-fade-in-up stagger-400",
    },
  ]

  return (
    <section 
      id="investment-packages" 
      className="py-32 bg-black-900 text-white-50"
      aria-label="AI Infrastructure Investment Packages"
      role="region"
    >
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <p 
          className="text-tiffany-500 text-xs font-semibold tracking-[0.3em] uppercase text-center mb-6"
          role="text"
        >
          AI INFRASTRUCTURE INVESTMENT PACKAGES
        </p>
        <h2 
          className="font-display text-5xl md:text-7xl font-light text-center mb-8"
          id="pricing-title"
        >
          AI Infrastructure Packages
        </h2>
        <p 
          className="text-xl md:text-2xl text-neutral-300 text-center mb-8 font-light"
          aria-describedby="pricing-title"
        >
          Comprehensive AI consulting services for American small businesses
        </p>
        
        {/* Subtle Urgency Indicator */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-900 bg-opacity-20 border border-red-800 text-red-400 px-4 py-2 rounded-full text-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
            <span>Limited Implementation Slots Available This Quarter</span>
          </div>
          <p className="text-neutral-500 text-sm mt-2">
            Our implementation team is currently booking 6-8 weeks out
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="group"
          aria-label="Available pricing packages"
        >
          {packages.map((pkg) => (
            <PricingCard key={pkg.id} {...pkg} />
          ))}
        </div>

        <div className="mt-20 text-center animate-fade-in-up stagger-600">
          {/* Enhanced Guarantee Section */}
          <div className="bg-tiffany-500 bg-opacity-10 border border-tiffany-500 rounded-lg p-8 mb-12">
            <h3 className="text-tiffany-500 text-2xl font-bold mb-4">Complete Risk Reversal Guarantee</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              <div>
                <h4 className="text-white-50 font-semibold mb-2">✓ 30-Day Money Back</h4>
                <p className="text-neutral-300 text-sm">Full refund if not completely satisfied</p>
              </div>
              <div>
                <h4 className="text-white-50 font-semibold mb-2">✓ ROI Guarantee</h4>
                <p className="text-neutral-300 text-sm">We work for free until you see results</p>
              </div>
              <div>
                <h4 className="text-white-50 font-semibold mb-2">✓ Implementation Promise</h4>
                <p className="text-neutral-300 text-sm">On-time delivery or next month is free</p>
              </div>
              <div>
                <h4 className="text-white-50 font-semibold mb-2">✓ Success Assurance</h4>
                <p className="text-neutral-300 text-sm">98% success rate backed by results</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <h4 className="text-tiffany-500 font-semibold mb-2 uppercase tracking-wide text-sm">Remote Install</h4>
              <p className="text-neutral-300 text-sm">Complete setup without on-site visits</p>
            </div>
            <div className="text-center">
              <h4 className="text-tiffany-500 font-semibold mb-2 uppercase tracking-wide text-sm">Compliance Ready</h4>
              <p className="text-neutral-300 text-sm">Built for business regulatory standards</p>
            </div>
            <div className="text-center">
              <h4 className="text-tiffany-500 font-semibold mb-2 uppercase tracking-wide text-sm">24/7 Support</h4>
              <p className="text-neutral-300 text-sm">Dedicated US-based support team</p>
            </div>
          </div>

          {/* Limited Time Indicator */}
          <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold">Implementation Slots Available</span>
            </div>
            <p className="text-neutral-300 text-sm mb-4">
              Secure your spot for Q1 2025 implementation. Next availability: Q2 2025
            </p>
            <div className="flex justify-center space-x-8 text-sm text-neutral-400">
              <span>Foundation: 2 slots remaining</span>
              <span>Professional: 1 slot remaining</span>
              <span>Elite: 3 slots remaining</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}