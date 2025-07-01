'use client'

import clsx from 'clsx'
import { useDragStore } from './store/useDragStore'

// TIP: This component contains an ASCII art Easter egg that appears when the user drags the hero card

interface Props {
  className?: string
  children: React.ReactNode
}

export default function Component({ className = '', children }: Props) {
  const { isDragging } = useDragStore()

  return (
    <div className={clsx('relative z-10 w-full max-w-[400px]', className)}>
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
      {children}
    </div>
  )
}
