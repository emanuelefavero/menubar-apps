import { usePathname } from 'next/navigation'

/**
 * Determine if the current path is the home page
 * @returns `true` if the current url is '/'
 *
 * @example
 * ```tsx
 * const isHome = useIsHome()
 * ```
 */

export function useIsHome(): boolean {
  const pathname = usePathname()
  return pathname === '/'
}
