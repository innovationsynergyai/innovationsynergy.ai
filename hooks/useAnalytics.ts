'use client'

import { useEffect, useCallback, useRef } from 'react'
import { 
  trackEvent, 
  trackConversion, 
  trackButtonClick, 
  trackCTAClick, 
  trackFormSubmission,
  trackScrollDepth,
  trackTimeOnPage,
  trackVideoEvent,
  trackDownload,
  trackExternalLink,
  trackPricingSelection,
  trackSearch,
  trackError,
  getUTMParameters,
  type AnalyticsEvent,
  type ConversionEvent
} from '@/lib/analytics'

interface UseAnalyticsReturn {
  trackEvent: (event: AnalyticsEvent) => void
  trackConversion: (event: ConversionEvent) => void
  trackButtonClick: (buttonName: string, section?: string, additionalData?: Record<string, any>) => void
  trackCTAClick: (ctaName: string, ctaValue?: number, section?: string) => void
  trackFormSubmission: (formName: string, formData?: Record<string, any>) => void
  trackDownload: (fileName: string, fileType?: string) => void
  trackExternalLink: (url: string, linkText?: string) => void
  trackPricingSelection: (tier: string, price: number) => void
  trackSearch: (searchTerm: string, resultsCount?: number) => void
  trackError: (error: Error, context?: string) => void
  trackVideoPlay: (videoName: string) => void
  trackVideoPause: (videoName: string, progress?: number) => void
  trackVideoComplete: (videoName: string) => void
}

/**
 * Custom hook for analytics tracking with automatic scroll depth and time tracking
 */
