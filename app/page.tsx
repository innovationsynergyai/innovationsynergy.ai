import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import ResultsAuthoritySection from "@/components/results-authority-section"
import GuaranteeSection from "@/components/guarantee-section"
import FinalCTASection from "@/components/final-cta-section"
import { LocalBusinessStructuredData, FAQStructuredData } from "@/components/StructuredData"
import VoiceSearchSchema from "@/components/VoiceSearchSchema"
import ServiceSchema from "@/components/ServiceSchema"
import LocalCitiesSchema from "@/components/LocalCitiesSchema"
import BrandConsistencySchema from "@/components/BrandConsistencySchema"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  description: "Professional AI consulting for American small businesses. We leverage the latest technology with voice agents, workflow automation, data enrichment, and remote installation. Take back your time with HIPAA-compliant AI solutions. Boston • NYC • Miami.",
  pathname: "",
  keywords: [
    // Primary AI consulting keywords
    "AI consulting for small businesses",
    "small business AI consulting",
    "artificial intelligence consulting",
    "AI consultant small business",
    "business AI consulting services",
    
    // Service-specific keywords
    "voice AI agents for business",
    "business workflow automation",
    "small business automation",
    "data enrichment services",
    "remote AI installation",
    "AI integration services",
    
    // Location-based keywords
    "AI consulting Boston",
    "AI consulting NYC",
    "AI consulting Miami",
    "small business AI Boston",
    "small business AI New York",
    "small business AI Miami",
    
    // Industry keywords
    "HIPAA compliant AI solutions",
    "American small business AI",
    "professional AI services",
    "custom AI development",
    "business process automation",
    "AI business transformation",
    
    // Long-tail keywords
    "how to implement AI in small business",
    "best AI consulting for small businesses",
    "affordable AI consulting services",
    "AI consulting companies near me"
  ]
})

// FAQ data for structured data
const homepageFAQs = [
  {
    question: "What makes you different from other AI consulting companies?",
    answer: "We don't just consult - we build, integrate, and maintain custom AI solutions. From development to deployment to training, we handle everything for small businesses."
  },
  {
    question: "Do you build custom AI solutions or just implement existing ones?",
    answer: "We develop custom AI solutions from scratch, tailored to your specific business processes. This includes voice AI agents, workflow automation, and business intelligence systems."
  },
  {
    question: "How does remote AI deployment work for small businesses?",
    answer: "We handle 100% remote implementation with zero disruption to your operations. Our HIPAA compliant infrastructure integrates seamlessly with your existing tools."
  },
  {
    question: "What ongoing support do you provide after implementation?",
    answer: "We provide maintenance, system updates, team training, documentation, and performance optimization. Think of us as your dedicated AI department."
  },
  {
    question: "How do we get started with custom AI development?",
    answer: "Schedule a free consultation where we'll assess your business needs and design a custom AI solution. We'll walk you through our build, integrate, and maintain process."
  }
]

export default function HomePage() {
  return (
    <>
      <LocalBusinessStructuredData />
      <FAQStructuredData faqs={homepageFAQs} />
      <VoiceSearchSchema />
      <ServiceSchema />
      <LocalCitiesSchema />
      <BrandConsistencySchema />
      
      <HeroSection />
      <ResultsAuthoritySection />
      <GuaranteeSection />
      <FinalCTASection />
    </>
  )
}