'use client'

import { useIsActiveLink } from '@/hooks/useIsActiveLink'
import { focusStyle } from '@/styles/focus'
import clsx from 'clsx'
import Link from 'next/link'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  className?: string
}

export default function Component({
  href,
  children,
  className = '',
  ...props
}: Props) {
  const isActive = useIsActiveLink(href)

  const baseStyles = clsx(
    'h-full px-3 py-2 text-sm font-medium uppercase no-underline transition duration-250 backdrop-blur-[6px] border border-transparent active:scale-[0.97]',
  )

  const activeStyles = clsx(
    'border-dotted border-white bg-white/20 dark:border-white/15 dark:bg-white/[0.025]',
  )

  const hoverStyles = clsx('hover:bg-white/50 dark:hover:bg-white/5')

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
      data-active={isActive ? 'true' : undefined}
      {...props}
    >
      {children}
    </Link>
  )
}
