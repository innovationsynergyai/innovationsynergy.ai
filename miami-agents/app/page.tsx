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
  description: "Miami AI consulting for hospitality, tourism & international business. Bilingual AI agents eliminate 3 full-time positions while increasing customer satisfaction 94%. Serving South Beach, Brickell, Coral Gables.",
  pathname: "",
  city: "miami",
  keywords: [
    "Miami enterprise AI consulting",
    "hospitality automation Miami",
    "bilingual AI agents Miami",
    "Miami tourism business automation",
    "international business AI Miami",
    "South Beach hotel automation",
    "Brickell business cost reduction",
    "Coral Gables AI consulting",
    "Miami restaurant automation",
    "Latin America business AI",
    "24/7 multilingual customer service",
    "Miami hospitality ROI"
  ]
})

// Miami-specific FAQ data for structured data
const homepageFAQs = [
  {
    question: "How can Innovation Synergy AI Miami guarantee $84K+ in annual savings for hospitality and tourism businesses?",
    answer: "Our bilingual AI automation systems eliminate the need for 2-3 full-time positions (average $42K each) while increasing operational efficiency by 67%. We specialize in hospitality, tourism, and international business sectors common in South Beach, Brickell, and Coral Gables. Our AI agents handle English and Spanish seamlessly, perfect for Miami's international clientele."
  },
  {
    question: "What is the typical ROI timeline for Miami hospitality AI implementation?",
    answer: "Miami clients see full ROI within 21 days on average. Our systems are designed for 24/7 operations to serve international guests across time zones, immediately reducing labor costs while improving guest satisfaction in hotels, restaurants, and attractions."
  },
  {
    question: "Do you serve Miami businesses including hotels and restaurants in South Beach?",
    answer: "Yes, we specialize in Greater Miami businesses with dedicated expertise in South Beach hospitality, Brickell financial services, Coral Gables luxury services, and international trade companies. All implementations include bilingual AI capabilities and 24/7 support for global operations."
  },
  {
    question: "How do you ensure 94% customer satisfaction improvement for Miami's international clientele?",
    answer: "Our AI agents are trained in hospitality excellence and cultural sensitivity for Miami's diverse international market. They provide 24/7 multilingual availability, instant response times, and personalized service that adapts to different cultural expectations - crucial for tourism and international business success."
  },
  {
    question: "What happens if the AI systems don't deliver promised results for my Miami business?",
    answer: "We offer a complete risk-reversal guarantee specifically for Greater Miami clients: 30-day money back, ROI guarantee (we work free until delivered), and implementation promise. 98% of Miami clients see results within 21 days, with particular success in hospitality and international business sectors."
  }
]

export default function HomePage() {
  return (
    <>
      <LocalBusinessStructuredData city="miami" />
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