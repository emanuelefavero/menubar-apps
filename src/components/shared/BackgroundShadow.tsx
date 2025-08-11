import { cn } from '@/lib/utils'

// TIP: This is a background shadow effect (put it inside a div with relative position). It is useful to make the content stand out against a background image or color

type Props = React.ComponentPropsWithRef<'div'>

export default function Component({ className }: Props) {
  return (
    <div
      className={cn(
        'absolute inset-0 -z-10 m-auto h-full w-full rounded-full bg-black blur-3xl',
        className,
      )}
      aria-hidden='true'
    />
  )
}
