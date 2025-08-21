import { supportLink } from '@/data/supportLink'
import type { Route } from '@/types/route'

export const headerLinks: readonly Route[] = [
  { href: '/about-us', label: 'About Us' },
  supportLink,
]
