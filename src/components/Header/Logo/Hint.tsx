import clsx from 'clsx'

interface Props {
  className?: string
}

export default function Component({ className = '' }: Props) {
  return (
    <span
      className={clsx(
        'absolute top-1/2 left-full ml-1.5 inline-block -translate-y-1/2 animate-bounce-x px-0.5 py-0.5 text-xs whitespace-nowrap text-(--success)',
        className,
      )}
    >
      ← Go Home
    </span>
  )
}
