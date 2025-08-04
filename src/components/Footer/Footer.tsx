import { footerLinks } from '@/data/footerLinks'
import clsx from 'clsx'
import DeveloperLink from './DeveloperLink'
import Divider from './Divider'
import Link from './Link'
import Logo from './Logo'
import Row from './Row'

export default function Component() {
  return (
    <footer className='flex w-full flex-col items-center justify-center gap-4 bg-(--background) px-4 py-6 text-(--foreground) 5xs:px-6'>
      <Row>
        {footerLinks.map((link, index) => (
          <Link
            key={`footer-link-${link.href}`}
            href={link.href}
            label={link.label}
            className={clsx(
              'rounded-full xs:rounded-none',
              index === 0 ? 'xs:rounded-l-full' : '',
            )}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href='mailto:info@emanuelefavero.com'
          label='Support'
          className='rounded-full xs:rounded-none xs:rounded-r-full'
        >
          Support
        </Link>
      </Row>
      <Row variant='bottom'>
        <Logo />
        <Divider />
        <DeveloperLink />
      </Row>
    </footer>
  )
}
