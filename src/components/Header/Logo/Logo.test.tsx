import { title } from '@/config/metadata'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Component from './Logo'

const text = `${title} ← Go Home`

describe('Logo', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders with correct text', () => {
    render(<Component />)
    const item = screen.getByRole('link', { name: text })
    expect(item.textContent).toBe(text)
  })

  it('has correct href attribute', () => {
    render(<Component />)
    const item = screen.getByRole('link', { name: text })
    expect(item.getAttribute('href')).toBe('/')
  })
})
