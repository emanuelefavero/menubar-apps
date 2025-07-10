import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useIsHome } from './useIsHome'

// Mock Next.js usePathname hook
const mockUsePathname = vi.fn()
vi.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}))

// Test wrapper component to use the hook
function TestComponent() {
  const isHome = useIsHome()
  return <div data-testid='is-home'>{isHome.toString()}</div>
}

describe('useIsHome', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('returns true when on home page', () => {
    mockUsePathname.mockReturnValue('/')

    const { getByTestId } = render(<TestComponent />)
    const result = getByTestId('is-home')

    expect(result.textContent).toBe('true')
  })

  it('returns false when on any other page', () => {
    const nonHomeRoutes = [
      '/about-us',
      '/support',
      '/some-other-page',
      '/nested/route',
    ]

    nonHomeRoutes.forEach((route) => {
      mockUsePathname.mockReturnValue(route)

      const { getByTestId } = render(<TestComponent />)
      const result = getByTestId('is-home')

      expect(result.textContent).toBe('false')
      cleanup() // Clean up after each iteration
    })
  })
})
