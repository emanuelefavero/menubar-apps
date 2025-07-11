import { act, renderHook, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { useScrollPosition } from './useScrollPosition'

const setScrollPosition = (x: number, y: number) => {
  Object.defineProperty(window, 'scrollX', { value: x, writable: true })
  Object.defineProperty(window, 'scrollY', { value: y, writable: true })
}

const fireScroll = () => {
  window.dispatchEvent(new Event('scroll'))
}

describe('useScrollPosition', () => {
  beforeEach(() => {
    setScrollPosition(0, 0) // Reset scroll position before each test
  })

  it('should return initial scroll position', () => {
    const { result } = renderHook(() => useScrollPosition())
    expect(result.current).toEqual({ scrollX: 0, scrollY: 0 })
  })

  it('should update scroll position on scroll event', async () => {
    const { result } = renderHook(() => useScrollPosition())

    act(() => {
      setScrollPosition(50, 100)
      fireScroll()
    })

    await waitFor(() => {
      expect(result.current).toEqual({ scrollX: 50, scrollY: 100 })
    })
  })
})
