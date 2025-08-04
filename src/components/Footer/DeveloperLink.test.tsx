import { devName, devUrl } from '@/config/metadata'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Component from './DeveloperLink'

describe('Footer/DeveloperLink', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders developer name correctly', () => {
    render(<Component />)

    const item = screen.getByText(devName)
    expect(item).toBeDefined()
  })

  it('renders developer url correctly', () => {
    render(<Component />)

    const item = screen.getByRole('link', {
      name: `Visit ${devName}'s website`,
    })

    expect(item.getAttribute('href')).toBe(devUrl)
  })

  it('renders developer link with correct target', () => {
    render(<Component />)

    const item = screen.getByRole('link', {
      name: `Visit ${devName}'s website`,
    })

    expect(item.getAttribute('target')).toBe('_blank')
  })
})
