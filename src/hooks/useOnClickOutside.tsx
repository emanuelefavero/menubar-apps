import type { RefsArray } from '@/types/refs'
import { useEffect } from 'react'

/**
 * Calls handler when a click occurs outside the given ref(s).
 * @param refs Array of refs to check for outside clicks.
 * @param handler Function to call on outside click.
 * @returns void
 *
 * @example
 * ```tsx
 * const ref = useRef<HTMLDivElement>(null)
 * useOnClickOutside([ref], () => {
 *  console.log('Clicked outside the element!')
 * })
 * ```
 */

export function useOnClickOutside(refs: RefsArray, handler: ClickHandler) {
  useEffect(() => {
    // Ensure refs are valid
    function listener(event: MouseEvent | TouchEvent) {
      // Check if the click is outside of all refs
      if (
        refs.some(
          (ref) => ref.current && ref.current.contains(event.target as Node),
        )
      ) {
        return
      }

      // If the click is outside, call the handler
      handler(event)
    }

    // Attach event listeners for mouse and touch events
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [refs, handler])
}
