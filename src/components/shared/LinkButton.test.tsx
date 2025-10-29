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
      'pointer-events-none cursor-not-allowed opacity-50',
    )
  })

  it('renders as <a> tag for external links', () => {
    render(<Component href='https://example.com'>External Link</Component>)

    const item = screen.getByRole('link', { name: 'External Link' })
    expect(item.tagName).toBe('A')
    expect(item.getAttribute('href')).toBe('https://example.com')
  })

  it('renders as <a> tag for protocol-relative links', () => {
    render(<Component href='//example.com'>Protocol Relative</Component>)

    const item = screen.getByRole('link', { name: 'Protocol Relative' })
    expect(item.tagName).toBe('A')
    expect(item.getAttribute('href')).toBe('//example.com')
  })

  it('renders as <a> tag with download attribute', () => {
    render(
      <Component href='/file.txt' download>
        Download File
      </Component>,
    )

    const item = screen.getByRole('link', { name: 'Download File' })
    expect(item.tagName).toBe('A')
    expect(item.getAttribute('download')).toBe('')
  })

  it('renders as <a> tag with download filename', () => {
    render(
      <Component href='/file.txt' download='custom-name.txt'>
        Download File
      </Component>,
    )

    const item = screen.getByRole('link', { name: 'Download File' })
    expect(item.tagName).toBe('A')
    expect(item.getAttribute('download')).toBe('custom-name.txt')
  })

  it('renders as Link component for internal routes', () => {
    render(<Component href='/about'>Internal Link</Component>)

    const item = screen.getByRole('link', { name: 'Internal Link' })
    expect(item.getAttribute('href')).toBe('/about')
    // Link component wraps content, so we verify href is preserved
    expect(item).toBeDefined()
  })
})
