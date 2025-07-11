import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import React, { useRef } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useOnClickOutside } from './useOnClickOutside'

// Test component with useOnClickOutside hook
function ComponentWithHook({ handler }: { handler: ClickHandler }) {
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside([ref as HTMLElementRef], handler)

  return (
    <div>
      <div data-testid='inside' ref={ref}>
        Inside Element
      </div>
      <div data-testid='outside'>Outside Element</div>
    </div>
  )
}

describe('useOnClickOutside', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('calls handler when clicking outside the ref element', () => {
    const handler = vi.fn()
    render(<ComponentWithHook handler={handler} />)

    const outsideElement = screen.getByTestId('outside')
    fireEvent.mouseDown(outsideElement)

    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('does not call handler when clicking inside the ref element', () => {
    const handler = vi.fn()
    render(<ComponentWithHook handler={handler} />)

    const insideElement = screen.getByTestId('inside')
    fireEvent.mouseDown(insideElement)

    expect(handler).not.toHaveBeenCalled()
  })

  it('calls handler when touching outside the ref element', () => {
    const handler = vi.fn()
    render(<ComponentWithHook handler={handler} />)

    const outsideElement = screen.getByTestId('outside')
    fireEvent.touchStart(outsideElement)

    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('does not call handler when touching inside the ref element', () => {
    const handler = vi.fn()
    render(<ComponentWithHook handler={handler} />)

    const insideElement = screen.getByTestId('inside')
    fireEvent.touchStart(insideElement)

    expect(handler).not.toHaveBeenCalled()
  })
})
