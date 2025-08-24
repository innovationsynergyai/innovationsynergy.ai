'use client'

// Focus management utilities
export class FocusManager {
  private static stack: HTMLElement[] = []

  /**
   * Traps focus within an element (useful for modals, dropdowns)
   */
  static trapFocus(element: HTMLElement) {
    const focusableElements = this.getFocusableElements(element)
    
    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }

    element.addEventListener('keydown', handleKeyDown)
    firstElement.focus()

    return () => {
      element.removeEventListener('keydown', handleKeyDown)
    }
  }

  /**
   * Store current focus and return a function to restore it
   */
  static saveFocus(): () => void {
    const activeElement = document.activeElement as HTMLElement
    this.stack.push(activeElement)

    return () => {
      const savedElement = this.stack.pop()
      if (savedElement && typeof savedElement.focus === 'function') {
        savedElement.focus()
      }
    }
  }

  /**
   * Get all focusable elements within a container
   */
  static getFocusableElements(container: HTMLElement): HTMLElement[] {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      'details',
      'summary'
    ].join(', ')

    return Array.from(container.querySelectorAll(focusableSelectors))
      .filter(el => this.isVisible(el as HTMLElement)) as HTMLElement[]
  }

  /**
   * Check if element is visible and can be focused
   */
  private static isVisible(element: HTMLElement): boolean {
    const style = window.getComputedStyle(element)
    return style.display !== 'none' && 
           style.visibility !== 'hidden' && 
           style.opacity !== '0'
  }

  /**
   * Move focus to the next focusable element
   */
  static focusNext(currentElement?: HTMLElement) {
    const focusable = this.getFocusableElements(document.body)
    const currentIndex = currentElement ? focusable.indexOf(currentElement) : -1
    const nextIndex = (currentIndex + 1) % focusable.length
    focusable[nextIndex]?.focus()
  }

  /**
   * Move focus to the previous focusable element
   */
  static focusPrevious(currentElement?: HTMLElement) {
    const focusable = this.getFocusableElements(document.body)
    const currentIndex = currentElement ? focusable.indexOf(currentElement) : -1
    const prevIndex = currentIndex <= 0 ? focusable.length - 1 : currentIndex - 1
    focusable[prevIndex]?.focus()
  }
}

// Keyboard navigation utilities
export class KeyboardNavigation {
  /**
   * Handle arrow key navigation for lists and menus
   */
  static handleArrowKeys(
    event: KeyboardEvent,
    items: HTMLElement[],
    currentIndex: number,
    options: {
      orientation?: 'vertical' | 'horizontal' | 'both'
      loop?: boolean
      onSelectionChange?: (index: number) => void
    } = {}
  ) {
    const { orientation = 'vertical', loop = true, onSelectionChange } = options
    let newIndex = currentIndex

    switch (event.key) {
      case 'ArrowDown':
        if (orientation === 'vertical' || orientation === 'both') {
          event.preventDefault()
          newIndex = loop 
            ? (currentIndex + 1) % items.length
            : Math.min(currentIndex + 1, items.length - 1)
        }
        break

      case 'ArrowUp':
        if (orientation === 'vertical' || orientation === 'both') {
          event.preventDefault()
          newIndex = loop
            ? (currentIndex - 1 + items.length) % items.length
            : Math.max(currentIndex - 1, 0)
        }
        break

      case 'ArrowRight':
        if (orientation === 'horizontal' || orientation === 'both') {
          event.preventDefault()
          newIndex = loop
            ? (currentIndex + 1) % items.length
            : Math.min(currentIndex + 1, items.length - 1)
        }
        break

      case 'ArrowLeft':
        if (orientation === 'horizontal' || orientation === 'both') {
          event.preventDefault()
          newIndex = loop
            ? (currentIndex - 1 + items.length) % items.length
            : Math.max(currentIndex - 1, 0)
        }
        break

      case 'Home':
        event.preventDefault()
        newIndex = 0
        break

      case 'End':
        event.preventDefault()
        newIndex = items.length - 1
        break
    }

    if (newIndex !== currentIndex) {
      items[newIndex]?.focus()
      onSelectionChange?.(newIndex)
    }

    return newIndex
  }

  /**
   * Handle escape key to close modals, menus, etc.
   */
  static handleEscape(event: KeyboardEvent, onEscape: () => void) {
    if (event.key === 'Escape') {
      event.preventDefault()
      event.stopPropagation()
      onEscape()
    }
  }

  /**
   * Handle Enter and Space key activation
   */
  static handleActivation(
    event: KeyboardEvent, 
    onActivate: () => void,
    preventDefault = true
  ) {
    if (event.key === 'Enter' || event.key === ' ') {
      if (preventDefault) {
        event.preventDefault()
      }
      onActivate()
    }
  }
}

