import type { Metadata } from 'next'

// Base configuration for the website
export const siteConfig = {
  name: 'Innovation Synergy AI Inc.',
  url: 'https://innovationsynergy.ai',
  ogImage: 'https://innovationsynergy.ai/og-image-innovation-synergy-ai.jpg',
  twitterImage: 'https://innovationsynergy.ai/twitter-card-innovation-synergy-ai.jpg',
  description: 'Innovation Synergy AI Inc. delivers AI infrastructure consulting for American small businesses. Voice agents, automation, data enrichment & remote installation. Serving Boston, NYC, Miami & nationwide.',
  phone: '+1-800-AI-SYNERGY',
  email: 'info@innovationsynergyai.com',
  businessName: 'Innovation Synergy AI Inc.',
  foundingYear: '2024'
}

// Keywords for different service categories
export const keywordCategories = {
  primary: [
    'AI consulting',
    'small business automation',
    'voice AI agents',
    'workflow automation',
    'business process automation',
    'AI infrastructure consulting',
    'American small business AI',
    'Innovation Synergy AI'
  ],
  services: [
    'voice agents America',
    'AI consulting nationwide',
    'small business tech integration',
    'custom AI solutions',
    'data enrichment services',
    'remote AI installation',
    'customer service automation',
    'conversational AI agents'
  ],
  locations: [
    'Boston AI consulting',
    'NYC AI services',
    'Miami AI agents',
    'Massachusetts AI consulting',
    'New York AI automation',
    'Florida AI infrastructure'
  ],
  industry: [
    'small business AI transformation',
    'enterprise AI consulting',
    'AI workflow optimization',
    'business intelligence AI',
    'AI customer support',
    'professional AI services'
  ]
}

// City-specific configurations
export const cityConfigs = {
  boston: {
    name: 'Boston',
    state: 'Massachusetts',
    region: 'MA',
    businessPhone: '+1-617-AI-BOSTON',
    description: 'Leading AI consulting services in Boston, Massachusetts. Helping Boston small businesses integrate voice agents, automation, and AI infrastructure.',
    keywords: ['Boston AI consulting', 'Massachusetts AI services', 'Boston voice agents', 'Boston business automation'],
    address: {
      city: 'Boston',
      state: 'Massachusetts',
      region: 'MA',
      country: 'US'
    }
  },
  nyc: {
    name: 'New York City',
    state: 'New York', 
    region: 'NY',
    businessPhone: '+1-212-AI-NYC-AI',
    description: 'Premier AI infrastructure consulting in New York City. Specialized voice agents, automation, and AI solutions for NYC small businesses.',
    keywords: ['NYC AI consulting', 'New York AI services', 'NYC voice agents', 'Manhattan business automation'],
    address: {
      city: 'New York City',
      state: 'New York',
      region: 'NY', 
      country: 'US'
    }
  },
  miami: {
    name: 'Miami',
    state: 'Florida',
    region: 'FL',
    businessPhone: '+1-305-AI-MIAMI',
    description: 'Top-tier AI consulting services in Miami, Florida. Voice AI agents, business automation, and AI infrastructure for Miami small businesses.',
    keywords: ['Miami AI consulting', 'Florida AI services', 'Miami voice agents', 'South Florida business automation'],
    address: {
      city: 'Miami',
      state: 'Florida', 
      region: 'FL',
      country: 'US'
    }
  }
}

