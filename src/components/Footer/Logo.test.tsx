import { title } from '@/config/metadata'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Component from './Logo'

describe('Footer/Logo', () => {
  it('renders the correct year', () => {
    render(<Component />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText((content) => content.includes(year))).toBeDefined()
  })
  afterEach(() => {
    cleanup()
  })

  it('renders the correct title from metadata', () => {
    render(<Component />)
    expect(screen.getByText(title)).toBeDefined()
  })
})
