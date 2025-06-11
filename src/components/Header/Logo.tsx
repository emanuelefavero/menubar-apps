'use client'

import { title } from '@/config/metadata'
import { useIsHome } from '@/hooks/useIsHome'

export default function Component() {
  const isHome = useIsHome()
  return (
    <div
      className={`rounded-full px-3 font-semibold select-none ${
        isHome && 'bg-gray-800/10 dark:bg-white/20'
      }`}
    >
      {title}
    </div>
  )
}
