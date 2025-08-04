import { footerLinks } from '@/data/footerLinks'
import type { Route } from '@/types/route'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Component from './Link'

const testLink: Route = {
  href: '/test-url',
  label: 'Test Link',
}

// * Utils
function expectLinkAttributes(item: HTMLElement, link: Route) {
  expect(item.getAttribute('href')).toBe(link.href)
  expect(item.getAttribute('aria-label')).toBe(link.label)
  expect(item.getAttribute('title')).toBe(`Go to ${link.label}`)
}

// * Tests
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

    const item = screen.getByRole('link', { name: testLink.label })
    expectLinkAttributes(item, testLink)
  })

  footerLinks.forEach((link) => {
    it(`renders footer link for ${link.label}`, () => {
      render(<Component href={link.href} label={link.label} />)

      const item = screen.getByRole('link', { name: link.label })
      expectLinkAttributes(item, link)
    })
  })
})
