import { act, renderHook, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { useScrollStage } from './useScrollStage'

const setScroll = (y: number, innerHeight = 1000) => {
  Object.defineProperty(window, 'scrollY', { value: y, writable: true })
  Object.defineProperty(window, 'innerHeight', {
    value: innerHeight,
    writable: true,
  })
}

const fireScroll = () => {
  window.dispatchEvent(new Event('scroll'))
}

describe('useScrollStage', () => {
  beforeEach(() => {
    setScroll(0, 1000) // Reset scroll position and innerHeight before each test
  })

  it('should return top initially', () => {
    const { result } = renderHook(() => useScrollStage())
    expect(result.current).toBe('top')
  })

  it('should return top if at the top', async () => {
    const { result } = renderHook(() => useScrollStage())

    act(() => {
      setScroll(0)
      fireScroll()
    })

    await waitFor(() => {
      expect(result.current).toBe('top')
    })
  })

  it('should return halfway if scrolled halfway', async () => {
    const { result } = renderHook(() => useScrollStage())

    act(() => {
      setScroll(500) // 1000 * 0.5 = 500
      fireScroll()
    })

    await waitFor(() => {
      expect(result.current).toBe('halfway')
    })
  })

  it('should return full if scrolled past halfway', async () => {
    const { result } = renderHook(() => useScrollStage())

    act(() => {
      setScroll(1000) // 1000 * 1 = 1000
      fireScroll()
    })

    await waitFor(() => {
      expect(result.current).toBe('full')
    })
  })
})
