// Analytics utility functions for tracking events across different platforms

export interface AnalyticsEvent {
  action: string
  category?: string
  label?: string
  value?: number
  custom_parameters?: Record<string, any>
}

export interface ConversionEvent {
  event_name: string
  value?: number
  currency?: string
  custom_parameters?: Record<string, any>
}

export interface EcommerceEvent {
  transaction_id?: string
  value: number
  currency?: string
  items?: Array<{
    item_id: string
    item_name: string
    category?: string
    quantity?: number
    price?: number
  }>
}

/**
 * Track a generic event across all analytics platforms
 */
export const trackEvent = (event: AnalyticsEvent): void => {
  if (typeof window === 'undefined') return

  const { action, category = 'General', label, value, custom_parameters } = event

  // Google Analytics 4
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...custom_parameters,
      custom_parameter_1: 'innovation_synergy_ai_miami',
      region: 'miami',
      market_type: 'international_hospitality',
    })
  }

  // Google Tag Manager
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'custom_event',
      event_action: action,
      event_category: category,
      event_label: label,
      event_value: value,
      ...custom_parameters,
    })
  }

  // Facebook Pixel
  if (window.fbq) {
    window.fbq('trackCustom', action, {
      category,
      label,
      value,
      ...custom_parameters,
    })
  }

  // LinkedIn Insight Tag
  if (window.lintrk) {
    window.lintrk('track', { 
      conversion_id: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID,
      conversion_value: value,
      event_name: action,
      category,
      label,
      ...custom_parameters,
    })
  }
}

/**
 * Track conversion events (purchases, leads, sign-ups)
 */
export const trackConversion = (event: ConversionEvent): void => {
  if (typeof window === 'undefined') return

  const { event_name, value = 0, currency = 'USD', custom_parameters } = event

  // Google Analytics 4 conversion
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: process.env.NEXT_PUBLIC_GA_ID,
      value: value,
      currency: currency,
      transaction_id: `conv_${Date.now()}`,
      ...custom_parameters,
    })
  }

  // Facebook Pixel conversion
  if (window.fbq) {
    window.fbq('track', 'Purchase', {
      value: value,
      currency: currency,
      content_name: event_name,
      ...custom_parameters,
    })
  }

  // LinkedIn conversion
  if (window.lintrk) {
    window.lintrk('track', { 
      conversion_id: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID,
      conversion_value: value,
    })
  }
}

/**
 * Track button clicks specifically
 */
export const trackButtonClick = (buttonName: string, section?: string, additionalData?: Record<string, any>): void => {
  trackEvent({
    action: 'button_click',
    category: 'User Interaction',
    label: buttonName,
    custom_parameters: {
      button_name: buttonName,
      section: section || 'unknown',
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
      ...additionalData,
    },
  })
}

/**
 * Track CTA (Call-to-Action) button clicks with conversion tracking
 */
export const trackCTAClick = (ctaName: string, ctaValue?: number, section?: string): void => {
  // Track as regular event
  trackEvent({
    action: 'cta_click',
    category: 'CTA',
    label: ctaName,
    value: ctaValue,
    custom_parameters: {
      cta_name: ctaName,
      section: section || 'unknown',
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    },
  })

  // Track as potential conversion
  if (ctaValue && ctaValue > 0) {
    trackConversion({
      event_name: `cta_${ctaName.toLowerCase().replace(/\s+/g, '_')}`,
      value: ctaValue,
      custom_parameters: {
        cta_name: ctaName,
        section,
      },
    })
  }
}

/**
 * Track form submissions
 */
export const trackFormSubmission = (formName: string, formData?: Record<string, any>): void => {
  trackEvent({
    action: 'form_submit',
    category: 'Form',
    label: formName,
    custom_parameters: {
      form_name: formName,
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
      ...formData,
    },
  })

  // Track as lead conversion
  trackConversion({
    event_name: `lead_${formName.toLowerCase().replace(/\s+/g, '_')}`,
    value: 100, // Default lead value
    custom_parameters: {
      form_name: formName,
      lead_type: 'form_submission',
    },
  })
}

/**
 * Track page scroll depth
 */
export const trackScrollDepth = (depth: number): void => {
  trackEvent({
    action: 'scroll_depth',
    category: 'User Engagement',
    label: `${depth}%`,
    value: depth,
    custom_parameters: {
      scroll_depth: depth,
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    },
  })
}

/**
 * Track time spent on page
 */
export const trackTimeOnPage = (timeInSeconds: number): void => {
  trackEvent({
    action: 'time_on_page',
    category: 'User Engagement',
    value: timeInSeconds,
    custom_parameters: {
      time_on_page: timeInSeconds,
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    },
  })
}

/**
 * Track video interactions
 */
export const trackVideoEvent = (action: 'play' | 'pause' | 'complete', videoName: string, progress?: number): void => {
  trackEvent({
    action: `video_${action}`,
    category: 'Video',
    label: videoName,
    value: progress,
    custom_parameters: {
      video_name: videoName,
      video_action: action,
      video_progress: progress,
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    },
  })
}

