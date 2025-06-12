'use client'

import { title } from '@/config/metadata'
import { useIsHome } from '@/hooks/useIsHome'
import Link from 'next/link'

export default function Component() {
  const isHome = useIsHome()
  return (
    <Link
      href='/'
      className={`rounded-full px-3 py-0.5 font-semibold text-gray-700 no-underline select-none hover:bg-white/20 ${
        isHome && 'bg-white/20'
      }`}
    >
      {title}
    </Link>
  )
}
