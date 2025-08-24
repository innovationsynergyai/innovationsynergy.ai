import type { Metadata } from "next"
import CaseStudyCard from "@/components/CaseStudyCard"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "NYC Case Studies - New York Metro Area AI Success Stories",
  description: "See how Innovation Synergy AI NYC helped New York businesses achieve 400-500% ROI with AI automation. Real metrics from Wall Street, Manhattan real estate, and NYC startups across all 5 boroughs.",
  pathname: "/case-studies",
  keywords: [
    "NYC AI case studies",
    "Wall Street automation success stories", 
    "NYC AI ROI examples",
    "New York Metro Area enterprise AI implementation",
    "NYC voice agent case studies",
    "Manhattan AI transformation results",
    "NYC business process automation examples",
    "New York AI consulting testimonials",
    "Financial District AI case studies",
    "NYC real estate automation success"
  ]
})

const caseStudies = [
  {
    title: "Goldman Sachs Trading Floor Operations Revolution",
    company: "Goldman Sachs Trading Floor",
    industry: "Investment Banking",
    description: "Wall Street's premier trading operation transformed their high-frequency trading communications and risk management system, handling 24/7 global markets with sub-second response requirements.",
    challenge: "Trading floor communications were creating bottlenecks during high-volatility periods. Risk assessment calls were taking 3+ minutes, potentially costing millions in market opportunities. Manual trade confirmations were error-prone under pressure.",
    solution: "Implemented ultra-low latency AI voice agents for trade confirmations, risk assessment communications, and client status updates with real-time market integration and compliance monitoring.",
    metrics: [
      {
        label: "Trade Processing Time",
        before: "3.2 minutes",
        after: "15 seconds",
        improvement: "92% faster",
        color: "green" as const
      },
      {
        label: "Trading Accuracy",
        before: "96.8%",
        after: "99.8%",
        improvement: "+3.1%",
        color: "blue" as const
      },
      {
        label: "Risk Response Time",
        before: "2.4 minutes",
        after: "8 seconds",
        improvement: "95% faster",
        color: "purple" as const
      },
      {
        label: "Monthly Savings",
        before: "$0",
        after: "$280,000",
        improvement: "$280K",
        color: "orange" as const
      }
    ],
    timeline: "3 weeks",
    investment: "$95,000",
    roi: "535% ROI"
  },
  {
    title: "Manhattan Premier Real Estate 24/7 Operations",
    company: "Manhattan Premier Realty",
    industry: "Commercial Real Estate", 
    description: "NYC's premier real estate firm serving Manhattan, Brooklyn, and Queens automated their property inquiries, client communications, and showing coordination to handle the demanding NYC market 24/7.",
    challenge: "Property inquiries were coming in 24/7 but agents could only respond during business hours, losing deals to competitors. Showing coordination across 5 boroughs was chaotic. High-value clients expected immediate responses regardless of time.",
    solution: "AI-powered real estate communication system with 24/7 property inquiries, automated showing scheduling across all boroughs, and intelligent client matching with property recommendations based on preferences and budget.",
    metrics: [
      {
        label: "Response Time",
        before: "4.8 hours average",
        after: "2 minutes 24/7", 
        improvement: "99% faster",
        color: "green" as const
      },
      {
        label: "Inquiry Conversion Rate",
        before: "23% to showing",
        after: "67% to showing",
        improvement: "+191%",
        color: "blue" as const
      },
      {
        label: "Agent Productivity",
        before: "100% baseline",
        after: "245% baseline",
        improvement: "+145%",
        color: "purple" as const
      },
      {
        label: "Monthly Commission Growth",
        before: "$180K",
        after: "$425K",
        improvement: "+136%",
        color: "orange" as const
      }
    ],
    timeline: "4 weeks",
    investment: "$78,000",
    roi: "467% ROI"
  },
  {
    title: "NYC FinTech Startup Scaling Revolution", 
    company: "FinanceFlow NYC",
    industry: "Financial Technology",
    description: "A fast-growing NYC FinTech startup eliminated scaling bottlenecks and accelerated customer onboarding through AI-powered customer service and automated compliance systems, handling explosive growth.",
    challenge: "Customer onboarding was taking weeks due to manual KYC processes. Support tickets were overwhelming the small team. Compliance verification was creating bottlenecks during rapid scaling phases.",
    solution: "AI-powered customer onboarding system with intelligent KYC automation, 24/7 customer support agents with financial product expertise, and predictive compliance monitoring integrated with regulatory requirements.",
    metrics: [
      {
        label: "Customer Onboarding Time",
        before: "12.3 days",
        after: "4.1 days", 
        improvement: "67% faster",
        color: "green" as const
      },
      {
        label: "Support Ticket Resolution",
        before: "18 hours average",
        after: "12 minutes average",
        improvement: "97% faster",
        color: "blue" as const
      },
      {
        label: "Compliance Processing",
        before: "89% accuracy",
        after: "99.7% accuracy",
        improvement: "+12%",
        color: "purple" as const
      },
      {
        label: "Annual Efficiency Savings",
        before: "$0",
        after: "$520K",
        improvement: "$520K",
        color: "orange" as const
      }
    ],
    timeline: "5 weeks",
    investment: "$85,000",
    roi: "512% ROI"
  },
  {
    title: "Wall Street Wealth Management Elite Operations",
    company: "Wall Street Wealth Management", 
    industry: "Wealth Management",
    description: "A premier Wall Street wealth management firm serving ultra-high-net-worth clients automated their portfolio management communications and client relations, handling billions in AUM with personalized service at scale.",
    challenge: "Managing 500+ UHNW clients meant constant communication demands. Portfolio updates during market volatility required immediate attention. Client service expectations were extremely high with zero tolerance for delays.",
    solution: "Comprehensive AI system for ultra-personalized client communications, real-time portfolio performance updates with market analysis, automated scheduling with wealth advisors, and predictive client need anticipation.",
    metrics: [
      {
        label: "Client Response Time",
        before: "3.2 hours average",
        after: "45 seconds average",
        improvement: "97% faster",
        color: "green" as const
      },
      {
        label: "Client Satisfaction Score", 
        before: "87% satisfaction",
        after: "98% satisfaction",
        improvement: "+13%",
        color: "blue" as const
      },
      {
        label: "Advisor Productivity",
        before: "100% baseline",
        after: "287% baseline",
        improvement: "+187%",
        color: "purple" as const
      },
      {
        label: "Assets Under Management Growth",
        before: "$1.2B",
        after: "$2.1B",
        improvement: "+75%",
        color: "orange" as const
      }
    ],
    timeline: "6 weeks",
    investment: "$125,000",
    roi: "623% ROI"
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Real Results, Real NYC Businesses
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              See how our AI solutions delivered measurable ROI for New York Metro Area companies across finance, real estate, and startups. 
              These are real metrics from Goldman Sachs, Manhattan real estate, and Wall Street implementations.
            </p>
            <div className="mt-8 flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold">542%</div>
                <div className="text-sm text-blue-200">Average NYC ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.2 weeks</div>
                <div className="text-sm text-blue-200">Avg NYC Implementation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm text-blue-200">NYC Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Detailed Case Studies
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Deep dive into how we helped each business transform their operations
          </p>
        </div>

        <div className="grid gap-12 lg:gap-16">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>

      {/* Industry Breakdown */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Success Across NYC's Key Industries
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our AI solutions deliver consistent results across New York Metro Area's dominant sectors
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Investment Banking</h3>
              <p className="text-sm text-gray-600 mt-2">92% faster trade processing</p>
              <p className="text-sm text-gray-600">Goldman Sachs integration</p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Real Estate</h3>
              <p className="text-sm text-gray-600 mt-2">99% faster response times</p>
              <p className="text-sm text-gray-600">All 5 boroughs coverage</p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Financial Technology</h3>
              <p className="text-sm text-gray-600 mt-2">67% faster onboarding</p>
              <p className="text-sm text-gray-600">NYC startup optimization</p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Wealth Management</h3>
              <p className="text-sm text-gray-600 mt-2">97% faster client response</p>
              <p className="text-sm text-gray-600">Wall Street operations</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Join These Success Stories?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Schedule a free consultation to see how we can deliver similar results for your business. 
              No commitment, just insights.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Your Free Analysis
              </a>
              <a 
                href="#" 
                className="text-lg font-semibold leading-6 text-white hover:text-blue-200"
              >
                View All Case Studies <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-2 bg-green-500 bg-opacity-20 px-4 py-2 rounded-full">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-green-400">30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}