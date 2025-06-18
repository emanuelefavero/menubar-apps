import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}

export default function Component({
  href,
  variant = 'primary',
  children,
  className = '',
  ...props
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-block w-full rounded-full px-4 py-2 text-lg font-medium no-underline transition duration-250 active:scale-[97%] ${
        variant === 'primary'
          ? // Primary
            'bg-white/80 text-gray-800 shadow-2xs inset-shadow-sm shadow-black/25 inset-shadow-white hover:bg-white'
          : // Secondary
            'border-b border-white/20 bg-black/10 text-white shadow-md inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.6)] inset-shadow-black/60 hover:bg-gray-500/5'
      } ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}
