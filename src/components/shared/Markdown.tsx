import { getMarkdownAsHtml } from '@/lib/markdown'
import clsx from 'clsx'

type MarkdownFile = `${string}.md` // e.g. 'terms-of-use.md'

interface Props {
  file: MarkdownFile
  className?: string
}

export default async function Component({ file, className = '' }: Props) {
  const html = await getMarkdownAsHtml(file)

  // NOTE: Styles for markdown content use `prose` classes from the `@tailwindcss/typography` plugin.
  // @see https://github.com/tailwindlabs/tailwindcss-typography
  const baseStyles = clsx('prose max-w-screen-lg lg:prose-lg dark:prose-invert')

  const headingsStyles = clsx(
    'prose-headings:mb-3 prose-headings:uppercase prose-headings:font-medium',
    // Make headings smaller
    'prose-h1:text-3xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-h5:text-sm prose-h6:text-xs',
  )

  const linkStyles = clsx(
    'prose-a:z-10 prose-a:underline-offset-4 prose-a:transition prose-a:duration-250 prose-a:hover:text-(--foreground-secondary)',
  )

  const lineStyles = clsx(
    'prose-hr:p-0 prose-hr:m-0 prose-hr:mb-5 prose-hr:border-gray-300 dark:prose-hr:border-gray-700',
  )

  return (
    <article
      dangerouslySetInnerHTML={{ __html: html }}
      className={clsx(
        baseStyles,
        headingsStyles,
        linkStyles,
        lineStyles,
        className,
      )}
    />
  )
}
