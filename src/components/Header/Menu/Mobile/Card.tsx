import { headerLinks } from '@/data/headerLinks'
import clsx from 'clsx'
import './Card.css'
import HamburgerLink from './Link'

interface Props {
  open: boolean
  onClick?: () => void
}

export default function Component({ open, onClick }: Props) {
  return (
    <div
      className={clsx(
        'card',
        open && 'block',
        !open && 'hidden',
        'absolute top-12 right-0 z-50 mr-2 animate-appear rounded-[1.75rem] bg-(--card-background) p-4 shadow-(--card-shadow) backdrop-blur-[6px] xs:hidden',
      )}
    >
      <ul className='flex flex-col items-center gap-2'>
        {/* Home Link */}
        <li>
          <HamburgerLink
            href='/'
            label='Home'
            onClick={onClick} // Close menu on link click
          />
        </li>

        {/* Header Links */}
        {headerLinks.map((link) => (
          <li key={link.href}>
            <HamburgerLink
              href={link.href}
              label={link.label}
              onClick={onClick}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
