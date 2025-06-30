import clsx from 'clsx'
import { motion } from 'motion/react'

interface Props {
  className?: string
  children: React.ReactNode
}

export default function Component({ className = '', children }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileDrag={{ scale: 0.97, rotate: 2 }}
      drag
      dragSnapToOrigin
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  )
}
