import { title } from '@/config/metadata'
import { render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, it } from 'vitest'
import Component from './Logo'

describe('Logo', () => {
  beforeAll(() => {
    render(<Component />)
  })

  it('renders with correct text', () => {
    const item = screen.getByRole('link', { name: title })
    expect(item.textContent).toBe(title)
  })

  it('has correct href attribute', () => {
    const item = screen.getByRole('link', { name: title })
    expect(item.getAttribute('href')).toBe('/')
  })
})
