import { heroAppName } from '@/config/hero'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Component from './Hero'

describe('Hero', () => {
  it('renders the correct heroAppName as h1', () => {
    render(<Component />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeDefined()
    expect(heading.textContent).toBe(heroAppName)
  })
})
