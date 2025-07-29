import clsx from 'clsx'
import { useDragStore } from '../store/useDragStore'
import AsciiArt from './AsciiArt'

// TIP: This component contains an ASCII art Easter egg that appears when the user drags the hero card

interface Props {
  className?: string
  children: React.ReactNode
}

export default function Component({ className = '', children }: Props) {
  const { isDragging } = useDragStore()

  return (
    <div className={clsx('relative w-full max-w-[400px]', className)}>
      <div
        className={clsx(
          'pointer-events-none absolute inset-0 flex items-center justify-center text-gray-200 transition-opacity duration-500 select-none text-shadow-(--text-shadow-sm)',
          isDragging ? 'opacity-100' : 'opacity-0',
        )}
        style={{
          zIndex: 0,
          fontFamily: 'monospace',
          whiteSpace: 'pre',
          fontSize: 14,
        }}
        aria-hidden='true'
      >
        <AsciiArt />
      </div>
      {children}
    </div>
  )
}
