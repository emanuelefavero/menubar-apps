import LinkButton from '@/components/shared/LinkButton'
import { cn } from '@/lib/utils'

type Props = React.ComponentPropsWithRef<'div'> & {
  kicker?: string
  title: string
  description: string
  buttonLabel: string
  buttonHref?: string
  buttonProps?: React.ComponentPropsWithRef<typeof LinkButton>
  className?: string
}

export default function CenteredMessage({
  kicker,
  title,
  description,
  buttonLabel,
  buttonHref,
  buttonProps = {},
  className,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        'relative flex min-h-screen w-full flex-col items-center justify-center gap-4 p-4 text-center',
        className,
      )}
      {...props}
    >
      {kicker && <span className='text-4xl font-normal'>{kicker}</span>}

      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='text-lg'>{description}</p>

      <LinkButton className='mt-1' href={buttonHref} {...buttonProps}>
        {buttonLabel}
      </LinkButton>
    </div>
  )
}
