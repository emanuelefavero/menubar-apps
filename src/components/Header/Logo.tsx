'use client'

import { title } from '@/config/metadata'
import { useIsHome } from '@/hooks/useIsHome'
import Link from 'next/link'

export default function Component() {
  const isHome = useIsHome()
  return (
    <Link
      href='/'
      className={`rounded-full px-3 py-0.5 font-semibold text-gray-700 no-underline select-none ${
        isHome
          ? 'bg-white/80 shadow-2xs inset-shadow-xs shadow-black/25 inset-shadow-white hover:bg-white/80'
          : 'hover:bg-white/30'
      }`}
    >
      {title}
    </Link>
  )
}
