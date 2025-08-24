import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import HeroVideo from "@/components/HeroVideo"
import GuaranteeBanner from "@/components/GuaranteeBanner"
import ChatWidget from "@/components/ChatWidget"
import SchedulingCalendar from "@/components/SchedulingCalendar"
import ClientLogos from "@/components/ClientLogos"
import TestimonialsSection from "@/components/TestimonialsSection"
import DataVisualizationSection from "@/components/data-visualization-section"
import TrustBadges from "@/components/TrustBadges"
import PricingSection from "@/components/pricing-section"
import UrgencySection from "@/components/urgency-section"
import FinalCTASection from "@/components/final-cta-section"
import { LocalBusinessStructuredData, FAQStructuredData } from "@/components/StructuredData"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  description: "Eliminate 3 full-time positions while increasing customer satisfaction 94%. AI automation that delivers $84K+ annual savings with guaranteed ROI in 21 days.",
  pathname: "",
  keywords: [
    "enterprise AI consulting",
    "business cost reduction",
    "AI automation ROI",
    "workforce optimization",
    "customer satisfaction improvement", 
    "business process automation",
    "enterprise voice AI",
    "cost elimination consulting"
  ]
})

// FAQ data for structured data
const homepageFAQs = [
  {
    question: "How can Innovation Synergy AI guarantee $84K+ in annual savings?",
    answer: "Our AI automation systems eliminate the need for 2-3 full-time positions (average $42K each) while increasing operational efficiency by 67%. We track every dollar saved and guarantee results or work for free until achieved."
  },
  {
    question: "What is the typical ROI timeline for enterprise AI implementation?",
    answer: "Enterprise clients see full ROI within 21 days on average. Our systems immediately reduce labor costs, improve customer satisfaction, and eliminate operational inefficiencies, generating measurable returns from day one."
  },
  {
    question: "Do you serve businesses with $84K+ AI consulting budgets nationwide?",
    answer: "Yes, we provide enterprise-grade AI consulting services nationwide with specialized teams in Boston, New York City, and Miami. All implementations include remote deployment and dedicated support."
  },
  {
    question: "How do you ensure 94% customer satisfaction improvement?",
    answer: "Our AI agents provide 24/7 availability, instant response times, and personalized service that human agents can't match. We measure satisfaction before and after implementation with guaranteed improvement metrics."
  },
  {
    question: "What happens if the AI systems don't deliver promised results?",
    answer: "We offer a complete risk-reversal guarantee: 30-day money back, ROI guarantee (we work free until delivered), and implementation promise. 98% of clients see results within 21 days."
  }
]

export default function HomePage() {
  return (
    <>
      <LocalBusinessStructuredData />
      <FAQStructuredData faqs={homepageFAQs} />
      
      {/* CONVERSION FUNNEL STEP 1: Capture Attention with High-Impact Value Proposition */}
      <HeroSection />
      
      {/* CONVERSION FUNNEL STEP 2: Build Credibility with Social Proof */}
      <ClientLogos />
      
      {/* CONVERSION FUNNEL STEP 3: Demonstrate Results with Video Testimonial */}
      <HeroVideo />
      
      {/* CONVERSION FUNNEL STEP 4: Eliminate Risk with Guarantees */}
      <GuaranteeBanner />
      
      {/* CONVERSION FUNNEL STEP 5: Provide Immediate Value Assessment */}
      <SchedulingCalendar />
      
      {/* CONVERSION FUNNEL STEP 6: Show Additional Proof and Data */}
      <TestimonialsSection />
      <DataVisualizationSection />
      <TrustBadges />
      
      {/* CONVERSION FUNNEL STEP 7: Present Investment Options */}
      <PricingSection />
      
      {/* CONVERSION FUNNEL STEP 8: Create Final Urgency */}
      <UrgencySection />
      
      {/* CONVERSION FUNNEL STEP 9: Final Call to Action */}
      <FinalCTASection />
      
      {/* ALWAYS AVAILABLE: Live Chat for Immediate Engagement */}
      <ChatWidget />
    </>
  )
}