import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import LinkButton from './LinkButton'

test('renders LinkButton with no props', () => {
  render(<LinkButton>Click Me</LinkButton>)

  const linkButton = screen.getByRole('link', { name: 'Click Me' })

  // href defaults to '/'
  expect(linkButton.getAttribute('href')).toBe('/')

  // Default variant is 'primary'
  expect(linkButton.getAttribute('class')).toContain('bg-white/80')

  // Default size is 'none'
  expect(linkButton.getAttribute('class')).not.toMatch(
    /text-base|text-sm|text-lg/,
  )
})
