'use client'

import { useState, useEffect } from "react"
import { MessageCircle, X, Send, Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [isOnline, setIsOnline] = useState(true)

  // Simulate online status
  useEffect(() => {
    const now = new Date()
    const hour = now.getHours()
    // Business hours: 9 AM - 6 PM EST
    setIsOnline(hour >= 9 && hour < 18)
  }, [])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // In a real implementation, you would send the message to your chat system
      console.log("Message sent:", message)
      setMessage("")
    }
  }

  const quickActions = [
    { label: "Get Pricing", action: () => window.open("https://calendly.com/innovationsynergyai/30-minute-discovery-call", "_blank") },
    { label: "Book Call", action: () => window.open("https://calendly.com/innovationsynergyai/30-minute-discovery-call", "_blank") },
    { label: "View ROI Calculator", action: () => console.log("ROI Calculator") },
  ]

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={toggleChat}
            className="bg-tiffany-500 hover:bg-tiffany-400 text-black-900 rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-105 relative"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
            {isOnline && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            )}
            {/* Notification pulse */}
            <div className="absolute inset-0 rounded-full bg-tiffany-500 animate-ping opacity-20"></div>
          </button>
        )}

        {/* Chat Window */}
        {isOpen && (
          <div className="bg-white rounded-lg shadow-2xl w-80 h-96 flex flex-col overflow-hidden border border-neutral-200">
            {/* Header */}
            <div className="bg-black-900 text-white p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-tiffany-500 rounded-full flex items-center justify-center">
                  <span className="text-black-900 font-bold text-sm">AI</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">AI Consultant</p>
                  <p className="text-xs text-green-400 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                    {isOnline ? "Online now" : "We'll respond soon"}
                  </p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-neutral-50">
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-tiffany-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black-900 font-bold text-xs">AI</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm flex-1">
                    <p className="text-sm text-neutral-800">
                      Hi! I'm here to help you discover how AI can transform your business. 
                      What's your biggest operational challenge right now?
                    </p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-2">
                  <p className="text-xs text-neutral-500 text-center">Quick actions:</p>
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.action}
                      className="w-full text-left bg-tiffany-50 hover:bg-tiffany-100 text-black-900 p-2 rounded text-sm transition-colors border border-tiffany-200"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Options */}
            <div className="bg-neutral-100 p-3 border-t">
              <div className="flex space-x-2 mb-3">
                <Button
                  size="sm"
                  className="flex-1 bg-tiffany-500 hover:bg-tiffany-400 text-black-900 text-xs"
                  onClick={() => window.open("tel:+1234567890")}
                >
                  <Phone className="w-3 h-3 mr-1" />
                  Call Now
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-black-900 hover:bg-neutral-800 text-white text-xs"
                  onClick={() => window.open("https://calendly.com/innovationsynergyai/30-minute-discovery-call", "_blank")}
                >
                  <Calendar className="w-3 h-3 mr-1" />
                  Book Call
                </Button>
              </div>
              
              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-neutral-300 rounded text-sm focus:outline-none focus:border-tiffany-500"
                />
                <button
                  type="submit"
                  className="bg-tiffany-500 hover:bg-tiffany-400 text-black-900 p-2 rounded transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Footer */}
            <div className="bg-neutral-200 px-3 py-2">
              <p className="text-xs text-neutral-600 text-center">
                {isOnline ? "Typically responds in minutes" : "We'll respond within 2 hours"}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Floating Notification for New Visitors */}
      {!isOpen && (
        <div className="fixed bottom-20 right-6 z-40">
          <div className="bg-white p-4 rounded-lg shadow-lg border border-neutral-200 max-w-xs animate-slide-up">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-tiffany-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black-900 font-bold text-xs">AI</span>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-800">Ready for $84K+ in savings?</p>
                <p className="text-xs text-neutral-600 mt-1">
                  Chat with our AI consultant about your automation needs
                </p>
                <button
                  onClick={toggleChat}
                  className="text-tiffany-600 hover:text-tiffany-700 text-xs font-medium mt-2 underline"
                >
                  Start conversation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}