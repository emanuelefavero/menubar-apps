import type { ScrollStage } from '@/hooks/useScrollStage'
import clsx from 'clsx'

interface Props {
  className?: string
  scrollStage?: ScrollStage
}

export default function Component({
  className = '',
  scrollStage = 'full',
}: Props) {
  const baseStyles = clsx(
    // Default styles
    'absolute top-1/2 left-full ml-1.5 inline-block -translate-y-1/2 animate-bounce-x px-0.5 py-0.5 text-xs whitespace-nowrap',

    // Color based on scroll stage
    scrollStage === 'top'
      ? 'text-(--success-dark)'
      : scrollStage === 'halfway'
        ? 'text-(--success-light)'
        : 'text-(--success)', // System light/dark mode
  )

  return <span className={clsx(baseStyles, className)}>← Go Home</span>
}
