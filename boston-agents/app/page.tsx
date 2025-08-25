import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import HeroVideo from "@/components/HeroVideo"
import GuaranteeBanner from "@/components/GuaranteeBanner"
import ChatWidget from "@/components/ChatWidget"
import SchedulingCalendar from "@/components/SchedulingCalendar"
import TestimonialsSection from "@/components/TestimonialsSection"
import DataVisualizationSection from "@/components/data-visualization-section"
import PricingSection from "@/components/pricing-section"
import UrgencySection from "@/components/urgency-section"
import FinalCTASection from "@/components/final-cta-section"
import { LocalBusinessStructuredData, FAQStructuredData } from "@/components/StructuredData"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  description: "Greater Boston AI consulting for biotech, finance & education. Eliminate 3 full-time positions while increasing customer satisfaction 94%. Serving Cambridge, Back Bay, Financial District.",
  pathname: "",
  city: "boston",
  keywords: [
    "Boston enterprise AI consulting",
    "Cambridge biotech automation",
    "Boston business cost reduction",
    "Greater Boston AI automation ROI",
    "Massachusetts workforce optimization",
    "Boston customer satisfaction improvement", 
    "biotech process automation Boston",
    "Financial District enterprise voice AI",
    "Boston cost elimination consulting"
  ]
})

// Boston-specific FAQ data for structured data
const homepageFAQs = [
  {
    question: "How can Innovation Synergy AI Boston guarantee $84K+ in annual savings for Greater Boston businesses?",
    answer: "Our AI automation systems eliminate the need for 2-3 full-time positions (average $42K each) while increasing operational efficiency by 67%. We specialize in biotech, finance, and education sectors common in Cambridge, Back Bay, and Financial District. We track every dollar saved and guarantee results."
  },
  {
    question: "What is the typical ROI timeline for Boston enterprise AI implementation?",
    answer: "Boston clients see full ROI within 21 days on average. Our systems are designed to integrate with biotech research facilities, financial services firms, and educational institutions, immediately reducing labor costs and improving operational efficiency."
  },
  {
    question: "Do you serve Boston businesses including biotech companies in Cambridge?",
    answer: "Yes, we specialize in Greater Boston businesses with dedicated expertise in Cambridge biotech firms, Financial District companies, and Back Bay professional services. All implementations include on-site consultation and remote deployment."
  },
  {
    question: "How do you ensure 94% customer satisfaction improvement for Boston clients?",
    answer: "Our AI agents are trained to understand Boston's business culture and industry-specific needs in biotech, finance, and education. They provide 24/7 availability, instant response times, and personalized service that human agents can't match."
  },
  {
    question: "What happens if the AI systems don't deliver promised results for my Boston business?",
    answer: "We offer a complete risk-reversal guarantee specifically for Greater Boston clients: 30-day money back, ROI guarantee (we work free until delivered), and implementation promise. 98% of Boston clients see results within 21 days."
  }
]

export default function HomePage() {
  return (
    <>
      <LocalBusinessStructuredData city="boston" />
      <FAQStructuredData faqs={homepageFAQs} />
      
      {/* CONVERSION FUNNEL STEP 1: Capture Attention with High-Impact Value Proposition */}
      <HeroSection />
      
      
      {/* CONVERSION FUNNEL STEP 3: Demonstrate Results with Video Testimonial */}
      <HeroVideo />
      
      {/* CONVERSION FUNNEL STEP 4: Eliminate Risk with Guarantees */}
      <GuaranteeBanner />
      
      {/* CONVERSION FUNNEL STEP 5: Provide Immediate Value Assessment */}
      <SchedulingCalendar />
      
      {/* CONVERSION FUNNEL STEP 6: Show Additional Proof and Data */}
      <TestimonialsSection />
      <DataVisualizationSection />
      
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