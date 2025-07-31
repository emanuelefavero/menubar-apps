import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Component from './Footer'

// Mock usePathname from next/navigation to prevent null errors in tests since we are using the `useIsActiveLink` hook that relies on it
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

// Mock child components to isolate Footer
vi.mock('./Logo', () => ({ default: () => <div data-testid='logo' /> }))
vi.mock('./Divider', () => ({ default: () => <div data-testid='divider' /> }))
vi.mock('./DeveloperLink', () => ({
  default: () => <div data-testid='developer-link' />,
}))

describe('Footer', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders logo correctly', () => {
    render(<Component />)

    const item = screen.getByTestId('logo')
    expect(item).toBeDefined()
  })

  it('renders divider correctly', () => {
    render(<Component />)

    const item = screen.getByTestId('divider')
    expect(item).toBeDefined()
  })

  it('renders developer-link correctly', () => {
    render(<Component />)

    const item = screen.getByTestId('developer-link')
    expect(item).toBeDefined()
  })
})
