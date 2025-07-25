import Image from 'next/image'

interface Props {
  imageSrc?: string
  imageAlt?: string
  description?: React.ReactNode
}

export default function Component({ imageSrc, imageAlt, description }: Props) {
  // Ensure all required props are provided
  if (!imageSrc || !imageAlt || !description) return null

  return (
    <div className='mb-8 flex flex-col items-center justify-center gap-6 3xs:flex-row'>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={64}
        height={64}
        className='z-0 select-none'
        priority
      />
      <p className='z-0 text-xl font-light uppercase xs:text-4xl'>
        {description}
      </p>
    </div>
  )
}
