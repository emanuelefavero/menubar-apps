import Link from 'next/link'
import DeveloperLink from './DeveloperLink'
import Divider from './Divider'
import Logo from './Logo'
import Row from './Row'

export default function Component() {
  return (
    <footer className='flex w-full flex-col items-center justify-center bg-(--background) px-4 py-6 text-(--foreground) 5xs:px-6'>
      <Row>
        <Link href='terms-of-use' className='text-sm font-medium uppercase'>
          Terms of Use
        </Link>
        <Link href='privacy-policy' className='text-sm font-medium uppercase'>
          Privacy Policy
        </Link>
      </Row>
      <Row>
        <Logo />
        <Divider />
        <DeveloperLink />
      </Row>
    </footer>
  )
}
