import { focusStyle } from '@/styles/focus'
import clsx from 'clsx'
import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

export type Variant = 'primary' | 'secondary'
export type Size = 'none' | 'sm' | 'base' | 'lg'
export type Theme = 'light' | 'dark' | 'default'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string
  variant?: Variant
  size?: Size
  theme?: Theme
  children: React.ReactNode
  className?: string
}

export default function Component({
  href = '/',
  variant = 'primary',
  size = 'none',
  theme = 'default',
  children,
  className = '',
  ...props
}: Props) {
  const baseStyles = clsx(
    'inline-block rounded-full font-medium no-underline transition duration-250 active:scale-[0.97] select-none backdrop-blur-md',
    focusStyle,
  )

  const sizeStyles = {
    none: 'px-3 py-1.5',
    sm: 'px-3 py-1.5 text-sm',
    base: 'px-3 py-1.5 text-base',
    lg: 'w-full px-4 py-2 text-lg',
  }

  const variantStyles = {
    // Primary variant
    primary: clsx('border-b-2 shadow-2xs inset-shadow-sm', {
      // Light theme
      'bg-white/80 text-gray-800 border-black/15 inset-shadow-white shadow-black/25 hover:bg-white':
        theme === 'light',

      // Dark theme
      'bg-gray-800 text-white border-black/50 inset-shadow-gray-500 shadow-black/15 hover:bg-gray-700':
        theme === 'dark',

      // Default theme (system/user)
      'bg-gray-800 text-white border-black/50 inset-shadow-gray-500 shadow-black/15 hover:bg-gray-700 dark:bg-white/80 dark:text-gray-800 dark:border-black/15 dark:inset-shadow-white dark:shadow-black/25 hover:dark:bg-white':
        theme === 'default',
    }),

    // Secondary variant
    secondary: clsx('border-b', {
      // Light theme
      'border-black/20 bg-gray-300/10 text-gray-800 shadow-white/60 inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.2)] hover:bg-gray-400/10':
        theme === 'light',

      // Dark theme
      'border-white/20 bg-black/10 text-white inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.6)] hover:bg-gray-500/5':
        theme === 'dark',

      // Default theme (system/user)
      'border-black/20 bg-gray-300/10 text-gray-800 inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.2)] hover:bg-gray-400/10 dark:border-white/20 dark:bg-black/10 dark:text-white dark:inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.6)] dark:hover:bg-gray-500/5':
        theme === 'default',
    }),
  }

  return (
    <Link
      href={href}
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
