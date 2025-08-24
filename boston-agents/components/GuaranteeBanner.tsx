'use client'

import { Shield, TrendingUp, Clock, Award } from "lucide-react"

export default function GuaranteeBanner() {
  return (
    <section className="bg-tiffany-500 py-16">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-light text-black-900 mb-4">
            Zero-Risk Investment Guarantee
          </h2>
          <p className="text-xl text-black-700 max-w-3xl mx-auto">
            We're so confident in our results, we guarantee your success with multiple safety nets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-black-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-tiffany-500" />
            </div>
            <h3 className="text-black-900 font-bold text-lg mb-2">30-Day Money Back</h3>
            <p className="text-black-700 text-sm">
              Full refund if you're not completely satisfied within the first 30 days
            </p>
          </div>

          <div className="text-center">
            <div className="bg-black-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-tiffany-500" />
            </div>
            <h3 className="text-black-900 font-bold text-lg mb-2">ROI Guarantee</h3>
            <p className="text-black-700 text-sm">
              If you don't see measurable ROI within 60 days, we'll work for free until you do
            </p>
          </div>

          <div className="text-center">
            <div className="bg-black-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-tiffany-500" />
            </div>
            <h3 className="text-black-900 font-bold text-lg mb-2">Time Savings Promise</h3>
            <p className="text-black-700 text-sm">
              We guarantee to save you 20+ hours weekly or provide additional automation at no cost
            </p>
          </div>

          <div className="text-center">
            <div className="bg-black-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-tiffany-500" />
            </div>
            <h3 className="text-black-900 font-bold text-lg mb-2">Success Guarantee</h3>
            <p className="text-black-700 text-sm">
              98% of our clients see results within 21 days. Be part of our proven track record
            </p>
          </div>
        </div>

        {/* Testimonial Strip */}
        <div className="bg-black-900 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-tiffany-500 text-lg font-semibold mb-2">"Risk-free decision"</p>
              <p className="text-white-50 text-sm italic">
                "The guarantees made it an easy choice. Results exceeded expectations."
              </p>
              <p className="text-neutral-400 text-xs mt-2">- Michael Chen, Tech Startup CEO</p>
            </div>
            <div>
              <p className="text-tiffany-500 text-lg font-semibold mb-2">"Confidence in service"</p>
              <p className="text-white-50 text-sm italic">
                "Their guarantee policy shows they truly stand behind their work."
              </p>
              <p className="text-neutral-400 text-xs mt-2">- Sarah Rodriguez, Restaurant Owner</p>
            </div>
            <div>
              <p className="text-tiffany-500 text-lg font-semibold mb-2">"Peace of mind"</p>
              <p className="text-white-50 text-sm italic">
                "Knowing I had zero risk made the investment decision straightforward."
              </p>
              <p className="text-neutral-400 text-xs mt-2">- David Park, Manufacturing Director</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-black-900 text-lg font-medium mb-6">
            Ready to transform your business with zero risk?
          </p>
          <a 
            href="https://calendly.com/innovationsynergyai/30-minute-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black-900 text-tiffany-500 font-semibold px-10 py-4 rounded-none hover:bg-neutral-800 transition-all duration-300 tracking-wide uppercase text-sm shadow-lg"
          >
            CLAIM YOUR RISK-FREE ASSESSMENT
          </a>
          <p className="text-black-700 text-sm mt-4">
            No commitment required • 30-minute strategy session • $497 value, completely free
          </p>
        </div>
      </div>
    </section>
  )
}