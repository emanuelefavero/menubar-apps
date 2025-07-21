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
    <div className='px-4 py-44'>
      <div>
        <Image
          src='/images/terms-of-use-icon.png'
          alt='Terms of Use Icon'
          width={64}
          height={64}
          className='mb-8'
        />

        <p>
          Here{"'"}s some <strong>important info</strong> about using our
          services
        </p>
      </div>

      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className={clsx(baseStyles, linkStyles)}
      />
    </div>
  )
}
