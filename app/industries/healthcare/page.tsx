import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ChatWidget from "@/components/ChatWidget"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "AI for Healthcare Practices - HIPAA Compliant Voice Agents",
  description: "HIPAA-compliant AI voice agents for healthcare practices. Reduce administrative costs by 67%, improve patient satisfaction 89%, and ensure full medical data privacy compliance.",
  pathname: "/industries/healthcare",
  keywords: [
    "healthcare AI automation",
    "HIPAA compliant voice agents",
    "medical practice automation",
    "healthcare customer service",
    "medical appointment scheduling AI",
    "patient communication automation",
    "healthcare cost reduction",
    "medical office efficiency",
    "telemedicine support AI",
    "healthcare chatbots"
  ]
})

const healthcareBenefits = [
  {
    title: "HIPAA Compliant by Design",
    description: "Built-in privacy safeguards, encrypted communications, and audit trails for complete medical data protection",
    metric: "100% Compliance"
  },
  {
    title: "Administrative Cost Reduction",
    description: "Eliminate 2-3 administrative positions while handling 5x more patient inquiries",
    metric: "67% Cost Savings"
  },
  {
    title: "24/7 Patient Support",
    description: "Around-the-clock appointment scheduling, prescription refills, and general inquiries",
    metric: "24/7 Availability"
  },
  {
    title: "Improved Patient Satisfaction", 
    description: "Instant responses, reduced hold times, and personalized patient communication",
    metric: "89% Satisfaction Increase"
  }
]

const healthcareFeatures = [
  "Appointment scheduling and rescheduling",
  "Prescription refill requests",
  "Insurance verification assistance", 
  "Patient intake and pre-registration",
  "Test result notifications",
  "Treatment plan reminders",
  "Billing and payment inquiries",
  "Telehealth appointment coordination"
]

const healthcareTestimonials = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Family Medicine Practice Owner",
    content: "Since implementing Innovation Synergy's AI system, we've reduced our front desk staff from 4 to 1 while improving patient satisfaction scores by 91%. The HIPAA compliance features give us complete peace of mind.",
    savings: "$87K annually"
  },
  {
    name: "Mark Rodriguez",
    title: "Practice Administrator",
    content: "The AI handles 78% of our patient calls automatically. Our patients love the instant responses, and our staff can focus on patient care instead of repetitive admin tasks.",
    savings: "3 FTE eliminated"
  },
  {
    name: "Dr. Jennifer Chen",
    title: "Pediatric Clinic Director", 
    content: "The appointment scheduling automation alone has transformed our practice. No more phone tag, no more double bookings, and our patients can schedule 24/7.",
    savings: "156% ROI"
  }
]

const complianceFeatures = [
  "SOC 2 Type II Certified",
  "HIPAA Technical Safeguards",
  "Encrypted Data Transmission",
  "Audit Trail Logging",
  "Role-Based Access Controls",
  "Business Associate Agreement Included"
]

