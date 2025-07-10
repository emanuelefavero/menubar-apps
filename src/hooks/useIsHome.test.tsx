import { renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useIsHome } from './useIsHome'

// Mock Next.js usePathname hook
const mockUsePathname = vi.fn()
vi.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}))

describe('useIsHome', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('returns true when on home page', () => {
    mockUsePathname.mockReturnValue('/') // Home page route
    const { result } = renderHook(() => useIsHome())
    expect(result.current).toBe(true)
  })

  it('returns false when on any other page', () => {
    const nonHomeRoutes = ['/about-us', '/support', '/nested/route']

    nonHomeRoutes.forEach((route) => {
      mockUsePathname.mockReturnValue(route)
      const { result } = renderHook(() => useIsHome())
      expect(result.current).toBe(false)
      vi.clearAllMocks()
    })
  })
})
