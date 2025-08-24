import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ChatWidget from "@/components/ChatWidget"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "AI for Miami Luxury Real Estate - International Client Management",
  description: "Bilingual AI voice agents for Miami luxury real estate. Convert 89% more international inquiries, automate follow-ups for global clients, and increase luxury sales by 47%. Perfect for South Beach and Brickell properties.",
  pathname: "/industries/real-estate",
  city: "miami",
  keywords: [
    "Miami luxury real estate AI",
    "international property lead management",
    "bilingual real estate voice agents Miami",
    "South Beach luxury listing automation", 
    "Brickell property showing scheduling",
    "Miami international client automation",
    "luxury real estate MLS integration",
    "Miami realtor productivity tools",
    "high-end property management Miami",
    "international buyer CRM automation"
  ]
})

const realEstateBenefits = [
  {
    title: "International Lead Conversion",
    description: "Never miss a lead from Latin America or Europe with bilingual instant response and qualification",
    metric: "89% More Conversions"
  },
  {
    title: "Global Follow-up Sequences",
    description: "Systematic lead nurturing across time zones that converts international prospects into luxury clients",
    metric: "47% Faster Sales Cycles"
  },
  {
    title: "24/7 Multilingual Support",
    description: "Around-the-clock availability in English and Spanish for luxury listing details and private showings",
    metric: "24/7 Global Availability"
  },
  {
    title: "Luxury Agent Productivity",
    description: "Eliminate admin tasks so agents focus on high-net-worth relationship building and complex negotiations",
    metric: "78% Time Savings"
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
    name: "Sophia Delacroix",
    title: "International Sales Director, Miami Luxury Properties",
    content: "This bilingual AI system has completely transformed our international business. We're converting 89% more inquiries from Latin American buyers and our luxury sales cycles are 47% faster. It handles English and Spanish seamlessly.",
    savings: "89% Inquiry Conversion"
  },
  {
    name: "Carlos Mendoza", 
    title: "Broker/Owner, Brickell Elite Realty",
    content: "Our team specializes in $2M+ Brickell condos. The AI qualifies international buyers instantly, schedules private showings, and handles cultural nuances perfectly. Our high-end conversion rate has skyrocketed.",
    savings: "$2.1M Additional Sales"
  },
  {
    name: "Isabella Santos",
    title: "South Beach Luxury Specialist",
    content: "For South Beach oceanfront properties, immediate bilingual response is crucial. This AI responds to international inquiries in 15 seconds, pre-qualifies high-net-worth buyers, and my luxury sales have quadrupled.",
    savings: "4x Luxury Sales"
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
    type: "South Beach Oceanfront",
    automations: ["International buyer qualification", "Luxury amenity presentations", "Private beach access coordination", "Cultural preference matching"]
  },
  {
    type: "Brickell High-Rise Condos",
    automations: ["High-net-worth Latin American qualification", "Private showing scheduling", "Building amenity tours", "Investment analysis for foreign buyers"]
  },
  {
    type: "Coral Gables Estates",
    automations: ["Family-oriented international buyers", "School district information", "Historic property details", "Cultural community integration"]
  },
  {
    type: "Miami Beach Investment Properties",
    automations: ["International investor screening", "Rental yield calculations", "Tax advantage explanations", "Property management coordination"]
  }
]

export default function RealEstatePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-black-900 text-white-50 flex items-center justify-center relative py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="bg-tiffany-500 text-black-900 text-xs font-semibold tracking-[0.3em] uppercase mb-6 px-4 py-2">
            NUNCA PIERDA UN CLIENTE INTERNACIONAL
          </Badge>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-6">
            Miami Luxury Real Estate AI That <span className="text-tiffany-500">Sells</span> Globally
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold tracking-[0.1em] mb-6">
            Convert 89% More International Inquiries While Reducing Sales Cycles 47%
          </p>
          
          <p className="text-lg md:text-xl text-neutral-300 tracking-wide mb-4">
            Bilingual AI agents that qualify international luxury buyers instantly and automate follow-ups across time zones
          </p>
          
          <p className="text-tiffany-500 text-lg font-medium tracking-[0.1em] mb-12">
            International Buyer Qualification • Luxury Showing Coordination • Multilingual Follow-up • Global CRM Integration
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
              <div className="text-4xl font-bold text-tiffany-500 mb-2">89%</div>
              <div className="text-white-50 text-sm">International Inquiry Conversion</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">47%</div>
              <div className="text-white-50 text-sm">Faster Sales Cycles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">15 Sec</div>
              <div className="text-white-50 text-sm">Lead Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">78%</div>
              <div className="text-white-50 text-sm">Luxury Agent Time Savings</div>
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