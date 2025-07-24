import GoBackHomeButton from '@/components/shared/GoBackHomeButton'
import Markdown from '@/components/shared/Markdown'
import { pageMetadata } from '@/config/metadata'
import type { Metadata } from 'next'
import Image from 'next/image'

const page = 'terms-of-use'

export const metadata: Metadata = {
  title: pageMetadata[page].title,
  description: pageMetadata[page].description,
}

export default async function Page() {
  return (
    <div className='max-w-screen-lg px-4 py-24'>
      <div className='mb-8 flex flex-col items-center justify-center gap-6 3xs:flex-row'>
        <Image
          src='/images/terms-of-use-icon.png'
          alt='Terms of Use Icon'
          width={64}
          height={64}
          className='select-none'
          priority
        />
        <p className='text-xl font-light uppercase xs:text-4xl'>
          Here{"'"}s some{' '}
          <strong className='font-medium'>important info</strong> about using
          our services
        </p>
      </div>

      {/* Markdown content */}
      <Markdown file={`${page}.md`} />

      {/* Go back home button */}
      <div className='mt-12 flex w-full items-center justify-center'>
        <GoBackHomeButton className='text-sm' />
      </div>
    </div>
  )
}
