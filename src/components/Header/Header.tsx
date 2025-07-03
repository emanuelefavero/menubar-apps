'use client'

import BackgroundShadow from '@/components/shared/BackgroundShadow'
import clsx from 'clsx'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import './Header.css'
import Logo from './Logo'
import DesktopMenu from './Menu/Desktop/Menu'
import MobileMenu from './Menu/Mobile/Menu'

// Custom hook for header show/hide on scroll
function useShowOnScroll() {
  const [show, setShow] = useState(true)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
            setShow(false) // scrolling down
          } else {
            setShow(true) // scrolling up
          }
          lastScrollY.current = currentScrollY
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return show
}

export default function Component() {
  const show = useShowOnScroll()

  return (
    <motion.header
      initial={{ scaleX: 0 }}
      animate={{ scaleX: show ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={clsx(
        'fixed top-0 z-50 w-full rounded-full p-2',
        // Performance optimization
        'origin-center translate-z-0 will-change-transform backface-hidden',
      )}
    >
      <div
        className={clsx(
          'header',
          'relative flex items-center justify-between rounded-full bg-(--header-background) px-1 py-[0.2rem] shadow-(--header-shadow)',
        )}
      >
        {/* Backdrop Blur */}
        {/* TIP: We need to add `backdrop-blur` in the `before` pseudo element because the `MobileMenu` will also have a `backdrop-blur` effect, and nested backdrop-blur effects are not supported in CSS. @see https://github.com/tailwindlabs/tailwindcss/discussions/15103 */}
        <div
          className={clsx(
            'pointer-events-none absolute inset-0 h-full w-full before:absolute before:inset-0 before:-z-10 before:rounded-full before:backdrop-blur-xl',
            'backface-hidden',
          )}
        />

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
