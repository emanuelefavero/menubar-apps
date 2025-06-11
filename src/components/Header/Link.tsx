import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  href: string
  children: ReactNode
  className?: string
}

export default function Component({ href, children, className = '' }: Props) {
  return (
    <Link
      href={href}
      className={`text-[var(--foreground)] no-underline hover:underline ${className}`}
    >
      {children}
    </Link>
  )
}
