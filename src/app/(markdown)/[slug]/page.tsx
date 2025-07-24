import GoBackHomeButton from '@/components/shared/GoBackHomeButton'
import Markdown from '@/components/shared/Markdown'
import MarkdownPageHeader from '@/components/shared/MarkdownPageHeader'
import { getMarkdownPage } from '@/config/markdownPages'
import type { Metadata } from 'next'
// ...existing code...
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
      <MarkdownPageHeader
        imageSrc={markdownPage.imageSrc}
        imageAlt={markdownPage.imageAlt}
        description={markdownPage.description}
      />

      {/* Markdown content */}
      <Markdown file={`${slug}.md`} />

      {/* Go back home button */}
      <div className='mt-12 flex w-full items-center justify-center'>
        <GoBackHomeButton className='text-sm' />
      </div>
    </>
  )
}
