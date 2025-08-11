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
  const pathname = usePathname()
  const isActive = useIsActiveLink(href)
  const scrollStageFromHook = useScrollStage()
  const scrollStage = pathname === '/' ? scrollStageFromHook : 'full'

  const baseStyles = cn(
    scrollStage === 'top'
      ? 'text-gray-700 hover:bg-white/25'
      : scrollStage === 'halfway'
        ? 'text-gray-200 hover:bg-white/10'
        : 'text-(--foreground) hover:bg-white/50 dark:hover:bg-white/10',

    // Default styles
    'rounded-full px-3 py-0.5 border-b-2 border-transparent no-underline select-none transition duration-200 active:scale-[0.97]',
    focusStyle,
  )

  const groupStyles = cn(
    scrollStage === 'top'
      ? 'group-has-[:hover]:text-gray-700!'
      : scrollStage === 'halfway'
        ? 'group-has-[:hover]:text-gray-200!'
        : 'group-has-[:hover]:text-(--foreground)!',
    'group-has-[:hover]:border-transparent! group-has-[:hover]:bg-transparent group-has-[:hover]:shadow-none group-has-[:hover]:inset-shadow-none',
  )

  const activeStyles = cn(
    'border-b-2 border-black/15! bg-white/80 text-gray-700! shadow-2xs inset-shadow-xs shadow-black/25 inset-shadow-white hover:border-black/15! hover:bg-white/80 hover:text-gray-700!',
  )

  const activeGroupStyles = cn(
    'group-has-[:hover]:hover:border-black/15 group-has-[:hover]:hover:bg-white/80 group-has-[:hover]:hover:shadow-2xs group-has-[:hover]:hover:inset-shadow-xs',
  )

  return (
    <Link
      href={href}
      className={cn(
        baseStyles,
        groupStyles,
        isActive && activeStyles,
        isActive && activeGroupStyles,
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
