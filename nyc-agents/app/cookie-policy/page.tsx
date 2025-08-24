import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "Cookie Policy - Website Tracking & Analytics Information",
  description: "Innovation Synergy AI's cookie policy explaining how we use cookies, tracking technologies, and analytics for our AI consulting website and services.",
  pathname: "/cookie-policy",
  keywords: [
    "cookie policy AI website",
    "website tracking policy",
    "analytics cookies",
    "AI consulting website cookies",
    "privacy tracking information",
    "GDPR cookie compliance"
  ],
  noIndex: false
})

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white-50 text-black-900 pt-32 pb-16">
      <div className="container max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="font-display text-5xl md:text-6xl font-light mb-8">
          Cookie <span className="text-tiffany-500">Policy</span>
        </h1>
        <p className="text-xl text-neutral-600 mb-12 font-light">
          How Innovation Synergy AI uses cookies and tracking technologies
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-black-900">What Are Cookies?</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Cookies are small text files that are stored on your device when you visit our website. They help us 
              provide you with a better browsing experience by remembering your preferences and analyzing how our 
              website is used.
            </p>
            <p className="text-sm text-neutral-500 mb-6">
              <strong>Last Updated:</strong> January 2025
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Types of Cookies We Use</h3>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-400 p-6">
                <h4 className="text-xl font-semibold mb-3 text-black-900">Essential Cookies (Always Active)</h4>
                <p className="text-neutral-700 leading-relaxed mb-3">
                  These cookies are necessary for the website to function properly and cannot be disabled.
                </p>
                <ul className="list-disc list-inside space-y-1 text-neutral-700">
                  <li>Session management and user authentication</li>
                  <li>Security and fraud prevention</li>
                  <li>Basic website functionality</li>
                  <li>Cookie consent preferences</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                <h4 className="text-xl font-semibold mb-3 text-black-900">Analytics Cookies</h4>
                <p className="text-neutral-700 leading-relaxed mb-3">
                  These cookies help us understand how visitors interact with our website.
                </p>
                <ul className="list-disc list-inside space-y-1 text-neutral-700">
                  <li><strong>Google Analytics:</strong> Website traffic and user behavior analysis</li>
                  <li><strong>Page performance:</strong> Loading times and technical metrics</li>
                  <li><strong>User engagement:</strong> Most visited pages and content preferences</li>
                  <li><strong>Conversion tracking:</strong> Form submissions and consultation requests</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                <h4 className="text-xl font-semibold mb-3 text-black-900">Marketing Cookies</h4>
                <p className="text-neutral-700 leading-relaxed mb-3">
                  These cookies are used to deliver relevant advertisements and track marketing performance.
                </p>
                <ul className="list-disc list-inside space-y-1 text-neutral-700">
                  <li><strong>Google Ads:</strong> Conversion tracking and retargeting</li>
                  <li><strong>LinkedIn Ads:</strong> B2B marketing and professional targeting</li>
                  <li><strong>Facebook Pixel:</strong> Social media advertising optimization</li>
                  <li><strong>Email marketing:</strong> Campaign performance and list building</li>
                </ul>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-6">
                <h4 className="text-xl font-semibold mb-3 text-black-900">Personalization Cookies</h4>
                <p className="text-neutral-700 leading-relaxed mb-3">
                  These cookies enhance your experience by remembering your preferences.
                </p>
                <ul className="list-disc list-inside space-y-1 text-neutral-700">
                  <li>Language and region preferences</li>
                  <li>Theme and display settings</li>
                  <li>Previously viewed services and content</li>
                  <li>Form auto-fill information (with your consent)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Third-Party Services</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We use various third-party services that may set their own cookies:
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-neutral-200 rounded-lg">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Service</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Purpose</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">Google Analytics</td>
                    <td className="px-6 py-4 text-sm text-neutral-700">Website analytics and performance tracking</td>
                    <td className="px-6 py-4 text-sm text-tiffany-600"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">Google Ads</td>
                    <td className="px-6 py-4 text-sm text-neutral-700">Advertising and conversion tracking</td>
                    <td className="px-6 py-4 text-sm text-tiffany-600"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">LinkedIn Ads</td>
                    <td className="px-6 py-4 text-sm text-neutral-700">Professional networking and B2B advertising</td>
                    <td className="px-6 py-4 text-sm text-tiffany-600"><a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener">LinkedIn Privacy Policy</a></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">Facebook Pixel</td>
                    <td className="px-6 py-4 text-sm text-neutral-700">Social media advertising and tracking</td>
                    <td className="px-6 py-4 text-sm text-tiffany-600"><a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener">Meta Privacy Policy</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Managing Your Cookie Preferences</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-black-900">Cookie Consent Banner</h4>
                <p className="text-neutral-700 leading-relaxed">
                  When you first visit our website, you'll see a cookie consent banner that allows you to accept or 
                  customize your cookie preferences. You can change these preferences at any time by clicking the 
                  "Cookie Settings" link in our website footer.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3 text-black-900">Browser Settings</h4>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  You can also manage cookies through your browser settings. Here's how to access cookie settings in popular browsers:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700">
                  <li><strong>Chrome:</strong> Settings > Privacy and Security > Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Preferences > Privacy & Security > Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences > Privacy > Manage Website Data</li>
                  <li><strong>Edge:</strong> Settings > Cookies and site permissions > Cookies and site data</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3 text-black-900">Opt-Out Tools</h4>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  For advertising cookies, you can use these industry opt-out tools:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700">
                  <li><strong>Google Ads:</strong> <a href="https://adssettings.google.com/" target="_blank" rel="noopener" className="text-tiffany-600">Google Ad Settings</a></li>
                  <li><strong>Network Advertising Initiative:</strong> <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener" className="text-tiffany-600">NAI Opt-Out</a></li>
                  <li><strong>Digital Advertising Alliance:</strong> <a href="https://optout.aboutads.info/" target="_blank" rel="noopener" className="text-tiffany-600">DAA Opt-Out</a></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Cookie Retention</h3>
            <div className="space-y-4 text-neutral-700">
              <p><strong>Session Cookies:</strong> Deleted when you close your browser</p>
              <p><strong>Persistent Cookies:</strong> Stored for varying periods depending on their purpose:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Analytics cookies: Up to 2 years</li>
                <li>Marketing cookies: Up to 1 year</li>
                <li>Personalization cookies: Up to 1 year</li>
                <li>Consent preferences: Up to 1 year</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Impact of Disabling Cookies</h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <p className="text-neutral-700 leading-relaxed">
                <strong>Please Note:</strong> Disabling certain cookies may affect your website experience and limit 
                some functionality. Essential cookies cannot be disabled as they are required for basic website operation.
              </p>
            </div>
            <div className="space-y-3 text-neutral-700">
              <p><strong>If you disable analytics cookies:</strong> We won't be able to track website performance or improve user experience based on usage data.</p>
              <p><strong>If you disable marketing cookies:</strong> You may see less relevant advertisements and we can't measure the effectiveness of our marketing campaigns.</p>
              <p><strong>If you disable personalization cookies:</strong> The website won't remember your preferences and you'll need to reset them on each visit.</p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Updates to This Policy</h3>
            <p className="text-neutral-700 leading-relaxed">
              We may update this Cookie Policy periodically to reflect changes in our practices or applicable laws. 
              We will notify users of any material changes by updating the "Last Updated" date and, where appropriate, 
              through our cookie consent banner.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-black-900">Contact Us</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              If you have questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-neutral-100 p-6 rounded-lg space-y-2 text-neutral-700">
              <p><strong>Innovation Synergy AI Inc.</strong></p>
              <p><strong>Email:</strong> privacy@innovationsynergyai.com</p>
              <p><strong>Phone:</strong> +1-800-AI-SYNERGY</p>
              <p><strong>Subject Line:</strong> Cookie Policy Inquiry</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}