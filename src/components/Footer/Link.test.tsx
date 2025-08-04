import { footerLinks } from '@/data/footerLinks'
import type { Route } from '@/types/route'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Component from './Link'

const testLink: Route = {
  href: '/test-url',
  label: 'Test Link',
}

describe('Footer/Link', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders with correct href, aria-label, and title attributes', () => {
    render(
      <Component href={testLink.href} label={testLink.label}>
        {testLink.label}
      </Component>,
    )

    const link = screen.getByRole('link', { name: /test link/i })
    expect(link.getAttribute('href')).toBe(testLink.href)
    expect(link.getAttribute('aria-label')).toBe(testLink.label)
    expect(link.getAttribute('title')).toBe(`Go to ${testLink.label}`)
  })

  footerLinks.forEach((link) => {
    it(`renders footer link for ${link.label}`, () => {
      render(<Component href={link.href} label={link.label} />)

      const item = screen.getByRole('link', { name: link.label })
      expect(item).toBeDefined()
      expect(item.getAttribute('href')).toBe(link.href)
      expect(item.getAttribute('aria-label')).toBe(link.label)
      expect(item.getAttribute('title')).toBe(`Go to ${link.label}`)
    })
  })
})
