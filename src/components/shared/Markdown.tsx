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

  // TIP: We set paragraphs to relative to ensure they appear on top of the BackgroundTexture component (img elements will also be affected)
  const pStyles = clsx('prose-p:relative')

  const linkStyles = clsx(
    'prose-a:underline-offset-4 prose-a:rounded-md prose-a:transition prose-a:duration-250 prose-a:hover:text-(--foreground-secondary)',
    // Focus styles for links
    'prose-a:px-0.5 prose-a:focus-visible:no-underline prose-a:outline-none prose-a:ring-0 prose-a:focus-visible:ring-2 prose-a:focus-visible:ring-(--primary)',
  )

  const lineStyles = clsx(
    'prose-hr:p-0 prose-hr:m-0 prose-hr:mb-5 prose-hr:border-gray-300 dark:prose-hr:border-gray-700',
  )

  return (
    <article
      dangerouslySetInnerHTML={{ __html: html }}
      className={clsx(
        baseStyles,
        pStyles,
        headingsStyles,
        linkStyles,
        lineStyles,
        className,
      )}
    />
  )
}
