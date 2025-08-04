import { footerLinks } from '@/data/footerLinks'
import { supportLink } from '@/data/supportLink'
import clsx from 'clsx'
import DeveloperLink from './DeveloperLink'
import Divider from './Divider'
import Link from './Link'
import Logo from './Logo'
import Row from './Row'

export default function Component() {
  return (
    <footer className='flex w-full flex-col items-center justify-center gap-2 bg-(--background) px-4 py-6 text-(--foreground) 5xs:px-6'>
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

        {/* Support Link */}
        <Link
          href={supportLink.href}
          label={supportLink.label}
          className='rounded-full xs:rounded-none xs:rounded-r-full'
        >
          <span className='hidden sm:inline-block'>Contact&nbsp;</span>
          {supportLink.label}
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
