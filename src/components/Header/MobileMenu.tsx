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
        'absolute top-12 left-0 w-full bg-white/90 shadow-md backdrop-blur-lg xs:hidden',
      )}
    >
      <ul className='flex flex-col items-center p-4'>
        {headerLinks.map((link) => (
          <li key={link.href} className='mb-2'>
            <Link
              href={link.href}
              className='text-lg font-medium text-black hover:text-gray-700'
              onClick={() => setOpen(false)} // Close menu on link click
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
