import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "AI Disclosure - Transparent AI Use in Business Consulting",
  description: "Innovation Synergy AI's transparency disclosure about AI use in business consulting, voice agents, and automation services. Ethical AI practices for small business.",
  pathname: "/ai-disclosure",
  keywords: [
    "AI transparency disclosure",
    "ethical AI consulting",
    "AI business practices",
    "transparent AI use",
    "AI compliance consulting",
    "responsible AI implementation"
  ]
})

export default function AIDisclosurePage() {
  return (
    <div className="min-h-screen bg-white-50 text-black-900 pt-32 pb-16">
      <div className="container max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="font-display text-5xl md:text-6xl font-light mb-8">
          AI <span className="text-tiffany-500">Disclosure</span>
        </h1>
        <p className="text-xl text-neutral-600 mb-12 font-light">
          Transparency about Innovation Synergy AI's use of artificial intelligence
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-black-900">Use of AI in Our Services</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Innovation Synergy AI Inc. ("Company," "we," "us," or "our") uses artificial intelligence 
              technologies as part of our business consulting and infrastructure services. This disclosure 
              provides transparency about how AI is integrated into our operations and client solutions.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">AI-Powered Services We Provide</h3>
            <ul className="list-disc list-inside space-y-3 text-neutral-700">
              <li><strong>Voice AI Agents:</strong> Custom conversational AI systems for customer service and business automation</li>
              <li><strong>Business Process Automation:</strong> AI-driven workflow optimization and task automation</li>
              <li><strong>Data Analysis and Enrichment:</strong> Machine learning algorithms for business intelligence</li>
              <li><strong>Custom AI Integration:</strong> Tailored artificial intelligence solutions for specific business needs</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">How We Use AI in Our Operations</h3>
            <div className="space-y-4 text-neutral-700">
              <p>
                <strong>Content Generation:</strong> We may use AI tools to assist in creating documentation, 
                training materials, and communication templates. All AI-generated content is reviewed and 
                approved by our human experts before delivery.
              </p>
              <p>
                <strong>Analysis and Research:</strong> AI assists our consultants in analyzing market trends, 
                business data, and technology solutions to provide better recommendations.
              </p>
              <p>
                <strong>System Development:</strong> We use AI development tools to create, test, and optimize 
                the custom AI solutions we build for our clients.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Human Oversight and Quality Control</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              While we leverage AI technologies to enhance our services, all client deliverables undergo 
              thorough human review and validation. Our team of experienced consultants:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
              <li>Review all AI-generated content for accuracy and appropriateness</li>
              <li>Customize AI solutions to meet specific client requirements</li>
              <li>Provide ongoing support and optimization based on human expertise</li>
              <li>Ensure compliance with industry standards and regulations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Data Privacy and Security</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              When AI technologies process client data, we maintain strict data protection standards:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700">
              <li>Client data is processed securely and in compliance with applicable privacy laws</li>
              <li>AI systems are configured to protect confidential business information</li>
              <li>Data retention policies ensure information is not stored longer than necessary</li>
              <li>Access controls limit who can interact with AI systems processing client data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Limitations and Disclaimers</h3>
            <div className="bg-neutral-100 p-6 rounded-lg mb-6">
              <p className="text-neutral-700 leading-relaxed">
                While AI technologies enhance our service capabilities, they are tools that supplement 
                human expertise rather than replace it. AI systems may have limitations in understanding 
                context, making subjective judgments, or handling unique situations that require human insight.
              </p>
            </div>
            <p className="text-neutral-700 leading-relaxed">
              We continuously monitor and improve our AI implementations to ensure they meet our high 
              standards for accuracy, reliability, and ethical use.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Contact Us</h3>
            <p className="text-neutral-700 leading-relaxed">
              If you have questions about our use of AI technologies or would like more information about 
              how AI is integrated into our services, please contact us:
            </p>
            <div className="mt-4 space-y-2 text-neutral-700">
              <p><strong>Email:</strong> info@innovationsynergyai.com</p>
              <p><strong>Phone:</strong> +1-800-AI-SYNERGY</p>
            </div>
          </section>

          <section className="border-t border-neutral-200 pt-8">
            <p className="text-sm text-neutral-500">
              <strong>Last Updated:</strong> January 2025<br/>
              This disclosure may be updated periodically to reflect changes in our AI implementations 
              or regulatory requirements.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}