import Link from 'next/link'

interface Props {
  href: string
  label: string
  onClick?: () => void
}

export default function Component({ href, label, onClick }: Props) {
  return (
    <Link
      href={href}
      className='text-lg font-medium text-black hover:text-gray-700'
      onClick={onClick} // Close menu on link click
    >
      {label}
    </Link>
  )
}
