import CenteredMessage from '@/components/shared/CenteredMessage'
import { supportLink } from '@/data/supportLink'

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
