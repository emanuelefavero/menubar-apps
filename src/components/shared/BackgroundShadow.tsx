import { cn } from '@/lib/utils'

// TIP: This is a background shadow effect (put it inside a div with relative position). It is useful to make the content stand out against a background image or color

interface Props {
  bgColor?: string
  blur?: string
  className?: string
}

export default function Component({
  bgColor = 'bg-black',
  blur = 'blur-3xl',
  className,
}: Props) {
  return (
    <div
      className={cn(
        'absolute inset-0 -z-10 m-auto h-full w-full rounded-full',
        bgColor,
        blur,
        className,
      )}
      aria-hidden='true'
    ></div>
  )
}
