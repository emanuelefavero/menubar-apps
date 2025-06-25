'use client'

import { headerLinks } from '@/data/headerLinks'
import '@/styles/Card.css' // for hamburger menu ↓
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

export default function Component() {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <HamburgerButton open={open} onClick={() => setOpen((prev) => !prev)} />
      <HamburgerMenu open={open} onClick={() => setOpen(false)} />
    </nav>
  )
}

// -----------

interface HamburgerButtonProps {
  open: boolean
  onClick?: () => void
}

function HamburgerButton({ open, onClick }: HamburgerButtonProps) {
  return (
    <button
      className='block cursor-pointer p-1 xs:hidden'
      aria-label='Open menu'
      title='Open menu'
      onClick={onClick} // Toggle menu on click
    >
      <span
        className={clsx(
          'mb-1 block h-0.5 w-6 rounded-full transition duration-300',
          open && 'translate-y-1.5 rotate-45 bg-red-800',
          !open && 'bg-gray-700',
        )}
      ></span>
      <span
        className={clsx(
          'mb-1 block h-0.5 w-6 rounded-full bg-gray-700 transition-opacity duration-150',
          open && 'opacity-0',
        )}
      ></span>
      <span
        className={clsx(
          'block h-0.5 w-6 rounded-full transition duration-300',
          open && '-translate-y-1.5 -rotate-45 bg-red-800',
          !open && 'bg-gray-700',
        )}
      ></span>
    </button>
  )
}

interface HamburgerMenuProps {
  open: boolean
  onClick?: () => void
}

function HamburgerMenu({ open, onClick }: HamburgerMenuProps) {
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

interface HamburgerLinkProps {
  href: string
  label: string
  onClick?: () => void
}

function HamburgerLink({ href, label, onClick }: HamburgerLinkProps) {
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
