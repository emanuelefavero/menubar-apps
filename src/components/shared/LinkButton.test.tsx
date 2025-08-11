import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import type { Size, Theme, Variant } from './LinkButton'
import Component from './LinkButton'

describe('LinkButton', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders with no props', () => {
    render(<Component>Click Me</Component>)

    const item = screen.getByRole('link', { name: 'Click Me' })

    // Ensure the it is rendered
    expect(item).toBeDefined()

    // Ensure it has the correct children
    expect(item.textContent).toBe('Click Me')

    // href defaults to '/'
    expect(item.getAttribute('href')).toBe('/')

    // Default variant is 'primary'
    expect(item.getAttribute('class')).toContain('bg-white/80')

    // Default size is 'none'
    expect(item.getAttribute('class')).not.toMatch(/text-base|text-sm|text-lg/)
  })

  it('renders with custom href', () => {
    render(<Component href='/custom'>Custom Link</Component>)

    const item = screen.getByRole('link', { name: 'Custom Link' })
    expect(item.getAttribute('href')).toBe('/custom')
  })

  it('renders with custom variant', () => {
    const variants: [Variant, string][] = [
      ['primary', 'bg-gray-800 text-white'],
      ['secondary', 'bg-gray-300/10 text-gray-800'],
    ]

    variants.forEach(([variant, className]) => {
      render(<Component variant={variant}>{variant} Link</Component>)

      const item = screen.getByRole('link', { name: `${variant} Link` })
      expect(item.getAttribute('class')).toContain(className)
    })
  })

  it('renders with custom theme', () => {
    const themes: [Theme, string][] = [
      ['light', 'bg-white/80 text-gray-800'],
      ['dark', 'bg-gray-800 text-white'],
      ['default', 'bg-gray-800 text-white'],
    ]

    themes.forEach(([theme, className]) => {
      render(<Component theme={theme}>{theme} Link</Component>)

      const item = screen.getByRole('link', { name: `${theme} Link` })
      expect(item.getAttribute('class')).toContain(className)
    })
  })

  it('renders with custom size', () => {
    const sizes: [Size, string][] = [
      ['none', 'px-3 py-1.5'],
      ['sm', 'text-sm'],
      ['base', 'text-base'],
      ['lg', 'text-lg'],
    ]

    sizes.forEach(([size, className]) => {
      render(<Component size={size}>{size} Link</Component>)

      const item = screen.getByRole('link', { name: `${size} Link` })
      expect(item.getAttribute('class')).toContain(className)
    })
  })

  it('applies additional className', () => {
    render(<Component className='custom-class'>Custom Class Link</Component>)

    const item = screen.getByRole('link', {
      name: 'Custom Class Link',
    })
    expect(item.getAttribute('class')).toContain('custom-class')
  })

  it('applies additional link attributes', () => {
    render(<Component target='_blank'>Link Attribute Link</Component>)

    const item = screen.getByRole('link', { name: 'Link Attribute Link' })
    expect(item.getAttribute('target')).toBe('_blank')
  })

  it('renders with disabled props', () => {
    render(<Component disabled>Disabled Link</Component>)

    const item = screen.getByRole('link', { name: 'Disabled Link' })
    expect(item.getAttribute('aria-disabled')).toBe('true')
    expect(item.getAttribute('tabIndex')).toBe('-1')
    expect(item.getAttribute('class')).toContain(
      'opacity-50 pointer-events-none cursor-not-allowed',
    )
  })
})
