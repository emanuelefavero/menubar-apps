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
  const baseStyles =
    'inline-block rounded-full font-medium no-underline transition duration-250 active:scale-[0.97] select-none backdrop-blur-md'

  const sizeStyles = {
    none: 'px-3 py-1.5',
    sm: 'px-3 py-1.5 text-sm',
    base: 'px-3 py-1.5 text-base',
    lg: 'w-full px-4 py-2 text-lg',
  }

  const variantStyles = {
    primary: clsx(
      'border-b-2 border-black/15 shadow-2xs inset-shadow-sm shadow-black/25 inset-shadow-white',
      {
        // Light theme
        'bg-white/80 text-gray-800 hover:bg-white': theme === 'light',
        // Dark theme
        'bg-gray-800 text-white/80 hover:bg-gray-800': theme === 'dark',
        // Default theme (system/user)
        'bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-white/80 hover:bg-white dark:hover:bg-gray-800':
          theme === 'default',
      },
    ),
    secondary:
      'border-b border-white/20 bg-black/10 text-white shadow-md inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.6)] inset-shadow-black/60 hover:bg-gray-500/5',
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
