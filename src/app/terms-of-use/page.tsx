import { getMarkdownAsHtml } from '@/lib/markdown'
import clsx from 'clsx'
import Image from 'next/image'

export default async function Page() {
  const html = await getMarkdownAsHtml('terms-of-use.md')

  // NOTE: Styles for markdown content use `prose` classes from the `@tailwindcss/typography` plugin.
  // @see https://github.com/tailwindlabs/tailwindcss-typography
  const baseStyles = clsx('prose max-w-screen-lg lg:prose-lg dark:prose-invert')

  const linkStyles = clsx(
    'prose-a:underline-offset-4 prose-a:transition prose-a:duration-250 prose-a:hover:text-(--foreground-secondary)',
  )

  return (
    <div className='max-w-screen-lg px-4 py-44'>
      <div className='mb-8 flex flex-col items-center justify-center gap-6 3xs:flex-row'>
        <Image
          src='/images/terms-of-use-icon.png'
          alt='Terms of Use Icon'
          width={64}
          height={64}
        />
        <p className='text-xl font-light uppercase xs:text-4xl'>
          Here{"'"}s some <strong>important info</strong> about using our
          services
        </p>
      </div>

      {/* Markdown content */}
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className={clsx(baseStyles, linkStyles)}
      />
    </div>
  )
}
