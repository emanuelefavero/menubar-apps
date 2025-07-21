import { getMarkdownAsHtml } from '@/lib/markdown'
import clsx from 'clsx'

export default async function Page() {
  const html = await getMarkdownAsHtml('terms-of-use.md')

  // NOTE: Styles for markdown content use `prose` classes from the `@tailwindcss/typography` plugin.
  // @see https://github.com/tailwindlabs/tailwindcss-typography
  const baseStyles = clsx(
    'prose max-w-screen-lg px-4 py-44 lg:prose-lg dark:prose-invert',
  )

  const linkStyles = clsx(
    'prose-a:underline-offset-4 prose-a:transition prose-a:duration-250 prose-a:hover:text-(--foreground-secondary)',
  )

  return (
    <>
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className={clsx(baseStyles, linkStyles)}
      />
    </>
  )
}
