'use client'

import { headerLinks } from '@/data/headerLinks'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

export default function Component() {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <HamburgerButton open={open} setOpen={setOpen} />
      <HamburgerMenu open={open} setOpen={setOpen} />
    </nav>
  )
}

// -----------

interface HamburgerButtonProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function HamburgerButton({ open, setOpen }: HamburgerButtonProps) {
  return (
    <button
      className='block cursor-pointer p-1 xs:hidden'
      aria-label='Open menu'
      title='Open menu'
      onClick={() => setOpen((prev) => !prev)}
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
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function HamburgerMenu({ open, setOpen }: HamburgerMenuProps) {
  return (
    <div
      className={clsx(
        open && 'block',
        !open && 'hidden',
        'absolute top-12 right-0 z-50 mr-2 rounded-2xl bg-white/20 p-4 shadow-sm backdrop-blur-lg xs:hidden',
      )}
    >
      <ul className='flex flex-col items-center gap-2'>
        {/* Home Link */}
        <li>
          <HamburgerLink
            href='/'
            label='Home'
            onClick={() => setOpen(false)} // Close menu on link click
          />
        </li>

        {/* Header Links */}
        {headerLinks.map((link) => (
          <li key={link.href}>
            <HamburgerLink
              href={link.href}
              label={link.label}
              onClick={() => setOpen(false)} // Close menu on link click
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
    <li>
      <Link
        href={href}
        className='text-lg font-medium text-black hover:text-gray-700'
        onClick={onClick} // Close menu on link click
      >
        {label}
      </Link>
    </li>
  )
}
