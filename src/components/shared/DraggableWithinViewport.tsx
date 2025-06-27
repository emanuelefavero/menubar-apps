'use client'

import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'

export function useDraggableWithinViewport() {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [bounds, setBounds] = useState({ minX: 0, maxX: 0, minY: 0, maxY: 0 })
  const startPos = useRef({ x: 0, y: 0 })
  const lastOffset = useRef({ x: 0, y: 0 })
  const nodeRef = useRef<HTMLDivElement>(null)

  // Calculate bounds so the node stays fully in viewport
  const updateBounds = useCallback(() => {
    if (!nodeRef.current) return
    const rect = nodeRef.current.getBoundingClientRect()
    const vw = window.innerWidth
    const vh = window.innerHeight
    setBounds({
      minX: -(rect.left - 0),
      maxX: vw - rect.right,
      minY: -(rect.top - 0),
      maxY: vh - rect.bottom,
    })
  }, [])

  useLayoutEffect(() => {
    updateBounds()
    window.addEventListener('resize', updateBounds)
    return () => window.removeEventListener('resize', updateBounds)
  }, [updateBounds])

  // Clamp value between min and max
  const clamp = (v: number, min: number, max: number) =>
    Math.max(min, Math.min(max, v))

  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setDragging(true)
    const point = 'touches' in e ? e.touches[0] : e
    startPos.current = { x: point.clientX, y: point.clientY }
    lastOffset.current = { ...offset }
    document.body.style.userSelect = 'none'
    updateBounds()
  }

  const onDragMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!dragging) return
      let clientX: number, clientY: number
      if (e instanceof TouchEvent && e.touches.length > 0) {
        clientX = e.touches[0].clientX
        clientY = e.touches[0].clientY
      } else if (e instanceof MouseEvent) {
        clientX = e.clientX
        clientY = e.clientY
      } else {
        return
      }
      const dx = clamp(
        clientX - startPos.current.x + lastOffset.current.x,
        bounds.minX,
        bounds.maxX,
      )
      const dy = clamp(
        clientY - startPos.current.y + lastOffset.current.y,
        bounds.minY,
        bounds.maxY,
      )
      setOffset({ x: dx, y: dy })
    },
    [dragging, bounds],
  )

  const onDragEnd = useCallback(() => {
    setDragging(false)
    setOffset({ x: 0, y: 0 })
    document.body.style.userSelect = ''
  }, [])

  React.useEffect(() => {
    if (!dragging) return
    const move = (e: MouseEvent | TouchEvent) => onDragMove(e)
    const up = () => onDragEnd()
    window.addEventListener('mousemove', move)
    window.addEventListener('touchmove', move)
    window.addEventListener('mouseup', up)
    window.addEventListener('touchend', up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('touchmove', move)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('touchend', up)
    }
  }, [dragging, onDragMove, onDragEnd])

  const draggableProps = {
    ref: nodeRef,
    style: {
      transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      transition: dragging
        ? 'none'
        : 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
    },
    onMouseDown: onDragStart,
    onTouchStart: onDragStart,
    className: 'cursor-grab select-none active:cursor-grabbing',
  }

  return draggableProps
}

export const DraggableWithinViewport: React.FC<{
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}> = ({ children, className = '', style = {} }) => {
  const draggableProps = useDraggableWithinViewport()
  return (
    <div
      {...draggableProps}
      className={
        className
          ? `${draggableProps.className} ${className}`
          : draggableProps.className
      }
      style={{ ...draggableProps.style, ...style }}
    >
      {children}
    </div>
  )
}
