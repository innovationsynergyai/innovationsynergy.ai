import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ChatWidget from "@/components/ChatWidget"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "AI for Restaurants - Ordering & Reservation Automation",
  description: "Restaurant AI voice agents for ordering and reservations. Increase orders 187%, reduce staff costs 45%, and improve customer satisfaction 92%.",
  pathname: "/industries/restaurants",
  keywords: [
    "restaurant AI automation",
    "food ordering voice agents",
    "restaurant reservation system",
    "restaurant phone automation",
    "food delivery automation",
    "restaurant customer service AI",
    "restaurant order management",
    "dining reservation AI",
    "restaurant efficiency automation",
    "food service AI assistant"
  ]
})

const restaurantBenefits = [
  {
    title: "Order Volume Increase",
    description: "Never miss another phone order with 24/7 automated order taking and upselling",
    metric: "187% More Orders"
  },
  {
    title: "Staff Cost Reduction",
    description: "Eliminate 2-3 host positions while handling unlimited simultaneous calls",
    metric: "45% Staff Savings"
  },
  {
    title: "Customer Satisfaction Boost",
    description: "Instant service, accurate orders, and seamless reservation management",
    metric: "92% Satisfaction Increase"
  },
  {
    title: "Revenue Per Customer Growth",
    description: "AI-powered upselling and cross-selling increases average order value",
    metric: "34% Higher AOV"
  }
]

const restaurantFeatures = [
  "Phone order taking and processing",
  "Table reservation management",
  "Menu information and recommendations",
  "Delivery coordination and tracking",
  "Special dietary inquiry handling",
  "Waitlist management and notifications",
  "Catering inquiry processing",
  "Customer feedback collection"
]

const restaurantTestimonials = [
  {
    name: "Tony Martinelli",
    title: "Owner, Tony's Italian Kitchen",
    content: "This AI system has been incredible for our family restaurant. We're taking 3x more phone orders and our reservation system runs perfectly. No more missed calls during dinner rush!",
    savings: "$78K Additional Revenue"
  },
  {
    name: "Lisa Chang",
    title: "Manager, Dragon Palace",
    content: "The AI handles our complex menu perfectly and even suggests add-ons that increase our average order by 34%. Our customers love the instant service, and we've eliminated two host positions.",
    savings: "34% Higher Order Value"
  },
  {
    name: "Carlos Rodriguez",
    title: "Owner, Casa Rodriguez",
    content: "We went from missing 30% of calls during peak hours to capturing every single order. The AI speaks Spanish and English, handles special requests, and integrates with our POS system seamlessly.",
    savings: "Zero Missed Orders"
  }
]

const orderManagementFeatures = [
  "Multilingual Order Taking",
  "POS System Integration",
  "Automatic Upselling & Cross-selling",
  "Special Instructions Processing",
  "Payment Processing Coordination",
  "Order Confirmation & Tracking"
]

const restaurantTypes = [
  {
    type: "Quick Service/Fast Casual",
    automations: ["Phone order processing", "Delivery coordination", "Menu recommendations", "Loyalty program management"]
  },
  {
    type: "Fine Dining",
    automations: ["Reservation management", "Special occasion coordination", "Wine pairing suggestions", "Private dining booking"]
  },
  {
    type: "Pizza & Delivery",
    automations: ["Order customization", "Delivery scheduling", "Address verification", "Order tracking updates"]
  },
  {
    type: "Catering Services",
    automations: ["Event inquiry handling", "Menu customization", "Quote generation", "Delivery coordination"]
  }
]

const peakHourMetrics = [
  {
    metric: "300%",
    description: "More simultaneous calls handled"
  },
  {
    metric: "0",
    description: "Missed orders during rush hours"
  },
  {
    metric: "45 sec",
    description: "Average order processing time"
  },
  {
    metric: "24/7",
    description: "Order taking availability"
  }
]

