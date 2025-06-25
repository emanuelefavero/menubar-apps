import clsx from 'clsx'

interface Props {
  open: boolean
  onClick?: () => void
}

export default function Component({ open, onClick }: Props) {
  return (
    <button
      className='block cursor-pointer p-1 xs:hidden'
      aria-label='Open menu'
      title='Open menu'
      onClick={onClick} // Toggle menu on click
    >
      <span
        className={clsx(
          'mb-1 block h-0.5 w-6 rounded-full transition duration-300',
          open && 'translate-y-1.5 rotate-45 bg-red-800',
          !open && 'bg-gray-700',
        )}
      ></span>
      <span
        className={clsx(
          'mb-1 block h-0.5 w-6 rounded-full bg-gray-700 transition-opacity duration-150',
          open && 'opacity-0',
        )}
      ></span>
      <span
        className={clsx(
          'block h-0.5 w-6 rounded-full transition duration-300',
          open && '-translate-y-1.5 -rotate-45 bg-red-800',
          !open && 'bg-gray-700',
        )}
      ></span>
    </button>
  )
}
