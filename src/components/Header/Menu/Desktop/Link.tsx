'use client'

import { HeaderLink } from '@/data/headerLinks'
import { useScrollStage } from '@/hooks/useScrollStage'
import { focusStyle } from '@/styles/focus'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props
  extends HeaderLink,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {}

export default function Component({
  href,
  label,
  className = '',
  ...props
}: Props) {
  const pathname = usePathname()
  const isActive = pathname === href
  const scrollStageFromHook = useScrollStage()
  const scrollStage = pathname === '/' ? scrollStageFromHook : 'full'

  const baseStyles = clsx(
    scrollStage === 'top'
      ? 'text-gray-700 hover:bg-white/25'
      : scrollStage === 'halfway'
        ? 'text-gray-200 hover:bg-white/10'
        : 'text-(--foreground) hover:bg-white/50 dark:hover:bg-white/10',

    // Default styles
    'rounded-full px-3 py-0.5 border-b-2 border-transparent no-underline select-none transition duration-200 active:scale-[0.97]',
    focusStyle,
  )

  const groupStyles = clsx(
    scrollStage === 'top'
      ? 'group-has-[:hover]:text-gray-700!'
      : scrollStage === 'halfway'
        ? 'group-has-[:hover]:text-gray-200!'
        : 'group-has-[:hover]:text-(--foreground)!',
    'group-has-[:hover]:border-transparent! group-has-[:hover]:bg-transparent group-has-[:hover]:shadow-none group-has-[:hover]:inset-shadow-none',
  )

  const activeStyles = clsx(
    'border-b-2 border-black/15! bg-white/80 text-gray-700! shadow-2xs inset-shadow-xs shadow-black/25 inset-shadow-white hover:border-black/15! hover:bg-white/80 hover:text-gray-700!',
  )

  const activeGroupStyles = clsx(
    'group-has-[:hover]:hover:border-black/15 group-has-[:hover]:hover:bg-white/80 group-has-[:hover]:hover:shadow-2xs group-has-[:hover]:hover:inset-shadow-xs',
  )

  return (
    <Link
      href={href}
      className={clsx(
        baseStyles,
        groupStyles,
        isActive && activeStyles,
        isActive && activeGroupStyles,
        className,
      )}
      aria-label={`Go to ${label}`}
      title={`Go to ${label}`}
      {...props}
    >
      {label}
    </Link>
  )
}
