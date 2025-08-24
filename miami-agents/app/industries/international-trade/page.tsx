import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "AI Automation for Miami International Trade & Business",
  description: "Multilingual AI agents for Miami's international trade sector. Eliminate administrative positions while accelerating Latin America and Caribbean business operations. Serving Brickell financial district and international commerce.",
  pathname: "/industries/international-trade",
  city: "miami",
  keywords: [
    "Miami international trade AI",
    "Latin America business automation",
    "Brickell trade AI agents",
    "multilingual trade automation",
    "Miami import export AI",
    "Caribbean business AI Miami",
    "international commerce automation",
    "cross-border trade AI Miami",
    "Miami trade finance automation",
    "Latin American market AI"
  ]
})

export default function InternationalTradePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-teal-800 to-blue-700 text-white py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Accelerate Your <span className="text-emerald-300">International Trade</span> Operations
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Multilingual AI agents that eliminate administrative positions while accelerating Latin America & Caribbean business by 73%
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-emerald-600 px-4 py-2 rounded-full">🌎 Latin America Gateway</span>
              <span className="bg-teal-600 px-4 py-2 rounded-full">📋 Trade Documentation</span>
              <span className="bg-blue-600 px-4 py-2 rounded-full">🗣️ 5+ Languages</span>
              <span className="bg-emerald-600 px-4 py-2 rounded-full">⏰ Global Time Zones</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Miami International Trade Challenges We Solve
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-red-500 text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-3">Multilingual Communication</h3>
              <p className="text-gray-600">
                Trading with 20+ Latin American countries requires native-level communication in Spanish, Portuguese, and English across different business cultures.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-red-500 text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-3">Complex Documentation</h3>
              <p className="text-gray-600">
                International trade documentation requires precision across customs, compliance, and regulatory requirements in multiple jurisdictions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-red-500 text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-3">Global Time Zone Coordination</h3>
              <p className="text-gray-600">
                Coordinating with partners from São Paulo to Mexico City across 6+ time zones requires 24/7 operational capability.
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
              Our Miami International Trade AI Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multilingual AI agents trained specifically for Latin America and Caribbean trade operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect for Miami's International Trade Hub</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <strong>Multilingual Mastery:</strong> Native-level Spanish, Portuguese, English, and French communication
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <strong>Trade Documentation:</strong> Automated customs forms, compliance checks, and regulatory filings
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <strong>Cultural Intelligence:</strong> Business etiquette and negotiation styles for each Latin American market
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <strong>24/7 Global Operations:</strong> Follow-the-sun coverage from Mexico to Argentina
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Miami International Trade Metrics</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Transaction Processing Speed</span>
                  <span className="font-bold text-green-600">73% Faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Client Onboarding Time</span>
                  <span className="font-bold text-green-600">58% Reduction</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Document Accuracy</span>
                  <span className="font-bold text-green-600">99.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Annual Efficiency Gains</span>
                  <span className="font-bold text-green-600">$580K</span>
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
            Miami International Trade Use Cases
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">🚢 Import/Export Operations</h3>
              <p className="text-gray-600 mb-4">
                Streamline cargo documentation, customs clearance, and logistics coordination across Latin American ports.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Automated customs documentation</li>
                <li>• Multi-port logistics coordination</li>
                <li>• Regulatory compliance tracking</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">💰 Trade Finance</h3>
              <p className="text-gray-600 mb-4">
                Manage letters of credit, documentary collections, and trade financing across multiple currencies and jurisdictions.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Multi-currency transactions</li>
                <li>• Letter of credit processing</li>
                <li>• Risk assessment automation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">🤝 Partner Relations</h3>
              <p className="text-gray-600 mb-4">
                Maintain relationships with distributors, suppliers, and partners across Latin America and Caribbean markets.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Cultural communication protocols</li>
                <li>• Partner onboarding automation</li>
                <li>• Relationship management CRM</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">📊 Market Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Monitor market conditions, regulatory changes, and business opportunities across emerging markets.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Real-time market analysis</li>
                <li>• Regulatory change monitoring</li>
                <li>• Opportunity identification</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">⚖️ Compliance Management</h3>
              <p className="text-gray-600 mb-4">
                Ensure compliance with OFAC, export controls, and local regulations across all trading jurisdictions.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Automated compliance screening</li>
                <li>• Sanctions list monitoring</li>
                <li>• Audit trail maintenance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">🔗 Supply Chain Optimization</h3>
              <p className="text-gray-600 mb-4">
                Optimize supply chains from raw materials in South America to finished goods distribution.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• End-to-end supply tracking</li>
                <li>• Vendor performance monitoring</li>
                <li>• Logistics optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 px-6">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Miami International Trade ROI Calculator
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Current Costs</h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span>Trade Specialists (4 positions)</span>
                  <span className="font-bold">$280K/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Multilingual Premium (30%)</span>
                  <span className="font-bold">$84K/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Documentation Errors</span>
                  <span className="font-bold">$120K/year</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total Annual Cost</span>
                  <span className="text-red-600">$484K</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">AI Solution</h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span>AI Implementation</span>
                  <span className="font-bold">$24K/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Multilingual Training Included</span>
                  <span className="font-bold">$0</span>
                </div>
                <div className="flex justify-between">
                  <span>Error-Free Processing</span>
                  <span className="font-bold">$0</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total Annual Cost</span>
                  <span className="text-blue-600">$24K</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Annual Savings</h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span>Direct Cost Savings</span>
                  <span className="font-bold">$460K</span>
                </div>
                <div className="flex justify-between">
                  <span>Faster Processing (73%)</span>
                  <span className="font-bold">$320K</span>
                </div>
                <div className="flex justify-between">
                  <span>Error Elimination</span>
                  <span className="font-bold">$120K</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total Annual Benefit</span>
                  <span className="text-green-600">$900K</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">Miami International Trade ROI: 3,650%</h3>
            <p className="text-xl mb-6">
              Pay back your investment in just 9 days with $900K+ annual benefits
            </p>
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              Calculate Your International Trade ROI
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-600 to-emerald-700 text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your International Trade Operations?
          </h2>
          <p className="text-xl mb-8">
            Join Brickell trading firms already saving $900K+ annually with multilingual AI automation
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              Schedule International Trade Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-teal-700 transition">
              Download Trade Case Studies
            </button>
          </div>
          
          <div className="mt-8 text-sm opacity-90">
            🌎 Gateway to Latin America • Caribbean • Central America • South America
          </div>
        </div>
      </section>
    </div>
  )
}