import { ReactNode } from 'react'
import './Card.css'

interface Props {
  className?: string
  children: ReactNode
}

export default function Component({ className = '', children }: Props) {
  return (
    <div
      className={`card relative flex min-h-[480px] w-full max-w-[440px] items-center justify-center rounded-[2.5rem] bg-(--card-background) text-center text-white shadow-(--card-shadow) backdrop-blur-[6px] select-none ${className}`}
    >
      {children}
    </div>
  )
}
