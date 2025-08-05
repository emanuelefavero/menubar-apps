import { heroAppName } from '@/config/hero'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Page from './page'

describe('Homepage', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders a heading', () => {
    render(<Page />)

    const item = screen.getByRole('heading', {
      level: 1,
      name: new RegExp(heroAppName, 'i'),
    })

    expect(item).toBeDefined()
  })
})
