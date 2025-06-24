import DesktopLink from './DesktopLink'

interface Props {
  className?: string
}

export default function Component({ className = '' }: Props) {
  return (
    <nav className={`group hidden -space-x-2 select-none xs:flex ${className}`}>
      <DesktopLink href='/about-us'>About Us</DesktopLink>
      <DesktopLink href='/support'>Support</DesktopLink>
    </nav>
  )
}