export default function HealthcarePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-black-900 text-white-50 flex items-center justify-center relative py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="bg-tiffany-500 text-black-900 text-xs font-semibold tracking-[0.3em] uppercase mb-6 px-4 py-2">
            HIPAA COMPLIANT AI SOLUTION
          </Badge>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-6">
            Healthcare <span className="text-tiffany-500">AI That</span> Heals Costs
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold tracking-[0.1em] mb-6">
            Reduce Administrative Costs 67% While Improving Patient Care
          </p>
          
          <p className="text-lg md:text-xl text-neutral-300 tracking-wide mb-4">
            HIPAA-compliant voice agents that eliminate 2-3 admin positions and deliver $87K+ annual savings
          </p>
          
          <p className="text-tiffany-500 text-lg font-medium tracking-[0.1em] mb-12">
            Patient Scheduling • Prescription Management • Insurance Verification • 24/7 Support
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16">
            <Button
              asChild
              className="bg-tiffany-500 text-black-900 font-semibold px-10 py-5 rounded-none hover:bg-tiffany-400 transition-all duration-300 tracking-wide uppercase text-base shadow-lg"
            >
              <Link
                href="https://calendly.com/innovationsynergyai/healthcare-ai-assessment"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET YOUR HIPAA-COMPLIANT AI ASSESSMENT
              </Link>
            </Button>
            <Button
              asChild
              className="border border-white-50 text-white-50 font-semibold px-8 py-5 rounded-none hover:bg-white-50 hover:text-black-900 transition-all duration-300 tracking-wide uppercase text-base"
            >
              <Link href="#healthcare-calculator">CALCULATE HEALTHCARE SAVINGS</Link>
            </Button>
          </div>

          {/* Healthcare Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">67%</div>
              <div className="text-white-50 text-sm">Admin Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">89%</div>
              <div className="text-white-50 text-sm">Patient Satisfaction Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">$87K</div>
              <div className="text-white-50 text-sm">Average Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">100%</div>
              <div className="text-white-50 text-sm">HIPAA Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Benefits Section */}
      <section className="bg-white-50 py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Why Healthcare Practices Choose Our <span className="text-tiffany-500">AI Solutions</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Purpose-built for healthcare with security, compliance, and patient care at the core
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthcareBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-3xl font-bold text-tiffany-500 mb-2">{benefit.metric}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Features Section */}
      <section className="bg-neutral-50 py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-light mb-8">
                Complete Healthcare <span className="text-tiffany-500">Automation Suite</span>
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Our AI handles every aspect of patient communication while maintaining strict HIPAA compliance and medical privacy standards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {healthcareFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-tiffany-500 rounded-full"></div>
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">HIPAA Compliance Features</h3>
              <div className="space-y-4">
                {complianceFeatures.map((compliance, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-neutral-700 font-medium">{compliance}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-tiffany-50 rounded-lg">
                <p className="text-sm text-tiffany-800 font-medium">
                  ✅ Business Associate Agreement (BAA) included with every healthcare AI deployment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Testimonials Section */}
      <section className="bg-white py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Healthcare Practices <span className="text-tiffany-500">Love Our Results</span>
            </h2>
            <p className="text-xl text-neutral-600">Real results from medical practices nationwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthcareTestimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-tiffany-500 text-white">{testimonial.savings}</Badge>
                  </div>
                  <CardDescription className="text-base italic mb-4">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare CTA Section */}
      <section className="bg-black-900 text-white py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
            Ready to <span className="text-tiffany-500">Transform</span> Your Healthcare Practice?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
            Join 150+ healthcare practices that have eliminated administrative overhead while improving patient care. HIPAA-compliant, fully automated, guaranteed results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
            <Button
              asChild
              className="bg-tiffany-500 text-black-900 font-semibold px-12 py-6 rounded-none hover:bg-tiffany-400 transition-all duration-300 tracking-wide uppercase text-lg shadow-lg"
            >
              <Link
                href="https://calendly.com/innovationsynergyai/healthcare-ai-assessment"
                target="_blank"
                rel="noopener noreferrer"
              >
                SCHEDULE YOUR HEALTHCARE AI ASSESSMENT
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-tiffany-500 text-lg font-semibold mb-2">Free Assessment</h3>
              <p className="text-neutral-400">Complete HIPAA-compliant AI readiness evaluation</p>
            </div>
            <div>
              <h3 className="text-tiffany-500 text-lg font-semibold mb-2">Guaranteed ROI</h3>
              <p className="text-neutral-400">$87K+ annual savings or we work for free</p>
            </div>
            <div>
              <h3 className="text-tiffany-500 text-lg font-semibold mb-2">30-Day Money Back</h3>
              <p className="text-neutral-400">Risk-free trial with full compliance guarantee</p>
            </div>
          </div>
        </div>
      </section>

      <ChatWidget />
    </>
  )
}