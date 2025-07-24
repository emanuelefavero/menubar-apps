import GoBackHomeButton from '@/components/shared/GoBackHomeButton'
import Markdown from '@/components/shared/Markdown'
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPageData } from '../pageData'

// TODO remove this (update tests that use this)
// import { pageMetadata } from '@/config/metadata'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug

  const pageData = getPageData(slug)

  if (!pageData) {
    return {
      title: 'Page Not Found',
      description: 'The requested page does not exist.',
    }
  }

  return {
    title: pageData.titleMetadata,
    description: pageData.descriptionMetadata,
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const pageData = getPageData(slug)

  if (!pageData) notFound()

  return (
    <>
      <div className='mb-8 flex flex-col items-center justify-center gap-6 3xs:flex-row'>
        <Image
          src={pageData.imageSrc}
          alt={pageData.imageAlt}
          width={64}
          height={64}
          className='select-none'
          priority
        />
        <p className='text-xl font-light uppercase xs:text-4xl'>
          {pageData.description}
        </p>
      </div>

      {/* Markdown content */}
      <Markdown file={`${slug}.md`} />

      {/* Go back home button */}
      <div className='mt-12 flex w-full items-center justify-center'>
        <GoBackHomeButton className='text-sm' />
      </div>
    </>
  )
}
