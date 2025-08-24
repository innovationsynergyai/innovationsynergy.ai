import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ChatWidget from "@/components/ChatWidget"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "AI for Law Firms - Secure Legal Practice Automation",
  description: "Attorney-client privileged AI voice agents for law firms. Reduce billable hour waste by 73%, improve client retention 82%, and ensure complete legal confidentiality.",
  pathname: "/industries/legal",
  keywords: [
    "legal AI automation",
    "law firm voice agents", 
    "attorney client privilege AI",
    "legal practice management",
    "law office automation",
    "legal billing efficiency",
    "client intake automation",
    "legal document management",
    "court scheduling AI",
    "legal research automation"
  ]
})

const legalBenefits = [
  {
    title: "Attorney-Client Privilege Protected",
    description: "Military-grade encryption and legal-specific confidentiality protocols for all client communications",
    metric: "100% Confidential"
  },
  {
    title: "Billable Hour Optimization", 
    description: "Eliminate non-billable admin tasks and focus attorneys on high-value legal work",
    metric: "73% Efficiency Gain"
  },
  {
    title: "24/7 Client Service",
    description: "Round-the-clock client intake, case status updates, and appointment scheduling",
    metric: "24/7 Availability"
  },
  {
    title: "Improved Client Retention",
    description: "Instant response times and proactive client communication increase satisfaction",
    metric: "82% Retention Increase"
  }
]

const legalFeatures = [
  "Client intake and conflict checking",
  "Court filing deadline reminders",
  "Appointment scheduling with attorneys",
  "Case status inquiries and updates", 
  "Document collection coordination",
  "Billing inquiries and payment processing",
  "Consultation scheduling and preparation",
  "Legal document delivery notifications"
]

const legalTestimonials = [
  {
    name: "Sarah Williams, Esq.",
    title: "Managing Partner, Williams & Associates",
    content: "Our AI system has transformed our practice efficiency. We've eliminated 2 paralegal positions while increasing our case capacity by 156%. The confidentiality features exceed bar association requirements.",
    savings: "$127K annually"
  },
  {
    name: "Michael Chen, Esq.",
    title: "Senior Partner, Chen Legal Group",
    content: "The client intake automation alone has been worth the investment. We capture 89% more qualified leads, and our attorneys spend zero time on routine scheduling.",
    savings: "2.3x Lead Conversion"
  },
  {
    name: "Jennifer Rodriguez, Esq.",
    title: "Solo Practitioner",
    content: "As a solo attorney, this AI system gives me the infrastructure of a large firm. I can now handle 3x more cases while maintaining exceptional client service.",
    savings: "300% Case Increase"
  }
]

const confidentialityFeatures = [
  "AES-256 Military-Grade Encryption",
  "Attorney-Client Privilege Compliance",
  "Secure Document Handling",
  "Audit Trail for All Communications", 
  "Bar Association Approved Protocols",
  "Privileged Information Safeguards"
]

const practiceAreaExamples = [
  {
    area: "Personal Injury",
    automations: ["Initial client screening", "Medical record requests", "Insurance claim coordination", "Settlement negotiations tracking"]
  },
  {
    area: "Family Law", 
    automations: ["Divorce consultation scheduling", "Child support calculations", "Custody arrangement coordination", "Court date notifications"]
  },
  {
    area: "Corporate Law",
    automations: ["Contract review scheduling", "Compliance deadline tracking", "Board meeting coordination", "Filing requirement reminders"]
  },
  {
    area: "Criminal Defense",
    automations: ["Client check-ins", "Court appearance reminders", "Evidence gathering coordination", "Plea negotiation scheduling"]
  }
]

