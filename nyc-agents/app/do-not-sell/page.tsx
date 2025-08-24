import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "Do Not Sell My Personal Information - CCPA Privacy Rights",
  description: "Exercise your California privacy rights under CCPA. Innovation Synergy AI's policy on personal information sales and your opt-out rights for AI consulting services.",
  pathname: "/do-not-sell",
  keywords: [
    "CCPA do not sell",
    "California privacy rights",
    "personal information opt-out",
    "AI consulting privacy rights",
    "data sale opt-out",
    "CCPA compliance AI"
  ],
  noIndex: false
})

export default function DoNotSellPage() {
  return (
    <div className="min-h-screen bg-white-50 text-black-900 pt-32 pb-16">
      <div className="container max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="font-display text-5xl md:text-6xl font-light mb-8">
          Do Not Sell My <span className="text-tiffany-500">Personal Information</span>
        </h1>
        <p className="text-xl text-neutral-600 mb-12 font-light">
          Your California privacy rights under the California Consumer Privacy Act (CCPA)
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-black-900">Your Privacy Rights Under CCPA</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              The California Consumer Privacy Act (CCPA) provides California residents with specific rights regarding 
              their personal information. Innovation Synergy AI Inc. respects these rights and is committed to 
              transparency in our data practices.
            </p>
            <p className="text-sm text-neutral-500 mb-6">
              <strong>Last Updated:</strong> January 2025
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Our Position on Personal Information Sales</h3>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
              <p className="text-neutral-700 leading-relaxed text-lg">
                <strong>Innovation Synergy AI Inc. does NOT sell personal information.</strong> We have never sold 
                personal information in the past 12 months, and we do not have plans to sell personal information 
                in the future.
              </p>
            </div>
            <p className="text-neutral-700 leading-relaxed">
              As a B2B AI consulting firm, our business model is based on providing professional services to clients, 
              not on monetizing personal data. We collect and use personal information solely to deliver our AI 
              infrastructure and automation services.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">What Constitutes a "Sale" Under CCPA</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Under CCPA, "sale" is broadly defined and includes sharing personal information with third parties 
              for valuable consideration, even if no money changes hands. This can include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
              <li>Providing data to advertising networks for targeted ads</li>
              <li>Sharing information with analytics companies for business insights</li>
              <li>Data exchanges with marketing partners</li>
              <li>Cross-context behavioral advertising arrangements</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed">
              Even under this broad definition, Innovation Synergy AI does not engage in activities that would 
              constitute a "sale" of personal information.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">How We Share Personal Information</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              While we don't sell personal information, we may share it in limited circumstances:
            </p>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-black-900">Service Providers</h4>
                <p className="text-neutral-700">
                  We work with trusted service providers who assist in delivering our AI consulting services. 
                  These providers are contractually required to protect your information and use it only for 
                  specified business purposes.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-black-900">Legal Requirements</h4>
                <p className="text-neutral-700">
                  We may share information when required by law, court order, or government regulation, or to 
                  protect our rights and property.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-black-900">Business Transfers</h4>
                <p className="text-neutral-700">
                  In the event of a merger, acquisition, or sale of company assets, personal information may be 
                  transferred as part of the transaction.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Your CCPA Rights</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              As a California resident, you have the following rights under CCPA:
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-tiffany-400 pl-6">
                <h4 className="text-lg font-semibold mb-2 text-black-900">Right to Know</h4>
                <p className="text-neutral-700">
                  Request information about what personal information we collect, use, disclose, and sell about you.
                </p>
              </div>
              
              <div className="border-l-4 border-tiffany-400 pl-6">
                <h4 className="text-lg font-semibold mb-2 text-black-900">Right to Delete</h4>
                <p className="text-neutral-700">
                  Request deletion of your personal information, subject to certain exceptions.
                </p>
              </div>
              
              <div className="border-l-4 border-tiffany-400 pl-6">
                <h4 className="text-lg font-semibold mb-2 text-black-900">Right to Opt-Out</h4>
                <p className="text-neutral-700">
                  While we don't sell personal information, you have the right to opt-out if our practices change in the future.
                </p>
              </div>
              
              <div className="border-l-4 border-tiffany-400 pl-6">
                <h4 className="text-lg font-semibold mb-2 text-black-900">Right to Non-Discrimination</h4>
                <p className="text-neutral-700">
                  We will not discriminate against you for exercising your CCPA rights.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">How to Exercise Your Rights</h3>
            <p className="text-neutral-700 leading-relaxed mb-6">
              To exercise any of your CCPA rights, you can contact us through the following methods:
            </p>
            
            <div className="bg-neutral-100 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold mb-4 text-black-900">Contact Methods</h4>
              <div className="space-y-3 text-neutral-700">
                <p><strong>Email:</strong> privacy@innovationsynergyai.com</p>
                <p><strong>Phone:</strong> +1-800-AI-SYNERGY</p>
                <p><strong>Mail:</strong> Privacy Officer, Innovation Synergy AI Inc.</p>
                <p><strong>Subject Line:</strong> CCPA Privacy Rights Request</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <p className="text-neutral-700 leading-relaxed">
                <strong>Identity Verification:</strong> To protect your privacy, we will verify your identity before 
                processing your request. This may involve confirming personal information or business details 
                associated with your account.
              </p>
            </div>

            <div className="space-y-3 text-neutral-700">
              <p><strong>Response Time:</strong> We will respond to your request within 45 days, with the possibility of a 45-day extension if needed.</p>
              <p><strong>Request Limit:</strong> You may make up to two requests per 12-month period at no charge.</p>
              <p><strong>Authorized Agents:</strong> You may designate an authorized agent to make requests on your behalf with proper documentation.</p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Categories of Personal Information</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              For transparency, here are the categories of personal information we collect for our AI consulting services:
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-neutral-200 rounded-lg">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Examples</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Business Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-sm">
                  <tr>
                    <td className="px-6 py-4 font-medium text-neutral-900">Identifiers</td>
                    <td className="px-6 py-4 text-neutral-700">Name, email, phone, business address</td>
                    <td className="px-6 py-4 text-neutral-700">Service delivery and communication</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-neutral-900">Commercial Information</td>
                    <td className="px-6 py-4 text-neutral-700">Service purchases, payment history</td>
                    <td className="px-6 py-4 text-neutral-700">Billing and account management</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-neutral-900">Internet Activity</td>
                    <td className="px-6 py-4 text-neutral-700">Website usage, pages viewed</td>
                    <td className="px-6 py-4 text-neutral-700">Website improvement and analytics</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-neutral-900">Professional Information</td>
                    <td className="px-6 py-4 text-neutral-700">Job title, company, industry</td>
                    <td className="px-6 py-4 text-neutral-700">Service customization</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Future Changes</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              If our data practices change and we begin activities that constitute "selling" personal information 
              under CCPA, we will:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700">
              <li>Update this page and our Privacy Policy</li>
              <li>Provide clear notice to affected individuals</li>
              <li>Implement a prominent "Do Not Sell My Personal Information" link</li>
              <li>Honor any existing opt-out preferences</li>
              <li>Ensure compliance with all CCPA requirements</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Questions or Concerns</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              If you have questions about this policy or our data practices, please don't hesitate to contact our 
              privacy team. We're committed to transparency and protecting your privacy rights.
            </p>
            <div className="bg-neutral-100 p-6 rounded-lg space-y-2 text-neutral-700">
              <p><strong>Innovation Synergy AI Inc.</strong></p>
              <p><strong>Privacy Officer</strong></p>
              <p><strong>Email:</strong> privacy@innovationsynergyai.com</p>
              <p><strong>Phone:</strong> +1-800-AI-SYNERGY</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}