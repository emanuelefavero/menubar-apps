import GoBackHomeButton from '@/components/shared/GoBackHomeButton'
import Markdown from '@/components/shared/Markdown'
import { getMarkdownPage } from '@/config/markdownPages'
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug

  const markdownPage = getMarkdownPage(slug)

  if (!markdownPage) {
    return {
      title: 'Page Not Found',
      description: 'The requested page does not exist.',
    }
  }

  return {
    title: markdownPage.titleMetadata,
    description: markdownPage.descriptionMetadata,
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const markdownPage = getMarkdownPage(slug)

  if (!markdownPage) notFound()

  return (
    <>
      <div className='mb-8 flex flex-col items-center justify-center gap-6 3xs:flex-row'>
        <Image
          src={markdownPage.imageSrc}
          alt={markdownPage.imageAlt}
          width={64}
          height={64}
          className='select-none'
          priority
        />
        <p className='text-xl font-light uppercase xs:text-4xl'>
          {markdownPage.description}
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
