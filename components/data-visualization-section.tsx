import Image from "next/image"

export default function DataVisualizationSection() {
  return (
    <section id="business-impact" className="py-32 bg-white-50 text-black-900">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-tiffany-500 text-xs font-semibold tracking-[0.3em] uppercase text-center mb-6 animate-fade-in-up stagger-0">
          AMERICAN SMALL BUSINESS DATA
        </p>
        <h2 className="font-display text-5xl md:text-7xl font-light text-center mb-8 animate-fade-in-up stagger-200">
          Current State Analysis
        </h2>
        <p className="text-xl md:text-2xl text-neutral-600 text-center mb-24 font-light animate-fade-in-up stagger-400">
          Quantitative data on American small business operations and AI infrastructure needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          {/* Crisis Stat 1 */}
          <div className="text-center animate-fade-in-up stagger-600">
            <div className="mb-8">
              <div className="text-6xl md:text-7xl font-bold text-tiffany-500 mb-2">87%</div>
              <div className="text-lg text-neutral-600 tracking-wide">
                OF AMERICAN SMALL BUSINESSES
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Using Outdated Systems</h3>
            <p className="text-neutral-700 leading-relaxed">
              American small businesses operate with outdated technology infrastructure, 
              creating operational inefficiencies and reduced competitive positioning.
            </p>
          </div>

          {/* Crisis Stat 2 */}
          <div className="text-center animate-fade-in-up stagger-800">
            <div className="mb-8">
              <div className="text-6xl md:text-7xl font-bold text-tiffany-500 mb-2">4.2</div>
              <div className="text-lg text-neutral-600 tracking-wide">
                HOURS LOST DAILY
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Manual Tasks</h3>
            <p className="text-neutral-700 leading-relaxed">
              Daily time spent by American small business owners on manual tasks 
              that modern AI infrastructure can automate.
            </p>
          </div>

          {/* Crisis Stat 3 */}
          <div className="text-center animate-fade-in-up stagger-1000">
            <div className="mb-8">
              <div className="text-6xl md:text-7xl font-bold text-tiffany-500 mb-2">6+</div>
              <div className="text-lg text-neutral-600 tracking-wide">
                HOURS RESPONSE TIME
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Customer Service</h3>
            <p className="text-neutral-700 leading-relaxed">
              Customer response time for American small businesses without 
              AI-powered customer service infrastructure.
            </p>
          </div>
        </div>

        {/* Transformation Results */}
        <div className="border-t border-neutral-200 pt-24 animate-fade-in-up stagger-1200">
          <h3 className="font-display text-4xl md:text-5xl font-light text-center mb-16">
            Innovation Synergy AI <span className="text-tiffany-500">Transformation Results</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-black-900 mb-2">73%</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide mb-4">AVERAGE IMPROVEMENT</div>
              <p className="text-neutral-700">Operational efficiency gains after AI infrastructure implementation</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-black-900 mb-2">2.1x</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide mb-4">RESPONSE SPEED</div>
              <p className="text-neutral-700">Faster customer service response times with voice AI integration</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-black-900 mb-2">$45K</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide mb-4">ANNUAL SAVINGS</div>
              <p className="text-neutral-700">Average cost savings per small business through automation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}