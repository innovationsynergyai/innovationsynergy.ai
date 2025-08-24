import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy - Data Protection & Information Security",
  description: "Innovation Synergy AI's privacy policy: How we protect your personal information, data security measures, and your privacy rights for AI consulting services.",
  pathname: "/privacy-policy",
  keywords: [
    "privacy policy AI consulting",
    "data protection small business",
    "information security policy", 
    "AI data privacy",
    "business data protection",
    "GDPR compliance AI"
  ],
  noIndex: false
})

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white-50 text-black-900 pt-32 pb-16">
      <div className="container max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="font-display text-5xl md:text-6xl font-light mb-8">
          Privacy <span className="text-tiffany-500">Policy</span>
        </h1>
        <p className="text-xl text-neutral-600 mb-12 font-light">
          How Innovation Synergy AI Inc. protects and handles your personal information
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-black-900">Overview</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Innovation Synergy AI Inc. ("Company," "we," "us," or "our") respects your privacy and is 
              committed to protecting your personal information. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-sm text-neutral-500 mb-6">
              <strong>Effective Date:</strong> January 1, 2025<br/>
              <strong>Last Updated:</strong> January 2025
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Information We Collect</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-black-900">Personal Information</h4>
                <ul className="list-disc list-inside space-y-2 text-neutral-700">
                  <li>Name and contact information (email, phone number, business address)</li>
                  <li>Business information (company name, industry, size, role/title)</li>
                  <li>Communication preferences and consultation details</li>
                  <li>Payment information for services (processed securely through third-party processors)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-black-900">Automatically Collected Information</h4>
                <ul className="list-disc list-inside space-y-2 text-neutral-700">
                  <li>Website usage data (pages visited, time spent, navigation patterns)</li>
                  <li>Device information (browser type, operating system, IP address)</li>
                  <li>Cookies and tracking technologies data</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">How We Use Your Information</h3>
            <ul className="list-disc list-inside space-y-3 text-neutral-700">
              <li><strong>Service Delivery:</strong> To provide AI consulting and infrastructure services</li>
              <li><strong>Communication:</strong> To respond to inquiries and provide customer support</li>
              <li><strong>Business Operations:</strong> To process payments and manage client relationships</li>
              <li><strong>Marketing:</strong> To send relevant information about our services (with your consent)</li>
              <li><strong>Website Improvement:</strong> To analyze usage patterns and enhance user experience</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Information Sharing and Disclosure</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share 
              your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-3 text-neutral-700">
              <li><strong>Service Providers:</strong> Trusted third-party vendors who assist in delivering our services</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulations</li>
              <li><strong>Business Protection:</strong> To protect our rights, property, or safety, or that of our clients</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Data Security</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700">
              <li>Industry-standard encryption for data transmission and storage</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication protocols</li>
              <li>Employee training on data protection best practices</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Your Privacy Rights</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
              <li><strong>Portability:</strong> Request transfer of your information to another service provider</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Cookies and Tracking Technologies</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your website experience:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed mt-4">
              You can manage your cookie preferences through your browser settings or our cookie consent banner.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Children's Privacy</h3>
            <p className="text-neutral-700 leading-relaxed">
              Our services are intended for businesses and individuals aged 18 and older. We do not 
              knowingly collect personal information from children under 13. If we become aware that 
              we have collected such information, we will take steps to delete it promptly.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">International Data Transfers</h3>
            <p className="text-neutral-700 leading-relaxed">
              As an American company, your information is primarily processed and stored in the United States. 
              If you are located outside the US, by using our services, you consent to the transfer of your 
              information to the United States, where data protection laws may differ from those in your country.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Changes to This Privacy Policy</h3>
            <p className="text-neutral-700 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices or 
              applicable laws. We will notify you of any material changes by posting the updated policy 
              on our website and updating the "Last Updated" date.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Contact Us</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-neutral-100 p-6 rounded-lg space-y-2 text-neutral-700">
              <p><strong>Innovation Synergy AI Inc.</strong></p>
              <p><strong>Email:</strong> privacy@innovationsynergyai.com</p>
              <p><strong>Phone:</strong> +1-800-AI-SYNERGY</p>
              <p><strong>Mail:</strong> Privacy Officer, Innovation Synergy AI Inc.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}