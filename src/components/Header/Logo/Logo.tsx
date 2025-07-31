'use client'

import { title } from '@/config/metadata'
import { useIsHome } from '@/hooks/useIsHome'
import { useScrollStage } from '@/hooks/useScrollStage'
import { focusStyle } from '@/styles/focus'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState, type AnchorHTMLAttributes } from 'react'
import Hint from './Hint'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string
}

export default function Component({ className, ...props }: Props) {
  const isHome = useIsHome()
  const pathname = usePathname()
  const scrollStageFromHook = useScrollStage()
  const scrollStage = pathname === '/' ? scrollStageFromHook : 'full'
  const [showHint, setShowHint] = useState(false)
  const hasHovered = useRef(false)

  // State to track if logoHoveredNonHome is set in sessionStorage
  const [hasLogoHoveredNonHome, setHasLogoHoveredNonHome] = useState(false)

  // Check sessionStorage for logoHoveredNonHome on mount and on pathname change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasLogoHoveredNonHome(
        sessionStorage.getItem('logoHoveredNonHome') === 'true',
      )
    }
  }, [pathname])

  const baseStyles = clsx(
    // Default styles
    'relative rounded-full px-3 py-0.5 font-semibold border-b-2 border-transparent no-underline select-none transition duration-250 active:scale-[0.97]',
    focusStyle,

    scrollStage === 'top'
      ? 'text-gray-700'
      : scrollStage === 'halfway'
        ? 'text-gray-200'
        : 'text-(--foreground)',
  )

  const homeStyles =
    'border-b-2 border-black/15! bg-white/80 text-gray-700! shadow-2xs inset-shadow-xs shadow-black/25 inset-shadow-white hover:bg-white/80'

  const nonHomeStyles = clsx(
    scrollStage === 'top'
      ? 'hover:bg-white/25'
      : scrollStage === 'halfway'
        ? 'hover:bg-white/10'
        : 'hover:bg-white/50 dark:hover:bg-white/10',
  )

  return (
    <Link
      href='/'
      className={clsx(
        baseStyles,
        isHome ? homeStyles : nonHomeStyles,
        className,
      )}
      {...props}
      onMouseEnter={() => {
        if (!hasHovered.current && !isHome) {
          setShowHint(true)
          hasHovered.current = true // Hide hint after first hover

          // Set sessionStorage to prevent showing hint again if logo is hovered on a non-home page
          if (typeof window !== 'undefined') {
            sessionStorage.setItem('logoHoveredNonHome', 'true')
          }
        }
      }}
      onMouseLeave={() => setShowHint(false)}
      aria-label='Home'
      title={isHome ? 'Home' : 'Go to Home Page'}
      data-active={isHome ? 'true' : undefined}
    >
      {title}

      <Hint
        scrollStage={scrollStage}
        pathname={pathname}
        showHint={showHint}
        setShowHint={setShowHint}
        hasLogoHoveredNonHome={hasLogoHoveredNonHome}
      />
    </Link>
  )
}
