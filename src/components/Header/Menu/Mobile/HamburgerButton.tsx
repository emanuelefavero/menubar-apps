'use client'

import { useScrollStage } from '@/hooks/useScrollStage'
import { focusStyle } from '@/styles/focus'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { Ref } from 'react'

interface Props {
  open: boolean
  onClick?: () => void
  ref?: Ref<HTMLButtonElement>
}

export default function Component({ open, onClick, ref }: Props) {
  const pathname = usePathname()
  const scrollStageFromHook = useScrollStage()
  const scrollStage = pathname === '/' ? scrollStageFromHook : 'full'

  const getOpenColor = () => {
    if (scrollStage === 'top') return 'bg-rose-800'
    if (scrollStage === 'halfway') return 'bg-rose-200'
    return 'bg-rose-800 dark:bg-rose-200'
  }

  const getClosedColor = () => {
    if (scrollStage === 'top') return 'bg-gray-700'
    if (scrollStage === 'halfway') return 'bg-gray-200'
    return 'bg-(--foreground)'
  }

  const barColor = open ? getOpenColor() : getClosedColor()

  return (
    <button
      ref={ref}
      className={clsx(
        'block cursor-pointer rounded rounded-r-full p-1 pl-1.5 pr-3 py-2 xs:hidden',
        focusStyle,
      )}
      aria-label='Open menu'
      title='Open menu'
      onClick={onClick}
    >
      <span
        className={clsx(
          'mb-1 block h-0.5 w-6 rounded-full transition-transform duration-300',
          open && 'translate-y-1.5 rotate-45',
          barColor,
        )}
      />
      <span
        className={clsx(
          'mb-1 block h-0.5 w-6 rounded-full transition-opacity duration-150',
          open ? 'opacity-0' : barColor,
        )}
      />
      <span
        className={clsx(
          'block h-0.5 w-6 rounded-full transition-transform duration-300',
          open && '-translate-y-1.5 -rotate-45',
          barColor,
        )}
      />
    </button>
  )
}
