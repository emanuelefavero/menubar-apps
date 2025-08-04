import type { Href } from '@/types/href'
import { usePathname } from 'next/navigation'

/**
 * Check if the current url matches a given href
 *
 * @param href The href to compare against the current url
 * @returns `true` if the current url matches the href, otherwise `false`
 *
 * @example
 * ```tsx
 * const isActive = useIsActiveLink('/about')
 * // true if the current url is '/about'
 * ```
 *
 */

export function useIsActiveLink(href: Href): boolean {
  const pathname = usePathname()
  return pathname === href
}
