import { headerLinks } from '@/data/headerLinks'
import DesktopLink from './DesktopLink'

interface Props {
  className?: string
}

export default function Component({ className = '' }: Props) {
  return (
    <nav className={`group hidden -space-x-2 select-none xs:flex ${className}`}>
      {headerLinks.map((link, index) => (
        <DesktopLink key={`${index}-${link.href}`} href={link.href}>
          {link.label}
        </DesktopLink>
      ))}
    </nav>
  )
}
