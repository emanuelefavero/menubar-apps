'use client'

import { headerLinks } from '@/data/headerLinks'
import { useIsHome } from '@/hooks/useIsHome'
import { useScrollStage } from '@/hooks/useScrollStage'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
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
  const pathname = usePathname()
  const scrollStageFromHook = useScrollStage()
  const scrollStage = pathname === '/' ? scrollStageFromHook : 'full'

  const bgColor =
    scrollStage === 'top'
      ? 'bg-(--bg-image-top)/30'
      : scrollStage === 'halfway'
        ? 'bg-(--bg-image-bottom-lighter)/30'
        : 'bg-(--bg-image-top)/30 dark:bg-(--bg-image-bottom-lighter)/30'

  return (
    <nav
      data-testid='mobile-menu'
      ref={ref}
      className={clsx(
        'hamburger-menu',
        open && 'block',
        !open && 'hidden',
        bgColor,
        'absolute top-12 right-0 z-50 mr-2 animate-appear rounded-[1.5rem] p-4 shadow-(--hamburger-menu-shadow) backdrop-blur-[6px] xs:hidden',
      )}
    >
      <ul className='flex flex-col items-center gap-1.5'>
        {/* Home Link (shown when not home) */}
        {!isHome && (
          <li className='transition-transform duration-250 active:scale-[0.97]'>
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
            className='transition-transform duration-250 active:scale-[0.97]'
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
