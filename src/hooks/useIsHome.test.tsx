import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useIsHome } from './useIsHome'

// Mock Next.js usePathname hook
const mockUsePathname = vi.fn()
vi.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}))

// Test wrapper component to use the hook
function ComponentWithHook() {
  const isHome = useIsHome()
  return <div data-testid='is-home'>{isHome ? 'true' : 'false'}</div>
}

describe('useIsHome', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('returns true when on home page', () => {
    mockUsePathname.mockReturnValue('/')

    render(<ComponentWithHook />)
    const item = screen.getByTestId('is-home')

    expect(item.textContent).toBe('true')
  })

  it('returns false when on any other page', () => {
    const nonHomeRoutes = ['/about-us', '/support', '/nested/route']

    nonHomeRoutes.forEach((route) => {
      mockUsePathname.mockReturnValue(route)

      render(<ComponentWithHook />)
      const item = screen.getByTestId('is-home')

      expect(item.textContent).toBe('false')
      cleanup() // Clean up after each iteration
      vi.clearAllMocks() // Clear mocks to reset state
    })
  })
})
