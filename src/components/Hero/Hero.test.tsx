import { heroAppDescription, heroAppName } from '@/config/hero'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Component from './Hero'

describe('Hero', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders the correct heroAppName as h1', () => {
    render(<Component />)
    const item = screen.getByRole('heading', { level: 1 })

    expect(item).toBeDefined()
    expect(item.textContent).toBe(heroAppName)
  })

  it('renders the correct heroAppDescription as p', () => {
    render(<Component />)
    const item = screen.getByText(heroAppDescription)

    expect(item).toBeDefined()
    expect(item.tagName).toBe('P')
    expect(item.textContent).toBe(heroAppDescription)
  })
})
