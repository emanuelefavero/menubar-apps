import { throttle } from 'lodash-es'
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
    // Throttle the scroll event to improve performance
    const handleScrollLogic = throttle(() => {
      const currentScrollY = window.scrollY

      // If the user has scrolled down more than 10px, hide the header
      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setShow(false)
      } else {
        setShow(true)
      }

      lastScrollY.current = currentScrollY
    }, 100) // Adjust the throttle delay as needed

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          handleScrollLogic()
          ticking.current = false
        })
        ticking.current = true
      }
    }

    // Attach scroll event listener
    window.addEventListener('scroll', onScroll)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', onScroll)
      handleScrollLogic.cancel?.()
    }
  }, [])

  return show
}
