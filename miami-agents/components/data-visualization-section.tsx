import Image from "next/image"

export default function DataVisualizationSection() {
  return (
    <section 
      id="business-impact" 
      className="py-32 bg-white-50 text-black-900"
      aria-label="Business impact analysis and data visualization"
      role="region"
    >
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <p 
          className="text-tiffany-500 text-xs font-semibold tracking-[0.3em] uppercase text-center mb-6 animate-fade-in-up stagger-0"
          role="text"
        >
          SMALL BUSINESS OPERATIONAL DATA
        </p>
        <h2 
          className="font-display text-5xl md:text-7xl font-light text-center mb-8 animate-fade-in-up stagger-200"
          id="analysis-title"
        >
          Current State Analysis
        </h2>
        <p 
          className="text-xl md:text-2xl text-neutral-600 text-center mb-24 font-light animate-fade-in-up stagger-400"
          aria-describedby="analysis-title"
        >
          Research-backed data on small business operational inefficiencies and automation opportunities
        </p>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24"
          role="group"
          aria-label="Small business operational statistics"
        >
          {/* Crisis Stat 1 */}
          <div 
            className="text-center animate-fade-in-up stagger-600"
            role="img"
            aria-label="68 percent of small businesses depend on manual tasks"
          >
            <div className="mb-8">
              <div 
                className="text-6xl md:text-7xl font-bold text-tiffany-500 mb-2"
                aria-label="68 percent"
              >
                68%
              </div>
              <div className="text-lg text-neutral-600 tracking-wide">
                OF SMALL BUSINESSES
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Manual Task Dependency</h3>
            <p className="text-neutral-700 leading-relaxed">
              Most small businesses waste 4+ hours daily on manual tasks that automation 
              can handle, reducing productivity and growth potential.
            </p>
          </div>

          {/* Crisis Stat 2 */}
          <div 
            className="text-center animate-fade-in-up stagger-800"
            role="img"
            aria-label="25 hours saved weekly through automation"
          >
            <div className="mb-8">
              <div 
                className="text-6xl md:text-7xl font-bold text-tiffany-500 mb-2"
                aria-label="25 hours"
              >
                25
              </div>
              <div className="text-lg text-neutral-600 tracking-wide">
                HOURS SAVED WEEKLY
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Through Automation</h3>
            <p className="text-neutral-700 leading-relaxed">
              Average weekly time savings achieved by businesses implementing voice AI 
              agents and workflow automation solutions.
            </p>
          </div>

          {/* Crisis Stat 3 */}
          <div 
            className="text-center animate-fade-in-up stagger-1000"
            role="img"
            aria-label="385 percent average return on investment achieved within 6 months"
          >
            <div className="mb-8">
              <div 
                className="text-6xl md:text-7xl font-bold text-tiffany-500 mb-2"
                aria-label="385 percent"
              >
                385%
              </div>
              <div className="text-lg text-neutral-600 tracking-wide">
                AVERAGE ROI ACHIEVED
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Within 6 Months</h3>
            <p className="text-neutral-700 leading-relaxed">
              Return on investment achieved by clients through reduced labor costs, 
              improved efficiency, and enhanced customer experience.
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
              <div className="text-sm text-neutral-600 uppercase tracking-wide mb-4">EFFICIENCY IMPROVEMENT</div>
              <p className="text-neutral-700">Operational efficiency gains after automation implementation</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-black-900 mb-2">5x</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide mb-4">RESPONSE SPEED</div>
              <p className="text-neutral-700">Faster customer service response times with voice AI integration</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-black-900 mb-2">$52K</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide mb-4">ANNUAL SAVINGS</div>
              <p className="text-neutral-700">Average cost savings per client through workflow automation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}