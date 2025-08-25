'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { KeyboardNavigation, FocusManager } from "@/lib/accessibility"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const navRef = useRef<HTMLElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const navigationItems = [
    { href: '#capabilities', label: 'Capabilities', ariaLabel: 'View our capabilities' },
    { href: 'https://calendly.com/innovationsynergyai/30-minute-discovery-call', label: 'Consultation', ariaLabel: 'Schedule free consultation', external: true }
  ]

  const locationLinks = [
    { href: 'https://bostonagents.ai', label: 'Boston', ariaLabel: 'Visit Boston AI agents site' },
    { href: 'https://nycagents.ai', label: 'NYC', ariaLabel: 'Visit NYC AI agents site' },
    { href: 'https://miamiagents.ai', label: 'Miami', ariaLabel: 'Visit Miami AI agents site' }
  ]

  useEffect(() => {
    if (mobileMenuOpen && mobileMenuRef.current) {
      const cleanup = FocusManager.trapFocus(mobileMenuRef.current)
      return cleanup
    }
  }, [mobileMenuOpen])

  const handleKeyNavigation = (event: KeyboardEvent, items: HTMLElement[]) => {
    const newIndex = KeyboardNavigation.handleArrowKeys(
      event,
      items,
      focusedIndex,
      {
        orientation: 'horizontal',
        loop: true,
        onSelectionChange: setFocusedIndex
      }
    )
    setFocusedIndex(newIndex)
  }

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-black-900/95 backdrop-blur-sm border-b border-neutral-800"
      role="banner"
      aria-label="Main navigation"
    >
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-tiffany-500 rounded-lg p-2 -m-2 transition-all duration-200"
            aria-label="Innovation Synergy AI - Return to homepage"
          >
            <div 
              className="w-8 h-8 bg-tiffany-500 rounded-full flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-black-900 font-bold text-sm">IS</span>
            </div>
            <div className="text-white-50">
              <div className="font-display text-xl font-light">Innovation Synergy AI</div>
              <div className="text-xs text-neutral-400 -mt-1">American Small Business AI</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            ref={navRef}
            className="hidden md:flex items-center space-x-8"
            role="navigation"
            aria-label="Main menu"
          >
            {navigationItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="text-neutral-300 hover:text-tiffany-500 focus:text-tiffany-500 transition-colors duration-300 text-sm font-medium tracking-wide uppercase focus:outline-none focus:ring-2 focus:ring-tiffany-500 rounded px-2 py-1"
                aria-label={item.ariaLabel}
                onFocus={() => setFocusedIndex(index)}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-neutral-700">
              {locationLinks.map((location) => (
                <Link
                  key={location.href}
                  href={location.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-tiffany-500 focus:text-tiffany-500 transition-colors duration-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-tiffany-500 rounded px-2 py-1"
                  aria-label={location.ariaLabel}
                >
                  {location.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white-50 hover:text-tiffany-500 focus:text-tiffany-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-tiffany-500 rounded p-2"
            onClick={handleMobileMenuToggle}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-tiffany-500 text-black-900 font-semibold px-6 py-2 rounded-none hover:bg-tiffany-400 focus:bg-tiffany-400 transition-all duration-300 tracking-wide uppercase text-xs focus:outline-none focus:ring-2 focus:ring-tiffany-400 focus:ring-offset-2 focus:ring-offset-black-900"
            >
              <Link
                href="https://calendly.com/innovationsynergyai/30-minute-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a discovery call - Opens in new window"
              >
                Book Call
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          id="mobile-menu"
          className="md:hidden bg-black-900 border-b border-neutral-800"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="px-6 py-4 space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-neutral-300 hover:text-tiffany-500 focus:text-tiffany-500 transition-colors duration-300 text-base font-medium tracking-wide uppercase focus:outline-none focus:ring-2 focus:ring-tiffany-500 rounded px-2 py-2"
                onClick={closeMobileMenu}
                aria-label={item.ariaLabel}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-neutral-700">
              <p className="text-neutral-400 text-sm font-medium mb-3">Locations</p>
              <div className="space-y-2">
                {locationLinks.map((location) => (
                  <Link
                    key={location.href}
                    href={location.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-neutral-400 hover:text-tiffany-500 focus:text-tiffany-500 transition-colors duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-tiffany-500 rounded px-2 py-1"
                    onClick={closeMobileMenu}
                    aria-label={location.ariaLabel}
                  >
                    {location.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="pt-4">
              <Button
                asChild
                className="w-full bg-tiffany-500 text-black-900 font-semibold px-6 py-3 rounded-none hover:bg-tiffany-400 focus:bg-tiffany-400 transition-all duration-300 tracking-wide uppercase text-sm focus:outline-none focus:ring-2 focus:ring-tiffany-400"
              >
                <Link
                  href="https://calendly.com/innovationsynergyai/30-minute-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  aria-label="Book a discovery call - Opens in new window"
                >
                  Book Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}