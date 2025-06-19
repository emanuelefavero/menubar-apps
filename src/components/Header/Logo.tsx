'use client'

import { title } from '@/config/metadata'
import { useIsHome } from '@/hooks/useIsHome'
import clsx from 'clsx'
import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string
}

export default function Component({ className, ...props }: Props) {
  const isHome = useIsHome()

  const baseStyles =
    'rounded-full px-3 py-0.5 font-semibold text-gray-700 no-underline select-none transition duration-250'

  const homeStyles =
    'border-b-2 border-black/15 bg-white/80 shadow-2xs inset-shadow-xs shadow-black/25 inset-shadow-white hover:bg-white/80'

  const nonHomeStyles = 'hover:bg-white/30'

  return (
    <Link
      href='/'
      className={clsx(
        baseStyles,
        isHome ? homeStyles : nonHomeStyles,
        className,
      )}
      {...props}
    >
      {title}
    </Link>
  )
}
