import type { Metadata } from 'next'

// Base configuration for the NYC website
export const siteConfig = {
  name: 'Innovation Synergy AI NYC',
  url: 'https://nycagents.ai',
  ogImage: 'https://nycagents.ai/og-image-nyc-ai-agents.jpg',
  twitterImage: 'https://nycagents.ai/twitter-card-nyc-ai-agents.jpg',
  description: 'Innovation Synergy AI NYC delivers AI infrastructure consulting for New York Metro Area businesses. 24/7 voice agents, automation for finance, real estate, and startups. Serving all 5 boroughs - Manhattan, Brooklyn, Queens, Bronx, Staten Island.',
  phone: '+1-212-NYC-AI-24',
  email: 'nyc@innovationsynergyai.com',
  businessName: 'Innovation Synergy AI NYC',
  foundingYear: '2024'
}

// Keywords for NYC-specific service categories
export const keywordCategories = {
  primary: [
    'NYC AI consulting',
    'New York Metro Area business automation',
    'Manhattan voice AI agents',
    'Wall Street workflow automation',
    'NYC financial services process automation',
    'NYC AI infrastructure consulting',
    'New York small business AI',
    'Innovation Synergy AI NYC'
  ],
  services: [
    'voice agents NYC',
    'AI consulting New York Metro Area',
    'NYC business tech integration',
    'Manhattan custom AI solutions',
    'real estate data enrichment services',
    'NYC remote AI installation',
    'Financial District customer service automation',
    'NYC conversational AI agents',
    '24/7 AI agents NYC'
  ],
  locations: [
    'Manhattan AI consulting',
    'Brooklyn AI services',
    'Queens AI agents',
    'Bronx AI consulting',
    'Staten Island AI automation',
    'Wall Street AI infrastructure',
    'Financial District AI consulting',
    'Midtown AI services'
  ],
  industry: [
    'NYC real estate AI transformation',
    'Wall Street AI consulting',
    'NYC startup automation',
    'NYC finance AI optimization',
    'Manhattan AI workflow optimization',
    'New York professional AI services',
    'NYC FinTech AI solutions'
  ]
}

// City-specific configurations
export const cityConfigs = {
  boston: {
    name: 'Greater Boston Area',
    state: 'Massachusetts',
    region: 'MA',
    businessPhone: '+1-617-AI-BOSTON',
    description: 'Leading AI consulting services in Greater Boston Area. Helping Cambridge biotech, Financial District finance firms, and Back Bay education businesses integrate voice agents, automation, and AI infrastructure.',
    keywords: ['Greater Boston AI consulting', 'Cambridge biotech automation', 'Financial District AI services', 'Back Bay voice agents', 'Kendall Square business automation'],
    address: {
      streetAddress: '1 Boston Place, Suite 2600',
      city: 'Boston',
      state: 'Massachusetts',
      region: 'MA',
      postalCode: '02108',
      country: 'US'
    }
  },
  nyc: {
    name: 'New York Metro Area',
    state: 'New York', 
    region: 'NY',
    businessPhone: '+1-212-NYC-AI-24',
    description: 'Premier AI infrastructure consulting serving all 5 boroughs of NYC. 24/7 voice agents, automation, and AI solutions engineered for NYC\'s demanding finance, real estate, and startup environment.',
    keywords: ['NYC AI consulting', 'Manhattan Financial District AI', 'Wall Street automation', 'NYC real estate AI', 'New York startup AI', '5 boroughs AI services', 'NYC 24/7 AI agents'],
    address: {
      streetAddress: '1 World Trade Center, Suite 8500',
      city: 'New York',
      state: 'New York',
      region: 'NY',
      postalCode: '10007',
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
          latitude: '40.7130', 
          longitude: '-74.0134'
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