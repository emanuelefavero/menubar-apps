'use client'

import { useState } from 'react'
import HamburgerButton from './HamburgerButton'
import HamburgerMenu from './HamburgerMenu'

export default function Component() {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <HamburgerButton open={open} onClick={() => setOpen((prev) => !prev)} />
      <HamburgerMenu open={open} onClick={() => setOpen(false)} />
    </nav>
  )
}
