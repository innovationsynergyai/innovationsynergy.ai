'use client'

import React from 'react'
import { cn } from "@/lib/utils"

interface LoadingStateProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'spinner' | 'skeleton' | 'pulse' | 'dots'
  className?: string
  text?: string
  fullScreen?: boolean
  'aria-label'?: string
}

const LoadingSpinner = ({ size, className }: { size: string; className?: string }) => (
  <div
    className={cn(
      "animate-spin rounded-full border-2 border-transparent border-t-current",
      {
        'w-4 h-4': size === 'sm',
        'w-6 h-6': size === 'md',
        'w-8 h-8': size === 'lg',
        'w-12 h-12': size === 'xl'
      },
      className
    )}
    role="status"
    aria-hidden="true"
  />
)

const LoadingDots = ({ size, className }: { size: string; className?: string }) => (
  <div className={cn("flex space-x-1", className)} role="status" aria-hidden="true">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className={cn(
          "rounded-full bg-current animate-pulse",
          {
            'w-1 h-1': size === 'sm',
            'w-2 h-2': size === 'md',
            'w-3 h-3': size === 'lg',
            'w-4 h-4': size === 'xl'
          }
        )}
        style={{
          animationDelay: `${i * 0.1}s`,
          animationDuration: '1.4s'
        }}
      />
    ))}
  </div>
)

const LoadingSkeleton = ({ size, className }: { size: string; className?: string }) => (
  <div className={cn("space-y-2", className)} role="status" aria-hidden="true">
    <div
      className={cn(
        "bg-current opacity-20 rounded animate-pulse",
        {
          'h-4': size === 'sm',
          'h-6': size === 'md',
          'h-8': size === 'lg',
          'h-12': size === 'xl'
        }
      )}
    />
    <div
      className={cn(
        "bg-current opacity-20 rounded animate-pulse",
        {
          'h-3 w-3/4': size === 'sm',
          'h-4 w-2/3': size === 'md',
          'h-6 w-5/6': size === 'lg',
          'h-8 w-4/5': size === 'xl'
        }
      )}
    />
  </div>
)

const LoadingPulse = ({ size, className }: { size: string; className?: string }) => (
  <div
    className={cn(
      "rounded-full bg-current animate-pulse",
      {
        'w-8 h-8': size === 'sm',
        'w-12 h-12': size === 'md',
        'w-16 h-16': size === 'lg',
        'w-20 h-20': size === 'xl'
      },
      className
    )}
    role="status"
    aria-hidden="true"
  />
)

export default function LoadingState({
  size = 'md',
  variant = 'spinner',
  className,
  text,
  fullScreen = false,
  'aria-label': ariaLabel = 'Loading'
}: LoadingStateProps) {
  const LoadingComponent = () => {
    switch (variant) {
      case 'skeleton':
        return <LoadingSkeleton size={size} />
      case 'pulse':
        return <LoadingPulse size={size} />
      case 'dots':
        return <LoadingDots size={size} />
      default:
        return <LoadingSpinner size={size} />
    }
  }

  const content = (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        {
          'fixed inset-0 z-50 bg-black-900/80 backdrop-blur-sm': fullScreen,
          'py-4': !fullScreen
        },
        className
      )}
      role="status"
      aria-live="polite"
      aria-label={ariaLabel}
    >
      <div className="text-tiffany-500">
        <LoadingComponent />
      </div>
      {text && (
        <p className={cn(
          "mt-4 text-sm font-medium",
          fullScreen ? "text-white-50" : "text-neutral-600"
        )}>
          {text}
        </p>
      )}
      <span className="sr-only">{ariaLabel}</span>
    </div>
  )

  return content
}

// Additional specialized loading components
export function ButtonLoadingState({ 
  children, 
  isLoading, 
  loadingText = "Loading...",
  className 
}: {
  children: React.ReactNode
  isLoading: boolean
  loadingText?: string
  className?: string
}) {
  return (
    <span className={cn("flex items-center justify-center", className)}>
      {isLoading && (
        <LoadingSpinner 
          size="sm" 
          className="mr-2 text-current" 
        />
      )}
      <span className={cn({ 'sr-only': isLoading })}>
        {isLoading ? loadingText : children}
      </span>
    </span>
  )
}

export function TableLoadingState({ 
  rows = 5, 
  columns = 4 
}: { 
  rows?: number
  columns?: number 
}) {
  return (
    <div className="space-y-3" role="status" aria-label="Loading table data">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex space-x-4">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <div
              key={colIndex}
              className="h-4 bg-neutral-200 rounded animate-pulse flex-1"
              style={{ animationDelay: `${(rowIndex * columns + colIndex) * 0.05}s` }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export function CardLoadingState() {
  return (
    <div className="p-6 border border-neutral-200 rounded-lg space-y-4" role="status" aria-label="Loading card content">
      <div className="h-6 bg-neutral-200 rounded animate-pulse w-3/4" />
      <div className="space-y-2">
        <div className="h-4 bg-neutral-200 rounded animate-pulse" />
        <div className="h-4 bg-neutral-200 rounded animate-pulse w-5/6" />
      </div>
      <div className="h-10 bg-neutral-200 rounded animate-pulse w-1/3" />
    </div>
  )
}