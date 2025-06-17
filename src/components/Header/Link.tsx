'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  href: string
  children: React.ReactNode
  className?: string
}

export default function Component({ href, children, className = '' }: Props) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`rounded-full px-3 py-1 text-gray-700 no-underline select-none hover:bg-white/30 ${isActive && 'bg-white/80 shadow-2xs inset-shadow-xs shadow-black/25 inset-shadow-white hover:bg-white/80'} group-has-[:hover]:bg-transparent group-has-[:hover]:shadow-none group-has-[:hover]:inset-shadow-none ${isActive && 'group-has-[:hover]:hover:bg-white/80 group-has-[:hover]:hover:shadow-2xs group-has-[:hover]:hover:inset-shadow-xs'} ${className} `}
    >
      {children}
    </Link>
  )
}
