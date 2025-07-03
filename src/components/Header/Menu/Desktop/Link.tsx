'use client'

import { useScrolledHalfway } from '@/hooks/useScrolledHalfway'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnchorHTMLAttributes } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  className?: string
}

export default function Component({
  href,
  children,
  className = '',
  ...props
}: Props) {
  const pathname = usePathname()
  const isActive = pathname === href
  const scrolledHalfway = useScrolledHalfway()

  const baseStyles = clsx(
    scrolledHalfway ? 'text-white' : 'text-gray-700',
    'rounded-full px-3 py-0.5 border-b-2 border-transparent no-underline select-none hover:bg-white/30 transition duration-250',
  )

  const groupStyles = clsx(
    scrolledHalfway
      ? 'group-has-[:hover]:text-white!'
      : 'group-has-[:hover]:text-gray-700!',
    'group-has-[:hover]:border-transparent! group-has-[:hover]:bg-transparent group-has-[:hover]:shadow-none group-has-[:hover]:inset-shadow-none',
  )

  const activeStyles =
    'border-b-2 border-black/15! bg-white/80 text-gray-700! shadow-2xs inset-shadow-xs shadow-black/25 inset-shadow-white hover:border-black/15! hover:bg-white/80'

  const activeGroupStyles =
    'group-has-[:hover]:hover:border-black/15 group-has-[:hover]:hover:bg-white/80 group-has-[:hover]:hover:shadow-2xs group-has-[:hover]:hover:inset-shadow-xs'

  return (
    <Link
      href={href}
      className={clsx(
        baseStyles,
        groupStyles,
        isActive && activeStyles,
        isActive && activeGroupStyles,
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
