'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface Props {
  href: string
  children: ReactNode
  className?: string
}

export default function Component({ href, children, className = '' }: Props) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`rounded-full px-3 py-1 text-[var(--foreground)] no-underline hover:bg-gray-800/10 dark:hover:bg-white/20 ${
        isActive && 'bg-gray-800/10 dark:bg-white/20'
      } ${className}`}
    >
      {children}
    </Link>
  )
}
