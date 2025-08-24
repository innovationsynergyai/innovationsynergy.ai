"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Metric {
  label: string
  before: string
  after: string
  improvement: string
  color: "green" | "blue" | "purple" | "orange"
}

interface CaseStudyProps {
  title: string
  company: string
  industry: string
  description: string
  challenge: string
  solution: string
  metrics: Metric[]
  timeline: string
  investment: string
  roi: string
  className?: string
}

const colorClasses = {
  green: "text-green-700 bg-green-50 border-green-200",
  blue: "text-blue-700 bg-blue-50 border-blue-200", 
  purple: "text-purple-700 bg-purple-50 border-purple-200",
  orange: "text-orange-700 bg-orange-50 border-orange-200"
}

export default function CaseStudyCard({ 
  title, 
  company, 
  industry, 
  description, 
  challenge, 
  solution, 
  metrics, 
  timeline, 
  investment,
  roi,
  className 
}: CaseStudyProps) {
  return (
    <Card className={cn("hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-bold text-gray-900 mb-2">{title}</CardTitle>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                {company}
              </Badge>
              <Badge variant="outline" className="text-gray-600">
                {industry}
              </Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600">{roi}</div>
            <div className="text-sm text-gray-500">ROI</div>
          </div>
        </div>
        <p className="text-gray-600 mt-3">{description}</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center">
              <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Challenge
            </h4>
            <p className="text-red-700 text-sm">{challenge}</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
              <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Solution
            </h4>
            <p className="text-green-700 text-sm">{solution}</p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Key Results</h4>
          <div className="grid sm:grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className={cn("p-4 rounded-lg border", colorClasses[metric.color])}>
                <h5 className="font-medium mb-3">{metric.label}</h5>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-75">Before:</span>
                    <span className="text-sm font-medium">{metric.before}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-75">After:</span>
                    <span className="text-sm font-medium">{metric.after}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Improvement:</span>
                      <span className="text-sm font-bold">{metric.improvement}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium text-gray-900 mb-1">Timeline</h5>
              <p className="text-sm text-gray-600 flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {timeline}
              </p>
            </div>
            <div>
              <h5 className="font-medium text-gray-900 mb-1">Investment</h5>
              <p className="text-sm text-gray-600 flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                {investment}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}