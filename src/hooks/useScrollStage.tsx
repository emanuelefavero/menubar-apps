import { useEffect, useState } from 'react'

/**
 * Determine if the user has scrolled halfway down the page or fully (after the halfway end point)
 * @returns 'top' if at the top, 'halfway' if scrolled halfway, 'full' if scrolled past halfway
 */

type ScrollStage = 'top' | 'halfway' | 'full'

export function useScrollStage() {
  const [scrollStage, setScrollStage] = useState<ScrollStage>('top')

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      const halfway = window.innerHeight * 0.5
      const full = window.innerHeight

      // Determine scroll state
      if (scrollY < halfway) {
        setScrollStage('top')
      } else if (scrollY >= halfway && scrollY < full) {
        setScrollStage('halfway')
      } else {
        setScrollStage('full')
      }
    }

    // Attach scroll event listener
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    // Cleanup
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrollStage
}
