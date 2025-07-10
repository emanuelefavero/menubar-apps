import { title } from '@/config/metadata'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Component from './Logo'

describe('Logo', () => {
  test('renders with correct text', () => {
    render(<Component />)

    const logo = screen.getByRole('link', { name: title })
    expect(logo.textContent).toBe(title)
  })
})
