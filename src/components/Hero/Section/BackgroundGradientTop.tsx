import clsx from 'clsx'

// TIP: Top Background Gradient to merge the background overflow color and the top of the hero seamlessly

interface Props {
  className?: string
}

export default function Component({ className }: Props) {
  return (
    <div
      className={clsx(
        'absolute top-0 left-0 -z-10 h-screen w-full bg-gradient-to-b from-(--bg-image-top) via-(--bg-image-top)/50 via-10% to-transparent to-20%',
        className,
      )}
      aria-hidden='true'
    ></div>
  )
}
