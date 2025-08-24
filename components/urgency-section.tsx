import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function UrgencySection() {
  return (
    <section className="py-24 bg-tiffany-500 text-black-900">
      <div className="container max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-light mb-8 animate-fade-in-up stagger-0">
          Limited Q1 2025 Deployment Slots
        </h2>
        <p className="text-xl md:text-2xl font-semibold mb-6 animate-fade-in-up stagger-200">
          Only 50 American Small Businesses Will Be Selected
        </p>
        <p className="text-lg mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-400">
          Due to our hands-on approach and commitment to excellence, Innovation Synergy AI can only 
          work with a limited number of American small businesses each quarter. Don't let your 
          competitors gain the AI advantage while you wait.
        </p>
        
        <div className="bg-black-900 text-white-50 rounded-lg p-8 mb-12 max-w-2xl mx-auto animate-fade-in-up stagger-600">
          <div className="text-5xl font-bold text-tiffany-500 mb-4">15</div>
          <div className="text-lg font-medium mb-2">SLOTS REMAINING FOR Q1 2025</div>
          <div className="text-neutral-300 text-sm">Nationwide deployment availability</div>
        </div>

        <Button
          asChild
          className="bg-black-900 text-white-50 font-semibold px-12 py-6 rounded-none hover:bg-neutral-800 transition-all duration-300 tracking-wide uppercase text-base animate-fade-in-up stagger-800"
        >
          <Link
            href="https://calendly.com/innovationsynergyai/30-minute-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            SECURE YOUR SLOT TODAY
          </Link>
        </Button>
        
        <p className="text-neutral-700 text-sm mt-8 animate-fade-in-up stagger-1000">
          Strategy calls are completely free with no obligation. Discover if your business qualifies.
        </p>
      </div>
    </section>
  )
}