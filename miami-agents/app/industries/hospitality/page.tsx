import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "AI Automation for Miami Hospitality Industry",
  description: "Revolutionary bilingual AI agents for Miami hotels, resorts, and tourism businesses. Eliminate front desk positions while increasing guest satisfaction 94%. Serving South Beach, Brickell, and Coral Gables hospitality sector.",
  pathname: "/industries/hospitality",
  city: "miami",
  keywords: [
    "Miami hotel AI automation",
    "South Beach resort AI agents",
    "bilingual hospitality AI Miami",
    "Miami tourism automation",
    "hotel front desk AI Miami",
    "resort guest services automation",
    "Miami hospitality technology",
    "multilingual hotel AI agents",
    "Brickell hotel automation",
    "Coral Gables luxury service AI"
  ]
})

export default function HospitalityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-teal-800 to-cyan-700 text-white py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-cyan-300">Miami Hospitality</span> Operations
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100">
              Bilingual AI agents that eliminate front desk positions while increasing guest satisfaction by 94%
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-cyan-600 px-4 py-2 rounded-full">🏨 South Beach Hotels</span>
              <span className="bg-teal-600 px-4 py-2 rounded-full">🌴 Resort Automation</span>
              <span className="bg-blue-600 px-4 py-2 rounded-full">🗣️ English & Spanish</span>
              <span className="bg-cyan-600 px-4 py-2 rounded-full">🌍 24/7 International Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Miami Hospitality Challenges We Solve
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-red-500 text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-3">Language Barriers</h3>
              <p className="text-gray-600">
                International guests struggle with English-only service. Staff overwhelmed by multilingual requests from Latin America and Caribbean visitors.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-red-500 text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-3">24/7 Service Demands</h3>
              <p className="text-gray-600">
                Miami's international clientele operates across multiple time zones. Front desk staff can't provide round-the-clock personalized service.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-red-500 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">High Labor Costs</h3>
              <p className="text-gray-600">
                Miami hospitality wages are among highest in Florida. Bilingual staff command premium salaries. Turnover costs exceed $15K per position.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Miami Hospitality AI Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bilingual AI agents trained specifically for Miami's international hospitality market
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect for Miami Hotels & Resorts</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <strong>Bilingual Excellence:</strong> Fluent English and Spanish communication for Latin American guests
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <strong>24/7 International Support:</strong> Never miss a booking from different time zones
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <strong>Cultural Sensitivity:</strong> Trained on Miami's diverse hospitality expectations
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <strong>Instant Responses:</strong> Reduce response time from 45 minutes to 2 minutes
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Miami Success Metrics</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Guest Satisfaction Increase</span>
                  <span className="font-bold text-green-600">+67%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Response Time Improvement</span>
                  <span className="font-bold text-green-600">45min → 2min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Front Desk Cost Reduction</span>
                  <span className="font-bold text-green-600">$38,400/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>International Booking Increase</span>
                  <span className="font-bold text-green-600">+41%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Miami Hospitality Use Cases
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">🏨 South Beach Luxury Hotels</h3>
              <p className="text-gray-600 mb-4">
                Handle VIP guest requests, concierge services, and luxury amenities booking in English and Spanish.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Elite guest recognition</li>
                <li>• Luxury service coordination</li>
                <li>• VIP experience management</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">🌴 Resort Operations</h3>
              <p className="text-gray-600 mb-4">
                Manage resort activities, dining reservations, and guest services across multiple languages.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Activity booking coordination</li>
                <li>• Multilingual guest assistance</li>
                <li>• Resort amenity management</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">🛥️ Marina & Yacht Services</h3>
              <p className="text-gray-600 mb-4">
                Coordinate yacht charters, marina services, and luxury water activities for international clients.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Charter booking management</li>
                <li>• International client service</li>
                <li>• Luxury experience coordination</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">🍽️ Fine Dining Restaurants</h3>
              <p className="text-gray-600 mb-4">
                Handle reservations, special dietary requests, and wine pairing recommendations bilingually.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Bilingual reservation system</li>
                <li>• Dietary preference management</li>
                <li>• Cultural dining preferences</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">🎭 Event & Wedding Planning</h3>
              <p className="text-gray-600 mb-4">
                Coordinate luxury events, destination weddings, and corporate functions for international clients.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• International event coordination</li>
                <li>• Vendor management</li>
                <li>• Cultural event customization</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">🚗 Transportation & Tours</h3>
              <p className="text-gray-600 mb-4">
                Arrange luxury transportation, Miami tours, and Everglades excursions in multiple languages.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Luxury transport booking</li>
                <li>• Tourism coordination</li>
                <li>• Multilingual tour guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 px-6">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Miami Hospitality ROI Calculator
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Current Costs</h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span>Front Desk Staff (3 positions)</span>
                  <span className="font-bold">$156K/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Bilingual Premium (20%)</span>
                  <span className="font-bold">$31K/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Training & Turnover</span>
                  <span className="font-bold">$45K/year</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total Annual Cost</span>
                  <span className="text-red-600">$232K</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">AI Solution</h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span>AI Implementation</span>
                  <span className="font-bold">$12K/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Bilingual Training Included</span>
                  <span className="font-bold">$0</span>
                </div>
                <div className="flex justify-between">
                  <span>24/7 Support Included</span>
                  <span className="font-bold">$0</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total Annual Cost</span>
                  <span className="text-blue-600">$12K</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Annual Savings</h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span>Direct Cost Savings</span>
                  <span className="font-bold">$220K</span>
                </div>
                <div className="flex justify-between">
                  <span>Revenue Increase (41%)</span>
                  <span className="font-bold">$180K</span>
                </div>
                <div className="flex justify-between">
                  <span>Guest Satisfaction Bonus</span>
                  <span className="font-bold">$50K</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total Annual Benefit</span>
                  <span className="text-green-600">$450K</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">Miami Hospitality ROI: 3,650%</h3>
            <p className="text-xl mb-6">
              Pay back your investment in just 9 days with $450K+ annual benefits
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              Calculate Your Specific Miami ROI
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Miami Hospitality Business?
          </h2>
          <p className="text-xl mb-8">
            Join South Beach resorts and Brickell hotels already saving $450K+ annually with bilingual AI agents
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              Schedule Miami Hospitality Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-700 transition">
              Download Miami Case Studies
            </button>
          </div>
          
          <div className="mt-8 text-sm opacity-90">
            🏨 Serving South Beach • Brickell • Coral Gables • Miami Beach • Downtown Miami
          </div>
        </div>
      </section>
    </div>
  )
}