import clsx from 'clsx'

interface Props {
  url: string
  className?: string
}

export default function Component({ url, className = '' }: Props) {
  return (
    <div
      className={clsx(
        'pointer-events-none fixed inset-0 z-0 bg-auto bg-repeat opacity-15 select-none dark:opacity-20',
        className,
      )}
      style={{ backgroundImage: `url(${url})` }}
      aria-hidden='true'
    />
  )
}
