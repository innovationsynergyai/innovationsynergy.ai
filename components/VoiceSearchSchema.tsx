'use client'

// Voice Search & AI-Optimized FAQ Schema for Small Business AI Consulting
export default function VoiceSearchSchema() {
  const aiConsultingFAQs = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI consulting for small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI consulting for small businesses involves implementing voice agents, workflow automation, and data enrichment systems. We provide custom AI solutions including voice AI, remote installation, and business process automation specifically designed for American small businesses to save time and increase efficiency."
        }
      },
      {
        "@type": "Question", 
        "name": "How much does AI consulting cost for small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Small business AI consulting typically ranges from $3,000-$15,000 monthly depending on implementation scope. We offer voice agents, automation systems, data enrichment, and remote installation services with transparent pricing and guaranteed ROI for American small businesses."
        }
      },
      {
        "@type": "Question",
        "name": "What AI services do small businesses need most?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Small businesses benefit most from voice AI agents for customer service, workflow automation for repetitive tasks, data enrichment for better insights, and remote AI installation. These services help American small businesses take back their time and focus on growth."
        }
      },
      {
        "@type": "Question",
        "name": "How long does AI implementation take for small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI implementation for small businesses typically takes 2-4 weeks. We provide voice agents, automation systems, and data enrichment with remote installation. Our process includes custom integration, team training, and ongoing support for American small businesses nationwide."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide AI consulting in Boston, NYC, and Miami?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide AI consulting services in Boston, New York City, Miami, and nationwide. Our team delivers voice agents, workflow automation, data enrichment, and remote installation services for small businesses across America with local expertise and remote capabilities."
        }
      },
      {
        "@type": "Question",
        "name": "What makes your AI consulting different from other companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus exclusively on American small businesses and provide complete implementation - not just consultation. We build, integrate, and maintain voice agents, automation systems, and data enrichment solutions with remote installation, ongoing support, and HIPAA compliance."
        }
      },
      {
        "@type": "Question",
        "name": "Is AI consulting worth it for small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI consulting delivers significant ROI for small businesses through time savings, automation efficiency, and improved customer service. Voice agents, workflow automation, and data enrichment typically save 20+ hours weekly while improving operations for American small businesses."
        }
      },
      {
        "@type": "Question",
        "name": "What AI technologies do you implement for small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement voice AI agents, workflow automation systems, data enrichment platforms, and custom integrations. Our technology stack includes HIPAA-compliant solutions with remote installation capabilities designed specifically for American small business operations."
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(aiConsultingFAQs) }}
    />
  )
}