import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import TestimonialsSection from "@/components/TestimonialsSection"
import FinalCTASection from "@/components/final-cta-section"
import { LocalBusinessStructuredData, FAQStructuredData } from "@/components/StructuredData"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  description: "Small business AI specialists who build, integrate, and maintain custom AI solutions. Voice agents, workflow automation, and business intelligence systems.",
  pathname: "",
  keywords: [
    "small business AI consulting",
    "custom AI development",
    "voice AI agents",
    "workflow automation",
    "AI integration services",
    "business AI solutions",
    "HIPAA compliant AI",
    "remote AI deployment"
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
      
      <HeroSection />
      <FinalCTASection />
    </>
  )
}