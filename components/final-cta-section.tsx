'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAnalytics } from "@/hooks/useAnalytics"

export default function FinalCTASection() {
  const { trackCTAClick, trackButtonClick } = useAnalytics()
  return (
    <section className="py-24 md:py-32 bg-black-900 text-white-50">
      <div className="container max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tiffany-500/20 to-transparent h-px top-1/2"></div>
          <p className="text-tiffany-400 text-xs font-semibold tracking-[0.4em] uppercase bg-black-900 px-6 relative inline-block animate-fade-in-up stagger-0">
            JOIN 180+ SUCCESSFUL BUSINESSES
          </p>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extralight mb-12 animate-fade-in-up stagger-200 leading-[0.9] tracking-tight">
          <span className="bg-gradient-to-r from-tiffany-400 via-tiffany-500 to-tiffany-600 bg-clip-text text-transparent font-light">GROWTH INFRASTRUCTURE</span><br className="block sm:hidden" />
          <span className="hidden sm:inline text-neutral-600"> / </span><span className="text-neutral-200">HIPAA COMPLIANT PIPELINES</span><br className="block sm:hidden" />
          <span className="hidden sm:inline text-neutral-600"> / </span><span className="text-neutral-300">LOCAL AND CLOUD SOLUTIONS</span>
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-neutral-400 mb-20 font-light animate-fade-in-up stagger-400 max-w-4xl mx-auto leading-relaxed">
          Ready to join the elite group of businesses saving $50K-$200K annually with custom AI? 
          <span className="text-tiffany-400">Our proven methodology delivers results in 21 days.</span>
        </p>

        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="group animate-fade-in-up stagger-600 p-8 rounded-2xl bg-gradient-to-br from-neutral-900/30 via-neutral-900/20 to-neutral-800/30 border border-neutral-800/50 hover:border-tiffany-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-tiffany-500/10 hover:scale-105 transform backdrop-blur-sm">
              <h3 className="text-xl font-light mb-6 text-tiffany-400 group-hover:text-tiffany-300 transition-colors duration-300">Custom Development</h3>
              <ul className="space-y-4 text-neutral-400 text-sm font-light">
                <li className="flex items-start justify-center group-hover:text-neutral-300 transition-colors duration-300">
                  <span className="text-tiffany-500 mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span>Voice AI agents tailored to your business</span>
                </li>
                <li className="flex items-start justify-center group-hover:text-neutral-300 transition-colors duration-300">
                  <span className="text-tiffany-500 mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span>Workflow automation systems</span>
                </li>
                <li className="flex items-start justify-center group-hover:text-neutral-300 transition-colors duration-300">
                  <span className="text-tiffany-500 mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span>Business intelligence dashboards</span>
                </li>
              </ul>
              <div className="mt-8 w-12 h-px bg-gradient-to-r from-transparent via-tiffany-500/50 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="group animate-fade-in-up stagger-700 p-8 rounded-2xl bg-gradient-to-br from-neutral-900/30 via-neutral-900/20 to-neutral-800/30 border border-neutral-800/50 hover:border-tiffany-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-tiffany-500/10 hover:scale-105 transform backdrop-blur-sm">
              <h3 className="text-xl font-light mb-6 text-tiffany-400 group-hover:text-tiffany-300 transition-colors duration-300">Full Integration</h3>
              <ul className="space-y-4 text-neutral-400 text-sm font-light">
                <li className="flex items-start justify-center group-hover:text-neutral-300 transition-colors duration-300">
                  <span className="text-tiffany-500 mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span>Seamless connection to existing tools</span>
                </li>
                <li className="flex items-start justify-center group-hover:text-neutral-300 transition-colors duration-300">
                  <span className="text-tiffany-500 mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span>HIPAA compliant infrastructure</span>
                </li>
                <li className="flex items-start justify-center group-hover:text-neutral-300 transition-colors duration-300">
                  <span className="text-tiffany-500 mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span>100% remote deployment</span>
                </li>
              </ul>
              <div className="mt-8 w-12 h-px bg-gradient-to-r from-transparent via-tiffany-500/50 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="group animate-fade-in-up stagger-800 p-8 rounded-2xl bg-gradient-to-br from-neutral-900/30 via-neutral-900/20 to-neutral-800/30 border border-neutral-800/50 hover:border-tiffany-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-tiffany-500/10 hover:scale-105 transform backdrop-blur-sm">
              <h3 className="text-xl font-light mb-6 text-tiffany-400 group-hover:text-tiffany-300 transition-colors duration-300">Ongoing Support</h3>
              <ul className="space-y-4 text-neutral-400 text-sm font-light">
                <li className="flex items-start justify-center group-hover:text-neutral-300 transition-colors duration-300">
                  <span className="text-tiffany-500 mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span>Maintenance and system updates</span>
                </li>
                <li className="flex items-start justify-center group-hover:text-neutral-300 transition-colors duration-300">
                  <span className="text-tiffany-500 mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span>Team training and documentation</span>
                </li>
                <li className="flex items-start justify-center group-hover:text-neutral-300 transition-colors duration-300">
                  <span className="text-tiffany-500 mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span>Performance optimization</span>
                </li>
              </ul>
              <div className="mt-8 w-12 h-px bg-gradient-to-r from-transparent via-tiffany-500/50 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 animate-fade-in-up stagger-1000">
          <Button
            asChild
            className="bg-gradient-to-r from-tiffany-500 to-tiffany-600 text-black-900 font-semibold px-12 py-6 rounded-none hover:from-tiffany-400 hover:to-tiffany-500 transition-all duration-500 tracking-wide uppercase text-sm sm:text-base w-full sm:w-auto shadow-2xl hover:shadow-tiffany-500/25 hover:scale-105 transform"
          >
            <Link
              href="https://calendly.com/innovationsynergyai/30-minute-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick('Book Free Strategy Call', 500, 'final_cta_section')}
            >
              CLAIM YOUR STRATEGY SESSION
            </Link>
          </Button>
          <Button
            asChild
            className="border border-neutral-600 text-neutral-300 font-semibold px-12 py-6 rounded-none hover:border-tiffany-500 hover:text-tiffany-500 hover:bg-neutral-900/50 transition-all duration-500 tracking-wide uppercase text-sm sm:text-base w-full sm:w-auto backdrop-blur-sm hover:scale-105 transform"
          >
            <Link 
              href="#capabilities"
              onClick={() => trackButtonClick('Learn More About Services', 'final_cta_section')}
            >
              SEE CLIENT RESULTS
            </Link>
          </Button>
        </div>
        
        {/* Trust & Compliance Indicators */}
        <div className="mt-16 animate-fade-in-up stagger-1100">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-tiffany-500 text-sm font-medium mb-1">SOC 2</div>
                <div className="text-neutral-500 text-xs">Certified</div>
              </div>
              <div className="text-center">
                <div className="text-tiffany-500 text-sm font-medium mb-1">HIPAA</div>
                <div className="text-neutral-500 text-xs">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-tiffany-500 text-sm font-medium mb-1">US-Based</div>
                <div className="text-neutral-500 text-xs">Company</div>
              </div>
              <div className="text-center">
                <div className="text-tiffany-500 text-sm font-medium mb-1">24/7</div>
                <div className="text-neutral-500 text-xs">Support</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-700/20 to-transparent h-px top-1/2"></div>
              <p className="text-neutral-500 text-xs font-light tracking-wide bg-black-900 px-4 relative inline-block">
                No obligation • 30-minute strategy session • See if we're a fit for your business
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}