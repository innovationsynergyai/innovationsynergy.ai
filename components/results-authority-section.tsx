'use client'

import { useAnalytics } from "@/hooks/useAnalytics"

export default function ResultsAuthoritySection() {
  const { trackButtonClick } = useAnalytics()

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-black-900 via-neutral-950 to-black-900 text-white-50">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Results that Matter */}
        <div className="text-center mb-20">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tiffany-500/20 to-transparent h-px top-1/2"></div>
            <p className="text-tiffany-400 text-xs font-semibold tracking-[0.4em] uppercase bg-black-900 px-6 relative inline-block">
              RESULTS THAT MATTER
            </p>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-extralight mb-12 leading-tight tracking-tight">
            <span className="text-neutral-100">Transforming Small Businesses</span><br />
            <span className="bg-gradient-to-r from-tiffany-400 via-tiffany-500 to-tiffany-600 bg-clip-text text-transparent font-light">Since 2019</span>
          </h2>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="text-4xl md:text-6xl font-extralight bg-gradient-to-r from-tiffany-400 to-tiffany-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                $2.4M+
              </div>
              <div className="text-neutral-400 text-sm font-light tracking-wide uppercase">
                Saved for Clients
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-6xl font-extralight bg-gradient-to-r from-tiffany-400 to-tiffany-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                180+
              </div>
              <div className="text-neutral-400 text-sm font-light tracking-wide uppercase">
                Projects Delivered
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-6xl font-extralight bg-gradient-to-r from-tiffany-400 to-tiffany-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                98%
              </div>
              <div className="text-neutral-400 text-sm font-light tracking-wide uppercase">
                Client Retention
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-6xl font-extralight bg-gradient-to-r from-tiffany-400 to-tiffany-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                21
              </div>
              <div className="text-neutral-400 text-sm font-light tracking-wide uppercase">
                Day Avg ROI
              </div>
            </div>
          </div>
        </div>

        {/* Client Success Stories */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-neutral-900/40 via-neutral-900/30 to-neutral-800/40 border border-neutral-800/50 hover:border-tiffany-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-tiffany-500/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">MH</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">MetroHealth Partners</h3>
                  <p className="text-sm text-neutral-400">Healthcare • 450 employees</p>
                </div>
              </div>
              <blockquote className="text-neutral-300 font-light leading-relaxed mb-4">
                "Innovation Synergy AI eliminated 3 full-time positions while improving patient satisfaction 47%. 
                Their voice AI handles 2,400+ patient calls monthly with HIPAA compliance."
              </blockquote>
              <div className="flex items-center justify-between text-sm">
                <span className="text-tiffany-400 font-medium">$126K Annual Savings</span>
                <span className="text-neutral-500">18-day implementation</span>
              </div>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-neutral-900/40 via-neutral-900/30 to-neutral-800/40 border border-neutral-800/50 hover:border-tiffany-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-tiffany-500/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">AL</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Apex Legal Group</h3>
                  <p className="text-sm text-neutral-400">Legal Services • 85 employees</p>
                </div>
              </div>
              <blockquote className="text-neutral-300 font-light leading-relaxed mb-4">
                "Document automation and client intake AI reduced case processing time 62%. 
                We're handling 3x more clients with the same staff size."
              </blockquote>
              <div className="flex items-center justify-between text-sm">
                <span className="text-tiffany-400 font-medium">$89K Annual Savings</span>
                <span className="text-neutral-500">14-day implementation</span>
              </div>
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