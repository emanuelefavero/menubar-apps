import { useScrolledHalfway } from '@/hooks/useScrolledHalfway'
import clsx from 'clsx'
import { Ref } from 'react'

interface Props {
  open: boolean
  onClick?: () => void
  ref?: Ref<HTMLButtonElement>
}

export default function Component({ open, onClick, ref }: Props) {
  const scrolledHalfway = useScrolledHalfway()

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
          open && 'translate-y-1.5 rotate-45 bg-red-800',
          !open && scrolledHalfway ? 'bg-white' : 'bg-gray-700',
        )}
      ></span>
      <span
        className={clsx(
          'mb-1 block h-0.5 w-6 rounded-full transition-opacity duration-150',
          open && 'opacity-0',
          !open && scrolledHalfway ? 'bg-white' : 'bg-gray-700',
        )}
      ></span>
      <span
        className={clsx(
          'block h-0.5 w-6 rounded-full transition-transform duration-300',
          open && '-translate-y-1.5 -rotate-45 bg-red-800',
          !open && scrolledHalfway ? 'bg-white' : 'bg-gray-700',
        )}
      ></span>
    </button>
  )
}
