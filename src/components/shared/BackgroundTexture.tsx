import clsx from 'clsx'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  url: string
  zIndex?: string
  className?: string
}

export default function Component({
  url,
  zIndex = 'z-0',
  className = '',
  ...props
}: Props) {
  return (
    <div
      className={clsx(
        zIndex,
        'pointer-events-none fixed inset-0 bg-auto bg-repeat opacity-15 select-none dark:opacity-15',
        className,
      )}
      style={{
        backgroundImage: `url(${url})`,
      }}
      aria-hidden='true'
      {...props}
    />
  )
}
