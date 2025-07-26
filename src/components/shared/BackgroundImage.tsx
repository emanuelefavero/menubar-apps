import clsx from 'clsx'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  url: string
  className?: string
}

export default function BackgroundImage({
  url,
  className = '',
  ...props
}: Props) {
  return (
    <div
      className={clsx(
        'pointer-events-none absolute inset-0 bg-cover bg-center select-none',
        className,
      )}
      style={{ backgroundImage: `url(${url})` }}
      aria-hidden='true'
      {...props}
    />
  )
}
