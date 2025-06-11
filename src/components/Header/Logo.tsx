'use client'

import { title } from '@/config/metadata'
import { useIsHome } from '@/hooks/useIsHome'
import Link from 'next/link'

export default function Component() {
  const isHome = useIsHome()
  return (
    <Link
      href='/'
      className={`rounded-full px-3 py-0.5 font-semibold no-underline select-none active:bg-gray-800/10 dark:active:bg-white/20 ${
        isHome && 'bg-gray-800/10 dark:bg-white/20'
      }`}
    >
      {title}
    </Link>
  )
}
