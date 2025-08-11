import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const variants = cva('flex w-full flex-wrap items-center justify-center', {
  variants: {
    variant: {
      top: 'gap-2 xs:gap-0',
      bottom: 'gap-4 py-2',
    },
  },
  defaultVariants: {
    variant: 'top',
  },
})

interface Props
  extends React.ComponentPropsWithRef<'div'>,
    VariantProps<typeof variants> {}

export default function Component({
  children,
  variant,
  className,
  ...props
}: Props) {
  return (
    <div className={cn(variants({ variant }), className)} {...props}>
      {children}
    </div>
  )
}
