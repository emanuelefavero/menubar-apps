import LinkButton from '@/components/shared/LinkButton'
import Markdown from '@/components/shared/Markdown'
import MarkdownPageHeader from '@/components/shared/MarkdownPageHeader'
import { getMarkdownPage } from '@/config/markdownPages'
import fs from 'fs/promises'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import path from 'path'

interface Props {
  params: Promise<{ slug: string }>
}

// * Metadata
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

// * Static Params
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'src/content')
  const files = await fs.readdir(dir)
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({
      slug: file.replace('.md', ''),
    }))
}

/*
NOTE: This is a dynamic route segment. To add new markdown pages:
  1. Create a new markdown file in the `src/content` directory (the file name should match the slug).
  2. Add the corresponding entry in the `markdownPages` object in `src/config/markdownPages.tsx`.
*/

// * Page
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
        <LinkButton className='text-sm'>← Go Back Home</LinkButton>
      </div>
    </>
  )
}
