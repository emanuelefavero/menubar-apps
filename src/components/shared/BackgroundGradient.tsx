import { cn } from '@/lib/utils'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  zIndex?: string
  className?: string
}

export default function Component({
  zIndex = 'z-0',
  className,
  ...props
}: Props) {
  const baseStyles = cn('pointer-events-none fixed inset-0 select-none')
  const gradientStyles = cn(
    'bg-radial-[at_50%_53%] from-transparent via-blue-800/20 to-sky-400 to-100%',
    'opacity-10',
    'mix-blend-multiply dark:mix-blend-screen',
  )

  return (
    <div
      className={cn(baseStyles, gradientStyles, zIndex, className)}
      aria-hidden='true'
      {...props}
    />
  )
}