// Generate metadata for different page types
export function generatePageMetadata({
  title,
  description,
  pathname,
  keywords = [],
  city,
  noIndex = false
}: {
  title?: string
  description: string
  pathname: string
  keywords?: string[]
  city?: keyof typeof cityConfigs
  noIndex?: boolean
}): Metadata {
  const fullTitle = title 
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} - American Small Business AI Infrastructure | Voice Agents & Automation`

  const canonical = `${siteConfig.url}${pathname}`
  
  // Combine keywords based on page context
  const allKeywords = [
    ...keywordCategories.primary,
    ...keywords,
    ...(city ? cityConfigs[city].keywords : []),
    ...keywordCategories.services
  ]

  // City-specific metadata adjustments
  const cityConfig = city ? cityConfigs[city] : null
  const finalDescription = cityConfig 
    ? `${description} Serving ${cityConfig.name}, ${cityConfig.state} and nationwide.`
    : description

  return {
    title: fullTitle,
    description: finalDescription.substring(0, 155), // Ensure 155 char limit
    keywords: allKeywords.join(', '),
    authors: [{ name: siteConfig.businessName, url: siteConfig.url }],
    creator: siteConfig.businessName,
    publisher: siteConfig.businessName,
    robots: noIndex ? 'noindex,nofollow' : {
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
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description: finalDescription.substring(0, 155),
      url: canonical,
      siteName: siteConfig.businessName,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: finalDescription.substring(0, 155),
      creator: '@innovationsynergyai',
      images: [siteConfig.twitterImage]
    },
    other: {
      'geo.region': cityConfig?.address.region || 'US',
      'geo.placename': cityConfig?.name || 'United States',
      'business.contact_data.country_name': 'United States',
      'business.contact_data.region': cityConfig?.address.region || 'US'
    }
  }
}

// Local business structured data generator
export function generateLocalBusinessStructuredData(city?: keyof typeof cityConfigs) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#localbusiness`,
    name: siteConfig.businessName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    foundingDate: siteConfig.foundingYear,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/logo-innovation-synergy-ai.png`,
      width: 300,
      height: 100
    },
    image: siteConfig.ogImage,
    priceRange: '$$$',
    serviceType: [
      'AI Infrastructure Consulting',
      'Small Business Technology Integration', 
      'Voice Agent Development',
      'Business Process Automation',
      'Custom AI Solutions',
      'Remote Infrastructure Installation',
      'Data Enrichment Services',
      'Customer Service Automation'
    ],
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Infrastructure Service Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Foundation AI Package',
          description: 'AI infrastructure assessment, voice agent implementation, basic automation setup for small businesses',
          price: '3497',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        },
        {
          '@type': 'Offer', 
          name: 'Professional AI Package',
          description: 'Complete infrastructure overhaul, custom voice AI personality, multi-channel integration, advanced automation',
          price: '6997',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        },
        {
          '@type': 'Offer',
          name: 'Elite AI Package', 
          description: 'White-glove enterprise deployment, custom AI ecosystem, proprietary voice synthesis, 24/7 support',
          price: '12997',
          priceCurrency: 'USD', 
          availability: 'https://schema.org/InStock'
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5'
    },
    sameAs: [
      'https://linkedin.com/company/innovation-synergy-ai',
      'https://www.instagram.com/innovationsynergy.ai/',
      'https://www.youtube.com/@InnovationSynergy_AI',
      'https://www.tiktok.com/@innovationsynergyai',
      'https://twitter.com/innovationsynergyai'
    ]
  }

  // Add city-specific data if provided
  if (city && cityConfigs[city]) {
    const cityConfig = cityConfigs[city]
    return {
      ...baseData,
      address: {
        '@type': 'PostalAddress',
        addressLocality: cityConfig.address.city,
        addressRegion: cityConfig.address.region,
        addressCountry: cityConfig.address.country
      },
      areaServed: [
        {
          '@type': 'City',
          name: cityConfig.name,
          addressRegion: cityConfig.state
        },
        {
          '@type': 'Country', 
          name: 'United States'
        }
      ],
      telephone: cityConfig.businessPhone,
      geo: {
        '@type': 'GeoCoordinates',
        // Add specific coordinates for each city
        ...(city === 'boston' && {
          latitude: '42.3601',
          longitude: '-71.0589'
        }),
        ...(city === 'nyc' && {
          latitude: '40.7128', 
          longitude: '-74.0060'
        }),
        ...(city === 'miami' && {
          latitude: '25.7617',
          longitude: '-80.1918'
        })
      }
    }
  }

  return baseData
}

// FAQ structured data generator  
export function generateFAQStructuredData(faqs: Array<{question: string, answer: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

// Service page structured data
export function generateServiceStructuredData(serviceName: string, serviceDescription: string, price?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'Organization',
      name: siteConfig.businessName,
      url: siteConfig.url
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    },
    serviceType: 'AI Infrastructure Consulting',
    ...(price && {
      offers: {
        '@type': 'Offer',
        price: price,
        priceCurrency: 'USD'
      }
    })
  }
}