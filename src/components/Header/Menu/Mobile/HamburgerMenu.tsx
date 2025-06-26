import { headerLinks } from '@/data/headerLinks'
import clsx from 'clsx'
import { Ref } from 'react'
import './HamburgerMenu.css'
import HamburgerLink from './Link'

interface Props {
  open: boolean
  onClick?: () => void
  ref?: Ref<HTMLDivElement>
}

export default function Component({ open, onClick, ref }: Props) {
  return (
    <div
      ref={ref}
      className={clsx(
        'hamburger-menu',
        open && 'block',
        !open && 'hidden',
        'absolute top-12 right-0 z-50 mr-2 animate-appear rounded-[1.5rem] bg-(--hamburger-menu-background) p-4 shadow-(--hamburger-menu-shadow) backdrop-blur-[6px] xs:hidden',
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
