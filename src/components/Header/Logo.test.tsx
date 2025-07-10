import { title } from '@/config/metadata'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Component from './Logo'

describe('Logo', () => {
  it('renders with correct text', () => {
    render(<Component />)

    const item = screen.getByRole('link', { name: title })
    expect(item.textContent).toBe(title)
  })
})
