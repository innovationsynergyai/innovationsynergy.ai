'use client'

import Image from "next/image"
import { Shield, TrendingUp, Clock, Award } from "lucide-react"

export default function GuaranteeSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-950 via-black-900 to-black-900 text-white-50 border-t border-neutral-800/50">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tiffany-500/20 to-transparent h-px top-1/2"></div>
            <p className="text-tiffany-400 text-xs font-semibold tracking-[0.4em] uppercase bg-black-900 px-6 relative inline-block">
              RISK-FREE PARTNERSHIP
            </p>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-extralight mb-6 leading-tight tracking-tight">
            <span className="text-neutral-100">We Guarantee</span><br />
            <span className="bg-gradient-to-r from-tiffany-400 via-tiffany-500 to-tiffany-600 bg-clip-text text-transparent font-light">Your Success</span>
          </h2>
          
          <p className="text-base md:text-lg text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            We're so confident in our methodology, we put our reputation on the line with multiple guarantees
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-neutral-900/30 via-neutral-900/20 to-neutral-800/30 border border-neutral-800/50 hover:border-tiffany-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-tiffany-500/10 hover:scale-105 transform">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tiffany-500/20 to-tiffany-600/20 border border-tiffany-500/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8 text-tiffany-400" />
            </div>
            <h3 className="text-lg font-medium text-white mb-3 group-hover:text-tiffany-300 transition-colors duration-300">30-Day Money Back</h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Full refund if you're not completely satisfied within 30 days. No questions asked.
            </p>
          </div>

          <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-neutral-900/30 via-neutral-900/20 to-neutral-800/30 border border-neutral-800/50 hover:border-tiffany-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-tiffany-500/10 hover:scale-105 transform">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tiffany-500/20 to-tiffany-600/20 border border-tiffany-500/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-8 h-8 text-tiffany-400" />
            </div>
            <h3 className="text-lg font-medium text-white mb-3 group-hover:text-tiffany-300 transition-colors duration-300">ROI Guarantee</h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              If you don't see measurable ROI within 60 days, we work for free until you do.
            </p>
          </div>

          <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-neutral-900/30 via-neutral-900/20 to-neutral-800/30 border border-neutral-800/50 hover:border-tiffany-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-tiffany-500/10 hover:scale-105 transform">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tiffany-500/20 to-tiffany-600/20 border border-tiffany-500/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-8 h-8 text-tiffany-400" />
            </div>
            <h3 className="text-lg font-medium text-white mb-3 group-hover:text-tiffany-300 transition-colors duration-300">Time Savings Promise</h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              We guarantee to save you 20+ hours weekly or provide additional automation free.
            </p>
          </div>

          <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-neutral-900/30 via-neutral-900/20 to-neutral-800/30 border border-neutral-800/50 hover:border-tiffany-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-tiffany-500/10 hover:scale-105 transform">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tiffany-500/20 to-tiffany-600/20 border border-tiffany-500/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-tiffany-400" />
            </div>
            <h3 className="text-lg font-medium text-white mb-3 group-hover:text-tiffany-300 transition-colors duration-300">Success Guarantee</h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              98% of our clients see results within 21 days. Join our proven track record.
            </p>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-tiffany-500/5 via-tiffany-400/5 to-tiffany-600/5 border border-tiffany-500/20">
            <blockquote className="text-lg md:text-xl font-light text-neutral-300 leading-relaxed mb-6">
              "Your project is protected by comprehensive business insurance. 
              We maintain full professional liability coverage for your peace of mind."
            </blockquote>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                <Image
                  src="/logo-black-square.png"
                  alt="Innovation Synergy AI logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="text-left">
                <div className="text-white font-medium">Innovation Synergy AI Inc.</div>
                <div className="text-neutral-400 text-sm">Delaware Corporation • 254 Chapman Rd, Newark, DE 19702</div>
              </div>
            </div>
            
            {/* Insurance Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-neutral-700/30">
              <div className="text-center p-4 rounded-lg bg-neutral-900/30 border border-neutral-800/50">
                <div className="text-tiffany-400 font-medium text-sm mb-1">General Liability</div>
                <div className="text-neutral-300 text-xs">$1M Coverage • Next Insurance US</div>
                <div className="text-neutral-500 text-xs mt-1">NAIC# 16285</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-neutral-900/30 border border-neutral-800/50">
                <div className="text-tiffany-400 font-medium text-sm mb-1">Errors & Omissions</div>
                <div className="text-neutral-300 text-xs">$1M Coverage • Professional Liability</div>
                <div className="text-neutral-500 text-xs mt-1">Effective 08/12/2025</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}