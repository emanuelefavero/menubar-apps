import { headerLinks } from '@/data/headerLinks'
import DesktopLink from './Link'

interface Props {
  className?: string
}

export default function Component({ className = '' }: Props) {
  return (
    <nav
      role='menu'
      data-testid='desktop-menu'
      className={`group hidden -space-x-2 select-none xs:flex ${className}`}
    >
      {headerLinks.map((link) => (
        <DesktopLink key={`desktop-link-${link.href}`} href={link.href}>
          {link.label}
        </DesktopLink>
      ))}
    </nav>
  )
}
