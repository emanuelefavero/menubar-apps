export interface FooterLink {
  href: Href
  label: string
}

export const footerLinks: readonly FooterLink[] = [
  { href: '/terms-of-use', label: 'Terms of Use' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
]
