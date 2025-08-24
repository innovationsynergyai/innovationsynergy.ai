import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section
      className="min-h-screen bg-black-900 text-white-50 flex items-center justify-center relative py-20 md:py-0"
      style={{ paddingTop: "120px" }}
    >
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-tiffany-500 text-xs font-semibold tracking-[0.3em] uppercase mb-6 animate-fade-in-up stagger-0">
          SERVING ALL 5 BOROUGHS • NYC 24/7 OPERATIONS • $84K+ ANNUAL SAVINGS GUARANTEED
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-6 animate-fade-in-up stagger-200">
          Eliminate <span className="text-tiffany-500">3 Full-Time</span> Positions
        </h1>
        <p className="text-2xl md:text-3xl font-semibold tracking-[0.1em] mb-6 animate-fade-in-up stagger-600">
          While Increasing Customer Satisfaction 94%
        </p>
        <p className="text-lg md:text-xl text-neutral-300 tracking-wide mb-4 animate-fade-in-up stagger-700">
          AI automation engineered for NYC's demanding finance, real estate, and startup environment
        </p>
        <p className="text-tiffany-500 text-lg font-medium tracking-[0.1em] mb-8 animate-fade-in-up stagger-800">
          Wall Street Trading • Real Estate Deals • Startup Scaling • 24/7 Operations
        </p>
        
        {/* NYC 5 Boroughs Coverage */}
        <div className="flex flex-wrap justify-center items-center space-x-6 mb-8 animate-fade-in-up stagger-900">
          <span className="text-tiffany-500 text-lg font-semibold tracking-wide">
            MANHATTAN
          </span>
          <span className="text-neutral-600">•</span>
          <span className="text-tiffany-500 text-lg font-semibold tracking-wide">
            BROOKLYN
          </span>
          <span className="text-neutral-600">•</span>
          <span className="text-tiffany-500 text-lg font-semibold tracking-wide">
            QUEENS
          </span>
          <span className="text-neutral-600">•</span>
          <span className="text-neutral-300 text-lg font-medium tracking-wide">
            BRONX • STATEN ISLAND
          </span>
        </div>
        
        {/* NYC Business Districts */}
        <div className="flex flex-wrap justify-center items-center space-x-6 mb-16 animate-fade-in-up stagger-900">
          <span className="text-tiffany-400 text-base font-medium tracking-wide">
            WALL STREET
          </span>
          <span className="text-neutral-600">•</span>
          <span className="text-tiffany-400 text-base font-medium tracking-wide">
            FINANCIAL DISTRICT
          </span>
          <span className="text-neutral-600">•</span>
          <span className="text-tiffany-400 text-base font-medium tracking-wide">
            MIDTOWN
          </span>
          <span className="text-neutral-600">•</span>
          <span className="text-neutral-400 text-base font-medium tracking-wide">
            TRIBECA • SOHO
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <Button
            asChild
            className="bg-tiffany-500 text-black-900 font-semibold px-10 py-5 rounded-none hover:bg-tiffany-400 transition-all duration-300 tracking-wide uppercase text-base animate-fade-in-up stagger-1000 shadow-lg"
          >
            <Link
              href="https://calendly.com/innovationsynergyai/30-minute-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              CLAIM YOUR $84K SAVINGS ASSESSMENT
            </Link>
          </Button>
          <Button
            asChild
            className="border border-white-50 text-white-50 font-semibold px-8 py-5 rounded-none hover:bg-white-50 hover:text-black-900 transition-all duration-300 tracking-wide uppercase text-base animate-fade-in-up stagger-1100"
          >
            <Link href="#roi-calculator">CALCULATE YOUR ROI</Link>
          </Button>
        </div>

        {/* Guarantee Badge */}
        <div className="mt-12 animate-fade-in-up stagger-1200">
          <div className="inline-flex items-center bg-tiffany-500 text-black-900 px-6 py-3 rounded-full">
            <span className="font-bold text-sm mr-2">🛡️</span>
            <span className="font-semibold text-sm">30-DAY MONEY-BACK GUARANTEE</span>
          </div>
          <p className="text-neutral-400 text-sm mt-2">
            Risk-free implementation • Results guaranteed • Full refund if not satisfied
          </p>
        </div>
        
        {/* Value Proposition & Social Proof */}
        <div 
          className="mt-20 animate-fade-in-up stagger-1300"
          role="region"
          aria-label="Key statistics and results"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center" role="img" aria-label="21 days average time to full return on investment">
              <div 
                className="text-4xl font-bold text-tiffany-500 mb-2"
                aria-label="21 days"
              >
                21 Days
              </div>
              <div className="text-white-50 text-sm">Average Time to Full ROI</div>
            </div>
            <div className="text-center" role="img" aria-label="127 thousand dollars average annual savings">
              <div 
                className="text-4xl font-bold text-tiffany-500 mb-2"
                aria-label="127 thousand dollars"
              >
                $127K
              </div>
              <div className="text-white-50 text-sm">Average Annual Savings</div>
            </div>
            <div className="text-center" role="img" aria-label="98 percent client success rate">
              <div 
                className="text-4xl font-bold text-tiffany-500 mb-2"
                aria-label="98 percent"
              >
                98%
              </div>
              <div className="text-white-50 text-sm">Client Success Rate</div>
            </div>
          </div>
          
          <p className="text-neutral-400 text-sm tracking-wide mb-4">
            ENTERPRISE-GRADE AI FOR NEW YORK METRO AREA BUSINESSES
          </p>
          <p className="text-white-50 text-lg font-light max-w-4xl mx-auto leading-relaxed">
            Join 200+ NYC businesses from Goldman Sachs trading floors to Brooklyn tech startups that have eliminated overhead costs while scaling at NYC speed. 
            Our AI automation systems handle the intensity of Wall Street, real estate deal pressure, and 24/7 operations across all 5 boroughs. 
            <span className="text-tiffany-500 font-medium"> Built for NYC pace. Zero risk. Maximum impact.</span>
          </p>
        </div>
      </div>
    </section>
  )
}