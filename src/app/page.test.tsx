import { heroAppName } from '@/config/hero'
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Page from './page'

test('renders a heading', () => {
  render(<Page />)

  const heading = screen.getByRole('heading', {
    name: new RegExp(heroAppName, 'i'),
  })

  expect(heading).toBeDefined()
})
