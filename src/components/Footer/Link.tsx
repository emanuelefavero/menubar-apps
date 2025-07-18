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
  return (
    <Link
      href={href}
      className={clsx('text-sm font-medium uppercase', className)}
      {...props}
    >
      {children}
    </Link>
  )
}