/**
 * Track downloads
 */
export const trackDownload = (fileName: string, fileType?: string): void => {
  trackEvent({
    action: 'file_download',
    category: 'Download',
    label: fileName,
    custom_parameters: {
      file_name: fileName,
      file_type: fileType || 'unknown',
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    },
  })
}

/**
 * Track external link clicks
 */
export const trackExternalLink = (url: string, linkText?: string): void => {
  trackEvent({
    action: 'external_link_click',
    category: 'External Link',
    label: url,
    custom_parameters: {
      external_url: url,
      link_text: linkText,
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    },
  })
}

/**
 * Track pricing tier selections
 */
export const trackPricingSelection = (tier: string, price: number): void => {
  trackEvent({
    action: 'pricing_tier_select',
    category: 'Pricing',
    label: tier,
    value: price,
    custom_parameters: {
      pricing_tier: tier,
      price: price,
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    },
  })

  // Track as high-value conversion
  trackConversion({
    event_name: 'pricing_interest',
    value: price * 0.1, // 10% of price as conversion value
    custom_parameters: {
      pricing_tier: tier,
      price: price,
    },
  })
}

/**
 * Track search events
 */
export const trackSearch = (searchTerm: string, resultsCount?: number): void => {
  trackEvent({
    action: 'search',
    category: 'Search',
    label: searchTerm,
    value: resultsCount,
    custom_parameters: {
      search_term: searchTerm,
      results_count: resultsCount,
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    },
  })
}

/**
 * Initialize analytics and set user properties
 */
export const initializeAnalytics = (userId?: string, userProperties?: Record<string, any>): void => {
  if (typeof window === 'undefined') return

  // Google Analytics user properties
  if (window.gtag && userId) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      user_id: userId,
      custom_map: {
        custom_parameter_1: 'innovation_synergy_ai_miami',
      region: 'miami',
      market_type: 'international_hospitality',
      },
    })

    if (userProperties) {
      window.gtag('set', { user_properties: userProperties })
    }
  }

  // Facebook Pixel user properties
  if (window.fbq && userProperties) {
    window.fbq('set', 'userData', userProperties)
  }
}

/**
 * Track error events
 */
export const trackError = (error: Error, context?: string): void => {
  trackEvent({
    action: 'javascript_error',
    category: 'Error',
    label: error.message,
    custom_parameters: {
      error_message: error.message,
      error_stack: error.stack,
      error_context: context,
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    },
  })
}

// Utility function to get UTM parameters with Miami/International tracking
export const getUTMParameters = (): Record<string, string | null> => {
  if (typeof window === 'undefined') return {}

  const urlParams = new URLSearchParams(window.location.search)
  return {
    utm_source: urlParams.get('utm_source'),
    utm_medium: urlParams.get('utm_medium'),
    utm_campaign: urlParams.get('utm_campaign'),
    utm_term: urlParams.get('utm_term'),
    utm_content: urlParams.get('utm_content'),
    // Miami-specific tracking parameters
    market: 'miami',
    target_industry: urlParams.get('industry') || 'hospitality',
    language_pref: urlParams.get('lang') || 'en',
    international_source: urlParams.get('intl') || 'domestic'
  }
}

/**
 * Track bilingual interactions (Miami-specific)
 */
export const trackBilingualInteraction = (action: string, language: 'en' | 'es', section?: string): void => {
  trackEvent({
    action: `bilingual_${action}`,
    category: 'Miami Bilingual Experience',
    label: `${action}_${language}`,
    custom_parameters: {
      interaction_language: language,
      section: section || 'unknown',
      is_spanish: language === 'es',
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    },
  })
}

/**
 * Track international business inquiries (Miami-specific)
 */
export const trackInternationalInquiry = (country?: string, industry?: string): void => {
  trackEvent({
    action: 'international_business_inquiry',
    category: 'Miami International Business',
    label: country || 'unknown_country',
    custom_parameters: {
      inquiry_country: country,
      inquiry_industry: industry || 'general',
      is_latin_america: country && ['mx', 'br', 'ar', 'co', 'pe', 'cl', 've'].includes(country.toLowerCase()),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
  })

  // Track as high-value international conversion
  trackConversion({
    event_name: 'international_business_lead',
    value: 250, // Higher value for international leads
    custom_parameters: {
      lead_type: 'international_business',
      country: country,
      industry: industry
    },
  })
}

/**
 * Track hospitality-specific events (Miami-specific)
 */
export const trackHospitalityEvent = (eventType: 'hotel' | 'restaurant' | 'tourism' | 'event', details?: Record<string, any>): void => {
  trackEvent({
    action: `hospitality_${eventType}_interaction`,
    category: 'Miami Hospitality Focus',
    label: eventType,
    custom_parameters: {
      hospitality_type: eventType,
      location: 'miami',
      market_segment: 'hospitality',
      ...details,
    },
  })
}