'use client'

import { useIsActiveLink } from '@/hooks/useIsActiveLink'
import { useScrollStage } from '@/hooks/useScrollStage'
import { cn } from '@/lib/utils'
import { focusStyle } from '@/styles/focus'
import type { Route } from '@/types/route'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = React.ComponentPropsWithRef<typeof Link> & Route

export default function Component({ href, label, className, ...props }: Props) {
  const isActive = useIsActiveLink(href)
  const pathname = usePathname()
  const scrollStageFromHook = useScrollStage()
  const scrollStage = pathname === '/' ? scrollStageFromHook : 'full'

  const baseStyles = cn(
    'text-lg rounded px-1 py-0.5 no-underline transition-all duration-250 select-none',
    focusStyle,
  )

  const linkColor = cn(
    scrollStage === 'top'
      ? 'text-gray-700 hover:text-black'
      : scrollStage === 'halfway'
        ? 'text-gray-200 hover:text-white'
        : 'text-(--foreground) hover:text-black dark:hover:text-white',
  )

  const activeLinkColor = cn(
    scrollStage === 'top'
      ? 'text-black'
      : scrollStage === 'halfway'
        ? 'text-white'
        : 'text-black dark:text-white',
  )

  return (
    <Link
      href={href}
      className={cn(
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
