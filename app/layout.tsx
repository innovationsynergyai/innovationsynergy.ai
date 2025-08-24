import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsentBanner from "@/components/cookie-consent-banner"
import Analytics from "@/components/Analytics"
import ErrorBoundary from "@/components/ErrorBoundary"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
})

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#81D8D0' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ]
}

export const metadata: Metadata = {
  title: "Innovation Synergy AI - American Small Business AI Infrastructure | Voice Agents & Automation",
  description: "Innovation Synergy AI Inc. delivers AI infrastructure consulting for American small businesses. Voice agents, automation, data enrichment & remote installation. Serving Boston, NYC, Miami & nationwide. Take back your time.",
  keywords: [
    // Primary keywords
    "American small business AI", "AI infrastructure consulting", "business automation USA", "Innovation Synergy AI",
    // Service-specific keywords
    "voice agents America", "AI consulting nationwide", "small business tech integration", "business process automation",
    "AI voice agents", "custom AI solutions", "data enrichment services", "remote AI installation",
    // Location-based keywords
    "Boston AI consulting", "NYC AI services", "Miami AI agents", "Massachusetts AI consulting", "New York AI automation", "Florida AI infrastructure",
    // Industry keywords
    "small business AI transformation", "enterprise AI consulting", "AI workflow optimization", "customer service automation",
    "AI chatbots business", "conversational AI agents", "business intelligence AI", "AI customer support",
    // Competitive keywords
    "American AI consulting company", "US AI infrastructure firm", "professional AI services", "AI integration specialists"
  ].join(", "),
  authors: [{ name: "Innovation Synergy AI Inc.", url: "https://innovationsynergy.ai" }],
  creator: "Innovation Synergy AI Inc.",
  publisher: "Innovation Synergy AI Inc.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "innovation-synergy-ai-main-verification",
    yandex: "innovation-synergy-ai-yandex",
    bing: "innovation-synergy-ai-bing"
  },
  alternates: {
    canonical: "https://innovationsynergy.ai",
    languages: {
      'en-US': 'https://innovationsynergy.ai',
      'x-default': 'https://innovationsynergy.ai'
    }
  },
  category: 'AI Consulting',
  openGraph: {
    title: "Innovation Synergy AI - America's Leading Small Business AI Infrastructure Company",
    description: "We help American small businesses integrate the latest technology into their daily operations. Specialized AI consulting, voice agents, and automation solutions nationwide.",
    url: "https://innovationsynergy.ai",
    siteName: "Innovation Synergy AI Inc.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationsynergy.ai/og-image-innovation-synergy-ai.jpg",
        width: 1200,
        height: 630,
        alt: "Innovation Synergy AI - American Small Business AI Infrastructure"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovation Synergy AI - American Small Business AI Infrastructure",
    description: "America's leading AI infrastructure consulting firm helping small businesses integrate cutting-edge technology into daily operations.",
    creator: "@innovationsynergyai",
    images: ["https://innovationsynergy.ai/twitter-card-innovation-synergy-ai.jpg"]
  },
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
    "business.contact_data.country_name": "United States"
  },
  generator: "Innovation Synergy AI Inc.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Innovation Synergy AI structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              // Primary Organization Schema
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://innovationsynergy.ai/#organization",
                "name": "Innovation Synergy AI Inc.",
                "legalName": "Innovation Synergy AI Inc.",
                "description": "AI infrastructure consulting firm for American small businesses. Voice agents, automation, data enrichment, and remote installation services nationwide.",
                "url": "https://innovationsynergy.ai",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://innovationsynergy.ai/logo-innovation-synergy-ai.png",
                  "width": 300,
                  "height": 100
                },
                "image": "https://innovationsynergy.ai/og-image-innovation-synergy-ai.jpg",
                "telephone": "+1-800-AI-SYNERGY",
                "email": "info@innovationsynergyai.com",
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+1-800-AI-SYNERGY",
                    "contactType": "customer service",
                    "areaServed": "US",
                    "availableLanguage": "English"
                  },
                  {
                    "@type": "ContactPoint",
                    "email": "sales@innovationsynergyai.com",
                    "contactType": "sales",
                    "areaServed": "US"
                  }
                ],
                "foundingDate": "2024",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "US",
                  "addressRegion": "Nationwide Service"
                },
                "areaServed": [
                  {
                    "@type": "Country",
                    "name": "United States"
                  },
                  {
                    "@type": "City",
                    "name": "Boston",
                    "addressRegion": "Massachusetts"
                  },
                  {
                    "@type": "City",
                    "name": "New York City",
                    "addressRegion": "New York"
                  },
                  {
                    "@type": "City",
                    "name": "Miami",
                    "addressRegion": "Florida"
                  }
                ],
                "serviceType": [
                  "AI Infrastructure Consulting", 
                  "Small Business Technology Integration",
                  "Voice Agent Development", 
                  "Business Process Automation",
                  "Custom AI Solutions",
                  "Remote Infrastructure Installation",
                  "Data Enrichment Services",
                  "Customer Service Automation"
                ],
                "industry": "Technology Consulting",
                "naics": "541511",
                "numberOfEmployees": {
                  "@type": "QuantitativeValue",
                  "minValue": 10,
                  "maxValue": 50
                },
                "slogan": "We leverage the latest technology for American Small Businesses. Take Back Your Time.",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "127",
                  "bestRating": "5"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "AI Infrastructure Service Packages",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "name": "Foundation AI Package",
                      "description": "AI infrastructure assessment, voice agent implementation, basic automation setup, and remote installation for small businesses",
                      "price": "3497",
                      "priceCurrency": "USD",
                      "priceSpecification": {
                        "@type": "UnitPriceSpecification",
                        "price": "3497",
                        "priceCurrency": "USD",
                        "unitText": "monthly"
                      },
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Foundation AI Package",
                        "serviceType": "AI Infrastructure Consulting"
                      }
                    },
                    {
                      "@type": "Offer",
                      "name": "Professional AI Package",
                      "description": "Complete infrastructure overhaul, custom voice AI personality, multi-channel integration, and advanced workflow automation",
                      "price": "6997",
                      "priceCurrency": "USD",
                      "priceSpecification": {
                        "@type": "UnitPriceSpecification",
                        "price": "6997",
                        "priceCurrency": "USD",
                        "unitText": "monthly"
                      },
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Professional AI Package",
                        "serviceType": "AI Infrastructure Consulting"
                      }
                    },
                    {
                      "@type": "Offer",
                      "name": "Elite AI Package",
                      "description": "White-glove enterprise deployment, custom AI ecosystem development, proprietary voice synthesis, and 24/7 dedicated support",
                      "price": "12997",
                      "priceCurrency": "USD",
                      "priceSpecification": {
                        "@type": "UnitPriceSpecification",
                        "price": "12997",
                        "priceCurrency": "USD",
                        "unitText": "monthly"
                      },
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Elite AI Package",
                        "serviceType": "AI Infrastructure Consulting"
                      }
                    }
                  ]
                },
                "sameAs": [
                  "https://linkedin.com/company/innovation-synergy-ai",
                  "https://www.instagram.com/innovationsynergy.ai/",
                  "https://www.youtube.com/@InnovationSynergy_AI",
                  "https://www.tiktok.com/@innovationsynergyai",
                  "https://twitter.com/innovationsynergyai"
                ],
                "subOrganization": [
                  {
                    "@type": "LocalBusiness",
                    "name": "Boston AI Agent",
                    "url": "https://bostonagents.ai",
                    "areaServed": "Boston, Massachusetts"
                  },
                  {
                    "@type": "LocalBusiness", 
                    "name": "NYC AI Agent",
                    "url": "https://nycagents.ai",
                    "areaServed": "New York City, New York"
                  },
                  {
                    "@type": "LocalBusiness",
                    "name": "Miami AI Agent", 
                    "url": "https://miamiagents.ai",
                    "areaServed": "Miami, Florida"
                  }
                ],
                "knowsAbout": [
                  "Artificial Intelligence",
                  "Business Automation",
                  "Voice AI Technology",
                  "Small Business Consulting",
                  "Technology Integration",
                  "Customer Service Automation",
                  "Business Process Optimization"
                ]
              },
              // WebSite Schema
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://innovationsynergy.ai/#website",
                "url": "https://innovationsynergy.ai",
                "name": "Innovation Synergy AI",
                "description": "America's leading AI infrastructure consulting firm",
                "publisher": {
                  "@id": "https://innovationsynergy.ai/#organization"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://innovationsynergy.ai/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              // Professional Service Schema
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "@id": "https://innovationsynergy.ai/#service",
                "name": "AI Infrastructure Consulting Services",
                "provider": {
                  "@id": "https://innovationsynergy.ai/#organization"
                },
                "serviceType": "AI Infrastructure Consulting",
                "areaServed": "United States",
                "hasOfferCatalog": {
                  "@id": "https://innovationsynergy.ai/#offers"
                }
              }
            ])
          }}
        />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="business.contact_data.country_name" content="United States" />
        <link rel="canonical" href="https://innovationsynergy.ai" />
      </head>
      <body className={cn(inter.variable, playfairDisplay.variable, "min-h-screen antialiased")}>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-tiffany-500 text-black-900 px-4 py-2 rounded font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-tiffany-400"
        >
          Skip to main content
        </a>
        
        <Analytics />
        
        <ErrorBoundary level="section">
          <Header />
        </ErrorBoundary>
        
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          <ErrorBoundary level="page">
            {children}
          </ErrorBoundary>
        </main>
        
        <ErrorBoundary level="section">
          <Footer />
        </ErrorBoundary>
        
        <ErrorBoundary level="component">
          <CookieConsentBanner />
        </ErrorBoundary>
      </body>
    </html>
  )
}