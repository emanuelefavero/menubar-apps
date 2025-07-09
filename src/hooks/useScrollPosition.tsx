import { throttle } from 'lodash-es'
import { useEffect, useState } from 'react'

/**
 * Track the current scroll position of the page
 * @returns An object containing x and y scroll coordinates
 */

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX || window.pageXOffset,
        y: window.scrollY || window.pageYOffset,
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