// ARIA utilities
export class AriaUtils {
  /**
   * Generate unique IDs for ARIA relationships
   */
  static generateId(prefix = 'aria'): string {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}-${Date.now()}`
  }

  /**
   * Announce text to screen readers
   */
  static announce(message: string, priority: 'polite' | 'assertive' = 'polite') {
    const announcer = document.createElement('div')
    announcer.setAttribute('aria-live', priority)
    announcer.setAttribute('aria-atomic', 'true')
    announcer.setAttribute('class', 'sr-only')
    
    document.body.appendChild(announcer)
    announcer.textContent = message

    setTimeout(() => {
      document.body.removeChild(announcer)
    }, 1000)
  }

  /**
   * Update ARIA attributes dynamically
   */
  static updateAttributes(
    element: HTMLElement, 
    attributes: Record<string, string | boolean | null>
  ) {
    Object.entries(attributes).forEach(([key, value]) => {
      if (value === null) {
        element.removeAttribute(key)
      } else {
        element.setAttribute(key, String(value))
      }
    })
  }

  /**
   * Create proper ARIA relationships between elements
   */
  static createRelationship(
    trigger: HTMLElement,
    target: HTMLElement,
    relationship: 'describedby' | 'labelledby' | 'controls' | 'owns' | 'expanded'
  ) {
    const targetId = target.id || this.generateId()
    if (!target.id) {
      target.id = targetId
    }

    switch (relationship) {
      case 'describedby':
        const existingDescribedBy = trigger.getAttribute('aria-describedby')
        const describedByIds = existingDescribedBy 
          ? `${existingDescribedBy} ${targetId}` 
          : targetId
        trigger.setAttribute('aria-describedby', describedByIds)
        break

      case 'labelledby':
        const existingLabelledBy = trigger.getAttribute('aria-labelledby')
        const labelledByIds = existingLabelledBy 
          ? `${existingLabelledBy} ${targetId}` 
          : targetId
        trigger.setAttribute('aria-labelledby', labelledByIds)
        break

      case 'controls':
        trigger.setAttribute('aria-controls', targetId)
        break

      case 'owns':
        trigger.setAttribute('aria-owns', targetId)
        break

      case 'expanded':
        trigger.setAttribute('aria-expanded', 'false')
        break
    }

    return targetId
  }
}

// Color contrast utilities
export class ColorContrast {
  /**
   * Calculate color contrast ratio between two colors
   */
  static getContrastRatio(color1: string, color2: string): number {
    const lum1 = this.getLuminance(color1)
    const lum2 = this.getLuminance(color2)
    
    const brightest = Math.max(lum1, lum2)
    const darkest = Math.min(lum1, lum2)
    
    return (brightest + 0.05) / (darkest + 0.05)
  }

  /**
   * Check if color contrast meets WCAG standards
   */
  static meetsWCAG(
    color1: string, 
    color2: string, 
    level: 'AA' | 'AAA' = 'AA',
    size: 'normal' | 'large' = 'normal'
  ): boolean {
    const ratio = this.getContrastRatio(color1, color2)
    
    const requirements = {
      'AA': { normal: 4.5, large: 3 },
      'AAA': { normal: 7, large: 4.5 }
    }
    
    return ratio >= requirements[level][size]
  }

  /**
   * Get color luminance
   */
  private static getLuminance(color: string): number {
    const rgb = this.hexToRgb(color)
    if (!rgb) return 0

    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(c => {
      c = c / 255
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })

    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }

  /**
   * Convert hex color to RGB
   */
  private static hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }
}

// Screen reader utilities
export class ScreenReaderUtils {
  /**
   * Hide element from screen readers while keeping it visually present
   */
  static hideFromScreenReader(element: HTMLElement) {
    element.setAttribute('aria-hidden', 'true')
  }

  /**
   * Show element to screen readers
   */
  static showToScreenReader(element: HTMLElement) {
    element.removeAttribute('aria-hidden')
  }

  /**
   * Make element visible only to screen readers
   */
  static showOnlyToScreenReader(element: HTMLElement) {
    element.classList.add('sr-only')
  }

  /**
   * Check if user is using a screen reader
   */
  static isUsingScreenReader(): boolean {
    // This is a basic check and may not be 100% accurate
    return !!(
      window.navigator.userAgent.match(/NVDA|JAWS|VoiceOver|ChromeVox|TalkBack/i) ||
      window.speechSynthesis ||
      (window as any).speechSynthesis
    )
  }
}

// Hooks for React components
export function useSkipToContent() {
  return (targetId: string) => {
    const target = document.getElementById(targetId)
    if (target) {
      target.focus()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

export function useFocusTrap(isActive: boolean) {
  return (element: HTMLElement | null) => {
    if (!element || !isActive) return

    return FocusManager.trapFocus(element)
  }
}

export function useAnnounce() {
  return (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    AriaUtils.announce(message, priority)
  }
}

// Validation utilities
export function validateAccessibility(element: HTMLElement): string[] {
  const issues: string[] = []
  
  // Check for missing alt text on images
  const images = element.querySelectorAll('img')
  images.forEach((img, index) => {
    if (!img.hasAttribute('alt')) {
      issues.push(`Image ${index + 1} is missing alt text`)
    }
  })
  
  // Check for buttons without accessible names
  const buttons = element.querySelectorAll('button')
  buttons.forEach((button, index) => {
    if (!button.textContent?.trim() && 
        !button.getAttribute('aria-label') && 
        !button.getAttribute('aria-labelledby')) {
      issues.push(`Button ${index + 1} is missing an accessible name`)
    }
  })
  
  // Check for form inputs without labels
  const inputs = element.querySelectorAll('input, select, textarea')
  inputs.forEach((input, index) => {
    if (!input.getAttribute('aria-label') && 
        !input.getAttribute('aria-labelledby') &&
        !document.querySelector(`label[for="${input.id}"]`)) {
      issues.push(`Form input ${index + 1} is missing a label`)
    }
  })
  
  return issues
}