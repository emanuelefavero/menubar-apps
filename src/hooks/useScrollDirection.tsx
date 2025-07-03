import { useEffect, useRef, useState } from 'react'

/**
 * Determine the scroll direction of the page
 * @returns `true` if scrolling up, `false` if scrolling down
 */

export function useScrollDirection() {
  const [show, setShow] = useState(true)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
            setShow(false) // scrolling down
          } else {
            setShow(true) // scrolling up
          }
          lastScrollY.current = currentScrollY
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return show
}
