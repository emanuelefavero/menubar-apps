import { act, renderHook, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { useScrollDirection } from './useScrollDirection'

describe('useScrollDirection', () => {
  beforeEach(() => {
    window.scrollY = 0 // Reset scroll position before each test
  })

  it('should return true by default', () => {
    const { result } = renderHook(() => useScrollDirection())
    expect(result.current).toBe(true)
  })

  it('should return true when scrolling up', async () => {
    const { result } = renderHook(() => useScrollDirection())

    // Scroll down first
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    // Scroll up
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 50, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    await waitFor(() => {
      expect(result.current).toBe(true)
    })
  })

  it('should return false when scrolling down', async () => {
    const { result } = renderHook(() => useScrollDirection())

    // Scroll down
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    await waitFor(() => {
      expect(result.current).toBe(false)
    })
  })
})
