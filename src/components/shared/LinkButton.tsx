import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  className?: string
}

export default function Component({ children, className }: Props) {
  return (
    <Link
      href='/'
      className={`inline-block rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 ${className}`}
    >
      {children}
    </Link>
  )
}
