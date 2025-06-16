import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  className?: string
}

export default function Component({ children, className }: Props) {
  return (
    <Link
      href='/'
      className={`rounded-full border border-black/25 bg-(--primary) px-3 py-1.5 text-white no-underline inset-shadow-[1px_2px_1px_0_rgba(220,226,232,0.23)] transition-all duration-200 select-none text-shadow-(--text-shadow-sm) hover:bg-(--primary-hover) active:scale-95 ${className}`}
    >
      {children}
    </Link>
  )
}
