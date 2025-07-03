import { useEffect, useState } from 'react'

/**
 * Determine if the user has scrolled halfway down the page
 * @returns `true` if the user has scrolled halfway down the page, otherwise `false`
 */
export function useScrolledHalfway() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY || window.pageYOffset
      const threshold = window.innerHeight * 0.5
      setScrolled(scrollY >= threshold)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    // Check on mount in case already scrolled
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrolled
}
