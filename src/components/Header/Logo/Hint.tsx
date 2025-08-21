'use client'

import type { ScrollStage } from '@/hooks/useScrollStage'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'

interface Props {
  showHint: boolean
  setShowHint: (show: boolean) => void
  className?: string
  scrollStage?: ScrollStage
  pathname?: string
  hasLogoHoveredNonHome?: boolean
}

export default function Component({
  className,
  scrollStage = 'full',
  pathname = '/',
  showHint,
  setShowHint,
  hasLogoHoveredNonHome = false,
}: Props) {
  const baseStyles = cn(
    // Default styles
    'absolute top-1/2 left-full hidden -translate-y-1/2 animate-bounce-x px-0.5 py-0.5 text-xs whitespace-nowrap',

    // Color based on scroll stage
    scrollStage === 'top'
      ? 'text-(--success-dark)'
      : scrollStage === 'halfway'
        ? 'text-(--success-light)'
        : 'text-(--success)', // System light/dark mode
  )

  // Show hint only after 1 second and hide after 3 seconds, unless hasLogoHoveredNonHome is true
  useEffect(() => {
    if (hasLogoHoveredNonHome) {
      setShowHint(false)
      return
    }
    const timer = setTimeout(() => {
      setShowHint(true)
    }, 1000)

    const hideTimer = setTimeout(() => {
      setShowHint(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [pathname, setShowHint, hasLogoHoveredNonHome])

  return (
    <span
      // Transition effect for showing/hiding the hint
      className={cn(
        'transition-opacity duration-500',
        showHint ? 'opacity-100' : 'opacity-0',
      )}
    >
      <span
        className={cn(
          baseStyles,
          className,

          // Show hint only if not on home page
          showHint && pathname !== '/' && '3xs:inline-block',
        )}
      >
        {' '}
        ← Go Home
      </span>
    </span>
  )
}
