import { cn } from '@/lib/utils'
import { focusStyle } from '@/styles/focus'
import type { Href } from '@/types/href'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: Href
  children: React.ReactNode
  className?: string
}

export default function Component({
  href,
  children,
  className = '',
  ...props
}: Props) {
  const baseStyles = cn(
    'font-medium underline underline-offset-4 rounded-full px-1 py-0.5 transition duration-250 hover:text-(--foreground-secondary) active:scale-[0.97]',
    `focus-visible:no-underline ${focusStyle}`,
  )

  return (
    <a
      href={href}
      className={cn(baseStyles, className)}
      target='_blank'
      rel='noopener noreferrer'
      {...props}
    >
      {children}
    </a>
  )
}
