import { heroAppDescription, heroAppName } from '@/config/hero'
import { render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, it } from 'vitest'
import Component from './Hero'

describe('Hero', () => {
  beforeAll(() => {
    render(<Component />)
  })

  it('renders the correct heroAppName as h1', () => {
    const item = screen.getByRole('heading', { level: 1 })

    expect(item).toBeDefined()
    expect(item.textContent).toBe(heroAppName)
  })

  it('renders the correct heroAppDescription as p', () => {
    const item = screen.getByText(heroAppDescription)

    expect(item).toBeDefined()
    expect(item.tagName).toBe('P')
    expect(item.textContent).toBe(heroAppDescription)
  })
})
