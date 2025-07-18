export interface HeaderLink {
  href: string
  label: string
}

export const headerLinks: readonly HeaderLink[] = [
  { href: '/about-us', label: 'About Us' },
  { href: '/support', label: 'Support' },
]
