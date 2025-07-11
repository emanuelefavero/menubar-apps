import { act, renderHook, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { useViewportSize } from './useViewportSize'

const setViewport = (width: number, height: number) => {
  Object.defineProperty(window, 'innerWidth', { value: width, writable: true })
  Object.defineProperty(window, 'innerHeight', {
    value: height,
    writable: true,
  })
}

describe('useViewportSize', () => {
  beforeEach(() => {
    setViewport(0, 0)
  })

  it('should return 0 width and height initially', () => {
    const { result } = renderHook(() => useViewportSize())
    expect(result.current).toEqual({ width: 0, height: 0 })
  })

  it('should update width and height correctly on resize', async () => {
    const { result } = renderHook(() => useViewportSize())

    act(() => {
      setViewport(1920, 1080)
      window.dispatchEvent(new Event('resize'))
    })

    await waitFor(() => {
      expect(result.current).toEqual({ width: 1920, height: 1080 })
    })
  })
})
