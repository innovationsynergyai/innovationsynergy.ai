'use client'

import { 
  generateLocalBusinessStructuredData, 
  generateFAQStructuredData, 
  generateServiceStructuredData,
  cityConfigs 
} from '@/lib/metadata'

interface StructuredDataProps {
  type: 'local-business' | 'faq' | 'service'
  city?: keyof typeof cityConfigs
  faqs?: Array<{question: string, answer: string}>
  serviceName?: string
  serviceDescription?: string
  servicePrice?: string
}

export default function StructuredData({ 
  type, 
  city, 
  faqs = [], 
  serviceName, 
  serviceDescription, 
  servicePrice 
}: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'local-business':
        return generateLocalBusinessStructuredData(city)
      case 'faq':
        return generateFAQStructuredData(faqs)
      case 'service':
        if (!serviceName || !serviceDescription) {
          console.warn('Service structured data requires serviceName and serviceDescription')
          return null
        }
        return generateServiceStructuredData(serviceName, serviceDescription, servicePrice)
      default:
        return null
    }
  }

  const structuredData = getStructuredData()

  if (!structuredData) {
    return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  )
}

// Convenience components for common use cases
export function LocalBusinessStructuredData({ city }: { city?: keyof typeof cityConfigs }) {
  return <StructuredData type="local-business" city={city} />
}

export function FAQStructuredData({ faqs }: { faqs: Array<{question: string, answer: string}> }) {
  return <StructuredData type="faq" faqs={faqs} />
}

export function ServiceStructuredData({ 
  serviceName, 
  serviceDescription, 
  servicePrice 
}: { 
  serviceName: string
  serviceDescription: string
  servicePrice?: string 
}) {
  return (
    <StructuredData 
      type="service" 
      serviceName={serviceName} 
      serviceDescription={serviceDescription} 
      servicePrice={servicePrice} 
    />
  )
}