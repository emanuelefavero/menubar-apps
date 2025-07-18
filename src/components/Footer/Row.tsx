import clsx from 'clsx'

interface RowProps {
  children: React.ReactNode
  className?: string
}

export default function Component({ children, className }: RowProps) {
  return (
    <div
      className={clsx(
        'flex w-full flex-wrap items-center justify-center gap-4 py-2',
        className,
      )}
    >
      {children}
    </div>
  )
}
