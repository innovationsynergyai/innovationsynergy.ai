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
  description: "NYC enterprise AI consulting for finance, real estate & startups. Eliminate 3 full-time positions while increasing customer satisfaction 94%. Serving all 5 boroughs - Manhattan, Brooklyn, Queens, Bronx, Staten Island.",
  pathname: "",
  city: "nyc",
  keywords: [
    "NYC enterprise AI consulting",
    "Manhattan financial district automation",
    "NYC business cost reduction", 
    "New York Metro Area AI automation ROI",
    "Wall Street enterprise voice AI",
    "NYC customer satisfaction improvement",
    "real estate process automation NYC",
    "Financial District AI consulting",
    "NYC startup automation solutions",
    "Manhattan office efficiency AI",
    "NYC 24/7 AI agents",
    "New York business automation"
  ]
})

// NYC-specific FAQ data for structured data
const homepageFAQs = [
  {
    question: "How can Innovation Synergy AI NYC guarantee $84K+ in annual savings for New York Metro Area businesses?",
    answer: "Our AI automation systems eliminate the need for 2-3 full-time positions (average $42K each) while increasing operational efficiency by 67%. We specialize in finance, real estate, and tech startups common in Manhattan, Wall Street, and across all 5 boroughs. Built for NYC's demanding 24/7 business environment with immediate response capabilities."
  },
  {
    question: "What is the typical ROI timeline for NYC enterprise AI implementation?",
    answer: "NYC clients see full ROI within 21 days on average. Our systems are designed for the fast-paced NYC market - integrating with financial firms, real estate agencies, and tech startups across Manhattan, Brooklyn, Queens, Bronx, and Staten Island. Immediate labor cost reduction and operational efficiency gains."
  },
  {
    question: "Do you serve all 5 boroughs including Wall Street and Financial District businesses?",
    answer: "Yes, we serve the entire New York Metro Area with specialized expertise in Manhattan Financial District, Wall Street firms, Midtown real estate agencies, and startups across all 5 boroughs. On-site consultation available throughout NYC with 24/7 remote support for round-the-clock operations."
  },
  {
    question: "How do you ensure 94% customer satisfaction improvement for NYC clients?",
    answer: "Our AI agents are engineered for NYC's demanding business pace and culture. They handle the intensity of Wall Street trading floors, real estate deal pressure, and startup scaling needs with 24/7 availability, sub-second response times, and the efficiency NYC businesses demand."
  },
  {
    question: "What happens if the AI systems don't deliver promised results for my NYC business?",
    answer: "We offer a complete risk-reversal guarantee specifically for New York Metro Area clients: 30-day money back, ROI guarantee (we work free until delivered), and implementation promise. 98% of NYC clients see results within 21 days - built for the speed and scale NYC demands."
  }
]

export default function HomePage() {
  return (
    <>
      <LocalBusinessStructuredData city="nyc" />
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