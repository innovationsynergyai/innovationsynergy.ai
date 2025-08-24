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
          AMERICAN AI INFRASTRUCTURE CONSULTING
        </p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light mb-4 animate-fade-in-up stagger-200">
          Innovation <span className="text-tiffany-500">Synergy</span> AI
        </h1>
        <p className="text-2xl md:text-3xl font-semibold tracking-[0.2em] mt-16 mb-4 animate-fade-in-up stagger-600">
          AMERICAN SMALL BUSINESS TRANSFORMATION
        </p>
        <p className="text-lg md:text-xl text-neutral-300 tracking-wide mb-3 animate-fade-in-up stagger-700">
          WE LEVERAGE THE LATEST TECHNOLOGY FOR AMERICAN SMALL BUSINESSES
        </p>
        <p className="text-tiffany-500 text-xl font-medium tracking-[0.15em] mb-8 animate-fade-in-up stagger-800">
          TAKE BACK YOUR TIME
        </p>
        <p className="text-tiffany-500 text-sm font-medium tracking-[0.15em] mb-16 animate-fade-in-up stagger-800">
          VOICE AI • DATA ENRICHMENT • REMOTE INSTALL • CUSTOM INTEGRATION
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
            className="bg-tiffany-500 text-black-900 font-semibold px-8 py-4 rounded-none hover:bg-tiffany-400 transition-all duration-300 tracking-wide uppercase text-sm animate-fade-in-up stagger-1000"
          >
            <Link
              href="https://calendly.com/innovationsynergyai/30-minute-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              SCHEDULE STRATEGY CALL
            </Link>
          </Button>
          <Button
            asChild
            className="border border-white-50 text-white-50 font-semibold px-8 py-4 rounded-none hover:bg-white-50 hover:text-black-900 transition-all duration-300 tracking-wide uppercase text-sm animate-fade-in-up stagger-1100"
          >
            <Link href="#investment-packages">VIEW PACKAGES</Link>
          </Button>
        </div>
        
        {/* Value Proposition */}
        <div className="mt-24 animate-fade-in-up stagger-1200">
          <p className="text-neutral-400 text-sm tracking-wide mb-4">
            AMERICAN SMALL BUSINESS AI INFRASTRUCTURE
          </p>
          <p className="text-white-50 text-lg font-light max-w-4xl mx-auto leading-relaxed">
            We deliver AI infrastructure consulting for American small businesses. Our remote consulting and 
            installation services integrate advanced technology into daily operations. Results-focused, 
            compliance-ready, built for business.
          </p>
        </div>
      </div>
    </section>
  )
}