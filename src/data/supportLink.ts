import { supportEmail } from '@/config/metadata'
import type { Route } from '@/types/route'

export const supportLink: Route = {
  href: `mailto:${supportEmail}`,
  label: 'Support',
}
