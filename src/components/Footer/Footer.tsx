import { devName, devUrl, title } from '@/config/metadata'
import Link from 'next/link'

export default function Component() {
  const year = new Date().getFullYear()

  return (
    <footer className='mt-8 flex w-full flex-col items-center justify-center bg-(--background) px-4 py-6 text-(--foreground) 5xs:px-6'>
      <div className='flex w-full flex-wrap items-center justify-center gap-4'>
        <span className='flex items-center gap-2 text-sm'>
          <span className='text-center font-semibold 4xs:text-left'>
            {title}
          </span>
          <span className='hidden text-(--foreground-secondary) 4xs:inline-block'>
            &copy; {year}
          </span>
        </span>
        <span className='mx-2 hidden h-4 w-px rounded bg-white/40 xs:inline-block dark:bg-slate-400/40'></span>
        <span className='text-center text-xs'>
          <span className='mr-0.5 text-(--foreground-secondary)'>
            Developed by{' '}
          </span>
          <Link
            href={devUrl}
            className='font-semibold underline-offset-2 hover:underline'
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
