# Analytics Implementation Guide

This guide demonstrates how to use the comprehensive analytics tracking system implemented for Innovation Synergy AI.

## Quick Start

1. **Set up environment variables** by copying `.env.local.example` to `.env.local` and filling in your tracking IDs
2. **The Analytics component** is already included in `app/layout.tsx`
3. **Use the hooks** in your components to track user interactions

## Implementation Examples

### Basic Button Tracking

```tsx
'use client'
import { useAnalytics } from '@/hooks/useAnalytics'

export function MyComponent() {
  const { trackButtonClick } = useAnalytics()
  
  return (
    <button
      onClick={() => trackButtonClick('Header CTA', 'header', { action_type: 'primary' })}
      className="btn-primary"
    >
      Get Started
    </button>
  )
}
```

### CTA Button Tracking (High-Value Actions)

```tsx
'use client'
import { useAnalytics } from '@/hooks/useAnalytics'

export function CTASection() {
  const { trackCTAClick } = useAnalytics()
  
  return (
    <button
      onClick={() => trackCTAClick('Book Free Strategy Call', 500, 'hero_section')}
      className="btn-cta"
    >
      Book Free Strategy Call
    </button>
  )
}
```

### Form Tracking

```tsx
'use client'
import { useFormTracking } from '@/hooks/useAnalytics'

export function ContactForm() {
  const { trackFormStart, trackFormSubmit, trackFormError, trackFieldFocus } = useFormTracking()
  
  const handleSubmit = (formData: FormData) => {
    try {
      // Submit form
      trackFormSubmit('Contact Form', {
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company')
      })
    } catch (error) {
      trackFormError('Contact Form', ['Submission failed'])
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        onFocus={() => trackFieldFocus('Contact Form', 'name')}
        onChange={(e) => e.target.value && trackFormStart('Contact Form')}
      />
      {/* ... other fields */}
    </form>
  )
}
```

### Pricing Tier Selection

```tsx
'use client'
import { useAnalytics } from '@/hooks/useAnalytics'

export function PricingCard({ tier, price }: { tier: string, price: number }) {
  const { trackPricingSelection } = useAnalytics()
  
  return (
    <button
      onClick={() => trackPricingSelection(tier, price)}
      className="pricing-card"
    >
      Select {tier} Plan - ${price}/month
    </button>
  )
}
```

### Video Tracking

```tsx
'use client'
import { useAnalytics } from '@/hooks/useAnalytics'

export function VideoPlayer({ videoName }: { videoName: string }) {
  const { trackVideoPlay, trackVideoPause, trackVideoComplete } = useAnalytics()
  
  return (
    <video
      onPlay={() => trackVideoPlay(videoName)}
      onPause={() => trackVideoPause(videoName, /* progress */ 45)}
      onEnded={() => trackVideoComplete(videoName)}
      controls
    >
      <source src="/video.mp4" type="video/mp4" />
    </video>
  )
}
```

### External Link Tracking

```tsx
'use client'
import { useAnalytics } from '@/hooks/useAnalytics'

export function ExternalLinks() {
  const { trackExternalLink } = useAnalytics()
  
  return (
    <a
      href="https://calendly.com/innovationsynergyai"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackExternalLink('https://calendly.com/innovationsynergyai', 'Book Consultation')}
    >
      Book Consultation
    </a>
  )
}
```

### Download Tracking

```tsx
'use client'
import { useAnalytics } from '@/hooks/useAnalytics'

export function DownloadButton() {
  const { trackDownload } = useAnalytics()
  
  return (
    <a
      href="/whitepaper.pdf"
      download
      onClick={() => trackDownload('AI Strategy Whitepaper', 'pdf')}
    >
      Download Whitepaper
    </a>
  )
}
```

### Search Tracking

```tsx
'use client'
import { useState } from 'react'
import { useAnalytics } from '@/hooks/useAnalytics'

export function SearchBox() {
  const [query, setQuery] = useState('')
  const { trackSearch } = useAnalytics()
  
  const handleSearch = (searchTerm: string) => {
    // Perform search
    const results = performSearch(searchTerm)
    trackSearch(searchTerm, results.length)
  }
  
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyPress={(e) => e.key === 'Enter' && handleSearch(query)}
      placeholder="Search..."
    />
  )
}
```

