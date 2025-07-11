import { act, renderHook, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { useScrollDirection } from './useScrollDirection'

const setScrollY = (value: number) => {
  Object.defineProperty(window, 'scrollY', { value, writable: true })
}

const fireScroll = () => {
  window.dispatchEvent(new Event('scroll'))
}

describe('useScrollDirection', () => {
  beforeEach(() => {
    setScrollY(0) // Reset scrollY before each test
  })

  it('should return true by default', () => {
    const { result } = renderHook(() => useScrollDirection())
    expect(result.current).toBe(true)
  })

  it('should return true when scrolling up', async () => {
    const { result } = renderHook(() => useScrollDirection())

    // Scroll down first
    act(() => {
      setScrollY(100)
      fireScroll()
    })

    // Scroll up
    act(() => {
      setScrollY(50)
      fireScroll()
    })

    await waitFor(() => {
      expect(result.current).toBe(true)
    })
  })

  it('should return false when scrolling down', async () => {
    const { result } = renderHook(() => useScrollDirection())

    // Scroll down
    act(() => {
      setScrollY(100)
      fireScroll()
    })

    await waitFor(() => {
      expect(result.current).toBe(false)
    })
  })
})
