import { useEffect, useState } from 'react'

/**
 * Determine if the user has scrolled halfway down the page or fully (after the halfway end point)
 * @returns 'top' if at the top, 'halfway' if scrolled halfway, 'full' if scrolled past halfway
 */

type Scrolled = 'top' | 'halfway' | 'full'

export function useScrollStage() {
  const [scrolled, setScrolled] = useState<Scrolled>('top')

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY || window.pageYOffset
      const halfway = window.innerHeight * 0.5
      const full = window.innerHeight

      // Determine scroll state
      if (scrollY < halfway) {
        setScrolled('top')
      } else if (scrollY >= halfway && scrollY < full) {
        setScrolled('halfway')
      } else {
        setScrolled('full')
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    // Check on mount in case already scrolled
    onScroll()

    // Cleanup
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrolled
}
