import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'
import LinkButton, { type Size, type Variant } from './LinkButton'

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

  test('renders with custom variant', () => {
    const variants: [Variant, string][] = [
      ['primary', 'bg-white/80'],
      ['secondary', 'bg-black/10'],
    ]

    variants.forEach(([variant, className]) => {
      render(<LinkButton variant={variant}>{variant} Link</LinkButton>)

      const linkButton = screen.getByRole('link', { name: `${variant} Link` })
      expect(linkButton.getAttribute('class')).toContain(className)
    })
  })

  test('renders with custom size', () => {
    const sizes: [Size, string][] = [
      ['none', 'px-3 py-1.5'],
      ['sm', 'text-sm'],
      ['base', 'text-base'],
      ['lg', 'text-lg'],
    ]

    sizes.forEach(([size, className]) => {
      render(<LinkButton size={size}>{size} Link</LinkButton>)

      const linkButton = screen.getByRole('link', { name: `${size} Link` })
      expect(linkButton.getAttribute('class')).toContain(className)
    })
  })

  test('applies additional className', () => {
    render(<LinkButton className='custom-class'>Custom Class Link</LinkButton>)

    const linkButton = screen.getByRole('link', {
      name: 'Custom Class Link',
    })
    expect(linkButton.getAttribute('class')).toContain('custom-class')
  })

  test('applies additional link attributes', () => {
    render(<LinkButton target='_blank'>Link Attribute Link</LinkButton>)

    const linkButton = screen.getByRole('link', { name: 'Link Attribute Link' })
    expect(linkButton.getAttribute('target')).toBe('_blank')
  })
})
