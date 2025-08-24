'use client'

import { useState } from "react"
import { Calendar, Clock, Users, Zap, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SchedulingCalendar() {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null)

  const timeSlots = [
    { time: "9:00 AM", available: true, value: "09:00" },
    { time: "10:30 AM", available: true, value: "10:30" },
    { time: "12:00 PM", available: false, value: "12:00" },
    { time: "2:00 PM", available: true, value: "14:00" },
    { time: "3:30 PM", available: true, value: "15:30" },
    { time: "5:00 PM", available: false, value: "17:00" },
  ]

  const benefits = [
    "Free 30-minute strategy session ($497 value)",
    "Custom ROI assessment for your business",
    "Implementation timeline & roadmap",
    "No-obligation consultation"
  ]

  return (
    <section className="bg-black-900 py-20">
      <div className="container max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits & Social Proof */}
          <div>
            <p className="text-tiffany-500 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              STRATEGY SESSION
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white-50 mb-6">
              Discover Your <span className="text-tiffany-500">$84K+ Savings</span> Potential
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Book a complimentary consultation with our AI automation specialists. 
              We'll analyze your current operations and show you exactly how to eliminate overhead costs.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-tiffany-500 flex-shrink-0" />
                  <span className="text-neutral-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Session Details */}
            <div className="bg-neutral-900 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-tiffany-500" />
                  <div>
                    <p className="text-white-50 font-medium">30 Minutes</p>
                    <p className="text-neutral-400 text-sm">Strategy Session</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-tiffany-500" />
                  <div>
                    <p className="text-white-50 font-medium">1-on-1 Expert</p>
                    <p className="text-neutral-400 text-sm">Senior AI Consultant</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-tiffany-500" />
                  <div>
                    <p className="text-white-50 font-medium">Instant Value</p>
                    <p className="text-neutral-400 text-sm">Actionable insights</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-tiffany-500" />
                  <div>
                    <p className="text-white-50 font-medium">Video Call</p>
                    <p className="text-neutral-400 text-sm">Zoom or Teams</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Bookings Social Proof */}
            <div className="text-sm text-neutral-400">
              <p className="mb-2">Recent sessions booked:</p>
              <div className="space-y-1">
                <p>• Manufacturing CEO - Boston (2 hours ago)</p>
                <p>• Restaurant Owner - Miami (4 hours ago)</p>
                <p>• Tech Startup - NYC (6 hours ago)</p>
              </div>
            </div>
          </div>

          {/* Right Side - Calendar Interface */}
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-tiffany-500 text-black-900 p-6">
              <h3 className="text-2xl font-bold mb-2">Book Your Strategy Session</h3>
              <p className="text-black-700">Select your preferred time slot</p>
            </div>

            {/* Calendar Body */}
            <div className="p-6">
              {/* Date Selector */}
              <div className="mb-6">
                <p className="text-sm font-medium text-neutral-700 mb-3">Available Today</p>
                <div className="bg-tiffany-50 rounded-lg p-4 text-center border border-tiffany-200">
                  <p className="text-lg font-semibold text-black-900">
                    {new Date().toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric' 
                    })}
                  </p>
                  <p className="text-sm text-neutral-600 mt-1">Today's availability</p>
                </div>
              </div>

              {/* Time Slots */}
              <div className="mb-6">
                <p className="text-sm font-medium text-neutral-700 mb-3">Choose Time (EST)</p>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => slot.available && setSelectedTimeSlot(slot.value)}
                      disabled={!slot.available}
                      className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        slot.available
                          ? selectedTimeSlot === slot.value
                            ? "bg-tiffany-500 text-black-900"
                            : "bg-neutral-100 text-neutral-800 hover:bg-tiffany-100"
                          : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                      }`}
                    >
                      {slot.time}
                      {!slot.available && (
                        <div className="text-xs mt-1">Booked</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Book Now Button */}
              <Button 
                className={`w-full bg-black-900 hover:bg-neutral-800 text-white font-semibold py-3 rounded-lg transition-all duration-300 ${
                  !selectedTimeSlot ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!selectedTimeSlot}
                onClick={() => {
                  if (selectedTimeSlot) {
                    window.open("https://calendly.com/innovationsynergyai/30-minute-discovery-call", "_blank")
                  }
                }}
              >
                {selectedTimeSlot ? "CONFIRM BOOKING" : "SELECT TIME SLOT"}
              </Button>

              {/* Alternative Booking */}
              <div className="mt-4 text-center">
                <p className="text-sm text-neutral-600 mb-2">Prefer a different time?</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-tiffany-600 border-tiffany-200 hover:bg-tiffany-50"
                  onClick={() => window.open("https://calendly.com/innovationsynergyai/30-minute-discovery-call", "_blank")}
                >
                  View All Available Times
                </Button>
              </div>

              {/* Urgency Indicator */}
              <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <p className="text-red-800 text-sm font-medium">
                    Limited Availability
                  </p>
                </div>
                <p className="text-red-700 text-sm mt-1">
                  Only 3 strategy sessions remaining this week
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-neutral-400 text-sm mb-4">
            Join 200+ businesses that have transformed their operations
          </p>
          <div className="flex justify-center items-center space-x-8 text-neutral-500 text-sm">
            <span>⭐⭐⭐⭐⭐ 4.9/5 Rating</span>
            <span>🏆 98% Success Rate</span>
            <span>⚡ 24hr Response</span>
          </div>
        </div>
      </div>
    </section>
  )
}