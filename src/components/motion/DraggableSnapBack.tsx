'use client'

import clsx from 'clsx'
import { motion } from 'motion/react'
import { useState } from 'react'

interface Props {
  className?: string
  parentClassName?: string
  children: React.ReactNode
}

export default function Component({
  className = '',
  parentClassName = '',
  children,
}: Props) {
  const [isDragging, setIsDragging] = useState(false)

  return (
    <div className={clsx('relative', parentClassName)}>
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
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileDrag={{ scale: 0.97, rotate: 2 }}
        drag
        dragSnapToOrigin
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
        transition={{ type: 'spring', stiffness: 600, damping: 20 }}
        className={clsx(className, 'relative')}
        style={{ zIndex: 1 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        {children}
      </motion.div>
    </div>
  )
}
