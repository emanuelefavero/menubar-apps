import { throttle } from 'lodash-es'
import { useEffect, useState } from 'react'

/**
 * Track the current viewport size (width and height)
 * Updates when the user resizes the window
 * @returns An object containing width and height of the viewport as numbers
 *
 * @example
 * ```tsx
 * const { width, height } = useViewportSize()
 * console.log(width, height) // 1920, 1080
 * ```
 */

interface ViewportSize {
  width: number
  height: number
}

export function useViewportSize(): ViewportSize {
  const [viewportSize, setViewportSize] = useState<ViewportSize>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Throttle the resize event to improve performance
    const throttledResize = throttle(handleResize, 16) // ~60fps

    // Set initial viewport size
    handleResize()

    // Attach resize event listener
    window.addEventListener('resize', throttledResize, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener('resize', throttledResize)
      throttledResize.cancel?.()
    }
  }, [])

  return viewportSize
}
