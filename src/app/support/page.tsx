import LinkButton from '@/components/shared/LinkButton'
import { supportLink } from '@/data/supportLink'

export default function Page() {
  return (
    <>
      <div className='relative flex min-h-screen w-full flex-col items-center justify-center gap-4 p-4 text-center'>
        <span className='text-4xl font-normal'>Need help?</span>

        <h1 className='text-4xl font-bold'>Reach out for support</h1>

        <p className='text-lg'>
          Click below to send an email and you&#39;ll get a response as soon as
          possible.
        </p>

        <LinkButton className='mt-1' href={supportLink.href}>
          Contact {supportLink.label}
        </LinkButton>
      </div>
    </>
  )
}
