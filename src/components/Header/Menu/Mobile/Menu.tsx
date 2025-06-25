'use client'

import { useState } from 'react'
import Card from './Card'
import HamburgerButton from './HamburgerButton'

export default function Component() {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <HamburgerButton open={open} onClick={() => setOpen((prev) => !prev)} />
      <Card open={open} onClick={() => setOpen(false)} />
    </nav>
  )
}
