import clsx from 'clsx'

// TIP: Bottom Background Gradient to merge the background overflow color and the bottom of the hero seamlessly

interface Props {
  className?: string
}

export default function Component({ className }: Props) {
  return (
    <div
      className={clsx(
        'absolute bottom-0 left-0 -z-10 h-screen w-full bg-gradient-to-t from-(--bg-image-bottom) via-(--bg-image-bottom)/50 via-10% to-transparent to-20%',
        className,
      )}
      aria-hidden='true'
    ></div>
  )
}
