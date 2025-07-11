import { act, renderHook, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { useScrollPosition } from './useScrollPosition'

describe('useScrollPosition', () => {
  const setScrollX = (value: number) => {
    Object.defineProperty(window, 'scrollX', { value, writable: true })
  }

  const setScrollY = (value: number) => {
    Object.defineProperty(window, 'scrollY', { value, writable: true })
  }

  const fireScroll = () => {
    window.dispatchEvent(new Event('scroll'))
  }

  beforeEach(() => {
    // Reset scroll positions before each test
    setScrollX(0)
    setScrollY(0)
  })

  it('should return initial scroll position', () => {
    const { result } = renderHook(() => useScrollPosition())
    expect(result.current).toEqual({ scrollX: 0, scrollY: 0 })
  })

  it('should update scroll position on scroll event', async () => {
    const { result } = renderHook(() => useScrollPosition())

    act(() => {
      setScrollY(100)
      setScrollX(50)
      fireScroll()
    })

    await waitFor(() => {
      expect(result.current).toEqual({ scrollX: 50, scrollY: 100 })
    })
  })
})
