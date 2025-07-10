import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { useScrollDirection } from './useScrollDirection'

// Test component to use the hook
function ComponentWithHook() {
  const isScrollingUp = useScrollDirection()

  return (
    <div>
      <div data-testid='scroll-direction'>
        {isScrollingUp ? 'Scrolling Up' : 'Scrolling Down'}
      </div>
    </div>
  )
}

describe('useScrollDirection', () => {
  afterEach(() => {
    cleanup()
    // vi.clearAllMocks()
    // vi.restoreAllMocks()
  })

  it('should return true (scrolling up) by default', () => {
    render(<ComponentWithHook />)
    expect(screen.getByTestId('scroll-direction').textContent).toBe(
      'Scrolling Up',
    )
  })
})
