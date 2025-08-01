import { footerLinks } from './footerLinks'
import { headerLinks } from './headerLinks'

export interface Route {
  href: Href
  label: string
}

export const routes: Route[] = [
  {
    href: '/',
    label: 'Home',
  },
  ...headerLinks,
  ...footerLinks,
]
