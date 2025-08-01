import { footerLinks } from './footerLinks'
import { headerLinks } from './headerLinks'

export const routes: Route[] = [
  {
    href: '/',
    label: 'Home',
  },
  ...headerLinks,
  ...footerLinks,
]
