import { cn } from '@/lib/utils'
import { focusStyle } from '@/styles/focus'
import type { Href } from '@/types/href'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string
  href: Href
  label?: string
  className?: string
}

export default function Component({
  name,
  href,
  label = 'Photo by',
  className,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        'absolute right-4 bottom-4 z-0 rounded-full text-[0.6rem] text-white/70',
        className,
      )}
    >
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        draggable={false}
        {...props}
        className={cn(
          'rounded-full px-1 py-0.5 underline-offset-4 focus-visible:no-underline',
          focusStyle,
        )}
      >
        {label} {name}
      </a>
    </div>
  )
}
