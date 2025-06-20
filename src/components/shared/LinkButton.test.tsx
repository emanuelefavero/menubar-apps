import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'
import LinkButton from './LinkButton'

describe('LinkButton', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders with no props', () => {
    render(<LinkButton>Click Me</LinkButton>)

    const linkButton = screen.getByRole('link', { name: 'Click Me' })

    // Ensure the it is rendered
    expect(linkButton).toBeDefined()

    // Ensure it has the correct children
    expect(linkButton.textContent).toBe('Click Me')

    // href defaults to '/'
    expect(linkButton.getAttribute('href')).toBe('/')

    // Default variant is 'primary'
    expect(linkButton.getAttribute('class')).toContain('bg-white/80')

    // Default size is 'none'
    expect(linkButton.getAttribute('class')).not.toMatch(
      /text-base|text-sm|text-lg/,
    )
  })

  test('renders with custom href', () => {
    render(<LinkButton href='/custom'>Custom Link</LinkButton>)

    const linkButton = screen.getByRole('link', { name: 'Custom Link' })
    expect(linkButton.getAttribute('href')).toBe('/custom')
  })
})
