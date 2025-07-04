'use client'

import BackgroundShadow from '@/components/shared/BackgroundShadow'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { useScrollStage } from '@/hooks/useScrollStage'
import clsx from 'clsx'
import { motion } from 'motion/react'
import './Header.css'
import Logo from './Logo'
import DesktopMenu from './Menu/Desktop/Menu'
import MobileMenu from './Menu/Mobile/Menu'

export default function Component() {
  const show = useScrollDirection()
  const scrollStage = useScrollStage()

  const bgColor =
    scrollStage === 'top'
      ? 'bg-(--bg-image-top)/30'
      : scrollStage === 'halfway'
        ? 'bg-(--bg-image-bottom-lighter)/30'
        : 'bg-(--bg-image-top)/30 dark:bg-(--bg-image-bottom-lighter)/30'

  const shadowBgColor =
    scrollStage === 'top'
      ? 'bg-(--bg-image-top)/30'
      : scrollStage === 'halfway'
        ? 'bg-(--bg-image-bottom)/30'
        : 'bg-(--background)/30'

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
          bgColor,
          'relative flex items-center justify-between rounded-full px-1 py-[0.2rem] shadow-(--header-shadow)',
        )}
      >
        {/* Backdrop Blur */}
        {/* TIP: We need to add `backdrop-blur` in the `before` pseudo element because the `MobileMenu` will also have a `backdrop-blur` effect, and nested backdrop-blur effects are not supported in CSS. @see https://github.com/tailwindlabs/tailwindcss/discussions/15103 */}
        <div
          className={clsx(
            'pointer-events-none absolute inset-0 h-full w-full before:absolute before:inset-0 before:-z-10 before:rounded-full before:backdrop-blur-md',
            'backface-hidden',
          )}
        />

        <BackgroundShadow bgColor={shadowBgColor} blur='blur-xl' />
        <Logo />
        <div>
          <DesktopMenu />
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  )
}
