'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PlayCircle, PauseCircle } from "lucide-react"

export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    // In a real implementation, you would control the video playback here
  }

  return (
    <section className="bg-black-900 py-20">
      <div className="container max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-tiffany-500 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            CLIENT SUCCESS STORY
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white-50 mb-6">
            From $47K Monthly Overhead to <span className="text-tiffany-500">$127K Revenue</span>
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
            "Innovation Synergy AI transformed our customer service operations. We eliminated 3 full-time positions 
            while increasing customer satisfaction by 94%. ROI was immediate."
          </p>
        </div>

        <div className="relative bg-neutral-900 rounded-lg overflow-hidden shadow-2xl">
          {/* Video Placeholder */}
          <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center relative">
            {/* Placeholder for actual video */}
            <div className="absolute inset-0 bg-black-900 opacity-50"></div>
            
            {/* Professional headshot placeholder */}
            <div className="text-center z-10">
              <div className="w-24 h-24 bg-tiffany-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-black-900 font-bold text-2xl">JS</span>
              </div>
              <h3 className="text-white-50 text-xl font-semibold mb-2">Jennifer Stevens</h3>
              <p className="text-neutral-300 text-sm">CEO, Stevens Manufacturing</p>
              <p className="text-tiffany-500 text-sm font-medium mt-1">$2.3M Annual Revenue</p>
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="absolute bottom-6 right-6 bg-tiffany-500 hover:bg-tiffany-400 text-black-900 rounded-full p-3 transition-all duration-300 shadow-lg"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <PauseCircle className="w-8 h-8" />
              ) : (
                <PlayCircle className="w-8 h-8" />
              )}
            </button>

            {/* Video overlay text when not playing */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black-900 bg-opacity-60">
                <div className="text-center">
                  <PlayCircle className="w-20 h-20 text-tiffany-500 mx-auto mb-4 cursor-pointer hover:text-tiffany-400 transition-colors" onClick={togglePlay} />
                  <p className="text-white-50 text-lg font-medium">Watch Success Story</p>
                  <p className="text-neutral-300 text-sm">3 minutes • Real client results</p>
                </div>
              </div>
            )}
          </div>

          {/* Video Caption/Results */}
          <div className="p-8 bg-neutral-900">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-tiffany-500 mb-2">67%</div>
                <div className="text-white-50 text-sm">Cost Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-tiffany-500 mb-2">94%</div>
                <div className="text-white-50 text-sm">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-tiffany-500 mb-2">21 Days</div>
                <div className="text-white-50 text-sm">To Full ROI</div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button
                className="bg-tiffany-500 text-black-900 font-semibold px-8 py-3 rounded-none hover:bg-tiffany-400 transition-all duration-300 tracking-wide uppercase text-sm"
              >
                <a href="https://calendly.com/innovationsynergyai/30-minute-discovery-call" target="_blank" rel="noopener noreferrer">
                  GET YOUR RESULTS ASSESSMENT
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-neutral-400 text-sm mb-4">
            "Similar results achieved for 200+ American businesses"
          </p>
          <div className="flex justify-center items-center space-x-8 text-neutral-500">
            <div className="text-xs">⭐⭐⭐⭐⭐ 4.9/5 Client Rating</div>
            <div className="text-xs">🏆 98% Client Retention</div>
            <div className="text-xs">⚡ 30-Day Results Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  )
}