import { throttle } from 'lodash-es'
import { useEffect, useRef, useState } from 'react'

/**
 * Determine the scroll direction of the page
 * @returns `true` if scrolling up, `false` if scrolling down
 */

export function useScrollDirection() {
  const [show, setShow] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    // Scroll event handler (with throttle)
    const throttledScroll = throttle(() => {
      const currentScrollY = window.scrollY

      // If the current scroll position is greater than the last, we are scrolling down
      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setShow(false) // scrolling down
      } else {
        setShow(true) // scrolling up
      }

      lastScrollY.current = currentScrollY
    }, 100) // 100ms throttle, adjust as needed

    // Attach the throttled scroll event listener
    window.addEventListener('scroll', throttledScroll)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledScroll)
      throttledScroll.cancel?.()
    }
  }, [])

  return show
}
