import { renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useIsActiveLink } from './useIsActiveLink'

// Mock Next.js usePathname hook
const mockUsePathname = vi.fn()
vi.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}))

describe('useIsActiveLink', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('returns true when url matches the href', () => {
    mockUsePathname.mockReturnValue('/about') // url
    const { result } = renderHook(() => useIsActiveLink('/about')) // href
    expect(result.current).toBe(true)
  })

  it('returns false when url does not match the href', () => {
    const nonMatchingRoutes = ['/about-us', '/support', '/nested/route']

    nonMatchingRoutes.forEach((route) => {
      mockUsePathname.mockReturnValue(route)
      const { result } = renderHook(() => useIsActiveLink('/about')) // href
      expect(result.current).toBe(false)
      vi.clearAllMocks() // Clear mock for the next iteration
    })
  })
})
