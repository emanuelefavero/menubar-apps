'use client'

import type { FooterLink } from '@/data/footerLinks'
import { useIsActiveLink } from '@/hooks/useIsActiveLink'
import { focusStyle } from '@/styles/focus'
import clsx from 'clsx'
import Link from 'next/link'

interface Props
  extends FooterLink,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {}

export default function Component({
  href,
  label,
  children,
  className = '',
  ...props
}: Props) {
  const isActive = useIsActiveLink(href)

  const baseStyles = clsx(
    'h-full px-3 py-2 text-sm font-medium select-none uppercase no-underline transition duration-250 border border-transparent active:scale-[0.97]',
  )

  const activeStyles = clsx(
    'backdrop-blur-[6px] border-dotted border-white bg-white/20 dark:border-white/15 dark:bg-white/[0.025]',
  )

  const hoverStyles = clsx(
    'hover:backdrop-blur-[6px] hover:bg-white/50 dark:hover:bg-white/5',
  )

  return (
    <Link
      href={href}
      className={clsx(
        baseStyles,
        hoverStyles,
        isActive && activeStyles,
        focusStyle,
        className,
      )}
      aria-label={`Go to ${label}`}
      title={`Go to ${label}`}
      data-active={isActive ? 'true' : undefined}
      {...props}
    >
      {children}
    </Link>
  )
}
