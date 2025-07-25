import clsx from 'clsx'

interface Props {
  className?: string
}

export default function Component({ className = '' }: Props) {
  return (
    <div
      className={clsx(
        'pointer-events-none fixed inset-0 z-10 bg-[url(/images/n2.png)] bg-auto bg-repeat opacity-15 select-none dark:opacity-20',
        className,
      )}
      aria-hidden='true'
    />
  )
}
