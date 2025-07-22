import { pageMetadata } from '@/config/metadata'
import { getMarkdownAsHtml } from '@/lib/markdown'
import clsx from 'clsx'
import type { Metadata } from 'next'
import Image from 'next/image'

const page = 'terms-of-use'

export const metadata: Metadata = {
  title: pageMetadata[page].title,
  description: pageMetadata[page].description,
}

export default async function Page() {
  const html = await getMarkdownAsHtml('terms-of-use.md')

  // NOTE: Styles for markdown content use `prose` classes from the `@tailwindcss/typography` plugin.
  // @see https://github.com/tailwindlabs/tailwindcss-typography
  const baseStyles = clsx('prose max-w-screen-lg lg:prose-lg dark:prose-invert')

  const headingsStyles = clsx(
    'prose-headings:mb-3 prose-headings:uppercase prose-headings:font-medium',
    // Make headings smaller
    'prose-h1:text-3xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-h5:text-sm prose-h6:text-xs',
  )

  const linkStyles = clsx(
    'prose-a:underline-offset-4 prose-a:transition prose-a:duration-250 prose-a:hover:text-(--foreground-secondary)',
  )

  const lineStyles = clsx('prose-hr:p-0 prose-hr:m-0 prose-hr:mb-5')

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
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className={clsx(baseStyles, headingsStyles, linkStyles, lineStyles)}
      />
    </div>
  )
}
