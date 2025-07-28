import clsx from 'clsx'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  zIndex?: string
  className?: string
}

export default function Component({
  zIndex = 'z-0',
  className = '',
  ...props
}: Props) {
  return (
    <div
      className={clsx(
        zIndex,
        'pointer-events-none fixed inset-0 opacity-10 mix-blend-multiply select-none dark:opacity-10 dark:mix-blend-screen',
        className,
      )}
      style={{
        background:
          'radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(10, 40, 97, 0.2) 50%, rgba(39, 192, 243, 1) 100%)',
      }}
      aria-hidden='true'
      {...props}
    />
  )
}
