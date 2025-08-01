export interface HeaderLink {
  href: Href
  label: string
}

export const headerLinks: readonly HeaderLink[] = [
  { href: '/about-us', label: 'About Us' },
  { href: '/support', label: 'Support' },
]
