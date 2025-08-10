'use client'

import { cn } from '@/lib/utils'
import { HTMLMotionProps, motion } from 'motion/react'

interface Props extends HTMLMotionProps<'div'> {
  className?: string
  parentClassName?: string
  children: React.ReactNode
}

export default function Component({
  className = '',
  children,
  ...props
}: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileDrag={{ scale: 0.97, rotate: 2 }}
      drag
      dragSnapToOrigin
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
      transition={{ type: 'spring', stiffness: 600, damping: 20 }}
      className={cn(className, 'relative')}
      style={{ zIndex: 1 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
