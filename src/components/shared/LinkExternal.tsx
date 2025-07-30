import { focusStyle } from '@/styles/focus'
import clsx from 'clsx'

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
    'font-medium underline underline-offset-4 rounded-full px-1 py-0.5 transition duration-250 hover:text-(--foreground-secondary) active:scale-[0.97]',
    `focus-visible:no-underline ${focusStyle}`,
  )

  return (
    <a
      href={href}
      className={clsx(baseStyles, className)}
      target='_blank'
      rel='noopener noreferrer'
      {...props}
    >
      {children}
    </a>
  )
}
