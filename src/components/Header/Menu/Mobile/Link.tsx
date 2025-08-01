'use client'

import type { Route } from '@/data/routes'
import { useIsActiveLink } from '@/hooks/useIsActiveLink'
import { useScrollStage } from '@/hooks/useScrollStage'
import { focusStyle } from '@/styles/focus'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props
  extends Route,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {}

export default function Component({
  href,
  label,
  className = '',
  ...props
}: Props) {
  const isActive = useIsActiveLink(href)
  const pathname = usePathname()
  const scrollStageFromHook = useScrollStage()
  const scrollStage = pathname === '/' ? scrollStageFromHook : 'full'

  const baseStyles = clsx(
    'text-lg rounded px-1 py-0.5 no-underline transition-all duration-250 select-none',
    focusStyle,
  )

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
        className,
      )}
      aria-label={label}
      title={`Go to ${label}`}
      data-active={isActive ? 'true' : undefined}
      {...props}
    >
      {label}
    </Link>
  )
}
