'use client'

import { useState } from 'react'
import HamburgerButton from './HamburgerButton'
import Card from './HamburgerMenu'

export default function Component() {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <HamburgerButton open={open} onClick={() => setOpen((prev) => !prev)} />
      <Card open={open} onClick={() => setOpen(false)} />
    </nav>
  )
}