### Custom Event Tracking

```tsx
'use client'
import { useAnalytics } from '@/hooks/useAnalytics'

export function CustomEventExample() {
  const { trackEvent } = useAnalytics()
  
  const handleSpecialAction = () => {
    trackEvent({
      action: 'feature_demo_started',
      category: 'Product Engagement',
      label: 'AI Voice Agent Demo',
      value: 1,
      custom_parameters: {
        demo_type: 'interactive',
        user_segment: 'enterprise',
        page_section: 'product_showcase'
      }
    })
  }
  
  return (
    <button onClick={handleSpecialAction}>
      Start AI Demo
    </button>
  )
}
```

### Error Tracking

```tsx
'use client'
import { useEffect } from 'react'
import { useAnalytics } from '@/hooks/useAnalytics'

export function ErrorBoundaryExample() {
  const { trackError } = useAnalytics()
  
  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      trackError(new Error(error.message), 'Global Error Handler')
    }
    
    window.addEventListener('error', handleError)
    return () => window.removeEventListener('error', handleError)
  }, [trackError])
  
  return <div>Your component content</div>
}
```

## Automatic Tracking Features

The analytics system automatically tracks:

1. **Page Views**: Tracked on every route change
2. **Scroll Depth**: Tracked at 25%, 50%, 75%, and 100% scroll milestones
3. **Time on Page**: Tracked when user leaves or switches tabs
4. **UTM Parameters**: Automatically captured and included in all events
5. **User Context**: Screen resolution, viewport size, user agent, etc.

## Event Data Structure

All events include standard parameters:
- `timestamp`: When the event occurred
- `page_url`: Current page URL
- `page_path`: Current page path
- `user_agent`: User's browser information
- `screen_resolution`: User's screen size
- `viewport_size`: User's browser viewport size
- `utm_source`, `utm_medium`, `utm_campaign`, etc.: Marketing attribution

## Platform-Specific Tracking

### Google Analytics 4
- Standard GA4 events with custom parameters
- Enhanced ecommerce tracking for pricing interactions
- Custom dimensions for Innovation Synergy AI branding

### Facebook Pixel
- Standard pixel events (PageView, Purchase, Lead, etc.)
- Custom events with detailed parameters
- Conversion API support (server-side tracking)

### LinkedIn Insight Tag
- Conversion tracking for B2B leads
- Custom event tracking with conversion values

### Hotjar
- Automatic session recording and heatmaps
- No additional code needed beyond initialization

### Google Tag Manager
- All events pushed to dataLayer for GTM processing
- Flexible event handling through GTM interface

## Environment Variables Required

```env
# Core Analytics
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=1234567890123456
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=1234567
NEXT_PUBLIC_HOTJAR_ID=1234567

# Optional Server-Side
FACEBOOK_CONVERSIONS_API_TOKEN=your_token_here
GA4_MEASUREMENT_PROTOCOL_SECRET=your_secret_here
```

## Best Practices

1. **Use CTA tracking** for high-value actions (pricing, consultations, demos)
2. **Use button tracking** for regular interactions (navigation, features)
3. **Track form interactions** at multiple stages (start, field focus, submit, error)
4. **Include contextual data** in custom parameters
5. **Test tracking** in development before deploying
6. **Review data regularly** to ensure accuracy and completeness
7. **Respect user privacy** and comply with GDPR/CCPA requirements

## Conversion Goals to Set Up

1. **Primary Conversions**:
   - Strategy call bookings (high value)
   - Email inquiries (medium value)
   - Pricing tier selections (high value)

2. **Secondary Conversions**:
   - Video completions (engagement)
   - Download completions (lead nurturing)
   - Deep scroll engagement (content quality)
   - Time on site > 2 minutes (interest level)

3. **Micro Conversions**:
   - Button clicks (user intent)
   - Form starts (lead potential)
   - External link clicks (referral tracking)

## Dashboard Setup

Create dashboards in each platform to track:
- Conversion funnels
- User journey paths
- High-value page performance
- CTA effectiveness
- Form completion rates
- Video engagement metrics
- Lead quality scoring

This comprehensive tracking system will provide detailed insights into user behavior and conversion optimization opportunities for Innovation Synergy AI.