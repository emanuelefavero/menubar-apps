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
      className={clsx(
        'h-full px-3 py-2 text-sm font-medium uppercase no-underline hover:bg-white/5',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
