import { throttle } from 'lodash-es'
import { useEffect, useState } from 'react'

/**
 * Determine if the user has scrolled halfway down the page or fully (after the halfway end point)
 * @returns 'top' if at the top, 'halfway' if scrolled halfway, 'full' if scrolled past halfway
 */

type ScrollStage = 'top' | 'halfway' | 'full'

export function useScrollStage() {
  const [scrollStage, setScrollStage] = useState<ScrollStage>('top')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      const halfway = window.innerHeight * 0.5
      const full = window.innerHeight

      if (scrollY < halfway) {
        setScrollStage('top')
      } else if (scrollY >= halfway && scrollY < full) {
        setScrollStage('halfway')
      } else {
        setScrollStage('full')
      }
    }

    const throttledScroll = throttle(handleScroll, 100)

    window.addEventListener('scroll', throttledScroll, { passive: true })
    throttledScroll()

    return () => {
      window.removeEventListener('scroll', throttledScroll)
      throttledScroll.cancel()
    }
  }, [])

  return scrollStage
}
