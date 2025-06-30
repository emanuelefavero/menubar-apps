'use client'

import DraggableSnapBack from '@/components/motion/DraggableSnapBack'
import clsx from 'clsx'
import { useState } from 'react'

interface Props {
  className?: string
  children: React.ReactNode
}

// TIP: This component contains an ASCII art Easter egg that appears when the user drags the DraggableSnapBack component

export default function Component({ className = '', children }: Props) {
  const [isDragging, setIsDragging] = useState(false)

  return (
    <div className={clsx('relative z-10 w-full max-w-[400px]', className)}>
      {/* ASCII Art Easter Egg */}
      <div
        className={clsx(
          'pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-500',
          isDragging ? 'opacity-100' : 'opacity-20',
        )}
        style={{
          zIndex: 0,
          fontFamily: 'monospace',
          whiteSpace: 'pre',
          fontSize: 14,
        }}
      >
        {`
  (\\_/)
  ( •_•)
 / >🍪   You found the bunny!
        `}
      </div>
      <DraggableSnapBack
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        {children}
      </DraggableSnapBack>
    </div>
  )
}
