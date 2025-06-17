import Link from 'next/link'

interface Props {
  name: string
  href: string
  label?: string
  className?: string
}

export default function Component({
  name,
  href,
  label = 'Photo by',
  className = '',
}: Props) {
  return (
    <div
      className={`absolute right-4 bottom-4 rounded-full text-[0.6rem] text-white/70 ${className}`}
    >
      <span>{label}</span>{' '}
      <Link href={href} target='_blank' rel='noopener noreferrer'>
        {name}
      </Link>
    </div>
  )
}
