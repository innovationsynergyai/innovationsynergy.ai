import type { Metadata } from "next"
import CaseStudyCard from "@/components/CaseStudyCard"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "Case Studies - Enterprise AI Success Stories",
  description: "See how Innovation Synergy AI helped businesses achieve 300-500% ROI with AI automation. Real metrics, proven results from healthcare to manufacturing.",
  pathname: "/case-studies",
  keywords: [
    "AI case studies",
    "business automation success stories", 
    "AI ROI examples",
    "enterprise AI implementation",
    "voice agent case studies",
    "AI transformation results",
    "business process automation examples",
    "AI consulting testimonials"
  ]
})

const caseStudies = [
  {
    title: "Healthcare Response Time Transformation",
    company: "Pacific Healthcare Solutions",
    industry: "Healthcare",
    description: "A multi-location healthcare network transformed their patient communication system, reducing response times from hours to minutes while maintaining HIPAA compliance.",
    challenge: "Patient inquiries were taking 6+ hours to respond to, leading to frustrated patients and overwhelmed staff. Manual appointment scheduling was creating bottlenecks and errors.",
    solution: "Implemented AI voice agents for appointment scheduling, prescription refill requests, and basic medical inquiries with intelligent routing to appropriate departments.",
    metrics: [
      {
        label: "Response Time",
        before: "6.2 hours",
        after: "12 minutes",
        improvement: "97% faster",
        color: "green" as const
      },
      {
        label: "Patient Satisfaction",
        before: "67%",
        after: "94%",
        improvement: "+40%",
        color: "blue" as const
      },
      {
        label: "Staff Hours Saved",
        before: "0 hours",
        after: "28 hrs/week",
        improvement: "28 hrs/week",
        color: "purple" as const
      },
      {
        label: "Monthly Savings",
        before: "$0",
        after: "$18,400",
        improvement: "$18,400",
        color: "orange" as const
      }
    ],
    timeline: "3 weeks",
    investment: "$47,000",
    roi: "420% ROI"
  },
  {
    title: "Legal Firm Automation Success",
    company: "Metropolitan Law Associates",
    industry: "Legal Services", 
    description: "A growing law firm automated their client intake process and case management, allowing lawyers to focus on high-value legal work while improving client satisfaction.",
    challenge: "Lawyers were spending 60% of their time on administrative tasks. Client intake was inconsistent and prone to errors. Case status updates were delayed.",
    solution: "AI-powered client intake system with intelligent document processing, automated case status updates, and smart scheduling for consultations.",
    metrics: [
      {
        label: "Administrative Time",
        before: "60% of day",
        after: "15% of day", 
        improvement: "75% reduction",
        color: "green" as const
      },
      {
        label: "Case Processing",
        before: "4.5 days",
        after: "1.2 days",
        improvement: "73% faster",
        color: "blue" as const
      },
      {
        label: "Client Satisfaction",
        before: "72%",
        after: "96%",
        improvement: "+33%",
        color: "purple" as const
      },
      {
        label: "Revenue per Lawyer",
        before: "$180K",
        after: "$267K",
        improvement: "+48%",
        color: "orange" as const
      }
    ],
    timeline: "4 weeks",
    investment: "$63,000",
    roi: "485% ROI"
  },
  {
    title: "Manufacturing Efficiency Revolution", 
    company: "Apex Manufacturing Corp",
    industry: "Manufacturing",
    description: "A mid-size manufacturing company eliminated production bottlenecks and reduced downtime through predictive maintenance and automated quality control systems.",
    challenge: "Unexpected equipment failures were causing 8-12 hour production stops. Quality control was manual and slow. Maintenance schedules were reactive, not predictive.",
    solution: "AI-powered predictive maintenance system with IoT sensors, automated quality control with computer vision, and intelligent production scheduling.",
    metrics: [
      {
        label: "Production Downtime",
        before: "18% of time",
        after: "3% of time", 
        improvement: "83% reduction",
        color: "green" as const
      },
      {
        label: "Quality Control Speed",
        before: "45 min/batch",
        after: "3 min/batch",
        improvement: "93% faster",
        color: "blue" as const
      },
      {
        label: "Output Efficiency",
        before: "78% capacity",
        after: "96% capacity",
        improvement: "+23%",
        color: "purple" as const
      },
      {
        label: "Annual Savings",
        before: "$0",
        after: "$340K",
        improvement: "$340K",
        color: "orange" as const
      }
    ],
    timeline: "6 weeks",
    investment: "$89,000",
    roi: "382% ROI"
  },
  {
    title: "Real Estate Portfolio Optimization",
    company: "Summit Real Estate Group", 
    industry: "Real Estate",
    description: "A property management company streamlined tenant communications, maintenance requests, and lease management across 400+ properties with AI automation.",
    challenge: "Managing 400+ properties meant constant tenant calls, maintenance coordination chaos, and lease tracking nightmares. Response times were slow and tenants were frustrated.",
    solution: "Comprehensive AI system for tenant communications, automated maintenance scheduling with vendor coordination, and intelligent lease management with renewal predictions.",
    metrics: [
      {
        label: "Tenant Response Time",
        before: "2.3 days",
        after: "4.2 hours",
        improvement: "85% faster",
        color: "green" as const
      },
      {
        label: "Maintenance Efficiency", 
        before: "67% completion",
        after: "94% completion",
        improvement: "+40%",
        color: "blue" as const
      },
      {
        label: "Staff Productivity",
        before: "100% baseline",
        after: "178% baseline",
        improvement: "+78%",
        color: "purple" as const
      },
      {
        label: "Operating Cost Reduction",
        before: "$0",
        after: "$52K/year",
        improvement: "$52K/year",
        color: "orange" as const
      }
    ],
    timeline: "5 weeks",
    investment: "$71,000",
    roi: "347% ROI"
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
              Real Results, Real Businesses
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              See how our AI solutions delivered measurable ROI for companies across industries. 
              These are real metrics from real implementations.
            </p>
            <div className="mt-8 flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold">385%</div>
                <div className="text-sm text-blue-200">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.2 weeks</div>
                <div className="text-sm text-blue-200">Avg Implementation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">97%</div>
                <div className="text-sm text-blue-200">Client Satisfaction</div>
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
              Success Across Industries
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our AI solutions deliver consistent results regardless of your industry
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Healthcare</h3>
              <p className="text-sm text-gray-600 mt-2">97% faster response times</p>
              <p className="text-sm text-gray-600">HIPAA-compliant solutions</p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Legal Services</h3>
              <p className="text-sm text-gray-600 mt-2">75% less admin time</p>
              <p className="text-sm text-gray-600">48% revenue increase</p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Manufacturing</h3>
              <p className="text-sm text-gray-600 mt-2">83% downtime reduction</p>
              <p className="text-sm text-gray-600">$340K annual savings</p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Real Estate</h3>
              <p className="text-sm text-gray-600 mt-2">85% faster responses</p>
              <p className="text-sm text-gray-600">78% productivity boost</p>
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