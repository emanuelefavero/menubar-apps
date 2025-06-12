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
      className={`rounded-full px-3 py-1 text-gray-700 no-underline hover:bg-white/20 ${
        isActive && 'bg-white/20'
      } group-has-[:hover]:bg-transparent ${className}`}
    >
      {children}
    </Link>
  )
}
