import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ChatWidget from "@/components/ChatWidget"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "AI for Professional Services - Client Communication Automation",
  description: "Professional services AI voice agents for consultants, accountants, and service providers. Improve client retention 89%, reduce admin costs 61%, and scale without overhead.",
  pathname: "/industries/professional-services",
  keywords: [
    "professional services AI",
    "consultant automation",
    "accounting firm AI",
    "client communication automation",
    "professional services efficiency",
    "service business automation",
    "client scheduling AI",
    "professional services CRM",
    "consultant productivity tools",
    "service provider AI assistant"
  ]
})

const professionalServicesBenefits = [
  {
    title: "Client Retention Improvement",
    description: "Consistent, professional communication that keeps clients engaged and satisfied",
    metric: "89% Retention Increase"
  },
  {
    title: "Administrative Cost Reduction",
    description: "Eliminate 2-3 admin positions while handling unlimited client inquiries",
    metric: "61% Admin Savings"
  },
  {
    title: "Revenue Per Client Growth", 
    description: "AI identifies upselling opportunities and coordinates additional service delivery",
    metric: "147% Revenue Increase"
  },
  {
    title: "Professional Productivity Boost",
    description: "Focus on high-value work while AI handles routine client communications",
    metric: "78% Time Savings"
  }
]

const professionalServicesFeatures = [
  "Client onboarding and intake",
  "Appointment scheduling and coordination",
  "Project status updates and communication",
  "Invoice and payment inquiries",
  "Document collection and organization",
  "Service inquiry qualification",
  "Follow-up and retention campaigns",
  "Referral request automation"
]

const professionalServicesTestimonials = [
  {
    name: "Michael Thompson, CPA",
    title: "Managing Partner, Thompson & Associates",
    content: "This AI has revolutionized our accounting practice. We've eliminated 3 admin positions while increasing our client capacity by 200%. Tax season is now manageable without overtime.",
    savings: "$147K Annual Savings"
  },
  {
    name: "Sarah Martinez",
    title: "Marketing Consultant",
    content: "As a solo consultant, this AI gives me the infrastructure of a large agency. I can now handle 5x more client inquiries and my conversion rate has tripled. It's like having a full team.",
    savings: "500% Business Growth"
  },
  {
    name: "David Chen",
    title: "IT Services Director",
    content: "The AI handles all our tier-1 support calls and client onboarding. Our team now focuses on complex technical work while client satisfaction has never been higher.",
    savings: "89% Satisfaction Increase"
  }
]

const clientCommunicationFeatures = [
  "24/7 Client Support Availability",
  "Multi-channel Communication Integration",
  "Automated Follow-up Sequences",
  "Client Preference Learning",
  "Professional Tone Consistency",
  "Service Upselling Intelligence"
]

const serviceTypes = [
  {
    type: "Accounting & Tax Services",
    automations: ["Tax deadline reminders", "Document collection", "Appointment scheduling", "Invoice processing"]
  },
  {
    type: "Management Consulting",
    automations: ["Project intake assessment", "Proposal coordination", "Status update delivery", "Contract renewals"]
  },
  {
    type: "Marketing & Advertising",
    automations: ["Campaign performance reporting", "Client consultation scheduling", "Proposal reviews", "Results presentations"]
  },
  {
    type: "IT & Technical Services",
    automations: ["Support ticket creation", "Service request processing", "Maintenance scheduling", "System status updates"]
  }
]

const productivityMetrics = [
  {
    metric: "78%",
    description: "More time for billable work"
  },
  {
    metric: "89%",
    description: "Client retention improvement"
  },
  {
    metric: "24/7",
    description: "Professional availability"
  },
  {
    metric: "147%",
    description: "Revenue per client increase"
  }
]

