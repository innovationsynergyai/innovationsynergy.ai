'use client'

import { useAnalytics } from "@/hooks/useAnalytics"

export default function ResultsAuthoritySection() {
  const { trackButtonClick } = useAnalytics()

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-black-900 via-neutral-950 to-black-900 text-white-50">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Video Introduction */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-neutral-800/50 p-6 shadow-2xl">
              <iframe 
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/N563Pel2v9g?si=YAl_8QgRQ4QqJjEa" 
                title="Innovation Synergy AI - Professional AI Consulting for Small Businesses" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Current State Analysis */}
        <div className="text-center mb-20">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tiffany-500/20 to-transparent h-px top-1/2"></div>
            <p className="text-tiffany-400 text-xs font-semibold tracking-[0.4em] uppercase bg-black-900 px-6 relative inline-block">
              CURRENT STATE ANALYSIS
            </p>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-extralight mb-6 leading-tight tracking-tight">
            <span className="text-neutral-100">American Small Business</span><br />
            <span className="bg-gradient-to-r from-tiffany-400 via-tiffany-500 to-tiffany-600 bg-clip-text text-transparent font-light">Infrastructure Needs</span>
          </h2>
          
          <p className="text-base md:text-lg text-neutral-400 max-w-4xl mx-auto font-light leading-relaxed mb-12">
            Quantitative data on American small business operations and AI infrastructure needs
          </p>

          {/* Problem Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center group p-6 rounded-2xl bg-gradient-to-br from-red-900/20 via-neutral-900/30 to-red-800/20 border border-red-700/30">
              <div className="text-4xl md:text-6xl font-extralight bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                87%
              </div>
              <div className="text-red-300 text-sm font-semibold tracking-wide uppercase mb-2">
                OF AMERICAN SMALL BUSINESSES
              </div>
              <div className="text-neutral-400 text-xs font-light">
                Using Outdated Systems
              </div>
              <p className="text-xs text-neutral-500 mt-3 leading-relaxed">
                American small businesses operate with outdated technology infrastructure, creating operational inefficiencies and reduced competitive positioning.
              </p>
            </div>
            
            <div className="text-center group p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 via-neutral-900/30 to-orange-800/20 border border-orange-700/30">
              <div className="text-4xl md:text-6xl font-extralight bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                4.2
              </div>
              <div className="text-orange-300 text-sm font-semibold tracking-wide uppercase mb-2">
                HOURS LOST DAILY
              </div>
              <div className="text-neutral-400 text-xs font-light">
                Manual Tasks
              </div>
              <p className="text-xs text-neutral-500 mt-3 leading-relaxed">
                Daily time spent by American small business owners on manual tasks that modern AI infrastructure can automate.
              </p>
            </div>
            
            <div className="text-center group p-6 rounded-2xl bg-gradient-to-br from-yellow-900/20 via-neutral-900/30 to-yellow-800/20 border border-yellow-700/30">
              <div className="text-4xl md:text-6xl font-extralight bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                6+
              </div>
              <div className="text-yellow-300 text-sm font-semibold tracking-wide uppercase mb-2">
                HOURS RESPONSE TIME
              </div>
              <div className="text-neutral-400 text-xs font-light">
                Customer Service
              </div>
              <p className="text-xs text-neutral-500 mt-3 leading-relaxed">
                Customer response time for American small businesses without AI-powered customer service infrastructure.
              </p>
            </div>
          </div>

          {/* Innovation Synergy AI Transformation Results */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tiffany-500/20 to-transparent h-px top-1/2"></div>
            <p className="text-tiffany-400 text-xs font-semibold tracking-[0.4em] uppercase bg-black-900 px-6 relative inline-block">
              INNOVATION SYNERGY AI TRANSFORMATION RESULTS
            </p>
          </div>

          {/* Solution Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group p-6 rounded-2xl bg-gradient-to-br from-tiffany-900/20 via-neutral-900/30 to-tiffany-800/20 border border-tiffany-500/30">
              <div className="text-4xl md:text-6xl font-extralight bg-gradient-to-r from-tiffany-400 to-tiffany-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                73%
              </div>
              <div className="text-tiffany-300 text-sm font-semibold tracking-wide uppercase mb-2">
                AVERAGE IMPROVEMENT
              </div>
              <div className="text-neutral-400 text-xs font-light">
                Operational Efficiency
              </div>
              <p className="text-xs text-neutral-500 mt-3 leading-relaxed">
                Operational efficiency gains after AI infrastructure implementation with HIPAA-compliant systems.
              </p>
            </div>
            
            <div className="text-center group p-6 rounded-2xl bg-gradient-to-br from-tiffany-900/20 via-neutral-900/30 to-tiffany-800/20 border border-tiffany-500/30">
              <div className="text-4xl md:text-6xl font-extralight bg-gradient-to-r from-tiffany-400 to-tiffany-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                2.1x
              </div>
              <div className="text-tiffany-300 text-sm font-semibold tracking-wide uppercase mb-2">
                RESPONSE SPEED
              </div>
              <div className="text-neutral-400 text-xs font-light">
                Customer Service
              </div>
              <p className="text-xs text-neutral-500 mt-3 leading-relaxed">
                Faster customer service response times with voice AI integration and specialized compliance protocols.
              </p>
            </div>
            
            <div className="text-center group p-6 rounded-2xl bg-gradient-to-br from-tiffany-900/20 via-neutral-900/30 to-tiffany-800/20 border border-tiffany-500/30">
              <div className="text-4xl md:text-6xl font-extralight bg-gradient-to-r from-tiffany-400 to-tiffany-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                $45K
              </div>
              <div className="text-tiffany-300 text-sm font-semibold tracking-wide uppercase mb-2">
                ANNUAL SAVINGS
              </div>
              <div className="text-neutral-400 text-xs font-light">
                Cost Reduction
              </div>
              <p className="text-xs text-neutral-500 mt-3 leading-relaxed">
                Average cost savings per small business through automation and specialized AI infrastructure implementation.
              </p>
            </div>
          </div>
        </div>


        {/* Our Methodology */}
        <div className="text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-700/20 to-transparent h-px top-1/2"></div>
            <p className="text-neutral-500 text-xs font-medium tracking-[0.2em] uppercase bg-black-900 px-4 relative inline-block">
              THE INNOVATION SYNERGY METHOD
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tiffany-500/20 to-tiffany-600/20 border border-tiffany-500/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <span className="text-tiffany-400 font-semibold text-lg">01</span>
              </div>
              <h3 className="text-lg font-medium text-white mb-2 group-hover:text-tiffany-300 transition-colors duration-300">Discovery</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Deep analysis of your processes, pain points, and automation opportunities
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tiffany-500/20 to-tiffany-600/20 border border-tiffany-500/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <span className="text-tiffany-400 font-semibold text-lg">02</span>
              </div>
              <h3 className="text-lg font-medium text-white mb-2 group-hover:text-tiffany-300 transition-colors duration-300">Design</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Custom AI architecture tailored to your specific business requirements
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tiffany-500/20 to-tiffany-600/20 border border-tiffany-500/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <span className="text-tiffany-400 font-semibold text-lg">03</span>
              </div>
              <h3 className="text-lg font-medium text-white mb-2 group-hover:text-tiffany-300 transition-colors duration-300">Deploy</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Seamless integration with zero disruption to your daily operations
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tiffany-500/20 to-tiffany-600/20 border border-tiffany-500/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <span className="text-tiffany-400 font-semibold text-lg">04</span>
              </div>
              <h3 className="text-lg font-medium text-white mb-2 group-hover:text-tiffany-300 transition-colors duration-300">Optimize</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Continuous improvement and team training for maximum ROI
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}