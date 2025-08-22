import CenteredMessage from '@/components/shared/CenteredMessage'
import { title } from '@/config/metadata'
import { supportLink } from '@/data/supportLink'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${title} - Support`,
  description:
    'Contact us for assistance on any issues you may have with our apps.',
}

export default function Page() {
  return (
    <CenteredMessage
      kicker='Need help?'
      title='Reach out for support'
      description={
        "Click below to send an email and you'll get a response as soon as possible."
      }
      buttonLabel={`Contact ${supportLink.label}`}
      buttonHref={supportLink.href}
    />
  )
}
