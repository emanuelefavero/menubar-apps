import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  variant?: 'top' | 'bottom'
  className?: string
}

export default function Component({
  children,
  variant = 'top',
  className,
}: Props) {
  return (
    <div
      className={cn(
        'flex w-full flex-wrap items-center justify-center',
        variant === 'bottom' && 'gap-4 py-2',
        variant === 'top' && 'gap-2 xs:gap-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
