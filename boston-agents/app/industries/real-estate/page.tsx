import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ChatWidget from "@/components/ChatWidget"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "AI for Real Estate - Lead Management & Follow-up Automation",
  description: "AI voice agents for real estate agencies. Convert 94% more leads, automate follow-ups, and increase closings by 156% while reducing agent workload.",
  pathname: "/industries/real-estate",
  keywords: [
    "real estate AI automation",
    "property lead management",
    "real estate voice agents",
    "listing inquiry automation", 
    "property showing scheduling",
    "real estate follow-up automation",
    "MLS integration AI",
    "realtor productivity tools",
    "property management automation",
    "real estate CRM automation"
  ]
})

const realEstateBenefits = [
  {
    title: "Lead Conversion Optimization",
    description: "Never miss a lead again with instant response and qualification for every property inquiry",
    metric: "94% More Conversions"
  },
  {
    title: "Automated Follow-up Sequences",
    description: "Systematic lead nurturing that converts prospects into clients over time",
    metric: "156% More Closings"
  },
  {
    title: "24/7 Property Information",
    description: "Around-the-clock availability for listing details, showing schedules, and market information",
    metric: "24/7 Availability"
  },
  {
    title: "Agent Productivity Boost",
    description: "Eliminate admin tasks so agents focus on high-value relationship building and negotiations",
    metric: "73% Time Savings"
  }
]

const realEstateFeatures = [
  "Lead qualification and scoring",
  "Property showing scheduling",
  "Listing inquiry management",
  "Market analysis requests",
  "Buyer preference profiling",
  "Mortgage pre-approval coordination",
  "Neighborhood information delivery",
  "CMA request processing"
]

const realEstateTestimonials = [
  {
    name: "Maria Rodriguez",
    title: "Top Producer, Coldwell Banker",
    content: "This AI system has completely transformed my business. I'm converting 94% more leads and closing 2.5x more deals per month. It's like having a full-time assistant that never sleeps.",
    savings: "250% Revenue Increase"
  },
  {
    name: "David Kim", 
    title: "Broker/Owner, Kim Realty Group",
    content: "Our team of 12 agents now handles the lead volume of a 30-agent team. The AI qualifies leads instantly and schedules showings automatically. Our conversion rate has skyrocketed.",
    savings: "$340K Additional Revenue"
  },
  {
    name: "Sarah Mitchell",
    title: "Luxury Property Specialist",
    content: "For high-end properties, immediate response is crucial. This AI responds to inquiries in 15 seconds, pre-qualifies buyers, and schedules private showings. My luxury sales have tripled.",
    savings: "3x Luxury Sales"
  }
]

const leadManagementFeatures = [
  "Instant Lead Response (15 seconds)",
  "Automated Lead Qualification",
  "CRM Integration & Scoring",
  "Follow-up Sequence Automation",
  "Showing Appointment Scheduling", 
  "Lead Source Attribution Tracking"
]

const propertyTypes = [
  {
    type: "Residential Sales",
    automations: ["Buyer qualification", "Property matching", "Showing coordination", "Offer negotiation support"]
  },
  {
    type: "Luxury Properties",
    automations: ["High-net-worth qualification", "Private showing scheduling", "Concierge-level service", "Confidential transaction handling"]
  },
  {
    type: "Commercial Real Estate",
    automations: ["Investment criteria assessment", "ROI calculations", "Zoning information", "Market analysis delivery"]
  },
  {
    type: "Property Management",
    automations: ["Tenant screening", "Maintenance requests", "Lease renewals", "Rent collection coordination"]
  }
]

