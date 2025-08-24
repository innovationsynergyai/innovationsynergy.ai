import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black-900/95 backdrop-blur-sm border-b border-neutral-800">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-tiffany-500 rounded-full flex items-center justify-center">
              <span className="text-black-900 font-bold text-sm">IS</span>
            </div>
            <div className="text-white-50">
              <div className="font-display text-xl font-light">Innovation Synergy AI</div>
              <div className="text-xs text-neutral-400 -mt-1">American Small Business AI</div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#business-impact" 
              className="text-neutral-300 hover:text-tiffany-500 transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
            >
              Impact
            </Link>
            <Link 
              href="#investment-packages" 
              className="text-neutral-300 hover:text-tiffany-500 transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
            >
              Packages
            </Link>
            <div className="flex items-center space-x-4">
              <Link 
                href="https://bostonagents.ai" 
                target="_blank"
                className="text-neutral-400 hover:text-tiffany-500 transition-colors duration-300 text-xs font-medium"
              >
                Boston
              </Link>
              <Link 
                href="https://nycagents.ai" 
                target="_blank"
                className="text-neutral-400 hover:text-tiffany-500 transition-colors duration-300 text-xs font-medium"
              >
                NYC
              </Link>
              <Link 
                href="https://miamiagents.ai" 
                target="_blank"
                className="text-neutral-400 hover:text-tiffany-500 transition-colors duration-300 text-xs font-medium"
              >
                Miami
              </Link>
            </div>
          </nav>

          {/* CTA Button */}
          <Button
            asChild
            className="bg-tiffany-500 text-black-900 font-semibold px-6 py-2 rounded-none hover:bg-tiffany-400 transition-all duration-300 tracking-wide uppercase text-xs"
          >
            <Link
              href="https://calendly.com/innovationsynergyai/30-minute-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Call
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}