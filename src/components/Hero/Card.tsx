import { cn } from '@/lib/utils'

interface Props {
  className?: string
  children: React.ReactNode
}

export default function Component({ className = '', children }: Props) {
  return (
    <div
      className={cn(
        // Base
        'relative flex w-full max-w-[400px] flex-col items-center justify-center rounded-[1.75rem] bg-[var(--card-background)] px-4 pt-18 pb-3.5 text-center text-white shadow-[var(--card-shadow)] backdrop-blur-[6px]',

        // Top border
        'before:pointer-events-none before:absolute before:inset-0 before:z-[100] before:box-border before:rounded-[1.7rem] before:border before:border-white/10 before:bg-(--card-border-top) before:mask-[var(--card-mask)] before:mask-exclude before:p-[1px] before:content-[""]',

        // Bottom border
        `after:pointer-events-none after:absolute after:inset-0 after:z-[100] after:box-border after:rotate-180 after:rounded-[1.7rem] after:bg-(--card-border-bottom) after:mask-[var(--card-mask)] after:mask-exclude after:p-[1px] after:content-[""]`,
        className,
      )}
    >
      {children}
    </div>
  )
}
