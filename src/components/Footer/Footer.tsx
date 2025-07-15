import { devName, devUrl, title } from '@/config/metadata'
import Link from 'next/link'

export default function Component() {
  const year = new Date().getFullYear()
  return (
    <footer className='mt-8 flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/30 px-6 py-4 text-neutral-700 shadow-lg backdrop-blur dark:bg-slate-800/30 dark:text-neutral-300'>
      <div className='flex w-full flex-wrap items-center justify-center gap-4'>
        <span className='flex items-center gap-2 text-sm font-semibold'>
          <span>{title}</span>
          <span className='opacity-70'>&copy; {year}</span>
        </span>
        <span className='mx-2 h-4 w-px rounded bg-white/40 dark:bg-slate-400/40'></span>
        <span className='text-xs'>
          Developed by{' '}
          <Link
            href={devUrl}
            className='underline-offset-2 hover:underline'
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Visit ${devName}'s website`}
            title={`Visit ${devName}'s website`}
          >
            {devName}
          </Link>
        </span>
      </div>
    </footer>
  )
}
