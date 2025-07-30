import { focusStyle } from '@/styles/focus'
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
        'h-full px-3 py-2 text-sm font-medium uppercase no-underline transition duration-250 hover:bg-black/5 hover:backdrop-blur-[6px] active:scale-[0.97] dark:hover:bg-white/5',
        focusStyle,
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
