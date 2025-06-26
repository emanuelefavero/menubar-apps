'use client'

import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { useRef, useState } from 'react'
import HamburgerButton from './HamburgerButton'
import HamburgerMenu from './HamburgerMenu'

export default function Component() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close the menu when clicking outside of it or the button
  useOnClickOutside(
    [
      menuRef as React.RefObject<HTMLElement>,
      buttonRef as React.RefObject<HTMLElement>,
    ],
    () => {
      if (open) setOpen(false)
    },
  )

  return (
    <nav>
      <HamburgerButton
        ref={buttonRef}
        open={open}
        onClick={() => setOpen((prev) => !prev)}
      />
      <HamburgerMenu ref={menuRef} open={open} onClick={() => setOpen(false)} />
    </nav>
  )
}
