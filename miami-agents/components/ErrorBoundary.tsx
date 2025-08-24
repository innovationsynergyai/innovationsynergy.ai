'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { AlertTriangle, RefreshCw, Home, MessageCircle } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  showErrorDetails?: boolean
  level?: 'page' | 'section' | 'component'
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
  errorId?: string
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
      errorId: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console for development
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    
    // Update state with error info
    this.setState({ errorInfo })

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo)

    // In production, you might want to send this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to error reporting service
      // errorReportingService.captureException(error, { extra: errorInfo })
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback
      }

      const { level = 'component', showErrorDetails = false } = this.props
      const { error, errorInfo, errorId } = this.state

      // Different layouts based on error level
      if (level === 'page') {
        return (
          <div 
            className="min-h-screen flex items-center justify-center bg-black-900 text-white-50 p-6"
            role="alert"
            aria-live="assertive"
          >
            <div className="max-w-2xl w-full text-center">
              <div className="mb-8">
                <AlertTriangle 
                  className="w-16 h-16 text-tiffany-500 mx-auto mb-4" 
                  aria-hidden="true"
                />
                <h1 className="font-display text-4xl md:text-5xl font-light mb-4">
                  Oops! Something went wrong
                </h1>
                <p className="text-xl text-neutral-300 mb-8">
                  We're sorry, but there was an unexpected error. Our team has been notified.
                </p>
              </div>

              <Alert className="bg-red-950/20 border-red-500/20 text-white-50 mb-8">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                <AlertDescription>
                  Error ID: {errorId}
                  {showErrorDetails && error && (
                    <details className="mt-4">
                      <summary className="cursor-pointer text-sm font-medium">
                        Technical Details
                      </summary>
                      <pre className="mt-2 text-xs bg-black-800 p-4 rounded overflow-auto">
                        {error.toString()}
                        {errorInfo?.componentStack && (
                          <div className="mt-2">
                            <strong>Component Stack:</strong>
                            {errorInfo.componentStack}
                          </div>
                        )}
                      </pre>
                    </details>
                  )}
                </AlertDescription>
              </Alert>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={this.handleRetry}
                  className="bg-tiffany-500 text-black-900 hover:bg-tiffany-400"
                  aria-describedby="retry-description"
                >
                  <RefreshCw className="w-4 h-4 mr-2" aria-hidden="true" />
                  Try Again
                </Button>
                <Button
                  onClick={this.handleReload}
                  variant="outline"
                  className="border-white-50 text-white-50 hover:bg-white-50 hover:text-black-900"
                  aria-describedby="reload-description"
                >
                  <RefreshCw className="w-4 h-4 mr-2" aria-hidden="true" />
                  Reload Page
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white-50 text-white-50 hover:bg-white-50 hover:text-black-900"
                >
                  <a href="/" aria-describedby="home-description">
                    <Home className="w-4 h-4 mr-2" aria-hidden="true" />
                    Go Home
                  </a>
                </Button>
              </div>

              {/* Hidden descriptions for screen readers */}
              <div className="sr-only">
                <p id="retry-description">
                  Retry the previous action that caused the error
                </p>
                <p id="reload-description">
                  Reload the entire page to start fresh
                </p>
                <p id="home-description">
                  Navigate back to the homepage
                </p>
              </div>

              <div className="mt-8 text-sm text-neutral-400">
                <p className="mb-2">
                  If this problem continues, please contact our support team.
                </p>
                <a 
                  href="mailto:support@innovationsynergyai.com" 
                  className="inline-flex items-center text-tiffany-500 hover:text-tiffany-400 transition-colors"
                  aria-label="Contact support via email"
                >
                  <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                  support@innovationsynergyai.com
                </a>
              </div>
            </div>
          </div>
        )
      }

      if (level === 'section') {
        return (
          <div 
            className="py-16 px-6 text-center bg-neutral-50 border border-neutral-200 rounded-lg"
            role="alert"
            aria-live="assertive"
          >
            <AlertTriangle 
              className="w-12 h-12 text-orange-500 mx-auto mb-4" 
              aria-hidden="true"
            />
            <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
              Section Unavailable
            </h2>
            <p className="text-neutral-600 mb-6">
              This section couldn't load properly. You can continue using the rest of the site.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={this.handleRetry}
                size="sm"
                className="bg-tiffany-500 text-black-900 hover:bg-tiffany-400"
              >
                <RefreshCw className="w-4 h-4 mr-2" aria-hidden="true" />
                Retry Section
              </Button>
              {showErrorDetails && (
                <details className="text-left">
                  <summary className="cursor-pointer text-sm text-neutral-500 hover:text-neutral-700">
                    Error Details
                  </summary>
                  <pre className="mt-2 text-xs bg-neutral-100 p-3 rounded overflow-auto max-w-sm">
                    {error?.toString()}
                  </pre>
                </details>
              )}
            </div>
          </div>
        )
      }

      // Component level error
      return (
        <div 
          className="p-4 border border-orange-200 bg-orange-50 rounded-lg text-center"
          role="alert"
          aria-live="polite"
        >
          <AlertTriangle 
            className="w-8 h-8 text-orange-500 mx-auto mb-2" 
            aria-hidden="true"
          />
          <p className="text-sm font-medium text-orange-800 mb-2">
            Component Error
          </p>
          <p className="text-xs text-orange-600 mb-3">
            This component encountered an error and couldn't render properly.
          </p>
          <Button
            onClick={this.handleRetry}
            size="sm"
            variant="outline"
            className="text-xs"
          >
            <RefreshCw className="w-3 h-3 mr-1" aria-hidden="true" />
            Retry
          </Button>
          
          {showErrorDetails && (
            <details className="mt-3 text-left">
              <summary className="cursor-pointer text-xs text-orange-600 hover:text-orange-800">
                Technical Details
              </summary>
              <pre className="mt-1 text-xs bg-orange-100 p-2 rounded overflow-auto">
                {error?.toString()}
              </pre>
            </details>
          )}
        </div>
      )
    }

    return this.props.children
  }
}

// Higher-order component for easier usage
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  )

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`

  return WrappedComponent
}

// Hook for triggering errors (useful for testing)
export function useErrorHandler() {
  return (error: Error, errorInfo?: ErrorInfo) => {
    throw error
  }
}

export default ErrorBoundary