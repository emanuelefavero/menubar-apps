'use client'

import { useEffect, useRef, useState } from 'react'
import HamburgerButton from './HamburgerButton'
import HamburgerMenu from './HamburgerMenu'

export default function Component() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    // Close the menu when clicking outside of it
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    // Add event listener to handle clicks outside the menu
    document.addEventListener('mousedown', handleClickOutside)

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

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