export const useAnalytics = (): UseAnalyticsReturn => {
  const scrollDepthTracked = useRef<Set<number>>(new Set())
  const pageStartTime = useRef<number>(Date.now())
  const lastScrollTime = useRef<number>(Date.now())

  // Track scroll depth automatically
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / documentHeight) * 100)
      
      // Track at 25%, 50%, 75%, and 100% milestones
      const milestones = [25, 50, 75, 100]
      
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !scrollDepthTracked.current.has(milestone)) {
          scrollDepthTracked.current.add(milestone)
          trackScrollDepth(milestone)
        }
      })

      lastScrollTime.current = Date.now()
    }

    const throttledHandleScroll = throttle(handleScroll, 250)
    window.addEventListener('scroll', throttledHandleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [])

  // Track time on page when user leaves
  useEffect(() => {
    const handleBeforeUnload = () => {
      const timeOnPage = Math.round((Date.now() - pageStartTime.current) / 1000)
      if (timeOnPage > 5) { // Only track if user spent more than 5 seconds
        trackTimeOnPage(timeOnPage)
      }
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        const timeOnPage = Math.round((Date.now() - pageStartTime.current) / 1000)
        if (timeOnPage > 5) {
          trackTimeOnPage(timeOnPage)
        }
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  // Track UTM parameters on mount
  useEffect(() => {
    const utmParams = getUTMParameters()
    const hasUTMParams = Object.values(utmParams).some(value => value !== null)
    
    if (hasUTMParams) {
      trackEvent({
        action: 'utm_tracking',
        category: 'Campaign',
        custom_parameters: utmParams,
      })
    }
  }, [])

  // Enhanced tracking functions with additional context
  const enhancedTrackEvent = useCallback((event: AnalyticsEvent) => {
    const enhancedEvent = {
      ...event,
      custom_parameters: {
        ...event.custom_parameters,
        timestamp: Date.now(),
        page_url: typeof window !== 'undefined' ? window.location.href : '',
        user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        screen_resolution: typeof screen !== 'undefined' ? `${screen.width}x${screen.height}` : '',
        viewport_size: typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : '',
        ...getUTMParameters(),
      },
    }
    trackEvent(enhancedEvent)
  }, [])

  const enhancedTrackConversion = useCallback((event: ConversionEvent) => {
    const enhancedEvent = {
      ...event,
      custom_parameters: {
        ...event.custom_parameters,
        timestamp: Date.now(),
        page_url: typeof window !== 'undefined' ? window.location.href : '',
        ...getUTMParameters(),
      },
    }
    trackConversion(enhancedEvent)
  }, [])

  const enhancedTrackButtonClick = useCallback((buttonName: string, section?: string, additionalData?: Record<string, any>) => {
    trackButtonClick(buttonName, section, {
      ...additionalData,
      timestamp: Date.now(),
      ...getUTMParameters(),
    })
  }, [])

  const enhancedTrackCTAClick = useCallback((ctaName: string, ctaValue?: number, section?: string) => {
    trackCTAClick(ctaName, ctaValue, section)
    
    // Additional CTA-specific tracking
    enhancedTrackEvent({
      action: 'high_intent_action',
      category: 'CTA',
      label: ctaName,
      value: ctaValue,
      custom_parameters: {
        cta_type: 'primary',
        intent_level: 'high',
        section,
      },
    })
  }, [enhancedTrackEvent])

  const enhancedTrackFormSubmission = useCallback((formName: string, formData?: Record<string, any>) => {
    trackFormSubmission(formName, {
      ...formData,
      timestamp: Date.now(),
      ...getUTMParameters(),
    })
  }, [])

  const enhancedTrackDownload = useCallback((fileName: string, fileType?: string) => {
    trackDownload(fileName, fileType)
  }, [])

  const enhancedTrackExternalLink = useCallback((url: string, linkText?: string) => {
    trackExternalLink(url, linkText)
  }, [])

  const enhancedTrackPricingSelection = useCallback((tier: string, price: number) => {
    trackPricingSelection(tier, price)
    
    // Additional high-value event tracking
    enhancedTrackEvent({
      action: 'high_value_interaction',
      category: 'Pricing',
      label: tier,
      value: price,
      custom_parameters: {
        interaction_type: 'pricing_selection',
        tier,
        price,
        value_tier: price > 10000 ? 'enterprise' : price > 5000 ? 'professional' : 'foundation',
      },
    })
  }, [enhancedTrackEvent])

  const enhancedTrackSearch = useCallback((searchTerm: string, resultsCount?: number) => {
    trackSearch(searchTerm, resultsCount)
  }, [])

  const enhancedTrackError = useCallback((error: Error, context?: string) => {
    trackError(error, context)
  }, [])

  const trackVideoPlay = useCallback((videoName: string) => {
    trackVideoEvent('play', videoName)
  }, [])

  const trackVideoPause = useCallback((videoName: string, progress?: number) => {
    trackVideoEvent('pause', videoName, progress)
  }, [])

  const trackVideoComplete = useCallback((videoName: string) => {
    trackVideoEvent('complete', videoName, 100)
    
    // Track video completion as engagement event
    enhancedTrackEvent({
      action: 'video_engagement',
      category: 'Video',
      label: videoName,
      value: 100,
      custom_parameters: {
        engagement_type: 'video_complete',
        video_name: videoName,
      },
    })
  }, [enhancedTrackEvent])

  return {
    trackEvent: enhancedTrackEvent,
    trackConversion: enhancedTrackConversion,
    trackButtonClick: enhancedTrackButtonClick,
    trackCTAClick: enhancedTrackCTAClick,
    trackFormSubmission: enhancedTrackFormSubmission,
    trackDownload: enhancedTrackDownload,
    trackExternalLink: enhancedTrackExternalLink,
    trackPricingSelection: enhancedTrackPricingSelection,
    trackSearch: enhancedTrackSearch,
    trackError: enhancedTrackError,
    trackVideoPlay,
    trackVideoPause,
    trackVideoComplete,
  }
}

/**
 * Hook specifically for tracking button clicks with enhanced data
 */
export const useButtonTracking = () => {
  const { trackButtonClick, trackCTAClick } = useAnalytics()

  const trackButton = useCallback((
    element: HTMLElement | null,
    buttonName?: string,
    options?: {
      section?: string
      isCTA?: boolean
      ctaValue?: number
      additionalData?: Record<string, any>
    }
  ) => {
    if (!element) return

    const name = buttonName || 
      element.textContent?.trim() || 
      element.getAttribute('aria-label') || 
      element.getAttribute('title') || 
      'unknown_button'

    const section = options?.section || 
      element.closest('[data-section]')?.getAttribute('data-section') ||
      element.closest('section')?.id ||
      'unknown_section'

    if (options?.isCTA) {
      trackCTAClick(name, options.ctaValue, section)
    } else {
      trackButtonClick(name, section, options?.additionalData)
    }
  }, [trackButtonClick, trackCTAClick])

  return { trackButton }
}

/**
 * Hook for tracking form interactions
 */
export const useFormTracking = () => {
  const { trackFormSubmission, trackEvent } = useAnalytics()

  const trackFormStart = useCallback((formName: string) => {
    trackEvent({
      action: 'form_start',
      category: 'Form',
      label: formName,
      custom_parameters: {
        form_name: formName,
        interaction_type: 'form_start',
      },
    })
  }, [trackEvent])

  const trackFieldFocus = useCallback((formName: string, fieldName: string) => {
    trackEvent({
      action: 'form_field_focus',
      category: 'Form',
      label: `${formName} - ${fieldName}`,
      custom_parameters: {
        form_name: formName,
        field_name: fieldName,
        interaction_type: 'field_focus',
      },
    })
  }, [trackEvent])

  const trackFormSubmit = useCallback((formName: string, formData?: Record<string, any>) => {
    trackFormSubmission(formName, formData)
  }, [trackFormSubmission])

  const trackFormError = useCallback((formName: string, errors: string[]) => {
    trackEvent({
      action: 'form_error',
      category: 'Form',
      label: formName,
      custom_parameters: {
        form_name: formName,
        errors: errors.join(', '),
        error_count: errors.length,
        interaction_type: 'form_error',
      },
    })
  }, [trackEvent])

  return {
    trackFormStart,
    trackFieldFocus,
    trackFormSubmit,
    trackFormError,
  }
}

// Utility function to throttle function calls
function throttle<T extends (...args: any[]) => any>(func: T, delay: number): T {
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  let lastExecTime = 0
  
  return ((...args: Parameters<T>) => {
    const currentTime = Date.now()
    
    if (currentTime - lastExecTime > delay) {
      func.apply(null, args)
      lastExecTime = currentTime
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args)
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }) as T
}