import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useIsActiveLink } from './useIsActiveLink'

// Mock Next.js usePathname hook
const mockUsePathname = vi.fn()
vi.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}))

// Test wrapper component to use the hook
function ComponentWithHook({ href }: { href: string }) {
  const isActive = useIsActiveLink(href)
  return <div data-testid='is-active'>{isActive ? 'true' : 'false'}</div>
}

describe('useIsActiveLink', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('returns true when url matches the href', () => {
    mockUsePathname.mockReturnValue('/about') // Simulate the current URL

    render(<ComponentWithHook href='/about' />) // href is '/about'
    const item = screen.getByTestId('is-active')

    expect(item.textContent).toBe('true')
  })

  it('returns false when url does not match the href', () => {
    const nonMatchingRoutes = ['/about-us', '/support', '/nested/route']

    nonMatchingRoutes.forEach((route) => {
      mockUsePathname.mockReturnValue(route)

      render(<ComponentWithHook href='/about' />)
      const item = screen.getByTestId('is-active')

      expect(item.textContent).toBe('false')
      cleanup() // Clean up after each iteration
      vi.clearAllMocks() // Clear mocks to reset state
    })
  })
})
