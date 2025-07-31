import { footerLinks } from '@/data/footerLinks'
import clsx from 'clsx'
import DeveloperLink from './DeveloperLink'
import Divider from './Divider'
import Link from './Link'
import Logo from './Logo'
import Row from './Row'

export default function Component() {
  return (
    <footer className='flex w-full flex-col items-center justify-center bg-(--background) px-4 py-6 text-(--foreground) 5xs:px-6'>
      <Row>
        {footerLinks.map((link, index) => (
          <Link
            key={`footer-link-${link.href}`}
            href={link.href}
            label={link.label}
            className={clsx(
              index === 0 ? 'rounded-l-full' : '',
              index === footerLinks.length - 1 ? 'rounded-r-full' : '',
            )}
          >
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
