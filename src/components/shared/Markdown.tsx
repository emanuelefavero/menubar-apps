import { getMarkdownAsHtml } from '@/lib/markdown'
import { cn } from '@/lib/utils'

type MarkdownFile = `${string}.md` // e.g. 'terms-of-use.md'

interface Props {
  file: MarkdownFile
  className?: string
}

export default async function Component({ file, className }: Props) {
  let html = await getMarkdownAsHtml(file)

  // Hide <hr> from screen readers
  html = html.replace(/<hr(\s*\/?)>/g, '<hr aria-hidden="true"$1>')

  // NOTE: Styles for markdown content use `prose` classes from the `@tailwindcss/typography` plugin.
  // @see https://github.com/tailwindlabs/tailwindcss-typography
  const baseStyles = cn('prose max-w-screen-lg lg:prose-lg dark:prose-invert')

  const headingsStyles = cn(
    'prose-headings:mb-3 prose-headings:font-medium prose-headings:uppercase',
    // Make headings smaller
    'prose-h1:text-3xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-h5:text-sm prose-h6:text-xs',
  )

  // TIP: We set paragraphs to relative to ensure they appear on top of the BackgroundTexture component (img elements will also be affected)
  const pStyles = cn('prose-p:relative')

  const linkStyles = cn(
    'prose-a:rounded-md prose-a:underline-offset-4 prose-a:transition prose-a:duration-250 prose-a:hover:text-(--foreground-secondary)',
    // Focus styles for links
    'prose-a:px-0.5 prose-a:ring-0 prose-a:outline-none prose-a:focus-visible:no-underline prose-a:focus-visible:ring-2 prose-a:focus-visible:ring-(--primary)',
  )

  const lineStyles = cn(
    'prose-hr:m-0 prose-hr:mb-5 prose-hr:border-gray-300 prose-hr:p-0 dark:prose-hr:border-gray-700',
  )

  return (
    <article
      dangerouslySetInnerHTML={{ __html: html }}
      className={cn(
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
