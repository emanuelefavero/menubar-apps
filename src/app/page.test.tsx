import { heroAppName } from '@/config/hero'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Page from './page'

describe('Homepage', () => {
  it('renders a heading', () => {
    render(<Page />)

    const item = screen.getByRole('heading', {
      level: 1,
      name: new RegExp(heroAppName, 'i'),
    })

    expect(item).toBeDefined()
  })
})
