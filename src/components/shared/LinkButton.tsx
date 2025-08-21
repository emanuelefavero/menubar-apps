import { cn } from '@/lib/utils'
import { focusStyle } from '@/styles/focus'
import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'

// TIP: Only needed for unit tests
export type Variant = 'primary' | 'secondary'
export type Size = 'none' | 'sm' | 'base' | 'lg'
export type Theme = 'light' | 'dark' | 'default'

const variants = cva(
  // Base styles
  [
    'inline-block rounded-full font-medium no-underline backdrop-blur-md transition duration-250 select-none active:scale-[0.97]',
    focusStyle,
  ],
  {
    variants: {
      variant: {
        primary: 'border-b-2 shadow-2xs inset-shadow-sm',
        secondary: 'border-b',
      },
      size: {
        none: 'px-3 py-1.5',
        sm: 'px-3 py-1.5 text-sm',
        base: 'px-3 py-1.5 text-base',
        lg: 'w-full px-4 py-2 text-lg',
      },
      // Initialize theme variants to empty (only used in compound variants)
      theme: {
        light: '',
        dark: '',
        default: '',
      },
      disabled: {
        true: 'pointer-events-none cursor-not-allowed opacity-50',
        false: '',
      },
    },

    // Theme variants
    compoundVariants: [
      // Primary
      {
        variant: 'primary',
        theme: 'light',
        class:
          'border-black/15 bg-white/80 text-gray-800 shadow-black/25 inset-shadow-white hover:bg-white',
      },
      {
        variant: 'primary',
        theme: 'dark',
        class:
          'border-black/50 bg-gray-800 text-white shadow-black/15 inset-shadow-gray-500 hover:bg-gray-700',
      },
      {
        variant: 'primary',
        theme: 'default',
        class:
          'border-black/50 bg-gray-800 text-white shadow-black/15 inset-shadow-gray-500 hover:bg-gray-700 dark:border-black/15 dark:bg-white/80 dark:text-gray-800 dark:shadow-black/25 dark:inset-shadow-white hover:dark:bg-white',
      },

      // Secondary
      {
        variant: 'secondary',
        theme: 'light',
        class:
          'border-black/20 bg-gray-300/10 text-gray-800 inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.2)] shadow-white/60 hover:bg-gray-400/10',
      },
      {
        variant: 'secondary',
        theme: 'dark',
        class:
          'border-white/20 bg-black/10 text-white inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.6)] hover:bg-gray-500/5',
      },
      {
        variant: 'secondary',
        theme: 'default',
        class:
          'border-black/20 bg-gray-300/10 text-gray-800 inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.2)] hover:bg-gray-400/10 dark:border-white/20 dark:bg-black/10 dark:text-white dark:inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.6)] dark:hover:bg-gray-500/5',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'none',
      theme: 'default',
      disabled: false,
    },
  },
)

interface Props
  extends React.ComponentPropsWithRef<'a'>,
    VariantProps<typeof variants> {
  disabled?: boolean
}

export default function Component({
  href = '/',
  variant,
  size,
  theme,
  className,
  children,
  disabled = false,
  ...props
}: Props) {
  return (
    <Link
      href={href}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
      className={cn(variants({ variant, size, theme, disabled, className }))}
      {...props}
    >
      {children}
    </Link>
  )
}
