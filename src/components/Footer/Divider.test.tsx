import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Component from './Divider'

describe('Footer/Divider', () => {
  afterEach(() => {
    cleanup()
  })

  it('is hidden on < xs screens', () => {
    render(<Component />)

    const item =
      screen.getByRole('presentation', { hidden: true }) ||
      document.querySelector('span')

    expect(item).toBeDefined()
    expect(item?.className).toContain('hidden')
    expect(item?.className).toContain('xs:inline-block')
  })
})
