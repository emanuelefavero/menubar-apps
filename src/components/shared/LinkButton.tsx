import clsx from 'clsx'
import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode
  className?: string
}

export default function Component({ children, className, ...props }: Props) {
  const baseStyles = `inline-block rounded-full border-b-2 border-black/15 bg-white/80 px-3 py-1.5 font-medium text-gray-800 shadow-2xs inset-shadow-sm shadow-black/25 inset-shadow-white no-underline transition duration-250 select-none hover:bg-white active:scale-[97%]`

  return (
    <Link href='/' className={clsx(baseStyles, className)} {...props}>
      {children}
    </Link>
  )
}
