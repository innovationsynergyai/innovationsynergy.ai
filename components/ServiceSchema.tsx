'use client'

// AI Consulting Service Schema for Enhanced SEO
export default function ServiceSchema() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Consulting for Small Businesses",
    "description": "Professional AI consulting services for American small businesses including voice agents, workflow automation, data enrichment, and remote installation with HIPAA compliance.",
    "provider": {
      "@type": "Organization",
      "name": "Innovation Synergy AI Inc.",
      "url": "https://innovationsynergy.ai"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "City",
        "name": "Boston",
        "addressRegion": "MA"
      },
      {
        "@type": "City", 
        "name": "New York City",
        "addressRegion": "NY"
      },
      {
        "@type": "City",
        "name": "Miami", 
        "addressRegion": "FL"
      }
    ],
    "serviceType": "AI Consulting",
    "category": "Business Consulting",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Consulting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Voice AI Agents",
            "description": "Custom voice AI agents for customer service automation and business communication"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Workflow Automation", 
            "description": "Business process automation and workflow optimization for small businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Enrichment",
            "description": "Data analysis and enrichment services to improve business intelligence"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Remote AI Installation",
            "description": "Complete remote installation and integration of AI systems for small businesses"
          }
        }
      ]
    },
    "audience": {
      "@type": "BusinessAudience",
      "name": "Small Businesses",
      "audienceType": "Small Business Owners"
    },
    "serviceOutput": "Automated business processes, improved efficiency, cost savings",
    "slogan": "We leverage the latest technology for American Small Businesses. Take Back Your Time."
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  )
}