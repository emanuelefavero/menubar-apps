'use client'

import BackgroundShadow from '@/components/shared/BackgroundShadow'
import clsx from 'clsx'
import { motion } from 'motion/react'
import './Header.css'
import Logo from './Logo'
import DesktopMenu from './Menu/Desktop/Menu'
import MobileMenu from './Menu/Mobile/Menu'

export default function Component() {
  return (
    <motion.header
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className='fixed top-0 z-50 w-full rounded-full p-2'
    >
      <div
        className={clsx(
          'header',
          'relative flex items-center justify-between rounded-full bg-(--header-background) px-1 py-[0.2rem] shadow-(--header-shadow)',
        )}
      >
        {/* Backdrop Blur */}
        {/* TIP: We need to add `backdrop-blur` in the `before` pseudo element because the `MobileMenu` will also have a `backdrop-blur` effect, and nested backdrop-blur effects are not supported in CSS. @see https://github.com/tailwindlabs/tailwindcss/discussions/15103 */}
        <div className='pointer-events-none absolute inset-0 h-full w-full before:absolute before:inset-0 before:-z-10 before:rounded-full before:backdrop-blur-xl' />

        <BackgroundShadow bgColor='bg-white/30' blur='blur-xl' />
        <Logo />
        <div>
          <DesktopMenu />
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  )
}