export default function RestaurantsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-black-900 text-white-50 flex items-center justify-center relative py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="bg-tiffany-500 text-black-900 text-xs font-semibold tracking-[0.3em] uppercase mb-6 px-4 py-2">
            NEVER MISS ANOTHER ORDER
          </Badge>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-6">
            Restaurant AI That <span className="text-tiffany-500">Serves</span> Success
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold tracking-[0.1em] mb-6">
            Increase Orders 187% While Reducing Staff Costs 45%
          </p>
          
          <p className="text-lg md:text-xl text-neutral-300 tracking-wide mb-4">
            Voice agents that take orders, manage reservations, and upsell automatically
          </p>
          
          <p className="text-tiffany-500 text-lg font-medium tracking-[0.1em] mb-12">
            Phone Orders • Reservations • Delivery Coordination • Customer Service
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16">
            <Button
              asChild
              className="bg-tiffany-500 text-black-900 font-semibold px-10 py-5 rounded-none hover:bg-tiffany-400 transition-all duration-300 tracking-wide uppercase text-base shadow-lg"
            >
              <Link
                href="https://calendly.com/innovationsynergyai/restaurant-ai-assessment"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET YOUR RESTAURANT AI ASSESSMENT
              </Link>
            </Button>
            <Button
              asChild
              className="border border-white-50 text-white-50 font-semibold px-8 py-5 rounded-none hover:bg-white-50 hover:text-black-900 transition-all duration-300 tracking-wide uppercase text-base"
            >
              <Link href="#restaurant-calculator">CALCULATE YOUR REVENUE BOOST</Link>
            </Button>
          </div>

          {/* Restaurant Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">187%</div>
              <div className="text-white-50 text-sm">More Orders Taken</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">45%</div>
              <div className="text-white-50 text-sm">Staff Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">34%</div>
              <div className="text-white-50 text-sm">Higher Order Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">0</div>
              <div className="text-white-50 text-sm">Missed Orders</div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Benefits Section */}
      <section className="bg-white-50 py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Why Restaurant Owners Choose Our <span className="text-tiffany-500">AI Solutions</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Built specifically for food service operations that need to maximize every customer interaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {restaurantBenefits.map((benefit, index) => (
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

      {/* Peak Hours Performance Section */}
      <section className="bg-tiffany-500 text-black-900 py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-light mb-8">
            Peak Hours Performance
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            When your restaurant is busiest, our AI performs at its best
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {peakHourMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{item.metric}</div>
                <div className="text-lg">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Types Section */}
      <section className="bg-neutral-50 py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Specialized for Every <span className="text-tiffany-500">Restaurant Type</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our AI adapts to your restaurant concept with industry-specific workflows and terminology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {restaurantTypes.map((restaurant, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-tiffany-600">{restaurant.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {restaurant.automations.map((automation, idx) => (
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

      {/* Order Management Features Section */}
      <section className="bg-white py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-light mb-8">
                Complete Restaurant <span className="text-tiffany-500">Automation Suite</span>
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Our AI handles every aspect of customer interaction, from order taking to reservation management, all while maximizing revenue opportunities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {restaurantFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-tiffany-500 rounded-full"></div>
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-tiffany-100">
              <h3 className="text-2xl font-bold mb-6 text-center">Order Management Features</h3>
              <div className="space-y-4">
                {orderManagementFeatures.map((feature, index) => (
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
                  🍕 Integrates seamlessly with all major POS systems and delivery platforms
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Testimonials Section */}
      <section className="bg-neutral-50 py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Restaurant Owners <span className="text-tiffany-500">Loving</span> The Results
            </h2>
            <p className="text-xl text-neutral-600">Real success stories from restaurants nationwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {restaurantTestimonials.map((testimonial, index) => (
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

      {/* Restaurant CTA Section */}
      <section className="bg-black-900 text-white py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
            Ready to <span className="text-tiffany-500">Transform</span> Your Restaurant Operations?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
            Join 400+ restaurants that have increased orders by 187% while reducing costs. Never miss another call, never lose another customer.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
            <Button
              asChild
              className="bg-tiffany-500 text-black-900 font-semibold px-12 py-6 rounded-none hover:bg-tiffany-400 transition-all duration-300 tracking-wide uppercase text-lg shadow-lg"
            >
              <Link
                href="https://calendly.com/innovationsynergyai/restaurant-ai-assessment"
                target="_blank"
                rel="noopener noreferrer"
              >
                SCHEDULE YOUR RESTAURANT AI ASSESSMENT
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-tiffany-500 text-lg font-semibold mb-2">Free Order Analysis</h3>
              <p className="text-neutral-400">Complete restaurant efficiency evaluation</p>
            </div>
            <div>
              <h3 className="text-tiffany-500 text-lg font-semibold mb-2">Guaranteed ROI</h3>
              <p className="text-neutral-400">187% more orders or we work for free</p>
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