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
          $84K+ ANNUAL SAVINGS GUARANTEED
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-6 animate-fade-in-up stagger-200">
          Eliminate <span className="text-tiffany-500">3 Full-Time</span> Positions
        </h1>
        <p className="text-2xl md:text-3xl font-semibold tracking-[0.1em] mb-6 animate-fade-in-up stagger-600">
          While Increasing Customer Satisfaction 94%
        </p>
        <p className="text-lg md:text-xl text-neutral-300 tracking-wide mb-4 animate-fade-in-up stagger-700">
          AI automation that pays for itself in 21 days and delivers $300K+ annual ROI
        </p>
        <p className="text-tiffany-500 text-lg font-medium tracking-[0.1em] mb-8 animate-fade-in-up stagger-800">
          Voice AI • Process Automation • Cost Elimination • Revenue Growth
        </p>
        
        {/* Service Locations */}
        <div className="flex flex-wrap justify-center items-center space-x-8 mb-16 animate-fade-in-up stagger-900">
          <Link 
            href="https://bostonagents.ai" 
            target="_blank"
            className="text-neutral-300 hover:text-tiffany-500 transition-colors duration-300 text-lg font-medium tracking-wide"
          >
            BOSTON
          </Link>
          <span className="text-neutral-600">•</span>
          <Link 
            href="https://nycagents.ai" 
            target="_blank"
            className="text-neutral-300 hover:text-tiffany-500 transition-colors duration-300 text-lg font-medium tracking-wide"
          >
            NYC
          </Link>
          <span className="text-neutral-600">•</span>
          <Link 
            href="https://miamiagents.ai" 
            target="_blank"
            className="text-neutral-300 hover:text-tiffany-500 transition-colors duration-300 text-lg font-medium tracking-wide"
          >
            MIAMI
          </Link>
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
            ENTERPRISE-GRADE AI FOR AMERICAN BUSINESSES
          </p>
          <p className="text-white-50 text-lg font-light max-w-4xl mx-auto leading-relaxed">
            Join 200+ businesses that have eliminated overhead costs while scaling revenue. 
            Our AI automation systems deliver immediate results with guaranteed ROI. 
            <span className="text-tiffany-500 font-medium"> Zero risk. Maximum impact.</span>
          </p>
        </div>
      </div>
    </section>
  )
}