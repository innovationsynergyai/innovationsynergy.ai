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
  title: "Innovation Synergy AI Boston - Greater Boston Area AI Infrastructure | Voice Agents for Biotech & Finance",
  description: "Innovation Synergy AI Boston delivers AI infrastructure consulting for Greater Boston businesses. Voice agents, automation for biotech, finance, and education sectors. Serving Cambridge, Back Bay, Financial District & metro Boston. Take back your time.",
  keywords: [
    // Primary Boston keywords
    "Boston AI consulting", "Greater Boston AI", "Cambridge AI infrastructure", "Massachusetts AI consulting", "Boston biotech automation",
    // Service-specific keywords for Boston
    "voice agents Boston", "AI consulting Greater Boston", "Boston business tech integration", "biotech process automation",
    "AI voice agents Cambridge", "Boston custom AI solutions", "data enrichment Boston", "remote AI installation Massachusetts",
    // Boston location-based keywords
    "Back Bay AI consulting", "Financial District AI services", "Cambridge biotech AI", "Kendall Square AI automation", "Boston Common area AI",
    // Boston industry keywords
    "Boston biotech AI transformation", "Harvard Medical AI consulting", "MIT startup automation", "Boston finance AI optimization",
    "AI chatbots Boston business", "conversational AI Boston", "business intelligence Boston", "AI customer support Massachusetts",
    // Boston competitive keywords
    "Boston AI consulting company", "Massachusetts AI infrastructure firm", "professional AI services Boston", "AI integration specialists Cambridge"
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
    canonical: "https://bostonagents.ai",
    languages: {
      'en-US': 'https://bostonagents.ai',
      'x-default': 'https://bostonagents.ai'
    }
  },
  category: 'AI Consulting',
  openGraph: {
    title: "Innovation Synergy AI Boston - Greater Boston Area's Leading AI Infrastructure Company",
    description: "We help Greater Boston businesses integrate the latest technology into their daily operations. Specialized AI consulting for biotech, finance, and education sectors in Cambridge, Back Bay, and Financial District.",
    url: "https://bostonagents.ai",
    siteName: "Innovation Synergy AI Boston",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://bostonagents.ai/og-image-boston-ai-agents.jpg",
        width: 1200,
        height: 630,
        alt: "Innovation Synergy AI Boston - Greater Boston Area AI Infrastructure"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovation Synergy AI Boston - Greater Boston Area AI Infrastructure",
    description: "Greater Boston's leading AI infrastructure consulting firm helping biotech, finance, and education businesses integrate cutting-edge technology into daily operations.",
    creator: "@bostonaiagents",
    images: ["https://bostonagents.ai/twitter-card-boston-ai-agents.jpg"]
  },
  other: {
    "geo.region": "US-MA",
    "geo.placename": "Boston, Massachusetts",
    "geo.position": "42.3601;-71.0589",
    "business.contact_data.country_name": "United States",
    "business.contact_data.region": "Massachusetts",
    "business.contact_data.locality": "Boston"
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
                "@type": "LocalBusiness",
                "@id": "https://bostonagents.ai/#organization",
                "name": "Innovation Synergy AI Boston",
                "legalName": "Innovation Synergy AI Inc.",
                "description": "AI infrastructure consulting firm for Greater Boston businesses. Voice agents, automation for biotech, finance, and education sectors. Serving Cambridge, Back Bay, Financial District, and metro Boston area.",
                "url": "https://bostonagents.ai",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://bostonagents.ai/logo-boston-ai-agents.png",
                  "width": 300,
                  "height": 100
                },
                "image": "https://bostonagents.ai/og-image-boston-ai-agents.jpg",
                "telephone": "+1-617-AI-BOSTON",
                "email": "boston@innovationsynergyai.com",
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+1-617-AI-BOSTON",
                    "contactType": "customer service",
                    "areaServed": "Greater Boston Area",
                    "availableLanguage": "English"
                  },
                  {
                    "@type": "ContactPoint",
                    "email": "boston@innovationsynergyai.com",
                    "contactType": "sales",
                    "areaServed": "Greater Boston Area"
                  }
                ],
                "foundingDate": "2024",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "1 Boston Place, Suite 2600",
                  "addressLocality": "Boston",
                  "addressRegion": "MA",
                  "postalCode": "02108",
                  "addressCountry": "US"
                },
                "areaServed": [
                  {
                    "@type": "City",
                    "name": "Boston",
                    "addressRegion": "Massachusetts"
                  },
                  {
                    "@type": "City",
                    "name": "Cambridge",
                    "addressRegion": "Massachusetts"
                  },
                  {
                    "@type": "City",
                    "name": "Somerville",
                    "addressRegion": "Massachusetts"
                  },
                  {
                    "@type": "City",
                    "name": "Brookline",
                    "addressRegion": "Massachusetts"
                  },
                  {
                    "@type": "City",
                    "name": "Newton",
                    "addressRegion": "Massachusetts"
                  },
                  {
                    "@type": "City",
                    "name": "Quincy",
                    "addressRegion": "Massachusetts"
                  }
                ],
                "serviceType": [
                  "AI Infrastructure Consulting Boston", 
                  "Biotech Technology Integration",
                  "Voice Agent Development Cambridge", 
                  "Financial Services Automation",
                  "Custom AI Solutions Boston",
                  "Remote Infrastructure Installation Massachusetts",
                  "Data Enrichment Services Greater Boston",
                  "Customer Service Automation Boston",
                  "Healthcare AI Implementation",
                  "Educational Technology Integration"
                ],
                "industry": "Technology Consulting",
                "naics": "541511",
                "numberOfEmployees": {
                  "@type": "QuantitativeValue",
                  "minValue": 10,
                  "maxValue": 50
                },
                "slogan": "We leverage the latest technology for Greater Boston businesses. From biotech to finance, we help you take back your time.",
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
        <meta name="geo.region" content="US-MA" />
        <meta name="geo.placename" content="Boston, Massachusetts" />
        <meta name="geo.position" content="42.3601;-71.0589" />
        <meta name="business.contact_data.country_name" content="United States" />
        <meta name="business.contact_data.region" content="Massachusetts" />
        <meta name="business.contact_data.locality" content="Boston" />
        <link rel="canonical" href="https://bostonagents.ai" />
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