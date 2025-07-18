import DeveloperLink from './DeveloperLink'
import Divider from './Divider'
import Link from './Link'
import Logo from './Logo'
import Row from './Row'

const links = [
  { href: 'terms-of-use', label: 'Terms of Use' },
  { href: 'privacy-policy', label: 'Privacy Policy' },
]

export default function Component() {
  return (
    <footer className='flex w-full flex-col items-center justify-center bg-(--background) px-4 py-6 text-(--foreground) 5xs:px-6'>
      <Row>
        {links.map((link) => (
          <Link key={`footer-link-${link.href}`} href={link.href}>
            {link.label}
          </Link>
        ))}
      </Row>
      <Row variant='bottom'>
        <Logo />
        <Divider />
        <DeveloperLink />
      </Row>
    </footer>
  )
}
