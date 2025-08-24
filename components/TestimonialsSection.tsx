"use client"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote: "Innovation Synergy AI reduced our response time from 6 hours to 15 minutes. Our customer satisfaction increased by 47% and we're saving $18,000 monthly on customer service costs.",
    author: "Sarah Martinez",
    title: "Operations Director",
    company: "Pacific Healthcare Solutions",
    industry: "Healthcare",
    metrics: "6hrs → 15min response time",
    roi: "47% satisfaction increase"
  },
  {
    quote: "The AI voice agents handle 80% of our client inquiries automatically. We've reclaimed 32 hours per week and increased our case resolution rate to 94%. ROI was 420% in the first quarter.",
    author: "Michael Chen",
    title: "Managing Partner",
    company: "Metropolitan Law Associates",
    industry: "Legal Services",
    metrics: "80% automation rate",
    roi: "420% ROI in Q1"
  },
  {
    quote: "Our manufacturing process optimization with their AI reduced production downtime by 65% and increased output efficiency by 28%. The system pays for itself every 3.2 months.",
    author: "Jennifer Rodriguez",
    title: "Plant Manager",
    company: "Apex Manufacturing Corp",
    industry: "Manufacturing",
    metrics: "65% less downtime",
    roi: "3.2 month payback"
  },
  {
    quote: "Property management became effortless. Tenant requests are resolved 4x faster, maintenance costs dropped by $31,000 annually, and our team productivity increased by 55%.",
    author: "David Thompson",
    title: "Portfolio Manager",
    company: "Summit Real Estate Group",
    industry: "Real Estate",
    metrics: "4x faster resolution",
    roi: "$31K annual savings"
  },
  {
    quote: "The e-commerce automation increased our conversion rate by 34% while reducing cart abandonment by 42%. We're processing 156% more orders with the same team size.",
    author: "Lisa Park",
    title: "E-commerce Director",
    company: "Coastal Retail Solutions",
    industry: "E-commerce",
    metrics: "34% conversion increase",
    roi: "156% more orders"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            See how Fortune 500 companies and growing businesses are transforming their operations with our AI solutions
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={cn(
                "bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
                index === 2 && "lg:col-span-1 lg:row-span-2" // Make one testimonial larger for visual interest
              )}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-gray-900 font-medium leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-50 px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-blue-700">
                      {testimonial.metrics}
                    </span>
                  </div>
                  <div className="bg-green-50 px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-green-700">
                      {testimonial.roi}
                    </span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                      <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">{testimonial.industry}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full mb-6">
            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-green-700">Average ROI: 385% within 6 months</span>
          </div>
          <a
            href="/case-studies"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            View detailed case studies with full metrics
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}