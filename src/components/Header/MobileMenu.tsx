'use client'

import { headerLinks } from '@/data/headerLinks'
import Link from 'next/link'
import { useState } from 'react'

export default function Component() {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      {/* Hamburger button */}
      <button
        className='block p-2 xs:hidden'
        aria-label='Open menu'
        onClick={() => setOpen((prev) => !prev)}
      >
        {/* Hamburger button lines as X when open */}
        <span
          className={`mb-1 block h-0.5 w-6 rounded-full bg-gray-700 transition-transform duration-300 ${
            open ? 'translate-y-1.5 rotate-45' : ''
          }`}
        ></span>
        <span
          className={`mb-1 block h-0.5 w-6 rounded-full bg-gray-700 transition-opacity duration-300 ${
            open ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 rounded-full bg-gray-700 transition-transform duration-300 ${
            open ? '-translate-y-1.5 -rotate-45' : ''
          }`}
        ></span>
      </button>

      {/* Hamburger Menu */}
      <div
        className={`${
          open ? 'block' : 'hidden'
        } absolute top-12 left-0 w-full bg-white/90 shadow-md backdrop-blur-lg xs:hidden`}
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
    </nav>
  )
}
