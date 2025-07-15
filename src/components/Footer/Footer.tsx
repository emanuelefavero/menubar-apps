import LinkExternal from '@/components/shared/LinkExternal'
import { devName, devUrl, title } from '@/config/metadata'

function Logo() {
  const year = new Date().getFullYear()

  return (
    <span className='flex items-center gap-2 text-sm'>
      <span className='text-center font-semibold 4xs:text-left'>{title}</span>
      <span className='hidden text-(--foreground-secondary) 4xs:inline-block'>
        &copy; {year}
      </span>
    </span>
  )
}

function Divider() {
  return (
    <span className='mx-2 hidden h-4 w-px rounded bg-(--foreground-secondary) select-none xs:inline-block'></span>
  )
}

function DeveloperLink() {
  return (
    <div className='text-center text-xs'>
      <span className='mr-0.5 text-(--foreground-secondary)'>
        Developed by{' '}
      </span>
      <LinkExternal
        href={devUrl}
        aria-label={`Visit ${devName}'s website`}
        title={`Visit ${devName}'s website`}
      >
        {devName}
      </LinkExternal>
    </div>
  )
}

export default function Component() {
  return (
    <footer className='mt-8 flex w-full flex-col items-center justify-center bg-(--background) px-4 py-6 text-(--foreground) 5xs:px-6'>
      <div className='flex w-full flex-wrap items-center justify-center gap-4'>
        <Logo />
        <Divider />
        <DeveloperLink />
      </div>
    </footer>
  )
}
