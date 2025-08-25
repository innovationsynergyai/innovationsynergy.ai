'use client'

// Brand Consistency & Advanced SEO Schema for Innovation Synergy AI
export default function BrandConsistencySchema() {
  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "Innovation Synergy AI",
    "alternateName": ["Innovation Synergy AI Inc.", "ISAI"],
    "description": "Professional AI consulting brand specializing in small business transformation through voice agents, automation, and data enrichment.",
    "logo": "https://innovationsynergy.ai/logo-black-square.png",
    "url": "https://innovationsynergy.ai",
    "slogan": "We leverage the latest technology for American Small Businesses. Take Back Your Time.",
    "founder": {
      "@type": "Organization",
      "name": "Innovation Synergy AI Inc."
    }
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org", 
    "@type": "ProfessionalService",
    "name": "AI Consulting for Small Businesses",
    "description": "Expert AI consulting services helping American small businesses implement voice agents, workflow automation, and data enrichment solutions.",
    "provider": {
      "@type": "Organization",
      "name": "Innovation Synergy AI Inc.",
      "logo": "https://innovationsynergy.ai/logo-black-square.png",
      "url": "https://innovationsynergy.ai"
    },
    "serviceType": "Artificial Intelligence Consulting",
    "category": "Business Consulting",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Consulting Service Portfolio",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Voice AI Implementation",
            "description": "Custom voice AI agents for customer service and business communication automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Process Automation",
            "description": "Comprehensive workflow automation to eliminate manual tasks and increase efficiency"
          }
        }
      ]
    },
    "audience": {
      "@type": "BusinessAudience",
      "name": "American Small Businesses"
    }
  }

  const contactPointSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "telephone": "+1-800-AI-SYNERGY",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": "English",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }}
      />
    </>
  )
}