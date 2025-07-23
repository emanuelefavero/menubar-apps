'use client'

import { title } from '@/config/metadata'
import { useIsHome } from '@/hooks/useIsHome'
import { useScrollStage } from '@/hooks/useScrollStage'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnchorHTMLAttributes } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string
}

export default function Component({ className, ...props }: Props) {
  const isHome = useIsHome()
  const pathname = usePathname()
  const scrollStageFromHook = useScrollStage()
  const scrollStage = pathname === '/' ? scrollStageFromHook : 'full'

  const baseStyles = clsx(
    scrollStage === 'top'
      ? 'text-gray-700'
      : scrollStage === 'halfway'
        ? 'text-gray-200'
        : 'text-(--foreground)',

    // Default styles
    'relative rounded-full px-3 py-0.5 font-semibold border-b-2 border-transparent no-underline select-none transition duration-250 active:scale-[0.97] outline-none ring-0 focus-visible:ring-2 focus-visible:ring-(--primary)',
  )

  const homeStyles =
    'border-b-2 border-black/15! bg-white/80 text-gray-700! shadow-2xs inset-shadow-xs shadow-black/25 inset-shadow-white hover:bg-white/80'

  const nonHomeStyles = clsx(
    scrollStage === 'top'
      ? 'hover:bg-white/25'
      : scrollStage === 'halfway'
        ? 'hover:bg-white/10'
        : 'hover:bg-white/50 dark:hover:bg-white/10',
  )

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

      {/* label */}
      <span className='absolute top-1/2 left-full ml-1.5 inline-block -translate-y-1/2 animate-bounce-x px-0.5 py-0.5 text-xs whitespace-nowrap'>
        ← Go Home
      </span>
    </Link>
  )
}
