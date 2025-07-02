import type { HeaderLink } from '@/data/headerLinks'
import { useIsActiveLink } from '@/hooks/useIsActiveLink'
import clsx from 'clsx'
import Link from 'next/link'

interface Props extends HeaderLink {
  onClick?: () => void
}

export default function Component({ href, label, onClick }: Props) {
  const isActive = useIsActiveLink(href)

  return (
    <Link
      href={href}
      className={clsx(
        'text-lg no-underline transition-all duration-250 select-none hover:text-black',
        isActive && 'font-bold text-black',
        !isActive && 'font-medium text-gray-700',
      )}
      onClick={onClick} // Close menu on link click
    >
      {label}
    </Link>
  )
}
