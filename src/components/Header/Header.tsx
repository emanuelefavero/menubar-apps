'use client'

import BackgroundShadow from '@/components/shared/BackgroundShadow'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { useScrollStage } from '@/hooks/useScrollStage'
import clsx from 'clsx'
import { motion } from 'motion/react'
import { usePathname } from 'next/navigation'
import BackdropBlur from './BackdropBlur'
import './Header.css'
import Logo from './Logo'
import DesktopMenu from './Menu/Desktop/Menu'
import MobileMenu from './Menu/Mobile/Menu'

export default function Component() {
  const show = useScrollDirection()
  const pathname = usePathname()
  const scrollStageFromHook = useScrollStage()
  const scrollStage = pathname === '/' ? scrollStageFromHook : 'full'

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
        'fixed top-0 z-50 flex w-full items-center justify-center rounded-full p-2',
        // Performance optimization
        'origin-center translate-z-0 will-change-transform backface-hidden',
      )}
    >
      <div
        className={clsx(
          'header',
          'w-full max-w-screen-3xl', // header max width
          bgColor,
          'relative flex items-center justify-between rounded-full px-1 py-[0.2rem] shadow-(--header-shadow)',
        )}
      >
        {/* TIP: This component is needed because CSS does not support nested backdrop-blur effects  */}
        <BackdropBlur />

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
