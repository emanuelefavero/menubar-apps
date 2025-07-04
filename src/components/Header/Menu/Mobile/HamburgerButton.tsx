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

  return (
    <button
      ref={ref}
      className='mr-1.5 block cursor-pointer p-1 xs:hidden'
      aria-label='Open menu'
      title='Open menu'
      onClick={onClick} // Toggle menu on click
    >
      <span
        className={clsx(
          'mb-1 block h-0.5 w-6 rounded-full transition-transform duration-300',
          open && 'translate-y-1.5 rotate-45',
          open &&
            (scrollStage === 'top'
              ? 'bg-rose-800'
              : scrollStage === 'halfway'
                ? 'bg-rose-200'
                : 'bg-rose-800 dark:bg-rose-200'),
          !open &&
            (scrollStage === 'top'
              ? 'bg-gray-700'
              : scrollStage === 'halfway'
                ? 'bg-gray-200'
                : 'bg-(--foreground)'),
        )}
      ></span>
      <span
        className={clsx(
          'mb-1 block h-0.5 w-6 rounded-full transition-opacity duration-150',
          open && 'opacity-0',
          !open &&
            (scrollStage === 'top'
              ? 'bg-gray-700'
              : scrollStage === 'halfway'
                ? 'bg-gray-200'
                : 'bg-(--foreground)'),
        )}
      ></span>
      <span
        className={clsx(
          'block h-0.5 w-6 rounded-full transition-transform duration-300',
          open && '-translate-y-1.5 -rotate-45',
          open &&
            (scrollStage === 'top'
              ? 'bg-rose-800'
              : scrollStage === 'halfway'
                ? 'bg-rose-200'
                : 'bg-rose-800 dark:bg-rose-200'),
          !open &&
            (scrollStage === 'top'
              ? 'bg-gray-700'
              : scrollStage === 'halfway'
                ? 'bg-gray-200'
                : 'bg-(--foreground)'),
        )}
      ></span>
    </button>
  )
}
