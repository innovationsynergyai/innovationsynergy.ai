import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"

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

  return (
    <Card className={cardClasses} {...props}>
      {badge && (
        <div
          className={cn(
            "absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold uppercase rounded-full",
            {
              "bg-tiffany-500 text-black-900": variant === "featured",
            },
          )}
        >
          {badge}
        </div>
      )}
      <CardHeader className="pb-6 text-center">
        <CardTitle
          className={cn("font-display text-4xl font-light", variant === "default" ? "text-black-900" : "text-white-50")}
        >
          {name}
        </CardTitle>
        <CardDescription className={cn("text-lg", variant === "default" ? "text-neutral-600" : "text-neutral-300")}>
          {description}
        </CardDescription>
        <div className={cn("text-5xl font-bold mt-4", variant === "default" ? "text-black-900" : "text-tiffany-500")}>
          {price}
          <span className="text-xl font-normal">/{period}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3 text-left">
          {features.map((feature, index) => (
            <li
              key={index}
              className={cn("flex items-center", variant === "default" ? "text-neutral-700" : "text-neutral-300")}
            >
              <CheckIcon className={cn("mr-3 h-5 w-5", variant === "default" ? "text-black-900" : "text-tiffany-500")} />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-6">
        <Button asChild className={buttonClasses}>
          <Link href={paymentUrl} target="_blank" rel="noopener noreferrer">
            {cta}
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
    <section id="investment-packages" className="py-32 bg-black-900 text-white-50">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-tiffany-500 text-xs font-semibold tracking-[0.3em] uppercase text-center mb-6">
          AI INFRASTRUCTURE INVESTMENT PACKAGES
        </p>
        <h2 className="font-display text-5xl md:text-7xl font-light text-center mb-8">AI Infrastructure Packages</h2>
        <p className="text-xl md:text-2xl text-neutral-300 text-center mb-24 font-light">
          Comprehensive AI consulting services for American small businesses
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PricingCard key={pkg.id} {...pkg} />
          ))}
        </div>

        <div className="mt-24 text-center animate-fade-in-up stagger-600">
          <p className="text-neutral-400 text-sm tracking-wide mb-6">
            ALL PACKAGES INCLUDE 30-DAY SATISFACTION GUARANTEE
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h4 className="text-tiffany-500 font-semibold mb-2 uppercase tracking-wide text-sm">Remote Install</h4>
              <p className="text-neutral-300 text-sm">Complete setup without on-site visits</p>
            </div>
            <div className="text-center">
              <h4 className="text-tiffany-500 font-semibold mb-2 uppercase tracking-wide text-sm">Compliance Ready</h4>
              <p className="text-neutral-300 text-sm">Built for American business standards</p>
            </div>
            <div className="text-center">
              <h4 className="text-tiffany-500 font-semibold mb-2 uppercase tracking-wide text-sm">24/7 Support</h4>
              <p className="text-neutral-300 text-sm">American-based support team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}