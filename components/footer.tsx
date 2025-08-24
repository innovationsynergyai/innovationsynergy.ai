import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black-900 text-white-50 border-t border-neutral-800">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-tiffany-500 rounded-full flex items-center justify-center">
                <span className="text-black-900 font-bold text-sm">IS</span>
              </div>
              <div>
                <div className="font-display text-xl font-light">Innovation Synergy AI</div>
                <div className="text-xs text-neutral-400 -mt-1">American Small Business AI Infrastructure</div>
              </div>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed mb-6 max-w-md">
              America's leading AI infrastructure consulting firm, specializing in helping small businesses 
              integrate cutting-edge technology into their daily operations. Serving businesses nationwide 
              with remote consulting and custom AI solutions.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="https://linkedin.com/company/innovation-synergy-ai" 
                target="_blank"
                className="text-neutral-400 hover:text-tiffany-500 transition-colors duration-300"
              >
                LinkedIn
              </Link>
              <Link 
                href="https://www.instagram.com/innovationsynergy.ai/" 
                target="_blank"
                className="text-neutral-400 hover:text-tiffany-500 transition-colors duration-300"
              >
                Instagram
              </Link>
              <Link 
                href="https://www.youtube.com/@InnovationSynergy_AI" 
                target="_blank"
                className="text-neutral-400 hover:text-tiffany-500 transition-colors duration-300"
              >
                YouTube
              </Link>
              <Link 
                href="https://www.tiktok.com/@innovationsynergyai?_t=ZT-8xaHwyBL2yV&_r=1" 
                target="_blank"
                className="text-neutral-400 hover:text-tiffany-500 transition-colors duration-300"
              >
                TikTok
              </Link>
              <Link 
                href="https://twitter.com/innovationsynergyai" 
                target="_blank"
                className="text-neutral-400 hover:text-tiffany-500 transition-colors duration-300"
              >
                Twitter
              </Link>
              <Link 
                href="mailto:info@innovationsynergyai.com"
                className="text-neutral-400 hover:text-tiffany-500 transition-colors duration-300"
              >
                Email
              </Link>
            </div>
          </div>

          {/* Regional Services */}
          <div>
            <h4 className="font-semibold text-tiffany-500 mb-4 uppercase tracking-wide text-sm">Regional Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="https://bostonagents.ai" 
                  target="_blank"
                  className="text-neutral-300 hover:text-white-50 transition-colors duration-300"
                >
                  Boston AI Agent
                </Link>
              </li>
              <li>
                <Link 
                  href="https://nycagents.ai" 
                  target="_blank"
                  className="text-neutral-300 hover:text-white-50 transition-colors duration-300"
                >
                  NYC AI Agent
                </Link>
              </li>
              <li>
                <Link 
                  href="https://miamiagents.ai" 
                  target="_blank"
                  className="text-neutral-300 hover:text-white-50 transition-colors duration-300"
                >
                  Miami AI Agent
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="font-semibold text-tiffany-500 mb-4 uppercase tracking-wide text-sm">Legal & Compliance</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/privacy-policy"
                  className="text-neutral-300 hover:text-white-50 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms-of-service"
                  className="text-neutral-300 hover:text-white-50 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/cookie-policy"
                  className="text-neutral-300 hover:text-white-50 transition-colors duration-300"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/ai-disclosure"
                  className="text-neutral-300 hover:text-white-50 transition-colors duration-300"
                >
                  AI Disclosure
                </Link>
              </li>
              <li>
                <Link 
                  href="/do-not-sell"
                  className="text-neutral-300 hover:text-white-50 transition-colors duration-300"
                >
                  Do Not Sell My Info
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-12 mt-16">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-400">
              © 2025 Innovation Synergy AI Inc. All rights reserved. Registered American company.
            </div>
            <div className="flex items-center space-x-8 text-xs text-neutral-500">
              <span>🇺🇸 American Owned & Operated</span>
              <span>📞 +1-800-AI-SYNERGY</span>
              <span>📧 info@innovationsynergyai.com</span>
            </div>
          </div>
        </div>

        {/* Compliance Notice */}
        <div className="mt-8 p-4 bg-neutral-900 rounded border border-neutral-700">
          <p className="text-xs text-neutral-400 leading-relaxed">
            <strong className="text-neutral-300">Compliance Notice:</strong> Innovation Synergy AI Inc. 
            is a registered American consulting firm specializing in AI infrastructure for small businesses. 
            All services are provided in compliance with applicable federal, state, and local regulations. 
            Results may vary based on business size, industry, and implementation. We do not guarantee 
            specific performance improvements or return on investment. All consultations are confidential 
            and protected by client-consultant privilege.
          </p>
        </div>
      </div>
    </footer>
  )
}