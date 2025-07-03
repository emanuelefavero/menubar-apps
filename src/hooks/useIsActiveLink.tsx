import { usePathname } from 'next/navigation'

/**
 * Check if the current path matches a given href
 * @param href The href to compare against the current path
 * @returns `true` if the current path matches the href, otherwise `false`
 */

export function useIsActiveLink(href: string): boolean {
  const pathname = usePathname()
  return pathname === href
}
