import { getMarkdownAsHtml } from '@/lib/markdown'

export default async function Page() {
  const html = await getMarkdownAsHtml('terms-of-use.md')

  return (
    <>
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className='prose max-w-screen-lg px-4 py-24 lg:prose-lg dark:prose-invert prose-a:underline-offset-4 prose-a:transition prose-a:duration-250 prose-a:hover:text-(--foreground-secondary) prose-a:active:scale-[0.97]'
      />
    </>
  )
}
