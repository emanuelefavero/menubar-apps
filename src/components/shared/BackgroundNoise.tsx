import clsx from 'clsx'

interface Props {
  className?: string
}

export default function Component({ className = '' }: Props) {
  return (
    <div
      className={clsx('fixed inset-0 -z-10 bg-repeat select-none', className)}
      style={{
        backgroundImage: "url('/images/n1.png')",
        backgroundSize: '256px 256px',
      }}
      aria-hidden='true'
    />
  )
}
