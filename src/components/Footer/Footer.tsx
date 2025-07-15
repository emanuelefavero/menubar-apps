import { devName, devUrl, title } from '@/config/metadata'

export default function Component() {
  const year = new Date().getFullYear()

  return (
    <footer className='mt-8 flex w-full flex-col items-center justify-center bg-(--background) px-4 py-6 text-(--foreground) 5xs:px-6'>
      <div className='flex w-full flex-wrap items-center justify-center gap-4'>
        {/* Logo */}
        <span className='flex items-center gap-2 text-sm'>
          <span className='text-center font-semibold 4xs:text-left'>
            {title}
          </span>
          <span className='hidden text-(--foreground-secondary) 4xs:inline-block'>
            &copy; {year}
          </span>
        </span>

        {/* Divider */}
        <span className='mx-2 hidden h-4 w-px rounded bg-(--foreground-secondary) select-none xs:inline-block'></span>

        {/* Developer Link */}
        <span className='text-center text-xs'>
          <span className='mr-0.5 text-(--foreground-secondary)'>
            Developed by{' '}
          </span>
          <a
            href={devUrl}
            className='font-medium underline underline-offset-4 transition duration-250 hover:text-(--foreground-secondary) active:scale-[0.97]'
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Visit ${devName}'s website`}
            title={`Visit ${devName}'s website`}
          >
            {devName}
          </a>
        </span>
      </div>
    </footer>
  )
}
