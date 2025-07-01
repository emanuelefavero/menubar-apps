import { headerLinks } from '@/data/headerLinks'
import { useIsHome } from '@/hooks/useIsHome'
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
  const isHome = useIsHome()

  return (
    <nav
      role='menu'
      data-testid='mobile-menu'
      ref={ref}
      className={clsx(
        'hamburger-menu',
        open && 'block',
        !open && 'hidden',
        'absolute top-12 right-0 z-50 mr-2 animate-appear rounded-[1.5rem] bg-(--hamburger-menu-background) p-4 shadow-(--hamburger-menu-shadow) backdrop-blur-[6px] xs:hidden',
      )}
    >
      <ul className='flex flex-col items-center gap-2'>
        {/* Home Link (shown when not home) */}
        {!isHome && (
          <li className='transition-transform duration-250 active:scale-[97%]'>
            <HamburgerLink
              href='/'
              label='Home'
              onClick={onClick} // Close menu on link click
            />
          </li>
        )}

        {/* Header Links */}
        {headerLinks.map((link) => (
          <li
            key={`hamburger-link-${link.href}`}
            className='transition-transform duration-250 active:scale-[97%]'
          >
            <HamburgerLink
              href={link.href}
              label={link.label}
              onClick={onClick}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}
