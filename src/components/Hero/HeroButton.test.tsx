import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Component, { type Size, type Variant } from './HeroButton'

describe('HeroButton', () => {
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
      ['primary', 'bg-white/80'],
      ['secondary', 'bg-black/10'],
    ]

    variants.forEach(([variant, className]) => {
      render(<Component variant={variant}>{variant} Link</Component>)

      const item = screen.getByRole('link', { name: `${variant} Link` })
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
})
