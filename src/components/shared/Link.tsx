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
  const baseStyles = clsx(
    'font-medium underline underline-offset-4 transition duration-250 hover:text-(--foreground-secondary) active:scale-[0.97]',
  )

  return (
    <Link href={href} className={clsx(baseStyles, className)} {...props}>
      {children}
    </Link>
  )
}
