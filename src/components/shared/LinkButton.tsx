import clsx from 'clsx'
import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'lg'
  children: React.ReactNode
  className?: string
}

export default function LinkButton({
  href = '/',
  variant = 'primary',
  size = 'sm',
  children,
  className = '',
  ...props
}: Props) {
  const baseStyles =
    'inline-block rounded-full font-medium no-underline transition duration-250 active:scale-[97%] select-none'

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-base',
    lg: 'w-full px-4 py-2 text-lg',
  }

  const variantStyles = {
    primary:
      'border-b-2 border-black/15 bg-white/80 text-gray-800 shadow-2xs inset-shadow-sm shadow-black/25 inset-shadow-white hover:bg-white',
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
