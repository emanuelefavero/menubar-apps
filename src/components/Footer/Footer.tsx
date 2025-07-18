import Link from 'next/link'
import DeveloperLink from './DeveloperLink'
import Divider from './Divider'
import Logo from './Logo'

export default function Component() {
  return (
    <footer className='flex w-full flex-col items-center justify-center bg-(--background) px-4 py-6 text-(--foreground) 5xs:px-6'>
      <Top />
      <Bottom />
    </footer>
  )
}

function Top() {
  return (
    <div className='flex w-full flex-wrap items-center justify-center gap-4 py-2'>
      <Link href='terms-of-use' className='text-sm font-medium uppercase'>
        Terms of Use
      </Link>
      <Link href='privacy-policy' className='text-sm font-medium uppercase'>
        Privacy Policy
      </Link>
    </div>
  )
}

function Bottom() {
  return (
    <div className='flex w-full flex-wrap items-center justify-center gap-4 py-2'>
      <Logo />
      <Divider />
      <DeveloperLink />
    </div>
  )
}
