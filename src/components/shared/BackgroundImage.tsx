import Image from 'next/image'

interface Props extends React.HTMLAttributes<HTMLImageElement> {
  src: string
  alt?: string
  className?: string
  priority?: boolean
}

export default function Component({
  src,
  alt = 'Background',
  className = '',
  priority = false,
  ...props
}: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`-z-20 object-cover object-center select-none ${className}`}
      priority={priority}
      {...props}
    />
  )
}
