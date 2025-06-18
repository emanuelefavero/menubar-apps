import clsx from 'clsx'
import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode
  className?: string
}

export default function Component({ children, className, ...props }: Props) {
  const insetShadow = 'inset-shadow-[1px_2px_1px_0_rgba(220,226,232,0.23)]'

  const baseStyles = `rounded-full border border-black/25 bg-(--primary) px-3 py-1.5 text-white no-underline ${insetShadow} transition-all duration-200 select-none text-shadow-(--text-shadow-sm)`

  const hoverStyles = 'hover:bg-(--primary-hover)'

  const activeStyles = 'active:scale-95'

  return (
    <Link
      href='/'
      className={clsx(baseStyles, hoverStyles, activeStyles, className)}
      {...props}
    >
      {children}
    </Link>
  )
}
