"use client"

import { cn } from "@/lib/utils"

const trustBadges = [
  {
    title: "30-Day Money-Back Guarantee",
    description: "Full refund if not satisfied",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "text-green-600 bg-green-50"
  },
  {
    title: "HIPAA Compliant",
    description: "Healthcare data protection certified",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    color: "text-blue-600 bg-blue-50"
  },
  {
    title: "100% American-Owned",
    description: "Headquartered in Boston, MA",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
    color: "text-red-600 bg-red-50"
  },
  {
    title: "SOC 2 Type II Certified",
    description: "Enterprise security standards",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "text-purple-600 bg-purple-50"
  },
  {
    title: "24/7 Expert Support",
    description: "Always here when you need us",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.944l.372.372m-.372 5.656l.372.372m-.372 5.656l.372.372m-.372 5.656L12 21.056M4.5 4.5v15h15v-15h-15z" />
      </svg>
    ),
    color: "text-orange-600 bg-orange-50"
  },
  {
    title: "99.9% Uptime SLA",
    description: "Enterprise reliability guarantee",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "text-yellow-600 bg-yellow-50"
  }
]

const securityLogos = [
  {
    name: "ISO 27001",
    description: "Information Security Management",
    badge: "ISO"
  },
  {
    name: "GDPR Ready",
    description: "European Data Protection",
    badge: "GDPR"
  },
  {
    name: "PCI DSS",
    description: "Payment Card Security",
    badge: "PCI"
  },
  {
    name: "SSAE 18",
    description: "Auditing Standards",
    badge: "SSAE"
  }
]

interface TrustBadgeProps {
  badge: typeof trustBadges[0]
  className?: string
}

function TrustBadge({ badge, className }: TrustBadgeProps) {
  return (
    <div className={cn("group cursor-pointer", className)}>
      <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className={cn("mx-auto mb-4 h-16 w-16 rounded-full flex items-center justify-center", badge.color)}>
          {badge.icon}
        </div>
        <h3 className="text-sm font-semibold text-gray-900 mb-2">
          {badge.title}
        </h3>
        <p className="text-xs text-gray-600">
          {badge.description}
        </p>
      </div>
    </div>
  )
}

export default function TrustBadges() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Enterprise-Grade Security & Compliance
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Your data and business operations are protected by the highest industry standards
          </p>
        </div>

        {/* Main trust badges */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {trustBadges.map((badge, index) => (
              <TrustBadge key={index} badge={badge} />
            ))}
          </div>
        </div>

        {/* Security certifications */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-8">
              Security Certifications & Compliance
            </h3>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {securityLogos.map((cert, index) => (
                <div key={index} className="text-center group">
                  <div className="mx-auto mb-3 h-12 w-12 rounded-lg bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <span className="text-white font-bold text-xs">{cert.badge}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900">{cert.name}</h4>
                  <p className="text-xs text-gray-600 mt-1">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key security points */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">End-to-End Encryption</h3>
              <p className="mt-2 text-sm text-gray-600">AES-256 encryption for all data in transit and at rest</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">US-Based Hosting</h3>
              <p className="mt-2 text-sm text-gray-600">All data stored in secure US data centers with redundancy</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Regular Audits</h3>
              <p className="mt-2 text-sm text-gray-600">Quarterly security assessments by third-party experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}