export default function ProfessionalServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-black-900 text-white-50 flex items-center justify-center relative py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="bg-tiffany-500 text-black-900 text-xs font-semibold tracking-[0.3em] uppercase mb-6 px-4 py-2">
            PROFESSIONAL EXCELLENCE AUTOMATED
          </Badge>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-6">
            Professional AI That <span className="text-tiffany-500">Scales</span> Excellence
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold tracking-[0.1em] mb-6">
            Improve Client Retention 89% While Reducing Admin Costs 61%
          </p>
          
          <p className="text-lg md:text-xl text-neutral-300 tracking-wide mb-4">
            Voice agents that handle client communication while you focus on high-value work
          </p>
          
          <p className="text-tiffany-500 text-lg font-medium tracking-[0.1em] mb-12">
            Client Communication • Project Coordination • Service Delivery • Growth Automation
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16">
            <Button
              asChild
              className="bg-tiffany-500 text-black-900 font-semibold px-10 py-5 rounded-none hover:bg-tiffany-400 transition-all duration-300 tracking-wide uppercase text-base shadow-lg"
            >
              <Link
                href="https://calendly.com/innovationsynergyai/professional-services-ai-assessment"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET YOUR PROFESSIONAL AI ASSESSMENT
              </Link>
            </Button>
            <Button
              asChild
              className="border border-white-50 text-white-50 font-semibold px-8 py-5 rounded-none hover:bg-white-50 hover:text-black-900 transition-all duration-300 tracking-wide uppercase text-base"
            >
              <Link href="#services-calculator">CALCULATE YOUR GROWTH POTENTIAL</Link>
            </Button>
          </div>

          {/* Professional Services Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">89%</div>
              <div className="text-white-50 text-sm">Client Retention Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">61%</div>
              <div className="text-white-50 text-sm">Admin Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">147%</div>
              <div className="text-white-50 text-sm">Revenue Per Client</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">78%</div>
              <div className="text-white-50 text-sm">More Billable Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Benefits Section */}
      <section className="bg-white-50 py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Why Professional Services Choose Our <span className="text-tiffany-500">AI Solutions</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Built specifically for service professionals who need to scale without sacrificing quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {professionalServicesBenefits.map((benefit, index) => (
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

      {/* Productivity Metrics Section */}
      <section className="bg-tiffany-500 text-black-900 py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-light mb-8">
            Professional Productivity Transformation
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Focus on what you do best while AI handles everything else
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {productivityMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{item.metric}</div>
                <div className="text-lg">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types Section */}
      <section className="bg-neutral-50 py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Specialized for Every <span className="text-tiffany-500">Professional Service</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our AI adapts to your professional practice with industry-specific workflows and terminology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceTypes.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-tiffany-600">{service.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.automations.map((automation, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-tiffany-500 rounded-full"></div>
                        <span className="text-neutral-700">{automation}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Communication Features Section */}
      <section className="bg-white py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-light mb-8">
                Complete Professional <span className="text-tiffany-500">Communication Suite</span>
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Our AI manages every aspect of client interaction with the professionalism and expertise your practice is known for.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {professionalServicesFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-tiffany-500 rounded-full"></div>
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-tiffany-100">
              <h3 className="text-2xl font-bold mb-6 text-center">Client Communication Features</h3>
              <div className="space-y-4">
                {clientCommunicationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-neutral-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-tiffany-50 rounded-lg border border-tiffany-200">
                <p className="text-sm text-tiffany-800 font-medium">
                  💼 Maintains your professional brand voice across all client interactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Testimonials Section */}
      <section className="bg-neutral-50 py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Professional Services <span className="text-tiffany-500">Scaling</span> With AI
            </h2>
            <p className="text-xl text-neutral-600">Real transformations from service professionals nationwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {professionalServicesTestimonials.map((testimonial, index) => (
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

      {/* Professional Services CTA Section */}
      <section className="bg-black-900 text-white py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
            Ready to <span className="text-tiffany-500">Scale</span> Your Professional Practice?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
            Join 500+ professional services that have improved client retention by 89% while reducing costs. Scale without overhead, maintain excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
            <Button
              asChild
              className="bg-tiffany-500 text-black-900 font-semibold px-12 py-6 rounded-none hover:bg-tiffany-400 transition-all duration-300 tracking-wide uppercase text-lg shadow-lg"
            >
              <Link
                href="https://calendly.com/innovationsynergyai/professional-services-ai-assessment"
                target="_blank"
                rel="noopener noreferrer"
              >
                SCHEDULE YOUR PROFESSIONAL AI ASSESSMENT
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-tiffany-500 text-lg font-semibold mb-2">Free Practice Analysis</h3>
              <p className="text-neutral-400">Complete professional services efficiency evaluation</p>
            </div>
            <div>
              <h3 className="text-tiffany-500 text-lg font-semibold mb-2">Guaranteed Growth</h3>
              <p className="text-neutral-400">89% retention improvement or we work for free</p>
            </div>
            <div>
              <h3 className="text-tiffany-500 text-lg font-semibold mb-2">Risk-Free Trial</h3>
              <p className="text-neutral-400">30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>

      <ChatWidget />
    </>
  )
}