import { cn } from '@/lib/utils'
import Image from 'next/image'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  className?: string
}

export default function BackgroundImage({
  src,
  alt,
  className = '',
  ...props
}: Props) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full bg-(--bg-image-bottom-lighter) select-none',
        className,
      )}
      aria-hidden='true'
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className='object-cover object-center'
        priority
        draggable={false}
      />
    </div>
  )
}
