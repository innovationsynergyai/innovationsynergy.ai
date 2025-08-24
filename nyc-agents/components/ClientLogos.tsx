"use client"

import { cn } from "@/lib/utils"

const clients = [
  {
    name: "Pacific Healthcare Solutions",
    industry: "Healthcare",
    logo: "PHC"
  },
  {
    name: "Metropolitan Law Associates", 
    industry: "Legal Services",
    logo: "MLA"
  },
  {
    name: "Apex Manufacturing Corp",
    industry: "Manufacturing", 
    logo: "AMC"
  },
  {
    name: "Summit Real Estate Group",
    industry: "Real Estate",
    logo: "SRE"
  },
  {
    name: "Coastal Retail Solutions",
    industry: "E-commerce",
    logo: "CRS"
  },
  {
    name: "Pinnacle Financial Services",
    industry: "Finance",
    logo: "PFS"
  },
  {
    name: "Elite Logistics Network",
    industry: "Transportation",
    logo: "ELN"
  },
  {
    name: "Premier Technology Group",
    industry: "Technology",
    logo: "PTG"
  },
  {
    name: "Crown Restaurant Holdings",
    industry: "Hospitality",
    logo: "CRH"
  },
  {
    name: "Diamond Construction Co",
    industry: "Construction",
    logo: "DCC"
  },
  {
    name: "Sovereign Energy Partners",
    industry: "Energy",
    logo: "SEP"
  },
  {
    name: "Prestige Insurance Group",
    industry: "Insurance",
    logo: "PIG"
  }
]

interface ClientLogoProps {
  client: typeof clients[0]
  className?: string
}

function ClientLogo({ client, className }: ClientLogoProps) {
  return (
    <div className={cn("group flex items-center justify-center", className)}>
      <div className="text-center">
        {/* Logo placeholder with company initials */}
        <div className="mx-auto mb-2 h-16 w-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
          <span className="text-white font-bold text-lg">{client.logo}</span>
        </div>
        
        {/* Company name */}
        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {client.name}
        </h3>
        
        {/* Industry tag */}
        <p className="text-xs text-gray-500 mt-1">{client.industry}</p>
      </div>
    </div>
  )
}

export default function ClientLogos() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Join over 500+ companies that have transformed their operations with our AI solutions
          </p>
        </div>

        {/* Stats bar */}
        <div className="mx-auto mt-8 max-w-4xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Active Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">$47M+</div>
              <div className="text-sm text-gray-600">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">98.7%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* Client logos grid */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {clients.map((client, index) => (
              <ClientLogo
                key={index}
                client={client}
                className="hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Industry diversity callout */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-8">
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">
              Serving Diverse Industries
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {Array.from(new Set(clients.map(c => c.industry))).map((industry, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm"
                >
                  {industry}
                </span>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-4">
              From Fortune 500 enterprises to growing SMBs, our AI solutions scale to meet your needs
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}