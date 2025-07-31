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

export function useIsActiveLink(href: string): boolean {
  const pathname = usePathname()

  // Remove forward slashes from the beginning and end of the href and pathname
  const cleanedHref = href.replace(/^\/|\/$/g, '')
  const cleanedPathname = pathname.replace(/^\/|\/$/g, '')

  return cleanedPathname === cleanedHref
}