export default function LegalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-black-900 text-white-50 flex items-center justify-center relative py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="bg-tiffany-500 text-black-900 text-xs font-semibold tracking-[0.3em] uppercase mb-6 px-4 py-2">
            ATTORNEY-CLIENT PRIVILEGE PROTECTED
          </Badge>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-6">
            Legal AI That <span className="text-tiffany-500">Serves</span> Justice
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold tracking-[0.1em] mb-6">
            Reduce Non-Billable Hours 73% While Maximizing Client Satisfaction
          </p>
          
          <p className="text-lg md:text-xl text-neutral-300 tracking-wide mb-4">
            Confidential voice agents that eliminate admin overhead and deliver $127K+ annual savings
          </p>
          
          <p className="text-tiffany-500 text-lg font-medium tracking-[0.1em] mb-12">
            Client Intake • Case Management • Court Scheduling • Billing Automation
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16">
            <Button
              asChild
              className="bg-tiffany-500 text-black-900 font-semibold px-10 py-5 rounded-none hover:bg-tiffany-400 transition-all duration-300 tracking-wide uppercase text-base shadow-lg"
            >
              <Link
                href="https://calendly.com/innovationsynergyai/legal-ai-assessment"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET YOUR CONFIDENTIAL AI ASSESSMENT
              </Link>
            </Button>
            <Button
              asChild
              className="border border-white-50 text-white-50 font-semibold px-8 py-5 rounded-none hover:bg-white-50 hover:text-black-900 transition-all duration-300 tracking-wide uppercase text-base"
            >
              <Link href="#legal-calculator">CALCULATE LAW FIRM SAVINGS</Link>
            </Button>
          </div>

          {/* Legal Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">73%</div>
              <div className="text-white-50 text-sm">Non-Billable Hour Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">82%</div>
              <div className="text-white-50 text-sm">Client Retention Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">$127K</div>
              <div className="text-white-50 text-sm">Average Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tiffany-500 mb-2">100%</div>
              <div className="text-white-50 text-sm">Privilege Protected</div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Benefits Section */}
      <section className="bg-white-50 py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Why Law Firms Trust Our <span className="text-tiffany-500">AI Solutions</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Built specifically for legal practices with confidentiality, ethics, and client service as core principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {legalBenefits.map((benefit, index) => (
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

      {/* Practice Areas Section */}
      <section className="bg-neutral-50 py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Specialized for Every <span className="text-tiffany-500">Practice Area</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our AI adapts to your specific legal practice with industry-specific workflows and terminology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreaExamples.map((practice, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-tiffany-600">{practice.area}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {practice.automations.map((automation, idx) => (
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

      {/* Legal Features Section */}
      <section className="bg-white py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-light mb-8">
                Complete Legal <span className="text-tiffany-500">Practice Automation</span>
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Our AI handles every aspect of client communication and case management while maintaining strict attorney-client privilege and legal ethics compliance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {legalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-tiffany-500 rounded-full"></div>
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-tiffany-100">
              <h3 className="text-2xl font-bold mb-6 text-center">Confidentiality Guarantees</h3>
              <div className="space-y-4">
                {confidentialityFeatures.map((feature, index) => (
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
                  ⚖️ Fully compliant with ABA Model Rules of Professional Conduct and state bar regulations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Testimonials Section */}
      <section className="bg-neutral-50 py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Law Firms <span className="text-tiffany-500">Winning</span> With AI
            </h2>
            <p className="text-xl text-neutral-600">Real results from legal practices nationwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {legalTestimonials.map((testimonial, index) => (
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

      {/* Legal CTA Section */}
      <section className="bg-black-900 text-white py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
            Ready to <span className="text-tiffany-500">Scale</span> Your Legal Practice?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
            Join 200+ law firms that have eliminated non-billable overhead while increasing client satisfaction. Confidential, compliant, guaranteed results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
            <Button
              asChild
              className="bg-tiffany-500 text-black-900 font-semibold px-12 py-6 rounded-none hover:bg-tiffany-400 transition-all duration-300 tracking-wide uppercase text-lg shadow-lg"
            >
              <Link
                href="https://calendly.com/innovationsynergyai/legal-ai-assessment"
                target="_blank"
                rel="noopener noreferrer"
              >
                SCHEDULE YOUR LEGAL AI ASSESSMENT
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-tiffany-500 text-lg font-semibold mb-2">Confidential Assessment</h3>
              <p className="text-neutral-400">Complete legal practice efficiency evaluation</p>
            </div>
            <div>
              <h3 className="text-tiffany-500 text-lg font-semibold mb-2">Guaranteed ROI</h3>
              <p className="text-neutral-400">$127K+ annual savings or we work for free</p>
            </div>
            <div>
              <h3 className="text-tiffany-500 text-lg font-semibold mb-2">Bar Compliant</h3>
              <p className="text-neutral-400">Fully approved by legal ethics standards</p>
            </div>
          </div>
        </div>
      </section>

      <ChatWidget />
    </>
  )
}