import Link from 'next/link'
import { ReactNode } from 'react'
import './LinkButton.css'

interface Props {
  children?: ReactNode
  className?: string
}

export default function Component({ children, className }: Props) {
  return (
    <Link
      href='/'
      className={`rounded-full border border-black/25 bg-(--primary) px-3 py-1.5 text-white no-underline shadow-(--button-inset-shadow) transition-all duration-200 select-none text-shadow-(--button-text-shadow) hover:bg-(--primary-hover) active:scale-95 ${className}`}
    >
      {children}
    </Link>
  )
}
