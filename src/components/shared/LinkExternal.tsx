import { cn } from '@/lib/utils'
import { focusStyle } from '@/styles/focus'

type Props = React.ComponentPropsWithRef<'a'>

export default function Component({ children, className, ...props }: Props) {
  const baseStyles = cn(
    'rounded-full px-1 py-0.5 font-medium underline underline-offset-4 transition duration-250 hover:text-(--foreground-secondary) active:scale-[0.97]',

    // Focus
    `focus-visible:no-underline ${focusStyle}`,
  )

  return (
    <a
      className={cn(baseStyles, className)}
      target='_blank'
      rel='noopener noreferrer'
      {...props}
    >
      {children}
    </a>
  )
}
