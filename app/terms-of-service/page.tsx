import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Service - AI Consulting Service Agreement",
  description: "Innovation Synergy AI's terms of service for AI consulting, voice agents, and business automation services. Legal terms and conditions for small businesses.",
  pathname: "/terms-of-service",
  keywords: [
    "AI consulting terms",
    "business automation agreement",
    "voice agent service terms",
    "AI infrastructure contract",
    "consulting service agreement",
    "small business AI terms"
  ],
  noIndex: false
})

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white-50 text-black-900 pt-32 pb-16">
      <div className="container max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="font-display text-5xl md:text-6xl font-light mb-8">
          Terms of <span className="text-tiffany-500">Service</span>
        </h1>
        <p className="text-xl text-neutral-600 mb-12 font-light">
          Legal terms and conditions for Innovation Synergy AI consulting services
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-black-900">Agreement Overview</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") 
              and Innovation Synergy AI Inc. ("Company," "we," "us," or "our") regarding your use of our AI consulting, 
              infrastructure, and automation services.
            </p>
            <p className="text-sm text-neutral-500 mb-6">
              <strong>Effective Date:</strong> January 1, 2025<br/>
              <strong>Last Updated:</strong> January 2025
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Services Provided</h3>
            <div className="space-y-4 text-neutral-700">
              <p>Innovation Synergy AI Inc. provides the following services:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>AI Infrastructure Consulting:</strong> Strategic planning and implementation of AI systems</li>
                <li><strong>Voice AI Agent Development:</strong> Custom conversational AI solutions for businesses</li>
                <li><strong>Business Process Automation:</strong> Workflow optimization and automation implementation</li>
                <li><strong>Data Enrichment Services:</strong> AI-powered data analysis and enhancement</li>
                <li><strong>Remote Installation & Support:</strong> Technical deployment and ongoing maintenance</li>
                <li><strong>Custom AI Solutions:</strong> Tailored artificial intelligence implementations</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Service Packages & Pricing</h3>
            <div className="space-y-6">
              <div className="bg-neutral-100 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-black-900">Foundation AI Package - $3,497/month</h4>
                <ul className="list-disc list-inside space-y-1 text-neutral-700">
                  <li>AI infrastructure assessment and planning</li>
                  <li>Basic voice agent implementation</li>
                  <li>Essential automation setup</li>
                  <li>Remote installation and basic support</li>
                </ul>
              </div>
              <div className="bg-neutral-100 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-black-900">Professional AI Package - $6,997/month</h4>
                <ul className="list-disc list-inside space-y-1 text-neutral-700">
                  <li>Complete infrastructure overhaul</li>
                  <li>Custom voice AI personality development</li>
                  <li>Multi-channel integration</li>
                  <li>Advanced workflow automation</li>
                  <li>Priority support and optimization</li>
                </ul>
              </div>
              <div className="bg-neutral-100 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-black-900">Elite AI Package - $12,997/month</h4>
                <ul className="list-disc list-inside space-y-1 text-neutral-700">
                  <li>White-glove enterprise deployment</li>
                  <li>Custom AI ecosystem development</li>
                  <li>Proprietary voice synthesis</li>
                  <li>24/7 dedicated support team</li>
                  <li>Continuous optimization and updates</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Client Responsibilities</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">By engaging our services, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700">
              <li>Provide accurate and complete information about your business requirements</li>
              <li>Grant necessary access to systems and data required for service delivery</li>
              <li>Respond promptly to requests for feedback and approvals</li>
              <li>Maintain confidentiality of any proprietary methodologies shared</li>
              <li>Use AI systems in compliance with applicable laws and regulations</li>
              <li>Provide timely payment for services as agreed</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Payment Terms</h3>
            <div className="space-y-4 text-neutral-700">
              <p><strong>Monthly Service Fees:</strong> All service packages are billed monthly in advance.</p>
              <p><strong>Payment Schedule:</strong> Invoices are due within 15 days of receipt.</p>
              <p><strong>Setup Fees:</strong> One-time setup fees may apply for custom implementations.</p>
              <p><strong>Late Payment:</strong> Late payments may incur a 1.5% monthly service charge.</p>
              <p><strong>Suspension of Service:</strong> Services may be suspended for accounts over 30 days past due.</p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Intellectual Property</h3>
            <div className="space-y-4 text-neutral-700">
              <p><strong>Company IP:</strong> All methodologies, frameworks, and proprietary AI technologies remain our intellectual property.</p>
              <p><strong>Client Data:</strong> You retain ownership of all business data and information provided to us.</p>
              <p><strong>Custom Developments:</strong> AI systems and configurations developed specifically for your business become your property upon full payment.</p>
              <p><strong>Third-Party Tools:</strong> Some solutions may incorporate third-party technologies subject to separate licensing terms.</p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Confidentiality</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We maintain strict confidentiality regarding all client information, business processes, and proprietary data. 
              This confidentiality obligation extends to all our employees, contractors, and service providers.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Clients agree to maintain confidentiality regarding our methodologies, pricing structures, and proprietary 
              AI implementations shared during the engagement.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Service Level Agreement</h3>
            <div className="space-y-3 text-neutral-700">
              <p><strong>Implementation Timeline:</strong> Standard implementations typically require 2-6 weeks depending on package complexity.</p>
              <p><strong>Support Response Times:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Foundation Package: 48-hour response time</li>
                <li>Professional Package: 24-hour response time</li>
                <li>Elite Package: 4-hour response time with 24/7 availability</li>
              </ul>
              <p><strong>Uptime Guarantee:</strong> We target 99.5% uptime for all AI systems we deploy and manage.</p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Limitation of Liability</h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <p className="text-neutral-700 leading-relaxed">
                <strong>IMPORTANT:</strong> Our liability for any claims arising from our services is limited to the total 
                amount paid by the client in the 12 months preceding the claim. We are not liable for indirect, consequential, 
                or punitive damages.
              </p>
            </div>
            <p className="text-neutral-700 leading-relaxed">
              While we strive for excellence in all deliverables, AI technology implementations may have limitations 
              and require ongoing optimization. Results may vary based on business-specific factors and market conditions.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Termination</h3>
            <div className="space-y-4 text-neutral-700">
              <p><strong>Client Termination:</strong> Clients may terminate services with 30 days written notice. Final payment is due for services provided through the termination date.</p>
              <p><strong>Company Termination:</strong> We may terminate services for non-payment, breach of terms, or if continuation would violate applicable laws.</p>
              <p><strong>Data Return:</strong> Upon termination, we will provide client data in standard formats and securely delete our copies within 30 days.</p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Governing Law</h3>
            <p className="text-neutral-700 leading-relaxed">
              These Terms are governed by the laws of the United States and the state in which our services are primarily 
              delivered. Any disputes will be resolved through binding arbitration in accordance with American Arbitration Association rules.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Contact Information</h3>
            <div className="bg-neutral-100 p-6 rounded-lg space-y-2 text-neutral-700">
              <p><strong>Innovation Synergy AI Inc.</strong></p>
              <p><strong>Business Inquiries:</strong> info@innovationsynergyai.com</p>
              <p><strong>Legal Department:</strong> legal@innovationsynergyai.com</p>
              <p><strong>Phone:</strong> +1-800-AI-SYNERGY</p>
              <p><strong>Emergency Support:</strong> Available 24/7 for Elite package clients</p>
            </div>
          </section>

          <section className="border-t border-neutral-200 pt-8">
            <p className="text-sm text-neutral-500">
              By engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. 
              These terms may be updated periodically with notice to active clients.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}