'use client'

import type { ScrollStage } from '@/hooks/useScrollStage'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

interface Props {
  className?: string
  scrollStage?: ScrollStage
  pathname?: string
}

export default function Component({
  className = '',
  scrollStage = 'full',
  pathname = '/',
}: Props) {
  const [showHint, setShowHint] = useState(false)

  const baseStyles = clsx(
    // Default styles
    'absolute hidden top-1/2 left-full ml-1.5 -translate-y-1/2 animate-bounce-x px-0.5 py-0.5 text-xs whitespace-nowrap',

    // Color based on scroll stage
    scrollStage === 'top'
      ? 'text-(--success-dark)'
      : scrollStage === 'halfway'
        ? 'text-(--success-light)'
        : 'text-(--success)', // System light/dark mode
  )

  // Show hint only after 1 second and hide after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(true)
    }, 1000)

    const hideTimer = setTimeout(() => {
      setShowHint(false)
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [pathname])

  return (
    <span
      className={clsx(
        baseStyles,
        className,

        // Show hint only if not on home page
        showHint && pathname !== '/' && '3xs:inline-block',
      )}
    >
      ← Go Home
    </span>
  )
}
