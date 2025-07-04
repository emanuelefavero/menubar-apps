import { useScrollStage } from '@/hooks/useScrollStage'
import clsx from 'clsx'
import { Ref } from 'react'

interface Props {
  open: boolean
  onClick?: () => void
  ref?: Ref<HTMLButtonElement>
}

export default function Component({ open, onClick, ref }: Props) {
  const scrollStage = useScrollStage()

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
      className='mr-1.5 block cursor-pointer p-1 xs:hidden'
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
