import { headerLinks } from '@/data/headerLinks'
import { cn } from '@/lib/utils'
import DesktopLink from './Link'

interface Props {
  className?: string
}

export default function Component({ className }: Props) {
  return (
    <nav
      data-testid='desktop-menu'
      className={cn('group hidden -space-x-2 select-none xs:flex', className)}
    >
      {headerLinks.map((link) => (
        <DesktopLink
          key={`desktop-link-${link.href}`}
          href={link.href}
          label={link.label}
        />
      ))}
    </nav>
  )
}
