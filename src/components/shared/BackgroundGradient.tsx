import clsx from 'clsx'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  zIndex?: string
  className?: string
}

// sky-200
// blue-400
// indigo-900

export default function Component({
  zIndex = 'z-0',
  className = '',
  ...props
}: Props) {
  return (
    <div
      className={clsx(
        zIndex,
        'pointer-events-none fixed inset-0 bg-radial-[at_50%_53%] from-transparent via-blue-800/20 to-sky-400 to-100% opacity-10 mix-blend-multiply select-none dark:opacity-10 dark:mix-blend-screen',
        className,
      )}
      aria-hidden='true'
      {...props}
    />
  )
}
