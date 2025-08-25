import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section
      className="min-h-screen bg-black-900 text-white-50 flex items-center justify-center relative px-4 py-24 md:py-32"
      style={{ paddingTop: "100px" }}
    >
      <div className="container max-w-6xl mx-auto text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tiffany-500/20 to-transparent h-px top-1/2"></div>
          <p className="text-tiffany-400 text-xs font-semibold tracking-[0.4em] uppercase bg-black-900 px-6 relative inline-block animate-fade-in-up stagger-0">
            PROFESSIONAL AI CONSULTING • CUSTOM SOLUTIONS • NATIONWIDE SERVICE
          </p>
        </div>
        <h1 className="font-display text-4xl md:text-6xl lg:text-8xl font-extralight mb-8 animate-fade-in-up stagger-200 leading-[0.9] tracking-tight">
          We <span className="bg-gradient-to-r from-tiffany-400 via-tiffany-500 to-tiffany-600 bg-clip-text text-transparent font-light">Build, Integrate & Maintain</span><br className="hidden md:block" /> 
          <span className="text-neutral-100">Custom AI</span> for Small Business
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light tracking-wide mb-12 animate-fade-in-up stagger-600 text-neutral-300 max-w-4xl mx-auto leading-relaxed">
          Professional AI consulting methodology. From concept to deployment to optimization – 
          <span className="text-tiffany-400">we guarantee your success.</span>
        </p>
        <div className="max-w-5xl mx-auto mb-16 animate-fade-in-up stagger-700">
          <p className="text-base md:text-lg text-neutral-400 mb-8 leading-relaxed font-light">
            Unlike traditional consultants who just advise, we build, deploy, and optimize your AI infrastructure. 
            <span className="text-tiffany-400">Professional implementation.</span> <span className="text-tiffany-400">Custom solutions.</span> <span className="text-tiffany-400">Ongoing support.</span>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-lg bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-neutral-800/50">
              <span className="text-xs md:text-sm text-tiffany-400 font-medium tracking-wide">Custom Development</span>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-neutral-800/50">
              <span className="text-xs md:text-sm text-tiffany-400 font-medium tracking-wide">Full Integration</span>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-neutral-800/50">
              <span className="text-xs md:text-sm text-tiffany-400 font-medium tracking-wide">Ongoing Maintenance</span>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-neutral-800/50">
              <span className="text-xs md:text-sm text-tiffany-400 font-medium tracking-wide">Team Training</span>
            </div>
          </div>
        </div>
        
        {/* Service Areas */}
        <div className="mb-16 animate-fade-in-up stagger-900">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-700/30 to-transparent h-px top-1/2"></div>
            <p className="text-neutral-500 text-xs font-medium tracking-[0.2em] uppercase bg-black-900 px-4 relative inline-block">SERVING SMALL BUSINESSES NATIONWIDE</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-6 text-neutral-400">
            <Link href="https://bostonagents.ai" target="_blank" className="hover:text-tiffany-400 transition-all duration-300 text-xs font-medium tracking-wide hover:scale-105">BOSTON</Link>
            <div className="w-1 h-1 rounded-full bg-neutral-700"></div>
            <Link href="https://nycagents.ai" target="_blank" className="hover:text-tiffany-400 transition-all duration-300 text-xs font-medium tracking-wide hover:scale-105">NYC</Link>
            <div className="w-1 h-1 rounded-full bg-neutral-700"></div>
            <Link href="https://miamiagents.ai" target="_blank" className="hover:text-tiffany-400 transition-all duration-300 text-xs font-medium tracking-wide hover:scale-105">MIAMI</Link>
            <div className="w-1 h-1 rounded-full bg-neutral-700"></div>
            <span className="text-xs font-medium tracking-wide text-tiffany-400/80">REMOTE NATIONWIDE</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-20">
          <Button
            asChild
            className="bg-gradient-to-r from-tiffany-500 to-tiffany-600 text-black-900 font-semibold px-10 py-5 rounded-none hover:from-tiffany-400 hover:to-tiffany-500 transition-all duration-500 tracking-wide uppercase text-sm sm:text-base animate-fade-in-up stagger-1000 shadow-2xl hover:shadow-tiffany-500/25 hover:scale-105 w-full sm:w-auto transform"
          >
            <Link
              href="https://calendly.com/innovationsynergyai/30-minute-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              SCHEDULE CONSULTATION
            </Link>
          </Button>
          <Button
            asChild
            className="border border-neutral-600 text-neutral-300 font-semibold px-10 py-5 rounded-none hover:border-tiffany-500 hover:text-tiffany-500 hover:bg-neutral-900/50 transition-all duration-500 tracking-wide uppercase text-sm sm:text-base animate-fade-in-up stagger-1100 w-full sm:w-auto backdrop-blur-sm hover:scale-105 transform"
          >
            <Link href="#capabilities">OUR CAPABILITIES</Link>
          </Button>
        </div>

        {/* Elite Trust Indicators */}
        <div className="mt-12 animate-fade-in-up stagger-1200">
          <div className="bg-gradient-to-r from-neutral-900/50 via-neutral-800/30 to-neutral-900/50 border border-neutral-800/50 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-xs">
              <div>
                <div className="text-tiffany-400 font-semibold mb-1">HIPAA</div>
                <div className="text-neutral-500">Compliant</div>
              </div>
              <div>
                <div className="text-tiffany-400 font-semibold mb-1">US-Based</div>
                <div className="text-neutral-500">Team</div>
              </div>
              <div>
                <div className="text-tiffany-400 font-semibold mb-1">24/7</div>
                <div className="text-neutral-500">Support</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Capabilities */}
        <div 
          id="capabilities"
          className="mt-16 animate-fade-in-up stagger-1300"
          role="region"
          aria-label="Core capabilities"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group text-center p-8 border border-neutral-800/50 rounded-2xl bg-gradient-to-br from-neutral-900/30 via-neutral-900/20 to-neutral-800/30 hover:from-neutral-800/40 hover:via-neutral-900/30 hover:to-neutral-800/40 transition-all duration-500 hover:border-tiffany-500/30 hover:shadow-2xl hover:shadow-tiffany-500/10 hover:scale-105 transform backdrop-blur-sm">
              <div className="text-2xl font-light text-tiffany-400 mb-4 group-hover:text-tiffany-300 transition-colors duration-300">
                Custom Build
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed font-light group-hover:text-neutral-300 transition-colors duration-300">
                We develop AI solutions from scratch, tailored to your specific business processes and requirements.
              </p>
              <div className="mt-6 w-12 h-px bg-gradient-to-r from-transparent via-tiffany-500/50 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group text-center p-8 border border-neutral-800/50 rounded-2xl bg-gradient-to-br from-neutral-900/30 via-neutral-900/20 to-neutral-800/30 hover:from-neutral-800/40 hover:via-neutral-900/30 hover:to-neutral-800/40 transition-all duration-500 hover:border-tiffany-500/30 hover:shadow-2xl hover:shadow-tiffany-500/10 hover:scale-105 transform backdrop-blur-sm">
              <div className="text-2xl font-light text-tiffany-400 mb-4 group-hover:text-tiffany-300 transition-colors duration-300">
                Full Integration
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed font-light group-hover:text-neutral-300 transition-colors duration-300">
                Seamless connection with your existing systems, tools, and workflows without disruption.
              </p>
              <div className="mt-6 w-12 h-px bg-gradient-to-r from-transparent via-tiffany-500/50 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group text-center p-8 border border-neutral-800/50 rounded-2xl bg-gradient-to-br from-neutral-900/30 via-neutral-900/20 to-neutral-800/30 hover:from-neutral-800/40 hover:via-neutral-900/30 hover:to-neutral-800/40 transition-all duration-500 hover:border-tiffany-500/30 hover:shadow-2xl hover:shadow-tiffany-500/10 hover:scale-105 transform backdrop-blur-sm">
              <div className="text-2xl font-light text-tiffany-400 mb-4 group-hover:text-tiffany-300 transition-colors duration-300">
                Ongoing Support
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed font-light group-hover:text-neutral-300 transition-colors duration-300">
                Maintenance, training, and continuous optimization for maximum ROI and performance.
              </p>
              <div className="mt-6 w-12 h-px bg-gradient-to-r from-transparent via-tiffany-500/50 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}