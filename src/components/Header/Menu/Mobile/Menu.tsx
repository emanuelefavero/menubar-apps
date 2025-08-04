'use client'

import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import type { HTMLElementRef } from '@/types/refs'
import { useCallback, useMemo, useRef, useState } from 'react'
import HamburgerButton from './HamburgerButton'
import HamburgerMenu from './HamburgerMenu'

export default function Component() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Memoize refs to avoid unnecessary re-renders
  const refs = useMemo(
    () => [menuRef as HTMLElementRef, buttonRef as HTMLElementRef],
    [menuRef, buttonRef],
  )

  // Memoized callback to close the menu if menu is open
  const handleClickOutside = useCallback(() => {
    if (open) setOpen(false)
  }, [open])

  // Close the menu when clicking outside of it (with memoization)
  useOnClickOutside(refs, handleClickOutside)

  return (
    <div>
      <HamburgerButton
        ref={buttonRef}
        open={open}
        onClick={() => setOpen((prev) => !prev)}
      />
      <HamburgerMenu ref={menuRef} open={open} onClick={() => setOpen(false)} />
    </div>
  )
}