export default function RealEstatePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-black-900 text-white-50 flex items-center justify-center relative py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="bg-tiffany-500 text-black-900 text-xs font-semibold tracking-[0.3em] uppercase mb-6 px-4 py-2">
            NEVER MISS A LEAD AGAIN
          </Badge>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-6">
            Real Estate AI That <span className="text-tiffany-500">Sells</span> More
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold tracking-[0.1em] mb-6">
            Convert 94% More Leads While Increasing Closings 156%
          </p>
          
          <p className="text-lg md:text-xl text-neutral-300 tracking-wide mb-4">
            Voice agents that qualify leads instantly and automate follow-ups for maximum conversion
          </p>
          
          <p className="text-tiffany-500 text-lg font-medium tracking-[0.1em] mb-12">
            Lead Qualification • Showing Scheduling • Follow-up Automation • CRM Integration
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16">
            <Button
              asChild
              className="bg-tiffany-500 text-black-900 font-semibold px-10 py-5 rounded-none hover:bg-tiffany-400 transition-all duration-300 tracking-wide uppercase text-base shadow-lg"
            >
              <Link
                href="https://calendly.com/innovationsynergyai/real-estate-ai-assessment"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET YOUR LEAD CONVERSION ASSESSMENT
              </Link>
            </Button>
            <Button
              asChild
              className="border border-white-50 text-white-50 font-semibold px-8 py-5 rounded-none hover:bg-white-50 hover:text-black-900 transition-all duration-300 tracking-wide uppercase text-base"
            >
              <Link href="#realtor-calculator">CALCULATE YOUR COMMISSION BOOST</Link>
            </Button>
          </div>

          {/* Real Estate Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">94%</div>
              <div className="text-white-50 text-sm">More Lead Conversions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">156%</div>
              <div className="text-white-50 text-sm">More Closings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">15 Sec</div>
              <div className="text-white-50 text-sm">Lead Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">73%</div>
              <div className="text-white-50 text-sm">Agent Time Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Benefits Section */}
      <section className="bg-white-50 py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Why Top Producers Choose Our <span className="text-tiffany-500">AI Solutions</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Built specifically for real estate professionals who want to dominate their market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {realEstateBenefits.map((benefit, index) => (
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

      {/* Property Types Section */}
      <section className="bg-neutral-50 py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Specialized for Every <span className="text-tiffany-500">Property Type</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our AI adapts to your specialty with industry-specific workflows and terminology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {propertyTypes.map((property, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-tiffany-600">{property.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {property.automations.map((automation, idx) => (
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

      {/* Lead Management Features Section */}
      <section className="bg-white py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-light mb-8">
                Complete Lead <span className="text-tiffany-500">Management System</span>
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Our AI captures, qualifies, and nurtures every lead automatically, ensuring maximum conversion rates and agent productivity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {realEstateFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-tiffany-500 rounded-full"></div>
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-tiffany-100">
              <h3 className="text-2xl font-bold mb-6 text-center">Lead Management Features</h3>
              <div className="space-y-4">
                {leadManagementFeatures.map((feature, index) => (
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
                  📈 Average lead response time drops from 4 hours to 15 seconds
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Testimonials Section */}
      <section className="bg-neutral-50 py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Top Producers <span className="text-tiffany-500">Winning</span> With AI
            </h2>
            <p className="text-xl text-neutral-600">Real results from real estate professionals nationwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {realEstateTestimonials.map((testimonial, index) => (
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

      {/* Real Estate CTA Section */}
      <section className="bg-black-900 text-white py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
            Ready to <span className="text-tiffany-500">Dominate</span> Your Real Estate Market?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
            Join 300+ top producers who have 2.5x their business with AI-powered lead management. Never miss a lead, never lose a deal.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
            <Button
              asChild
              className="bg-tiffany-500 text-black-900 font-semibold px-12 py-6 rounded-none hover:bg-tiffany-400 transition-all duration-300 tracking-wide uppercase text-lg shadow-lg"
            >
              <Link
                href="https://calendly.com/innovationsynergyai/real-estate-ai-assessment"
                target="_blank"
                rel="noopener noreferrer"
              >
                SCHEDULE YOUR LEAD CONVERSION ASSESSMENT
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-tiffany-500 text-lg font-semibold mb-2">Free Lead Analysis</h3>
              <p className="text-neutral-400">Complete lead conversion opportunity evaluation</p>
            </div>
            <div>
              <h3 className="text-tiffany-500 text-lg font-semibold mb-2">Guaranteed Results</h3>
              <p className="text-neutral-400">94% more conversions or we work for free</p>
            </div>
            <div>
              <h3 className="text-tiffany-500 text-lg font-semibold mb-2">30-Day Trial</h3>
              <p className="text-neutral-400">Risk-free trial with money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>

      <ChatWidget />
    </>
  )
}