'use client'

import type { HeaderLink } from '@/data/headerLinks'
import { useIsActiveLink } from '@/hooks/useIsActiveLink'
import { useScrollStage } from '@/hooks/useScrollStage'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props extends HeaderLink {
  onClick?: () => void
}

export default function Component({ href, label, onClick }: Props) {
  const isActive = useIsActiveLink(href)
  const pathname = usePathname()
  const scrollStageFromHook = useScrollStage()
  const scrollStage = pathname === '/' ? scrollStageFromHook : 'full'

  const baseStyles =
    'text-lg no-underline transition-all duration-250 select-none'

  const linkColor = clsx(
    scrollStage === 'top'
      ? 'text-gray-700 hover:text-black'
      : scrollStage === 'halfway'
        ? 'text-gray-200 hover:text-white'
        : 'text-(--foreground) hover:text-black dark:hover:text-white',
  )

  const activeLinkColor = clsx(
    scrollStage === 'top'
      ? 'text-black'
      : scrollStage === 'halfway'
        ? 'text-white'
        : 'text-black dark:text-white',
  )

  return (
    <Link
      href={href}
      className={clsx(
        baseStyles,
        isActive ? 'font-bold' : 'font-medium',
        isActive ? activeLinkColor : linkColor,
      )}
      onClick={onClick} // Close menu on link click
    >
      {label}
    </Link>
  )
}
