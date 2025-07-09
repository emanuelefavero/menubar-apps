import { throttle } from 'lodash-es'
import { useEffect, useState } from 'react'

/**
 * Track the current scroll position of the page
 * @returns An object containing scrollX and scrollY scroll coordinates
 */

interface ScrollPosition {
  scrollX: number
  scrollY: number
}

export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollX: 0,
    scrollY: 0,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        scrollX: window.scrollX || window.pageXOffset,
        scrollY: window.scrollY || window.pageYOffset,
      })
    }

    // Throttle the scroll event to improve performance
    const throttledScroll = throttle(handleScroll, 16) // ~60fps

    // Set initial scroll position
    handleScroll()

    // Attach scroll event listener
    window.addEventListener('scroll', throttledScroll, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledScroll)
      throttledScroll.cancel?.()
    }
  }, [])

  return scrollPosition
}
