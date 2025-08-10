import { cn } from '@/lib/utils'

// TIP: Use this component to create a backdrop blur effect when you can't use the `backdrop-blur` utility directly on the element, as CSS does not support nested backdrop-blur effects. @see https://github.com/tailwindlabs/tailwindcss/discussions/15103

const blurClasses = {
  none: 'before:backdrop-blur-none',
  sm: 'before:backdrop-blur-sm',
  md: 'before:backdrop-blur-md',
  lg: 'before:backdrop-blur-lg',
  xl: 'before:backdrop-blur-xl',
  '2xl': 'before:backdrop-blur-2xl',
  '3xl': 'before:backdrop-blur-3xl',
}

interface Props {
  className?: string
  blur?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
}

export default function Component({ className, blur = 'md' }: Props) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full before:absolute before:inset-0 before:-z-10 before:rounded-full',
        blurClasses[blur],
        'backface-hidden',
        className,
      )}
    />
  )
}
