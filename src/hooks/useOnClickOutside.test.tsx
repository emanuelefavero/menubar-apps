import { cleanup, render, screen } from '@testing-library/react'
import React, { useRef } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useOnClickOutside } from './useOnClickOutside'

// TODO use testing-library/react fire event instead of dispatchEvent

// Test component to use the hook
function ComponentWithHook({
  handler,
}: {
  handler: (e: MouseEvent | TouchEvent) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside([ref as React.RefObject<HTMLElement>], handler)

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
    outsideElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))

    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('does not call handler when clicking inside the ref element', () => {
    const handler = vi.fn()
    render(<ComponentWithHook handler={handler} />)

    const insideElement = screen.getByTestId('inside')
    insideElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))

    expect(handler).not.toHaveBeenCalled()
  })
})
