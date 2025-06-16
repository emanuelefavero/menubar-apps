import Image from 'next/image'

interface Props {
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
}: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`-z-10 object-cover object-center ${className}`}
      priority={priority}
    />
  )
}
