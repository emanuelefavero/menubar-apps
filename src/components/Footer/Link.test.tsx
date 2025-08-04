import { footerLinks } from '@/data/footerLinks'
import { supportLink } from '@/data/supportLink'
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

  // Set expected title based on href type
  const expectedTitle = link.href.startsWith('mailto:')
    ? `Contact ${link.label}` // mailto links
    : `Go to ${link.label}` // other links

  expect(item.getAttribute('title')).toBe(expectedTitle)
}

// * Tests
describe('Footer/Link', () => {
  afterEach(() => {
    cleanup()
  })

  // Test link
  it('renders with correct href, aria-label, and title attributes', () => {
    render(
      <Component href={testLink.href} label={testLink.label}>
        {testLink.label}
      </Component>,
    )

    const item = screen.getByRole('link', { name: testLink.label })
    expectLinkAttributes(item, testLink)
  })

  // Support link
  it('renders support link with correct mailto title', () => {
    render(<Component href={supportLink.href} label={supportLink.label} />)

    const item = screen.getByRole('link', { name: supportLink.label })
    expectLinkAttributes(item, supportLink)
  })

  // Footer links
  footerLinks.forEach((link) => {
    it(`renders footer link for ${link.label}`, () => {
      render(<Component href={link.href} label={link.label} />)

      const item = screen.getByRole('link', { name: link.label })
      expectLinkAttributes(item, link)
    })
  })
})
