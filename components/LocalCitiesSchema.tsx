'use client'

// Local Business Schema for Multi-City AI Consulting Services
export default function LocalCitiesSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Innovation Synergy AI Inc.",
    "alternateName": "Innovation Synergy AI",
    "description": "AI consulting for American small businesses with local expertise in Boston, NYC, and Miami. We provide voice agents, workflow automation, data enrichment, and remote installation services.",
    "url": "https://innovationsynergy.ai",
    "logo": "https://innovationsynergy.ai/logo-black-square.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-AI-SYNERGY",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": ["English"]
    },
    "areaServed": {
      "@type": "Country", 
      "name": "United States"
    },
    "serviceArea": [
      {
        "@type": "City",
        "name": "Boston",
        "addressRegion": "MA",
        "addressCountry": "US"
      },
      {
        "@type": "City",
        "name": "New York", 
        "addressRegion": "NY",
        "addressCountry": "US"
      },
      {
        "@type": "City",
        "name": "Miami",
        "addressRegion": "FL", 
        "addressCountry": "US"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Local AI Consulting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Boston AI Consulting",
            "description": "AI consulting services for Boston small businesses including voice agents and automation",
            "areaServed": {
              "@type": "City",
              "name": "Boston",
              "addressRegion": "MA" 
            }
          },
          "url": "https://bostonagents.ai"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "NYC AI Consulting",
            "description": "AI consulting services for New York City small businesses with voice agents and automation",
            "areaServed": {
              "@type": "City",
              "name": "New York",
              "addressRegion": "NY"
            }
          },
          "url": "https://nycagents.ai"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Miami AI Consulting",
            "description": "AI consulting services for Miami small businesses with voice agents and automation",
            "areaServed": {
              "@type": "City",
              "name": "Miami", 
              "addressRegion": "FL"
            }
          },
          "url": "https://miamiagents.ai"
        }
      ]
    },
    "knowsAbout": [
      "Small Business AI Consulting",
      "Voice AI Agents", 
      "Workflow Automation",
      "Data Enrichment",
      "Remote AI Installation",
      "HIPAA Compliant AI Solutions",
      "Business Process Automation"
    ],
    "slogan": "We leverage the latest technology for American Small Businesses. Take Back Your Time."
  }

  // Individual city schemas for enhanced local SEO
  const bostonSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Boston AI Agents - Innovation Synergy AI",
    "description": "AI consulting for Boston small businesses. Voice agents, automation, and data enrichment services for Massachusetts companies.",
    "url": "https://bostonagents.ai",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Innovation Synergy AI Inc.",
      "url": "https://innovationsynergy.ai"
    },
    "areaServed": {
      "@type": "City",
      "name": "Boston",
      "addressRegion": "Massachusetts",
      "addressCountry": "US"
    },
    "serviceType": "AI Consulting",
    "knowsAbout": ["Boston Small Business AI", "Massachusetts AI Consulting", "New England Voice Agents"]
  }

  const nycSchema = {
    "@context": "https://schema.org", 
    "@type": "LocalBusiness",
    "name": "NYC AI Agents - Innovation Synergy AI",
    "description": "AI consulting for New York City small businesses. Voice agents, automation, and data enrichment for NYC companies.",
    "url": "https://nycagents.ai",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Innovation Synergy AI Inc.",
      "url": "https://innovationsynergy.ai"
    },
    "areaServed": {
      "@type": "City",
      "name": "New York",
      "addressRegion": "New York", 
      "addressCountry": "US"
    },
    "serviceType": "AI Consulting",
    "knowsAbout": ["NYC Small Business AI", "New York AI Consulting", "Manhattan Voice Agents"]
  }

  const miamiSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness", 
    "name": "Miami AI Agents - Innovation Synergy AI",
    "description": "AI consulting for Miami small businesses. Voice agents, automation, and data enrichment for Florida companies.",
    "url": "https://miamiagents.ai",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Innovation Synergy AI Inc.",
      "url": "https://innovationsynergy.ai"
    },
    "areaServed": {
      "@type": "City",
      "name": "Miami",
      "addressRegion": "Florida",
      "addressCountry": "US" 
    },
    "serviceType": "AI Consulting",
    "knowsAbout": ["Miami Small Business AI", "Florida AI Consulting", "South Florida Voice Agents"]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bostonSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nycSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(miamiSchema) }}
      />
    </>
  )
}